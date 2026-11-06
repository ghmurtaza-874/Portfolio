import { Boxes, Compass, Quote, Target, Zap } from 'lucide-react';
import type { CSSProperties } from 'react';
import { profile } from '../data/profile';
import '../styles/About.css';

const highlights = [
  {
    icon: Compass,
    title: 'Curiosity-driven',
    text: 'I learn by building small things constantly — then taking them apart.',
  },
  {
    icon: Target,
    title: 'Fundamentals first',
    text: 'Semantic HTML and solid CSS before shortcuts. Frameworks change; basics pay off forever.',
  },
  {
    icon: Boxes,
    title: 'Component thinking',
    text: 'Breaking interfaces into small, reusable, typed pieces that compose well.',
  },
  {
    icon: Zap,
    title: 'Ship & iterate',
    text: 'Working code beats perfect plans. Deploy early, gather feedback, improve.',
  },
];

export default function About() {
  return (
    <section id="about" className="section about" aria-label="About me">
      <div className="orb orb-purple about-orb-1" aria-hidden="true" />

      <div className="container-xxl position-relative">
        <div className="row g-5 align-items-center">
          {/* ── Code card ────────────────────────────── */}
          <div className="col-lg-5">
            <div className="about-code glass-card glass-hover reveal">
              <div className="code-head">
                <span className="code-dot red" aria-hidden="true" />
                <span className="code-dot yellow" aria-hidden="true" />
                <span className="code-dot green" aria-hidden="true" />
                <span className="code-file mono">profile.ts</span>
              </div>
              <pre className="code-body mono">
<code><span className="tok-kw">const</span> <span className="tok-var">{profile.firstName.toLowerCase()}</span><span className="tok-pun">:</span> <span className="tok-type">Developer</span> <span className="tok-pun">= {'{'}</span>{'\n'}
{'  '}<span className="tok-key">role</span><span className="tok-pun">:</span> <span className="tok-str">'Frontend Developer'</span><span className="tok-pun">,</span>{'\n'}
{'  '}<span className="tok-key">stack</span><span className="tok-pun">:</span> <span className="tok-pun">[</span><span className="tok-str">'React'</span><span className="tok-pun">,</span> <span className="tok-str">'TypeScript'</span><span className="tok-pun">,</span> <span className="tok-str">'CSS'</span><span className="tok-pun">],</span>{'\n'}
{'  '}<span className="tok-key">focus</span><span className="tok-pun">:</span> <span className="tok-str">'clean, responsive UI'</span><span className="tok-pun">,</span>{'\n'}
{'  '}<span className="tok-key">learning</span><span className="tok-pun">:</span> <span className="tok-str">'every single day'</span><span className="tok-pun">,</span>{'\n'}
{'  '}<span className="tok-key">openToWork</span><span className="tok-pun">:</span> <span className="tok-bool">true</span><span className="tok-pun">,</span>{'\n'}
<span className="tok-pun">{'}'};</span></code>
              </pre>
            </div>
          </div>

          {/* ── Story ────────────────────────────────── */}
          <div className="col-lg-7">
            <div className="section-head mb-4">
              <span className="eyebrow reveal">About me</span>
              <h2 className="section-title reveal" style={{ '--reveal-delay': '80ms' } as CSSProperties}>
                Turning curiosity into <span className="gradient-text">clean, modern interfaces</span>
              </h2>
            </div>

            <div className="about-story reveal" style={{ '--reveal-delay': '160ms' } as CSSProperties}>
              <p>
                My frontend journey started with a simple question:{' '}
                <em>how does a web page actually work?</em> That question pulled me into
                HTML and CSS, then JavaScript — and somewhere between my first flexbox
                layout and my first React component, I realized frontend development is
                exactly where I want to be.
              </p>
              <p>
                I learn in public and I learn by doing: rebuilding layouts I admire,
                reading documentation properly, breaking things on purpose to understand
                them, and turning every small win into a reusable pattern. Right now
                I&apos;m deepening my TypeScript and React skills — building small,
                honest projects instead of collecting tutorials.
              </p>
              <p>
                What excites me most is the craft of it: interfaces that feel fast,
                read clearly and work beautifully on any screen. This portfolio itself
                is part of that journey — designed and hand-coded from scratch with
                React, TypeScript, Bootstrap 5 and plain CSS.
              </p>
            </div>

            <blockquote className="about-quote reveal" style={{ '--reveal-delay': '240ms' } as CSSProperties}>
              <Quote size={16} aria-hidden="true" />
              <span>Steady progress beats instant perfection.</span>
            </blockquote>

            <div className="row g-3 mt-1">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div className="col-sm-6" key={item.title}>
                    <div
                      className="about-card reveal"
                      style={{ '--reveal-delay': `${300 + i * 90}ms` } as CSSProperties}
                    >
                      <span className="about-card-icon" aria-hidden="true">
                        <Icon size={17} />
                      </span>
                      <div>
                        <h3 className="about-card-title">{item.title}</h3>
                        <p className="about-card-text">{item.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
