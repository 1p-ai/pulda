---
name: Pulda Core
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#5f3f3b'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#946e69'
  outline-variant: '#e9bcb6'
  surface-tint: '#c0000d'
  primary: '#b7000c'
  on-primary: '#ffffff'
  primary-container: '#e60012'
  on-primary-container: '#fff7f6'
  inverse-primary: '#ffb4aa'
  secondary: '#555e74'
  on-secondary: '#ffffff'
  secondary-container: '#d9e2fd'
  on-secondary-container: '#5b647b'
  tertiary: '#5a5a55'
  on-tertiary: '#ffffff'
  tertiary-container: '#73736d'
  on-tertiary-container: '#fbf9f1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#930007'
  secondary-fixed: '#d9e2fd'
  secondary-fixed-dim: '#bdc6e0'
  on-secondary-fixed: '#111b2e'
  on-secondary-fixed-variant: '#3d475c'
  tertiary-fixed: '#e4e3db'
  tertiary-fixed-dim: '#c8c7bf'
  on-tertiary-fixed: '#1b1c17'
  on-tertiary-fixed-variant: '#474742'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  base: 8px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 128px
---

## Brand & Style

The design system for this web agency project is rooted in the "New Corporate" aesthetic—a blend of **Minimalism** and **High-Contrast Modernism**. It is designed to evoke a sense of precision, technical authority, and creative confidence. 

The brand personality is architectural and decisive. By utilizing a rigid grid and expansive whitespace (or "dark-space" in the dark theme), the UI communicates that the agency values clarity and intentionality in every pixel. The style rejects decorative fluff in favor of structural integrity, using the signature Agency Red as a sharp, surgical accent that signals action and importance.

Targeting tech-forward enterprises and startups, the emotional response is one of reliability mixed with a "cutting-edge" digital pulse.

## Colors

The palette is bifurcated into two distinct experiences, both anchored by the **Agency Red (#e60012)**. 

### Light Mode (The Ivory Canvas)
*   **Background:** Pure Ivory/Off-white (#fcfaf2). This provides a warmer, more premium feel than clinical white, reducing eye strain while maintaining high contrast.
*   **Primary Text:** Deep Navy (#101a2d). All headings and body text use this near-black blue to ensure maximum legibility and professional weight.
*   **Accents:** Agency Red is used sparingly—only for primary buttons, active states, and critical brand marks. No secondary reds or "washed out" tints are permitted.

### Dark Mode (The Deep Grid)
*   **Background:** Deep Navy (#101a2d). A saturated, dark environment that feels expansive.
*   **Primary Text:** Light Gray/White (#f8fafc) for crisp readability.
*   **Accents:** Agency Red is treated with a subtle "neon" energy. On titles or specific headers, it may utilize a 15-20px soft outer glow (0.3 opacity) to create a sense of depth and digital vibrancy without bleeding into pink tones.

## Typography

This design system uses **Hanken Grotesk** exclusively to maintain a cohesive, Swiss-inspired typographic hierarchy. The typeface choice offers a technical but accessible sans-serif look that performs exceptionally well in both high-density data and large-scale display formats.

*   **Display & Headlines:** Utilize tight tracking (negative letter spacing) and heavy weights (700-800) to create a "block" effect that feels structural.
*   **Body Copy:** Standard weights (400) with generous line heights (1.6) to ensure the agency's messaging is highly digestible.
*   **Labels:** Small-caps or all-caps styling with increased letter spacing is used for utility elements, such as breadcrumbs or metadata, to differentiate them from prose.
*   **Mobile Scaling:** For devices under 768px, `display-lg` should scale down to 40px and `headline-lg` to 32px to ensure no text overflow and maintain balance.

## Layout & Spacing

The layout is built on a **12-column fixed grid** for desktop, centered within the viewport. This creates a focused, editorial feel common in high-end design agencies.

*   **Grid Specs:** 12 columns, 24px gutters, and 64px side margins for desktop.
*   **Spacing Rhythm:** A strict 8px base unit is used for all internal component spacing (padding, gaps).
*   **Sectioning:** Large vertical gaps (128px+) are used between major content blocks to emphasize the "Minimalist" brand personality and allow the user's eyes to rest.
*   **Responsive Reflow:**
    *   **Tablet:** 8-column grid with 32px margins.
    *   **Mobile:** 4-column grid with 16px margins. Content stacks vertically; horizontal scrolling is strictly prohibited except for specific data tables or carousels.

## Elevation & Depth

This design system avoids traditional shadows in favor of **Tonal Layering** and **High-Contrast Outlines**.

*   **Light Mode:** Depth is created through subtle shifts in background color (e.g., a card using a slightly darker ivory or a very thin 1px navy border at 10% opacity). Surfaces should feel "flat" against the canvas.
*   **Dark Mode:** Depth is achieved through "Glow Accents." Strategic elements like active headlines or primary buttons may use a faint Agency Red glow to appear as if they are emitting light, creating a "Neon-Tech" feel. 
*   **Overlays:** Modals and menus use a high-blur (20px+) backdrop filter to create a glass-like separation from the main content without adding heavy drop shadows.

## Shapes

The shape language is **Sharp (0px)**. 

To reinforce the agency's professional and precise image, all buttons, input fields, cards, and image containers utilize 90-degree corners. This brutalist-lite approach distinguishes the product from the common "rounded/friendly" SaaS aesthetic, opting instead for an architectural, custom-built appearance. 

*Exception:* Signature brand icons or specific decorative elements may follow the organic brush strokes of the logo, but all structural UI elements must remain strictly rectangular.

## Components

### Buttons
*   **Primary:** Solid Navy (Light Mode) or Agency Red (Dark Mode). Sharp corners. No gradients.
*   **Secondary:** Outlined with a 2px stroke. Navy in Light Mode, White in Dark Mode.
*   **Hover State:** Solid Agency Red with white text. This is the only time the red is used "loudly."

### Input Fields
*   **Style:** Bottom-border only (2px thickness). Label sits above the field in `label-sm` typography. 
*   **Active State:** Border transitions to Agency Red.

### Cards
*   **Layout:** Content-heavy with generous internal padding (32px).
*   **Dark Mode Card:** Slightly lighter navy (#1a2638) than the background to create a "lifted" effect without shadows.

### Chips/Tags
*   **Style:** All-caps text, sharp border (1px), no background fill. Used for project categories or service tags.

### Lists
*   **Style:** Clean dividers (1px navy/white at 10% opacity). No bullets; instead, use 8px Agency Red squares for list markers to maintain the technical theme.