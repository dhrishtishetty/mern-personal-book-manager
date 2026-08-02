import express from "express";

import { registerUser, loginUser, getCurrentUser } from "../controllers/authController.js";
import jwt from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/me", jwt, getCurrentUser);

export default router;