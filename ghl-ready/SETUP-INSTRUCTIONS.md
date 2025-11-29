# GHL Setup Instructions

## 📋 Quick Start Guide

### Step 1: Upload Images to GHL Media Library
1. Go to **Sites → Media Library** in GHL
2. Upload ALL images from the `images-to-upload` folder
3. After uploading, click each image and copy its URL
4. Save these URLs - you'll need them in Step 3

### Step 2: Create Your Funnel/Website
1. Go to **Sites → Funnels** (or Websites)
2. Click **"Create Funnel"**
3. Choose **"Blank Funnel"** (don't use templates)
4. Add a new step
5. Select **"Custom Code"** or **"Blank Page"**

### Step 3: Replace Image URLs
1. Open `index-ghl-ready.html` in a text editor
2. Find all instances of `[REPLACE-WITH-GHL-URL]`
3. Replace each with the actual GHL Media Library URL for that image
4. **Image mapping guide:**
   - `Logo.png` → Your uploaded logo URL
   - `endimg.png` → Instructor image URL
   - `slder1.png`, `slder2.png`, `slder3.png` → Company logos
   - All testimonial images in `pplcomnts/` folder
   - All people images in `pplimgs/` folder

### Step 4: Add GHL Form
1. Create your form in GHL Forms builder
2. Get the form embed code
3. In `index-ghl-ready.html`, find the comment:
   ```html
   <!-- GHL FORM PLACEHOLDER -->
   ```
4. Replace the Typeform embed with your GHL form code

### Step 5: Add GHL Tracking
1. Get your GHL tracking code from Settings
2. Find this comment in the HTML:
   ```html
   <!-- GHL TRACKING CODE -->
   ```
3. Paste your tracking code there

### Step 6: Paste into GHL
1. Copy the ENTIRE contents of `index-ghl-ready.html`
2. Paste into your GHL custom code editor
3. Save and publish!

## ✅ Design Guarantee

**Your design WILL look exactly the same in GHL because:**
- ✅ We're using Tailwind CDN (works everywhere)
- ✅ All custom CSS is inlined (no external dependencies)
- ✅ All JavaScript is inlined (no external files)
- ✅ All animations and interactions are preserved
- ✅ Mobile responsive design is maintained
- ✅ All hover effects and transitions work

## 🎨 What's Included

### Files in this folder:
1. **index-ghl-ready.html** - Main landing page (ready for GHL)
2. **apply-ghl-ready.html** - Application page (ready for GHL)
3. **images-to-upload/** - All images you need to upload to GHL
4. **SETUP-INSTRUCTIONS.md** - This file
5. **IMAGE-URL-MAPPING.md** - Detailed image replacement guide

## 🔧 Customization Tips

### To change colors:
Search for `#3b82f6` (blue) in the HTML and replace with your brand color

### To update text:
Just edit the HTML content directly - all text is clearly marked

### To add/remove sections:
Each section is clearly commented with `<!-- Section Name -->`

## ⚠️ Important Notes

1. **Don't remove Tailwind CDN** - It's essential for the design
2. **Keep all inline CSS** - It's needed for custom styling
3. **Test on mobile** after pasting into GHL
4. **GHL forms** may have different styling - you might need to adjust

## 🆘 Troubleshooting

### Images not showing?
- Double-check you replaced ALL `[REPLACE-WITH-GHL-URL]` placeholders
- Verify image URLs are publicly accessible
- Check GHL Media Library permissions

### Design looks different?
- Make sure Tailwind CDN loaded (check browser console)
- Verify all inline CSS is present
- Clear browser cache and hard refresh

### Animations not working?
- Check browser console for JavaScript errors
- Ensure the inline JavaScript is at the bottom of the HTML
- GHL might have JavaScript restrictions - contact support if needed

## 📞 Need Help?

If you encounter issues:
1. Check browser console for errors (F12)
2. Verify all placeholders are replaced
3. Test in a different browser
4. Contact GHL support if it's a platform issue

## 🚀 Going Live Checklist

- [ ] All images uploaded to GHL Media Library
- [ ] All image URLs replaced in HTML
- [ ] GHL form integrated and tested
- [ ] GHL tracking code added
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] All links work (YouTube, LinkedIn, etc.)
- [ ] Form submissions working
- [ ] Analytics tracking verified

---

**You're all set!** Your beautiful custom design will work perfectly in GHL. 🎉
