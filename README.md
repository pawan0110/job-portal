# 💼 Job Portal Web Application

A full-stack **MERN** project that connects **students** seeking jobs with **recruiters** hiring for their companies.  
Students can apply for jobs, upload resumes, and manage their profiles, while recruiters can post job openings and review applicants — all in one place.

🌐 **Live Demo:** [https://job-portal-beta-plum.vercel.app/](https://job-portal-beta-plum.vercel.app/)

---

## 🚀 Features

### 👨‍🎓 Student Features
- Register and log in securely  
- Create and edit personal profiles  
- Upload and manage resumes  
- Browse jobs and apply directly  

### 🏢 Recruiter Features
- Register company profiles  
- Post, update, and delete job listings  
- View all applied candidates  
- Access applicants’ resumes to shortlist suitable ones  

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, Tailwind CSS |
| Backend  | Node.js, Express.js |
| Database | MongoDB |
| Deployment | Vercel (Frontend), Render (Backend) |
| Authentication | JWT (JSON Web Token) |

---

## ⚙️ Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/pawan0110/job-portal.git
cd job-portal


2. Install dependencies

# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install

3.Set up environment variables
Create a .env file in the backend folder:

MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret

4.Run the app locally

# Backend
cd backend
npm run dev

# Frontend
cd ../frontend
npm run dev
