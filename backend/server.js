import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const validateForm = (data) => {
  const { name, phone, description } = data;

  if (!name || name.trim().length < 2) return "Введите корректное имя";
  if (!phone || !/^\+?\d{7,15}$/.test(phone))
    return "Введите корректный номер телефона";
  if (!description || description.trim().length < 5)
    return "Введите описание заявки";

  return null;
};

app.post("/api/reservation", async (req, res) => {
  const error = validateForm(req.body);

  if (error) {
    return res.status(400).json({ success: false, message: error });
  }

  const { name, phone, description } = req.body;

  const message = `
📩 *Новая заявка с сайта*:
👤 Имя: ${name}
📞 Телефон: ${phone}
📝 Описание: ${description}
  `;

  try {
    await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "Markdown",
    });

    res.status(200).json({ success: true, message: "Сообщение отправлено" });
  } catch (err) {
    console.error("Ошибка при отправке в Telegram:", err.message);
    res
      .status(500)
      .json({ success: false, message: "Ошибка при отправке в Telegram" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Сервер запущен на порту ${PORT}`));
