# Deploying Practice Platform to Render

## Overview

The practice platform is now integrated as a subpage at `/practice/` and will deploy automatically with your main site on Render.

## File Structure

```
remake/
├── index.html              # Main site (root)
├── apply.html
├── css/
├── js/
├── assets/
└── practice/               # Practice platform (subpage)
    ├── index.html          # Accessible at yoursite.com/practice/
    ├── problem.html        # Accessible at yoursite.com/practice/problem.html
    ├── css/
    ├── js/
    └── assets/
```

## How It Works on Render

When you deploy to Render:

1. **Root URL**: `https://yoursite.onrender.com/` → Main landing page
2. **Practice Platform**: `https://yoursite.onrender.com/practice/` → Practice platform

Render serves static files from your repository, so the `/practice/` folder will automatically be accessible as a subpage.

## Deployment Steps

### Option 1: Push to Git (Recommended)

```bash
# Navigate to your project
cd /Users/mhmdjmri/Desktop/youtube/ddem/remake

# Add the practice folder
git add practice/

# Commit the changes
git commit -m "Add practice platform as subpage"

# Push to your repository
git push origin main
```

Render will automatically detect the changes and redeploy.

### Option 2: Manual Upload

If you're using Render's manual upload:
1. Zip your entire `remake` folder (including the `practice` subfolder)
2. Upload to Render
3. Render will serve everything, including `/practice/`

## Navigation Integration

✅ **Already configured:**
- Main site navigation now includes "Practice" link
- Practice platform has "Main Site" link back to home
- All relative paths are correct

## Testing Locally

Before deploying, test the integration:

```bash
cd /Users/mhmdjmri/Desktop/youtube/ddem/remake
python3 -m http.server 8080
```

Then test these URLs:
- `http://localhost:8080/` → Main site
- `http://localhost:8080/practice/` → Practice platform
- Click "Practice" in main nav → Should go to practice platform
- Click "Main Site" in practice nav → Should return to main site

## After Deployment

Once deployed on Render, your URLs will be:
- Main site: `https://yoursite.onrender.com/`
- Practice: `https://yoursite.onrender.com/practice/`

## Important Notes

1. **No Build Process Needed**: Both sites use vanilla JS/HTML/CSS
2. **Shared Assets**: The practice platform uses its own assets folder
3. **Independent Operation**: Practice platform works standalone but integrates seamlessly
4. **LocalStorage**: User progress is saved per domain (works on Render)

## Render Configuration

No special configuration needed! Render will:
- Serve static files from root
- Automatically serve subdirectories
- Handle routing for `/practice/` path

Just make sure your Render project is set to:
- **Build Command**: (leave empty for static sites)
- **Publish Directory**: `.` (current directory)

## Custom Domain (Optional)

If you have a custom domain:
- Main: `https://yourdomain.com/`
- Practice: `https://yourdomain.com/practice/`

Everything will work the same way!

## Troubleshooting

**Issue**: 404 on `/practice/` after deployment
- **Solution**: Make sure the `practice` folder is committed to git

**Issue**: Assets not loading on practice platform
- **Solution**: Check that `practice/assets/images/Logo.png` exists

**Issue**: Navigation links broken
- **Solution**: Use relative paths (already configured)

---

## Quick Deploy Checklist

- [x] Practice folder renamed to `practice/`
- [x] Navigation links updated in main site
- [x] Back link updated in practice platform
- [x] Test locally before deploying
- [ ] Commit and push to git
- [ ] Verify deployment on Render
- [ ] Test both URLs work correctly

You're all set! Just push to git and Render will handle the rest. 🚀
