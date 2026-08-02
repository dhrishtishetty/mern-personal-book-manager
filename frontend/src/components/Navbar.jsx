"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const { user, logout } = useAuth();

    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push("/login");
    };


    return (
        <nav className="bg-white-100 shadow">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link
                    href={user ? "/dashboard" : "/"}
                    className="text-2xl font-bold text-blue-600"
                >
                    📚 Book Manager
                </Link>


                <div className="flex items-center gap-5">
                    {
                        user ? (
                            <>
                                <span className="hidden md:block text-gray-600">
                                    Hi, {user.name}
                                </span>


                                <button
                                    onClick={handleLogout}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                                >
                                    Logout
                                </button>
                            </>

                        ) : (

                            <>
                                <Link
                                    href="/login"
                                    className="hover:text-blue-600"
                                >
                                    Login
                                </Link>


                                <Link
                                    href="/register"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                                >
                                    Register
                                </Link>
                            </>
                        )
                    }
                </div>
            </div>
        </nav>
    );
}