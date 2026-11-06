import { ArrowUpRight } from 'lucide-react';
import type { CSSProperties } from 'react';
import { serviceItems } from '../data/services';
import '../styles/Services.css';

export default function Services() {
  return (
    <section id="services" className="section services" aria-label="What I can build">
      <div className="orb orb-cyan services-orb-1" aria-hidden="true" />

      <div className="container-xxl position-relative">
        <div className="section-head">
          <span className="eyebrow reveal">What I can build</span>
          <h2 className="section-title reveal" style={{ '--reveal-delay': '80ms' } as CSSProperties}>
            Ideas I can turn into <span className="gradient-text">working interfaces</span>
          </h2>
          <p className="section-sub reveal" style={{ '--reveal-delay': '160ms' } as CSSProperties}>
            The kind of frontend work I practice every day — honest about my level,
            enthusiastic about the craft.
          </p>
        </div>

        <div className="services-grid">
          {serviceItems.map((service, i) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className={`service-card glass-card glass-hover reveal${service.wide ? ' is-wide' : ''}`}
                style={{ '--reveal-delay': `${i * 90}ms` } as CSSProperties}
              >
                <span className="service-arrow" aria-hidden="true">
                  <ArrowUpRight size={16} />
                </span>

                <span className="service-icon" aria-hidden="true">
                  <Icon size={22} />
                </span>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>

                <ul className="service-tags list-unstyled" aria-label="Related skills">
                  {service.tags.map((tag) => (
                    <li className="chip" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
