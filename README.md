# Personal Book Manager 📚

A full-stack MERN application to manage personal books with user authentication and CRUD operations.

## 🚀 Tech Stack

### Frontend
- Next.js / React
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

## ✨ Features

- User Registration & Login
- JWT-based Authentication
- Add, Edit, Delete Books
- View Personal Book Collection
- Protected Routes
- Responsive UI

## 📁 Project Structure

```
Personal-Book-Manager
│
├── frontend     # React/Next.js frontend
│
└── backend      # Express API server
```

## ⚙️ Installation

### Clone Repository

```bash
git clone <your-repository-url>
cd Personal-Book-Manager
```

### Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=your_frontend_url
```

Run backend:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd frontend
npm install
```

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=your_backend_url/api
```

Run frontend:

```bash
npm run dev
```

## 🔗 API Routes

### Authentication

```
POST /api/auth/register
POST /api/auth/login
```

### Books

```
GET    /api/books
POST   /api/books
PUT    /api/books/:id
DELETE /api/books/:id
```

## 🌐 Deployment

Frontend deployed on Vercel  : https://mern-personal-book-manager.vercel.app/
Backend deployed on Render   : https://personal-book-manager-mern.onrender.com
Database hosted on MongoDB Atlas

## 👩‍💻 Author

Dhrishti Shetty
