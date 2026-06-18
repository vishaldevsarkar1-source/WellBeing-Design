# WellBeing Design — Landing Page

## Original Problem Statement
Build a premium, elegant, modern, fully responsive interior design and architecture landing page for "WellBeing Design", Nagpur. Pure HTML5 / CSS3 / Vanilla JS only — no frameworks, no build tools. Must be directly deployable to GitHub Pages with just 3 files: `index.html`, `style.css`, `script.js`.

## User Design Direction (verbatim)
- Theme: Dark Grey cabinetry, Warm wooden textures, Soft golden ambient lighting, Warm white backgrounds, Premium luxury residential interior aesthetic
- Hero: kitchen image as main hero background
- Direction: Luxury modern interior studio, elegant shadows, glassmorphism navbar, gold hover effects, premium card design, smooth scroll animations, large project images, high-end architecture portfolio feel
- Avoid: Bright colors, Blue accents, Corporate style, Flat generic templates

## Stack
HTML5 + CSS3 + Vanilla JavaScript (no dependencies except Google Fonts: Cormorant Garamond + Manrope, and Font Awesome 6 via CDN).

## Files (deployable to GitHub Pages)
- `/app/site/index.html`
- `/app/site/style.css`
- `/app/site/script.js`

## Implemented (Dec 2025)
- Glassmorphism navbar (transparent on hero → frosted on scroll), active section tracking, mobile hamburger menu
- Hero with 4-slide JS slider (auto-rotate, dots, smooth Ken Burns scale), gold accents, animated scroll indicator, eyebrow tag, 12+/250+/5.0 meta stats
- Marquee strip of services
- Animated stat counters (IntersectionObserver)
- About section with framed image, est-2013 badge, gold accent frame, check-list points
- 10 service cards in seamless grid with hover dark-takeover + gold icon shift
- Projects with category filters (All/Residential/Commercial/Kitchen/Bedroom/Office/Architecture) + 9 cards with hover zoom & overlay arrow
- CSS columns masonry gallery (8 images) + JS lightbox with keyboard ESC close
- Why-Choose-Us 6 cards with serif numerals
- 7-step horizontal Process strip on charcoal background
- Auto-sliding testimonial carousel with dots + prev/next + pause-on-hover
- FAQ accordion using semantic `<details>`
- CTA strip
- Contact: studio info, phone, WhatsApp, hours, 5 social icons, validated contact form (simulated success message), embedded Google Map (Manish Nagar)
- Footer with 4 columns (brand/quick-links/services/contact), socials, dynamic year
- Floating WhatsApp, click-to-call, back-to-top buttons
- Custom gold cursor follower (desktop only)
- Reveal-on-scroll animations via IntersectionObserver
- Preloader with gold loading bar
- Full SEO: meta title/description/keywords, OG tags, Twitter cards, semantic HTML, lazy-loaded images, accessibility (aria labels, focus states, prefers-reduced-motion)
- Fully responsive: 1100px / 640px breakpoints, mobile menu, masonry column reduction

## How to Deploy
Upload the 3 files in `/app/site/` to a GitHub repo root → enable GitHub Pages on `main` branch. No build step required.

## Known Defaults Used
- Unsplash images for hero/projects/gallery (no upload was attached to job)
- Contact form: simulated success message (no backend)
- Google Maps: Manish Nagar embed
- Social links: placeholder `#` (replace with real URLs)

## Next Action Items
- Replace Unsplash images with real WellBeing project photos
- Wire contact form to Formspree / Resend / EmailJS
- Replace placeholder social links with real handles
- Replace Google Maps embed with the exact studio location
- (Optional) Add individual project detail pages or a blog
