import {
  ArrowRight,
  Atom,
  Code2,
  FileCode2,
  Github,
  Linkedin,
  Mail,
  Palette,
  Sparkles,
  Twitter,
} from 'lucide-react';
import type { CSSProperties } from 'react';
import { profile } from '../data/profile';
import '../styles/Hero.css';

const techTicker: string[] = [
  'HTML5',
  'CSS3',
  'JavaScript ES6+',
  'TypeScript',
  'React.js',
  'Bootstrap 5',
  'Vite',
  'Git & GitHub',
  'Responsive Design',
];

interface FloatingChip {
  id: string;
  label: string;
  icon: typeof Atom;
  className: string;
}

const floatingChips: FloatingChip[] = [
  { id: 'chip-react', label: 'React', icon: Atom, className: 'chip-1' },
  { id: 'chip-ts', label: 'TypeScript', icon: FileCode2, className: 'chip-2' },
  { id: 'chip-css', label: 'CSS3', icon: Palette, className: 'chip-3' },
];

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      {/* Decorative animated background */}
      <div className="orb orb-purple hero-orb-1" aria-hidden="true" />
      <div className="orb orb-blue hero-orb-2" aria-hidden="true" />
      <div className="orb orb-pink hero-orb-3" aria-hidden="true" />
      <div className="hero-ring" aria-hidden="true" />

      <div className="container-xxl hero-inner">
        <div className="row align-items-center g-5">
          {/* ── Copy ─────────────────────────────────── */}
          <div className="col-lg-7 hero-copy">
            <span className="hero-badge reveal" style={{ '--reveal-delay': '0ms' } as CSSProperties}>
              <span className="pulse-dot" aria-hidden="true" />
              <Sparkles size={14} aria-hidden="true" />
              {profile.availability}
            </span>

            <h1 className="hero-title reveal" style={{ '--reveal-delay': '90ms' } as CSSProperties}>
              Hi, I&apos;m{' '}
              <span className="gradient-text-animated">{profile.name}</span>
            </h1>

            <p className="hero-role reveal" style={{ '--reveal-delay': '180ms' } as CSSProperties}>
              <Code2 size={19} aria-hidden="true" />
              <span>{profile.role}</span>
            </p>

            <p className="hero-tagline reveal" style={{ '--reveal-delay': '260ms' } as CSSProperties}>
              {profile.tagline}
            </p>

            <div
              className="hero-actions reveal"
              style={{ '--reveal-delay': '340ms' } as CSSProperties}
            >
              <a className="btn-glow" href="#projects">
                View My Projects
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a className="btn-ghost" href="#contact">
                <Mail size={17} aria-hidden="true" />
                Get In Touch
              </a>
            </div>

            <div
              className="hero-socials reveal"
              style={{ '--reveal-delay': '420ms' } as CSSProperties}
              aria-label="Social profiles"
            >
              <a
                className="icon-btn"
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <Github size={19} />
              </a>
              <a
                className="icon-btn"
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={19} />
              </a>
              <a
                className="icon-btn"
                href={profile.socials.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X profile"
              >
                <Twitter size={19} />
              </a>
              <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Send an email">
                <Mail size={19} />
              </a>
              <span className="hero-follow mono" aria-hidden="true">
                — follow the journey
              </span>
            </div>
          </div>

          {/* ── Visual ───────────────────────────────── */}
          <div className="col-lg-5">
            <div
              className="hero-visual reveal"
              style={{ '--reveal-delay': '200ms' } as CSSProperties}
            >
              <div className="avatar-ring" aria-hidden="true" />
              <div className="avatar-glow" aria-hidden="true" />

              {/* ── PHOTO PLACEHOLDER ───────────────────────
                  Replace this whole .avatar-glass div with:
                  <img className="avatar-img" src="/your-photo.jpg"
                       alt={`Portrait of ${profile.name}`} />
                  ─────────────────────────────────────────── */}
              <div
                className="avatar-glass"
                role="img"
                aria-label={`Profile photo placeholder for ${profile.name}`}
              >
                <span className="avatar-initials">{profile.initials}</span>
                <span className="avatar-caption mono">&lt;your-photo /&gt;</span>
              </div>

              {floatingChips.map((chip) => {
                const ChipIcon = chip.icon;
                return (
                  <span key={chip.id} className={`float-chip ${chip.className}`}>
                    <ChipIcon size={15} aria-hidden="true" />
                    {chip.label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Tech ticker */}
      <div className="tech-ticker" aria-hidden="true">
        <div className="tech-ticker-track">
          {[0, 1].map((copy) => (
            <ul className="tech-ticker-list list-unstyled mb-0" key={copy}>
              {techTicker.map((tech) => (
                <li key={`${copy}-${tech}`}>
                  {tech}
                  <span className="tick-sep">•</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
