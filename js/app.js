/* ==========================================================================
   MOLTACA ELAZHAR — Application Main Controller
   Navigation, active section scrollspy, mobile drawer, module init
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  setupNavigation();
  setupScrollSpy();

  // Initialize Stories & Highlights Module
  if (typeof window.initStories === 'function') {
    window.initStories();
  }

  // Initialize Archive, Activities & Media Module
  if (typeof window.initArchive === 'function') {
    window.initArchive();
  }

  // 1. Navigation & Mobile Drawer
  function setupNavigation() {
    const header = document.querySelector('.site-header');
    const toggle = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('mobile-drawer-backdrop');
    const closeBtn = document.getElementById('mobile-drawer-close');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    // Header scroll background
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });

    function openDrawer() {
      drawer.classList.add('active');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      drawer.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (toggle) toggle.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });
  }

  // 2. Active ScrollSpy for Desktop Menu
  function setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      let currentId = '';
      const scrollPos = window.scrollY + 120;

      sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentId = sec.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }, { passive: true });
  }
});
