<p align="center">
  <img src="public/Logo.webp" alt="Portfolio Logo" width="80" height="80" />
</p>

<h1 align="center">Rupesh Jagtap - Developer Portfolio</h1>

<p align="center">
  <strong>A modern, responsive portfolio built with Next.js 16, React 19, and TailwindCSS 4</strong>
</p>

<p align="center">
  <a href="https://rupeshjagtap.com">Live Demo</a> •
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Structure</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
</p>

---

## ✨ Features

### 🎨 **Design & UI**

- **Dark/Light Theme Toggle** - Seamless theme switching with system preference detection and localStorage persistence
- **Smooth Animations** - Built with Motion (Framer Motion) for fluid, modern animations
- **Responsive Design** - Mobile-first design that looks stunning on all devices
- **Custom Typography** - Utilizes Geist font family and custom Hanken Grotesk variable font

### 👤 **Hero Section**

- **Profile Avatar** - Animated profile image with theme-aware accent colors
- **Personal Stats** - Display years of experience, projects completed, and other metrics
- **Social Links** - Easy access to Twitter/X, LinkedIn, GitHub, Instagram, Pinterest, and Email
- **Live Spotify Activity** - Real-time display of currently playing or last played song via Spotify API integration
- **Tech Stack Display** - Interactive tech icons with tooltips showing expertise

### 💼 **Experience Section**

- **Career Timeline** - Professional experience with role highlights
- **Interactive Cards** - Hover effects and smooth transitions
- **Accomplishment Highlights** - Key achievements with chevron animations

### 🚀 **Projects Showcase**

- **Featured Projects Grid** - Display of 7 production-ready projects
- **Project Cards** - Each card includes:
  - Project name and tagline
  - Description and tech stack
  - Status indicator
  - Live demo and GitHub links
- **Show More/Less** - Initially displays 4 projects with expandable view

### 📊 **GitHub Integration**

- **GitHub Activity Calendar** - Visual contribution graph using `react-github-calendar`
- **Contribution Counter** - Real-time total contributions fetched via GitHub GraphQL API
- **Profile Link** - Direct link to GitHub profile

### 🏆 **Achievements Section**

- Showcase of certifications, awards, and notable accomplishments

### 👨‍💻 **About Me**

- Personal introduction with animated avatar
- Skills showcase with technology icons

### 🔍 **SEO Optimized**

- **Dynamic Sitemap** - Auto-generated sitemap for better search engine indexing
- **Robots.txt** - Configured for optimal crawling
- **Meta Tags** - Comprehensive Open Graph and Twitter Card metadata
- **Structured Data** - Proper heading hierarchy and semantic HTML

---

## 🛠️ Tech Stack

### **Core**

