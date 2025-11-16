# The Lightroom Studio Blog

Professional photography blog built with **pure static HTML** for maximum simplicity and performance. Deployed on Netlify at `blog.thelightroomstudios.com`.

## ✨ Why Static HTML?

- **No build process** - Just edit HTML and push
- **Instant deployment** - Changes live in seconds
- **Full control** - Direct access to markup and SEO
- **Maximum performance** - Static HTML is the fastest option
- **Universal compatibility** - Works on any hosting platform

---

## 🚀 Quick Start

### Viewing Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vladlevine/blog.lightroom.git
   cd blog.lightroom
   ```

2. **Open in browser:**
   ```bash
   open index.html  # macOS
   # or just double-click index.html in file explorer
   ```

That's it! No installation, no dependencies, no build process.

---

## 📁 Project Structure

```
blog.lightroom/
├── assets/
│   ├── css/
│   │   └── main.css          # All site-wide styles
│   ├── js/
│   │   └── main.js           # Interactive features (filtering, etc.)
│   └── images/               # Static images
├── posts/                    # HTML blog posts go here
│   └── art-photography-digitization-guide.html
├── index.html                # Main blog catalog page
├── netlify.toml              # Netlify deployment config
├── BLOG_WRITING_GUIDE.md     # Complete writing workflow guide
└── README.md                 # This file
```

---

## ✍️ Writing a New Blog Post

### Option 1: Quick Method

```bash
# Copy existing post as template
cp posts/art-photography-digitization-guide.html posts/your-new-post.html

# Edit your-new-post.html - update all meta tags and content

# Add post card to index.html

# Test locally - open index.html in browser

# Commit and push
git add posts/your-new-post.html index.html
git commit -m "Add blog post: Your Title"
git push
```

### Option 2: Follow the Guide

See **`BLOG_WRITING_GUIDE.md`** for:
- Step-by-step post creation
- SEO requirements
- HTML patterns and templates
- Quality checklist

---

## 🌐 Deployment

### Netlify (Current Setup)

**Already configured!** Just push to GitHub and Netlify auto-deploys.

```bash
git add .
git commit -m "Your changes"
git push
```

**Settings (in `netlify.toml`):**
- Build command: None (static HTML)
- Publish directory: `.` (root)
- No build process needed!

**Deployment happens automatically:**
1. Push to GitHub
2. Netlify detects changes
3. Site deploys (takes ~10-30 seconds)
4. Live at `blog.thelightroomstudios.com`

### Checking Deployment Status

**In Netlify:**
1. Go to https://app.netlify.com
2. Select your site
3. Click "Deploys" tab
4. See build status and logs

**Expected logs:**
```
Deploying site from Git
No build command specified
Publishing directory: /
✓ Site is live
```

### Domain Setup

**Already configured for:** `blog.thelightroomstudios.com`

**If you need to change the domain:**
1. Netlify dashboard → Settings → Domain management
2. Add custom domain
3. Update DNS CNAME record:
   - Type: `CNAME`
   - Name: `blog`
   - Value: `your-site.netlify.app`

---

## 🎨 Customization

### Changing Colors

Edit `/assets/css/main.css`:

```css
:root {
  --color-primary: #2C3E50;    /* Headings */
  --color-accent: #4A90E2;     /* Links, buttons */
  --color-text: #1A1A1A;       /* Body text */
  --color-bg: #FFFFFF;         /* Background */
}
```

Changes apply to all pages immediately.

### Changing Layout

Edit `/assets/css/main.css` - look for layout classes like:
- `.article-container` - Blog post width
- `.container` - General page width
- `.posts-grid` - Blog catalog grid

### Adding Features

Edit `/assets/js/main.js` for interactive features like:
- Category filtering
- Search functionality
- Reading progress bar (already included)
- Copy code buttons (already included)

---

## 📋 Adding a New Post to the Catalog

After creating your blog post HTML, add it to `index.html`:

```html
<article class="post-card" data-category="Photography">
    <a href="posts/your-new-post.html">
        <img src="https://your-image.jpg" alt="Description" class="post-card-image" loading="lazy">
    </a>

    <div class="post-card-content">
        <span class="post-card-category">Photography</span>

        <h2 class="post-card-title">
            <a href="posts/your-new-post.html">Your Post Title</a>
        </h2>

        <p class="post-card-excerpt">
            Brief excerpt (100-150 characters)...
        </p>

        <div class="post-card-meta">
            <div class="post-card-date">
                <time datetime="2025-11-16">Nov 16, 2025</time>
            </div>
            <span class="post-card-readtime">10 min read</span>
        </div>

        <div class="post-card-tags">
            <span class="tag">tag1</span>
            <span class="tag">tag2</span>
        </div>
    </div>
</article>
```

Insert this inside the `<div class="posts-grid">` section.

---

## ✅ SEO Features

Each post includes:
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (social media previews)
- ✅ Twitter Card support
- ✅ Schema.org structured data (Article + FAQ)
- ✅ Semantic HTML5
- ✅ Responsive design
- ✅ Fast loading (static HTML)

---

## 🔧 Troubleshooting

### Post not showing on homepage?

- Check that post card was added to `index.html`
- Verify file path is correct: `posts/your-post.html`
- Clear browser cache and refresh

### Images not loading?

- Check image URLs are correct (absolute paths: `https://...` or relative: `../assets/images/...`)
- For Cloudinary images, verify URL is public
- Check browser console for errors (F12)

### Styles not updating?

- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Check CSS file path in HTML: `<link rel="stylesheet" href="../assets/css/main.css">`
- Verify relative paths are correct from post location

### Netlify deployment failing?

Check deploy logs in Netlify dashboard. Common issues:
- **Branch mismatch:** Make sure Netlify is watching the correct branch
- **Build settings:** Should be blank (no build command needed)
- **Publish directory:** Should be `.` (root)

To fix:
1. Netlify dashboard → Site settings → Build & deploy
2. Build command: (leave blank)
3. Publish directory: `.`
4. Save and trigger new deploy

---

## 📊 Performance

Static HTML blog benefits:
- **Load time:** <1 second typical
- **No server processing:** Instant page serving
- **SEO-friendly:** Clean HTML, fast load times
- **Scalable:** Handle any traffic level
- **Cost-effective:** Free hosting on Netlify

---

## 🤝 Contributing

### Making Changes

1. Create a feature branch
2. Make your changes
3. Test locally (open index.html in browser)
4. Commit and push
5. Netlify provides preview deploy for all branches

### Blog Post Guidelines

See `BLOG_WRITING_GUIDE.md` for:
- Writing style and tone
- SEO requirements
- HTML templates
- Quality standards

---

## 📚 Resources

- **Blog Writing Guide:** `BLOG_WRITING_GUIDE.md` (in this repo)
- **HTML Reference:** https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS Reference:** https://developer.mozilla.org/en-US/docs/Web/CSS
- **Netlify Docs:** https://docs.netlify.com/
- **Schema.org:** https://schema.org/ (for structured data)

---

## 📞 Support

For questions about:
- **Content/writing:** See `BLOG_WRITING_GUIDE.md`
- **Deployment:** Check Netlify deploy logs
- **HTML/CSS:** Browser console (F12) for errors

---

## 📄 License

© 2025 The Lightroom Studio. All rights reserved.

---

**Ready to add content?** Copy an existing post from `/posts/`, update it with your content, add it to `index.html`, and push to GitHub. Netlify handles the rest!
