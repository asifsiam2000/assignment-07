This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



# 📱 Friend Tracker App

## 🚀 Project Name

**Friend Tracker**

## 📖 Description

Friend Tracker is a simple and user-friendly web application that helps you maintain and improve your relationships. You can keep track of your friends, monitor when you last contacted them, and log interactions like calls, texts, or video chats.

The goal of this project is to ensure you never lose touch with important people in your life.

---

## 🛠️ Technologies Used

* React.js
* React Router
* Tailwind CSS + DaisyUI
* Recharts (for analytics chart)
* JSON (for data storage)
* React Icons

---

## ✨ Key Features

### 🧑‍🤝‍🧑 Friend Management

* View all friends in a clean card layout
* Each friend shows profile image, name, tags, and contact status
* Click on any friend to see detailed information

### ⚡ Quick Check-In System

* Easily log interactions using:

  * 📞 Call
  * 💬 Text
  * 🎥 Video
* Automatically adds entries to the Timeline
* Shows toast notifications on each action

### 📜 Timeline Tracking

* Displays history of all interactions
* Each entry includes:

  * Date
  * Interaction type (Call/Text/Video)
  * Friend name
* Filter timeline by interaction type

### 📊 Friendship Analytics

* Visual pie chart showing:

  * Total Calls
  * Total Texts
  * Total Video interactions

---

## 🖥️ Pages Overview

### 🏠 Home Page

* Navbar with navigation links and icons
* Banner section with title, subtitle, and action button
* Summary cards
* Friends grid (4-column layout on large screens)

### 👤 Friend Details Page

* Two-column layout:

  * Left: Friend info (bio, email, tags, status)
  * Right: Stats, Goal, Quick Check-In
* Action buttons (Snooze, Archive, Delete)

### 📜 Timeline Page

* Shows all interaction history
* Filter options (Call / Text / Video)

### 📊 Stats Page

* Displays friendship analytics using a pie chart

### ❌ 404 Page

* Custom page for invalid routes

---

## 🔥 Additional Features

* ⏳ Loading spinner while fetching data
* 📱 Fully responsive (mobile, tablet, desktop)
* 🔔 Toast notifications for user actions
* 🔄 Reload-safe routing (no error after refresh)

##

---

## 📌 Optional Improvements

* 🔍 Search timeline entries
* ⬇️ Sort by newest/oldest
* 🌙 Dark mode support

---

## 💡 Conclusion

This project is perfect for practicing real-world React concepts like routing, state management, UI design, and data handling — while also building something meaningful for everyday life.

---

⭐ Feel free to fork, improve, and contribute!
