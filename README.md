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

### Screenshots


Login Page: 
<img width="1912" height="961" alt="Screenshot 2026-08-03 135908" src="https://github.com/user-attachments/assets/83173a12-e735-4b4b-b89e-54b2cf3b9723" />

User Dashboard Page:
<img width="1917" height="956" alt="Screenshot 2026-08-03 135811" src="https://github.com/user-attachments/assets/1d966c47-f85e-4a11-89fb-37181dc508c7" />

Edit Book Page:
<img width="1917" height="962" alt="Screenshot 2026-08-03 135827" src="https://github.com/user-attachments/assets/2119af83-383e-469f-9c34-0e6d23fc4721" />




## 🌐 Deployment

Frontend deployed on Vercel  : https://mern-personal-book-manager.vercel.app/

Backend deployed on Render   : https://personal-book-manager-mern.onrender.com

Database hosted on MongoDB Atlas

## 👩‍💻 Author

Dhrishti Shetty
