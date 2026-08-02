import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../context/AuthContext.jsx";

export const metadata = {
    title: "Personal Book Manager",
    description: "Manage your books",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-gray-100">

                <AuthProvider>
                    <Toaster
                        position="top-right"
                    />

                    {children}
                </AuthProvider>

            </body>
        </html>
    );
}