import { useEffect, useState } from 'react';
import { ArrowUp, Code2, Github, Heart, Linkedin, Twitter } from 'lucide-react';
import { profile } from '../data/profile';
import { skillCategories } from '../data/skills';
import '../styles/Footer.css';

const quickLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 560);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="container-xxl">
        <div className="row g-4 footer-top">
          {/* Brand */}
          <div className="col-lg-4">
            <a className="brand footer-brand" href="#home">
              <span className="brand-mark" aria-hidden="true">
                <Code2 size={19} strokeWidth={2.4} />
              </span>
              <span className="brand-text mono">
                {profile.firstName.toLowerCase()}
                <span className="brand-dot">.dev</span>
              </span>
            </a>
            <p className="footer-blurb">
              Frontend developer crafting responsive, accessible interfaces with
              React &amp; TypeScript — and documenting the whole learning journey
              in public.
            </p>
            <div className="footer-socials">
              <a className="icon-btn" href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <Github size={18} />
              </a>
              <a className="icon-btn" href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <Linkedin size={18} />
              </a>
              <a className="icon-btn" href={profile.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter / X profile">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav className="col-6 col-lg-2 offset-lg-1" aria-label="Footer navigation">
            <h3 className="footer-heading mono">explore</h3>
            <ul className="footer-links list-unstyled">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Tech chips */}
          <div className="col-lg-5">
            <h3 className="footer-heading mono">technologies i use</h3>
            <ul className="footer-tech list-unstyled">
              {skillCategories.flatMap((cat) =>
                cat.skills.map((skill) => (
                  <li className="chip" key={skill.name}>
                    {skill.name}
                  </li>
                )),
              )}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy mb-0">
            © {year} {profile.name}. Designed &amp; built from scratch with
            <Heart size={12} aria-hidden="true" className="heart" /> React, TypeScript
            &amp; Bootstrap 5 — a 100% frontend project.
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        type="button"
        className={`back-to-top${showTop ? ' is-visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <ArrowUp size={19} />
      </button>
    </footer>
  );
}
