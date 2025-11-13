# 🏃‍♂️ Nativity & St. Michael’s Running Website

This README provides full context and instructions for an **AI agent or developer** to build a static website using **Next.js (TypeScript)** with **Yarn** as the package manager.

The site represents the **Nativity** and **St. Michael’s** running programs (Cross Country and Track) and is organized around static pages, with some sections (e.g., Results and Records) populated from static JSON or Markdown files.

---

## 🧭 Project Overview

**Goals:**

- Clean, static website for running programs
- Built with **Next.js + TypeScript**
- Static export (no backend runtime)
- Easy updates via JSON/Markdown data files

**Design Priorities:**

- Simple, mobile-friendly layout
- Dropdown navigation for Cross Country / Track sections
- Fast, static build
- Minimal dependencies
- Light/dark theme optional

---

## 🏗️ Tech Stack

| Component  | Tool                                       |
| ---------- | ------------------------------------------ |
| Framework  | **Next.js**                                |
| Language   | **TypeScript**                             |
| Styling    | **TailwindCSS** (recommended)              |
| Content    | **Static JSON/Markdown**                   |
| Deployment | GitHub Pages, Cloudflare Pages, or Netlify |
| Routing    | Next.js App Router                         |
| Build      | `next build && next export`                |
| Package Manager | **Yarn**                              |

---

## 📁 Directory Structure

```
project-root/
├── next.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── images/
│   ├── pdfs/
│   └── favicon.ico
├── data/
│   ├── schedule_crosscountry.json
│   ├── schedule_track.json
│   ├── results_crosscountry.json
│   ├── results_track.json
│   ├── records_nativity.json
│   ├── records_stmichaels.json
│   └── resources.md
├── content/
│   ├── home.md
│   ├── training.md
│   ├── coaches_crosscountry.md
│   ├── coaches_track.md
└── src/
    ├── app/
    │   ├── page.tsx
    │   ├── coaches/
    │   │   ├── page.tsx
    │   │   ├── crosscountry/page.tsx
    │   │   └── track/page.tsx
    │   ├── schedule/
    │   │   ├── page.tsx
    │   │   ├── crosscountry/page.tsx
    │   │   └── track/page.tsx
    │   ├── results/
    │   │   ├── page.tsx
    │   │   ├── crosscountry/page.tsx
    │   │   └── track/page.tsx
    │   ├── records/
    │   │   ├── page.tsx
    │   │   ├── nativity/page.tsx
    │   │   └── stmichaels/page.tsx
    │   ├── training/page.tsx
    │   └── resources/page.tsx
    ├── components/
    │   ├── Layout.tsx
    │   ├── Navbar.tsx
    │   ├── Footer.tsx
    │   ├── DataTable.tsx
    │   ├── Card.tsx
    │   └── MarkdownRenderer.tsx
    └── styles/
        └── globals.css
```

---

## 📑 Page Details

### **Home**
Overview of both programs, pulling content from `content/home.md`.

### **Coaches**
- `/coaches/crosscountry`
- `/coaches/track`
Markdown bios from `/content/coaches_crosscountry.md` or `/content/coaches_track.md`.

### **Schedule**
Loads data from JSON:
```json
[
  { "date": "2025-09-12", "event": "St. Michael Invitational", "location": "Brookfield Park", "time": "4:00 PM" }
]
```

### **Results**
Displays past results:
```json
[
  { "date": "2025-09-12", "meet": "St. Michael Invitational", "boys": "2nd place", "girls": "1st place", "details": "/pdfs/results_0912.pdf" }
]
```

### **Records**
From `records_nativity.json` and `records_stmichaels.json`:
```json
[
  { "event": "800m", "name": "A. Johnson", "year": 2023, "time": "2:12.45" }
]
```

### **Training**
Static Markdown content (`content/training.md`).

### **Resources**
List of links or downloads (`data/resources.md`).

---

## ⚙️ Setup & Development

Using **Yarn**:

```bash
yarn install
yarn dev
yarn build
yarn export
yarn start
```

---

## ⚙️ Example Config Files

**package.json**
```json
{
  "name": "nativity-running-site",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "export": "next export",
    "start": "next start"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "react-markdown": "^9.0.0",
    "tailwindcss": "^3.4.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0"
  }
}
```

**next.config.mjs**
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static build
  reactStrictMode: true,
  images: { unoptimized: true },
};
export default nextConfig;
```

**tsconfig.json**
```json
{
  "compilerOptions": {
    "target": "esnext",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": ["next-env.d.ts", "src/**/*"],
  "exclude": ["node_modules"]
}
```

---

## 🧠 AI Agent Notes

1. Use Next.js App Router with TypeScript.
2. Implement file-based routing as shown.
3. Global layout includes Navbar + Footer.
4. Use `react-markdown` or `next-mdx-remote` for Markdown.
5. Load JSON files using `import` (static).
6. Dropdown nav links:
   - Coaches → Cross Country / Track
   - Schedule → Cross Country / Track
   - Results → Cross Country / Track
   - Records → Nativity / St. Michael’s
7. Use TailwindCSS for styling.
8. Export static build to `/out`.

---

## 🚀 Deployment

After building, deploy `/out` to:

- GitHub Pages
- Cloudflare Pages
- Netlify
- Raspberry Pi via Nginx

---

## ✅ Summary

This project is a fully static, data-driven site for Nativity & St. Michael’s running programs, built in **Next.js + TypeScript** and managed using **Yarn**. All content is editable via Markdown/JSON files, making it fast, portable, and simple to maintain.

