# 💼 JobTrackr – Job Application Tracker

JobTrackr is a full-stack job application tracker built with **.NET 7**, **React.js**, and **PostgreSQL**, designed to help job seekers efficiently manage their job hunt. It features an intuitive UI, clean status tracking, and simple login for a smooth experience.

---

## ✅ Features

- ➕ Add and update job applications
- ✏️ Edit or delete entries
- 🔍 Search by role or company name
- 🎯 Filter by application status (Applied, Interviewing, etc.)
- 📅 Set applied date using a date picker
- 🔐 Login system using localStorage
- ✅ Toast notifications for feedback
- 🎨 Fully responsive, minimal UI

---

## 🔧 Tech Stack

- **Frontend:** React (Create React App), Tailwind CSS
- **Backend:** .NET 7 Web API
- **Database:** PostgreSQL (via Docker)
- **ORM:** Entity Framework Core
- **Dev Tools:** Visual Studio Code, Postman, TablePlus
- **Auth:** LocalStorage-based login (no backend auth yet)

---

## 🐳 Docker Setup – PostgreSQL
Make sure Docker is installed and running.
```bash 
cd JobTracker.API
docker compose up -d
```
## Backend

```bash
cd JobTracker.API
dotnet build
dotnet run
```

## Frontend

```bash
cd jobtrackr-ui
npm install
npm start
```
