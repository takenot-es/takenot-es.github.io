const items = document.querySelectorAll('.work-list li');
const images = document.querySelectorAll('.img-container');
const section = document.querySelector('.work');

// Utility: detect if a color is dark
function isDark(hex) {
  if (!hex) return true;

  const c = hex.replace('#', '');
  const rgb = parseInt(c, 16);

  const r = (rgb >> 16) & 255;
  const g = (rgb >> 8) & 255;
  const b = rgb & 255;

  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance < 140;
}

// HOVER STATE
items.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const index = item.dataset.index;
    const bg = item.dataset.bg;

    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    images.forEach(img => {
      img.classList.toggle('active', img.dataset.index === index);
    });

    section.style.backgroundColor = bg;
    section.setAttribute('data-bs-theme', isDark(bg) ? 'dark' : 'light');
  });
});

// RESET STATE
const resetRow = document.querySelector('.row.position-relative');
if (resetRow) {
  resetRow.addEventListener('mouseleave', () => {
    items.forEach(i => i.classList.remove('active'));
    images.forEach(img => img.classList.remove('active'));
    section.style.backgroundColor = '';
    section.removeAttribute('data-bs-theme');
  });
}

// SCROLL OPACITY
document.addEventListener('DOMContentLoaded', () => {
  const textEls = document.querySelectorAll('.text-to-opacity');

  textEls.forEach(textEl => {
    const words = textEl.innerText.split(' ');
    textEl.innerHTML = words
      .map(word => `<span class="word">${word}</span>`)
      .join(' ');

    const wordEls = textEl.querySelectorAll('.word');
    const numWords = wordEls.length;

    function updateOpacity() {
      const rect = textEl.getBoundingClientRect();
      const triggerDistance = 100;
      const start = window.innerHeight;

      let scrollProgress = (start - rect.top) / (start - triggerDistance);
      scrollProgress = Math.min(Math.max(scrollProgress, 0), 1);

      wordEls.forEach((word, index) => {
        const wordFraction = index / (numWords - 1 || 1);
        const opacity = Math.min(
          Math.max((scrollProgress - wordFraction * 0.05) / (1 - wordFraction * 0.05), 0.1),
          1
        );
        word.style.opacity = opacity;
        word.style.transform = `translateY(${(1 - opacity) * 6}px)`;
      });
    }

    window.addEventListener('scroll', updateOpacity);
    window.addEventListener('load', updateOpacity);
  });
});

// SPLIT LINE
document.addEventListener('DOMContentLoaded', () => {
  const lines = document.querySelectorAll('.split-line');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('active');
        }, 900);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  lines.forEach(line => observer.observe(line));
});

// FADE UP
window.addEventListener('load', () => {
  const els = document.querySelectorAll('.fade-up');

  els.forEach((el, i) => {
    // Wrap each word in a span
    const words = el.innerText.split(' ');
    el.innerHTML = words
      .map(word => `<span>${word}</span>`)
      .join(' ');

    // Stagger each word span
    el.querySelectorAll('span').forEach((word, j) => {
      word.style.transitionDelay = `${j * 0.01}s`;
    });
  });

  function checkFadeUp() {
    els.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('is-visible');
      }
    });
  }

  window.addEventListener('scroll', checkFadeUp);
  checkFadeUp();
});

document.addEventListener('DOMContentLoaded', function () {
  const section = document.querySelector('.scale-media-section');
  const media = document.querySelector('.media-inner');

  if (!section || !media) return;

  function updateScale() {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Progress (0 → 1)
    let progress = (windowHeight - rect.top) / (windowHeight + rect.height);
    progress = Math.min(Math.max(progress, 0), 1);

    // Optional easing for smoother feel
    const eased = Math.pow(progress, 1.4);

    // Scale + width growth
    const scale = 0.85 + (eased * 0.3); // 0.85 → ~1.15
    const width = 80 + (eased * 20);    // 80vw → 100vw

    media.style.transform = 'scale(' + scale + ')';
    media.style.width = width + 'vw';

    // Optional: border radius shrink
    media.style.borderRadius = (16 - (eased * 16)) + 'px';
  }

  window.addEventListener('scroll', updateScale);
  window.addEventListener('load', updateScale);
});

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('supportingTextHide');
  const textBlocks = document.querySelectorAll('.supporting-text');

  if (!toggle) return;

  toggle.addEventListener('change', () => {
    textBlocks.forEach(el => {
      el.classList.toggle('d-none', toggle.checked);
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const engagement = document.getElementById('engagement');
  const budgetField = document.getElementById('budget-field');

  if (!engagement) return;

  engagement.addEventListener('change', () => {
    const value = engagement.value;

    budgetField.classList.toggle(
      'd-none',
      !(value === 'Freelance' || value === 'Contract')
    );
  });
});