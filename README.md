# Sreeshanth P — Portfolio Website

A modern, fully responsive personal portfolio website built with **React 18** and **Tailwind CSS**. Features custom hash-based client-side routing, scroll-spy navigation, and dedicated project detail pages.

🔗 **Live Site:** [portfolio-sreeshanth25503.vercel.app](https://portfolio-sreeshanth25503.vercel.app)

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Sreeshanth25503/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

The app will open at `http://localhost:3000`

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🚀 Deploy to Vercel

The site is connected to Vercel for automatic CI/CD.  
Every push to the `main` branch triggers an automatic re-deployment — no manual steps needed.

To set up from scratch:
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel auto-detects React and deploys

Or use Vercel CLI:
```bash
npm install -g vercel
vercel
```

---

## 📱 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Custom hash-based client-side routing (no React Router)
- ✅ Scroll-spy navbar that highlights the active section
- ✅ Projects dropdown menu with individual detail pages
- ✅ Clickable project cards that navigate to detail pages
- ✅ Resume viewer with Google Drive link
- ✅ Contact section with social links
- ✅ Mobile hamburger menu with accordion Projects sub-menu
- ✅ Automatic Vercel deployment on every GitHub push

---

## 📂 Projects Showcased

| Project | Route | GitHub |
|---|---|---|
| Text-to-Video Generator | `/projects/text-to-video` | [Repo](https://github.com/Sreeshanth25503/Text---Video-Generator.git) |
| Weather Forecast App | `/projects/weather` | [Repo](https://github.com/Sreeshanth25503/Weather-Forecast.git) |
| Portfolio Website | `/projects/portfolio` | [Repo](https://github.com/Sreeshanth25503/portfolio.git) |

---

## 🎨 Customisation

| What to change | File to edit |
|---|---|
| Personal info / bio | `src/Components/Pages/About.jsx` |
| Projects list | `src/Components/Pages/Projects.jsx` |
| Project detail pages | `src/Components/Pages/*Project.jsx` |
| Resume link | `src/Components/Pages/Resume.jsx` (update `resumeUrl`) |
| Contact / social links | `src/Components/Pages/Contact.jsx` |
| Nav links | `src/Components/Navbar.jsx` |
| Routing | `src/App.jsx` + `src/Components/Router.jsx` |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Tailwind CSS | Utility-first styling |
| Lucide React | Icon library |
| Custom hash router | Client-side navigation |
| Vercel | Hosting & CI/CD |
| GitHub | Version control |

---

## 📄 License

© 2024 Sreeshanth P. All rights reserved.