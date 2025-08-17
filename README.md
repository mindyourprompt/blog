# Mind Your Prompt Blog

A modern static blog built with 11ty for thought leadership in prompt engineering and AI communication.

## Features

- **Modern Design**: Monolith Haze theme with orange accents and clean typography
- **Responsive**: Mobile-first design that works on all devices  
- **Fast**: Static site generation with optimized performance
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **GitHub Pages Ready**: Automated deployment via GitHub Actions

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

### Required Software

- **Node.js** (v18.0.0 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **npm** (comes with Node.js)
  - Verify installation: `npm --version`
- **Git** (for version control)
  - Download from [git-scm.com](https://git-scm.com/)
  - Verify installation: `git --version`

### Recommended Tools

- **VS Code** with extensions:
  - Nunjucks Templates
  - 11ty Extension Pack
  - Prettier - Code formatter
  - Auto Rename Tag
- **Terminal/Command Line** familiarity

## Local Setup

### 1. Clone the Repository

```bash
# Clone the repository
git clone git@github.com:mindyourprompt/blog.git

# Navigate to project directory
cd blog
```

### 2. Install Dependencies

```bash
# Install all npm dependencies
npm install
```

This will install:
- Eleventy (static site generator)
- PostCSS (CSS processing)
- Markdown plugins
- Syntax highlighting
- Development tools

### 3. Start Development Server

```bash
# Start the development server with hot reload
npm run dev
```

- Opens automatically at `http://localhost:8080`
- Changes to files will automatically refresh the browser
- CSS changes are watched and rebuilt automatically
- Press `Ctrl+C` to stop the server

### 4. Verify Setup

Navigate to `http://localhost:8080` and you should see:
- ✅ Mind Your Prompt homepage loads
- ✅ Navigation works (Home, Articles, About)
- ✅ Articles page shows blog posts
- ✅ Individual article pages load properly
- ✅ Styling appears correctly (orange accents, clean typography)

## Available Commands

```bash
# Development
npm run dev          # Start dev server with hot reload
npm run build        # Build for production
npm run clean        # Clean the _site directory

# CSS
npm run css:build    # Build CSS once
npm run css:watch    # Watch CSS files for changes
```

## Site Structure

```
src/
├── _data/           # Global data (site config)
├── _includes/       # Layouts and templates
│   ├── base.njk     # Base layout
│   └── article.njk  # Article template
├── _assets/css/     # Stylesheets
├── posts/           # Blog posts (Markdown)
├── images/          # Static images
├── index.njk        # Homepage
├── articles.njk     # Articles listing
└── about.njk        # About page
```

## Content Management

### Writing Posts

Create new posts in `src/posts/` with this frontmatter:

```yaml
---
title: "Your Post Title"
layout: article.njk
date: 2024-01-15
tags: [post, category]
description: "SEO description and excerpt"
author: "Author Name"
---

Your content here...
```

### Available Shortcodes

- `{% badge "text", "variant" %}` - Creates styled badges
- `{% callout "type", "title" %}content{% endcallout %}` - Info/warning callouts

## Theme System

The Monolith Haze theme uses CSS custom properties for easy customization:

```css
:root {
  --primary: #1A1A1A;     /* Dark charcoal */
  --accent-fill: #F49D00;  /* Orange accent */
  --page-bg: #F0EBE3;     /* Warm beige */
  --surface: #FFFFFF;      /* Pure white */
}
```

## Deployment

### GitHub Pages

1. Push to your repository
2. Enable GitHub Pages in repository settings
3. GitHub Actions will automatically build and deploy

### Manual Deployment

```bash
npm run build
# Upload _site/ directory to your host
```

## Development

### Local Development

```bash
npm run dev
```

Opens at `http://localhost:8080` with hot reload.

### Production Build

```bash
npm run build
```

Generates optimized static files in `_site/`.

## Configuration

### Site Data

Edit `src/_data/site.json` for:
- Site name and description
- Author information  
- Social media links
- Navigation menu

### Build Settings

Modify `eleventy.config.js` for:
- Collections and filters
- Plugins and shortcodes
- Input/output directories

## Performance

- CSS is minified in production
- Images are optimized (add eleventy-img plugin for advanced optimization)
- HTML is semantic and accessible
- Lazy loading and other optimizations ready to add

## Browser Support

- Modern browsers (ES2018+)
- Graceful degradation for older browsers
- Accessible to screen readers and assistive technology

## License

MIT License - feel free to use for your own projects.

## Workflow for Collaborators

### Contributing Articles

1. **Create a new branch** for your article:
   ```bash
   git checkout -b article/your-article-name
   ```

2. **Create your article** in `src/posts/`:
   ```bash
   # Copy template structure
   cp src/posts/welcome-to-mind-your-prompt.md src/posts/your-new-article.md
   ```

3. **Edit the frontmatter** with your details:
   ```yaml
   ---
   title: "Your Article Title"
   layout: article.njk
   date: 2024-01-20
   tags: [post, your-category]
   description: "Brief description for SEO and excerpts"
   author: "Your Name"
   authorBio: "Brief bio (optional)"
   ---
   ```

4. **Test locally**:
   ```bash
   npm run dev
   # Check your article at http://localhost:8080/posts/your-new-article/
   ```

5. **Commit and push**:
   ```bash
   git add .
   git commit -m "Add article: Your Article Title"
   git push origin article/your-article-name
   ```

6. **Create Pull Request** on GitHub

### Making Design Changes

1. **CSS Changes**: Edit `src/_assets/css/main.css`
2. **Layout Changes**: Edit files in `src/_includes/`
3. **Content Changes**: Edit `src/_data/site.json` for site-wide data

### Testing Before Commit

```bash
# Always test these before committing:
npm run build        # Ensure build succeeds
npm run dev          # Test locally
```

## Troubleshooting

### Common Issues

**Node.js version errors:**
```bash
# Check your Node.js version
node --version
# Should be v18.0.0 or higher
```

**Permission errors on npm install:**
```bash
# Fix npm permissions (macOS/Linux)
sudo chown -R $(whoami) ~/.npm
```

**Port 8080 already in use:**
```bash
# Kill existing process
lsof -ti:8080 | xargs kill -9
# Or use different port
npx @11ty/eleventy --serve --port=3000
```

**Build fails after pull:**
```bash
# Clean install dependencies
rm -rf node_modules package-lock.json
npm install
```

### Getting Help

1. **Check existing issues** on GitHub
2. **Review the 11ty documentation**: [11ty.dev](https://11ty.dev)
3. **Ask in team chat** for Mind Your Prompt specific questions

## Project Structure Deep Dive

```
blog/
├── .github/workflows/    # GitHub Actions for deployment
├── src/
│   ├── _assets/css/      # Stylesheets (main.css)
│   ├── _data/            # Global data (site.json)
│   ├── _includes/        # Templates & layouts
│   │   ├── base.njk      # Main site template
│   │   └── article.njk   # Blog post template
│   ├── posts/            # Blog posts (Markdown files)
│   ├── images/           # Static images
│   ├── index.njk         # Homepage
│   ├── articles.njk      # Articles listing page
│   └── about.njk         # About page
├── _site/                # Generated site (ignored by git)
├── eleventy.config.js    # 11ty configuration
├── package.json          # Dependencies & scripts
├── postcss.config.js     # CSS processing config
└── README.md            # This file
```

## Brand Guidelines

### Colors (Monolith Haze Theme)
- **Primary**: `#1A1A1A` (Dark charcoal)
- **Accent**: `#F49D00` (Orange)
- **Background**: `#F0EBE3` (Warm beige)
- **Surface**: `#FFFFFF` (White)
- **Text**: `#1A1A1A` (Dark)
- **Muted**: `#6B6B6B` (Gray)

### Typography
- **Headers**: Spectral (serif)
- **Body**: Spectral (serif)
- **UI Elements**: System sans-serif

### Voice & Tone
- **Professional yet approachable**
- **Expert but not condescending**
- **Educational and actionable**
- **Focused on practical value**

## Deployment

### Automatic Deployment (Recommended)

The site automatically deploys to GitHub Pages when you push to `main`:

1. **Merge your PR** to main branch
2. **GitHub Actions** builds and deploys automatically
3. **Live site** updates at `https://mindyourprompt.github.io/blog/`

### Manual Deployment

```bash
# Build the site
npm run build

# The _site/ directory contains the built site
# Upload contents to your hosting provider
```

## Contributing Guidelines

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Test thoroughly**: `npm run build` and `npm run dev`
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Commit Message Format

```
type: brief description

Longer description if needed
- Bullet points for details
- Multiple changes explained
```

Types: `feat`, `fix`, `docs`, `style`, `content`, `refactor`

---

Built with ❤️ using [11ty](https://11ty.dev) and modern web standards.

**Questions?** Check our [project documentation](./PROJECT_NOTES.md) or reach out to the team.