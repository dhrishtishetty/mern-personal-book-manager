import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api",
    withCredentials: true
});


api.interceptors.request.use((config) => {
    if (typeof window !== "undefined") {
        const cookies = document.cookie
            .split("; ")
            .find((row) =>
                row.startsWith("token=")
            );

        if (cookies) {
            const token = cookies.split("=")[1];

            config.headers.Authorization = `Bearer ${token}`;
        }
    }

    return config;
});

export default api;