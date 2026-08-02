"use client";

import { useState } from "react";

export default function BookForm({ onSubmit }) {
    const [book, setBook] = useState({
        title: "",
        author: "",
        tags: "",
        status: "Want to Read",
    });

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            ...book,
            tags: book.tags
                .split(",")
                .map((tag) => tag.trim())
                .filter(Boolean),
        });

        setBook({
            title: "",
            author: "",
            tags: "",
            status: "Want to Read",
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow space-y-4"
        >
            <input
                name="title"
                placeholder="Book Title"
                value={book.title}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
            />

            <input
                name="author"
                placeholder="Author"
                value={book.author}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
            />

            <input
                name="tags"
                placeholder="Tags (comma separated)"
                value={book.tags}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
            />

            <select
                name="status"
                value={book.status}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
            >
                <option>Want to Read</option>
                <option>Reading</option>
                <option>Completed</option>
            </select>

            <button className="w-full bg-green-600 text-white rounded-lg py-3 hover:bg-blue-700">
                Add Book
            </button>
        </form>
    );
}