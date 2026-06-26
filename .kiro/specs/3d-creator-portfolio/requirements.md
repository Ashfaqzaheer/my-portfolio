# Requirements Document

## Introduction

A 3D Creator portfolio landing page for "Jack" built with React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React. The page features a dark theme, scroll-driven animations, a magnetic hover effect on the hero portrait, a marquee image gallery, character-by-character text reveal, and sticky-stacking project cards.

## Glossary

- **Page**: The single-page React application serving as Jack's portfolio landing page
- **HeroSection**: The full-viewport introductory section containing navigation, heading, portrait, and tagline
- **MarqueeSection**: A section with two rows of horizontally scrolling image tiles driven by page scroll
- **AboutSection**: A section with a character-by-character scroll-animated paragraph about Jack
- **ServicesSection**: A white-background section listing five services with numbered items
- **ProjectsSection**: A dark section with sticky-stacking project cards that scale on scroll
- **ContactButton**: A reusable gradient pill-shaped button component
- **LiveProjectButton**: A reusable ghost/outline pill-shaped button component
- **FadeIn**: A reusable Framer Motion wrapper component that animates children into view
- **Magnet**: A component that creates a mouse-following magnetic hover effect on its children
- **AnimatedText**: A component that reveals text character-by-character based on scroll progress
- **Navbar**: The horizontal navigation bar within the HeroSection

## Requirements

### Requirement 1: Global Styles and Theme

**User Story:** As a visitor, I want the page to have a consistent dark theme with the Kanit font, so that the portfolio feels polished and cohesive.

#### Acceptance Criteria

1. THE Page SHALL use #0C0C0C as the background color on html, body, #root, and the main wrapper elements
2. THE Page SHALL use 'Kanit' (Google Fonts, weights 300-900) as the font family with sans-serif as fallback
3. THE Page SHALL apply a global reset with box-sizing border-box, margin 0, and padding 0
4. THE Page SHALL define a CSS class .hero-heading that applies a gradient text effect using background linear-gradient(180deg, #646973 0%, #BBCCD7 100%) with -webkit-background-clip: text and -webkit-text-fill-color: transparent
5. THE Page SHALL set overflowX to 'clip' on the main wrapper element
6. THE Page SHALL set the document title to "Jack -- 3D Creator"

### Requirement 2: Hero Section Layout and Navigation

**User Story:** As a visitor, I want to see a dramatic full-screen hero with navigation links, so that I can quickly understand who Jack is and navigate the page.

#### Acceptance Criteria

1. THE HeroSection SHALL occupy the full viewport height (h-screen) with a flex column layout and overflowX clip
2. THE Navbar SHALL display four links ("About", "Price", "Projects", "Contact") in a horizontal layout with justify-between spacing
3. THE Navbar SHALL style links with color #D7E2EA, font-medium weight, uppercase text, and tracking-wider letter spacing
4. THE Navbar SHALL use responsive font sizes: text-sm on mobile, md:text-lg on medium screens, and lg:text-[1.4rem] on large screens
5. THE Navbar SHALL apply padding px-6 md:px-10 pt-6 md:pt-8
6. WHEN a visitor hovers over a Navbar link, THE Navbar SHALL reduce the link opacity to 70% with a 200ms transition

### Requirement 3: Hero Section Heading

**User Story:** As a visitor, I want to see a massive gradient heading introducing Jack, so that the first impression is visually striking.

#### Acceptance Criteria

1. THE HeroSection SHALL display an h1 element with the text "Hi, i'm jack" using lowercase "i" and a curly apostrophe character (&apos;)
2. THE HeroSection SHALL apply the .hero-heading gradient text class to the h1 element
3. THE HeroSection SHALL style the h1 with font-black weight, uppercase, tracking-tight, leading-none, whitespace-nowrap, and w-full
4. THE HeroSection SHALL use responsive font sizes on the h1: text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]
5. THE HeroSection SHALL apply responsive margin top to the h1: mt-6 sm:mt-4 md:-mt-5
6. THE HeroSection SHALL wrap the h1 in an overflow-hidden container

