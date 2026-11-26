# 🍽️ Temptation Catering Mumbai

> **Luxury Culinary Experiences & Event Catering Services in Mumbai**

A modern, responsive, high-performance web application built with **React 19**, **Vite**, and **Tailwind CSS v4** for **Temptation Catering Mumbai** (founded by Monica Sinha). The platform showcases party packages, signature cuisines, live customer Google reviews, interactive menus, and direct WhatsApp booking flows.

---

## 🌟 Live Demo
🔗 **Website**: [https://859192.github.io/Temptation-Catering-Mumbai/](https://859192.github.io/Temptation-Catering-Mumbai/)

---

## ✨ Features

* **Mobile-First & Responsive**: Designed for all device viewports (mobile, tablet, and desktop).
* **Glassmorphic Luxury UI**: Dark theme aesthetic with subtle gold ambient accents.
* **Curated Party Packages**:
  * 🟢 **Veg House Party Packages**: Curated spreads for 8 to 25+ guests.
  * 🔴 **Non-Veg Specials**: Multi-course feasts with live counter additions.
  * ✨ **Signature Grazing Tables**: Contemporary grazing table displays for luxury events.
* **Direct WhatsApp Routing**: Pre-filled booking inquiries sent directly to WhatsApp.
* **Interactive Google Reviews**: Embed-ready dynamic ratings and testimonial showcase.
* **Ultra-Smooth Scrolling**: Integrated **Lenis** momentum scrolling engine.
* **Contact Validation**: 10-digit Indian phone number formatting and error checking.

---

## 🛠️ Tech Stack

* **Frontend Library**: [React 19](https://react.dev/)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Styling Engine**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Iconography**: [Lucide React](https://lucide.dev/)
* **Smooth Inertia Scroll**: [Lenis](https://lenis.darkroom.engineering/)
* **Deployment Platform**: [GitHub Pages (`gh-pages`)](https://pages.github.com/)

---

## 📁 Project Structure

```text
Temptation-Catering-Mumbai/
├── public/
│   ├── image/                 # Gallery dishes and catering photography
│   └── logo.jpeg              # Brand logo & tab favicon
├── src/
│   ├── components/
│   │   ├── About.jsx          # Founder profile & company background
│   │   ├── ContactForm.jsx    # Inquiry form with WhatsApp handler
│   │   ├── FloatingActions.jsx# Quick-action mobile floating call/chat bar
│   │   ├── Footer.jsx         # Footer branding & quick links
│   │   ├── Gallery.jsx        # Food and event setup photo grid
│   │   ├── Hero.jsx           # Landing screen hero with CTA
│   │   ├── MapSection.jsx     # Google maps location overview
│   │   ├── Navbar.jsx         # Header navigation bar
│   │   ├── Packages.jsx       # Tabbed party package menus & pricing
│   │   ├── Services.jsx       # Service breakdown
│   │   ├── Testimonials.jsx   # Live client reviews container
│   │   └── WhyUs.jsx          # Unique value propositions
│   ├── App.jsx                # App layout & scroll engine initialization
│   ├── index.css              # Tailwind CSS imports & custom styles
│   └── main.jsx               # React DOM root entry
├── index.html                 # Main HTML document template
├── package.json               # Node package configuration & scripts
└── vite.config.js             # Vite configuration with base path routing
