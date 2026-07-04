---
name: Kinetic Logic
colors:
  surface: '#200e0c'
  surface-dim: '#200e0c'
  surface-bright: '#4b3330'
  surface-container-lowest: '#1a0907'
  surface-container-low: '#2a1614'
  surface-container: '#2e1a18'
  surface-container-high: '#3a2422'
  surface-container-highest: '#462f2c'
  on-surface: '#ffdad5'
  on-surface-variant: '#e9bcb6'
  inverse-surface: '#ffdad5'
  inverse-on-surface: '#412b28'
  outline: '#af8782'
  outline-variant: '#5f3f3b'
  surface-tint: '#ffb4aa'
  primary: '#ffb4aa'
  on-primary: '#690003'
  primary-container: '#e60012'
  on-primary-container: '#fff7f6'
  inverse-primary: '#c0000d'
  secondary: '#c8c6c8'
  on-secondary: '#303032'
  secondary-container: '#474649'
  on-secondary-container: '#b7b4b7'
  tertiary: '#c8c6c7'
  on-tertiary: '#313031'
  tertiary-container: '#737273'
  on-tertiary-container: '#fcf8f9'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#930007'
  secondary-fixed: '#e4e2e4'
  secondary-fixed-dim: '#c8c6c8'
  on-secondary-fixed: '#1b1b1d'
  on-secondary-fixed-variant: '#474649'
  tertiary-fixed: '#e5e2e3'
  tertiary-fixed-dim: '#c8c6c7'
  on-tertiary-fixed: '#1c1b1c'
  on-tertiary-fixed-variant: '#474647'
  background: '#200e0c'
  on-background: '#ffdad5'
  surface-variant: '#462f2c'
  neon-red-glow: rgba(230, 0, 18, 0.4)
  text-dim: '#a1a1aa'
  border-subtle: rgba(255, 255, 255, 0.08)
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 48px
  section-gap: 120px
---

## Brand & Style

The design system moves away from aggressive, heavy contrasts toward a sophisticated **Technological Minimalism**. It targets forward-thinking enterprises and startups looking for a digital partner that balances technical prowess with approachable problem-solving.

The visual narrative is centered around the concept of "untying the knot"—moving from complexity to clarity. This is achieved through a **Corporate Modern** foundation infused with **Glassmorphism** and subtle **Neon/Vaporwave** accents. The interface should feel like a high-end command center: dark, precise, yet pulsing with enough light to feel alive. 

Key principles:
- **Atmospheric Depth:** Using layered dark surfaces rather than flat black.
- **Luminous Precision:** Using light as a functional guide, specifically through "Neon Glow" on interactive paths.
- **Structured Fluidity:** Generous whitespace (negative space) that allows technical content to breathe.

## Colors

The palette is anchored in a multi-layered dark mode. 

- **Base Background (#0a0a0b):** Used for the deepest layer of the UI, providing a void-like canvas that minimizes eye strain.
- **Surface Layer (#161618):** Used for cards, containers, and elevated sections to create structural hierarchy.
- **Brand Red (#e60012):** Reserved for high-impact actions and identity markers.
- **Neon Glow:** This is a functional effect rather than a static color. It should be applied as a `box-shadow` or `drop-shadow` using the `neon-red-glow` token to simulate light emitting from active components.
- **Typography:** Use Pure White (#FFFFFF) for primary headings and High-Contrast labels. Use `text-dim` (Zinc 400 equivalent) for long-form body text and metadata to ensure a "comfortable" reading experience.

## Typography

The typography uses **Hanken Grotesk** exclusively to maintain a cohesive, Swiss-inspired technical look. 

- **Hierarchy:** Dramatic scale differences between Display and Body levels emphasize the "untying" of complex information.
- **Spacing:** Headlines use slightly negative letter-spacing to feel more compact and "engineered." Labels use increased tracking and uppercase styling for better scannability in technical contexts.
- **Weight:** Use Bold (700) and SemiBold (600) for navigation and emphasis, keeping Regular (400) for all instructional and descriptive text.

## Layout & Spacing

The layout follows a **12-column fixed grid** for desktop, transitioning to a fluid single-column for mobile. 

- **The "Breathing" Principle:** Large `section-gap` values are intentional. To convey "solving" and "untying," the design requires significant vertical whitespace to prevent a cluttered, "heavy" feel.
- **Rhythm:** Spacing follows a base-8 scale. Use `stack-lg` for separating distinct content groups within a card or section.
- **Alignment:** Consistent left-alignment is preferred to maintain a structured, logical flow that mirrors code or technical documentation.

## Elevation & Depth

This system avoids traditional "fuzzy" shadows in favor of **Tonal Layering** and **Luminous Accents**.

1.  **Level 0 (Base):** `#0a0a0b` - The foundation.
2.  **Level 1 (Surfaces):** `#161618` - Used for cards. These should feature a 1px solid border using `border-subtle` to define the edges against the dark background.
3.  **Level 2 (Interactive):** Elements that are hovered or active don't just "lift" via Y-axis shadows; they emit light. Apply a `0px 0px 15px neon-red-glow` to active states to create the "Neon Glow" effect.
4.  **Glassmorphism:** For navigation bars and floating menus, use a background blur (12px to 20px) with a 60% opacity version of the Surface color to maintain context of the content beneath.

## Shapes

The shape language is **Soft (0.25rem/4px base)**. 

While the brand is technical, purely sharp corners (0px) can feel overly hostile. A subtle rounding (Soft) provides a "modern-industrial" feel—like machined hardware. 

- **Primary Components:** Use 4px for buttons and small input fields.
- **Containers:** Use `rounded-lg` (8px) for cards and main content areas to distinguish them from the UI's structural bones.
- **Interactive Points:** Circular shapes are reserved strictly for icons and status indicators to contrast against the otherwise rectilinear grid.

## Components

- **Primary Button:** Solid Brand Red background with white text. On hover, apply the `neon-red-glow` shadow and increase brightness by 10%.
- **Secondary/Ghost Button:** `border-subtle` with white text. On hover, the border becomes Brand Red with a faint internal glow.
- **Cards:** No traditional shadows. Use the `#161618` fill and a `border-subtle`. When the card is an entry point, the border transitions to Brand Red on hover.
- **Input Fields:** Darker than the surface layer (`#0a0a0b`), with a 1px border. Focus state triggers a Brand Red border and a micro-glow.
- **Chips/Tags:** Small, uppercase labels with a dark gray background and subtle borders. Used for categorizing tech stacks or services.
- **Progress/Status Indicators:** Use the Brand Red with a pulse animation (opacity 0.4 to 1.0) to signify "live" or "processing" states, leaning into the technical agency aesthetic.
- **The "Unknot" Divider:** Instead of a simple line, use a very thin gradient line that fades out toward the center, creating a sense of openness and space.