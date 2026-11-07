/**
 * THAPAS CAFE – PRODUCTION JAVASCRIPT
 * Vanilla JS | Zero Dependencies | Lightweight & Fast
 * 
 * Includes:
 * - Dynamic Menu Data & Real-time Filtering / Search
 * - Interactive Lightbox with Keyboard Navigation
 * - Sticky Header & Mobile Drawer Navigation
 * - Scroll-triggered IntersectionObserver Animations
 * - Automatic Copyright Year
 */

'use strict';

/* ==========================================================================
   1. EDITABLE MENU DATA ARRAY
   Cafe owners & developers can easily modify items, categories & prices here.
   ========================================================================== */
const MENU_DATA = [
  // --- Coffee & Beverages ---
  {
    id: 'cb-1',
    category: 'coffee-beverages',
    categoryName: 'Coffee & Beverages',
    name: '[Signature Pour-Over Coffee]',
    description: 'Freshly roasted single-origin artisan coffee brewed slowly for clean, rich aromatic notes.',
    price: '₹ [Editable Price]',
    badge: 'Signature',
    dietary: 'beverage'
  },
  {
    id: 'cb-2',
    category: 'coffee-beverages',
    categoryName: 'Coffee & Beverages',
    name: '[Artisan Cappuccino]',
    description: 'Rich dark espresso shot balanced with silky steamed milk and velvety microfoam.',
    price: '₹ [Editable Price]',
    badge: 'Popular',
    dietary: 'beverage'
  },
  {
    id: 'cb-3',
    category: 'coffee-beverages',
    categoryName: 'Coffee & Beverages',
    name: '[Classic Flat White]',
    description: 'Double espresso pulled over velvety textured milk for an intense, full-bodied coffee experience.',
    price: '₹ [Editable Price]',
    badge: 'Placeholder',
    dietary: 'beverage'
  },
  {
    id: 'cb-4',
    category: 'coffee-beverages',
    categoryName: 'Coffee & Beverages',
    name: '[Cardamom Spiced Chai Latte]',
    description: 'Slow-simmered regional tea infused with crushed green cardamom, cinnamon, and warm milk.',
    price: '₹ [Editable Price]',
    badge: 'Popular',
    dietary: 'beverage'
  },

  // --- Cold Drinks ---
  {
    id: 'cd-1',
    category: 'cold-drinks',
    categoryName: 'Cold Drinks',
    name: '[Craft Cold Brew]',
    description: 'Steeped for 18 hours in cold filtered water for a remarkably smooth, low-acid iced coffee.',
    price: '₹ [Editable Price]',
    badge: 'Signature',
    dietary: 'beverage'
  },
  {
    id: 'cd-2',
    category: 'cold-drinks',
    categoryName: 'Cold Drinks',
    name: '[Iced Caramel Macchiato]',
    description: 'Chilled whole milk marked with bold espresso, vanilla syrup and rich buttery caramel drizzle.',
    price: '₹ [Editable Price]',
    badge: 'Popular',
    dietary: 'beverage'
  },
  {
    id: 'cd-3',
    category: 'cold-drinks',
    categoryName: 'Cold Drinks',
    name: '[Fresh Mint Lime Mojito]',
    description: 'Crushed garden spearmint, zesty lime wedges, sparkling soda, and light natural raw cane sugar.',
    price: '₹ [Editable Price]',
    badge: 'Placeholder',
    dietary: 'beverage'
  },
  {
    id: 'cd-4',
    category: 'cold-drinks',
    categoryName: 'Cold Drinks',
    name: '[Mango Bliss Frappe]',
    description: 'Thick, creamy Alphonso mango puree blended with chilled milk and topped with whipped cream.',
    price: '₹ [Editable Price]',
    badge: 'Placeholder',
    dietary: 'beverage'
  },

  // --- Snacks ---
  {
    id: 'sn-1',
    category: 'snacks',
    categoryName: 'Snacks',
    name: '[Crispy Peri-Peri Fries]',
    description: 'Golden fried potato batons tossed in spicy peri-peri spice dust, served with garlic house dip.',
    price: '₹ [Editable Price]',
    badge: 'Popular',
    dietary: 'veg'
  },
  {
    id: 'sn-2',
    category: 'snacks',
    categoryName: 'Snacks',
    name: '[Cheesy Garlic Breadsticks]',
    description: 'Warm toasted crusty bread infused with herb garlic butter and loaded with melted mozzarella.',
    price: '₹ [Editable Price]',
    badge: 'Signature',
    dietary: 'veg'
  },
  {
    id: 'sn-3',
    category: 'snacks',
    categoryName: 'Snacks',
    name: '[Corn & Cheese Croquettes]',
    description: 'Crisp golden crusted bites filled with sweet corn kernels and gooey cheddar cheese.',
    price: '₹ [Editable Price]',
    badge: 'Placeholder',
    dietary: 'veg'
  },

  // --- Fast Food ---
  {
    id: 'ff-1',
    category: 'fast-food',
    categoryName: 'Fast Food',
    name: '[Gourmet Veggie Club Sandwich]',
    description: 'Triple-layered toasted multigrain bread packed with crisp lettuce, ripe tomatoes, cucumber & mint spread.',
    price: '₹ [Editable Price]',
    badge: 'Popular',
    dietary: 'veg'
  },
  {
    id: 'ff-2',
    category: 'fast-food',
    categoryName: 'Fast Food',
    name: '[Crispy Paneer Supreme Burger]',
    description: 'Spiced crumb-coated paneer patty layered with pickled onions, crisp lettuce and house dressing on a brioche bun.',
    price: '₹ [Editable Price]',
    badge: 'Signature',
    dietary: 'veg'
  },
  {
    id: 'ff-3',
    category: 'fast-food',
    categoryName: 'Fast Food',
    name: '[Farmhouse Herb Pizza]',
    description: 'Stone-crust base spread with sun-dried tomato marinara, bell peppers, olives, corn and mozzarella.',
    price: '₹ [Editable Price]',
    badge: 'Popular',
    dietary: 'veg'
  },

  // --- Main Course ---
  {
    id: 'mc-1',
    category: 'main-course',
    categoryName: 'Main Course',
    name: '[Creamy Alfredo Penne Pasta]',
    description: 'Al dente penne folded into a rich parmesan and cream sauce with sautéed mushrooms and fresh basil.',
    price: '₹ [Editable Price]',
    badge: 'Signature',
    dietary: 'veg'
  },
  {
    id: 'mc-2',
    category: 'main-course',
    categoryName: 'Main Course',
    name: '[Arrabbiata Fire Spiced Pasta]',
    description: 'Penne tossed in fiery slow-cooked San Marzano tomato sauce with garlic, chili flakes and extra virgin olive oil.',
    price: '₹ [Editable Price]',
    badge: 'Placeholder',
    dietary: 'veg'
  },
  {
    id: 'mc-3',
    category: 'main-course',
    categoryName: 'Main Course',
    name: '[Special Paneer Butter Bowl]',
    description: 'Tender cottage cheese cubes simmered in a mildly sweet, aromatic makhani gravy served with soft butter kulcha.',
    price: '₹ [Editable Price]',
    badge: 'Popular',
    dietary: 'veg'
  },

  // --- Desserts ---
  {
    id: 'ds-1',
    category: 'desserts',
    categoryName: 'Desserts',
    name: '[Sizzling Brownie with Vanilla]',
    description: 'Decadent fudge chocolate brownie served on a hot iron skillet with chilled vanilla bean ice cream and hot fudge.',
    price: '₹ [Editable Price]',
    badge: 'Signature',
    dietary: 'veg'
  },
  {
    id: 'ds-2',
    category: 'desserts',
    categoryName: 'Desserts',
    name: '[Belgian Dark Chocolate Waffle]',
    description: 'Crisp, golden honeycomb waffle smothered in melted Belgian dark chocolate ganache and roasted almond flakes.',
    price: '₹ [Editable Price]',
    badge: 'Popular',
    dietary: 'veg'
  },
  {
    id: 'ds-3',
    category: 'desserts',
    categoryName: 'Desserts',
    name: '[New York Style Baked Cheesecake]',
    description: 'Silky, creamy baked cream cheese slice over a buttery graham cracker crust with berry compote.',
    price: '₹ [Editable Price]',
    badge: 'Placeholder',
    dietary: 'veg'
  }
];

