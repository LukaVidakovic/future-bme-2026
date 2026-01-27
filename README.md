# Future-BME 2026 Conference Website

Modern, responsive website for the 2nd International Conference on Business, Management, and Economics Engineering.

![Future-BME 2026](public/images/HeaderBME.jpg)

## 🎯 About

**Future-BME 2026** - *Forging the Future: Business, Management and Economics Engineering in the Age of Sustainability and Digital Transformation*

**Conference Dates:** September 29-30, 2026  
**Location:** Fruške Terme, Serbia  
**Organizer:** Department of Industrial Engineering and Management, Faculty of Technical Sciences, University of Novi Sad

## ✨ Features

- 🎨 **Modern Design** - Glassmorphism UI with purple/blue gradient theme
- 🎬 **Smooth Animations** - Framer Motion powered interactions
- 📱 **Fully Responsive** - Mobile-first design approach
- ⚡ **Fast Performance** - Next.js 15 with optimized images
- 🎯 **Interactive Timeline** - Animated important dates section
- 💫 **Parallax Effects** - Engaging scroll animations
- 🎪 **Stats Counters** - Animated participant statistics

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Components:** shadcn/ui
- **Deployment:** GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/LukaVidakovic/future-bme-2026.git

# Navigate to project directory
cd future-bme-2026

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
future-bme-2026/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   └── layout.tsx         # Root layout
├── components/
│   ├── home/              # Homepage components
│   │   ├── Hero.tsx       # Hero section with parallax
│   │   ├── Stats.tsx      # Animated statistics
│   │   └── ImportantDates.tsx  # Timeline
│   ├── layout/            # Layout components
│   │   ├── Navbar.tsx     # Navigation bar
│   │   └── Footer.tsx     # Footer
│   └── ui/                # shadcn/ui components
├── public/
│   ├── images/            # Conference images (450+)
│   └── files/             # PDF documents
└── lib/                   # Utility functions
```

## 🎨 Design System

### Color Palette

```css
--navy: #253551;           /* Primary background */
--teal: #2B5165;           /* Secondary background */
--blue: #477687;           /* Accent */
--blue-light: #6C95A1;     /* Light accent */
--purple: #6950DE;         /* Brand color */
--gray-light: #D7DFE5;     /* Text */
```

## 📄 Pages

- ✅ **Home** - Hero, Stats, Important Dates, Aims & Scope
- 🚧 **Conference Topics** - 2026 topics
- 🚧 **Committees** - Organizing & Scientific committees
- 🚧 **Event Info** - Venue and location details
- 🚧 **Submissions** - Paper submission guidelines
- 🚧 **Registration** - Registration and fees
- 🚧 **Ethics** - Ethics and publication policy
- 🚧 **Sponsors** - Conference sponsors
- 🚧 **Past Conferences** - Future-BME 2024 gallery

## 🌐 Deployment

The website is deployed on GitHub Pages at: [https://lukavidakovic.github.io/future-bme-2026](https://lukavidakovic.github.io/future-bme-2026)

### Deploy Commands

```bash
# Build for production
npm run build

# Export static site
npm run export

# Deploy to GitHub Pages
npm run deploy
```

## 📝 Conference Information

**ISSN:** 3042-2728 (Print) | 3042-2868 (Online)

Selected papers may be invited for submission to **IJIEM** - International Journal of Industrial Engineering and Management (ISSN 2217-2661), indexed by Scopus.

## 📧 Contact

**Email:** future-bme@uns.ac.rs  
**Address:** Trg Dositeja Obradovića 7, Novi Sad, Serbia

## 📜 License

© 2026 Future-BME. All rights reserved.

---

**Built with ❤️ by the Future-BME Team**
