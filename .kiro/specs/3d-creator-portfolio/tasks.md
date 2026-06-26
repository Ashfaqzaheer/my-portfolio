# Implementation Plan: 3D Creator Portfolio Landing Page

## Overview

Implement a single-page React portfolio for "Jack" (a 3D creator) using Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide React. The page features a cinematic dark theme, scroll-driven animations, a magnetic hover portrait, marquee galleries, character-by-character text reveal, and sticky-stacking project cards.

## Tasks

- [x] 1. Project scaffolding and configuration
  - [x] 1.1 Initialize Vite project with React + TypeScript template
    - Run `npm create vite@latest . -- --template react-ts`
    - Install dependencies: `tailwindcss@^3.4.1`, `postcss`, `autoprefixer`, `framer-motion@^12.38.0`, `lucide-react@^0.344.0`
    - Install dev dependencies: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`, `fast-check`
    - Configure `tailwind.config.js` with content paths and extend fontFamily with Kanit
    - Configure `vite.config.ts` with test configuration (vitest, jsdom environment)
    - Add Google Fonts link for Kanit (weights 300-900) to `index.html`
    - Set document title to "Jack -- 3D Creator" in `index.html`
    - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 1.2, 1.6_

- [ ] 2. Global styles
  - [ ] 2.1 Create `src/index.css` with Tailwind directives and global styles
    - Add `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`
    - Add global reset: `box-sizing: border-box`, `margin: 0`, `padding: 0` on `*`
    - Set `#0C0C0C` background on `html`, `body`, `#root`
    - Set `font-family: 'Kanit', sans-serif` on body
    - Define `.hero-heading` class with gradient text effect: `background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%)`, `-webkit-background-clip: text`, `-webkit-text-fill-color: transparent`
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [ ] 3. Reusable animation and utility components
  - [ ] 3.1 Implement `src/components/FadeIn.tsx`
    - Accept props: `children`, `delay` (default 0), `y` (default 20), `className`
    - Use Framer Motion `motion.div` with `whileInView` trigger, `viewport: { once: true }`
    - Animate from `{ opacity: 0, y }` to `{ opacity: 1, y: 0 }` with `duration: 0.6, ease: 'easeOut'`
    - _Requirements: 12.1, 12.2, 12.3_

  - [ ] 3.2 Implement `src/components/Magnet.tsx`
    - Accept props: `children`, `padding` (default 150), `strength` (default 3), `activeTransition`, `inactiveTransition`
    - Track mouse position relative to element center
    - Translate children by `(deltaX / strength, deltaY / strength)` when cursor within padding area
    - Reset translation to (0, 0) on mouse leave with inactive transition
    - _Requirements: 5.2, 5.5, 5.6_

  - [ ] 3.3 Implement `src/components/AnimatedText.tsx`
    - Accept props: `text`, `className`
    - Use `useScroll` with target ref and offset `["start 0.9", "start 0.25"]`
    - Split text into characters, map each to a `motion.span` with opacity derived from `useTransform`
    - Each character's opacity maps sub-range `[i/N, (i+1)/N]` of scroll progress to `[0.2, 1]`
    - _Requirements: 8.4_

  - [ ] 3.4 Implement `src/components/ContactButton.tsx`
    - Accept props: `className`
    - Render pill-shaped button with linear-gradient background and white text
    - _Requirements: 11.1, 11.2_

  - [ ] 3.5 Implement `src/components/LiveProjectButton.tsx`
    - Accept props: `href`, `className`
    - Render pill-shaped anchor tag with transparent background, white border
    - Include external-link icon from Lucide React
    - _Requirements: 13.5_

  - [ ]* 3.6 Write property test for FadeIn animation parameters
    - **Property 7: FadeIn animation parameter mapping**
    - Generate random delay (≥ 0) and y offset values, verify initial state is `{ opacity: 0, y }` and whileInView state is `{ opacity: 1, y: 0 }` with correct delay
    - **Validates: Requirements 12.1, 12.3**

  - [ ]* 3.7 Write property test for Magnet displacement
    - **Property 1: Magnet displacement proportional to cursor position**
    - Generate random cursor positions within bounds, verify displacement equals `(cursorX - centerX) / strength` on X and `(cursorY - centerY) / strength` on Y
    - **Validates: Requirements 5.5**

  - [ ]* 3.8 Write property test for Magnet return to origin
    - **Property 2: Magnet returns to origin on cursor leave**
    - Generate random prior translate states, simulate leave event, verify translation returns to (0, 0)
    - **Validates: Requirements 5.6**

- [ ] 4. Checkpoint - Verify reusable components
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 5. Data files
  - [ ] 5.1 Create `src/data/projects.ts`
    - Define `Project` interface with `title`, `images` (string[]), and `link` fields
    - Export array of 3 projects: "Nextlevel Studio", "Aura Brand Identity", "Solaris Digital"
    - _Requirements: 10.2_

  - [ ] 5.2 Create `src/data/services.ts`
    - Define `Service` interface with `number` (string) and `title` fields
    - Export array of 5 services: "3D Modeling", "Rendering", "Motion Design", "Branding", "Web Design" with zero-padded numbers
    - _Requirements: 9.2, 9.3_

  - [ ] 5.3 Create marquee image arrays in `src/data/marquee.ts`
    - Export `row1Images` (first 11 GIF paths, tripled) and `row2Images` (remaining 10 GIF paths, tripled)
    - _Requirements: 7.4, 7.5_

  - [ ]* 5.4 Write property test for service sequential numbering
    - **Property 5: Service sequential numbering**
    - Generate random-length service arrays, verify numbering is zero-padded sequential: `String(i + 1).padStart(2, '0')`
    - **Validates: Requirements 9.3**

