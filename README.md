# 🏃‍♂️ Nativity & St. Michael's Track & Field and Cross Country

A comprehensive static website showcasing the **Nativity Parish School** and **St. Michael the Archangel** CYO XC and T&F programs, including results, schedules, records, and athlete statistics.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Data Management](#data-management)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 🎯 Overview

This website serves as the central hub for the combined CYO XC and T&F programs at the schools', providing:

- **Cross Country** and **Track & Field** schedules
- Meet results with detailed athlete performance data
- Individual athlete profiles and statistics
- Team and individual rankings
- School and CYO (Catholic Youth Organization) records
- Coach profiles and training resources

The site is built as a fully static Next.js application, making it fast, SEO-friendly, and easy to deploy on any static hosting platform.

## 🛠 Tech Stack

| Component | Technology |
|-----------|-----------|
| **Framework** | Next.js 14+ (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Package Manager** | Yarn |
| **Content** | JSON & Markdown |
| **Build Output** | Static Export |
| **Deployment** | GitHub Pages / Netlify / Cloudflare Pages |

## ✨ Features

### Cross Country
- Season schedules with meet details
- Individual meet results with placement data
- Team rankings by grade and gender
- Season-long athlete performance tracking
- Historical school records

### Track & Field
- Meet schedules and locations
- Individual athlete event results
- Personal records and improvements
- Event-specific rankings
- Relay team results
- CYO conference records

### Additional Features
- Coach profiles with photos and bios
- Training tips and resources
- Responsive design for mobile and desktop
- PDF downloads for official records
- Dynamic athlete manifest for easy navigation

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ 
- **Yarn** package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ajgifford/nps-sma-track-xc.git
cd nps-sma-track-xc
```

2. Install dependencies:
```bash
yarn install
```

3. Run the development server:
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
yarn dev          # Start development server
yarn build        # Build for production
yarn start        # Start production server
yarn lint         # Run ESLint
```

## 📁 Project Structure

```
nps-sma-track-xc/
├── public/
│   ├── data/
│   │   ├── track/2025/        # Track meet results by date
│   │   │   ├── individual_athletes/  # Individual athlete data
│   │   │   ├── rankings/      # Event rankings
│   │   │   └── athlete_manifest.json
│   │   └── xc/2025/           # Cross country results
│   │       ├── rankings/      # Runner rankings
│   │       └── season_results/ # Season summaries
│   ├── images/
│   │   ├── coaches/           # Coach photos
│   │   ├── nps.png
│   │   └── sma.png
│   └── pdfs/                  # Official record PDFs
├── data/
│   ├── coaches.json           # Coach information
│   ├── records_*.json         # School records
│   ├── schedule_*.json        # Season schedules
│   └── resources.md           # Training resources
├── content/
│   ├── home.md                # Homepage content
│   └── training.md            # Training information
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── coaches/
│   │   ├── records/
│   │   ├── results/
│   │   ├── schedule/
│   │   ├── training/
│   │   └── resources/
│   ├── components/            # Reusable React components
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility functions
│   ├── types/                 # TypeScript type definitions
│   └── styles/                # Global styles
└── scripts/                   # Data processing scripts
```

## 📊 Data Management

### Results Data Structure

Results are stored as JSON files organized by sport and date:

**Track Results** (`public/data/track/2025/MM-DD-YYYY/team_results_*.json`):
```json
{
  "meetName": "St. Michael Invitational",
  "date": "2025-04-26",
  "location": "Brookfield Park",
  "results": [
    {
      "athlete": "John Doe",
      "grade": "8",
      "gender": "boys",
      "event": "800m",
      "result": "2:15.45",
      "place": 1
    }
  ]
}
```

**Cross Country Results** (`public/data/xc/2025/MM-DD-YYYY/`):
Similar structure with race-specific data.

### Adding New Results

1. Create a new dated folder in `public/data/track/2025/` or `public/data/xc/2025/`
2. Add result JSON files following the established schema
3. Update the athlete manifest if new athletes are added
4. Rebuild the site to regenerate rankings

### Updating Records

Edit the appropriate JSON file:
- `data/records_nativity.json` - Nativity school records
- `data/records_stmichaels.json` - St. Michael's school records
- `data/2025_cyo_track_records_*.json` - CYO records

## 🔧 Development

### Adding a New Page

1. Create a new directory under `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `src/components/Navbar.tsx` if needed

### Creating Custom Components

Add reusable components to `src/components/` and import where needed.

### Styling Guidelines

- Uses Tailwind CSS utility classes
- Global styles in `src/styles/globals.css`
- Responsive design with mobile-first approach
- Dark mode support can be added via Tailwind's dark mode feature

## 🚀 Deployment

### Static Export

The site is configured for static export:

```bash
yarn build
```

This generates a static site in the `out/` directory (or `.next/` depending on Next.js version).

### Deployment Platforms

**GitHub Pages:**
```bash
# Build and deploy
yarn build
# Push the out/ directory to gh-pages branch
```

**Netlify/Cloudflare Pages:**
- Connect your Git repository
- Set build command: `yarn build`
- Set publish directory: `out` or `.next`

**Custom Server:**
Deploy the static files to any web server (Nginx, Apache, etc.).

## 🤝 Contributing

### Workflow

1. Create a feature branch
2. Make changes
3. Test locally with `yarn dev`
4. Build to verify static export works
5. Submit pull request

### Data Updates

For coaches updating results:
1. Follow the JSON schema in existing files
2. Use consistent date formatting (MM-DD-YYYY)
3. Validate JSON syntax before committing
4. Update athlete manifest when adding new athletes

### Code Style

- TypeScript strict mode enabled
- ESLint configuration included
- Follow existing component patterns
- Use meaningful variable and function names

## 📝 License

This project is maintained for the Nativity Parish School and St. Michael the Archangel CYO XC and T&F programs.

## 📧 Contact

For questions or issues, please contact the coaching staff or create an issue in the repository.

---

Built with ❤️ for the NPS and SMA communities.
