# Aatif Hussain Qazi — Personal Portfolio

> **Creative Technology & Digital Projects**  
> First-Year B.Sc. DYOD Student at Islamic University of Science and Technology (IUST), Awantipora, Kashmir.

An original, dark editorial personal portfolio website inspired by the tactile, minimalist aesthetic of **WRS.LAB**. Designed and built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Three.js.

---

## ⚡ Key Highlights

- **Dark Editorial Aesthetic:** Void-black background (`#0A0A0A`), subtle architectural borders (`#292929`), off-white typography (`#F5F5F5`), and electric lime accents (`#C5F467`).
- **Interactive Three.js 3D Viewport:** Real-time geometric wireframe & particle sculpture reacting dynamically to mouse movement with smooth inertia, optimized for performance and mobile devices.
- **Micro-Interactions & Motion:**
  - 1.4-second branded preloader with monogram (`AQ.`) and live progress telemetry.
  - Desktop-only custom magnetic cursor with contextual labels (`VIEW`).
  - Progress indicator bar tracking scroll depth.
  - Staggered section entrance animations and timeline drawing.
- **Honest Representation:** Highlights actual exposure and interests in 3D Modelling (Blender), Animation, Video Editing, Canva, Data Analysis, Python, WordPress, Linux, and Social Media Management without inflated claims.
- **Modular Data Architecture:** All text, projects, skills, education, and links are decoupled into `src/data/portfolioData.ts` for effortless updates.
- **Vercel-Ready:** Static production build with cache optimizations and single-page routing in `vercel.json`.

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   └── favicon.svg              # Minimalist AQ. SVG favicon
├── src/
│   ├── assets/                  # Static assets
│   ├── components/
│   │   ├── About.tsx            # Section 01: Profile, philosophy & telemetry
│   │   ├── Contact.tsx          # Section 07: Direct mailto composer & copy tool
│   │   ├── CreativeSkills.tsx   # Section 03: 3D, animation, editing & design
│   │   ├── CustomCursor.tsx     # Desktop custom magnetic follower cursor
│   │   ├── Education.tsx        # Section 06: IUST, GHSS, Netherfield
│   │   ├── Experience.tsx       # Section 05: RGPRS J&K & MyKlyra timeline
│   │   ├── Footer.tsx           # Telemetry, live IST clock, back-to-top
│   │   ├── Hero.tsx             # Large typography, CTAs & status
│   │   ├── HeroVisual3D.tsx     # Interactive Three.js 3D canvas
│   │   ├── LoadingIntro.tsx     # 1.4s monogram intro sequence
│   │   ├── Navbar.tsx           # Sticky glassmorphism header & mobile drawer
│   │   ├── ProjectCardVisual.tsx# Vector schematics for project cards
│   │   ├── ProjectModal.tsx     # Expanded project inspection dialog
│   │   ├── Projects.tsx         # Section 02: Selected work asymmetric grid
│   │   ├── ScrollProgress.tsx   # Top scroll indicator line
│   │   └── TechnicalSkills.tsx  # Section 04: Grouped technical tools
│   ├── data/
│   │   └── portfolioData.ts     # Central data file for all content
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces
│   ├── App.tsx                  # Main layout and active section observer
│   ├── index.css                # Tailwind v4 setup & typography styles
│   └── main.tsx                 # React DOM mount point
├── vercel.json                  # Vercel deployment & caching configuration
├── vite.config.ts               # Vite & rollup chunk splitting
└── package.json
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to explore the live website with Hot Module Replacement (HMR).

### 3. Build for Production
```bash
npm run build
```
This generates the optimized, production-ready static assets in the `dist/` directory.

### 4. Preview the Production Build Locally
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel

### Method A: Via Git / GitHub (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of personal portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **Add New Project** and select your GitHub repository.
4. Vercel will automatically detect **Vite** and use:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**. Your portfolio will be live on a `*.vercel.app` domain in under a minute!

### Method B: Via Vercel CLI
1. Install the Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
2. Run deployment from the project root:
   ```bash
   vercel
   ```
3. Follow the CLI prompts. For production release, run:
   ```bash
   vercel --prod
   ```

---

## ✏️ How to Customize & Update Content

All content is cleanly separated into [`src/data/portfolioData.ts`](src/data/portfolioData.ts). You do not need to edit complex HTML/JSX code to change details:

### 1. Updating Projects (AquaBill, 3D Renders, University Work)
Open `src/data/portfolioData.ts` and locate `projectsData`:
- Add real screenshots or image paths under the project objects.
- Update `contributions`, `problemStatement`, or `technologies`.
- Toggle `isPlaceholderDetail: false` once the project details are finalized.

### 2. Adding Social Media Links
In `src/data/portfolioData.ts`, update `personalData.socialLinks`:
```ts
{
  platform: 'LinkedIn',
  label: 'Connect on LinkedIn',
  url: 'https://linkedin.com/in/your-profile',
  configured: true,
}
```

### 3. Adding New Skills or Experience
- Add items to `creativeSkillsData` or `technicalSkillsData`.
- Add new roles or volunteer work to `experienceData`.

---

## 🎨 Color Palette & Typography

- **Background:** `#0A0A0A` (Deep Black), `#111111` (Elevated Surface)
- **Cards:** `#141414` / `#171717`
- **Text:** `#F5F5F5` (Off-white), `#929292` (Muted Gray), `#5A5A5A` (Subtle)
- **Accent:** `#C5F467` (Electric Editorial Lime)
- **Headings Font:** Space Grotesk
- **Body Font:** Inter
- **Telemetry Font:** JetBrains Mono
