/* ==========================================================================
   MOLTACA ELAZHAR — Stories & Highlights Module
   Specialized card system + Client-side filtering + Story detail modal
   Strict 1-to-1 canonical source links + Tailored CTAs per content type
   ========================================================================== */

(function () {
  'use strict';

  let currentCategory = 'all';
  const stories = window.MOLTACA_STORIES || [];

  function initStories() {
    renderFeaturedStory();
    renderStoriesFilter();
    renderStoriesGrid(currentCategory);
    setupStoryModal();
  }

  // 1. Render Featured Story (Highlighted Hero Card)
  function renderFeaturedStory() {
    const container = document.getElementById('featured-story-slot');
    if (!container) return;

    // Feature the verified 2019 Talent Competition
    const featured = stories.find(s => s.id === 'story-competition-2019') || stories[0];
    if (!featured) return;

    container.innerHTML = `
      <article class="featured-story-card">
        <a href="${featured.url}" target="_blank" rel="noopener noreferrer" class="featured-story-media" aria-label="${featured.title}">
          <img src="${featured.image}" alt="${featured.title}" class="featured-story-img" loading="eager">
          <div class="featured-story-badge">
            <span class="badge badge-gold">صورة التقرير الصحفي الأصلي</span>
          </div>
        </a>
        <div class="featured-story-body">
          <div class="card-meta-row">
            <span class="card-type-tag tag-competition">مسابقات ومواهب</span>
            <span class="card-date-source">${featured.date} • ${featured.source}</span>
          </div>
          <h3 class="featured-story-title">
            <a href="${featured.url}" target="_blank" rel="noopener noreferrer" class="title-source-link">
              ${featured.title}
            </a>
          </h3>
          <p class="featured-story-summary">${featured.summary}</p>
          
          <div class="featured-highlights-mini">
            ${(featured.highlights || []).slice(0, 2).map(h => `
              <div class="featured-highlight-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>${h}</span>
              </div>
            `).join('')}
          </div>

          <div class="featured-actions">
            <a href="${featured.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" aria-label="فتح المصدر الأصلي">
              ${featured.ctaText || 'اقرأ القصة والنتائج'}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(180deg);"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
            <button type="button" class="btn btn-outline story-detail-btn" data-story-id="${featured.id}">
              قائمة المتأهلين ولجنة التحكيم
            </button>
          </div>
        </div>
      </article>
    `;
  }

  // 2. Render Stories Filter Controls
  function renderStoriesFilter() {
    const filterContainer = document.getElementById('stories-filter-bar');
    if (!filterContainer) return;

    const filters = [
      { key: 'all', label: 'الكل' },
      { key: 'activities', label: 'أنشطة ومبادرات' },
      { key: 'competitions', label: 'مسابقات' },
      { key: 'community', label: 'المجتمع والقرية' },
      { key: 'press', label: 'تغطيات صحفية' },
      { key: 'videos', label: 'مرئيات' }
    ];

    filterContainer.innerHTML = filters.map(f => `
      <button type="button" class="filter-chip ${f.key === currentCategory ? 'active' : ''}" data-category="${f.key}">
        ${f.label}
      </button>
    `).join('');

    filterContainer.querySelectorAll('.filter-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-category');
        if (cat === currentCategory) return;
        currentCategory = cat;

        filterContainer.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        renderStoriesGrid(currentCategory);
      });
    });
  }

  // 3. Filter Matching Logic
  function matchesCategory(story, category) {
    if (category === 'all') return true;
    if (category === 'activities') {
      return story.type === 'community-initiative' || story.type === 'community-event';
    }
    if (category === 'competitions') {
      return story.type === 'competition';
    }
    if (category === 'community') {
      return story.type === 'community-post' || story.type === 'village-story';
    }
    if (category === 'press') {
      return story.type === 'press-coverage' || story.source.includes('الوطن') || story.source.includes('أخبار اليوم') || story.source.includes('المواطن');
    }
    if (category === 'videos') {
      return story.type === 'video';
    }
    return true;
  }

  // 4. Render Stories Grid with Specialized Card Variants
  function renderStoriesGrid(category) {
    const grid = document.getElementById('stories-grid');
    if (!grid) return;

    const filtered = stories.filter(s => matchesCategory(s, category));

    if (!filtered.length) {
      grid.innerHTML = `
        <div class="empty-filter-state">
          <p>لا توجد قصص مطابقة لهذا التصنيف حالياً في الأرشيف الموثق.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(story => renderSpecializedCard(story)).join('');

    // Attach listeners
    attachCardEvents(grid);
  }

  // 5. Specialized Card Template Generator (1-to-1 canonical source links)
  function renderSpecializedCard(story) {
    const hasImage = Boolean(story.image);
    const cta = story.ctaText || getDefaultCTA(story.type);

    // Text-First Card (For imageless articles per fallback rule)
    if (!hasImage) {
      return `
        <article class="story-card story-card-text-first" data-id="${story.id}">
          <div class="story-card-body">
            <div class="card-meta-top">
              <span class="card-type-tag ${getTypeTagClass(story.type)}">${getTypeLabel(story.type)}</span>
              <span class="card-date">${story.date || ''}</span>
            </div>
            <div class="text-first-badge-row">
              <span class="badge badge-outline text-first-note">توثيق نصي معتمد بالمصدر</span>
            </div>
            <h4 class="story-card-title">
              <a href="${story.url}" target="_blank" rel="noopener noreferrer" class="title-source-link">
                ${story.title}
              </a>
            </h4>
            <p class="story-card-summary">${story.summary}</p>
            <div class="card-footer-action">
              <span class="card-source-label">${story.source}</span>
              <a href="${story.url}" target="_blank" rel="noopener noreferrer" class="action-text-btn" aria-label="${cta}">
                ${cta} ↗
              </a>
            </div>
          </div>
        </article>
      `;
    }

    // Standard Specialized Cards with Verified Images
    switch (story.type) {
      case 'competition':
        return `
          <article class="story-card story-card-competition" data-id="${story.id}">
            <a href="${story.url}" target="_blank" rel="noopener noreferrer" class="story-card-media" aria-label="${story.title}">
              <img src="${story.image}" alt="${story.title}" loading="lazy">
              <span class="badge badge-gold story-badge">صورة التقرير الأصلي</span>
            </a>
            <div class="story-card-body">
              <div class="card-meta-top">
                <span class="card-type-tag tag-competition">مسابقة</span>
                <span class="card-date">${story.date}</span>
              </div>
              <h4 class="story-card-title">
                <a href="${story.url}" target="_blank" rel="noopener noreferrer" class="title-source-link">
                  ${story.title}
                </a>
              </h4>
              <p class="story-card-summary">${story.summary}</p>
              <div class="card-footer-action">
                <span class="card-source-label">${story.source}</span>
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <button type="button" class="story-mini-info-btn story-detail-btn" data-story-id="${story.id}" title="عرض تفاصيل لجنة التحكيم والمتأهلين">
                    تفاصيل
                  </button>
                  <a href="${story.url}" target="_blank" rel="noopener noreferrer" class="action-text-btn" aria-label="${cta}">
                    ${cta} ↗
                  </a>
                </div>
              </div>
            </div>
          </article>
        `;

      case 'video':
        return `
          <article class="story-card story-card-video" data-id="${story.id}">
            <a href="${story.url}" target="_blank" rel="noopener noreferrer" class="story-card-media video-thumb-wrap" aria-label="${story.title}">
              <img src="${story.image}" alt="${story.title}" loading="lazy">
              <div class="video-play-overlay">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
              <span class="badge badge-dark story-badge">فيديو توثيقي</span>
            </a>
            <div class="story-card-body">
              <div class="card-meta-top">
                <span class="card-type-tag tag-video">مرئيات</span>
                <span class="card-date">${story.date}</span>
              </div>
              <h4 class="story-card-title">
                <a href="${story.url}" target="_blank" rel="noopener noreferrer" class="title-source-link">
                  ${story.title}
                </a>
              </h4>
              <p class="story-card-summary">${story.summary}</p>
              <div class="card-footer-action">
                <span class="card-source-label">${story.source}</span>
                <a href="${story.url}" target="_blank" rel="noopener noreferrer" class="action-text-btn" aria-label="${cta}">
                  ${cta} ↗
                </a>
              </div>
            </div>
          </article>
        `;

      case 'village-story':
        return `
          <article class="story-card story-card-village" data-id="${story.id}">
            <a href="${story.url}" target="_blank" rel="noopener noreferrer" class="story-card-media" aria-label="${story.title}">
              <img src="${story.image}" alt="${story.title}" loading="lazy">
              <span class="badge badge-olive story-badge">صورة التقرير</span>
            </a>
            <div class="story-card-body">
              <div class="card-meta-top">
                <span class="card-type-tag tag-village">صوت القرية</span>
                <span class="card-date">${story.location || ''} • ${story.date || ''}</span>
              </div>
              <h4 class="story-card-title">
                <a href="${story.url}" target="_blank" rel="noopener noreferrer" class="title-source-link">
                  ${story.title}
                </a>
              </h4>
              <p class="story-card-summary">${story.summary}</p>
              <div class="card-footer-action">
                <span class="card-source-label">${story.source}</span>
                <a href="${story.url}" target="_blank" rel="noopener noreferrer" class="action-text-btn" aria-label="${cta}">
                  ${cta} ↗
                </a>
              </div>
            </div>
          </article>
        `;

      case 'community-initiative':
      case 'community-event':
        return `
          <article class="story-card story-card-initiative" data-id="${story.id}">
            <a href="${story.url}" target="_blank" rel="noopener noreferrer" class="story-card-media" aria-label="${story.title}">
              <img src="${story.image}" alt="${story.title}" loading="lazy">
              <span class="badge badge-olive story-badge">${story.type === 'community-event' ? 'صورة الاحتفالية' : 'مبادرة تنموية'}</span>
            </a>
            <div class="story-card-body">
              <div class="card-meta-top">
                <span class="card-type-tag tag-initiative">${story.type === 'community-event' ? 'فعالية' : 'مبادرة'}</span>
                <span class="card-date">${story.date}</span>
              </div>
              <h4 class="story-card-title">
                <a href="${story.url}" target="_blank" rel="noopener noreferrer" class="title-source-link">
                  ${story.title}
                </a>
              </h4>
              <p class="story-card-summary">${story.summary}</p>
              <div class="card-footer-action">
                <span class="card-source-label">${story.source}</span>
                <a href="${story.url}" target="_blank" rel="noopener noreferrer" class="action-text-btn" aria-label="${cta}">
                  ${cta} ↗
                </a>
              </div>
            </div>
          </article>
        `;

      case 'community-post':
      default:
        return `
          <article class="story-card story-card-creed" data-id="${story.id}">
            <a href="${story.url}" target="_blank" rel="noopener noreferrer" class="story-card-media creed-media" aria-label="${story.title}">
              <img src="${story.image}" alt="${story.title}" loading="lazy">
              <span class="badge badge-gold story-badge">منشور رسمي</span>
            </a>
            <div class="story-card-body">
              <div class="card-meta-top">
                <span class="card-type-tag tag-creed">منشور مجتمعي</span>
                <span class="card-date">${story.date}</span>
              </div>
              <h4 class="story-card-title">
                <a href="${story.url}" target="_blank" rel="noopener noreferrer" class="title-source-link">
                  ${story.title}
                </a>
              </h4>
              <p class="story-card-summary">${story.summary}</p>
              <div class="card-footer-action">
                <span class="card-source-label">${story.source}</span>
                <a href="${story.url}" target="_blank" rel="noopener noreferrer" class="action-text-btn" aria-label="${cta}">
                  ${cta} ↗
                </a>
              </div>
            </div>
          </article>
        `;
    }
  }

  function getDefaultCTA(type) {
    switch (type) {
      case 'competition': return 'اقرأ القصة والنتائج';
      case 'video': return 'مشاهدة المقطع';
      case 'village-story': return 'اقرأ الخبر';
      case 'community-initiative': return 'تفاصيل المبادرة';
      case 'community-event': return 'تفاصيل الفعالية';
      case 'community-post': return 'عرض المنشور';
      default: return 'عرض المصدر';
    }
  }

  function getTypeTagClass(type) {
    switch (type) {
      case 'competition': return 'tag-competition';
      case 'video': return 'tag-video';
      case 'village-story': return 'tag-village';
      case 'community-initiative':
      case 'community-event': return 'tag-initiative';
      default: return 'tag-creed';
    }
  }

  function getTypeLabel(type) {
    switch (type) {
      case 'competition': return 'مسابقة';
      case 'video': return 'مرئيات';
      case 'village-story': return 'صوت القرية';
      case 'community-initiative': return 'مبادرة تنموية';
      case 'community-event': return 'فعالية مجتمعية';
      default: return 'منشور مجتمعي';
    }
  }

  // 6. Attach Card Interactions
  function attachCardEvents(container) {
    container.querySelectorAll('.story-detail-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        const id = btn.getAttribute('data-story-id');
        openStoryModal(id);
      });
    });

    const featBtn = document.querySelector('#featured-story-slot .story-detail-btn');
    if (featBtn) {
      featBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        const id = featBtn.getAttribute('data-story-id');
        openStoryModal(id);
      });
    }
  }

  // 7. Story Detail Modal Logic (Links directly to exact story.url)
  function openStoryModal(id) {
    const story = stories.find(s => s.id === id);
    if (!story) return;

    const modal = document.getElementById('story-modal');
    if (!modal) return;

    const header = modal.querySelector('.detail-modal-header');
    const img = document.getElementById('story-modal-img');
    const badge = document.getElementById('story-modal-badge');
    const title = document.getElementById('story-modal-title');
    const meta = document.getElementById('story-modal-meta');
    const summary = document.getElementById('story-modal-summary');
    const highlightsWrap = document.getElementById('story-modal-highlights');
    const extLink = document.getElementById('story-modal-link');

    if (story.image) {
      if (header) header.style.display = 'block';
      if (img) img.src = story.image;
    } else {
      if (header) header.style.display = 'none';
    }

    if (badge) badge.textContent = story.source;
    if (title) title.textContent = story.title;
    if (meta) meta.textContent = `${story.date || ''} ${story.location ? '• ' + story.location : ''}`;
    if (summary) summary.textContent = story.summary;

    if (highlightsWrap) {
      if (story.highlights && story.highlights.length) {
        highlightsWrap.innerHTML = `
          <h5 class="highlights-title">أبرز المحطات والبيانات الموثقة:</h5>
          <ul class="highlights-list">
            ${story.highlights.map(h => `<li><span class="bullet">✓</span> <span>${h}</span></li>`).join('')}
          </ul>
        `;
        highlightsWrap.style.display = 'block';
      } else {
        highlightsWrap.style.display = 'none';
      }
    }

    if (extLink) {
      if (story.url) {
        extLink.href = story.url;
        extLink.style.display = 'inline-flex';
        extLink.textContent = story.ctaText ? `${story.ctaText} في المصدر الأصلي` : 'فتح الرابط في المصدر الأصلي';
      } else {
        extLink.style.display = 'none';
      }
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function setupStoryModal() {
    const modal = document.getElementById('story-modal');
    const closeBtn = document.getElementById('story-modal-close');

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

  // Export
  window.initStories = initStories;
  window.openStoryModal = openStoryModal;
})();
