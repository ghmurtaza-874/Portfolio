import { Gauge } from 'lucide-react';
import type { CSSProperties } from 'react';
import { skillCategories } from '../data/skills';
import type { Skill, SkillLevel } from '../data/skills';
import '../styles/Skills.css';

const levelLegend: Array<{ label: SkillLevel; range: string; className: string }> = [
  { label: 'Comfortable', range: '80–100', className: 'level-comfortable' },
  { label: 'Improving', range: '60–79', className: 'level-improving' },
  { label: 'Familiar', range: 'below 60', className: 'level-familiar' },
];

function SkillRow({ skill, delay }: { skill: Skill; delay: number }) {
  const Icon = skill.icon;
  return (
    <li
      className="skill-row reveal"
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      <div className="skill-top">
        <span className="skill-icon" aria-hidden="true">
          <Icon size={17} />
        </span>
        <div className="skill-meta">
          <span className="skill-name">{skill.name}</span>
          <span className="skill-blurb">{skill.blurb}</span>
        </div>
        <span className={`skill-badge mono ${levelLegend.find((l) => l.label === skill.levelLabel)?.className ?? ''}`}>
          {skill.levelLabel}
        </span>
      </div>

      <div
        className="skill-bar"
        role="img"
        aria-label={`${skill.name}: ${skill.levelLabel} — about ${skill.level} percent`}
      >
        <span
          className="skill-fill"
          style={{ '--level': `${skill.level}%` } as CSSProperties}
        />
      </div>
      <span className="skill-pct mono">{skill.level}%</span>
    </li>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section skills" aria-label="Skills">
      <div className="orb orb-blue skills-orb-1" aria-hidden="true" />
      <div className="orb orb-cyan skills-orb-2" aria-hidden="true" />

      <div className="container-xxl position-relative">
        <div className="section-head">
          <span className="eyebrow reveal">My toolbox</span>
          <h2 className="section-title reveal" style={{ '--reveal-delay': '80ms' } as CSSProperties}>
            Skills I&apos;m <span className="gradient-text">actively mastering</span>
          </h2>
          <p
            className="section-sub reveal"
            style={{ '--reveal-delay': '160ms' } as CSSProperties}
          >
            An honest snapshot of where I am today — no inflated percentages.
            Every bar moves up as I ship more real projects.
          </p>
        </div>

        {/* Honest-level legend */}
        <div
          className="skill-legend reveal"
          style={{ '--reveal-delay': '200ms' } as CSSProperties}
          aria-label="Skill level legend"
        >
          <span className="legend-title mono">
            <Gauge size={14} aria-hidden="true" />
            honest levels
          </span>
          {levelLegend.map((l) => (
            <span key={l.label} className={`legend-item mono ${l.className}`}>
              <span className="legend-dot" aria-hidden="true" />
              {l.label} · {l.range}
            </span>
          ))}
        </div>

        <div className="row g-4">
          {skillCategories.map((category, ci) => {
            const CategoryIcon = category.icon;
            return (
              <div className="col-md-6" key={category.id}>
                <article
                  className="skill-category glass-card glass-hover reveal"
                  style={{ '--reveal-delay': `${ci * 110}ms` } as CSSProperties}
                >
                  <header className="skill-cat-head">
                    <span className="skill-cat-icon" aria-hidden="true">
                      <CategoryIcon size={19} />
                    </span>
                    <div>
                      <h3 className="skill-cat-title">{category.title}</h3>
                      <p className="skill-cat-sub">{category.subtitle}</p>
                    </div>
                  </header>

                  <ul className="skill-list list-unstyled mb-0">
                    {category.skills.map((skill, si) => (
                      <SkillRow key={skill.name} skill={skill} delay={140 + si * 90} />
                    ))}
                  </ul>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
