/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE FIRST ✏️
 *  Everything personal on the site lives here. Replace the
 *  placeholder name, email, location and social URLs with
 *  your own — no other file needs to change.
 * ─────────────────────────────────────────────────────────────
 */

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
}

export interface Profile {
  /** Display name shown in the hero, navbar and footer */
  name: string;
  /** Short version used for the navbar logo */
  firstName: string;
  /** Initials shown inside the hero avatar placeholder */
  initials: string;
  /** Main title under the hero heading */
  role: string;
  /** Subtitle sentence under the role */
  tagline: string;
  /** City / country label in the contact section */
  location: string;
  /** Contact email — also used for the mailto: fallback */
  email: string;
  /** Availability badge text in the hero */
  availability: string;
  /** Social profile URLs (use full https:// links) */
  socials: SocialLinks;
}

export const profile: Profile = {
  name: "Ghulam Murtaza", // TODO: replace with your name
  firstName: "GM",
  initials: "GM",
  role: "Frontend Developer",
  tagline: "Building Modern Web Experiences with React & TypeScript.",
  location: "Hyderabaad, Pakistan",
  email: "ghmurtaza874@gmail.com",
  availability: "Open to junior frontend roles & freelance work",
  socials: {
    github: "https://github.com/your-username", // TODO: replace
    linkedin: "https://www.linkedin.com/in/your-username", // TODO: replace
    twitter: "https://twitter.com/your-username", // TODO: replace
  },
};
