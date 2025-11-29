# Image URL Mapping Guide

## 📸 Complete Image List

When you upload images to GHL Media Library, you'll need to replace placeholders in the HTML with actual URLs.

### How to Find Placeholders:
Search for `[REPLACE-WITH-GHL-URL-` in the HTML file. Each placeholder tells you which image it needs.

---

## Main Images

### Logo
- **File:** `Logo.png`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-LOGO]`
- **Used in:** Header, Footer
- **Count:** 2 instances

### Instructor Image
- **File:** `endimg.png`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-INSTRUCTOR]`
- **Used in:** Instructor section
- **Count:** 1 instance

---

## Company Logos (Graduates Hired By)

### Slider 1
- **File:** `logogrid/slder1.png`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-LOGO1]`
- **Count:** 3 instances (repeated for scroll effect)

### Slider 2
- **File:** `logogrid/slder2.png`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-LOGO2]`
- **Count:** 3 instances (repeated for scroll effect)

### Slider 3
- **File:** `logogrid/Slder3.png`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-LOGO3]`
- **Count:** 3 instances (repeated for scroll effect)

---

## People Images (Hero Section)

### Hakeem
- **File:** `pplimgs/Hakeem.webp`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-HAKEEM]`
- **Count:** 1 instance

### Larita
- **File:** `pplimgs/Larita.webp`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-LARITA]`
- **Count:** 1 instance

### Caitlin
- **File:** `pplimgs/Caitlin.webp`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-CAITLIN]`
- **Count:** 1 instance

---

## Testimonial Profile Images

### Caitlin U.
- **File:** `pplimgs/Caitlin.webp`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-CAITLIN]`

### Larita W.
- **File:** `pplimgs/Larita.webp`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-LARITA]`

### Elleni T.
- **File:** `pplimgs/Elleni.webp`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-ELLENI]`

### Jacinda L.
- **File:** `pplimgs/Jacinda.webp`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-JACINDA]`

### Tanya C.
- **File:** `pplimgs/Tanya.webp`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-TANYA]`

### Ronnie S.
- **File:** `pplimgs/Ronnie.webp`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-RONNIE]`

### Amanda L.
- **File:** `pplimgs/Amanda.webp`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-AMANDA]`

### Kerristen B.
- **File:** `pplimgs/Kerristen.webp`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-KERRISTEN]`

### Hakeem L.
- **File:** `pplimgs/Hakeem.webp`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-HAKEEM]`

---

## Testimonial Screenshot Images (Masonry Grid)

### Image AA
- **File:** `pplcomnts/aa.webp`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-COMMENT-AA]`

### Image BB
- **File:** `pplcomnts/bb.webp`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-COMMENT-BB]`

### Image CC
- **File:** `pplcomnts/cc.webp`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-COMMENT-CC]`

### Image DD
- **File:** `pplcomnts/dd.webp`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-COMMENT-DD]`

### Image EE
- **File:** `pplcomnts/ee.webp`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-COMMENT-EE]`

### Image FF
- **File:** `pplcomnts/ff.webp`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-COMMENT-FF]`

### Image HH
- **File:** `pplcomnts/hh.png`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-COMMENT-HH]`

### Image II
- **File:** `pplcomnts/ii.webp`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-COMMENT-II]`

### Image JJ
- **File:** `pplcomnts/jj.webp`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-COMMENT-JJ]`

### Image KK
- **File:** `pplcomnts/kk.webp`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-COMMENT-KK]`

### Image LL
- **File:** `pplcomnts/ll.webp`
- **Placeholder:** `[REPLACE-WITH-GHL-URL-COMMENT-LL]`

---

## 📝 Replacement Process

### Method 1: Find & Replace (Recommended)
1. Open `index-ghl-ready.html` in a text editor
2. Use Find & Replace (Ctrl+H or Cmd+H)
3. For each placeholder:
   - **Find:** `[REPLACE-WITH-GHL-URL-LOGO]`
   - **Replace with:** `https://your-ghl-url.com/logo.png`
4. Repeat for all placeholders

### Method 2: Manual Search
1. Search for `[REPLACE-WITH-GHL-URL-`
2. Replace each instance one by one
3. Double-check you got them all

---

## ✅ Verification Checklist

After replacing URLs, verify:
- [ ] All placeholders are gone (search for `[REPLACE-WITH-GHL-URL-`)
- [ ] All URLs start with `https://`
- [ ] All URLs are from GHL Media Library
- [ ] Images load when you paste HTML into GHL
- [ ] Mobile images load correctly too

---

## 💡 Pro Tips

1. **Keep a spreadsheet** of filename → GHL URL mappings
2. **Test one image first** before replacing all
3. **Use descriptive names** when uploading to GHL (e.g., "logo-header" instead of "Logo.png")
4. **Check image permissions** in GHL - they must be publicly accessible

---

## Total Images to Upload: 30

- 1 Logo
- 1 Instructor image
- 3 Company logos
- 9 People images
- 11 Testimonial screenshots
- 5 Additional testimonial images

**Estimated upload time:** 10-15 minutes
