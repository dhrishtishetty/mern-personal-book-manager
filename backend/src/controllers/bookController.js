import Book from "../models/Book.js";

export const getBooks = async (req, res) => {
    try {
        const { status, tag } = req.query;

        let filter = {
            user: req.user.id,
        };

        if (status) {
            filter.status = status;
        }

        if (tag) {
            filter.tags = tag;
        }

        const books = await Book.find(filter).sort({
            createdAt: -1,
        });

        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const addBook = async (req, res) => {
    try {
        const { title, author, tags, status } = req.body;

        const newBook = await Book.create({
            title,
            author,
            tags,
            status,
            user: req.user.id,
        });

        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const updateBook = async (req, res) => {
    try {
        const book = await Book.findOne({
            _id: req.params.id,
            user: req.user.id,
        });

        if (!book) {
            return res.status(404).json({
                message: "Book not found",
            });
        }

        book.title = req.body.title || book.title;
        book.author = req.body.author || book.author;
        book.tags = req.body.tags || book.tags;
        book.status = req.body.status || book.status;

        const updatedBook = await book.save();

        res.json(updatedBook);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const deleteBook = async (req, res) => {
    try {
        const book = await Book.findOne({
            _id: req.params.id,
            user: req.user.id,
        });

        if (!book) {
            return res.status(404).json({
                message: "Book not found",
            });
        }

        await book.deleteOne();

        res.json({
            message: "Book deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};