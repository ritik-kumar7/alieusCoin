# 🚀 AHF Coin - Cryptocurrency Website

<div align="center">

![AHF Coin](https://img.shields.io/badge/AHF-Cryptocurrency-00f5ff?style=for-the-badge&logo=bitcoin&logoColor=white)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A futuristic, neon-themed cryptocurrency landing page built with React and Vite**

[Live Demo](https://alieuscoin.netlify.app)

</div>

---

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Screenshots](#-screenshots)
- [Author](#-author)
- [License](#-license)

---

## 🎯 About The Project

AHF Coin is a modern, visually stunning cryptocurrency landing page designed to showcase the next-generation decentralized digital currency. The project features a **futuristic Web3 aesthetic** with neon gradients, glassmorphism effects, smooth animations, and premium interactive elements.

### 🎨 Design Philosophy

- **Dark-mode Dominant UI** - Easy on the eyes with a premium feel
- **Neon Color Palette** - Cyan (#00f5ff), Purple (#bf00ff), Emerald (#00ff88)
- **Glassmorphism Effects** - Modern frosted glass card designs
- **Micro-interactions** - Hover effects, scroll animations, and custom cursor
- **Performance Optimized** - GPU-accelerated animations with smooth 60fps

---

## ✨ Features

### 🖥️ Core Features
- ✅ Responsive design for all devices (Mobile, Tablet, Desktop)
- ✅ Single Page Application with smooth scroll navigation
- ✅ Interactive ROI Calculator
- ✅ Token distribution visualization
- ✅ Roadmap timeline with animated milestones
- ✅ FAQ accordion with smooth transitions
- ✅ WhatsApp chat widget integration
- ✅ Back to top button with smooth scroll

### 🎨 Visual Effects
- ✅ Custom cursor with trail effect
- ✅ Scroll-triggered reveal animations
- ✅ Multi-layer neon glow hover effects
- ✅ Gradient animated borders
- ✅ Floating/parallax background elements
- ✅ Inner glow and shimmer effects on cards
- ✅ Active navigation link indicator (scroll spy)

### 🔧 Technical Features
- ✅ React 18 with Hooks
- ✅ React Router for navigation
- ✅ CSS custom properties for theming
- ✅ Intersection Observer for scroll animations
- ✅ SEO optimized meta tags
- ✅ Optimized build for production

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) | Frontend Framework |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) | Build Tool & Dev Server |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white) | Client-side Routing |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Styling & Animations |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Logic & Interactivity |

### 🔤 Fonts Used
- **Orbitron** - Futuristic headings
- **Rajdhani** - Navigation & labels
- **Space Grotesk** - Body text

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18.x or higher)
- **npm** (v9.x or higher) or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ritik-kumar7/alieusCoin.git
   cd alieusCoin
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 📁 Project Structure

```
ahf-coin/
├── 📂 public/                  # Static assets
│   └── favicon.ico
│
├── 📂 src/                     # Source files
│   ├── 📂 assets/              # Images, icons, fonts
│   │   └── 📂 images/
│   │       ├── 📂 logos/       # Icon SVGs
│   │       └── *.webp          # Optimized images
│   │
│   ├── 📂 components/          # React components
│   │   ├── 📂 Header/          # Navigation header
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   │
│   │   ├── 📂 Hero/            # Hero section
│   │   ├── 📂 Partners/        # Partners carousel
│   │   ├── 📂 About/           # About section
│   │   ├── 📂 ProblemSolution/ # Problem & Solution
│   │   ├── 📂 Features/        # Features + Calculator
│   │   ├── 📂 Services/        # Services grid
│   │   ├── 📂 Tokenomics/      # Token distribution
│   │   ├── 📂 Roadmap/         # Timeline roadmap
│   │   ├── 📂 Whitepaper/      # Whitepaper section
│   │   ├── 📂 FAQ/             # FAQ accordion
│   │   ├── 📂 Footer/          # Footer section
│   │   ├── 📂 Login/           # Login page
│   │   ├── 📂 ChatWidget/      # WhatsApp chat
│   │   ├── 📂 BackToTop/       # Scroll to top button
│   │   └── 📂 CustomCursor/    # Custom cursor effects
│   │
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Global app styles
│   ├── index.css               # Base styles & variables
│   └── main.jsx                # React entry point
│
├── 📄 index.html               # HTML template
├── 📄 vite.config.js           # Vite configuration
├── 📄 package.json             # Dependencies & scripts
├── 📄 netlify.toml             # Netlify deployment config
├── 📄 _redirects               # SPA routing for Netlify
└── 📄 README.md                # Project documentation
```

---

## 🌐 Deployment

### Deploy to Netlify

This project is configured for one-click deployment to Netlify.

#### Method 1: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

#### Method 2: Drag & Drop

1. Run `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder

#### Method 3: Git Integration

1. Push your code to GitHub
2. Connect repository in Netlify dashboard
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!


---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| 🔵 Neon Cyan | `#00f5ff` | Primary accent, links, glows |
| 🟣 Neon Purple | `#bf00ff` | Secondary accent, gradients |
| 🟢 Neon Emerald | `#00ff88` | Success states, highlights |
| ⚫ Dark Primary | `#050510` | Main background |
| ⚫ Dark Secondary | `#0a0a1e` | Card backgrounds |

---

## 🔧 Customization

### Adding New Sections

1. Create a folder in `src/components/YourSection/`
2. Add `YourSection.jsx` and `YourSection.css`
3. Import and add to `App.jsx`

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

<table>
  <tr>
    <td align="center">
      <h3>Ritik Kumar</h3>
      <p>Full Stack Developer</p>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/ritik-kumar7">
        <img src="https://img.shields.io/badge/GitHub-ritik--kumar7-181717?style=for-the-badge&logo=github" alt="GitHub">
      </a>
      <br><br>
      <a href="https://linkedin.com/in/ritik-kumar">
        <img src="https://img.shields.io/badge/LinkedIn-Ritik_Kumar-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn">
      </a>
      <br><br>
      <a href="https://my-portfolio-ritik.netlify.app">
        <img src="https://img.shields.io/badge/Portfolio-Visit_Website-00f5ff?style=for-the-badge&logo=netlify" alt="Portfolio">
      </a>
    </td>
  </tr>
</table>

---

## 🙏 Acknowledgments

- [Google Fonts](https://fonts.google.com/) - Orbitron, Rajdhani, Space Grotesk
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React](https://react.dev/) - The library for web and native user interfaces
- [Netlify](https://netlify.com/) - Platform for web projects

---

<div align="center">
  <br>
  <p>Made with 💜 by <strong>Ritik Kumar</strong></p>
  <br>
</div>
