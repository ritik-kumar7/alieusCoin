# 🏆 AHF Coin - Cryptocurrency Website

<div align="center">

![AHF Coin](https://img.shields.io/badge/AHF-Cryptocurrency-c9a227?style=for-the-badge&logo=bitcoin&logoColor=white)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Gemini AI](https://img.shields.io/badge/Gemini_AI-2.5_Flash-4285F4?style=for-the-badge&logo=google&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A luxury black & gold themed cryptocurrency landing page with AI-powered chatbot**

[Live Demo](https://alieus-coin.netlify.app)

</div>

---

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [AI Chatbot](#-ai-chatbot)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Color Palette](#-color-palette)
- [Author](#-author)
- [License](#-license)

---

## 🎯 About The Project

AHF Coin (Alieus 2.0) is the world's first hedge fund-backed cryptocurrency. This website showcases the token with a **luxury black & gold aesthetic**, featuring premium animations, glassmorphism effects, and an AI-powered chatbot assistant.

### 🎨 Design Philosophy

- **Luxury Black & Gold Theme** - Premium feel with elegant gold accents
- **Dark Mode UI** - Easy on the eyes with sophisticated design
- **Gold Color Palette** - Primary (#c9a227), Light (#e6c14b), Champagne (#d4af37)
- **Glassmorphism Effects** - Modern frosted glass card designs
- **Micro-interactions** - Hover effects, scroll animations, and custom cursor
- **AI-Powered Assistant** - Gemini 2.5 Flash chatbot for user queries

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
- ✅ **AI Chatbot** powered by Gemini 2.5 Flash
- ✅ Back to top button with smooth scroll

### 🤖 AI Chatbot Features
- ✅ Real-time AI responses using Google Gemini 2.5 Flash
- ✅ Context-aware about AHF cryptocurrency
- ✅ Markdown formatting support (bold, italic)
- ✅ Typing indicator animation
- ✅ Beautiful gold-themed UI matching website design
- ✅ Mobile responsive design

### 🎨 Visual Effects
- ✅ Custom cursor with gold trail effect
- ✅ Scroll-triggered reveal animations
- ✅ Gold spotlight glow on card hover
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
| ![Gemini AI](https://img.shields.io/badge/Gemini-4285F4?style=flat&logo=google&logoColor=white) | AI Chatbot (2.5 Flash) |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Styling & Animations |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Logic & Interactivity |

### 🔤 Fonts Used
- **Playfair Display** - Elegant serif headings
- **Montserrat** - Modern navigation & body text

---

## 🤖 AI Chatbot

The website includes an AI-powered chatbot assistant that uses **Google Gemini 2.5 Flash** model.

### Features:
- Real-time AI responses
- Context-aware about AHF cryptocurrency, tokenomics, and blockchain
- Markdown formatting (bold text, line breaks)
- Beautiful gold-themed design
- Side-by-side button layout on desktop, stacked on mobile

### Setup:
1. Get your API key from [Google AI Studio](https://ai.google.dev/)
2. Add to `.env` file:
   ```
   VITE_API_KEY=your_gemini_api_key_here
   ```

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

3. **Set up environment variables**
   ```bash
   # Create .env file
   echo "VITE_API_KEY=your_gemini_api_key" > .env
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
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
│   │       ├── 📂 newImages/   # New card images & video
│   │       └── *.webp          # Optimized images
│   │
│   ├── 📂 components/          # React components
│   │   ├── 📂 Header/          # Navigation header
│   │   ├── 📂 Hero/            # Hero section
│   │   ├── 📂 Partners/        # Partners carousel
│   │   ├── 📂 About/           # About section with video
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
│   │   ├── 📂 AIChatBot/       # AI Chatbot (Gemini)
│   │   ├── 📂 BackToTop/       # Scroll to top button
│   │   └── 📂 CustomCursor/    # Custom cursor effects
│   │
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Global app styles
│   ├── index.css               # Base styles & variables
│   └── main.jsx                # React entry point
│
├── 📄 .env                     # Environment variables
├── 📄 index.html               # HTML template
├── 📄 vite.config.js           # Vite configuration
├── 📄 package.json             # Dependencies & scripts
├── 📄 netlify.toml             # Netlify deployment config
├── 📄 _redirects               # SPA routing for Netlify
└── 📄 README.md                # Project documentation
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_KEY=your_gemini_api_key_here
```

| Variable | Description |
|----------|-------------|
| `VITE_API_KEY` | Google Gemini API key for AI chatbot |

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
5. Add environment variable: `VITE_API_KEY`
6. Deploy!

---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| 🥇 Gold Primary | `#c9a227` | Primary accent, buttons, glows |
| 🥇 Gold Light | `#e6c14b` | Highlights, gradients |
| 🥇 Gold Champagne | `#d4af37` | Secondary accent |
| 🥇 Gold Bronze | `#b8860b` | Tertiary accent |
| 🥇 Gold Pale | `#f5e6c8` | Subtle backgrounds |
| ⚫ Dark Primary | `#0a0a0a` | Main background |
| ⚫ Dark Secondary | `#111111` | Card backgrounds |
| 📝 Text Primary | `#f5f0e6` | Main text color |

---

## 🔧 Customization

### Adding New Sections

1. Create a folder in `src/components/YourSection/`
2. Add `YourSection.jsx` and `YourSection.css`
3. Import and add to `App.jsx`

### Changing Theme Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
    --gold-primary: #c9a227;
    --gold-light: #e6c14b;
    --gold-dark: #a68523;
    --bg-primary: #0a0a0a;
    --text-primary: #f5f0e6;
}
```

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
        <img src="https://img.shields.io/badge/Portfolio-Visit_Website-c9a227?style=for-the-badge&logo=netlify" alt="Portfolio">
      </a>
    </td>
  </tr>
</table>

---

## 🙏 Acknowledgments

- [Google Fonts](https://fonts.google.com/) - Playfair Display, Montserrat
- [Google AI](https://ai.google.dev/) - Gemini 2.5 Flash API
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React](https://react.dev/) - The library for web and native user interfaces
- [Netlify](https://netlify.com/) - Platform for web projects

---

<div align="center">
  <br>
  <p>Made with 🏆 by <strong>Ritik Kumar</strong></p>
  <br>
</div>