/* ==========================================================================
   2. GALLERY DATA ARRAY
   Matches local WebP assets in assets/images/gallery/
   ========================================================================== */
const GALLERY_DATA = [
  {
    src: 'assets/images/gallery/gallery-1.webp',
    alt: 'Thapas Cafe cozy seating and warm interior ambience',
    caption: 'Warm Aesthetic & Inviting Interior',
    category: 'Ambience'
  },
  {
    src: 'assets/images/gallery/gallery-2.webp',
    alt: 'Freshly roasted espresso coffee beans and brewing',
    caption: 'Artisan Espresso & Roasted Beans',
    category: 'Coffee'
  },
  {
    src: 'assets/images/gallery/gallery-3.webp',
    alt: 'Decadent chocolate brownie dessert',
    caption: 'Rich Fudge Brownie & Sweet Treats',
    category: 'Desserts'
  },
  {
    src: 'assets/images/gallery/gallery-4.webp',
    alt: 'Crispy seasoned fries and savory cafe snacks',
    caption: 'Golden Crispy Fries & Finger Food',
    category: 'Snacks'
  },
  {
    src: 'assets/images/gallery/gallery-5.webp',
    alt: 'Comfortable cafe dining space for friends and family',
    caption: 'Memorable Moments With Friends & Family',
    category: 'Dining'
  },
  {
    src: 'assets/images/gallery/gallery-6.webp',
    alt: 'Refreshing iced beverage and cold drinks',
    caption: 'Chilled Mocktails & Artisan Coolers',
    category: 'Beverages'
  }
];

