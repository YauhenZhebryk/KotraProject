import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import reservationRouter from "./reservation.js";
import reviewsRouter from "./reviews.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// mount reservation routes under /api
app.use('/api', reservationRouter);
// mount reviews routes under /api
app.use('/api', reviewsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Сервер запущен на порту ${PORT}`));
