# Thapas Cafe – Official Website

A complete, premium, production-ready website for **Thapas Cafe**, an independent cafe-cum-restaurant located in Mundra, Gujarat.

Built entirely with pure **HTML5**, **CSS3**, and **Vanilla JavaScript** without any frameworks, build tools, or npm dependencies.

---

## 🌟 Live Features & Highlights

- **Pure Vanilla Stack**: Zero frameworks, zero dependencies, zero build steps. Runs directly by double-clicking `index.html` in any web browser.
- **Brand Identity**: Custom editorial color palette inspired by artisanal coffee and warm dining tones:
  - Espresso Brown: `#35251F`
  - Warm Cream: `#F7F1E7`
  - Terracotta: `#BD7658`
  - Olive Green: `#72785B`
  - Charcoal: `#292522`
  - Soft Ivory: `#FCFAF6`
- **Typography**: Google Fonts pairing — *Cormorant Garamond* & *Playfair Display* for refined headings, *DM Sans* for clean, modern readability.
- **Dynamic Menu Component**: 6 categories (*Coffee & Beverages*, *Cold Drinks*, *Snacks*, *Fast Food*, *Main Course*, *Desserts*) organized cleanly in a JavaScript array (`MENU_DATA` in `script.js`). Includes real-time search filtering and category tab switching.
- **Interactive Lightbox**: Responsive photo gallery with keyboard navigation (`Esc` to close, `ArrowLeft` / `ArrowRight` to navigate), backdrop click dismissal, and image counter.
- **Responsive Architecture**: Tested across desktop (1440px), laptop (1024px), tablet (768px), and mobile devices (390px, 360px) with touch-friendly navigation and a mobile drawer menu.
- **Verified Business Information**: Accurate details featuring Google Rating **4.9/5** (8 Reviews), exact address, and verified Instagram profile link (`@thapas_cafe`).
- **Production SEO & Structured Data**: Complete OpenGraph, Twitter Card metadata, `robots.txt`, `sitemap.xml`, and valid `Restaurant` / `CafeOrCoffeeShop` JSON-LD schema.
- **Performance & Accessibility**: Preloaded LCP hero image, modern WebP formats, semantic HTML5, ARIA labels, skip-to-content link, and `prefers-reduced-motion` compliance.

---

## 📁 Project File Structure

```
THAPAS-CAFE/
│
├── index.html            # Semantic HTML5 structure & JSON-LD metadata
├── style.css             # Responsive CSS3 styles, variables & animations
├── script.js             # Vanilla JS for menu data, lightbox & scroll effects
├── robots.txt            # Search engine crawler directives
├── sitemap.xml           # XML sitemap for SEO discovery
│
├── assets/
│   ├── images/
│   │   ├── hero.webp     # Hero background cafe photography
│   │   ├── about.webp    # About section atmosphere image
│   │   ├── food-1.webp   # Burger & fries savory food photography
│   │   ├── food-2.webp   # Handcrafted artisan pizza
│   │   ├── coffee.webp   # Latte art in ceramic mug
│   │   └── gallery/
│   │       ├── gallery-1.webp  # Ambience & interior
│   │       ├── gallery-2.webp  # Espresso brewing & beans
│   │       ├── gallery-3.webp  # Fudge brownie dessert
│   │       ├── gallery-4.webp  # Crispy cafe fries
│   │       ├── gallery-5.webp  # Group dining moments
│   │       └── gallery-6.webp  # Chilled beverages & mocktails
│   │
│   └── icons/
│       └── favicon.svg   # Custom SVG coffee cup favicon
│
└── README.md             # Documentation & deployment guide
```

---

## 📍 Business Details

- **Business Name**: Thapas Cafe
- **Category**: Cafe cum Restaurant
- **Address**:  
  Shop No. 5, Sainath Apartment,  
  Opposite Mahavir Shopping Mall,  
  Suraj Nagar, Mundra, Baroi,  
  Gujarat – 370421, India.  
- **Google Rating**: 4.9 / 5.0 (8 Customer Reviews)
- **Instagram**: [https://www.instagram.com/thapas_cafe/](https://www.instagram.com/thapas_cafe/)

---

## 🚀 How to Run Locally

### Option 1: Direct File Opening (Easiest)
1. Navigate to the project folder on your computer.
2. Double-click `index.html` to open it in your default web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Using Any Local Static Server
If you prefer running through a local development server:

```bash
# Using Python 3 (if installed)
python -m http.server 3000

# OR using Node.js npx serve
npx serve .
```
Then visit `http://localhost:3000` in your browser.

---

## 🌐 Deployment Instructions

### 1. Deploying to Netlify (Drag & Drop)
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Sign in to your Netlify account (free).
3. Drag and drop the `THAPAS-CAFE` project folder into the upload box.
4. Your website is instantly deployed with an HTTPS URL.

### 2. Deploying to GitHub Pages
1. Create a new GitHub repository named `thapas-cafe`.
2. Push or upload the contents of this folder to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Thapas Cafe website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/thapas-cafe.git
   git push -u origin main
   ```
3. In your GitHub repository, go to **Settings** > **Pages**.
4. Under **Branch**, select `main` and root `/`, then click **Save**.
5. Your website will be live at `https://<your-username>.github.io/thapas-cafe/`.

---

## ✏️ How to Update Menu Items & Prices

All menu items are stored in a JavaScript array at the top of `script.js`:

```javascript
const MENU_DATA = [
  {
    id: 'cb-1',
    category: 'coffee-beverages',   // category slug
    categoryName: 'Coffee & Beverages',
    name: 'Your Dish Name',          // Replace placeholder with actual dish
    description: 'Freshly prepared...', 
    price: '₹ 150',                  // Replace with actual price
    badge: 'Signature',             // 'Signature', 'Popular', or null
    dietary: 'beverage'             // 'beverage' or 'veg'
  },
  // ... more items
];
```

Simply update the text and prices inside `script.js` and reload your browser!

---

## 📄 License
Crafted for Thapas Cafe. All rights reserved.
