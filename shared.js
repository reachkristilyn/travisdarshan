// shared.js — injects nav and footer, sets active link
(function() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
const pages = [
    { href: 'about.html',    label: 'About' },
    { href: 'books.html',    label: 'Books' },
    { href: 'music.html',    label: 'Music' },
    { href: 'mathematics.html',     label: 'Mathematics' },
    { href: 'neuroaesthetics.html', label: 'Neuroaesthetics' },
    { href: 'nonprofit.html',label: 'Nonprofit' },
    { href: 'press.html',    label: 'Press' },
    { href: 'contact.html',  label: 'Contact' },
  ];
  const navHTML = `
    <nav>
      <a href="index.html" class="nav-logo${path === 'index.html' ? ' nav-logo-home' : ''}">Travis Darshan</a>
      <ul class="nav-links">
        ${pages.map(p => `<li><a href="${p.href}"${path === p.href ? ' class="active"' : ''}>${p.label}</a></li>`).join('')}
      </ul>
      <button class="hamburger" aria-label="Menu" id="hamburger-btn">☰</button>
    </nav>`;
  const footerHTML = `
    <footer>
      <div class="footer-inner">
        <a href="index.html" class="footer-logo">Travis Darshan</a>
        <ul class="footer-links">
          ${pages.map(p => `<li><a href="${p.href}">${p.label}</a></li>`).join('')}
        </ul>
        <p class="footer-copy">© 2026 Travis Darshan</p>
      </div>
    </footer>`;
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
  const btn = document.getElementById('hamburger-btn');
  const navLinks = document.querySelector('.nav-links');
  btn.addEventListener('click', function() {
    const isOpen = navLinks.classList.toggle('open');
    btn.textContent = isOpen ? '✕' : '☰';
  });
  navLinks.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.classList.remove('open');
      btn.textContent = '☰';
    });
  });
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.href = '/favicon.png';
  document.head.appendChild(favicon);

  const style = document.createElement('style');
  style.textContent = `
    .nav-links.open {
      display: block !important;
      position: fixed;
      top: 4rem;
      left: 0;
      right: 0;
      height: calc(100vh - 4rem);
      background: #0C0B09;
      z-index: 99;
      overflow-y: auto;
      padding: 1rem 2rem;
    }
    .nav-links.open li {
      display: block;
      width: 100%;
      padding: 1.25rem 0;
      border-bottom: 1px solid #26241F;
    }
    .nav-links.open li:first-child { border-top: 1px solid #26241F; }
    .nav-links.open a {
      font-size: 1.1rem;
      font-weight: 500;
      color: #F2EDE3;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      display: block;
      width: 100%;
    }
    #hamburger-btn { position: relative; z-index: 200; }
  `;
  document.head.appendChild(style);
})();
