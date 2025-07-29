# The Wild Oasis Admin 🌿

**Note:** This repository contains the internal back-office application for _The Wild Oasis_ website, used exclusively by hotel staff for managing bookings, guests, and cabins.  
A separate customer-facing website for guests to book stays will be developed later, using the same API.

An internal management application for a boutique hotel.
**The Wild Oasis** has 8 luxury wooden cabins and needed a custom digital solution to manage every aspect of their operations, from bookings and guests to cabins and analytics. This full-stack React project showcases a complete admin dashboard experience, built with modern tools and a professional architecture.

> Internal hotel app : used only by hotel employees  
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

## 🗂 Pages

- `/dashboard` : Hotel KPIs & guest list for the day
- `/bookings` : Table of all bookings (filterable by status)
- `/cabins` : Table of cabins with edit/delete functionality
- `/checkin/:bookingId` : Check-in and check-out logic
- `/settings` : Global app settings
- `/account` : User profile page
- `/users` : Sign-up page (internal use only)
- `/login` : Login screen

## 🛠 Technologies

- **React Router**
- **Styled Components**
- **React Query**
- **Context API**
- **React Hook Form**
- **Supabase** : authentication, database, and storage
- **React Icons**
- **React Hot Toast** : toast notifications
- **Recharts** : data visualization and charts
- **date-fns** : date manipulation

## 💻 Quick Start

To run **The Wild Oasis Admin** back-office app locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/the-wild-oasis.git
   cd the-wild-oasis
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

4. **Open the app in your browser:**

   [http://localhost:3000](http://localhost:3000)
