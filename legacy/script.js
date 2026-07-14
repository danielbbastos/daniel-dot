// ---------- footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- nav ----------
// The horizontal bar simply scrolls away with the page. Once past the
// threshold, the vertical menu fans down the left edge under the fixed
// "daniel." wordmark; on the way back up it collapses behind it.
const header = document.getElementById('site-header');
const dockNav = document.getElementById('dock-nav');
const dockLinks = dockNav.querySelectorAll('a');
const THRESHOLD = 160;
let isOpen = false;
let wasOpenOnce = false;
let closeTimer = null;

function openFan() {
  clearTimeout(closeTimer);
  dockNav.classList.remove('closing');
  dockNav.classList.add('open');
  header.classList.add('veiled');
  dockNav.setAttribute('aria-hidden', 'false');
  dockLinks.forEach((a) => a.removeAttribute('tabindex'));
  wasOpenOnce = true;
}

function closeFan() {
  clearTimeout(closeTimer);
  dockNav.classList.remove('open');
  dockNav.setAttribute('aria-hidden', 'true');
  dockLinks.forEach((a) => a.setAttribute('tabindex', '-1'));

  if (wasOpenOnce) {
    // rise together and disappear behind the wordmark pill
    dockNav.classList.add('closing');
    closeTimer = setTimeout(() => {
      dockNav.classList.remove('closing');
      header.classList.remove('veiled');
    }, 400);
  } else {
    header.classList.remove('veiled');
  }
}

function onScroll() {
  const shouldOpen = window.scrollY > THRESHOLD;
  if (shouldOpen !== isOpen) {
    isOpen = shouldOpen;
    if (shouldOpen) openFan(); else closeFan();
  }
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---------- scroll-reveal for content ----------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
