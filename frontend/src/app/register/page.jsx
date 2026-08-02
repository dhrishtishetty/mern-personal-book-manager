"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import api from "../../lib/axios.js";
import { useAuth } from "../../context/AuthContext.jsx";
import Navbar from "../../components/Navbar.jsx";

export default function Register() {
    const router = useRouter();

    const { setUser } = useAuth();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await api.post("/auth/register", formData); 

            document.cookie = `token=${data.token}; path=/`;

            localStorage.setItem("user", JSON.stringify(data));

            setUser(data);

            toast.success("Registration Successful");

            router.push("/dashboard");
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Registration Failed"
            );
        }
    };

    return (
        <>
        <Navbar />

        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Create Account
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-semibold"
                    >
                        Register
                    </button>

                </form>
            </div>
        </div>
        </>
    );
}