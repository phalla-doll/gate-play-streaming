# GatePlay Streaming

A premium, cinematic landing page for a curated streaming service. GatePlay focuses on intentional discovery, handpicked weekly selections, and global perspectives, moving away from algorithm-driven chaos.

## 🌟 Features

- **Cinematic Dark Theme**: A visually immersive dark UI designed to make movie posters and content pop.
- **Scroll Animations**: Smooth fade-in and slide-up animations as sections enter the viewport, powered by Framer Motion.
- **Interactive Carousels**: Horizontally scrollable content rows (Featured, Continue Watching, Editor's Picks, Originals) with hidden scrollbars and hover scaling effects.
- **Custom Typography**: Uses the **Satoshi** font from Fontshare for a clean, modern, and premium aesthetic.
- **Responsive Design**: Fully responsive layout that adapts seamlessly from mobile devices to large desktop screens.
- **Pricing & Value Proposition**: Clear, structured sections highlighting the platform's unique selling points and subscription tiers.

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Fontshare (Satoshi)](https://www.fontshare.com/fonts/satoshi)

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `app/page.tsx`: The main landing page containing all sections (Hero, Carousels, Pricing, Footer).
- `app/layout.tsx`: The root layout defining the HTML structure, dark theme, and font imports.
- `app/globals.css`: Global stylesheet including Tailwind configuration and custom utilities (e.g., `.scrollbar-hide`).
- `metadata.json`: Application metadata for the AI Studio environment.

## 🎨 Design Philosophy

GatePlay is designed to feel like a boutique cinema experience. It uses deep blacks (`#0A0A0A`, `#111111`), subtle white/gray text for hierarchy, and a signature red (`#E50914`) for primary calls to action. The layout prioritizes large imagery and breathing room over dense information packing.
