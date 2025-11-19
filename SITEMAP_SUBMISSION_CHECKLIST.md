# Sitemap Submission Checklist
**For blog.thelightroomstudios.com**

---

## Before You Start

- [ ] Merge branch `claude/art-digitization-blog-post-01QdqG35qKAQaLtBinuQYSZF` to main
- [ ] Wait for Netlify to deploy (check Netlify dashboard - usually 30-60 seconds)
- [ ] Verify sitemap is live: Visit https://blog.thelightroomstudios.com/sitemap.xml
  - You should see XML code listing 5 blog posts
  - If you get 404, wait a bit longer for deployment

---

## Google Search Console Submission

### First Time Setup (If Not Already Set Up)

- [ ] Go to https://search.google.com/search-console
- [ ] Click "Add Property"
- [ ] Select "URL prefix"
- [ ] Enter: `https://blog.thelightroomstudios.com`
- [ ] Click Continue

**Verify Ownership (Choose ONE method):**

**Method 1: HTML File Upload (Recommended for Netlify)**
- [ ] Download the HTML verification file Google provides
- [ ] Add it to the root of your GitHub repo
- [ ] Commit and push to main branch
- [ ] Wait for Netlify to deploy
- [ ] Click "Verify" in Search Console

**Method 2: HTML Meta Tag**
- [ ] Copy the meta tag Google provides
- [ ] Add it to `index.html` in the `<head>` section (around line 30)
- [ ] Commit and push to main
- [ ] Wait for Netlify to deploy
- [ ] Click "Verify" in Search Console

### Submit Sitemap

- [ ] In Google Search Console, click "Sitemaps" (left menu)
- [ ] In "Add a new sitemap" field, enter: `sitemap.xml`
- [ ] Click "Submit"
- [ ] Wait 1-2 minutes
- [ ] Verify status shows "Success" and "5 discovered URLs"

**Expected Result:**
```
✓ sitemap.xml | Success | 5 URLs discovered
```

---

## Bing Webmaster Tools Submission

### First Time Setup

- [ ] Go to https://www.bing.com/webmasters
- [ ] Sign in with Microsoft account

**Easy Option: Import from Google**
- [ ] Click "Import from Google Search Console"
- [ ] Authorize Bing to access your Google Search Console
- [ ] Select `blog.thelightroomstudios.com`
- [ ] Click Import
- [ ] ✅ Done! Sitemap is automatically imported

**Manual Option:**
- [ ] Click "Add a site"
- [ ] Enter: `https://blog.thelightroomstudios.com`
- [ ] Verify ownership (similar to Google - HTML file or meta tag)
- [ ] Go to "Sitemaps" in left menu
- [ ] Enter: `https://blog.thelightroomstudios.com/sitemap.xml`
- [ ] Click Submit

---

## Verify Submission Success

### Google Search Console
- [ ] Go to Sitemaps section
- [ ] See "Success" status
- [ ] See "5 discovered URLs"
- [ ] Check back in 24-48 hours to see URLs being indexed

### Bing Webmaster Tools
- [ ] Go to Sitemaps section
- [ ] See sitemap listed
- [ ] Check "URL Inspection" tool to verify pages are being discovered

---

## Troubleshooting

### "Sitemap could not be read"
- **Cause:** File not deployed yet or wrong URL
- **Fix:**
  1. Verify file exists: https://blog.thelightroomstudios.com/sitemap.xml
  2. Check Netlify deploy logs
  3. Try submitting again in 5 minutes

### "Sitemap is HTML"
- **Cause:** Submitted wrong URL or file is actually HTML
- **Fix:** Make sure you're submitting `sitemap.xml` not a page URL

### "Couldn't fetch sitemap"
- **Cause:** Temporary network issue or Netlify deployment in progress
- **Fix:** Wait 5-10 minutes and resubmit

### "404 Not Found" when visiting sitemap.xml
- **Cause:** Netlify hasn't deployed the file yet
- **Fix:**
  1. Check Netlify dashboard for deployment status
  2. Make sure you merged branch to main (or your deploy branch)
  3. Wait for green "Published" status in Netlify
  4. Try again

---

## After Submission

### Immediate (Within 1 hour)
- [ ] Search Console/Bing should show "Success" status
- [ ] URLs discovered count should show 5

### Within 24-48 hours
- [ ] Check "Coverage" report in Search Console
- [ ] Some pages should start showing "Valid" status
- [ ] Check "URL Inspection" tool to see if pages are indexed

### Within 1-2 weeks
- [ ] Most or all pages should be indexed
- [ ] Check indexing with Google search: `site:blog.thelightroomstudios.com`
- [ ] Should see 5 blog posts listed

---

## Ongoing Maintenance

**Every time you publish a new blog post:**

1. **Update sitemap.xml:**
   - [ ] Add new post URL
   - [ ] Update lastmod date for new post
   - [ ] Commit and push

2. **Resubmit to Google (Optional but recommended):**
   - [ ] Go to Search Console → Sitemaps
   - [ ] Click "Resubmit" or just wait - Google automatically re-crawls sitemaps

**OR (Easier):** Google automatically recrawls sitemaps every few days, so you don't need to manually resubmit each time. Just updating the file is enough.

---

## Quick Reference URLs

- **Your Sitemap:** https://blog.thelightroomstudios.com/sitemap.xml
- **Your Robots.txt:** https://blog.thelightroomstudios.com/robots.txt
- **Google Search Console:** https://search.google.com/search-console
- **Bing Webmaster Tools:** https://www.bing.com/webmasters
- **Netlify Dashboard:** https://app.netlify.com

---

## Questions?

**Q: Do I need to resubmit the sitemap every time I add a post?**
A: No! Just update the sitemap.xml file in your repo, push it, and let Netlify deploy. Google automatically recrawls your sitemap every few days.

**Q: How long until my posts appear in Google search?**
A: Typically 24-48 hours for initial indexing, but can take up to 2 weeks for new sites. Check with: `site:blog.thelightroomstudios.com` in Google.

**Q: Can I check if sitemap is working without Search Console?**
A: Yes! Just visit https://blog.thelightroomstudios.com/sitemap.xml in your browser. You should see XML code listing your pages.

**Q: What if I get errors?**
A: Most common cause is the file hasn't deployed yet. Wait 5 minutes after pushing to GitHub, then try again.

---

**Last Updated:** November 19, 2025
**Status:** Ready for submission after merge + deploy ✅
