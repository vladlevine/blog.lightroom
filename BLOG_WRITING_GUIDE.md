# The Lightroom Studio - Blog Writing Guide with Modern Development Workflow
Last Updated: November 2025

## Critical Workflow Addendum: Separation of Concerns

### Golden Rule
**We strictly separate Content from Presentation.** This ensures our blog is scalable, maintainable, and high-performing. This overrides any previous instructions about creating self-contained HTML files.

### Your Workflow Role
You act as both a **Content Creator** and **Site Maintainer** who implements modern web development best practices.

### Two Types of Files

1. **Layout & Template Files** (Edit rarely, only for site-wide changes)
   - Location: `/layouts/`, `/assets/css/`
   - Contains: Site structure, CSS, reusable components (header, footer, SEO schemas)
   - When to edit: Only for site-wide design changes

2. **Content Files** (Create for each blog post)
   - Location: `/content/posts/`
   - Format: Markdown (.md) with YAML frontmatter
   - Contains: Post text, metadata, images references

### Creating a New Blog Post - The Correct Process

**NEVER generate a full HTML file.** Instead:

1. **Create a Markdown file** with descriptive slug: `art-photography-digitization-guide.md`
2. **Add YAML frontmatter** with all SEO metadata
3. **Write content** using standard Markdown syntax
4. **Save to** `/content/posts/` directory
5. The static site generator builds the final HTML automatically

### Example Blog Post File

```markdown
---
# YAML Frontmatter - All SEO and metadata goes here
title: "Art Photography & Digitization: Preserving Your Artwork Online"
description: "Professional guide to photographing and digitizing artwork for galleries, artists, and museums. Includes pricing, techniques, and NYC-specific insights."
date: 2025-11-15
lastmod: 2025-11-15
draft: false
category: "Photography"
tags:
  - "art photography"
  - "digitization"
  - "NYC"
  - "galleries"
keywords:
  - "art photography NYC"
  - "artwork digitization services"
  - "museum quality photography"
primaryKeyword: "art photography NYC"
heroImage: "/assets/images/art-photography-hero.jpg"
heroImageAlt: "Professional art photography setup in NYC gallery showing lighting and camera equipment"
author: "The Lightroom Studio"
readTime: "8 min read"

# Schema Data
schemaType: "Article"
faqIncluded: true
faqs:
  - question: "How much does professional art photography cost in NYC?"
    answer: "Professional art photography in NYC typically ranges from $150-500 per artwork, depending on size, complexity, and quantity. Museum-quality digitization starts at $300 per piece."
  - question: "What's the difference between art documentation and regular photography?"
    answer: "Art documentation requires color-accurate lighting, archival standards, and specific technical requirements for reproduction rights, while regular photography prioritizes aesthetic appeal."

# Related Posts (for internal linking)
relatedPosts:
  - title: "Gallery Event Coverage Best Practices"
    url: "/posts/gallery-event-coverage.html"
    description: "Professional documentation of gallery openings and art events"
  - title: "Fine Art Printing Guide"
    url: "/posts/fine-art-printing.html"
    description: "Museum-quality printing services and techniques"
---

Look, I get it. You've spent months—maybe years—creating your artwork, and now you need it documented properly for your portfolio, website, or that gallery submission deadline next week. After photographing hundreds of artworks in NYC studios and galleries, I can tell you that most artists are overthinking the technical side and underthinking the practical logistics.

Let me save you some time and money with what actually matters.

## Table of Contents

- [Why Art Digitization Matters](#why-art-digitization-matters)
- [The Process of Professional Art Photography](#the-process)
- [Technical Requirements & Standards](#technical-requirements)
- [Choosing the Right Service](#choosing-service)
- [Frequently Asked Questions](#faq)

## Why Art Digitization Matters {#why-art-digitization-matters}

Art photography and digitization isn't just about having nice pictures of your work—it's about creating a permanent, accurate record that serves multiple purposes...

*[Continue with content using Markdown syntax...]*
```

---

## Project Structure

### Domain & Repository
- Project Name: **The Lightroom Studio**
- GitHub Repository: vladlevine/blog.lightroom
- Branch: claude/check-repo-access-01UySTBnCB8m2euWY8exrgtX
- Image Storage: `/assets/images/` or external CDN

