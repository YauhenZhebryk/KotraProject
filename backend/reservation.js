import express from "express";
import axios from "axios";

const reservationRouter = express.Router();

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

reservationRouter.post("/reservation", async (req, res) => {
  const error = validateForm(req.body);

  if (error) {
    return res.status(400).json({ success: false, message: error });
  }

  const { name, phone, description } = req.body;

  const message = `
📩 *Бронирование*:
👤 ${name}
📞 ${phone}
📝 ${description}
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

export { reservationRouter };
