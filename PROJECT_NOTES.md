# Mind Your Prompt Blog - Project Notes

## Project Overview
- **Brand**: Mind Your Prompt 
- **Purpose**: Stealth mode project for building brand recognition through thought leadership
- **Platform**: 11ty static site generator
- **Hosting**: GitHub Pages
- **Theme**: Monolith Haze (modern industrial with orange accent)

## Brand Details
- **Mission**: Transform prompt engineering from trial-and-error practice into structured learning
- **Vision**: #1 learning experience for prompt engineering through AI-powered mentorship
- **Value Prop**: "The only platform where AI teaches you AI - get instant, personalized feedback"
- **Products**: Courses, tools, content, trainings for prompt/context engineering

## Site Requirements
### Core Pages
1. **Landing Page** - Brand introduction and thought leadership positioning
2. **Article Page** - Blog post template for content marketing
3. **About Page** - Brand story and mission

### Technical Specs
- 11ty static site generator
- Spectral font (from theme selector)
- Monolith Haze color scheme
- Responsive design
- GitHub Pages deployment ready
- Swappable theme system for future changes

## Monolith Haze Theme
```json
{
  "name": "Monolith Haze",
  "description": "A modern industrial theme with a prominent orange accent, dark tones, and a light, hazy background.",
  "variables": {
    "--page-bg": "#F0EBE3",
    "--header-bg": "#F0EBE3", 
    "--header-border": "#D9D2C7",
    "--footer-bg": "#F0EBE3",
    "--footer-text": "#6B6B6B",
    "--h1-color": "#1A1A1A",
    "--h2-color": "#1A1A1A", 
    "--h3-color": "#1A1A1A",
    "--body-text": "#1A1A1A",
    "--muted-text": "#6B6B6B",
    "--logo-color": "#F49D00",
    "--button-bg": "#1A1A1A",
    "--button-text": "#FFFFFF",
    "--link-color": "#1A1A1A",
    "--accent-fill": "#F49D00",
    "--border": "#D9D2C7",
    "--ring": "#F49D00",
    "--bg": "#F0EBE3",
    "--surface": "#FFFFFF", 
    "--text": "#1A1A1A",
    "--text-muted": "#6B6B6B",
    "--primary": "#1A1A1A",
    "--primary-contrast": "#FFFFFF"
  }
}
```

## Color Palette Analysis
- **Primary**: Dark charcoal (#1A1A1A) - authority, professionalism
- **Accent**: Vibrant orange (#F49D00) - energy, innovation, learning
- **Background**: Warm hazy beige (#F0EBE3) - approachable, premium
- **Surface**: Pure white (#FFFFFF) - clean, modern
- **Text**: High contrast dark on light - excellent readability
- **Borders**: Subtle warm gray (#D9D2C7) - elegant definition

## Content Strategy
- Thought leadership in prompt engineering
- Technical tutorials and best practices
- Industry insights and trends
- Tool reviews and comparisons
- Case studies from the learning platform

## Development Approach
1. Set up 11ty with modern ESM configuration
2. Create modular theme system using CSS custom properties
3. Build responsive layouts with semantic HTML
4. Implement collections for blog posts
5. Add syntax highlighting for code examples
6. Configure for GitHub Pages deployment

## Files Structure
```
blog/
├── src/
│   ├── _data/site.json
│   ├── _includes/
│   │   ├── base.njk
│   │   ├── article.njk
│   │   └── components/
│   ├── _assets/
│   │   └── css/main.css
│   ├── posts/
│   ├── index.njk (landing)
│   └── about.njk
├── eleventy.config.js
├── package.json
└── .github/workflows/deploy.yml
```

## Next Steps
1. Initialize 11ty project structure
2. Configure build system
3. Create base layouts with Monolith Haze theme
4. Develop content templates
5. Add sample content
6. Test deployment workflow