/* ==========================================================================
   3. DOM INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNavigation();
  initMenu();
  initGalleryLightbox();
  initScrollSpy();
  initScrollReveal();
  initCopyrightYear();
  initLucideIcons();
});

/* ==========================================================================
   4. STICKY HEADER & NAVBAR
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/* ==========================================================================
   5. MOBILE DRAWER NAVIGATION
   ========================================================================== */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const backdrop = document.querySelector('.mobile-backdrop');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileNav) return;

  const openNav = () => {
    toggleBtn.setAttribute('aria-expanded', 'true');
    mobileNav.classList.add('is-active');
    if (backdrop) backdrop.classList.add('is-active');
    document.body.classList.add('nav-open');
  };

  const closeNav = () => {
    toggleBtn.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('is-active');
    if (backdrop) backdrop.classList.remove('is-active');
    document.body.classList.remove('nav-open');
  };

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeNav();
    } else {
      openNav();
    }
  });

  if (backdrop) {
    backdrop.addEventListener('click', closeNav);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('is-active')) {
      closeNav();
    }
  });
}

/* ==========================================================================
   6. INTERACTIVE MENU COMPONENT
   ========================================================================== */
function initMenu() {
  const menuContainer = document.getElementById('menu-items-grid');
  const tabButtons = document.querySelectorAll('.menu-tab-btn');
  const searchInput = document.getElementById('menu-search');
  const countBadge = document.getElementById('menu-count');

  if (!menuContainer) return;

  let currentCategory = 'all';
  let currentSearch = '';

  const render = () => {
    const filtered = MENU_DATA.filter(item => {
      const matchesCategory = (currentCategory === 'all') || (item.category === currentCategory);
      const matchesSearch = item.name.toLowerCase().includes(currentSearch) ||
                            item.description.toLowerCase().includes(currentSearch) ||
                            item.categoryName.toLowerCase().includes(currentSearch);
      return matchesCategory && matchesSearch;
    });

    if (countBadge) {
      countBadge.textContent = `Showing ${filtered.length} item${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      menuContainer.innerHTML = `
        <div class="menu-empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
          <h4 style="font-size: 1.25rem; font-family: var(--font-serif); margin-bottom: 0.5rem; color: var(--color-espresso);">
            No menu items found
          </h4>
          <p style="font-size: var(--fs-sm); max-width: 380px; margin-inline: auto;">
            We couldn't find any dishes matching "${escapeHtml(currentSearch)}". Try selecting another category or resetting your search.
          </p>
        </div>
      `;
      return;
    }

    menuContainer.innerHTML = filtered.map(item => {
      const badgeHtml = item.badge
        ? `<span class="item-badge ${getBadgeClass(item.badge)}">${escapeHtml(item.badge)}</span>`
        : '';

      return `
        <article class="menu-card" data-category="${item.category}">
          <div>
            <div class="menu-card-header">
              <div class="menu-item-title-wrap">
                <h3 class="menu-item-name">${escapeHtml(item.name)}</h3>
                <div class="menu-item-badges">
                  ${badgeHtml}
                </div>
              </div>
              <span class="menu-item-price">${escapeHtml(item.price)}</span>
            </div>
            <p class="menu-item-desc">${escapeHtml(item.description)}</p>
          </div>
          <div class="menu-card-footer">
            <span class="category-tag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
              ${escapeHtml(item.categoryName)}
            </span>
            <span style="font-size: 0.72rem; color: rgba(41, 37, 34, 0.45); font-style: italic;">Editable entry</span>
          </div>
        </article>
      `;
    }).join('');
  };

  function getBadgeClass(badge) {
    const lower = badge.toLowerCase();
    if (lower.includes('signature')) return 'badge-signature';
    if (lower.includes('popular')) return 'badge-popular';
    return 'badge-placeholder';
  }

  // Category tab clicks
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category') || 'all';
      render();
    });
  });

  // Search input events
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      render();
    });
  }

  // Initial render
  render();
}

/* ==========================================================================
   7. GALLERY & LIGHTBOX MODAL
   ========================================================================== */
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('gallery-lightbox');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const lightboxCounter = lightbox.querySelector('.lightbox-counter');
  const closeBtn = lightbox.querySelector('.lightbox-close-btn');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');

  let currentIndex = 0;

  const updateModal = (index) => {
    currentIndex = (index + GALLERY_DATA.length) % GALLERY_DATA.length;
    const current = GALLERY_DATA[currentIndex];
    if (lightboxImg) {
      lightboxImg.src = current.src;
      lightboxImg.alt = current.alt;
    }
    if (lightboxCaption) {
      lightboxCaption.textContent = current.caption;
    }
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentIndex + 1} of ${GALLERY_DATA.length} — ${current.category}`;
    }
  };

  const openLightbox = (index) => {
    updateModal(index);
    lightbox.classList.add('is-open');
    document.body.classList.add('lightbox-open');
  };

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    document.body.classList.remove('lightbox-open');
  };

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(index);
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateModal(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateModal(currentIndex + 1);
    });
  }

  // Close on clicking backdrop
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      updateModal(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      updateModal(currentIndex + 1);
    }
  });

  // Touch swipe gestures for mobile devices
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const swipeDistance = touchEndX - touchStartX;
    if (Math.abs(swipeDistance) > 40) {
      if (swipeDistance > 0) {
        updateModal(currentIndex - 1); // Swipe right -> Previous
      } else {
        updateModal(currentIndex + 1); // Swipe left -> Next
      }
    }
  }, { passive: true });
}

/* ==========================================================================
   8. SCROLLSPY NAVIGATION
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  if (!sections.length || !navLinks.length) return;

  const handleScrollSpy = () => {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', handleScrollSpy, { passive: true });
}

/* ==========================================================================
   9. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  if (!('IntersectionObserver' in window)) {
    // Fallback if browser doesn't support IntersectionObserver
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   10. DYNAMIC COPYRIGHT YEAR
   ========================================================================== */
function initCopyrightYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   11. LUCIDE ICONS HELPER
   ========================================================================== */
function initLucideIcons() {
  if (typeof window.lucide !== 'undefined' && window.lucide.createIcons) {
    window.lucide.createIcons();
  }
}

/* ==========================================================================
   12. UTILITY HELPER
   ========================================================================== */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
