import type { LucideIcon } from 'lucide-react';
import {
  Atom,
  Code2,
  LayoutTemplate,
  ListChecks,
  Package,
  CloudSun,
} from 'lucide-react';

/**
 * ─────────────────────────────────────────────────────────────
 *  PROJECT PLACEHOLDERS ✏️
 *  No fake “completed projects” here. Item 01 is the real
 *  portfolio you are looking at; the rest are honest
 *  placeholders — replace them with your real work as you
 *  build it: title, description, tags, image, GitHub + demo
 *  URLs and set `status: 'shipped'`.
 * ─────────────────────────────────────────────────────────────
 */

export type ProjectCategory = 'React' | 'HTML & CSS' | 'TypeScript';

export type ProjectStatus = 'shipped' | 'planned';

export interface Project {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Visual variant for the generated thumbnail (g1 … g6) */
  gradient: string;
  tags: string[];
  category: ProjectCategory;
  github: string;
  demo: string;
  status: ProjectStatus;
  featured?: boolean;
  /**
   * Optional real screenshot. Leave undefined to use the
   * generated gradient thumbnail. e.g. image: '/images/weather.png'
   */
  image?: string;
}

export const projectCategories: Array<ProjectCategory | 'All'> = [
  'All',
  'React',
  'HTML & CSS',
  'TypeScript',
];

export const projects: Project[] = [
  {
    id: 'portfolio-site',
    title: 'Portfolio Website — This Site',
    description:
      'The site you are browsing right now: a fully responsive, animated portfolio built from scratch with React, TypeScript, Bootstrap 5 and hand-written CSS — glassmorphism, scroll reveals and an honest skills section included.',
    icon: Code2,
    gradient: 'g1',
    tags: ['React', 'TypeScript', 'Bootstrap 5', 'Vite', 'Plain CSS'],
    category: 'React',
    github: 'https://github.com/your-username', // TODO: replace
    demo: '#home',
    status: 'shipped',
    featured: true,
  },
  {
    id: 'landing-page',
    title: 'Responsive Landing Page',
    description:
      'Placeholder — a planned build. A pixel-perfect product landing page with hero, feature grid, pricing table and footer, using semantic HTML5, Flexbox/Grid and mobile-first media queries. Swap this text for your real project.',
    icon: LayoutTemplate,
    gradient: 'g2',
    tags: ['HTML5', 'CSS3', 'Flexbox & Grid'],
    category: 'HTML & CSS',
    github: 'https://github.com/your-username', // TODO: replace
    demo: '', // add your live URL when ready
    status: 'planned',
    featured: true,
  },
  {
    id: 'task-tracker',
    title: 'Task Tracker UI',
    description:
      'Placeholder — a planned build. A drag-friendly to-do interface with React useState, controlled form inputs, localStorage persistence and filterable lists. A perfect first React state-management exercise.',
    icon: ListChecks,
    gradient: 'g3',
    tags: ['React', 'Hooks', 'localStorage'],
    category: 'React',
    github: 'https://github.com/your-username', // TODO: replace
    demo: '',
    status: 'planned',
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    description:
      'Placeholder — a planned build. A searchable weather board with typed API responses, loading and error states, and a clean card layout. Great practice for fetch, TypeScript interfaces and conditional UI.',
    icon: CloudSun,
    gradient: 'g4',
    tags: ['React', 'TypeScript', 'Fetch API'],
    category: 'TypeScript',
    github: 'https://github.com/your-username', // TODO: replace
    demo: '',
    status: 'planned',
  },
  {
    id: 'product-card',
    title: 'Product Card Component',
    description:
      'Placeholder — a planned build. A reusable, accessible product card — hover zoom, price badge, responsive image and a skeleton loading state. Built once, themed with CSS custom properties, reused everywhere.',
    icon: Package,
    gradient: 'g5',
    tags: ['HTML5', 'CSS3', 'Reusability'],
    category: 'HTML & CSS',
    github: 'https://github.com/your-username', // TODO: replace
    demo: '',
    status: 'planned',
  },
  {
    id: 'quiz-app',
    title: 'Quiz App UI',
    description:
      'Placeholder — a planned build. A small quiz interface with typed question models, score tracking, progress bar and result screen — focused on strict TypeScript types and clean component composition.',
    icon: Atom,
    gradient: 'g6',
    tags: ['TypeScript', 'React', 'State'],
    category: 'TypeScript',
    github: 'https://github.com/your-username', // TODO: replace
    demo: '',
    status: 'planned',
  },
];
