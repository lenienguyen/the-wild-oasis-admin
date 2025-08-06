# The Wild Oasis Admin 🌿

This repository contains the **internal admin dashboard** for _The Wild Oasis_, a boutique hotel offering 8 luxury wooden cabins.  
This web application is used exclusively by hotel staff to manage bookings, guests, cabins, and operational settings.  
It is fully integrated with the same database and API used by the public-facing guest website, ensuring real-time synchronization between both platforms.

This admin panel provides a full management experience for daily hotel operations, including CRUD functionality, check-in flows, analytics, and system configuration — all built with modern React tools and architecture.

> Internal use only for hotel employees  
> Authenticated back-office built directly into the API  
> Full CRUD on bookings, cabins, and user data  
> Dashboard with statistics and visualizations

## 🚀 Features

- User authentication with sign-up restricted to internal use
- Account management: update name, avatar, and password
- Full CRUD for cabins, including image uploads
- View and manage bookings: status, duration, payment, breakfast, guest notes
- Check-in and check-out flow, including payment confirmation and breakfast add-ons
- Guest profiles: full name, nationality, ID, email, and country flag
- Dashboard with:
  - Guests arriving/leaving today
  - Stats for bookings, check-ins, sales, occupancy (last 7 / 30 / 90 days)
  - Charts for sales breakdown and stay durations
- App-wide settings: breakfast price, min/max nights, max guests
- Fully integrated dark mode

## 📄 Pages

- `/dashboard` : Hotel KPIs & guest list for the day
- `/bookings` : Table of all bookings (filterable by status)
- `/cabins` : Table of cabins with edit/delete functionality
- `/checkin/:bookingId` : Check-in and check-out logic
- `/settings` : Global app settings
- `/account` : User profile page
- `/users` : Sign-up page (internal use only)
- `/login` : Login screen

## 🛠 Technologies and librairies

- **React**
- **Supabase** : authentication, database, and storage
- **React Query**
- **Styled Components**
- **React Hook Form**
- **Recharts** : data visualization and charts

## 💻 Quick Start

To run **The Wild Oasis Admin** back-office app locally:

```bash
git clone https://github.com/lenienguyen/the-wild-oasis.git
cd the-wild-oasis
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.