### Requirement 4: Hero Section Bottom Bar

**User Story:** As a visitor, I want to see Jack's tagline and a contact button at the bottom of the hero, so that I understand his value proposition and can reach out.

#### Acceptance Criteria

1. THE HeroSection SHALL display a bottom bar with flexbox justify-between, items-end, and padding pb-7 sm:pb-8 md:pb-10
2. THE HeroSection SHALL display a left-aligned paragraph with text "a 3d creator driven by crafting striking and unforgettable projects"
3. THE HeroSection SHALL style the paragraph with color #D7E2EA, font-light, uppercase, tracking-wide, leading-snug, and font-size clamp(0.75rem, 1.4vw, 1.5rem)
4. THE HeroSection SHALL constrain the paragraph width with max-w-[160px] sm:max-w-[220px] md:max-w-[260px]
5. THE HeroSection SHALL display a ContactButton component on the right side of the bottom bar

### Requirement 5: Hero Portrait with Magnetic Effect

**User Story:** As a visitor, I want the hero portrait to follow my cursor slightly, so that the page feels interactive and engaging.

#### Acceptance Criteria

1. THE HeroSection SHALL display Jack's portrait image centered absolutely using left-1/2 -translate-x-1/2 with z-10
2. THE Magnet component SHALL wrap the portrait image with padding 150, strength 3, activeTransition "transform 0.3s ease-out", and inactiveTransition "transform 0.6s ease-in-out"
3. THE HeroSection SHALL size the portrait responsively: w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]
4. THE HeroSection SHALL position the portrait on mobile at top-1/2 -translate-y-1/2, and on sm+ screens at sm:top-auto sm:translate-y-0 sm:bottom-0
5. THE Magnet component SHALL translate its children toward the mouse cursor position when the cursor is within the padding area
6. WHEN the cursor leaves the Magnet padding area, THE Magnet component SHALL smoothly return children to their original position using the inactiveTransition timing

### Requirement 6: Hero Section Animations

**User Story:** As a visitor, I want elements to fade in sequentially when the page loads, so that the experience feels polished and intentional.

#### Acceptance Criteria

1. THE FadeIn component SHALL animate the Navbar with delay 0 and y offset -20
2. THE FadeIn component SHALL animate the hero heading with delay 0.15 and y offset 40
3. THE FadeIn component SHALL animate the left tagline text with delay 0.35 and y offset 20
4. THE FadeIn component SHALL animate the ContactButton with delay 0.5 and y offset 20
5. THE FadeIn component SHALL animate the portrait with delay 0.6 and y offset 30
6. THE FadeIn component SHALL use Framer Motion whileInView to trigger animations when elements enter the viewport

### Requirement 7: Marquee Section

**User Story:** As a visitor, I want to see a gallery of animated GIF tiles that scroll based on my page scroll, so that Jack's work is showcased in an engaging way.

#### Acceptance Criteria

1. THE MarqueeSection SHALL use background #0C0C0C with padding pt-24 sm:pt-32 md:pt-40 and pb-10
2. THE MarqueeSection SHALL display two rows of image tiles that move horizontally based on page scroll position
3. THE MarqueeSection SHALL calculate scroll offset as (window.scrollY - sectionTop + window.innerHeight) * 0.3
4. THE MarqueeSection SHALL move Row 1 (first 11 images, tripled) to the RIGHT using translateX(offset - 200)
5. THE MarqueeSection SHALL move Row 2 (remaining 10 images, tripled) to the LEFT using translateX(-(offset - 200))
6. THE MarqueeSection SHALL render each image tile at 420px width, 270px height, with rounded-2xl corners, object-cover fit, and lazy loading
7. THE MarqueeSection SHALL use gap-3 between tiles and willChange: 'transform' for performance

