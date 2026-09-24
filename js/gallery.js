/* ==========================================================================
   MOLTACA ELAZHAR — Archive, Activities & Media Controller
   Minimal, accessible, and responsive Lightbox, Activities & Media grids
   Authentic Article Images + Text-First Fallback
   ========================================================================== */

(function () {
  'use strict';

  let currentPhotoIndex = 0;
  const archivePhotos = window.MOLTACA_ARCHIVE || [];
  const activities = window.MOLTACA_ACTIVITIES || [];
  const mediaItems = window.MOLTACA_MEDIA || [];

  function initArchive() {
    renderActivities();
    renderMedia();
    renderArchivePhotos();
    setupLightbox();
    setupActivityModal();
    setupVideoSpotlight();
  }

  // 1. Render Community Activities
  function renderActivities() {
    const grid = document.getElementById('activities-grid');
    if (!grid) return;

    grid.innerHTML = activities.map(act => `
      <article class="activity-editorial-item" data-id="${act.id}">
        <div class="activity-photo-wrap">
          <img class="activity-photo" src="${act.image}" alt="${act.title}" loading="lazy">
          <span class="badge badge-olive activity-tag">${act.tag}</span>
        </div>
        <div class="activity-content">
          <div class="activity-cat-label">${act.category}</div>
          <h3 class="activity-title">${act.title}</h3>
          <p class="activity-summary">${act.summary}</p>
          <button type="button" class="activity-action-btn activity-modal-open-btn" data-id="${act.id}">
            اقرأ المزيد عن هذا النشاط
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(180deg);"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </article>
    `).join('');

    grid.querySelectorAll('.activity-modal-open-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openActivityModal(id);
      });
    });
  }

  // 2. Render Verified Media Coverage (Compact Editorial Grid with Real Images or Text-First)
  function renderMedia() {
    const grid = document.getElementById('media-grid');
    if (!grid) return;

    grid.innerHTML = mediaItems.map(item => {
      const hasImage = Boolean(item.image);
      return `
        <article class="media-card ${hasImage ? 'has-media-img' : 'text-first-media'}" data-id="${item.id}">
          ${hasImage ? `
            <div class="media-card-img-wrap">
              <img src="${item.image}" alt="${item.title}" class="media-card-img" loading="lazy">
              <span class="badge badge-gold media-img-badge">صورة التقرير الأصلي</span>
            </div>
          ` : ''}
          <div class="media-card-inner">
            <div class="media-meta-top">
              <span class="media-outlet-name">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/></svg>
                ${item.outlet}
              </span>
              <span class="media-date">${item.date}</span>
            </div>
            <h4 class="media-title">${item.title}</h4>
            <p class="media-summary">${item.summary}</p>
            <div class="media-card-footer">
              <span class="media-reporter">${item.reporter ? 'بقلم: ' + item.reporter : item.category}</span>
              <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="media-link" aria-label="قراءة التقرير في ${item.outlet}">
                قراءة التقرير بالمصدر
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(180deg);"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // 3. Render Photo Archive
  function renderArchivePhotos() {
    const grid = document.getElementById('archive-photos-grid');
    if (!grid) return;

    grid.innerHTML = archivePhotos.map((item, idx) => `
      <div class="archive-photo-card" data-index="${idx}" role="button" tabindex="0" aria-label="عرض مكبر: ${item.title}">
        <img class="archive-photo-img" src="${item.src}" alt="${item.title}" loading="lazy">
        <div class="archive-photo-overlay">
          <span class="archive-photo-cat">${item.category}</span>
          <h4 class="archive-photo-title">${item.title}</h4>
          <span class="archive-photo-meta">${item.location} • ${item.date}</span>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.archive-photo-card').forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.getAttribute('data-index'), 10);
        openLightbox(idx);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const idx = parseInt(card.getAttribute('data-index'), 10);
          openLightbox(idx);
        }
      });
    });
  }

  // 4. Lightbox Logic
  function openLightbox(index) {
    if (!archivePhotos.length) return;
    currentPhotoIndex = index;
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;

    updateLightbox();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightbox() {
    const item = archivePhotos[currentPhotoIndex];
    if (!item) return;

    const img = document.getElementById('lightbox-image');
    const title = document.getElementById('lightbox-title');
    const desc = document.getElementById('lightbox-desc');
    const counter = document.getElementById('lightbox-counter');

    if (img) img.src = item.src;
    if (title) title.textContent = `${item.title} — ${item.location}`;
    if (desc) desc.textContent = item.description || '';
    if (counter) counter.textContent = `صورة ${currentPhotoIndex + 1} من ${archivePhotos.length}`;
  }

  function nextPhoto() {
    if (!archivePhotos.length) return;
    currentPhotoIndex = (currentPhotoIndex + 1) % archivePhotos.length;
    updateLightbox();
  }

  function prevPhoto() {
    if (!archivePhotos.length) return;
    currentPhotoIndex = (currentPhotoIndex - 1 + archivePhotos.length) % archivePhotos.length;
    updateLightbox();
  }

  function setupLightbox() {
    const modal = document.getElementById('lightbox-modal');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', prevPhoto);
    if (nextBtn) nextBtn.addEventListener('click', nextPhoto);

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeLightbox();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (modal && modal.classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') prevPhoto();
        if (e.key === 'ArrowLeft') nextPhoto();
      }
    });
  }

  // 5. Activity Detail Modal
  function openActivityModal(id) {
    const act = activities.find(a => a.id === id);
    if (!act) return;

    const modal = document.getElementById('detail-modal');
    const img = document.getElementById('detail-modal-img');
    const cat = document.getElementById('detail-modal-cat');
    const title = document.getElementById('detail-modal-title');
    const text = document.getElementById('detail-modal-text');
    const highlightsWrap = document.getElementById('detail-modal-highlights');

    if (img) img.src = act.image;
    if (cat) cat.textContent = `${act.category} • ${act.tag}`;
    if (title) title.textContent = act.title;
    if (text) text.textContent = act.detail;

    if (highlightsWrap) {
      if (act.highlights && act.highlights.length) {
        highlightsWrap.innerHTML = `
          <h5 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--color-primary);">أبرز ملامح النشاط:</h5>
          <ul class="highlights-list">
            ${act.highlights.map(h => `<li><span class="bullet">✓</span> <span>${h}</span></li>`).join('')}
          </ul>
        `;
        highlightsWrap.style.display = 'block';
      } else {
        highlightsWrap.style.display = 'none';
      }
    }

    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function setupActivityModal() {
    const modal = document.getElementById('detail-modal');
    const closeBtn = document.getElementById('detail-modal-close');

    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // 6. Video Spotlight Card
  function setupVideoSpotlight() {
    const videoTrigger = document.getElementById('archive-video-trigger');
    const videoModal = document.getElementById('video-modal');
    const videoClose = document.getElementById('video-modal-close');

    if (videoTrigger && videoModal) {
      videoTrigger.addEventListener('click', () => {
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    }

    if (videoClose && videoModal) {
      videoClose.addEventListener('click', () => {
        videoModal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    if (videoModal) {
      videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
          videoModal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }
  }

  // Export
  window.initArchive = initArchive;
  window.openActivityModal = openActivityModal;
})();
