import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Load .env first, then dynamically import routers so they see the env values.
dotenv.config();

const { reservationRouter } = await import("./reservation.js");
const { reviewsRouter } = await import("./reviews.js");

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', reservationRouter);
app.use('/api', reviewsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
