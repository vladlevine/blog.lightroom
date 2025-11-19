# The Lightroom Studio - Blog Writing Guide (Static HTML)
Last Updated: November 2025

## Critical Workflow: Static HTML Approach

### Golden Rule
**We use pure static HTML for maximum simplicity and control.** No build process, no static site generators, no complexity. Just HTML, CSS, and JavaScript.

### Creating a New Blog Post - The Process

**Process:**

1. **Copy an existing post** from `/posts/` as your template
2. **Update all meta tags** (title, description, keywords, Open Graph, Schema.org)
3. **Add issue number** (invisible HTML comment + visible footer)
4. **Write content** using semantic HTML5
5. **Add images** (upload to Cloudinary or `/assets/images/`)
6. **Add post card** to `index.html` for the blog catalog
7. **Test locally** by opening files in a browser
8. **Commit and push** - Netlify auto-deploys (no build needed!)

---

## Project Structure

```
/blog.lightroom/
├── /assets/
│   ├── /css/
│   │   └── main.css          # All site-wide styles
│   ├── /js/
│   │   └── main.js           # Interactive features
│   └── /images/              # Static images
├── /posts/                   # HTML blog posts go here
│   └── art-photography-digitization-guide.html
├── index.html                # Main blog catalog page
├── netlify.toml              # Netlify config (no build needed)
└── README.md                 # Setup documentation
```

---

## Creating Your First Blog Post

### Quick Start

```bash
# 1. Copy existing post as template
cp posts/art-photography-digitization-guide.html posts/your-new-post.html

# 2. Edit the new file - update ALL meta tags and content

# 3. Add post card to index.html

# 4. Test locally - open index.html in browser

# 5. Commit and push
git add posts/your-new-post.html index.html
git commit -m "Add blog post: Your Title"
git push
```

### What to Update in Your New Post

**1. Issue Number (HIGH PRIORITY - Publication Order Tracking):**

Add two elements to every new blog post:

**Invisible HTML Comment** (for coder reference - after `<html lang="en">`):
```html
<!DOCTYPE html>
<html lang="en">
<!-- ISSUE_NUMBER: [NEXT_NUMBER] | Publication Order Tracking -->
<head>
```

**Visible Issue Number** (magazine-style footer - before JavaScript includes):
```html
    <!-- Issue Number -->
    <div style="text-align: center; margin: 3rem 0 2rem 0; padding-top: 2rem; border-top: 1px solid #E5E7EB;">
        <p style="font-family: var(--font-sans); font-size: 0.6875rem; color: #999; letter-spacing: 0.1em; text-transform: uppercase;">Issue No. [NEXT_NUMBER]</p>
    </div>

    <!-- JavaScript -->
    <script src="../assets/js/main.js"></script>
</body>
</html>
```

**How to determine NEXT_NUMBER:**
- Check most recent post in `/posts/` directory
- Look for `<!-- ISSUE_NUMBER: X -->` comment
- Your new post = X + 1
- Current latest: Issue No. 8 (as of Nov 2025)

**2. Page Title & Meta Tags (in `<head>`):**

```html
<title>Your Post Title | The Lightroom Studio</title>
<meta name="description" content="Your 150-160 character description">
<meta name="keywords" content="keyword1, keyword2, keyword3">

<!-- Open Graph (for social media) -->
<meta property="og:title" content="Your Post Title">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://your-hero-image.jpg">
<meta property="og:url" content="https://blog.thelightroomstudios.com/posts/your-post.html">

<!-- Dates -->
<meta property="article:published_time" content="2025-11-16T00:00:00Z">
```

**2. Schema.org JSON-LD (for SEO):**

Update the structured data in `<head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Your Post Title",
  "description": "Your description",
  "image": "https://your-hero-image.jpg",
  "datePublished": "2025-11-16T00:00:00Z",
  ...
}
</script>
```

**3. Article Header:**

```html
<span class="article-category">Photography</span>
<h1 class="article-title">Your Post Title</h1>

<div class="article-meta">
    <time datetime="2025-11-16">November 16, 2025</time>
    <span class="article-readtime">10 min read</span>
</div>

<div class="post-card-tags">
    <span class="tag">tag1</span>
    <span class="tag">tag2</span>
</div>
```

**4. Hero Image:**

```html
<img
    src="https://res.cloudinary.com/your-image.jpg"
    alt="Descriptive alt text with keywords"
    class="article-hero"
>
```

**5. Content:**

Write inside `<div class="article-content">` using HTML:

```html
<div class="article-content">
    <p>Your opening paragraph...</p>

    <h2 id="section-1">Section Title</h2>
    <p>Content...</p>

    <img src="https://image.jpg" alt="Description" loading="lazy">
    <em>Image caption</em>

    <blockquote>
        <p><strong>Pro tip:</strong> Your insight</p>
    </blockquote>

    <ul>
        <li>List item</li>
    </ul>
</div>
```

**6. Add to index.html:**

Add your post to the blog catalog:

```html
<article class="post-card" data-category="Photography">
    <a href="posts/your-new-post.html">
        <img src="https://hero-image.jpg" alt="Description" class="post-card-image" loading="lazy">
    </a>

    <div class="post-card-content">
        <span class="post-card-category">Photography</span>

        <h2 class="post-card-title">
            <a href="posts/your-new-post.html">Your Post Title</a>
        </h2>

        <p class="post-card-excerpt">
            Brief excerpt (100-150 chars)...
        </p>

        <div class="post-card-meta">
            <div class="post-card-date">
                <time datetime="2025-11-16">Nov 16, 2025</time>
            </div>
            <span class="post-card-readtime">10 min read</span>
        </div>

        <div class="post-card-tags">
            <span class="tag">tag1</span>
        </div>
    </div>
</article>
```

