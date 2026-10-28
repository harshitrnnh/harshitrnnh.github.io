/**
 * Harshit Agrawal - Academic & Research Homepage Scripts
 * Handles theme toggling, live filter/search, BibTeX copy, and smooth UX.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle (Light / Dark Mode)
  const themeToggleBtn = document.getElementById('theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Check stored theme or default to system preference
  const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    if (theme === 'dark') {
      themeToggleBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>`;
      themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
    } else {
      themeToggleBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>`;
      themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
    }
  }

  // 2. BibTeX Drawer Toggle & Copy Functionality
  document.querySelectorAll('.bibtex-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-target');
      const drawer = document.getElementById(targetId);
      if (drawer) {
        drawer.classList.toggle('active');
        const isExpanded = drawer.classList.contains('active');
        btn.setAttribute('aria-expanded', isExpanded);
      }
    });
  });

  document.querySelectorAll('.bibtex-copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-copy-target');
      const preBlock = document.getElementById(targetId);
      if (preBlock) {
        const textToCopy = preBlock.innerText.trim();
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast('BibTeX citation copied to clipboard!');
          const origText = btn.innerText;
          btn.innerText = 'Copied!';
          setTimeout(() => {
            btn.innerText = origText;
          }, 2000);
        }).catch(err => {
          console.error('Could not copy BibTeX:', err);
        });
      }
    });
  });

  // 3. Live Search & Category Filtering for Papers (optional)
  const pubSearchInput = document.getElementById('pub-search');
  const pubFilterChips = document.querySelectorAll('.filter-chip');
  const pubCards = document.querySelectorAll('.pub-card');

  if (pubSearchInput || pubFilterChips.length > 0) {
    let activeCategory = 'all';
    let searchQuery = '';

    if (pubSearchInput) {
      pubSearchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        filterPublications();
      });
    }

    pubFilterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        pubFilterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeCategory = chip.getAttribute('data-category');
        filterPublications();
      });
    });

    function filterPublications() {
      let visibleCount = 0;
      pubCards.forEach(card => {
        const cardText = card.innerText.toLowerCase();
        const cardCategory = card.getAttribute('data-topic') || '';
        const matchesCategory = activeCategory === 'all' || cardCategory.includes(activeCategory);
        const matchesSearch = !searchQuery || cardText.includes(searchQuery);

        if (matchesCategory && matchesSearch) {
          card.style.display = 'block';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      const countElem = document.getElementById('pub-visible-count');
      if (countElem) {
        countElem.textContent = `Showing ${visibleCount} publication${visibleCount === 1 ? '' : 's'}`;
      }
    }
  }

  // 4. Back To Top Floating Button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 5. Active Nav Highlighting on Scroll
  const navLinks = document.querySelectorAll('.site-nav .nav-link');
  const sections = document.querySelectorAll('section[id]');

  function highlightNavOnScroll() {
    let scrollPosition = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  // 6. Mobile Navigation Dropdown Menu
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navWrapper = document.getElementById('nav-wrapper');

  if (mobileMenuToggle && navWrapper) {
    function toggleMobileMenu(forceState) {
      const isOpen = forceState !== undefined ? forceState : !navWrapper.classList.contains('open');
      navWrapper.classList.toggle('open', isOpen);
      mobileMenuToggle.classList.toggle('active', isOpen);
      mobileMenuToggle.setAttribute('aria-expanded', isOpen);
      if (isOpen) {
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }
    }

    mobileMenuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });

    // Close menu when tapping any navigation link
    navWrapper.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        toggleMobileMenu(false);
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navWrapper.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        toggleMobileMenu(false);
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        toggleMobileMenu(false);
      }
    });

    // Auto-close on viewport resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 860 && navWrapper.classList.contains('open')) {
        toggleMobileMenu(false);
      }
    });
  }

  // 7. Toast Notification Helper
  function showToast(message) {
    let toast = document.getElementById('site-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'site-toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
});
