import type { LucideIcon } from 'lucide-react';
import {
  AppWindow,
  Atom,
  Braces,
  Code2,
  FileCode2,
  GitBranch,
  Github,
  LayoutGrid,
  Palette,
  Zap,
} from 'lucide-react';

/**
 * Honest skill levels.
 *  - Comfortable: can build with it independently (80%+)
 *  - Improving  : solid basics, actively levelling up (60–79%)
 *  - Familiar   : know the fundamentals, still practising (<60%)
 */
export type SkillLevel = 'Comfortable' | 'Improving' | 'Familiar';

export interface Skill {
  name: string;
  icon: LucideIcon;
  /** Self-assessed level, 0–100. Kept honest on purpose. */
  level: number;
  levelLabel: SkillLevel;
  blurb: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'markup',
    title: 'Markup & Styling',
    subtitle: 'Structure & presentation',
    icon: Palette,
    skills: [
      {
        name: 'HTML5',
        icon: Code2,
        level: 85,
        levelLabel: 'Comfortable',
        blurb: 'Semantic markup & accessible page structure',
      },
      {
        name: 'CSS3',
        icon: Palette,
        level: 80,
        levelLabel: 'Comfortable',
        blurb: 'Flexbox, Grid, custom properties & animations',
      },
      {
        name: 'Bootstrap 5',
        icon: LayoutGrid,
        level: 78,
        levelLabel: 'Improving',
        blurb: 'Grid system, utilities & rapid prototyping',
      },
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Logic & type safety',
    icon: Braces,
    skills: [
      {
        name: 'JavaScript (ES6+)',
        icon: Braces,
        level: 72,
        levelLabel: 'Improving',
        blurb: 'DOM, events, array methods & async patterns',
      },
      {
        name: 'TypeScript',
        icon: FileCode2,
        level: 62,
        levelLabel: 'Improving',
        blurb: 'Types, interfaces & safer React code',
      },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Build',
    subtitle: 'Component-driven UI',
    icon: Atom,
    skills: [
      {
        name: 'React.js',
        icon: Atom,
        level: 68,
        levelLabel: 'Improving',
        blurb: 'Components, hooks & state-driven interfaces',
      },
      {
        name: 'Vite',
        icon: Zap,
        level: 66,
        levelLabel: 'Improving',
        blurb: 'Instant dev server & modern production builds',
      },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    subtitle: 'Daily drivers',
    icon: GitBranch,
    skills: [
      {
        name: 'Git',
        icon: GitBranch,
        level: 70,
        levelLabel: 'Improving',
        blurb: 'Branching, meaningful commits & clean history',
      },
      {
        name: 'GitHub',
        icon: Github,
        level: 70,
        levelLabel: 'Improving',
        blurb: 'Repositories, pull requests & project hosting',
      },
      {
        name: 'VS Code',
        icon: AppWindow,
        level: 88,
        levelLabel: 'Comfortable',
        blurb: 'Extensions, shortcuts & my daily editor',
      },
    ],
  },
];