### Directory Structure
```
/blog.lightroom/
├── /assets/
│   ├── /css/
│   │   └── main.css (all site-wide styles)
│   ├── /js/
│   │   └── main.js (blog catalog filtering, search)
│   └── /images/
│       └── (hero images, thumbnails)
├── /layouts/
│   ├── blog-post.html (template for all blog posts)
│   ├── catalog.html (main blog index page)
│   └── /partials/
│       ├── header.html
│       ├── footer.html
│       ├── seo-schemas.html
│       └── post-card.html (reusable post preview component)
├── /content/
│   └── /posts/ (Markdown blog posts go here)
├── /build/
│   └── (compiled HTML output - git ignored)
├── index.html (main blog catalog page)
├── config.json (site configuration)
└── BLOG_WRITING_GUIDE.md (this file)
```

## Blog Architecture

### Main Blog Page (Catalog)
The main blog page (`index.html`) serves as a **catalog/directory** of all blog posts. It should be:

- **Minimal**: No lengthy explanations (it's part of a larger website)
- **Functional**: Easy filtering by category/tags
- **Visual**: Grid of post cards with hero images
- **Fast**: Static HTML with minimal JavaScript

### Features:
- Search/filter by category or tags
- Sort by date (newest first)
- Post cards showing: hero image, title, excerpt, read time, date
- Pagination (if posts exceed 20-30)
- No sidebar clutter - clean, modern grid layout

---

## Making Site-Wide Changes

### For Visual/Design Changes
**Never edit individual post files.** Instead:

1. **Identify the change type:**
   - Colors → `/assets/css/main.css`
   - Layout → `/layouts/blog-post.html`
   - Components → `/layouts/partials/`

2. **Make the single edit:**
   ```css
   /* Example: Changing link color site-wide */
   /* File: /assets/css/main.css */

   .article-content a {
     color: #4A90E2; /* Changed from default */
   }
   ```

3. **Rebuild the site** (manual command or automated)

### For SEO/Schema Changes
Edit the template files in `/layouts/partials/seo-schemas.html` - changes propagate to all posts automatically.

---

## Visual Design Specifications

### Color Palette
```css
:root {
  /* Primary Colors */
  --color-primary: #2C3E50;     /* Dark blue-gray - headings */
  --color-accent: #4A90E2;      /* Blue - links, CTAs */
  --color-text: #1A1A1A;        /* Near black - body text */
  --color-text-light: #6B7280;  /* Gray - metadata, captions */

  /* Backgrounds */
  --color-bg: #FFFFFF;          /* White - main background */
  --color-bg-subtle: #F8F9FA;   /* Light gray - alternating sections */
  --color-bg-dark: #2C3E50;     /* Dark - footer, headers */

  /* Borders & Dividers */
  --color-border: #E5E7EB;      /* Light gray */
}
```

### Typography
```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 400;
  line-height: 1.7;
  font-size: 16px;
}

h1 { font-size: 2.5rem; font-weight: 700; line-height: 1.2; }
h2 { font-size: 2rem; font-weight: 700; line-height: 1.3; }
h3 { font-size: 1.5rem; font-weight: 600; line-height: 1.4; }

strong { font-weight: 600; }
```

### Spacing & Layout
```css
.container {
  max-width: 1200px; /* Blog catalog */
  margin: 0 auto;
  padding: 0 1.5rem;
}

.article-container {
  max-width: 750px; /* Individual posts - optimal reading width */
  margin: 0 auto;
}
```

---

## Writing Philosophy

### Voice & Tone
- **Conversational:** Write like you're talking to a peer
- **Direct:** Share real prices, timelines, challenges
- **Experienced:** Use "I" and "we" - speak from authority
- **Honest:** Call out industry challenges when relevant
- **Helpful:** Give specific, actionable advice

### Content Guidelines
- Short paragraphs (2-4 sentences max)
- Break with subheadings every 2-3 paragraphs
- Include specific examples and real numbers when possible
- Use industry expertise as credibility
- Vary post length based on topic complexity (1,000-2,500 words typical)

### What Makes Good Blog Content
✅ Answers a specific question or solves a problem
✅ Provides actionable takeaways
✅ Includes real examples or case studies
✅ Uses headers for scanability
✅ Incorporates visuals (images, diagrams)
✅ Links to related content naturally

---

## SEO Requirements (Non-Negotiable)

All SEO data goes in the YAML frontmatter. The build system handles implementation.

### Required Frontmatter Fields
```yaml
title: "50-60 characters with primary keyword"
description: "150-160 character meta description"
keywords: ["primary keyword", "secondary", "tertiary"]
primaryKeyword: "main target keyword"
date: 2025-11-16
lastmod: 2025-11-16
draft: false  # Set to true to hide from catalog
heroImage: "/assets/images/post-slug-hero.jpg"
heroImageAlt: "Descriptive alt text with keywords"
category: "Photography|Technology|Business|Tutorial"
tags: ["tag1", "tag2", "tag3"]
author: "The Lightroom Studio"
readTime: "X min read"
schemaType: "Article"
```

### Optional Frontmatter (For Rich Features)
```yaml
faqIncluded: true
faqs:
  - question: "Your question here?"
    answer: "Comprehensive answer with keywords naturally included."

relatedPosts:
  - title: "Related Post Title"
    url: "/posts/related-post-slug.html"
    description: "Brief description"

excerpt: "Optional custom excerpt (otherwise uses first paragraph)"
```

### Keyword Placement in Content
- First paragraph naturally (within first 100 words)
- At least one H2 heading containing primary keyword
- Throughout content organically (avoid keyword stuffing)
- In image alt text where relevant
- In URL slug (filename)

### Link Requirements
- **Internal:** 2-4 links to related posts (defined in frontmatter or inline)
- **External:** 1-2 authority links when they add genuine value

---

## Markdown Writing Tips

### Headers (Use for Structure & SEO)
```markdown
## Main Section (H2) {#section-id}
### Subsection (H3)
#### Minor Point (H4)

Always include IDs for anchor links in Table of Contents
```

### Emphasis
```markdown
**Bold for important points and key takeaways**
*Italic for subtle emphasis or technical terms*
> Blockquotes for callouts, tips, or important warnings
```

### Lists
```markdown
- Unordered list for features or benefits
- Another item
  - Nested item for sub-points

1. Ordered list for step-by-step processes
2. Second step
   1. Sub-step if needed
```

### Images
```markdown
![Descriptive alt text with keywords](/assets/images/image-name.jpg)
*Optional caption in italics for additional context*
```

### Links
```markdown
[Descriptive link text](url)
[Internal link](/posts/other-post.html)
[External resource](https://example.com)
```

### Callout Boxes (Styled via CSS)
```markdown
> **Pro tip:** Your important insight here that deserves special attention

> **Warning:** Critical information about common mistakes
```

### Code Blocks (If Applicable)
```markdown
```css
.example {
  property: value;
}
```
```

---

## Quality Checklist

### Before Creating Post
- [ ] Research keywords (target 100-1,000 monthly searches)
- [ ] Outline main sections with H2/H3 structure
- [ ] Gather or create hero image and supporting visuals
- [ ] Identify unique angle or valuable insight
- [ ] Check for existing similar content (differentiate)

### Frontmatter Complete
- [ ] Title optimized (50-60 chars, includes keyword)
- [ ] Description compelling (150-160 chars)
- [ ] All required fields filled accurately
- [ ] FAQ questions if applicable
- [ ] Related posts identified (2-4 posts)
- [ ] Hero image ready with descriptive alt text

### Content Quality
- [ ] Primary keyword in first 100 words
- [ ] Provides genuine, actionable value
- [ ] Includes specific examples or data points
- [ ] Natural, conversational tone maintained
- [ ] Appropriate length (1,000-2,500 words)
- [ ] Subheadings every 2-3 paragraphs
- [ ] Table of contents for posts over 1,500 words
- [ ] Internal links to 2-4 related posts
- [ ] External links (1-2) to authoritative sources if relevant

### Technical Checks
- [ ] Markdown syntax valid
- [ ] Image paths correct and images exist
- [ ] Section IDs match table of contents links
- [ ] Filename is URL-friendly slug (lowercase, hyphens)
- [ ] Saved to `/content/posts/` directory
- [ ] No typos or grammatical errors

---

## Publishing Workflow

### Step-by-Step Process

1. **Create** Markdown file with URL-friendly slug
   - Format: `keyword-rich-slug.md`
   - Example: `photography-lighting-guide-beginners.md`

2. **Write** YAML frontmatter with all required fields

3. **Draft** content using Markdown syntax
   - Start with compelling hook
   - Use table of contents for long posts
   - Break with subheadings frequently
   - Add images with alt text

4. **Add** images to `/assets/images/`
   - Optimize images (WebP format, compressed)
   - Use descriptive filenames

5. **Review** against quality checklist above

6. **Save** to `/content/posts/` directory

7. **Build** site (run build command)
   ```bash
   # Example build command (adjust based on static site generator)
   npm run build
   ```

8. **Verify** output in browser
   - Check formatting
   - Test all links
   - Verify images load
   - Check mobile responsiveness

9. **Commit** to Git with descriptive message
   ```bash
   git add .
   git commit -m "Add blog post: [Post Title]"
   ```

10. **Push** to branch
    ```bash
    git push -u origin claude/check-repo-access-01UySTBnCB8m2euWY8exrgtX
    ```

11. **Monitor** performance (if analytics configured)

---

## Blog Catalog Structure

### Main Page (`index.html`)

The blog catalog should be **minimal and functional** since it's part of a larger website:

**Header Section:**
- Blog title/logo
- Simple tagline (optional, 1 line max)
- Category filter buttons

**Post Grid:**
- Clean grid layout (2-3 columns on desktop, 1 on mobile)
- Each post card shows:
  - Hero image thumbnail
  - Category badge
  - Title (linked to post)
  - Brief excerpt (100-150 chars)
  - Read time
  - Publish date
  - Tags (optional, collapsible)

**Footer:**
- Pagination (if needed)
- Link back to main website

### No Unnecessary Elements:
- ❌ Lengthy "About the Blog" sections
- ❌ Sidebar clutter
- ❌ Newsletter signups (unless required)
- ❌ Social media feeds
- ✅ Fast, clean, functional catalog only

---

## Build System Notes

### Static Site Generator Options

We'll use a simple build approach that:
1. Reads all Markdown files from `/content/posts/`
2. Parses YAML frontmatter
3. Converts Markdown to HTML
4. Applies layout templates from `/layouts/`
5. Generates static HTML files to `/build/`
6. Creates blog catalog index page

**Suggested Generators:**
- **11ty (Eleventy)** - Simple, flexible, JavaScript-based
- **Hugo** - Fast, Go-based, large community
- **Jekyll** - Ruby-based, GitHub Pages compatible
- **Custom Node.js script** - Full control, minimal dependencies

### Build Command Structure
```bash
# Install dependencies (one time)
npm install

# Development mode (watch for changes)
npm run dev

# Production build
npm run build

# Preview locally
npm run serve
```

---

## Remember

This workflow ensures:
- ✅ **Scalability:** Add hundreds of posts without complexity
- ✅ **Maintainability:** Change design once, updates everywhere
- ✅ **Performance:** Optimized static HTML output
- ✅ **Consistency:** Every post follows the same quality standards
- ✅ **Efficiency:** Focus on writing, not formatting
- ✅ **SEO:** Proper structure and metadata built-in

### The Golden Rules (Repeat)

1. **Content lives in Markdown files** (`/content/posts/*.md`)
2. **Design lives in templates** (`/layouts/*.html`)
3. **Never mix them** - separation of concerns always
4. **Build system connects them** - automated, consistent output
5. **Main blog page is a catalog** - minimal, functional, fast

---

## Quick Reference: Creating Your First Post

1. Create file: `/content/posts/my-first-post.md`
2. Add frontmatter (copy from example above)
3. Write content in Markdown
4. Save file
5. Run build: `npm run build`
6. Check output: `npm run serve`
7. Commit and push

**That's it.** The system handles everything else.

---

*This guide integrates modern development practices with content strategy. Follow this workflow for a scalable, professional blog for The Lightroom Studio.*

**Last updated:** November 2025
**Next review:** Quarterly or when adding new features
