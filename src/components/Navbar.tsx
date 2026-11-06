import { useEffect, useState } from 'react';
import { ArrowRight, Code2, Menu, X } from 'lucide-react';
import { profile } from '../data/profile';
import '../styles/Navbar.css';

interface NavLink {
  id: string;
  label: string;
}

const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>('home');

  /* Scroll state: glass background + reading progress bar */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Scrollspy: highlight the section currently in view */
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* Mobile menu: lock body scroll + close on Escape */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header${scrolled || open ? ' is-scrolled' : ''}`}>
      <nav className="navbar container-xxl site-nav" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            <Code2 size={20} strokeWidth={2.4} />
          </span>
          <span className="brand-text mono">
            {profile.firstName.toLowerCase()}
            <span className="brand-dot">.dev</span>
          </span>
        </a>

        <button
          type="button"
          className={`nav-toggle d-lg-none${open ? ' is-open' : ''}`}
          aria-expanded={open}
          aria-controls="primary-menu"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div id="primary-menu" className={`nav-menu${open ? ' is-open' : ''}`}>
          <ul className="nav-links list-unstyled mb-0">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-link-item${active === link.id ? ' is-active' : ''}`}
                  aria-current={active === link.id ? 'true' : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Let&apos;s Talk
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>
      </nav>

      {/* Reading progress */}
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
    </header>
  );
}
