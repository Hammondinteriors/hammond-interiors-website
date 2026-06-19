# Quick Start: Adding Images to Your Website

The website is now set up to display real images. Here's the fastest way to add them:

---

## Option 1: Automatic Download (Easiest)

### Step 1: Get Facebook Image URLs

1. Open https://www.facebook.com/HammondInteriors1
2. Find a kitchen/bathroom photo
3. Right-click → "Open image in new tab"
4. Copy the URL from the browser address bar

### Step 2: Run the Image Downloader

Open PowerShell in `C:\Users\richa\HammondWebsite` and run:

```powershell
node download-images.js
```

### Step 3: Follow the Prompts

```
🖼️  Hammond Interiors - Image Download Helper

Available image slots:
  1. Hero Background → images/hero/hero-bg.jpg
  2. Kitchen Project 1 → images/gallery/kitchen-1.jpg
  3. Kitchen Project 2 → images/gallery/kitchen-2.jpg
  4. Bathroom Project 1 → images/gallery/bathroom-1.jpg
  5. Bathroom Project 2 → images/gallery/bathroom-2.jpg
  6. Renovation Project 1 → images/gallery/renovation-1.jpg
  7. Renovation Project 2 → images/gallery/renovation-2.jpg
  8. About/Team Photo → images/about/team.jpg

Enter image number (1-8) or press Enter to exit: 1
📥 Downloading: Hero Background
Paste image URL: [paste URL here]
✅ Downloaded to: images/hero/hero-bg.jpg
```

---

## Option 2: Manual Download (Full Control)

### Step 1: Create Image Folders

In `C:\Users\richa\HammondWebsite\`, create:

```
images/
  ├── hero/
  ├── gallery/
  └── about/
```

(The script will create these if they don't exist)

### Step 2: Download from Facebook

1. Go to: https://www.facebook.com/HammondInteriors1
2. Find a photo
3. Right-click → "Open image in new tab"
4. Right-click → "Save image as..."
5. Navigate to `C:\Users\richa\HammondWebsite\images\gallery\`
6. Save as:
   - `kitchen-1.jpg`
   - `kitchen-2.jpg`
   - `bathroom-1.jpg`
   - `bathroom-2.jpg`
   - `renovation-1.jpg`
   - `renovation-2.jpg`

Also save to `images/hero/` as `hero-bg.jpg`
And to `images/about/` as `team.jpg`

### Step 3: Optimize Images (Important!)

Before using them on the website:

1. Go to https://tinypng.com
2. Drag and drop your image
3. Download the optimized version
4. Replace the original in your images folder

This makes images load faster!

---

## What Gets Updated Automatically

Once images are in the correct folders with correct filenames:

✅ Gallery section shows your project photos
✅ Hero section uses your banner image
✅ About section shows team/workspace photo
✅ All images are responsive (work on mobile/tablet/desktop)
✅ Images lazy load for fast page speed

---

## File Names (Must Be Exact)

```
images/
├── hero/
│   └── hero-bg.jpg                ← Hero background
├── gallery/
│   ├── kitchen-1.jpg              ← 1st kitchen project
│   ├── kitchen-2.jpg              ← 2nd kitchen project
│   ├── bathroom-1.jpg             ← 1st bathroom project
│   ├── bathroom-2.jpg             ← 2nd bathroom project
│   ├── renovation-1.jpg           ← 1st renovation project
│   └── renovation-2.jpg           ← 2nd renovation project
└── about/
    └── team.jpg                   ← Team/workspace photo
```

**Note**: Filenames are case-sensitive. Use lowercase `.jpg` not `.JPG`

---

## Image Size Recommendations

| Location | Ideal Size | Max Size | Format |
|----------|-----------|---------|--------|
| Hero | 1920×1000px | 300KB | JPG |
| Gallery | 800×600px | 150KB | JPG |
| About | 400×500px | 100KB | JPG |

---

## Test It

1. Add at least one image to `images/gallery/`
2. Start the server: `node server.js`
3. Open http://localhost:8765
4. Check if images show in the gallery
5. Add remaining images

---

## Need Help?

### Images not showing?
- Check filenames match exactly (case-sensitive)
- Open DevTools (F12) → Network tab
- Look for 404 errors
- Verify images are in correct folders

### Images loading slowly?
- Optimize with TinyPNG.com
- Reduce file size to under 150KB
- Consider resizing to recommended dimensions

### Wrong image aspect ratio?
- Resize images to recommended sizes
- Use online tool: Pixlr.com or Canva
- Or use: Paint, Photoshop, GIMP

---

## Facebook Image URL Format

Facebook images usually have URLs like:
```
https://scontent.cdninstagram.com/v/...
https://www.facebook.com/photo.php?fbid=...
```

The image downloader handles both formats!

---

## Pro Tips

1. **Batch download**: Get all images first, optimize them, then add at once
2. **Before/After photos**: Use before-and-after shots for impact
3. **Consistent style**: Use images with similar lighting/quality
4. **Team photos**: Include team at work for trust/authenticity
5. **Testimonial photos**: Add customer faces if available

---

## Done? Next Steps

After adding images:

1. ✅ Test website on mobile (http://localhost:8765)
2. ✅ Verify all images load
3. ✅ Check gallery filters work
4. ✅ Update contact info (phone, email)
5. ✅ Integrate contact form to email service
6. ✅ Add Google Analytics
7. ✅ Deploy to live hosting

---

## Quick Reference

**Start Server:**
```powershell
cd C:\Users\richa\HammondWebsite
node server.js
```

**Download Images:**
```powershell
node download-images.js
```

**Open Website:**
```
http://localhost:8765/
```

**Stop Server:**
Press `Ctrl+C`

---

**Ready to add images? Start with Option 1 above!** 🚀
