"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Navbar from "../../components/Navbar.jsx";
import BookForm from "../../components/BookForm.jsx";
import BookCard from "../../components/BookCard.jsx";
import EditBookModal from "../../components/EditBookModal.jsx";

import api from "../../lib/axios.js";

export default function Dashboard() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("All");
    const [selectedBook, setSelectedBook] = useState(null);

    const fetchBooks = async () => {
        try {
            const { data } = await api.get("/books");

            setBooks(data);
        } catch (error) {
            toast.error("Failed to load books");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const addBook = async (bookData) => {
        try {
            const { data } = await api.post(
                "/books",
                bookData
            );

            setBooks([
                data,
                ...books,
            ]);

            toast.success("Book added");
        } catch (error) {
            toast.error("Could not add book");
        }
    };

    const editBook = async (updatedBook) => {
        try {
            const { data } = await api.put(
                `/books/${updatedBook._id}`,
                updatedBook
            );

            setBooks(
                books.map((book) =>
                    book._id === data._id ? data : book
                )
            );

            toast.success("Book updated");

            setSelectedBook(null);
        } catch (error) {
            toast.error("Update failed");
        }
    };

    const deleteBook = async (id) => {
        try {
            await api.delete(`/books/${id}`);

            setBooks(
                books.filter(
                    (book) => book._id !== id
                )
            );

            toast.success("Book deleted");
        } catch (error) {
            toast.error("Delete failed");
        }
    };

    const updateStatus = async (id, status) => {
        try {
            const { data } = await api.put(
                `/books/${id}`,
                {
                    status,
                }
            );

            setBooks(
                books.map((book) =>
                    book._id === id
                        ? data
                        : book
                )
            );
        } catch (error) {
            toast.error("Update failed");
        }
    };

    const filteredBooks =
        filter === "All"
            ? books
            : books.filter(
                  (book) => book.status === filter
              );

    const totalBooks = books.length;

    const wantToRead = books.filter(
        (book) => book.status === "Want to Read"
    ).length;

    const reading = books.filter(
        (book) => book.status === "Reading"
    ).length;

    const completed = books.filter(
        (book) => book.status === "Completed"
    ).length;

    return (
        <>
            <Navbar />

            <main className="max-w-6xl mx-auto px-6 py-8">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold">
                        My Books
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage your personal collection
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-5 mb-8">

                    <div className="bg-white rounded-xl shadow p-5">
                        <p className="text-gray-500">
                            Total Books
                        </p>

                        <h2 className="text-3xl font-bold">
                            {totalBooks}
                        </h2>
                    </div>


                    <div className="bg-white rounded-xl shadow p-5">
                        <p className="text-gray-500">
                            Want To Read
                        </p>

                        <h2 className="text-3xl font-bold">
                            {wantToRead}
                        </h2>
                    </div>


                    <div className="bg-white rounded-xl shadow p-5">
                        <p className="text-gray-500">
                            Reading
                        </p>

                        <h2 className="text-3xl font-bold">
                            {reading}
                        </h2>
                    </div>


                    <div className="bg-white rounded-xl shadow p-5">
                        <p className="text-gray-500">
                            Completed
                        </p>

                        <h2 className="text-3xl font-bold">
                            {completed}
                        </h2>
                    </div>

                </div>


                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">
                            Add New Book
                        </h2>

                        <BookForm
                            onSubmit={addBook}
                        />
                    </div>

                    <div className="md:col-span-2">

                        <div className="flex gap-3 mb-5 flex-wrap">
                            {[
                                "All",
                                "Want to Read",
                                "Reading",
                                "Completed",
                            ].map((item) => (

                                <button
                                    key={item}
                                    onClick={() =>
                                        setFilter(item)
                                    }
                                    className={`px-4 py-2 rounded-lg ${
                                        filter === item
                                            ? "bg-blue-600 text-white"
                                            : "bg-white shadow"
                                    }`}
                                >
                                    {item}
                                </button>

                            ))}

                        </div>

                        
                        {
                            loading ? (
                                <p>
                                    Loading books...
                                </p>

                            ) : filteredBooks.length === 0 ? (

                                <div className="bg-white rounded-xl shadow p-8 text-center">
                                    <h2 className="text-xl font-semibold">
                                        No books found
                                    </h2>

                                    <p className="text-gray-500 mt-2">
                                        Add your first book
                                    </p>
                                </div>

                            ) : (

                                <div className="grid md:grid-cols-2 gap-5">
                                    {
                                        filteredBooks.map((book) => (
                                            <BookCard
                                                key={book._id}
                                                book={book}
                                                onDelete={deleteBook}
                                                onEdit={setSelectedBook}
                                                updateStatus={updateStatus}
                                            />
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>

                {selectedBook && ( <EditBookModal
                    book={selectedBook}
                    onClose={() => setSelectedBook(null)}
                    onUpdate={editBook}
                />)}
            </main>
        </>
    );
}