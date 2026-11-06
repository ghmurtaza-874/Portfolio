import { useEffect, useState } from 'react';
import { ExternalLink, Github, LayoutGrid, Sparkles, Star } from 'lucide-react';
import type { CSSProperties } from 'react';
import {
  projectCategories,
  projects,
} from '../data/projects';
import type { Project, ProjectCategory } from '../data/projects';
import { observeReveals } from '../hooks/useScrollReveal';
import '../styles/Projects.css';

type Filter = ProjectCategory | 'All';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon;

  const isExternalDemo = project.demo.startsWith('http');
  const isAnchorDemo = project.demo.startsWith('#');

  return (
    <div className="col-md-6 col-xl-4">
      <article
        className={`project-card glass-card glass-hover reveal${project.featured ? ' is-featured' : ''}`}
        style={{ '--reveal-delay': `${(index % 3) * 110}ms` } as CSSProperties}
      >
        {/* ── Thumbnail (generated, swap for a real screenshot any time) ── */}
        <div className={`project-thumb thumb-${project.gradient}`}>
          {project.image ? (
            <img src={project.image} alt={`Screenshot of ${project.title}`} loading="lazy" />
          ) : (
            <>
              <span className="thumb-icon" aria-hidden="true">
                <Icon size={44} strokeWidth={1.6} />
              </span>
              <span className="thumb-grid" aria-hidden="true" />
            </>
          )}

          {project.featured && (
            <span className="thumb-featured mono">
              <Star size={12} aria-hidden="true" />
              featured
            </span>
          )}

          <span
            className={`thumb-status mono ${project.status === 'shipped' ? 'status-shipped' : 'status-planned'}`}
          >
            {project.status === 'shipped' ? 'shipped · this site' : 'placeholder · planned'}
          </span>
        </div>

        {/* ── Body ── */}
        <div className="project-body">
          <div className="project-cat mono">{project.category}</div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.description}</p>

          <ul className="project-tags list-unstyled" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <li className="chip" key={tag}>
                {tag}
              </li>
            ))}
          </ul>

          <div className="project-links">
            <a
              className="project-link primary"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} — GitHub repository (opens in a new tab)`}
            >
              <Github size={15} aria-hidden="true" />
              Code
            </a>

            {isExternalDemo && (
              <a
                className="project-link"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} — live demo (opens in a new tab)`}
              >
                <ExternalLink size={15} aria-hidden="true" />
                Live Demo
              </a>
            )}

            {isAnchorDemo && (
              <a className="project-link" href={project.demo}>
                <LayoutGrid size={15} aria-hidden="true" />
                Live Demo
              </a>
            )}

            {!isExternalDemo && !isAnchorDemo && (
              <span className="project-link disabled" aria-disabled="true" title="Add your live URL in src/data/projects.ts">
                <ExternalLink size={15} aria-hidden="true" />
                Demo — add link
              </span>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All');

  const visible =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  /* New cards appear when the filter changes → re-scan for reveals */
  useEffect(() => {
    observeReveals();
  }, [filter]);

  return (
    <section id="projects" className="section projects" aria-label="Projects">
      <div className="orb orb-purple projects-orb-1" aria-hidden="true" />
      <div className="orb orb-pink projects-orb-2" aria-hidden="true" />

      <div className="container-xxl position-relative">
        <div className="section-head">
          <span className="eyebrow reveal">Selected work</span>
          <h2 className="section-title reveal" style={{ '--reveal-delay': '80ms' } as CSSProperties}>
            Projects &amp; <span className="gradient-text">practice builds</span>
          </h2>
          <p className="section-sub reveal" style={{ '--reveal-delay': '160ms' } as CSSProperties}>
            No invented case studies here — item 01 is the real site you&apos;re
            browsing, the rest are labeled placeholders waiting to become real
            builds. Everything is editable in <code className="mono path-hint">src/data/projects.ts</code>.
          </p>
        </div>

        {/* Filter pills */}
        <div
          className="project-filters reveal"
          style={{ '--reveal-delay': '200ms' } as CSSProperties}
          role="group"
          aria-label="Filter projects by category"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-pill${filter === cat ? ' is-active' : ''}`}
              aria-pressed={filter === cat}
              onClick={() => setFilter(cat)}
            >
              {cat === 'All' && <Sparkles size={13} aria-hidden="true" />}
              {cat}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center mt-4">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}
