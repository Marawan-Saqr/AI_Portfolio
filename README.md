# Marawan Mahmoud Nasr - Frontend Web Developer Portfolio

[![React](https://img.shields.io/badge/React-19-61dafb.svg?style=flat&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff.svg?style=flat&logo=vite)](https://vite.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, responsive, and performance-optimized personal portfolio website built specifically for recruiters and potential clients to showcase frontend engineering skills, real-world projects, and technical experience.

---

## 👨‍💻 Developer Overview

- **Name:** Marawan Mahmoud Nasr
- **Role:** Frontend Web Developer
- **Location:** 6th October City, Egypt
- **Email:** [marosaqr767@gmail.com](mailto:marosaqr767@gmail.com)
- **Phone:** 01090502377
- **LinkedIn:** [linkedin.com/in/marawan-saqr-233784213](https://linkedin.com/in/marawan-saqr-233784213)
- **GitHub:** [github.com/Marawan-Saqr](https://github.com/Marawan-Saqr)

---

## 🚀 Key Features

- **Obsidian Dark Aesthetic:** Sleek charcoal background, subtle glassmorphism, and elegant tech-cyan accents.
- **Interactive Developer Terminal:** Live switcher between `developer.js`, `status.sh`, and `contact.json` with copyable code snippets.
- **Dynamic Projects Showcase:** Filterable by React.js, API-Driven, Angular, and JavaScript with interactive Case Study modals.
- **In-App Curriculum Vitae Modal:** Complete printable CV with one-click print/PDF download.
- **Categorized Skills Matrix:** Interactive tabs detailing proficiency in Core Frontend, Frameworks, Architecture & APIs, and Tooling.
- **Recruiter FAQs:** Direct answers to recruiter questions regarding availability, timezone, and work arrangements.
- **Direct Contact Form:** Interactive form with client-side validation, confetti animations, and pre-filled email client actions.
- **100% Mobile-First Responsive Design:** Smooth hamburger drawer and optimized layout for mobile, tablet, and desktop.

---

## 🛠️ Tech Stack

- **Framework:** React.js (JavaScript / JSX)
- **Bundler:** Vite
- **Styling:** Vanilla CSS with custom design system tokens & SCSS architecture
- **Icons:** Lucide React & Custom SVG brand glyphs
- **Animations & Effects:** Micro-interactions, CSS transitions, Canvas Confetti

---

## 📁 Project Architecture

```
portfolio/
├── .github/workflows/deploy.yml   # Automated GitHub Pages deployment
├── public/
│   └── favicon.svg                # Developer brand favicon
├── src/
│   ├── assets/                    # Project graphics & icons
│   ├── components/                # Reusable UI components
│   │   ├── Navbar.jsx / .css      # Sticky blurred header with mobile drawer
│   │   ├── Footer.jsx / .css      # Modern footer with socials & back-to-top
│   │   ├── TerminalCard.jsx / .css# Interactive developer terminal widget
│   │   ├── ProjectModal.jsx / .css# Case study pop-up modal
│   │   ├── ResumeModal.jsx / .css # In-app printable CV modal
│   │   ├── Toast.jsx / .css       # Notification toast
│   │   └── Icons.jsx              # Vector brand SVG icons
│   ├── data/
│   │   └── portfolioData.js       # Centralized developer data, projects & skills
│   ├── sections/                  # Main page sections
│   │   ├── Hero.jsx / .css        # Hero introduction & quick stats
│   │   ├── About.jsx / .css       # Bio, specs & 4 engineering pillars
│   │   ├── Skills.jsx / .css      # Categorized skill cards with filter tabs
│   │   ├── Experience.jsx / .css  # Work timeline & education credentials
│   │   ├── Projects.jsx / .css    # Filterable project grid & modal triggers
│   │   ├── WhyHireMe.jsx / .css   # Recruiter value props & FAQs
│   │   └── Contact.jsx / .css     # Contact cards & validated form
│   ├── styles/
│   │   ├── variables.css          # Color palette, spacing, and design tokens
│   │   └── global.css             # Base reset, typography, and buttons
│   ├── App.jsx / .css             # Root application orchestrator
│   └── main.jsx                   # Application entry point
├── index.html                     # SEO metadata, Open Graph tags & Google fonts
├── vite.config.js                 # Relative base path for GitHub Pages
└── package.json
```

---

## 💻 Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Marawan-Saqr/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/) in your browser.

4. **Build production bundle:**
   ```bash
   npm run build
   ```

---

## 🌐 GitHub Pages Deployment

This project includes an automated GitHub Actions workflow (`.github/workflows/deploy.yml`).

To deploy automatically:
1. Push your code to the `main` branch on GitHub:
   ```bash
   git add .
   git commit -m "Build: complete portfolio website"
   git push origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**
   - Under **Build and deployment** > **Source**, select **GitHub Actions**
3. GitHub Actions will build and deploy your site to `https://<username>.github.io/<repo>/` automatically!
