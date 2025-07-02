# Clarity  – Fullstack Landing Page App

A modern, responsive landing page built with **Next.js 14**, **Tailwind CSS**, and an **API-integrated contact form**. Designed for real-world use and deployable on platforms like **Vercel** or **AWS Amplify**.

## Demo


> 🎥 Includes Hero section, Features grid, and a working Contact form with API route.

---

## Tech Stack

- **Frontend**: React (Next.js 14)
- **Styling**: Tailwind CSS
- **Backend/API**: Next.js API route (`/api/contact`)
- **Deployment**: Vercel-ready
- **Form Handling**: `fetch()` POST request + serverless API handler

---

## Features

✅ Hero section with CTA  
✅ Features section in responsive grid  
✅ Working contact form (Name, Email, Message)  
✅ Simple API route (`/api/contact`) to log form data  
✅ Fully responsive design  
✅ Mobile + Desktop friendly  
✅ Easy to extend (e.g., add database or email service)

---

## Folder Structure

clarity-extended-app/
├── frontend/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Next.js pages
│ │ ├── index.js # Main landing page
│ │ └── api/contact.js # Serverless API route for form
│ ├── public/ # Static assets (if any)
│ └── tailwind.config.js # Tailwind setup
├── README.md
