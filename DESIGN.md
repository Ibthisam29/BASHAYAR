---
name: "Bashayar Editorial Reserve"
description: "A refined, multidisciplinary editorial design system for Bashayar.com, balancing deep emerald, champagne gold, and warm ivory for timeless academic and creative clarity."
---

## Overview

Bashayar Editorial Reserve is designed for a multidisciplinary professional whose work spans psychology, counselling, research, literature, film, and community participation. Grounded in the philosophy that human dignity and worth exist independent of mere productivity or titles ("You don't have to be something in order to be something"), the visual style embodies calm intellect, literary warmth, and quiet prestige.

The aesthetic embraces high-end editorial minimalism: generous whitespace, elegant serif display typography paired with crisp humanist sans-serif body copy, subtle champagne-gold celestial accents, and structured reading layouts. Reading areas prioritize ivory and soft warm paper tones, while deep emerald is reserved for key navigation framing, accents, and authoritative focal moments.

## Colors

The palette establishes an authoritative deep emerald green primary, accented with champagne gold reflecting the celestial four-point star emblem, grounded upon ivory/warm paper neutrals.

- **Emerald Green (`#0A3428` / `#114232`):** Grounded, tranquil, intellectual depth representing counselling, psychology, and academic stewardship.
- **Champagne Gold (`#C8A348` / `#E5C365`):** Warm celestial accent for badges, stars, delicate borders, and curated highlights.
- **Warm Ivory / Paper (`#FAF9F6`):** Generous, restful reading canvas avoiding harsh high-contrast white.

```yaml
colors:
  emerald-deep: "#092E23"
  emerald-base: "#114232"
  emerald-muted: "#204F3E"
  gold-accent: "#C8A348"
  gold-light: "#F4E8C1"
  ivory-paper: "#FAF9F6"
  charcoal-text: "#1D2320"
  muted-gray: "#58625D"
  border-soft: "#E4E9E5"
  light:
    primary: "#0D382A"
    on-primary: "#FFFFFF"
    primary-container: "#194D3B"
    on-primary-container: "#BCEBD7"
    secondary: "#6B5400"
    on-secondary: "#FFFFFF"
    secondary-container: "#FFE088"
    on-secondary-container: "#4A3900"
    tertiary: "#57423F"
    on-tertiary: "#FFFFFF"
    surface: "#FAF9F6"
    on-surface: "#1A1C1B"
    surface-variant: "#ECEEEA"
    on-surface-variant: "#434B46"
    outline: "#758079"
    outline-variant: "#D3DCD6"
    error: "#BA1A1A"
    on-error: "#FFFFFF"
  dark:
    primary: "#A0D1BB"
    on-primary: "#033828"
    primary-container: "#114232"
    on-primary-container: "#7EAE99"
    secondary: "#E9C349"
    on-secondary: "#3C2F00"
    secondary-container: "#AF8D11"
    on-secondary-container: "#281E00"
    tertiary: "#F9B6B0"
    on-tertiary: "#4E2421"
    surface: "#111413"
    on-surface: "#E3E2E0"
    surface-variant: "#363E3A"
    on-surface-variant: "#C0C8C3"
    outline: "#8A938D"
    outline-variant: "#414944"
    error: "#FFB4AB"
    on-error: "#690005"
```

## Typography

The design system uses a refined, modern sans-serif typography pairing: **Plus Jakarta Sans** for editorial display titles and section headlines, paired with **Inter** for crisp, highly readable body prose, metadata labels, and UI controls.

```yaml
typography:
  display-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 56px
    letterSpacing: -0.5px
  display-lg-mobile:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 40px
    letterSpacing: -0.25px
  display-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 38px
    fontWeight: 600
    lineHeight: 46px
    letterSpacing: -0.25px
  display-md-mobile:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 36px
    letterSpacing: 0px
  headline-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 34px
    fontWeight: 600
    lineHeight: 42px
    letterSpacing: -0.25px
  headline-lg-mobile:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 26px
    fontWeight: 600
    lineHeight: 34px
    letterSpacing: 0px
  headline-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 26px
    fontWeight: 500
    lineHeight: 34px
    letterSpacing: 0px
  headline-sm:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 21px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: 0px
  title-lg:
    fontFamily: "Inter"
    fontSize: 19px
    fontWeight: 600
    lineHeight: 26px
    letterSpacing: 0px
  title-md:
    fontFamily: "Inter"
    fontSize: 17px
    fontWeight: 600
    lineHeight: 24px
    letterSpacing: 0.15px
  title-sm:
    fontFamily: "Inter"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 22px
    letterSpacing: 0.1px
  body-lg:
    fontFamily: "Inter"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 27px
    letterSpacing: 0.25px
  body-md:
    fontFamily: "Inter"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0.25px
  body-sm:
    fontFamily: "Inter"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0.25px
  label-lg:
    fontFamily: "Inter"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 0.5px
  label-md:
    fontFamily: "Inter"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 18px
    letterSpacing: 0.5px
  label-sm:
    fontFamily: "Inter"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0.5px
```

## Layout & Spacing

Layout follows a disciplined editorial grid with generous negative space. Desktop pages use a constrained max-width container (max 1140px) centered on screen with comfortable gutters, ensuring essays, portfolio entries, and biography narratives maintain optimal line lengths.

```yaml
spacing:
  gutter-xs: 4px
  gutter-sm: 8px
  gutter-md: 16px
  gutter-lg: 24px
  gutter-xl: 32px
  section-sm: 48px
  section-lg: 80px
  page-margin: 24px
```

## Elevation & Depth

Visual hierarchy is communicated through soft tonal contrasts, gentle 1px borders in tinted emerald-slate, and whisper-soft ambient shadows rather than stark elevation. Surfaces feel like archival paper sheets or book plates.

## Shapes

Shapes are timeless and tailored: crisp corners on structural panels with soft 6px to 10px rounded corners on badges, chips, and interactive buttons. Pill shapes are reserved for status indicators (e.g. Completed, Ongoing, Submitted).

```yaml
rounded:
  sm: 4px
  DEFAULT: 8px
  md: 10px
  lg: 14px
  xl: 20px
  full: 9999px
```

## Motion & Micro-interaction

Micro-interactions are restrained, gentle, and quiet. Hover states subtly shift opacity, border tone, or champagne-gold accents without bouncy or exaggerated motion.

```yaml
motion:
  state-change:
    duration: 150ms
    delay: 0ms
    timingFunction: ease-out
  surface-enter:
    duration: 250ms
    delay: 0ms
    timingFunction: cubic-bezier(0.16, 1, 0.3, 1)
```

## Voice & Content Strategy

The voice of Bashayar is warm, gentle, intellectually grounded, and dignified. Introductions are written in third-person professional phrasing. Claims are strictly evidence-based, avoiding self-promotional hyperbole or corporate jargon. Clear status chips distinguish between 'Completed', 'Ongoing', and 'Submitted'. Mandatory clinical disclaimer clarifies that website content is educational and not individual psychological advice.

## Components

Component implementations live as individual HTML sticker sheet files in
`components/`. Each file contains the canonical, styled HTML components with
`<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Badge** → `@components/badge.html`: `badge-numeric`, `badge-dot`
- **Button** → `@components/button.html`: `button-primary`, `button-icon`, `button-with-icon`
- **Card** → `@components/card.html`: `card-elevated`, `card-action`, `card-interactive`, `card-interactive-2`
- **Typography** → `@components/typography.html`: `typography-display`, `typography-body`, `typography-label`
