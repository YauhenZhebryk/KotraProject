import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';

const reviewsRouter = express.Router();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, 'reviews.json');

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;


const ensureDataFile = async () => {
  try {
    await fs.access(DATA_FILE);
  } catch (err) {
    // create empty array file
    await fs.writeFile(DATA_FILE, '[]', 'utf8');
  }
};

const readReviews = async () => {
  await ensureDataFile();
  const raw = await fs.readFile(DATA_FILE, 'utf8');
  try {
    return JSON.parse(raw);
  } catch (err) {
    return [];
  }
};

const writeReviews = async (reviews) => {
  await fs.writeFile(DATA_FILE, JSON.stringify(reviews, null, 2), 'utf8');
};

const validateReview = (data) => {
  const { name, phone, description, rate } = data;
  if (!name || typeof name !== 'string' || name.trim().length < 2) return 'Введите корректное имя';
  if (!phone || typeof phone !== 'string' || !/^\+?\d{7,15}$/.test(phone)) return 'Введите корректный номер телефона';
  if (!description || typeof description !== 'string' || description.trim().length < 5) return 'Введите описание отзыва';
  if (typeof rate !== 'number' || rate < 1 || rate > 5) return 'Пожалуйста, поставьте оценку от 1 до 5';
  return null;
};

// GET /api/reviews - return all reviews
reviewsRouter.get('/reviews', async (req, res) => {
  try {
    const reviews = await readReviews();
    // return newest first
    reviews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    res.json({ success: true, reviews });
  } catch (err) {
    console.error('Failed to read reviews:', err.message);
    res.status(500).json({ success: false, message: 'Ошибка при чтении отзывов' });
  }
});

// POST /api/reviews - create a new review, save to file and send to telegram
reviewsRouter.post('/reviews', async (req, res) => {
  try {
    const error = validateReview(req.body);
    if (error) return res.status(400).json({ success: false, message: error });

    const { name, phone, description, rate } = req.body;
    const review = {
      id: Date.now().toString(),
      name: name.trim(),
      phone: phone.trim(),
      description: description.trim(),
      rate: Number(rate),
      createdAt: new Date().toISOString(),
    };

    const reviews = await readReviews();
    reviews.push(review);
    await writeReviews(reviews);

    const message = `\n📣 *Новый отзыв*:\n👤 ${review.name}\n📞 ${review.phone}\n⭐ ${review.rate}\n📝 ${review.description}`;
 
		console.log('Попытка отправки в Telegram...');
		console.log('Используемый токен (первые 5 символов):', BOT_TOKEN ? BOT_TOKEN.substring(0, 5) : 'Токен НЕ ЗАДАН (undefined)');
		console.log('Используемый CHAT_ID:', CHAT_ID);

		if (BOT_TOKEN && CHAT_ID) {
      try {
        await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        });
      } catch (tgErr) {
        console.error('Failed to send review to Telegram:', tgErr.message);
        // don't fail the request if telegram fails
      }
    }

    res.status(201).json({ success: true, review });
  } catch (err) {
    console.error('Error saving review:', err.message);
    res.status(500).json({ success: false, message: 'Ошибка при сохранении отзыва' });
  }
});

export { reviewsRouter };
