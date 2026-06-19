# Hammond Interiors South East Ltd - Website

A premium, modern website for Hammond Interiors South East Ltd, a professional kitchen and bathroom installation company based in Bexhill-on-Sea, East Sussex.

## 🎨 Design Features

- **Modern & Luxurious**: Dark charcoal (#1a1a1a) with elegant gold/bronze accents (#c9a961)
- **Mobile-First Responsive**: Fully optimized for mobile, tablet, and desktop
- **Smooth Animations**: Subtle fade-in and slide animations for visual polish
- **Professional Typography**: Playfair Display for headings, Poppins for body text
- **Performance Optimized**: Lazy loading, efficient CSS, optimized JavaScript
- **Accessibility Compliant**: WCAG 2.1 standards, keyboard navigation, screen reader support

## 📋 Sections Included

1. **Navigation Bar** - Sticky navigation with mobile hamburger menu
2. **Hero Section** - Eye-catching headline with trust indicators
3. **About Us** - Company overview and key highlights
4. **Services** - Four service categories with detailed descriptions
5. **Gallery** - Filterable project portfolio (all, kitchens, bathrooms, renovations)
6. **Why Choose Us** - Six feature cards highlighting key differentiators
7. **Testimonials** - Customer review cards with ratings
8. **Process** - Six-step project timeline
9. **FAQ** - Expandable accordion with common questions
10. **Contact** - Contact form with validation, phone, email, and social links
11. **Footer** - Comprehensive footer with links and copyright

## 🚀 Getting Started

### Start the Server

The website includes a Node.js HTTP server. To start it:

```bash
cd C:\Users\richa\HammondWebsite
node server.js
```

The server will run on `http://localhost:8765/`

### Open in Browser

Navigate to: **http://localhost:8765/**

## 📁 Project Structure

```
HammondWebsite/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete styling (dark theme, responsive design)
├── script.js           # JavaScript for interactivity
├── server.js           # Node.js HTTP server
├── .claude/
│   └── launch.json     # Development server configuration
└── README.md          # This file
```

## ✨ Key Features Implemented

### Navigation
- Sticky navbar with smooth background fade on scroll
- Mobile hamburger menu with smooth toggle
- Smooth scroll-to-section links with navbar offset

### Hero Section
- Full-height hero with gradient overlay
- Trust bar with 4 key selling points
- Call-to-action buttons (Get Quote, View Work)
- Subtle parallax effect on scroll

### Gallery
- 6 featured projects with filter buttons
- Categories: All, Kitchens, Bathrooms, Renovations
- Smooth filtering with animations
- Hover effects with shadow elevation

### Interactive Features
- **FAQ Accordion** - Expandable questions with smooth open/close
- **Contact Form** - With validation for:
  - Required fields (name, email, service, message)
  - Email format validation
  - Phone number auto-formatting (UK style)
  - Success message on submission
- **Mobile Menu** - Auto-closes when link is clicked
- **Smooth Scrolling** - All anchor links scroll smoothly with navbar offset

### Performance
- Lazy loading support for images (ready for real images)
- Intersection Observer for scroll animations
- Minimal JavaScript footprint
- CSS animations (no heavy libraries)
- Optimized PNG/SVG placeholders

### SEO & Meta
- Complete meta tags (description, keywords, theme color)
- Open Graph tags for social sharing
- JSON-LD structured data (LocalBusiness schema)
- Semantic HTML5
- Accessible form fields and ARIA labels

## 🎯 Design Color Scheme

- **Primary Dark**: #1a1a1a (Almost black background)
- **Secondary Dark**: #2a2a2a (Card backgrounds)
- **Tertiary Dark**: #3a3a3a (Hover states)
- **Accent Gold**: #c9a961 (Luxury accents)
- **Accent Gold Light**: #d4b896 (Hover highlights)
- **Text White**: #ffffff (Main text)
- **Text Light**: #e0e0e0 (Secondary text)
- **Text Muted**: #999999 (Tertiary text)

## 📱 Responsive Breakpoints

- **Desktop**: Full multi-column layouts
- **Tablet** (768px and below): Adjusted grid, readable spacing
- **Mobile** (480px and below): Single column, optimized touch targets

## 🔧 Customization Guide

### Update Company Information

In `index.html`, find and update:
- Phone number (search for `+441234567890`)
- Email address (search for `info@hammondinteriors.co.uk`)
- Social links (Facebook, Instagram URLs)

### Add Real Images

Replace placeholder SVGs with real images:

1. Create an `images/` folder
2. Update image references in HTML and CSS
3. Use optimized/compressed images for fast loading

Example:
```html
<!-- Before -->
<div class="gallery-image">
    <svg viewBox="0 0 400 300">...</svg>
</div>

<!-- After -->
<div class="gallery-image">
    <img src="images/kitchen-1.jpg" alt="Modern Kitchen Renovation" loading="lazy">
</div>
```

### Modify Services

Edit the services grid in `index.html`. Each service card contains:
- Icon emoji
- Title
- Bulleted list

### Update Testimonials

Replace placeholder testimonials with real customer reviews from Facebook/Instagram.

### Customize Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-dark: #1a1a1a;      /* Change dark background */
    --accent-gold: #c9a961;        /* Change accent color */
    /* ... update other colors ... */
}
```

## 📧 Contact Form Integration

Currently, the contact form:
- Validates all required fields
- Shows success message
- Logs form data to browser console

To send emails, integrate with:
- **Formspree** (free tier available)
- **Basin** (simple form backend)
- **Email service via Node.js** (use Nodemailer)

Example Formspree integration:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- form fields -->
</form>
```

## 🔍 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

## ♿ Accessibility Features

- Semantic HTML5 structure
- ARIA labels for form fields
- Keyboard navigation support
- Focus indicators on interactive elements
- Screen reader optimized
- Color contrast WCAG AA compliant
- Proper heading hierarchy

## 📊 SEO Optimization

- Meta descriptions for social sharing
- Schema markup for local business
- Semantic HTML with proper heading structure
- Fast loading (minimal resources)
- Mobile responsive (Google ranking factor)
- Keyword-rich content

### Target SEO Keywords

- Kitchen fitters East Sussex
- Bathroom installers East Sussex
- Kitchen renovation East Sussex
- Bathroom renovation East Sussex
- Kitchen fitting Bexhill
- Bathroom fitting Bexhill
- Kitchen installers Hastings
- Bathroom installers Hastings

## 🚢 Deployment

To deploy this website:

1. **Option 1: Netlify**
   - Drag & drop the folder onto Netlify
   - Automatic HTTPS, custom domain support

2. **Option 2: Vercel**
   - Connect GitHub repo
   - Automatic deployments on push

3. **Option 3: Traditional Hosting**
   - Upload files to your web host
   - No build step required (static site)

4. **Option 4: AWS S3 + CloudFront**
   - Upload to S3 bucket
   - CDN distribution for fast global access

## 📞 Next Steps

1. **Add Real Images**: Replace SVG placeholders with actual photos from Facebook/Instagram
2. **Update Contact Info**: Add real phone number and email
3. **Integrate Email**: Connect contact form to email service
4. **Add Analytics**: Add Google Analytics tracking
5. **Test on Devices**: Check on actual mobile devices
6. **Get Reviews**: Ensure customer testimonials are accurate
7. **Deploy**: Choose hosting and go live

## 📝 License

This website is created for Hammond Interiors South East Ltd.

---

**Website Created**: June 2026
**Technology**: HTML5, CSS3, Vanilla JavaScript
**Mobile First**: Yes
**Responsive**: Yes
**Modern Browser Support**: Yes
