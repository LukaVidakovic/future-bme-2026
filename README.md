# Future-BME 2026 Conference Website

Modern, responsive website for the 2nd International Conference on Business, Management, and Economics Engineering.

![Future-BME 2026](public/images/HeaderBME.jpg)

## 🎯 About

**Future-BME 2026** - *Forging the Future: Business, Management and Economics Engineering in the Age of Sustainability and Digital Transformation*

**Conference Dates:** September 29-30, 2026  
**Location:** Fruške Terme, Serbia  
**Organizer:** Department of Industrial Engineering and Management, Faculty of Technical Sciences, University of Novi Sad

## ✨ Current Features

### 🎨 Design & UX
- Modern glassmorphism UI with purple/blue gradient theme
- Smooth animations powered by Framer Motion
- Fully responsive mobile-first design
- Parallax effects and scroll animations
- Interactive timeline for important dates
- Animated statistics counters

### 🔍 Navigation & Search
- Global search (Cmd/Ctrl+K) - searches papers and pages
- Scroll progress bar in navbar
- Back to top floating button
- Sticky navigation with smooth scroll

### 🏅 Scopus Integration
- **Scopus Indexed Badge** displayed on:
  - Floating badge (bottom-left, show/hide)
  - Homepage hero section (emphasized)
  - Footer (alongside university logos)

### 📄 Pages (11 Complete)
- ✅ **Homepage** - Hero, Stats, Call for Papers, Important Dates, Aims & Scope
- ✅ **Topics** - 6 main conference topics with subtopics
- ✅ **Committees** - International Program Committee (60+ members)
- ✅ **Event Info** - Venue details, Google Maps, accommodation
- ✅ **Submissions** - Guidelines, templates, EasyChair link
- ✅ **Registration** - Fee structure, payment info, deadlines
- ✅ **Sponsors** - 5 sponsorship tiers (Platinum to Conference Friend)
- ✅ **Ethics & Policy** - 8 comprehensive policy sections
- ✅ **Past Conference 2024** - 132 papers with full metadata
- ✅ **Gallery 2024** - Photo gallery from previous conference
- ✅ **404 Page** - Custom error page with auto-redirect

### 🔧 Technical Features
- **Framework:** Next.js 16.1.6 with Turbopack
- **Static Export:** Deployed to GitHub Pages
- **SEO Optimized:** Meta tags, Open Graph, Twitter Cards, Sitemap, Robots.txt
- **PWA Ready:** Manifest file, favicons
- **132 Papers:** Full metadata with download links
- **450+ Images:** Optimized conference photos

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

### Build & Deploy

```bash
# Build static site
npm run build

# Deploy to GitHub Pages
touch out/.nojekyll
npx gh-pages -d out --dotfiles
```

## 📁 Project Structure

```
future-bme-2026/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout with SEO
│   ├── sitemap.ts         # XML sitemap generator
│   ├── manifest.ts        # PWA manifest
│   ├── not-found.tsx      # 404 page
│   ├── committees/        # Committees page
│   ├── ethics/            # Ethics & Policy page
│   ├── event-info/        # Event information page
│   ├── past-conferences/  # Past conferences
│   │   └── 2024/          # 2024 conference & gallery
│   ├── registration/      # Registration page
│   ├── sponsors/          # Sponsors page
│   ├── submissions/       # Submissions page
│   └── topics/            # Topics page
├── components/
│   ├── home/              # Homepage components
│   │   ├── Hero.tsx       # Hero with parallax & Scopus badge
│   │   ├── Stats.tsx      # Animated statistics
│   │   └── ImportantDates.tsx  # Timeline
│   └── layout/            # Layout components
│       ├── Navbar.tsx     # Navigation with search & progress bar
│       ├── Footer.tsx     # Footer with Scopus badge
│       ├── BackToTop.tsx  # Back to top button
│       ├── SearchBar.tsx  # Global search modal
│       └── ScopusBadge.tsx # Floating Scopus badge
├── lib/
│   ├── papers-data.ts     # 132 papers metadata
│   ├── search-index.ts    # Search functionality
│   └── utils.ts           # Utility functions
├── public/
│   ├── images/            # Conference images (450+)
│   ├── files/             # PDF papers (132)
│   ├── index.html         # Root redirect
│   └── robots.txt         # SEO robots file
└── next.config.ts         # Next.js config (basePath: /future-bme-2026)
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

### Typography
- **Font:** Geist Sans (primary), Geist Mono (code)
- **Headings:** Bold, large scale (4xl-8xl)
- **Body:** Regular, readable (base-xl)

## 🔄 Next Phase - Improvements Needed

### 🎯 Current Focus
1. **Navbar Enhancement** - Improve navigation UX and accessibility
2. **StartAI Chatbot Integration** - Add instant support for visitors

### 📋 Priority Improvements
See [IMPROVEMENT_SUGGESTIONS_CLEAN.md](./IMPROVEMENT_SUGGESTIONS_CLEAN.md) for detailed roadmap:

**Phase 1 - Critical:**
- Countdown timers (conference & early bird)
- Sponsors showcase (2024 & 2026 logos)
- Keynote speakers page
- Conference schedule/program
- Contact page with form
- FAQ section
- Legal pages (Privacy, Terms, GDPR)

**Phase 2 - High Priority:**
- Committee member profiles with photos
- Registration & submission statistics
- Hotel & travel information
- Paper citation functionality
- Advanced paper search & filtering
- Google Analytics integration

**Phase 3 - Polish:**
- Testimonials section
- Newsletter signup
- Social share buttons
- Accessibility improvements
- StartAI chatbot integration

## 🌐 Live Site

**Production:** [https://lukavidakovic.github.io/future-bme-2026/](https://lukavidakovic.github.io/future-bme-2026/)

## 📊 SEO & Analytics

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social media
- ✅ Twitter Cards
- ✅ XML Sitemap
- ✅ Robots.txt
- ✅ PWA Manifest
- ✅ Structured metadata
- ⏳ Google Analytics (planned)
- ⏳ Event schema markup (planned)

## 📝 Documentation

- [SEO Implementation](./SEO_README.md)
- [Papers Data Structure](./PAPERS_README.md)
- [Meeting Presentation](./MEETING_PRESENTATION.md)
- [Improvement Suggestions](./IMPROVEMENT_SUGGESTIONS_CLEAN.md)

## 🤝 Contributing

This is a conference website project. For suggestions or issues, please contact the organizing committee.

## 📧 Contact

**Email:** future-bme@uns.ac.rs  
**Website:** [https://future-bme.ftn.uns.ac.rs](https://future-bme.ftn.uns.ac.rs)

## 📄 License

© 2026 Future-BME Conference. All rights reserved.

---

**Built with ❤️ by the Future-BME Team**
