// Villas at Speaking Rock — site interactions & scroll motion
//
// Deliberately does NOT use a scroll-hijacking library (e.g. Lenis).
// GSAP ScrollTrigger only *reads* native scroll position — it never
// intercepts wheel/touch input — so it cannot freeze or break scrolling
// the way a custom smooth-scroll library can if misconfigured.

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const progressBar = document.getElementById('scrollProgress');

  // ---------- Mobile nav ----------
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // ---------- Contact form (no backend wired yet) ----------
  const form = document.getElementById('inquiryForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Request Received';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
        form.reset();
      }, 3200);
    });
  }

  // ---------- Nav solid-on-scroll + progress bar (always on, native scroll) ----------
  const onScroll = () => {
    const y = window.scrollY;
    if (y > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');

    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar) progressBar.style.width = `${max > 0 ? Math.min(1, Math.max(0, y / max)) * 100 : 0}%`;
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---------- Hero crossfade (opt in per-page via .hero-crossfade on #heroBg) ----------
  const heroBg = document.getElementById('heroBg');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (heroBg && heroBg.classList.contains('hero-crossfade') && !reducedMotion) {
    const layers = heroBg.querySelectorAll('.hero-bg-inner');
    if (layers.length > 1) {
      let heroIdx = 0;
      setInterval(() => {
        layers[heroIdx].classList.remove('active');
        heroIdx = (heroIdx + 1) % layers.length;
        layers[heroIdx].classList.add('active');
      }, 6500);
    }
  }

  // ---------- Gallery lightbox ----------
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  if (galleryItems.length) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const btnClose = document.getElementById('lightboxClose');
    const btnPrev = document.getElementById('lightboxPrev');
    const btnNext = document.getElementById('lightboxNext');
    let lightboxIndex = 0;

    const renderLightbox = () => {
      const item = galleryItems[lightboxIndex];
      const imgEl = item.querySelector('img');
      lightboxImg.src = item.dataset.full;
      lightboxImg.alt = imgEl ? imgEl.alt : 'Speaking Rock aerial image';
      if (lightboxCaption) {
        lightboxCaption.textContent = item.dataset.caption || (imgEl ? imgEl.alt : '');
      }
    };
    const openLightbox = (index) => {
      lightboxIndex = index;
      renderLightbox();
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
    };
    const closeLightbox = () => {
      lightbox.hidden = true;
      document.body.style.overflow = '';
    };
    const stepLightbox = (delta) => {
      lightboxIndex = (lightboxIndex + delta + galleryItems.length) % galleryItems.length;
      renderLightbox();
    };

    galleryItems.forEach((item, i) => item.addEventListener('click', () => openLightbox(i)));
    if (btnClose) btnClose.addEventListener('click', closeLightbox);
    if (btnPrev) btnPrev.addEventListener('click', () => stepLightbox(-1));
    if (btnNext) btnNext.addEventListener('click', () => stepLightbox(1));
    if (lightbox) {
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-content')) closeLightbox();
      });
    }
    document.addEventListener('keydown', (e) => {
      if (lightbox && lightbox.hidden) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') stepLightbox(-1);
      if (e.key === 'ArrowRight') stepLightbox(1);
    });
  }

  // ---------- Interactive Lot Selection Bridge ----------
  const lotPills = document.querySelectorAll('.lot-pill');
  const interestSelect = document.getElementById('interest');
  const messageBox = document.getElementById('message');
  
  if (lotPills.length && interestSelect) {
    lotPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const lotName = pill.dataset.lot || pill.textContent.trim();
        lotPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        // Check if lot option exists in dropdown or select it
        let matched = false;
        for (let opt of interestSelect.options) {
          if (opt.value.includes(lotName) || opt.text.includes(lotName)) {
            interestSelect.value = opt.value;
            matched = true;
            break;
          }
        }
        if (!matched && messageBox) {
          messageBox.value = `I am specifically interested in availability and details for ${lotName}.`;
        }

        // Smooth scroll down to contact section
        const contactSec = document.getElementById('contact');
        if (contactSec) {
          contactSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ---------- Custom cursor (pointer:fine, non-touch, no reduced-motion) ----------
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
  let cursorRing = null;
  if (hasFinePointer && !reducedMotion) {
    document.documentElement.classList.add('has-custom-cursor');

    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    cursorRing = document.createElement('div');
    cursorRing.className = 'cursor-ring';
    document.body.append(cursorDot, cursorRing);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animateRing);
    };
    animateRing();

    const hoverSelector = 'a, button, .gallery-item, .amenity-card, .material-card, input, textarea, select';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(hoverSelector)) cursorRing.classList.add('cursor-hover');
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(hoverSelector)) cursorRing.classList.remove('cursor-hover');
    });
  }

  // ---------- Motion (GSAP ScrollTrigger) — optional enhancement ----------
  const motionReady = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';

  if (!motionReady) {
    // Libraries failed to load (e.g. offline) — never leave content hidden.
    document.body.classList.add('motion-fallback');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Magnetic buttons (pointer:fine only, paired with the custom cursor)
  if (hasFinePointer) {
    document.querySelectorAll('.btn').forEach((btn) => {
      const xTo = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3' });
      const yTo = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3' });
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        xTo((e.clientX - rect.left - rect.width / 2) * 0.3);
        yTo((e.clientY - rect.top - rect.height / 2) * 0.4);
      });
      btn.addEventListener('mouseleave', () => { xTo(0); yTo(0); });
    });
  }

  // Simple fade-up reveals
  gsap.utils.toArray('.reveal').forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0, y: 28 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 87%' },
      }
    );
  });

  // Staggered group reveals
  gsap.utils.toArray('[data-stagger]').forEach((group) => {
    gsap.fromTo(group.children,
      { opacity: 0, y: 24 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.09,
        scrollTrigger: { trigger: group, start: 'top 88%' },
      }
    );
  });

  // Hero parallax (outer wrapper; inner keeps its own one-time CSS zoom)
  if (heroBg) {
    gsap.to(heroBg, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 0.6 },
    });
  }

  // Location/section background parallax
  const locationBg = document.getElementById('locationBg');
  if (locationBg) {
    gsap.fromTo(locationBg,
      { yPercent: -6 },
      { yPercent: 6, ease: 'none', scrollTrigger: { trigger: '#location', start: 'top bottom', end: 'bottom top', scrub: 0.6 } }
    );
  }

  // Story media gentle parallax float
  const storyMedia = document.querySelector('.story-media img');
  if (storyMedia) {
    gsap.fromTo(storyMedia,
      { yPercent: -3 },
      { yPercent: 3, ease: 'none', scrollTrigger: { trigger: storyMedia.closest('section'), start: 'top bottom', end: 'bottom top', scrub: 0.6 } }
    );
  }

  window.addEventListener('load', () => ScrollTrigger.refresh());
});
