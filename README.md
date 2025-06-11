# 🏥 Insurance Recommendation AI

<div align="center">

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![React](https://img.shields.io/badge/React-18.x-blue)
![Vite](https://img.shields.io/badge/Vite-4.x-purple)

</div>

## 📝 Overview

An intelligent insurance recommendation application that leverages Generative AI to provide personalized insurance suggestions. Built as part of Mission Ready Level 5 Mission 4, this project demonstrates the integration of modern web technologies with AI capabilities.

## ✨ Features

- 🤖 AI-powered insurance recommendations
- 🎯 Personalized suggestions based on user input
- 🚀 Modern, responsive user interface
- 🔒 Secure API endpoints
- 🐳 Docker containerization support
- 🔄 Real-time updates and feedback

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Modern JavaScript
- **Backend**: Node.js, Express
- **AI Integration**: Google AI SDK
- **Containerization**: Docker & Docker Compose
- **Development**: ESLint, Nodemon

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Docker (optional, for containerized deployment)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/robwynyard/MR-L5-Mission4.git
   cd Mission-4
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`

3. **Backend Setup**
   ```bash
   cd backend
   npm install
   npm run dev    # Development mode with nodemon
   # or
   npm start      # Production mode
   ```
   The backend API will be available at `http://localhost:3000`

### Docker Deployment

To run the entire application using Docker:

```bash
docker-compose up --build
```

## 🔧 Environment Variables

### Backend (.env)
```
PORT=3000
OPENAI_API_KEY=your_api_key_here
```

## 📁 Project Structure

```
├── frontend/               # React frontend application
│   ├── src/               # Source files
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
│
├── backend/               # Node.js backend server
│   ├── server.js         # Main server file
│   └── package.json      # Backend dependencies
│
└── docker-compose.yml    # Docker configuration
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Rob Wynyard**
- Mission Ready Level 5 Student
- [GitHub Profile](https://github.com/robwynyard)

---

<div align="center">
Made with ❤️ for Mission Ready Level 5
</div>