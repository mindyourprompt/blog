# Mind Your Prompt Blog

A modern static blog built with 11ty for thought leadership in prompt engineering and AI communication.

## Features

- **Modern Design**: Monolith Haze theme with orange accents and clean typography
- **Responsive**: Mobile-first design that works on all devices  
- **Fast**: Static site generation with optimized performance
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **GitHub Pages Ready**: Automated deployment via GitHub Actions

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Clean build directory
npm run clean
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

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the build
5. Submit a pull request

---

Built with ❤️ using [11ty](https://11ty.dev) and modern web standards.