| Technology                                    | Version | Purpose                      |
| --------------------------------------------- | ------- | ---------------------------- |
| [Next.js](https://nextjs.org/)                | 16.1.6  | React Framework (App Router) |
| [React](https://react.dev/)                   | 19.2.3  | UI Library                   |
| [TypeScript](https://www.typescriptlang.org/) | 5.x     | Type Safety                  |

### **Styling**

| Technology                                                     | Purpose             |
| -------------------------------------------------------------- | ------------------- |
| [TailwindCSS](https://tailwindcss.com/) v4                     | Utility-first CSS   |
| [tw-animate-css](https://www.npmjs.com/package/tw-animate-css) | CSS Animations      |
| [class-variance-authority](https://cva.style/docs)             | Component Variants  |
| [clsx](https://www.npmjs.com/package/clsx)                     | Conditional Classes |
| [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) | Class Merging       |

### **UI Components**

| Technology                            | Purpose                |
| ------------------------------------- | ---------------------- |
| [Radix UI](https://www.radix-ui.com/) | Headless UI Primitives |
| [Lucide React](https://lucide.dev/)   | Icon Library           |
| [Motion](https://motion.dev/)         | Animations             |

### **Data & API**

| Technology                                                                   | Purpose              |
| ---------------------------------------------------------------------------- | -------------------- |
| [Axios](https://axios-http.com/)                                             | HTTP Client          |
| [react-github-calendar](https://www.npmjs.com/package/react-github-calendar) | GitHub Contributions |

### **Development Tools**

| Technology                                           | Purpose              |
| ---------------------------------------------------- | -------------------- |
| [ESLint](https://eslint.org/)                        | Code Linting         |
| [Prettier](https://prettier.io/)                     | Code Formatting      |
| [Husky](https://typicode.github.io/husky/)           | Git Hooks            |
| [lint-staged](https://github.com/okonet/lint-staged) | Staged Files Linting |

---

## 📁 Project Structure

```
next_portfolio/
├── app/                          # Next.js App Router
│   ├── blogs/                    # Blog section
│   ├── globals.css               # Global styles & theme variables
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Home page with metadata
│   ├── robots.ts                 # Robots.txt configuration
│   └── sitemap.ts                # Dynamic sitemap generation
│
├── components/
│   ├── AboutMe/                  # About section
│   ├── Achievments/              # Achievements section
│   ├── Experience/               # Work experience section
│   ├── Footer/                   # Footer component
│   ├── GitHub/                   # GitHub activity section
│   │   ├── GitHub.tsx            # Server component (fetches data)
│   │   └── GitHubCalendarClient.tsx  # Client component (renders calendar)
│   ├── HeroSection/              # Hero section components
│   │   ├── Hero.tsx              # Main hero wrapper
│   │   ├── ActiveStatus.tsx      # Discord status
│   │   ├── GetInTouch.tsx        # CTA button
│   │   ├── Intro.tsx             # Introduction text
│   │   ├── SocialLinks.tsx       # Social media links
│   │   ├── SongActivity.tsx      # Spotify integration
│   │   ├── Stats.tsx             # Personal statistics
│   │   └── TechStack.tsx         # Technology icons
│   ├── Navbar/                   # Navigation with theme toggle
│   ├── Projects/                 # Projects section
│   │   ├── Projects.tsx          # Projects data & container
│   │   ├── ProjectsGrid.tsx      # Grid layout component
│   │   └── ProjectCard.tsx       # Individual project card
│   └── ui/                       # Reusable UI components
│
├── hooks/
│   └── ThemeProvider.tsx         # Theme context & hook
│
├── lib/
│   └── utils.ts                  # Utility functions (cn helper)
│
├── public/                       # Static assets
│   ├── Logo.webp                 # Site logo
│   ├── HankenGrotesk-Variable.ttf  # Custom font
│   └── [project_images].webp     # Project screenshots
│
├── types/                        # TypeScript type definitions
│
└── configuration files
    ├── next.config.ts            # Next.js configuration
    ├── tsconfig.json             # TypeScript configuration
    ├── tailwind.config.ts        # TailwindCSS configuration
    ├── eslint.config.mjs         # ESLint configuration
    ├── .prettierrc.json          # Prettier configuration
    └── .lintstagedrc.json        # Lint-staged configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/rupesh0001-tech/next_portfolio.git
   cd next_portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # GitHub API Token (for contribution graph)
   GITHUB_PATH=your_github_personal_access_token

   # Site URL (for SEO)
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📜 Available Scripts

| Command               | Description               |
| --------------------- | ------------------------- |
| `npm run dev`         | Start development server  |
| `npm run build`       | Build for production      |
| `npm run start`       | Start production server   |
| `npm run lint`        | Run ESLint                |
| `npm run format`      | Format code with Prettier |
| `npm run check`       | Check code formatting     |
| `npm run check-types` | TypeScript type checking  |

---

## 🎨 Theme Configuration

The portfolio supports **dark** and **light** modes with:

- **System preference detection** - Automatically matches OS theme
- **Manual toggle** - Switch themes via navbar button
- **No flash** - Theme is applied before hydration
- **Persistence** - Theme choice saved in localStorage

### Custom CSS Variables

Theme-aware variables are defined in `globals.css`:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  /* ... more variables */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... more variables */
}
```

---

## 🔧 Customization

### Adding Projects

Edit `components/Projects/Projects.tsx`:

```typescript
const projects: ProjectType[] = [
  {
    id: "your-project",
    name: "Project Name",
    tagline: "Short Tagline",
    description: "Full description of the project",
    image: "/project_image.webp",
    tech: ["React", "Node.js", "MongoDB"],
    status: "All Systems Operational",
    link: "https://live-demo.com",
    githubLink: "https://github.com/username/repo",
  },
  // ... more projects
];
```

### Updating Tech Stack

Edit `components/HeroSection/TechStack.tsx`:

```typescript
export const techStack = [
  {
    name: "Technology Name",
    icon: "https://skillicons.dev/icons?i=tech",
    desc: "Category",
  },
  // ... more technologies
];
```

### Customizing Social Links

Edit `components/HeroSection/SocialLinks.tsx` to add or modify social media links.

---

## 🌐 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rupesh0001-tech/next_portfolio)

### Other Platforms

This portfolio can be deployed on any platform that supports Next.js:

- **Netlify**
- **Railway**
- **AWS Amplify**
- **Self-hosted** (VPS with Node.js)

---

## 📄 Environment Variables

| Variable               | Required | Description                                               |
| ---------------------- | -------- | --------------------------------------------------------- |
| `GITHUB_PATH`          | Yes      | GitHub Personal Access Token for GraphQL API              |
| `NEXT_PUBLIC_SITE_URL` | No       | Site URL for SEO (defaults to `https://rupeshjagtap.com`) |

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📬 Contact

**Rupesh Jagtap** - Full Stack Developer

- 🌐 Website: [rupeshjagtap.com](https://rupeshjagtap.com)
- 📧 Email: [rupeshjagtap157@gmail.com](mailto:rupeshjagtap157@gmail.com)
- 💼 LinkedIn: [Rupesh Jagtap](https://www.linkedin.com/in/rupeshjagtap)
- 🐦 Twitter/X: [@rupesh248000](https://x.com/rupesh248000)
- 🐙 GitHub: [@rupesh0001-tech](https://github.com/rupesh0001-tech)

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/rupesh0001-tech">Rupesh Jagtap</a>
</p>
