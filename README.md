# Portfolio Website

A modern, responsive portfolio website built with React to showcase my professional work, experience, and skills.

## 🌟 Overview

This portfolio website serves as a comprehensive showcase of my professional journey, featuring:

- **Projects** - Detailed case studies with problem statements, solutions, and technical implementations
- **Experience** - Professional work history with responsibilities and achievements
- **Skills** - Technical expertise across frontend, backend, AI/ML, and development tools
- **Education** - Academic background and certifications
- **Contact** - Easy ways to connect for opportunities and collaborations

## ✨ Features

- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- 🎨 **Modern Design** - Clean, professional UI with smooth animations
- 🚀 **Fast Performance** - Built with React for optimal speed
- 🔍 **SEO Optimized** - Proper meta tags and structured data for search engines
- 📊 **Dynamic Filtering** - Filter projects by category (Web, AI/ML, Full Stack)
- 📝 **Contact Form** - Built-in form with validation
- ♿ **Accessible** - Follows web accessibility best practices

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19.2.3, React Router v7 |
| **Styling** | Tailwind CSS v3, Custom CSS |
| **Build Tool** | Create React App, Webpack |
| **SEO** | react-helmet-async |
| **Testing** | React Testing Library, Jest |

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets (favicon, manifest, etc.)
├── src/
│   ├── components/        # Reusable React components
│   │   ├── layout/       # Navbar, Footer, PageLayout
│   │   ├── sections/     # Home page sections (Hero, Projects, etc.)
│   │   └── ui/           # UI components (Button, Card, Section, etc.)
│   ├── data/             # Centralized data management
│   │   ├── projects.js   # Project portfolio data
│   │   ├── experience.js # Work experience timeline
│   │   ├── skills.js     # Technical skills by category
│   │   ├── education.js  # Educational background
│   │   ├── certifications.js # Professional certifications
│   │   └── config.js     # Site-wide configuration
│   ├── pages/            # Route-based page components
│   │   ├── Home.js       # Landing page
│   │   ├── Projects.js   # Projects listing with filters
│   │   ├── ProjectDetail.js # Individual project case studies
│   │   ├── Experience.js # Work experience timeline
│   │   ├── About.js      # About me page
│   │   ├── Contact.js    # Contact form
│   │   └── NotFound.js   # 404 error page
│   ├── App.js            # Main application with routing
│   ├── index.js          # Application entry point
│   └── index.css         # Global styles
├── .gitignore            # Git ignore configuration
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/22CB006/my-portfolio.git
cd my-portfolio/portfolio
```

2. **Install dependencies**
```bash
npm install --legacy-peer-deps
```

3. **Start development server**
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` directory.

## 🎨 Customization Guide

### Update Personal Information

Edit `src/data/config.js`:
```javascript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline",
  contact: {
    email: "your.email@example.com",
    phone: "+1234567890",
    // ... other contact info
  }
};
```

### Add Projects

Edit `src/data/projects.js`:
```javascript
export const projects = [
  {
    id: "project-slug",
    title: "Project Name",
    shortDescription: "Brief description",
    fullDescription: "Detailed description",
    problem: "Problem statement",
    solution: "Your solution",
    features: ["Feature 1", "Feature 2"],
    techStack: ["React", "Node.js"],
    github: "https://github.com/...",
    liveDemo: "https://...",
    images: []
  }
];
```

### Update Experience

Edit `src/data/experience.js` with your work history, responsibilities, and technologies used.

### Modify Skills

Edit `src/data/skills.js` to organize your technical skills by category.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm test` | Run test suite |
| `npm run build` | Create production build |

## 🌐 Deployment

This application can be deployed to:

- **Vercel** - Connect GitHub repo for automatic deployments
- **Netlify** - Deploy via Git or drag-and-drop
- **GitHub Pages** - Use gh-pages for static hosting
- **AWS S3 + CloudFront** - For scalable cloud hosting

## 📧 Contact

For collaborations, opportunities, or questions, feel free to reach out through the contact form on the website.

---

Built with ❤️ using React
