# Testing Guide - Hammond Interiors Website

## Quick Start

1. **Start the server**:
   ```powershell
   cd C:\Users\richa\HammondWebsite
   node server.js
   ```

2. **Open in browser**:
   - Chrome: `http://localhost:8765/`
   - Edge: `http://localhost:8765/`
   - Firefox: `http://localhost:8765/`

3. **Stop the server**: Press `Ctrl+C` in the PowerShell window

---

## Testing Checklist

### Visual & Layout ✓
- [ ] Hero section displays prominently with text and buttons
- [ ] Navigation bar is sticky and stays visible while scrolling
- [ ] All sections have proper spacing and alignment
- [ ] Colors are dark charcoal with gold accents
- [ ] Fonts are elegant and readable
- [ ] Images/placeholders scale correctly

### Mobile Responsiveness ✓
- [ ] Resize browser to 480px width - single column layout
- [ ] Resize browser to 768px width - tablet layout
- [ ] Full browser width - desktop layout
- [ ] Mobile hamburger menu appears on narrow screens
- [ ] All text remains readable at all sizes
- [ ] Touch targets (buttons) are at least 44x44px

### Navigation ✓
- [ ] Click logo - scrolls to top
- [ ] Click menu items (About, Services, Gallery, etc.)
- [ ] Each link scrolls to correct section
- [ ] Mobile hamburger menu opens and closes
- [ ] Menu closes when clicking a link
- [ ] Navigation bar has smooth background fade on scroll

### Hero Section ✓
- [ ] Large headline is prominent
- [ ] Subtitle is readable and describes the company
- [ ] Two CTA buttons visible ("Get A Free Quote", "View Our Work")
- [ ] Trust bar shows 4 selling points
- [ ] Buttons are clickable and have hover effects

### About Section ✓
- [ ] Company description is visible and readable
- [ ] 5 key highlights display with star icons
- [ ] Image placeholder shows on desktop (right side)
- [ ] Layout is single column on mobile

### Services Section ✓
- [ ] 4 service cards display: Kitchen, Bathroom, Renovation, Project Management
- [ ] Each card has an emoji icon
- [ ] Each card has a list of 6 service items
- [ ] Cards have hover effects (lift and gold border)
- [ ] Cards are responsive grid on mobile

### Gallery Section ✓
- [ ] 6 project items display
- [ ] Filter buttons: "All Projects", "Kitchens", "Bathrooms", "Renovations"
- [ ] Click each filter - projects update correctly
- [ ] Active filter button is highlighted in gold
- [ ] Gallery items have smooth fade animations
- [ ] Hover effects show on project cards

### Why Choose Us ✓
- [ ] 6 feature cards display in a grid
- [ ] Each card has emoji icon, title, and description
- [ ] Cards have hover effects
- [ ] Icons and text are properly aligned
- [ ] Mobile layout is single column

### Testimonials ✓
- [ ] 3 testimonial cards visible
- [ ] Star ratings display (5 stars each)
- [ ] Testimonial text is readable
- [ ] Author names and locations shown
- [ ] Gold border on left side of each card

### Process Section ✓
- [ ] 6 process steps display
- [ ] Each step has a number (1-6)
- [ ] Step titles and descriptions visible
- [ ] Timeline layout responsive on mobile
- [ ] Numbered circles have gold background

### FAQ Section ✓
- [ ] 6 FAQ items visible
- [ ] Click each question to expand/collapse
- [ ] "+" icon rotates to "x" when expanded
- [ ] Answer text displays smoothly
- [ ] Only one FAQ open at a time (optional toggle behavior)
- [ ] Questions are clickable and keyboard accessible

### Contact Section ✓
- [ ] Contact form visible with 5 fields:
  - [ ] Name (text input)
  - [ ] Email (email input)
  - [ ] Phone (tel input)
  - [ ] Service (dropdown with options)
  - [ ] Project Details (textarea)
- [ ] Submit button visible ("Request Your Free Quote")
- [ ] Contact info displays (phone, email, location)
- [ ] Social media links visible (Facebook, Instagram)
- [ ] Form has proper spacing and alignment

### Form Validation ✓
- [ ] Try submitting empty form - should show error message
- [ ] Enter invalid email - should show warning/validation
- [ ] Enter valid data - should show success message
- [ ] Phone number auto-formats as you type
- [ ] Form resets after successful submission

### Footer ✓
- [ ] Company name and description visible
- [ ] Social media links present
- [ ] Service list links visible
- [ ] Coverage areas listed
- [ ] Contact information displayed
- [ ] Copyright notice at bottom
- [ ] Footer is full width and properly styled

### Interactions & Animations ✓
- [ ] Smooth scroll when clicking nav links
- [ ] Hover effects on all buttons
- [ ] Hover effects on all cards
- [ ] Mobile menu smooth toggle
- [ ] FAQ accordion smooth expand/collapse
- [ ] Form inputs show focus state (gold border)