### Requirement 8: About Section

**User Story:** As a visitor, I want to read about Jack's experience through an animated text reveal, so that the content feels dynamic and draws me in.

#### Acceptance Criteria

1. THE AboutSection SHALL occupy min-h-screen with centered content and padding px-5 sm:px-8 md:px-10 py-20
2. THE AboutSection SHALL display four decorative 3D images positioned absolutely in corners with FadeIn animations
3. THE AboutSection SHALL display an "About me" heading using the .hero-heading gradient text class, font-black, uppercase, and centered with font-size clamp(3rem, 12vw, 160px)
4. THE AnimatedText component SHALL animate each character from opacity 0.2 to opacity 1 based on scroll progress through the section
5. THE AboutSection SHALL display a ContactButton below the animated paragraph
6. THE AnimatedText component SHALL contain text describing 5 years of design experience

### Requirement 9: Services Section

**User Story:** As a visitor, I want to see a clear list of services Jack offers, so that I can understand his capabilities.

#### Acceptance Criteria

1. THE ServicesSection SHALL use a white background (#FFFFFF) with rounded top corners
2. THE ServicesSection SHALL display five service items in a vertical list: "3D Modeling", "Rendering", "Motion Design", "Branding", "Web Design"
3. THE ServicesSection SHALL number each service item sequentially
4. THE ServicesSection SHALL visually separate each service item in the list

### Requirement 10: Projects Section

**User Story:** As a visitor, I want to browse featured projects with sticky-stacking cards, so that I can see Jack's portfolio work in an engaging layout.

#### Acceptance Criteria

1. THE ProjectsSection SHALL use dark background (#0C0C0C) with rounded top corners
2. THE ProjectsSection SHALL display three project cards: "Nextlevel Studio", "Aura Brand Identity", and "Solaris Digital"
3. THE ProjectsSection SHALL implement sticky positioning on project cards so they stack as the user scrolls
4. WHEN a project card scrolls beneath the next card, THE ProjectsSection SHALL scale down the previous card to create a depth effect
5. THE ProjectsSection SHALL display an image grid within each project card

### Requirement 11: ContactButton Component

**User Story:** As a visitor, I want a visually distinct contact button, so that I can easily find how to reach Jack.

#### Acceptance Criteria

1. THE ContactButton SHALL render as a gradient pill-shaped button
2. THE ContactButton SHALL be reusable across multiple sections (HeroSection, AboutSection)

### Requirement 12: FadeIn Animation Component

**User Story:** As a developer, I want a reusable fade-in animation wrapper, so that I can consistently animate elements throughout the page.

#### Acceptance Criteria

1. THE FadeIn component SHALL accept delay and y offset parameters to customize animation timing and direction
2. THE FadeIn component SHALL use Framer Motion's whileInView trigger to start animations when the element enters the viewport
3. THE FadeIn component SHALL animate from opacity 0 to opacity 1 combined with the specified y translation

### Requirement 13: Technology Stack

**User Story:** As a developer, I want the project to use a specific technology stack, so that the codebase is modern and maintainable.

#### Acceptance Criteria

1. THE Page SHALL be built with React (^18.3.1) and React DOM (^18.3.1)
2. THE Page SHALL use TypeScript for type safety
3. THE Page SHALL use Tailwind CSS (^3.4.1) for styling
4. THE Page SHALL use Framer Motion (^12.38.0) for animations
5. THE Page SHALL use Lucide React (^0.344.0) for icons
6. THE Page SHALL use Vite as the build tool and development server

### Requirement 14: Section Order

**User Story:** As a visitor, I want the page sections to appear in a logical order, so that the narrative flows naturally from introduction to portfolio.

#### Acceptance Criteria

1. THE Page SHALL render sections in the following order: HeroSection, MarqueeSection, AboutSection, ServicesSection, ProjectsSection
