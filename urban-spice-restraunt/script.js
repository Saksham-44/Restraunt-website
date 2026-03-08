/* ════════════════════════════════════════════
   URBAN SPICE — script.js
════════════════════════════════════════════ */

// ── Menu Data ────────────────────────────────
const menuData = {
  starters: [
    {
      name: "Burrata & Heirloom Tomato",
      desc: "Creamy buffalo burrata with roasted heirloom tomatoes, basil oil, aged balsamic, and fleur de sel.",
      price: "$18",
      badge: "Chef's Pick",
      tags: ["Vegetarian", "GF"],
      img: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=500&auto=format&fit=crop&q=80"
    },
    {
      name: "Seared Tuna Tataki",
      desc: "Sushi-grade tuna, ponzu, micro shiso, pickled ginger, sesame crust, avocado mousse.",
      price: "$24",
      badge: null,
      tags: ["GF", "Signature"],
      img: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=500&auto=format&fit=crop&q=80"
    },
    {
      name: "Truffle Arancini",
      desc: "Crispy risotto balls filled with black truffle, fontina, and porcini mushrooms. Truffle aioli.",
      price: "$16",
      badge: "Popular",
      tags: ["Vegetarian"],
      img: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&auto=format&fit=crop&q=80"
    },
    {
      name: "Spiced Lamb Kofta",
      desc: "Hand-rolled lamb kofta with harissa yogurt, pomegranate seeds, sumac onions, and lavash.",
      price: "$19",
      badge: null,
      tags: ["GF", "Spicy"],
      img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500&auto=format&fit=crop&q=80"
    }
  ],
  mains: [
    {
      name: "Wagyu Beef Tenderloin",
      desc: "200g A5 wagyu, truffle pomme purée, wild mushroom jus, baby leeks, crispy shallots.",
      price: "$68",
      badge: "Signature",
      tags: ["GF", "Premium"],
      img: "https://images.unsplash.com/photo-1558030006-450675393462?w=500&auto=format&fit=crop&q=80"
    },
    {
      name: "Pan-Seared Sea Bass",
      desc: "Crispy-skin Mediterranean sea bass, saffron beurre blanc, roasted fennel, caperberries.",
      price: "$42",
      badge: null,
      tags: ["GF", "Pescatarian"],
      img: "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=500&auto=format&fit=crop&q=80"
    },
    {
      name: "Wild Mushroom Risotto",
      desc: "Arborio rice, porcini, chanterelle, truffle oil, aged Parmigiano, fresh thyme.",
      price: "$34",
      badge: "Chef's Pick",
      tags: ["Vegetarian", "GF"],
      img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500&auto=format&fit=crop&q=80"
    },
    {
      name: "Duck Confit Tagliatelle",
      desc: "Slow-cooked duck leg confit, house pasta, duck ragu, crispy sage, Pecorino snow.",
      price: "$38",
      badge: "Popular",
      tags: ["House Made"],
      img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&auto=format&fit=crop&q=80"
    }
  ],
  desserts: [
    {
      name: "Chocolate Fondant",
      desc: "Warm 70% Valrhona chocolate heart, salted caramel, vanilla bean gelato, cocoa tuile.",
      price: "$16",
      badge: "Popular",
      tags: ["Vegetarian"],
      img: "https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?w=500&auto=format&fit=crop&q=80"
    },
    {
      name: "Honey Panna Cotta",
      desc: "Lavender-infused panna cotta, wildflower honey, fresh berries, pistachio praline.",
      price: "$13",
      badge: null,
      tags: ["GF", "Vegetarian"],
      img: "https://images.unsplash.com/photo-1488477181228-c84def2f9e78?w=500&auto=format&fit=crop&q=80"
    },
    {
      name: "Citrus Tart",
      desc: "Yuzu lemon curd, buttery almond sablé, Italian meringue, candied citrus zest.",
      price: "$14",
      badge: "Chef's Pick",
      tags: ["Vegetarian"],
      img: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=500&auto=format&fit=crop&q=80"
    },
    {
      name: "Tiramisu Classico",
      desc: "House recipe tiramisu, Illy espresso soaked ladyfingers, mascarpone, dark cacao.",
      price: "$12",
      badge: null,
      tags: ["Vegetarian", "Classic"],
      img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&auto=format&fit=crop&q=80"
    }
  ],
  drinks: [
    {
      name: "Spiced Negroni",
      desc: "Bombay Sapphire gin, infused Campari with cardamom and star anise, sweet vermouth.",
      price: "$18",
      badge: "Signature",
      tags: ["Cocktail"],
      img: "https://images.unsplash.com/photo-1527761939622-933c772a331c?w=500&auto=format&fit=crop&q=80"
    },
    {
      name: "Garden Spritz",
      desc: "Aperol, elderflower cordial, cucumber, basil, prosecco, soda. Light and floral.",
      price: "$15",
      badge: null,
      tags: ["Cocktail", "Light"],
      img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&auto=format&fit=crop&q=80"
    },
    {
      name: "Golden Turmeric Latte",
      desc: "Oat milk, turmeric, ginger, cinnamon, honey. Warming and restorative.",
      price: "$8",
      badge: null,
      tags: ["Non-Alcoholic", "Vegan"],
      img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=80"
    },
    {
      name: "Reserve Barolo 2019",
      desc: "Marchesi di Barolo, Piedmont. Full-bodied, notes of cherry, tobacco, violet. Pairs with red meat.",
      price: "$24",
      badge: "Sommelier's Pick",
      tags: ["Wine", "Red"],
      img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&auto=format&fit=crop&q=80"
    }
  ]
};

