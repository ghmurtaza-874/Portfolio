import type { LucideIcon } from 'lucide-react';
import { Atom, Braces, FileCode2, GitBranch, Palette } from 'lucide-react';

export interface JourneyItem {
  /** e.g. “Phase 01” */
  phase: string;
  /** Short theme label, e.g. “Foundations” */
  period: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  /** Marks the milestone currently being worked on */
  current?: boolean;
}

export const journeyItems: JourneyItem[] = [
  {
    phase: 'Phase 01',
    period: 'The beginning',
    title: 'HTML5 & CSS3',
    description:
      'Started with semantic markup, the box model, Flexbox and Grid — and got hooked on turning blank pages into responsive layouts that work on any screen.',
    icon: Palette,
    tags: ['Semantic HTML', 'Flexbox & Grid', 'Media queries'],
  },
  {
    phase: 'Phase 02',
    period: 'Making it move',
    title: 'JavaScript ES6+',
    description:
      'Brought pages to life: DOM manipulation, events, array methods, fetch and modern ES6+ syntax. Learned to love the console and read error messages properly.',
    icon: Braces,
    tags: ['DOM & events', 'ES6+ syntax', 'Fetch API'],
  },
  {
    phase: 'Phase 03',
    period: 'Working like a dev',
    title: 'Git, GitHub & Workflow',
    description:
      'Added version control to everything: meaningful commits, branches, pull requests and publishing projects with GitHub Pages. My commit history finally makes sense.',
    icon: GitBranch,
    tags: ['Version control', 'Pull requests', 'GitHub Pages'],
  },
  {
    phase: 'Phase 04',
    period: 'Levelling up',
    title: 'TypeScript',
    description:
      'Types, interfaces, unions and generics — catching bugs before the code ever runs. Now defaulting to TypeScript for every new React project.',
    icon: FileCode2,
    tags: ['Types & interfaces', 'Generics', 'Strict mode'],
  },
  {
    phase: 'Phase 05',
    period: 'Where I am now',
    title: 'React, Vite & Bootstrap 5',
    description:
      'Thinking in components: hooks, props and state, with Vite for instant feedback and Bootstrap 5 for solid responsive layouts. Building real interfaces — including this portfolio.',
    icon: Atom,
    tags: ['Components & hooks', 'State & props', 'Vite tooling'],
    current: true,
  },
];
