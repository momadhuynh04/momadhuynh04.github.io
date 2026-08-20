// ===== CONFIG - Edit your info here =====
const CONFIG = {
  // GitHub username (for avatar)
  githubUsername: 'momadhuynh04',

  // Telegram: username WITHOUT @, link will auto-add https://t.me/
  telegram: {
    username: 'huynhhoang04',
    display: '@huynhhoang04'
  },

  // CSRIN: display username only, no link
  csrin: {
    username: 'huynhhoang04',
    display: 'huynhhoang04'
  },

  // Custom links - Add/edit/remove as needed
  links: [
    { label: 'GitHub', url: 'https://github.com/momadhuynh04', icon: 'github' },
    { label: 'AI2U', url: 'https://drive.google.com/file/d/1SNGjiLQT8pO9kjtrbbh86ivh6tCrlD4D/view?usp=drive_link', icon: 'link', note: 'crack + mod (playable)' },
    { label: 'Obsessed Lucy', url: 'https://drive.google.com/file/d/1OM0eScMB0_q-tNzMzzChbQOdehh5MPRs/view?usp=drive_link', icon: 'link', note: 'raw game (playable)' },
  ]
};
// ===== END CONFIG =====

// DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initLinks();
  initContacts();
  initCopyButtons();
  loadGitHubAvatar();
});

// Render link cards
function initLinks() {
  const grid = document.querySelector('.link-grid');
  if (!grid) return;

  // Clear existing
  grid.innerHTML = '';

  CONFIG.links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.className = 'link-card';
    a.target = '_blank';
    a.rel = 'noopener';
    a.setAttribute('aria-label', link.label);

    const iconHtml = getIconSVG(link.icon);
    const noteHtml = link.note ? `<span class="link-note">${link.note}</span>` : '';
    a.innerHTML = `<span class="icon ${link.icon}" aria-hidden="true">${iconHtml}</span><span>${link.label}</span>${noteHtml}`;
    grid.appendChild(a);
  });
}

// Render contact cards
function initContacts() {
  // Telegram
  const tgContact = document.getElementById('telegram-contact');
  const tgValue = document.getElementById('telegram-value');

  const tgUrl = `https://t.me/${CONFIG.telegram.username}`;
  if (tgContact) tgContact.href = tgUrl;
  if (tgValue) tgValue.textContent = CONFIG.telegram.display;

  // CSRIN - display only, no link
  const csrinContact = document.getElementById('csrin-contact');
  const csrinValue = document.getElementById('csrin-value');

  if (csrinContact) {
    csrinContact.removeAttribute('href');
    csrinContact.style.cursor = 'default';
  }
  if (csrinValue) csrinValue.textContent = CONFIG.csrin.display;
}

// Copy to clipboard functionality
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const card = btn.closest('.contact-card');
      const valueEl = card?.querySelector('.contact-value');
      const text = valueEl?.textContent?.trim();

      if (text && text !== '@your_username' && text !== 'your_username') {
        navigator.clipboard.writeText(text).then(() => {
          showToast(`Copied: ${text}`);
          btn.classList.add('copied');
          setTimeout(() => btn.classList.remove('copied'), 2000);
        }).catch(() => {
          showToast('Failed to copy, try again');
        });
      } else {
        showToast('Not configured in CONFIG');
      }
    });
  });
}

// Toast notification
function showToast(message) {
  // Remove existing toast
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Auto remove
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Icon SVG helper
function getIconSVG(type) {
  const icons = {
    github: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`,
    telegram: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10-4.486-10-10-10zm4.707 11.793l-4.5 4.5c-.39.39-1.023.39-1.414 0l-2.5-2.5c-.39-.39-.39-1.023 0-1.414l1.06-1.061 1.707 1.707 3.536-3.536 1.061 1.061c.39.39 1.023.39 1.414 0z"/></svg>`,
    csrin: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>`,
    link: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`
  };
  return icons[type] || icons.link;
}

// Load GitHub avatar
async function loadGitHubAvatar() {
  const avatarEl = document.getElementById('avatar');
  if (!avatarEl || !CONFIG.githubUsername) return;

  try {
    const response = await fetch(`https://api.github.com/users/${CONFIG.githubUsername}`);
    if (response.ok) {
      const data = await response.json();
      if (data.avatar_url) {
        avatarEl.innerHTML = `<img src="${data.avatar_url}" alt="" width="96" height="96" style="width:96px;height:96px;border-radius:50%;object-fit:cover;border:2px solid var(--accent);">`;
      }
    }
  } catch (e) {
    // Silently fail, keep default avatar
    console.debug('Could not load GitHub avatar:', e);
  }
}