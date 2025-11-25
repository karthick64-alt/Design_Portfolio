# Designer Portfolio Website

A comprehensive, modern portfolio website for designers built with HTML, CSS, Bootstrap 5, and JavaScript.

## Features

### 🏠 Pages Included

1. **Home Page (Version 1)** - General portfolio landing page
   - Hero section with designer intro
   - Featured works showcase
   - Skills highlight
   - Quick contact CTA
   - Client logos section

2. **Home Page (Version 2)** - Niche-specific (UI/UX focused)
   - Niche-focused hero section
   - Service highlights
   - Portfolio category showcase
   - Testimonials slider
   - CTA sections

3. **About Me/About Us** - Designer introduction
   - Bio and expertise
   - Mission & vision
   - Skills & tools showcase
   - Career journey/timeline
   - Client testimonials

4. **Services** - Service offerings
   - List of design services
   - Pricing cards
   - Process overview (5-step workflow)

5. **Service Details** - Individual service pages
   - Detailed service explanation
   - What's included/scope of work
   - FAQs section
   - Pricing table
   - Portfolio samples

6. **Portfolio/Projects** - Project showcase
   - Grid-based gallery
   - Category filters (Branding, UI/UX, Web, Graphics)
   - Lightbox preview
   - Project categories

7. **Project Details** - Case study pages
   - Project overview
   - Goals, challenges, and solutions
   - Full design showcase
   - Tools used
   - Outcomes & client feedback

8. **Blog** - Blog listing
   - Blog posts with thumbnails
   - Search functionality
   - Category sidebar
   - Pagination

9. **Blog Details** - Individual blog posts
   - Full article view
   - Author information
   - Related posts
   - Comment section

10. **Contact Us** - Contact page
    - Contact form
    - Google Maps integration
    - Contact information
    - Social media links
    - Business hours

### 🎨 Global Components

- **Sticky Navbar** - Fixed navigation with active link highlighting
- **Scroll-to-Top Button** - Smooth scroll to top functionality
- **Dark/Light Mode Toggle** - Theme switcher with localStorage persistence
- **Responsive Layout** - Mobile-first, fully responsive design
- **Preloader** - Loading animation on page load
- **Footer** - Consistent footer with newsletter, links, and social icons

## File Structure

```
Designer Portfolio Website/
│
├── index.html              # Home Page Version 1
├── index-v2.html           # Home Page Version 2 (Niche-specific)
├── about.html              # About Me page
├── services.html           # Services listing
├── service-detail.html     # Individual service details
├── portfolio.html          # Portfolio gallery
├── project-detail.html     # Project case study
├── blog.html               # Blog listing
├── blog-detail.html        # Individual blog post
├── contact.html            # Contact page
│
├── css/
│   └── style.css           # Main stylesheet
│
├── js/
│   ├── main.js             # Main JavaScript (global features)
│   ├── portfolio.js        # Portfolio filter & lightbox
│   ├── blog.js             # Blog search & filtering
│   ├── service-detail.js   # Service detail page logic
│   └── contact.js          # Contact form handling
│
└── README.md               # This file
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with animations
- **Bootstrap 5.3.0** - Responsive framework
- **Bootstrap Icons** - Icon library
- **Vanilla JavaScript** - No dependencies

## Getting Started

1. **Download/Clone** the project files
2. **Open** any HTML file in a web browser
3. **Customize** the content, images, and colors to match your brand

## Customization Guide

### Changing Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #0d6efd;    /* Change primary color */
    --secondary-color: #6c757d;  /* Change secondary color */
    --dark-color: #212529;       /* Change dark color */
    --light-color: #f8f9fa;      /* Change light color */
}
```

### Adding Your Images

Replace placeholder images (`https://via.placeholder.com/...`) with your actual images:
- Portfolio images
- Blog post images
- Profile pictures
- Client logos

### Updating Content

- Edit HTML files directly to update text content
- Modify service details in `js/service-detail.js`
- Update contact information in `contact.html`

### Google Maps

Replace the Google Maps embed URL in `contact.html` with your location:

```html
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL"></iframe>
```

## Features Breakdown

### Portfolio Filtering
- Click filter buttons to show/hide portfolio items by category
- Smooth animations and transitions
- Lightbox modal for image previews

### Dark Mode
- Toggle between light and dark themes
- Preference saved in localStorage
- Smooth theme transitions

### Form Validation
- HTML5 form validation
- Custom JavaScript enhancements
- User-friendly error messages

### Responsive Design
- Mobile-first approach
- Breakpoints: Mobile, Tablet, Desktop
- Touch-friendly interactions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- All images use placeholder URLs - replace with your actual images
- Contact form uses client-side validation - integrate with backend for actual submission
- Google Maps embed requires a valid API key for production use
- Newsletter forms show alerts - integrate with email service for actual functionality

## License

This project is open source and available for personal and commercial use.

## Support

For questions or customization help, feel free to reach out!

---

**Built with ❤️ for designers**







