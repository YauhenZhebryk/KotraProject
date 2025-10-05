import React, { useState } from "react";

interface TelegramFormProps {
  botToken: string;      // Токен твоего Telegram-бота
  chatId: string;        // ID канала или @username
}

const TelegramForm: React.FC<TelegramFormProps> = ({ botToken, chatId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    const text = `
📩 <b>Новая заявка с сайта</b>
👤 Имя: ${formData.name}
📧 Email: ${formData.email}
💬 Сообщение: ${formData.message}
`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: "HTML"
          })
        }
      );

      if (response.ok) {
        setStatus("✅ Сообщение успешно отправлено!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Ошибка при отправке. Проверь токен или chat_id.");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Не удалось отправить сообщение.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-4"
    >
      <h2 className="text-xl font-semibold text-center mb-2">
        Свяжитесь с нами
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Ваше имя"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
      />

      <input
        type="email"
        name="email"
        placeholder="Ваш email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
      />

      <textarea
        name="message"
        placeholder="Сообщение"
        value={formData.message}
        onChange={handleChange}
        required
        rows={4}
        className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
      />

      <button
        type="submit"
        disabled={isSending}
        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
      >
        {isSending ? "Отправка..." : "Отправить"}
      </button>

      {status && (
        <p className="text-center text-sm text-gray-600 mt-2">{status}</p>
      )}
    </form>
  );
};

export default TelegramForm;
