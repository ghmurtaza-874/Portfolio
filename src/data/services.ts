import type { LucideIcon } from 'lucide-react';
import {
  Atom,
  Boxes,
  MonitorSmartphone,
  MousePointerClick,
  Rocket,
} from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  /** Wide cards span more columns in the bento grid */
  wide?: boolean;
}

export const serviceItems: ServiceItem[] = [
  {
    title: 'Responsive Websites',
    description:
      'Mobile-first websites that look sharp on every screen — fluid typography, flexible grids, media queries and performance-conscious assets, tested from small phones to ultra-wide desktops.',
    icon: MonitorSmartphone,
    tags: ['Mobile-first CSS', 'Bootstrap 5 grid', 'Cross-browser'],
    wide: true,
  },
  {
    title: 'Modern React Interfaces',
    description:
      'Component-driven interfaces with React & TypeScript: predictable state with hooks, typed props and clean data flow that stays maintainable as it grows.',
    icon: Atom,
    tags: ['Hooks', 'Typed props'],
  },
  {
    title: 'Reusable Components',
    description:
      'Small, focused building blocks — buttons, cards, modals, forms — themed with CSS custom properties so they drop into any project.',
    icon: Boxes,
    tags: ['Props & variants', 'Design tokens'],
  },
  {
    title: 'Interactive UI Elements',
    description:
      'Micro-interactions that make a page feel alive: hover glows, scroll reveals, animated states and accessible keyboard support.',
    icon: MousePointerClick,
    tags: ['CSS animations', 'Accessibility'],
  },
  {
    title: 'Responsive Landing Pages',
    description:
      'Fast, focused landing pages with clear hierarchy, strong CTAs and honest, semantic markup — ready for your next idea.',
    icon: Rocket,
    tags: ['SEO-ready markup', 'Fast load'],
  },
];
