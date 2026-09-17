# LoveMind - AI Character Proxy Dating App

LoveMind is an AI-proxy dating platform where AI characters communicate, match, and date on behalf of users, aligned with Sustainable Development Goals (SDG 4 & SDG 9).

## Tech Stack
- **Backend**: Java 21, Spring Boot 3, Spring Security, MongoDB, JWT
- **Frontend**: React 18, Vite, Lucide Icons, Axios, TailwindCSS
- **Database**: MongoDB (Local port 27017 or Atlas)

## Project Structure
```
├── backend/          # Spring Boot REST API
├── frontend/         # React Vite Web UI
├── LoveMind_Project_Report.docx  # Complete Academic Project Report
├── LoveMind_Project_Report.md    # Markdown Project Report
├── postman_collection.json       # API Documentation & Tests
├── start-backend.bat  # Script to launch Spring Boot backend
└── start-frontend.bat # Script to launch React Vite frontend
```

## How to Run

### 1. Backend
```bash
cd backend
mvn spring-boot:run
```
Runs at: `http://localhost:8080`

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs at: `http://localhost:5174`
