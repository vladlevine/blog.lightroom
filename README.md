# The Lightroom Studio Blog

Professional photography blog built with Hugo static site generator, designed for deployment on Netlify at `blog.thelightroomstudios.com`.

## Project Overview

This blog is part of The Lightroom Studio website ecosystem:
- **Main site:** `thelightroomstudios.com` (Wix or similar)
- **Blog subdomain:** `blog.thelightroomstudios.com` (this project, on Netlify)

## Quick Start

### Prerequisites

- **Hugo** (static site generator): [Install Hugo](https://gohugo.io/installation/)
- **Git** (version control)
- **Node.js** (optional, for additional tooling)

### Installation

1. **Install Hugo:**
   ```bash
   # macOS
   brew install hugo

   # Windows (using Chocolatey)
   choco install hugo-extended

   # Linux
   snap install hugo
   ```

2. **Clone this repository:**
   ```bash
   git clone https://github.com/vladlevine/blog.lightroom.git
   cd blog.lightroom
   ```

3. **Run local development server:**
   ```bash
   hugo server -D
   ```

4. **Open browser:**
   Navigate to `http://localhost:1313`

## Project Structure

```
blog.lightroom/
├── assets/
│   ├── css/
│   │   └── main.css          # All site-wide styles
│   ├── js/
│   │   └── main.js           # Interactive features (filtering, etc.)
│   └── images/               # Static images
├── layouts/
│   ├── blog-post.html        # Blog post template
│   ├── catalog.html          # Blog index/catalog page
│   └── partials/             # Reusable components
│       ├── header.html
│       ├── footer.html
│       ├── seo-schemas.html
│       └── post-card.html
├── content/
│   └── posts/                # Markdown blog posts go here
│       ├── art-photography-digitization-guide.md
│       └── example-blog-post.md
├── public/                   # Generated site (git ignored)
├── config.toml               # Hugo configuration
├── index.html                # Main catalog page
├── BLOG_WRITING_GUIDE.md     # Complete writing workflow guide
└── README.md                 # This file
```

## Writing New Blog Posts

### Quick Process

1. **Create new Markdown file** in `content/posts/`:
   ```bash
   touch content/posts/your-post-slug.md
   ```

2. **Add frontmatter and content** (see examples or `BLOG_WRITING_GUIDE.md`)

3. **Preview locally:**
   ```bash
   hugo server -D
   ```

4. **Build for production:**
   ```bash
   hugo
   ```

### Detailed Guide

See `BLOG_WRITING_GUIDE.md` for:
- Complete workflow
- SEO requirements
- Frontmatter structure
- Writing best practices
- Quality checklist

## Deployment

### Netlify Deployment (Recommended)

1. **Connect repository to Netlify:**
   - Log in to [Netlify](https://netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect to GitHub and select `blog.lightroom` repository
   - Branch: `main` (or your production branch)

2. **Build settings:**
   - Build command: `hugo`
   - Publish directory: `public`
   - Environment variable: `HUGO_VERSION` = `0.120.0` (or latest)

3. **Domain setup:**
   - In Netlify: Settings > Domain management > Add custom domain
   - Add: `blog.thelightroomstudios.com`
   - Netlify provides DNS instructions (CNAME record)

4. **DNS Configuration (in your domain registrar):**
   - Type: `CNAME`
   - Name: `blog`
   - Value: `your-site.netlify.app` (provided by Netlify)
   - TTL: `3600` (or automatic)

### Alternative: GitHub Pages

**Can you preview this with GitHub Pages?** Yes, but with some caveats:

**GitHub Pages Setup:**

1. **Build the site locally:**
   ```bash
   hugo
   # This generates static files in /public directory
   ```

2. **Configure GitHub Pages:**
   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: Select your branch
   - Folder: `/public` (if available) or `/` (root)

3. **Important:** GitHub Pages serves from the repository root or `/docs` folder by default. You'll need to either:
   - Configure Hugo to output to `/docs` instead of `/public`
   - Use a GitHub Actions workflow to build and deploy

**Recommended GitHub Actions workflow** (create `.github/workflows/deploy.yml`):

```yaml
name: Deploy Hugo site to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          extended: true

      - name: Build
        run: hugo --minify

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

**Why Netlify is better for this project:**
- Automatic builds on every commit
- Better custom domain support (CNAME for subdomain)
- Free SSL certificates
- CDN built-in
- Form handling (if you add contact forms later)
- Preview deployments for pull requests

## Development Workflow

### Local Development

```bash
# Start development server with drafts
hugo server -D

# Start server and open in browser
hugo server -D --navigateToChanged

# Build for production (outputs to /public)
hugo

# Clean build
rm -rf public && hugo
```

### Adding New Content

1. Create post: `content/posts/new-post.md`
2. Add frontmatter (copy from example)
3. Write content in Markdown
4. Preview: `hugo server -D`
5. Commit and push
6. Netlify auto-deploys (if configured)

### Editing Styles

- **Site-wide styles:** Edit `assets/css/main.css`
- **Page templates:** Edit files in `layouts/`
- **Components:** Edit files in `layouts/partials/`

**Never edit individual post HTML** - always edit templates and markdown content separately.

## Configuration

### Hugo Config (`config.toml`)

Key settings:
- `baseURL`: Update to your final domain
- `title`: Site title for SEO
- `params`: Custom parameters

### Color Palette

Defined in `assets/css/main.css`:

```css
:root {
  --color-primary: #2C3E50;    /* Dark blue-gray */
  --color-accent: #4A90E2;     /* Blue */
  --color-text: #1A1A1A;       /* Near black */
  --color-bg: #FFFFFF;         /* White */
}
```

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Category filtering (JavaScript-powered)
- ✅ SEO optimized (meta tags, Schema.org structured data)
- ✅ Fast loading (static HTML, optimized CSS/JS)
- ✅ Accessible (semantic HTML, ARIA labels)
- ✅ Reading progress bar (on blog posts)
- ✅ Code block copy buttons
- ✅ FAQ schema markup
- ✅ Open Graph / Twitter Card support

## SEO & Analytics

### Built-in SEO Features
- Meta descriptions and titles
- Schema.org structured data (Article, FAQ, Breadcrumb)
- Open Graph tags for social sharing
- Semantic HTML structure
- Sitemap generation (automatic with Hugo)

### Adding Analytics (Optional)

**Google Analytics:**
Edit `config.toml`:
```toml
[params]
  googleAnalytics = "G-XXXXXXXXXX"
```

**Plausible or other privacy-focused analytics:**
Add script to `layouts/partials/header.html`

## Maintenance

### Regular Tasks

- **Monthly:** Review and update old posts
- **Quarterly:** Check for broken links
- **Ongoing:** Monitor analytics, adjust content strategy
- **As needed:** Update Hugo version

### Updating Hugo

```bash
# macOS
brew upgrade hugo

# Check version
hugo version
```

Update `HUGO_VERSION` in Netlify if you upgrade.

## Troubleshooting

### Hugo Server Won't Start

```bash
# Check Hugo installation
hugo version

# Clear cache
hugo --cleanDestinationDir

# Restart server
hugo server -D
```

### Styles Not Updating

```bash
# Force rebuild
rm -rf public resources && hugo

# Clear browser cache
# Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
```

### Build Errors

- Check YAML frontmatter syntax (spacing, quotes)
- Verify all images paths are correct
- Review Hugo error messages (usually very specific)

## Resources

- **Hugo Documentation:** https://gohugo.io/documentation/
- **Markdown Guide:** https://www.markdownguide.org/
- **Blog Writing Guide:** See `BLOG_WRITING_GUIDE.md` in this repository
- **Netlify Docs:** https://docs.netlify.com/

## Support & Contact

For questions about:
- **The blog content/strategy:** See `BLOG_WRITING_GUIDE.md`
- **Hugo issues:** [Hugo Forums](https://discourse.gohugo.io/)
- **Deployment issues:** [Netlify Support](https://www.netlify.com/support/)

## License

© 2025 The Lightroom Studio. All rights reserved.

---

**Ready to build?** Run `hugo server -D` and start creating content!
