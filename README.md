```
# 📌 User Authentication API

A simple Node.js + Express API for user signup, login, and protected routes using JWT.

## 🚀 Features
- User Signup (password hashing)
- User Login (JWT token generation)
- Protected Route (only accessible with valid token)

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- bcryptjs
- jsonwebtoken
- dotenv
- cors

## 🏗️ Project Setup

1. Clone the repository
    git clone <repository_url>
    cd <project_folder>

2. Install dependencies
    npm install

3. Create `.env` file in the root directory and add:
    PORT=5000
    DB_URL=your_mongodb_connection_string
    JWT_TOKEN=your_secret_key

4. Start the server
    node index.js

Server will start running at:
    http://localhost:5000/api/v1/

## 📬 API Endpoints

### ➡️ Signup
- POST `/api/v1/user/signup`
- Body:
{
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "password123"
}

### ➡️ Login
- POST `/api/v1/user/login`
- Body:
{
    "email": "johndoe@example.com",
    "password": "password123"
}
- Response:
{
    "token": "jwt_token_here",
    "name": "John Doe",
    "role": "user"
}

### ➡️ Home (Protected)
- GET `/api/v1/user/home`
- Headers:
    Authorization: Bearer <token>

- Response:
{
    "message": "Welcome, authenticated user!",
    "userId": "<user_id>"
}

## 📌 Notes
- Passwords are hashed securely.
- JWT token must be passed in Authorization header.
- Proper error handling is implemented.

```
