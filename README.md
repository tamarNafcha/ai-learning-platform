# SciMentor AI

SciMentor AI is a full-stack AI-powered learning platform for science education.

The platform allows users to select a scientific category and sub-category, submit a learning prompt, and receive a concise AI-generated educational lesson.

The system was designed as a modern educational platform with authentication, AI integration, admin management, and a clean React-based user interface.

---

# Main Features

## User Features

* User registration and login
* JWT-based authentication
* Browse science categories
* Browse sub-categories
* Generate AI-powered lessons
* Personal learning history

## Admin Features

* Admin dashboard
* View all users
* View all prompts and AI responses
* Create, update, and delete categories
* Create, update, and delete sub-categories

---

# Bonus Features

* JWT Authentication
* Swagger / OpenAPI documentation
* Role-based authorization
* AI lesson formatting with Markdown
* Loading spinner
* Responsive modern UI
* Seed database initialization

---

# Tech Stack

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* OpenAI API

## Frontend

* React
* Vite
* React Router
* Axios
* CSS

---

# Architecture

The backend follows an MVC + Services architecture:

* Routes
* Controllers
* Services
* Models
* Middleware

The frontend is organized into:

* Pages
* Components
* Services

This structure keeps the project clean, modular, and scalable.

---

# Project Structure

```txt
ai-learning-platform/
│
├── backend/
├── frontend/
└── README.md
```

---

# Running the Project

## Backend

```bash
cd backend
npm install
npm run seed
npm run dev
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
```

---

# Admin Login

After running the seed file:

```txt
Email: admin@scimentor.com
Password: Admin1234
```

---

# Seed Data

The seed file creates:

* One admin user
* Main science categories
* Sub-categories for each category

Regular users are created through the Register page.

---

# Design

The UI was designed with a modern academic style using:

* Soft blue-gray colors
* Gradient backgrounds
* Rounded cards
* Smooth hover effects
* Clean typography

The goal was to create a calm, professional, and learning-focused experience.
