# 🌆 Lviv Locations — Explore Landmarks, Museums & More

Welcome to the **Lviv Locations** app — a modern web platform built with **Next.js 14** that helps users explore historical, cultural, and architectural landmarks across the city of **Lviv**, Ukraine. The app uses **Google Maps API**, **Firebase**, and custom data visualizations to provide an immersive guide to attractions, museums, cafes, and other unique places.

---
## Deployment

The project is live and accessible at:

**[https://lviv-locations.vercel.app](https://lviv-locations.vercel.app)**

Deployed with [Vercel](https://vercel.com), optimized for performance and scalability with Next.js 14.


## Tech Stack

- **Next.js 14 (App Router, Server Components)**
- **React 18**
- **CSS Modules**
- **Google Maps API** (Places, Photos, Geocoding)
- **Firebase (Firestore)**
- **Dynamic Routing & API Routes**
- **Responsive + Accessible UI**
- **Modern Animations (CSS / Framer Motion)**

---

## Features

✅ Explore categorized places:  
 - **Museums**  
 - **Architectural Landmarks**  
 - **Cafes, Bars & Restaurants**

✅ See Google-powered details:
 - Name, address, photos, and contact info  
 - Embedded map & filtered markers  

✅ Detailed pages for each attraction:
 - Description  
 - User reviews  
 - Submit your own review (stored in Firebase)

✅ Fully responsive layout (desktop, tablet, mobile)

✅ Static + server-side rendering for performance

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YulianaHrynda/lviv_locations.git
cd lviv_locations
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a .env.local file in the root:

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_api_key
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 4. Run the dev server

```bash
npm run dev
```

## Folder Structure

```bash
src/
├── app/
│   ├── api/                // Custom API endpoints
│   ├── components/         // Reusable UI components
│   ├── attractions/        // Places list pages
│   ├── attraction_info/    // Dynamic detail pages
│   ├── styles/             // CSS Modules
│   ├── layout.jsx          // Shared layout
│   └── page.jsx            // Main landing page
├── firebase/               // Firebase config
├── public/images           // Static assets
```