- [ ] 6. Section components - Hero
  - [ ] 6.1 Implement `src/components/Navbar.tsx`
    - Render four links: "About", "Price", "Projects", "Contact" with responsive font sizes
    - Style with color #D7E2EA, font-medium, uppercase, tracking-wider
    - Add hover opacity transition (70% on hover, 200ms)
    - Apply padding: px-6 md:px-10 pt-6 md:pt-8
    - _Requirements: 2.2, 2.3, 2.4, 2.5, 2.6_

  - [ ] 6.2 Implement `src/components/HeroSection.tsx`
    - Full viewport height, flex column layout, overflowX clip
    - Wrap Navbar in FadeIn (delay 0, y -20)
    - Render h1 "Hi, i'm jack" with .hero-heading class, responsive font sizes, wrapped in overflow-hidden and FadeIn (delay 0.15, y 40)
    - Render bottom bar with tagline paragraph (FadeIn delay 0.35, y 20) and ContactButton (FadeIn delay 0.5, y 20)
    - Render portrait image centered with Magnet wrapper (padding 150, strength 3) and FadeIn (delay 0.6, y 30)
    - Style portrait responsively: w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]
    - _Requirements: 2.1, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 4.1, 4.2, 4.3, 4.4, 4.5, 5.1, 5.2, 5.3, 5.4, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6_

- [ ] 7. Section components - Marquee
  - [ ] 7.1 Implement `src/components/MarqueeSection.tsx`
    - Use scroll event listener with `requestAnimationFrame` to compute offset
    - Calculate offset as `(window.scrollY - sectionTop + window.innerHeight) * 0.3`
    - Row 1: `translateX(offset - 200)` moving right; Row 2: `translateX(-(offset - 200))` moving left
    - Render images at 420×270px, rounded-2xl, object-cover, lazy loading, gap-3
    - Apply willChange: 'transform' for performance, passive scroll listener
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7_

  - [ ]* 7.2 Write property test for marquee bidirectional scroll offset
    - **Property 3: Marquee bidirectional scroll offset**
    - Generate random scrollY, sectionTop, windowHeight values; verify offset formula and row transforms
    - **Validates: Requirements 7.3, 7.4, 7.5**

- [ ] 8. Section components - About
  - [ ] 8.1 Implement `src/components/AboutSection.tsx`
    - Min-h-screen with centered content and responsive padding
    - Display four decorative 3D corner images with FadeIn animations
    - Render "About me" heading with .hero-heading class, responsive font-size clamp
    - Use AnimatedText component for the about paragraph
    - Include ContactButton below the text
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6_

  - [ ]* 8.2 Write property test for AnimatedText per-character opacity
    - **Property 4: AnimatedText per-character opacity from scroll progress**
    - Generate random strings (length N) and scroll progress [0, 1], verify opacity mapping per character
    - **Validates: Requirements 8.4**

- [ ] 9. Section components - Services
  - [ ] 9.1 Implement `src/components/ServicesSection.tsx`
    - White background (#FFFFFF) with rounded top corners
    - Display 5 service items in a vertical list with numbered items and visual separators
    - _Requirements: 9.1, 9.2, 9.3, 9.4_

- [ ] 10. Section components - Projects
  - [ ] 10.1 Implement `src/components/ProjectCard.tsx`
    - Accept props: `title`, `images`, `link`, `index`, `totalCards`, `range`, `targetScale`
    - Use `useScroll` with target ref and `useTransform` for scale animation
    - Apply sticky positioning with top offset calculated from index
    - Display image grid and LiveProjectButton
    - _Requirements: 10.3, 10.4, 10.5_

  - [ ] 10.2 Implement `src/components/ProjectsSection.tsx`
    - Dark background (#0C0C0C) with rounded top corners
    - Compute per-card targetScale: `1 - (totalCards - index) * 0.05`
    - Compute per-card range: `[index * (1 / totalCards), 1]`
    - Render 3 ProjectCard components with calculated props
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

  - [ ]* 10.3 Write property test for ProjectCard progressive scale
    - **Property 6: ProjectCard progressive scale calculation**
    - Generate random card counts and indices, verify targetScale formula `1 - (N - i) * 0.05` and range `[i * (1/N), 1]`
    - **Validates: Requirements 10.4**

- [ ] 11. App composition and section ordering
  - [ ] 11.1 Implement `src/App.tsx`
    - Render main wrapper with `bg-[#0C0C0C] text-white font-kanit` and `overflowX: 'clip'`
    - Render sections in order: HeroSection, MarqueeSection, AboutSection, ServicesSection, ProjectsSection
    - _Requirements: 1.1, 1.5, 14.1_

- [ ] 12. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- All image assets (portrait, marquee GIFs, about corner images) are assumed to be placed in `src/assets/` by the user