// ── Render Menu ──────────────────────────────
function renderMenu(category) {
  const grid = document.getElementById('menuGrid');
  const items = menuData[category];

  grid.style.opacity = '0';
  grid.style.transform = 'translateY(16px)';

  setTimeout(() => {
    grid.innerHTML = items.map(item => `
      <div class="menu-card">
        <div class="menu-card-img">
          <img src="${item.img}" alt="${item.name}" loading="lazy" />
          ${item.badge ? `<span class="menu-badge">${item.badge}</span>` : ''}
        </div>
        <div class="menu-card-body">
          <div class="menu-card-top">
            <h3 class="menu-card-name">${item.name}</h3>
            <span class="menu-card-price">${item.price}</span>
          </div>
          <p class="menu-card-desc">${item.desc}</p>
          <div class="menu-card-tags">
            ${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');

    grid.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    grid.style.opacity = '1';
    grid.style.transform = 'translateY(0)';
  }, 180);
}

// ── Tab Switching ────────────────────────────
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(btn.dataset.tab);
  });
});

// Initial render
renderMenu('starters');

// ── Navbar Scroll Behavior ────────────────────
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScroll = scrollY;
}, { passive: true });

// ── Active Nav Link on Scroll ─────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: 0.35 });

sections.forEach(s => sectionObserver.observe(s));

// ── Hamburger Menu ────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksEl.classList.toggle('open');
  document.body.style.overflow = navLinksEl.classList.contains('open') ? 'hidden' : '';
});

// Close mobile menu on link click
navLinksEl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksEl.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ── Scroll Animation Observer ─────────────────
const animateObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Staggered delay based on index within parent
      const siblings = entry.target.parentElement.querySelectorAll('[data-animate]');
      let delay = 0;
      siblings.forEach((el, idx) => { if (el === entry.target) delay = idx * 80; });
      setTimeout(() => {
        entry.target.classList.add('in-view');
      }, delay);
      animateObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-animate]').forEach(el => animateObserver.observe(el));

// ── Reservation Form ──────────────────────────
const reserveForm = document.getElementById('reserveForm');
const reserveSuccess = document.getElementById('reserveSuccess');

// Set minimum date to today
const dateInputs = reserveForm.querySelectorAll('input[type="date"]');
const today = new Date().toISOString().split('T')[0];
dateInputs.forEach(input => input.setAttribute('min', today));

reserveForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simulate form submission
  const btn = reserveForm.querySelector('button[type="submit"]');
  btn.textContent = 'Confirming…';
  btn.disabled = true;
  btn.style.opacity = '0.7';

  setTimeout(() => {
    reserveForm.style.transition = 'opacity 0.4s ease';
    reserveForm.style.opacity = '0';
    setTimeout(() => {
      reserveForm.style.display = 'none';
      reserveSuccess.style.display = 'block';
    }, 400);
  }, 1200);
});

// ── Gallery lightbox feel ─────────────────────
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const label = item.querySelector('.gallery-overlay span')?.textContent || '';
    openLightbox(img.src, label);
  });
});

function openLightbox(src, caption) {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed; inset: 0; z-index: 9999;
    background: rgba(0,0,0,0.92);
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: 16px; cursor: zoom-out;
    animation: fadeIn 0.3s ease;
  `;

  const img = document.createElement('img');
  img.src = src;
  img.style.cssText = `
    max-width: 90vw; max-height: 80vh;
    object-fit: contain; border-radius: 8px;
    box-shadow: 0 20px 80px rgba(0,0,0,0.5);
  `;

  const cap = document.createElement('p');
  cap.textContent = caption;
  cap.style.cssText = `
    color: rgba(255,255,255,0.6);
    font-family: 'Jost', sans-serif;
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  `;

  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '✕';
  closeBtn.style.cssText = `
    position: absolute; top: 20px; right: 24px;
    color: rgba(255,255,255,0.6); font-size: 1.4rem;
    background: none; border: none; cursor: pointer;
    transition: color 0.2s;
  `;
  closeBtn.onmouseenter = () => closeBtn.style.color = '#fff';
  closeBtn.onmouseleave = () => closeBtn.style.color = 'rgba(255,255,255,0.6)';

  overlay.appendChild(img);
  overlay.appendChild(cap);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  const close = () => {
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.2s ease';
    setTimeout(() => {
      overlay.remove();
      document.body.style.overflow = '';
    }, 200);
  };

  overlay.addEventListener('click', (e) => { if (e.target === overlay || e.target === closeBtn) close(); });
  document.addEventListener('keydown', function esc(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
  });
}

// ── Smooth hover tilt on menu cards ──────────
document.addEventListener('mousemove', (e) => {
  const cards = document.querySelectorAll('.menu-card');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;

    if (Math.abs(dx) < 0.6 && Math.abs(dy) < 0.6) {
      card.style.transform = `translateY(-6px) rotateY(${dx * 4}deg) rotateX(${-dy * 4}deg)`;
    } else {
      card.style.transform = '';
    }
  });
});

// ── Newsletter form ───────────────────────────
const newsletterBtn = document.querySelector('.newsletter-form button');
const newsletterInput = document.querySelector('.newsletter-form input');

if (newsletterBtn) {
  newsletterBtn.addEventListener('click', () => {
    if (!newsletterInput.value.includes('@')) {
      newsletterInput.style.borderColor = '#e03030';
      setTimeout(() => { newsletterInput.style.borderColor = ''; }, 1500);
      return;
    }
    newsletterBtn.textContent = '✓';
    newsletterBtn.style.background = '#2ecc71';
    newsletterInput.value = 'Thanks for subscribing!';
    newsletterInput.disabled = true;
    setTimeout(() => { newsletterBtn.textContent = '→'; newsletterBtn.style.background = ''; }, 3000);
  });
}

// ── Parallax on hero ─────────────────────────
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-bg');
  if (hero) {
    hero.style.transform = `translateY(${window.scrollY * 0.3}px)`;
  }
}, { passive: true });

// ── Counter animation ─────────────────────────
function animateCounter(el, target, suffix = '') {
  let current = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current).toLocaleString() + suffix;
    if (current >= target) clearInterval(timer);
  }, 20);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('.stat-num');
      nums.forEach(num => {
        const raw = num.textContent;
        if (raw.includes('K+')) animateCounter(num, 12, 'K+');
        else if (raw.includes('+')) animateCounter(num, parseInt(raw), '+');
        else animateCounter(num, parseInt(raw));
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsEl = document.querySelector('.about-stats');
if (statsEl) statsObserver.observe(statsEl);
