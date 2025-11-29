# GoHighLevel (GHL) Integration Guide

## Overview
This guide explains how to use your custom Data Career Blueprint design in GoHighLevel instead of their default templates.

## Option 1: Custom HTML/CSS in GHL Funnels (RECOMMENDED)

### Steps:
1. **Create a New Funnel in GHL**
   - Go to Sites → Funnels
   - Click "Create Funnel"
   - Choose "Blank Funnel" (don't use templates)

2. **Add Custom HTML Step**
   - Add a new step to your funnel
   - Select "Custom Code" or "Blank Page"
   - This gives you full HTML/CSS/JS control

3. **Copy Your Code**
   - Copy the entire `index.html` content
   - Paste it into the GHL custom code editor
   - Make sure to include:
     - All CSS from `css/style.css` (inline it in a `<style>` tag)
     - All JS from `js/main.js` (inline it in a `<script>` tag)
     - Update image paths to use GHL's media library URLs

4. **Upload Images to GHL**
   - Go to Sites → Media Library
   - Upload all images from `assets/images/`
   - Copy the GHL URLs for each image
   - Replace all `assets/images/` paths in your HTML with GHL URLs

5. **Inline All External Resources**
   ```html
   <!-- Keep these CDN links -->
   <script src="https://cdn.tailwindcss.com"></script>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
   
   <!-- Inline your CSS -->
   <style>
   /* Paste entire contents of css/style.css here */
   </style>
   
   <!-- Your HTML content -->
   
   <!-- Inline your JS -->
   <script>
   /* Paste entire contents of js/main.js here */
   </script>
   ```

## Option 2: GHL Custom Website

### Steps:
1. **Create Custom Website**
   - Go to Sites → Websites
   - Create a new website
   - Choose "Custom" or "Blank" template

2. **Add Custom Pages**
   - Create a new page
   - Use the "Code Editor" mode (not drag-and-drop)
   - Paste your HTML with inlined CSS/JS

3. **Set Up Navigation**
   - Update all internal links to point to GHL page URLs
   - Example: `href="apply.html"` → `href="/apply"`

## Option 3: Embed as iFrame (NOT RECOMMENDED)

You could host your site elsewhere (Netlify, Vercel, Render) and embed it in GHL via iframe, but this limits GHL's tracking and form integration capabilities.

## Important Considerations for GHL

### 1. **Form Integration**
Your current Typeform needs to be replaced with GHL forms:
```html
<!-- Replace Typeform embed with GHL form -->
<div id="ghl-form-container">
  <!-- GHL will inject form here -->
</div>
```

### 2. **Tracking & Analytics**
Add GHL tracking scripts:
```html
<script>
  // GHL tracking code (provided by GHL)
</script>
```

### 3. **Image Optimization**
- Upload images to GHL Media Library
- Use GHL's CDN URLs for better performance
- GHL automatically optimizes images

### 4. **Mobile Responsiveness**
Your current design is already mobile-responsive with Tailwind, which works perfectly in GHL.

## Step-by-Step Migration Checklist

### Pre-Migration
- [ ] Backup all current files
- [ ] Test current site thoroughly
- [ ] Document all external integrations (Typeform, etc.)

### Migration
- [ ] Create GHL funnel/website
- [ ] Upload all images to GHL Media Library
- [ ] Copy and note all image URLs
- [ ] Create single-page HTML file with inlined CSS/JS
- [ ] Replace all image paths with GHL URLs
- [ ] Replace Typeform with GHL form
- [ ] Add GHL tracking scripts
- [ ] Test all navigation links
- [ ] Test all animations and interactions

### Post-Migration
- [ ] Test on mobile devices
- [ ] Test form submissions
- [ ] Verify analytics tracking
- [ ] Check page load speed
- [ ] Test all external links (YouTube, LinkedIn)

## Code Template for GHL

Here's a template structure for your GHL custom page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Career Blueprint</title>
    
    <!-- External CDNs (keep these) -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- GHL Tracking (add your GHL tracking code) -->
    <script>
    // GHL tracking code here
    </script>
    
    <!-- Inline your custom CSS -->
    <style>
    /* Paste entire css/style.css content here */
    </style>
</head>
<body>
    <!-- Paste your HTML content here -->
    <!-- Replace all image src with GHL Media Library URLs -->
    <!-- Replace Typeform with GHL form embed -->
    
    <!-- Inline your custom JS -->
    <script>
    /* Paste entire js/main.js content here */
    </script>
</body>
</html>
```

## Alternative: Use GHL's Website Builder with Custom CSS

If you want to use GHL's drag-and-drop builder but keep your design:

1. **Create sections in GHL builder**
2. **Add Custom CSS to each section**
   - Use the "Custom CSS" option in section settings
   - Copy relevant CSS from your `style.css`
3. **Add Custom HTML elements**
   - Use "Custom HTML" blocks for complex components
4. **Style with GHL's class system**
   - GHL has its own class naming
   - You may need to adapt your CSS

## Pros & Cons

### Custom HTML/CSS Approach (Option 1)
**Pros:**
- ✅ Complete design control
- ✅ Exact replica of your current site
- ✅ All animations and interactions work
- ✅ Fast development

**Cons:**
- ❌ Harder to edit for non-technical users
- ❌ No drag-and-drop editing
- ❌ Need to manually integrate GHL forms

### GHL Builder with Custom CSS (Alternative)
**Pros:**
- ✅ Easy for non-technical users to edit
- ✅ Native GHL form integration
- ✅ Built-in A/B testing

**Cons:**
- ❌ May not perfectly match your design
- ❌ More time-consuming to set up
- ❌ Some animations may not work

## Recommended Approach

**For your specific case, I recommend Option 1 (Custom HTML/CSS in GHL Funnels):**

1. Create a blank funnel in GHL
2. Use custom code step
3. Inline all your CSS and JS
4. Upload images to GHL Media Library
5. Replace Typeform with GHL form
6. Test thoroughly

This gives you:
- Your exact design
- GHL's tracking and analytics
- GHL's form builder
- Full control over the code

## Need Help?

If you need assistance with:
- Creating the single-file version for GHL
- Replacing image paths
- Integrating GHL forms
- Setting up tracking

Let me know and I can help you prepare the exact code you need to paste into GHL!
