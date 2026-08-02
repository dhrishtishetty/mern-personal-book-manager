import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import next from "next";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dev = process.env.NODE_ENV !== "production";

const nextApp = next({
    dev,
    dir: path.join(__dirname, "../frontend"),
});

const handle = nextApp.getRequestHandler();

const app = express();
const port = process.env.PORT || 5000;

nextApp.prepare().then(() => {
    connectDB();

    if (process.env.NODE_ENV !== "production") {
        app.use(
            cors({
                origin: "http://localhost:3000",
                credentials: true,
            })
        );
    }

    app.use(express.json());
    app.use(cookieParser());

    app.use("/api/auth", authRoutes);
    app.use("/api/books", bookRoutes);

    app.all("*", (req, res) => {
        return handle(req, res);
    });

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});