---

## HTML Content Patterns

### Headers with IDs (for anchor links)

```html
<h2 id="section-name">Section Title</h2>
```

### Emphasis

```html
<strong>Bold for important points</strong>
<em>Italic for subtle emphasis</em>
```

### Blockquotes

```html
<blockquote>
    <p><strong>Pro tip:</strong> Your insight here</p>
</blockquote>
```

### Lists

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>

<ol>
    <li>Step 1</li>
    <li>Step 2</li>
</ol>
```

### Images

```html
<img src="https://image-url.jpg" alt="Alt text" loading="lazy">
<em>Caption</em>
```

### Links

```html
<a href="https://example.com">External link</a>
<a href="../index.html">Back to blog</a>
<a href="other-post.html">Another post</a>
```

---

## SEO Checklist

### Must-Have Meta Tags

- [ ] Page title (50-60 characters with keyword)
- [ ] Meta description (150-160 characters)
- [ ] Meta keywords (3-5 relevant keywords)
- [ ] Open Graph tags (og:title, og:description, og:image, og:url)
- [ ] Twitter Card tags
- [ ] Article published/modified dates
- [ ] Canonical URL
- [ ] Schema.org Article JSON-LD
- [ ] FAQ Schema (if you have FAQs)

### Content SEO

- [ ] Primary keyword in first paragraph
- [ ] Keywords in H2/H3 headings
- [ ] Descriptive alt text on all images
- [ ] Internal links to other posts
- [ ] External links to authoritative sources (1-2)
- [ ] Proper heading hierarchy (H1 → H2 → H3)

---

## Deployment

### Local Testing

1. Open `index.html` in your browser
2. Check that your post appears in the catalog
3. Click through to the post
4. Verify all links and images work

### Push to Production

```bash
git add posts/your-post.html index.html
git commit -m "Add blog post: Your Post Title"
git push
```

**Netlify automatically deploys** - no build step needed!

Check deployment status at: https://app.netlify.com

---

## Making Site-Wide Changes

### Design Changes

Edit `/assets/css/main.css`:

```css
/* Change colors */
:root {
  --color-accent: #NEW-COLOR;
}

/* Change typography */
body {
  font-size: 18px;
}
```

Changes apply to all pages immediately.

### Functionality Changes

Edit `/assets/js/main.js` for interactive features.

---

## Content Guidelines & Writing Style

### ⚠️ CRITICAL: What NOT to Include

**Avoid Excessive Detail Sections** that distract from the main narrative:

❌ **NO: Detailed Pricing Tiers**
```html
<!-- DON'T include exhaustive pricing breakdowns -->
<h3>Budget Tier ($150-300):</h3>
<ul>
  <li>Basic session (20-30 minutes)</li>
  <li>3-5 final edited images</li>
  <li>Basic retouching included</li>
</ul>
```

❌ **NO: Unnecessary Preparation Lists**
```html
<!-- DON'T include granular lifestyle advice -->
<li>Stay hydrated leading up to session</li>
<li>Avoid alcohol day before (causes puffiness)</li>
<li>Get adequate sleep night before</li>
```

❌ **NO: Over-Detailed Wardrobe Sections**
```html
<!-- DON'T include extensive styling guides -->
<h3>What to Wear: For Men</h3>
<h3>What to Wear: For Women</h3>
<h3>Grooming and Styling</h3>
```

### ✅ Content Structure Rule

**Main body of text + FAQ section = Complete article**

If it's not essential to the main narrative or can't be concisely answered in FAQ, cut it.

### Writing Voice

See `WRITING_STYLE.md` for comprehensive voice guidelines. Key principles:

- **Conversational & authentic** - avoid corporate jargon
- **Brief & respectful** - value reader's time
- **Warm deadpan humor** - relatable industry observations
- **Genuine over salesy** - build connection, not transactions
- **Story-driven** - use specific examples, not generic claims

### Blog Post Goals (Priority Order)

1. **SEO** - Rank for target keywords, drive organic traffic
2. **Natural, Human Feel** - Authentic images and copy, not corporate
3. **Entertaining & Easy** - Readable, engaging, respects time

---

## Quality Checklist

Before publishing:

- [ ] **Issue number added** (invisible comment + visible footer)
- [ ] All meta tags updated
- [ ] Schema.org JSON-LD correct
- [ ] Images optimized and loading
- [ ] Links tested
- [ ] Post card added to index.html
- [ ] Tested locally in browser
- [ ] Content proofread
- [ ] SEO keywords included naturally
- [ ] **No excessive pricing/preparation sections**
- [ ] **Follows WRITING_STYLE.md voice guidelines**
- [ ] Ready to push to GitHub

---

## Quick Reference

**File Locations:**
- Blog catalog: `/index.html`
- Blog posts: `/posts/*.html`
- Styles: `/assets/css/main.css`
- Scripts: `/assets/js/main.js`
- Images: `/assets/images/` or Cloudinary

**Deployment:**
- Push to GitHub → Netlify auto-deploys
- No build process needed
- Changes live in ~30 seconds

**Color Palette:**
- Primary (headings): `#2C3E50`
- Accent (links): `#4A90E2`
- Text: `#1A1A1A`
- Background: `#FFFFFF`

---

*This guide uses pure static HTML for maximum simplicity. No build tools needed.*

**Last updated:** November 2025
