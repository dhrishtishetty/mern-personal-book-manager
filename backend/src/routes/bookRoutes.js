import express from "express";

import jwt from "../middleware/authMiddleware.js";
import { getBooks, addBook, updateBook, deleteBook } from "../controllers/bookController.js";

const router = express.Router();

router.get("/", jwt, getBooks);

router.post("/", jwt, addBook);

router.put("/:id", jwt, updateBook);

router.delete("/:id", jwt, deleteBook);

export default router;