### Performance ✓
- [ ] Page loads quickly (less than 2 seconds)
- [ ] No console errors or warnings
- [ ] Images lazy load as you scroll (when added)
- [ ] Smooth scrolling (no jank)
- [ ] Animations are smooth (60fps)

### Browser DevTools Console ✓
- [ ] Open DevTools (F12)
- [ ] Go to Console tab
- [ ] No red errors should appear
- [ ] No warnings about resources
- [ ] Message "Hammond Interiors website loaded" appears on page load

### Keyboard Navigation ✓
- [ ] Tab through all interactive elements
- [ ] Focus indicators visible (gold outline)
- [ ] Can submit form using keyboard (Tab to button, Enter)
- [ ] Can open/close FAQ using keyboard (Space/Enter)
- [ ] Mobile menu can be navigated with keyboard

---

## Common Testing Tasks

### Test Mobile View
1. Open DevTools (F12)
2. Click device toolbar icon (or Ctrl+Shift+M)
3. Select "iPhone 12" or "Pixel 5"
4. Verify layout changes appropriately
5. Test hamburger menu on mobile

### Test Touch Interactions
1. Use mobile device or browser mobile emulation
2. Tap buttons to verify they're responsive
3. Scroll through page smoothly
4. Fill out form using mobile keyboard
5. Submit form on mobile

### Test Performance
1. Open DevTools (F12)
2. Go to Performance tab
3. Click record
4. Scroll through entire page
5. Click record again to stop
6. Verify FPS stays high (60fps target)

### Test Accessibility
1. Install WAVE (WebAIM) browser extension
2. Run on the website
3. Check for contrast issues
4. Verify all form labels are associated
5. Test with screen reader if available

### Test Different Browsers
- [ ] Chrome
- [ ] Edge
- [ ] Firefox
- [ ] Safari (if available)

---

## Troubleshooting

### Server won't start
- Make sure Node.js is installed: `node --version`
- Verify port 8765 isn't in use
- Try: `netstat -ano | findstr :8765`

### Page won't load
- Check server is running (should see "Server running at..." message)
- Try refreshing the page (Ctrl+R)
- Clear browser cache (Ctrl+Shift+Delete)

### Styles not loading
- Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
- Check DevTools Network tab to verify CSS loaded
- Ensure styles.css is in the same directory as index.html

### JavaScript not working
- Open DevTools Console (F12 → Console tab)
- Look for red error messages
- Check that script.js is loading

### Form not validating
- Open DevTools Console
- Check for JavaScript errors
- Try submitting with all fields filled
- Check console for any logged messages

---

## Feature Testing Details

### Navigation Bar
**What to test**:
- Scrolls to each section smoothly
- Background fades in when scrolling
- Mobile hamburger menu toggles
- Logo/brand area is clickable
- Nav links have gold underline on hover

**How to test**:
1. Click each nav link
2. Verify smooth scroll to correct section
3. Resize to mobile and test hamburger menu
4. Scroll down and observe background change

### FAQ Accordion
**What to test**:
- Each question expands when clicked
- Only one answer visible at a time (suggested behavior)
- Answer content is readable
- Icon rotates smoothly

**How to test**:
1. Click first question - answer appears
2. Click second question - first closes, second opens
3. Click question again - answer closes
4. Verify icon animation

### Gallery Filters
**What to test**:
- All Projects shows 6 items
- Kitchens shows 2 items
- Bathrooms shows 2 items
- Renovations shows 2 items
- Active button is highlighted in gold

**How to test**:
1. Page loads with "All Projects" active
2. Click "Kitchens" - shows only kitchen projects
3. Click "Bathrooms" - shows only bathroom projects
4. Click "All Projects" - shows all 6 again

### Contact Form
**What to test**:
- All fields are present and labeled
- Dropdown has 4 service options
- Form validates required fields
- Email validation works
- Phone number formatting works
- Success message shows on valid submission

**How to test**:
1. Try submitting empty - should fail
2. Enter only name - should fail
3. Enter invalid email - should show validation
4. Fill all fields correctly
5. Click submit - should show success
6. Verify form resets after success

---

## File Verification

Ensure these files exist and have content:

```
C:\Users\richa\HammondWebsite\
├── index.html         ✓ (Should be ~7KB)
├── styles.css         ✓ (Should be ~25KB)
├── script.js          ✓ (Should be ~10KB)
├── server.js          ✓ (Should be ~2KB)
├── README.md          ✓ (Documentation)
├── TESTING.md         ✓ (This file)
└── .claude/
    └── launch.json    ✓ (Server config)
```

Run this command to verify:
```powershell
ls -la C:\Users\richa\HammondWebsite\
```

---

## Performance Metrics

Target metrics for a good user experience:

- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Lighthouse Score**: 90+

To check:
1. DevTools → Lighthouse tab
2. Click "Analyze page load"
3. Check scores for each metric

---

## Notes

- All placeholder images are SVG (lightweight)
- When adding real images, optimize them first
- Consider using WebP format for better compression
- Minify CSS/JS for production
- Add cache headers for better performance
- Use a CDN for global distribution

---

Last Updated: June 2026
