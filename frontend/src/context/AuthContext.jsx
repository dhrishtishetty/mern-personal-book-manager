"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");

        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("user");

        document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);