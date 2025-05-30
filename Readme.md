### 📄 `README.md` (Place in Root of Project)

```markdown
# 🧠 Quantum Assignment — Auth System

A full-stack authentication system built with **Node.js, Express, MongoDB, JWT, bcrypt** for the backend, and **React + Vite + Tailwind CSS** for the frontend.

---

## 📁 Folder Structure

```

QuantumAssignment/
├── backend/        # Express + MongoDB + JWT
│   ├── server.js
│   ├── .env
│   ├── package.json
│   └── src/
│       ├── app.js
│       ├── config/
│       ├── models/
│       ├── repositories/
│       ├── services/
│       ├── controllers/
│       ├── middleware/
│       └── routes/
│
├── frontend/       # React + Vite + Tailwind
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── pages/
│   │   ├── components/
│   │   ├── lib/
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js

````

---

## 🚀 Features

- ✅ User Registration with name, email, password, and DOB
- ✅ Passwords are hashed using `bcrypt`
- ✅ Login with email + password
- ✅ Secure JWT token returned on login & registration
- ✅ Token-based route protection
- ✅ Protected dashboard page (accessible only after login)
- ✅ Clean folder structure using Model → Repository → Service → Controller → Routes

---

## 🔐 API Endpoints

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| POST   | `/user/register`   | Register a user     |
| POST   | `/user/login`      | Login user          |

---

## ⚙️ Setup Instructions

### 🛠️ Backend

```bash
cd backend
cp .env.example .env    # Add Mongo URI and JWT_SECRET
npm install
npm run dev
````

Make sure MongoDB is running locally or via MongoDB Atlas.

Example `.env`:

```
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/quantum-assignment
JWT_SECRET=super-secret-key
JWT_EXPIRES_IN=1h
```

---

### 🖥️ Frontend

```bash
cd frontend
npm install
npm run dev
```

* Login/Register connects to backend at `http://localhost:3000`
* After successful login, redirects to `/dashboard`
* Uses `localStorage` to persist token

---

## ✅ Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT (Authentication)
* Bcrypt (Hashing)

### Frontend

* React.js (Vite)
* Tailwind CSS
* Axios
* React Router DOM

---

## 📸 Screenshots

> *Optional: Add screenshots of login/register/dashboard if required.*

---

## 👨‍💻 Author

* **Shubham Kumar**
* Full Stack Developer

---

## 📦 Deliverables

* ✅ `backend/` (API)
* ✅ `frontend/` (React UI)
* ✅ `.env.example` (Backend config)
* ✅ README (this file)

---

## ✅ Status

✔️ **Assignment is complete and ready for review.**

```

---