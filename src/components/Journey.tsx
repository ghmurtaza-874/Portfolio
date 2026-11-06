import { journeyItems } from '../data/journey';
import type { CSSProperties } from 'react';
import '../styles/Journey.css';

export default function Journey() {
  return (
    <section id="journey" className="section journey" aria-label="Learning journey">
      <div className="orb orb-blue journey-orb-1" aria-hidden="true" />

      <div className="container-xxl position-relative">
        <div className="section-head text-center mx-auto">
          <span className="eyebrow reveal">Learning journey</span>
          <h2 className="section-title reveal" style={{ '--reveal-delay': '80ms' } as CSSProperties}>
            From first <span className="gradient-text">&lt;div&gt;</span> to React
          </h2>
          <p className="section-sub reveal" style={{ '--reveal-delay': '160ms' } as CSSProperties}>
            Every frontend developer starts with a blank page. Here&apos;s my honest,
            still-unfolding route through the stack — no shortcuts, just steady steps.
          </p>
        </div>

        <ol className="timeline list-unstyled">
          {journeyItems.map((item, i) => {
            const Icon = item.icon;
            const side = i % 2 === 0 ? 'left' : 'right';
            return (
              <li
                key={item.phase}
                className={`timeline-item ${side}${item.current ? ' is-current' : ''}`}
              >
                <div
                  className={`timeline-card glass-card glass-hover reveal${side === 'left' ? ' card-left' : ' card-right'}`}
                  style={{ '--reveal-delay': '60ms' } as CSSProperties}
                >
                  <span className="timeline-phase mono">
                    {item.phase}
                    {item.current && <em className="now-badge">current</em>}
                  </span>
                  <span className="timeline-period">{item.period}</span>
                  <h3 className="timeline-title">
                    <span className="timeline-title-icon" aria-hidden="true">
                      <Icon size={17} />
                    </span>
                    {item.title}
                  </h3>
                  <p className="timeline-desc">{item.description}</p>
                  <ul className="timeline-tags list-unstyled" aria-label="Key topics">
                    {item.tags.map((tag) => (
                      <li className="chip" key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <span className="timeline-node" aria-hidden="true">
                  <Icon size={18} />
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
