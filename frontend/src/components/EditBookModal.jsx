"use client";

import { useState, useEffect } from "react";

export default function EditBookModal({
    book,
    onClose,
    onUpdate,
}) {

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        tags: "",
        status: "",
    });

    useEffect(() => {
        if (book) {
            setFormData({
                title: book.title,
                author: book.author,
                tags: book.tags.join(", "),
                status: book.status,
            });

        }
    }, [book]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onUpdate({
            ...book,
            ...formData,
            tags: formData.tags
                .split(",")
                .map((tag) => tag.trim())
                .filter(Boolean),
        });
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-5">
                    Edit Book
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                    />

                    <input
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                    />

                    <input
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                    />

                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                    >
                        <option>Want to Read</option>
                        <option>Reading</option>
                        <option>Completed</option>
                    </select>

                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-lg border"
                        >
                            Cancel
                        </button>

                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}