import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(
    cors({
        origin: [
            "http://localhost:3000",
            process.env.NEXT_PUBLIC_API_URL,
        ],
        credentials: true,
    })
);

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Personal Book Manager API is running",
    });
});

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

app.use((req, res) => {
    res.status(404).json({
        message: "Route not found",
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});