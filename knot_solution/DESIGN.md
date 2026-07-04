---
name: Knot & Solution
colors:
  surface: '#fff8f7'
  surface-dim: '#f6d2cd'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0ee'
  surface-container: '#ffe9e6'
  surface-container-high: '#ffe2de'
  surface-container-highest: '#ffdad5'
  on-surface: '#2a1614'
  on-surface-variant: '#5f3f3b'
  inverse-surface: '#412b28'
  inverse-on-surface: '#ffedea'
  outline: '#946e69'
  outline-variant: '#e9bcb6'
  surface-tint: '#c0000d'
  primary: '#b7000c'
  on-primary: '#ffffff'
  primary-container: '#e60012'
  on-primary-container: '#fff7f6'
  inverse-primary: '#ffb4aa'
  secondary: '#5f5e5f'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfe0'
  on-secondary-container: '#636263'
  tertiary: '#5a595a'
  on-tertiary: '#ffffff'
  tertiary-container: '#727273'
  on-tertiary-container: '#faf8f9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#930007'
  secondary-fixed: '#e5e2e3'
  secondary-fixed-dim: '#c8c6c7'
  on-secondary-fixed: '#1b1b1c'
  on-secondary-fixed-variant: '#474647'
  tertiary-fixed: '#e4e2e3'
  tertiary-fixed-dim: '#c8c6c7'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474748'
  background: '#fff8f7'
  on-background: '#2a1614'
  surface-variant: '#ffdad5'
  agency-red: '#E60012'
  senior-blue: '#3B42C4'
  surface-gray: '#F8F9FA'
  border-subtle: '#E5E7EB'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

This design system is built on the philosophy of "untying knots" (풀다). It balances the sophisticated, high-energy output of a modern digital agency with the empathetic, highly readable requirements of a career platform for seniors.

The style is **Minimalist / Corporate Modern**. It prioritizes clarity through generous whitespace and a rigorous grid, while injecting brand character through a vibrant, high-contrast primary red. The emotional response should be one of "Expertise and Care"—conveying that complex digital problems are handled with surgical precision and human warmth.

Key visual pillars:
- **Clarity:** Uncluttered layouts that allow content to breathe.
- **Precision:** Perfect alignment and crisp borders that signal technical competence.
- **Warmth:** High-quality photography and rounded UI elements that soften the corporate edge.

## Colors

The palette is anchored by a **Vibrant Red**, pulled directly from the brand’s heritage. This color is used strategically for primary actions, logos, and critical brand moments to maintain high energy.

To ground the design in professionalism, **Dark Gray** and **Clean White** serve as the primary structural colors. For the 'a4u' senior platform branch, a **Senior Blue** is introduced as a secondary functional color to differentiate career-related services while maintaining accessibility.

Neutral tones are kept cool and crisp to ensure the whitespace feels intentional and "premium" rather than empty.

## Typography

The typography system is designed for maximum legibility across demographics. 

**Hanken Grotesk** is used for headlines and labels to provide a sharp, technical, and modern agency feel. Its geometric precision reflects the "expertise" of the brand.

**Plus Jakarta Sans** is used for all body copy. It was selected for its friendly, open apertures and high x-height, which significantly improves readability for senior users on the 'a4u' platform without sacrificing the modern aesthetic.

Scale is used aggressively. Large display type is reserved for brand manifestos, while body sizes are slightly larger than the industry standard (18px for primary reading) to ensure inclusivity.

## Layout & Spacing

This design system utilizes a **12-column fixed grid** for desktop, centered within a container to maintain focus. 

The rhythm is defined by a "Section-First" approach, where vertical gaps between major content blocks (`section-gap`) are intentionally large (120px+) to create a gallery-like experience for portfolios and clear cognitive breaks for senior users.

**Responsive Behavior:**
- **Desktop (1280px+):** Full 12-column grid, 24px gutters, 64px side margins.
- **Tablet (768px - 1024px):** 8-column grid, 20px gutters, 40px side margins.
- **Mobile (<767px):** 4-column grid, 16px gutters, 20px side margins. Headlines scale down significantly to ensure no awkward line breaks.

## Elevation & Depth

To maintain a "Clean & Professional" agency feel, the system uses **Tonal Layering** and **Low-Contrast Outlines** rather than heavy shadows.

- **Surface Tiers:** Backgrounds are primarily white (`#FFFFFF`). Secondary content areas use a very soft gray (`#F8F9FA`) to create subtle separation.
- **Ghost Borders:** Cards and containers use 1px solid borders in `#E5E7EB`.
- **Soft Depth:** Shadows are reserved only for "floating" elements like Modals or Floating Action Buttons. These shadows must be highly diffused (20-40px blur) with a low opacity (5-10%) and a slight tint of the brand's Dark Gray to keep them feeling integrated.

## Shapes

The shape language is **Rounded**, striking a balance between the "sharpness" of technology and the "softness" of human-centric design.

- **Standard Elements:** Buttons, input fields, and small cards use a 0.5rem (8px) radius.
- **Large Containers:** Portfolio cards and section containers use a 1rem (16px) radius to feel more approachable.
- **Interactive Accents:** Small chips and tags may use a pill-shape (full radius) to distinguish them from functional buttons.

## Components

### Buttons
Buttons are high-contrast. The primary button is solid **Agency Red** with white text, featuring a subtle scale-up interaction on hover. The secondary button is a "Ghost" style with a 1px Dark Gray border.

### Cards
Portfolio and career cards use a crisp white background with a subtle `#E5E7EB` border. Content is padded generously (32px) to ensure titles and descriptions don't feel crowded. Images within cards should always have a top-only border radius of 1rem to match the container.

### Input Fields
Fields are minimalist: 1px light gray border that transitions to a 2px Agency Red border on focus. Labels are always positioned above the field in **Hanken Grotesk (Label-md)** for maximum clarity.

### Chips & Tags
Used for service categories (e.g., "Web Dev", "UX Design"). These use a soft gray background with Dark Gray text to remain secondary to primary actions.

### Navigation
The header is persistent (sticky) with a blur effect (`backdrop-filter: blur(10px)`) to provide a sense of modern depth without obscuring the content as the user scrolls.