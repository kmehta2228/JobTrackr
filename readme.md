# 💼 JobTrackr – Job Application Tracker

A full-stack job application tracker built with **.NET Core**, **React**, and **PostgreSQL** using Docker.

---

## ✅ Features (Coming Soon)

- Add and update job applications
- Track application status (applied, interviewing, etc.)
- Save notes, dates, and recruiter info
- Simple dashboard UI

---

## 🔧 Tech Stack

- **Frontend:** React (Create React App)
- **Backend:** .NET 7 Web API
- **Database:** PostgreSQL (via Docker)
- **ORM:** Entity Framework Core
- **Dev Tools:** Docker, TablePlus, Visual Studio Code

---

## 🐳 Docker Setup (PostgreSQL)

We use Docker to run PostgreSQL locally:

### 📄 `docker-compose.yml`
```yaml
services:
  db:
    image: postgres:15
    container_name: jobtrackr-db
    environment:
      POSTGRES_USER: kalp
      POSTGRES_PASSWORD: kalp123
      POSTGRES_DB: jobtrackr
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
