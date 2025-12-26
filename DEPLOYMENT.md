# Deployment Guide

## Repository Information

**GitHub Repository**: https://github.com/22CB006/my-portfolio

## What's Included

✅ **Source Code**
- Complete React application
- All components, pages, and utilities
- Centralized data files for easy updates

✅ **Configuration Files**
- package.json with all dependencies
- Tailwind CSS configuration
- PostCSS configuration
- Git ignore rules

✅ **Documentation**
- Professional README with setup instructions
- Code structure documentation
- Customization guide

## What's NOT Included (Automatically Ignored)

❌ `node_modules/` - Dependencies (install with npm)
❌ `build/` - Production build (create with npm run build)
❌ `.env` - Environment variables
❌ IDE-specific files (.vscode, .idea)
❌ OS-specific files (.DS_Store, Thumbs.db)

## Quick Start for Collaborators

```bash
# Clone the repository
git clone https://github.com/22CB006/my-portfolio.git
cd my-portfolio/portfolio

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm start
```

## Deployment Options

### Option 1: Vercel (Recommended)
1. Go to https://vercel.com
2. Import your GitHub repository
3. Vercel will auto-detect React and deploy

### Option 2: Netlify
1. Go to https://netlify.com
2. Connect your GitHub repository
3. Build command: `npm run build`
4. Publish directory: `build`

### Option 3: GitHub Pages
```bash
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

## Updating Content

### Add New Project
Edit `src/data/projects.js` and add your project details.

### Update Experience
Edit `src/data/experience.js` with your work history.

### Modify Skills
Edit `src/data/skills.js` to update your technical skills.

### Change Contact Info
Edit `src/data/config.js` to update your contact information.

## Professional Tips

✅ Keep your data files updated
✅ Test locally before pushing
✅ Use meaningful commit messages
✅ Deploy to a custom domain for professional appearance
✅ Add Google Analytics for tracking visitors

## Support

For issues or questions, create an issue on GitHub or contact through the portfolio website.
