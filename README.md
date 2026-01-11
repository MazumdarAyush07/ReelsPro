# 🎬 ReelsPro — Short-Form Video Platform

ReelsPro is a **full-stack Instagram-style short-form video platform** built with **Next.js (App Router)**.  
The project focuses on **real-world media UX**, **gesture-based interactions**, and **performance-aware video playback** — the kind of problems modern social platforms actually solve.

This is not a CRUD demo.  
It is an exploration of **how reels/tiktok-style platforms work under the hood**.

---

## ✨ Features

### 📱 Reels Feed & Playback
- Vertical, snap-scrolling reels feed (mobile-first)
- **Viewport-aware auto-play** using `IntersectionObserver`
- Only the video currently in view plays; others pause automatically
- Tap to **play / pause** with animated overlay feedback
- Optimized video delivery via **ImageKit transformations**

### ❤️ Likes
- Like / unlike with **optimistic UI updates**
- **Double-tap to like** (Instagram-style gesture)
- Animated heart feedback on double tap
- Backend validation to prevent duplicate likes
- Real-time like count updates

### 💬 Comments
- Slide-up comments sheet rendered inside each video
- Swipe-down gesture to close
- Add & delete comments with ownership checks
- Hot UI updates for comment count on the feed

### 🔐 Authentication & Security
- Session-based authentication using **NextAuth**
- Protected APIs for likes, comments, and uploads
- Owner-only actions (e.g. deleting comments)

---

## 🧠 Engineering Highlights

- **Viewport-aware video playback** using `IntersectionObserver` for performance
- Gesture-priority handling (single tap vs double tap resolution)
- Optimistic UI with backend consistency guarantees
- Atomic MongoDB updates for counters (likes/comments)
- Touch-friendly animations and mobile UX polish
- Clean separation of UI state vs server state

---

## 🛠 Tech Stack

### Frontend
- Next.js (App Router)
- React (Client Components)
- Tailwind CSS
- IntersectionObserver API
- Gesture handling & animations

### Backend
- Next.js API Routes
- MongoDB + Mongoose
- ImageKit (video hosting & transformations)

### Auth
- NextAuth (session-based authentication)

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/reelspro.git
cd reelspro
```
### 2️⃣ Install dependencies
```bash
npm install
# or
yarn
# or
pnpm install
```
### 3️⃣ Environment Variables

Create a .env file:
```
MONGODB_URI=your_mongodb_connection_string

NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
```
### 4️⃣ Run the development server
```bash
npm run dev
```

## 🧩 Project Intent

ReelsPro was built as a **learning-by-building project** to deeply understand how modern short-form video platforms work — from **media playback optimizations** to **gesture-driven UX** and **real-time social interactions**.

Rather than focusing on surface-level features, the goal was to:

- Solve **actual problems** faced in media-heavy applications  
- Practice **browser APIs**, **state synchronization**, and **performance trade-offs**  
- Build something that can be **clearly explained in interviews**

---

## 📌 What This Project Demonstrates

- Strong command of **React + Next.js App Router**
- Practical use of **browser APIs** (IntersectionObserver, media controls)
- Thoughtful UX decisions inspired by real products
- Clean full-stack integration with authentication & database consistency
- Ability to reason about **scalability, performance, and user experience**

---

## 🔮 Future Scope

This project is intentionally scoped but extensible. Possible next steps include:

- Comment replies & threading
- User profiles and follow system
- View count & watch-time analytics
- Infinite scrolling feed
- Accessibility and keyboard navigation improvements

---

## 📄 License

This project is licensed under the **MIT License**.  
Feel free to explore, learn from, or build upon it.
