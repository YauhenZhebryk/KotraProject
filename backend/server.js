import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import router from "./src/routes/index.js";
import { sequelize } from "./src/config/db.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/api", router);

// Root route
app.get("/", (req, res) => {
  res.send("Express + SQLite + Sequelize backend 🚀");
});

// Connect to DB and start server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sequelize.sync(); // { force: true } to reset tables
    console.log("✅ Database connected and synced.");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("❌ Error starting server:", err);
  }
};

startServer();
