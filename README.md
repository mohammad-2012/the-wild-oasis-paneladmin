# 🌿 The Wild Oasis – Admin Panel

### Live Demo: [https://mohammad-2012.github.io/the-wild-oasis-paneladmin/](https://mohammad-2012.github.io/the-wild-oasis-paneladmin/)

---

## 📖 About The Project

**The Wild Oasis** is a powerful and modern **Admin Dashboard** built for managing cabins, bookings, and guests in a luxury hotel or camping resort.

This panel provides full CRUD operations, real‑time data synchronization, user authentication, and an elegant dark/light mode interface.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🏕️ **Manage Cabins** | Add, edit, delete cabins with images & pricing |
| 📅 **Bookings** | View, check‑in, check‑out guests |
| 👥 **Guests** | Manage guest information & stay history |
| 🔐 **Authentication** | Secure login/logout (Supabase Auth) |
| 📊 **Dashboard** | Statistics, charts, recent bookings & activity |
| 🌙 **Dark/Light Mode** | Fully responsive theme switcher |
| 🔍 **Search & Filter** | Filter bookings by status, cabins, dates |
| 📱 **Responsive** | Works perfectly on desktop, tablet & mobile |

---

## 🛠️ Built With

### Frontend
- **React 19** – UI Library
- **React Router DOM v6** – Client‑side routing
- **React Query (TanStack Query)** – Server state management & caching
- **React Hook Form** – Form handling & validation
- **React Hot Toast** – Beautiful notifications
- **TailwindCSS** – Utility‑first styling
- **Vite** – Blazing fast build tool

### Backend & Database
- **Supabase** – PostgreSQL database + authentication + storage
  - Row Level Security (RLS)
  – Real‑time subscriptions
  – File storage for cabin images

### Deployment
- **GitHub Pages** – Frontend hosting
- **Supabase Cloud** – Backend hosting

---

## 🗂️ Project Structure

the-wild-oasis-paneladmin/
├── src/
│ ├── features/
│ │ ├── cabins/ # Cabin management (CRUD)
│ │ ├── bookings/ # Booking list, detail, check‑in/out
│ │ ├── guests/ # Guest profiles
│ │ ├── dashboard/ # Statistics & charts
│ │ └── authentication/ # Login, logout, protected routes
│ ├── services/
│ │ ├── apiCabins.js # Supabase cabin queries
│ │ ├── apiBookings.js # Supabase booking queries
│ │ ├── apiGuests.js # Supabase guest queries
│ │ └── supabase.js # Supabase client
│ ├── ui/ # Reusable UI components
│ ├── hooks/ # Custom hooks (useDarkMode, etc.)
│ ├── context/ # DarkModeContext, etc.
│ ├── pages/ # Route pages
│ ├── App.jsx # Router setup
│ └── main.jsx # Entry point + React Query provider
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md

