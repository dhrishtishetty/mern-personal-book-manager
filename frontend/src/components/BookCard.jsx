"use client";

export default function BookCard({ book, onDelete, onEdit, updateStatus }) {
    return (
        <div className="bg-yellow-50 border border-blue-100 rounded-xl shadow-sm p-5 hover:shadow-md transition">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-xl font-bold">
                        {book.title}
                    </h2>

                    <p className="text-gray-600">
                        {book.author}
                    </p>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => onEdit(book)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg text-sm"
                    >
                        Edit
                    </button>

                    <button
                        onClick={() => onDelete(book._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
                    >
                        Delete
                    </button>
                </div>
            </div>

            <div className="mt-4">
                <label className="text-sm text-gray-500">
                    Status
                </label>

                <select
                    value={book.status}
                    onChange={(e) =>
                        updateStatus(book._id, e.target.value)
                    }
                    className="w-full mt-2 border rounded-lg p-2"
                >
                    <option>Want to Read</option>
                    <option>Reading</option>
                    <option>Completed</option>
                </select>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
                {book.tags?.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-black text-white border px-3 py-1 rounded-full text-sm"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}