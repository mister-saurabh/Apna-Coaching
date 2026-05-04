# 🎓 3TPNA Coaching Classes — Premium MERN Website

> **Start Your Successful Journey** | Badlapur, Jaunpur

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- MongoDB (local or MongoDB Atlas)
- npm

---

## ⚙️ Setup

### 1. Clone / Extract the project
```bash
cd 3tpna
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create/edit `.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/3tpna_coaching
JWT_SECRET=3tpna_ultra_secure_jwt_secret_2024
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```

Start backend:
```bash
npm run dev        # Development (with nodemon)
npm start          # Production
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev        # Development (http://localhost:5173)
npm run build      # Production build
```

---

## 🌐 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Main website (Home, Courses, About, Contact) |
| `/admin/login` | Admin login page |
| `/admin` | Admin panel (JWT protected) |

---

## 🔗 API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/leads` | Public | Submit enquiry form |
| GET | `/api/leads` | Admin | View all leads |
| PATCH | `/api/leads/:id` | Admin | Update lead status |
| DELETE | `/api/leads/:id` | Admin | Delete lead |
| POST | `/api/auth/login` | Public | Admin login |
| GET | `/api/health` | Public | Health check |

---

## 🔐 Admin Login
- **URL:** `http://localhost:5173/admin/login`
- **Username:** `admin`
- **Password:** `admin123`

> ⚠️ Change the password in `.env` before deploying!

---

## 🎨 Tech Stack
- **Frontend:** React 18 + Vite + Tailwind CSS + Framer Motion
- **Backend:** Node.js + Express.js
- **Database:** MongoDB + Mongoose
- **Auth:** JWT (JSON Web Tokens)
- **Fonts:** Cinzel (display) + Raleway (body)

---

## 📦 Features
- ✅ Cinematic hero section with particle animations
- ✅ 4 premium animated course cards with 3D tilt
- ✅ About section with neumorphic design
- ✅ Admission banner with live ticker strip
- ✅ Lead capture form → stored in MongoDB
- ✅ Success animation on form submission
- ✅ Admin panel with JWT auth
- ✅ View, filter, update status, delete leads
- ✅ Floating WhatsApp button
- ✅ Google Maps embed
- ✅ Sticky glassmorphic navbar
- ✅ Fully responsive (mobile-first)
- ✅ SEO meta tags

---

## 🚀 Deployment

### Backend (Railway / Render / VPS)
1. Set environment variables on the platform
2. `npm start`

### Frontend (Vercel / Netlify)
1. `npm run build`
2. Deploy the `dist/` folder
3. Set base URL for API calls

### Full-stack on VPS
```bash
# Build frontend
cd frontend && npm run build

# Serve frontend via Express (add static serving to server.js)
# Or use nginx to serve dist/ folder

# Start backend
cd backend && npm start
```

---

## 📞 Institute Contact
- 📍 Beside Shiv Bal Chikitsalay (Dr. Dharmendra Yadav), Badlapur, Jaunpur
- 📞 8542093421
- 💬 WhatsApp: 8542093421

---

*Built with ❤️ for 3TPNA Coaching Classes*
