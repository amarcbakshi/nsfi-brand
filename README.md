# nSFi — New Social Forms — Design System

> **(Re)Designing the Social Architectures of Human Connection**

New Social Forms (nSFi) is an initiative of the **MIT Center for Constructive Communication** at the MIT Media Lab, made possible by **Google Xi** (Google Experience Institute). It convenes artists, technologists, researchers, and civic actors to explore, prototype, and scale the social architectures that strengthen connection and collective agency.

This folder is a brand + UI design system for nSFi. Use it to make slides, prototypes, microsites, posters, social cards — anything that needs to look like nSFi.

**Sources used to build this system**

- GitHub: `amarcbakshi/nsfi-brand` (logos, fonts, brand guideline PDF, PPT template)
  - Logos in `Logos/SVG`, `Logos/PNG`, `Logos/JPEG`
  - Fonts in `Font/UN-11 Font` (UN-11ST by SourceType, commercial license — see EULA in repo) and `Font/Tiny Font` (TINY5x3, variable + static)
  - `Brand Guidelines/MIT_nSFi_Guidelines_V1.pdf` (binary, not extracted here — read directly if access is needed)
  - `PPT Template/nSFi_Presentation_Template.pptx` (binary, not extracted here)
- Live site: `https://newsocialforms.org` — fetched homepage copy, image references, navigation structure. Image assets on the site are CORS-locked, so we use placeholders where the real photographs would go.
- Contact: `hello@newsocialforms.org`

---

## What nSFi does

Three core activities, presented on the site as a numbered list with symbol suffixes:

1. **Salons \*** — intimate, cross-disciplinary in-person and virtual gatherings that *experience* new social forms rather than just discuss them.
2. **Research ◊** — a living database of social forms gathered through collective experimentation; open repository of definitions, principles, use cases, tested approaches.
3. **Prototyping []** — small grants and collaborative development for practitioners experimenting with rituals, tools, gathering formats, hybrid spaces.

Future Salon topics on the site: Decisionmaking spaces · Artworld spaces · Therapeutic spaces · Digital Life spaces · Enterprise spaces · Religious spaces.

---

## Index of this folder

| Path | What's there |
|---|---|
| `README.md` | This file. |
| `SKILL.md` | Front-matter wrapper so this system also works as an Agent Skill. |
| `colors_and_type.css` | All design tokens (color, type, spacing, radii, shadows, motion) + semantic typography classes. **Import this on every page.** |
| `Font/` | UN-11ST (primary) and TINY5x3 (accent) — WOFF2/WOFF/TTF. |
| `Logos/SVG`, `Logos/PNG`, `Logos/JPEG` | Wordmark variants (1-line, stacked, monogram), avatar, monogram-only. Black for light bg, white for dark bg. |
| `preview/` | Small HTML cards that populate the Design System tab — color, type, components, brand. |
| `ui_kits/website/` | High-fidelity React/JSX recreation of the New Social Forms marketing site. Open `ui_kits/website/index.html` to see the full page. |

---

## CONTENT FUNDAMENTALS

**Voice** — Plural-first, inviting, civic. nSFi writes in **first-person plural ("we")** and addresses the reader as **"you"**: *"We convene…"*, *"We'd love to hear from you."* No royal "I". Never ad-style or corporate.

**Tone** — Reflective and earnest. Comfortable with big words (*social architectures, ritualized reciprocity, collective meaning-making*) but never academic for its own sake. The headline asks "**Why?**" before it asserts. Questions are common: *"What if AI could be used as a site for collective understanding?"*. Statements are declarative but not boastful.

**Casing**

- **Sentence case for body and most headers**: *"A Living Map of Emerging Social Forms"* — title case is reserved for proper headers and product names.
- **Section markers are uppercase mono**: rendered in TINY5x3, prefixed with a symbol. See below.
- **Logo wordmark is lowercase** (`nsfi`) inside otherwise capitalized contexts.

**Symbol-prefixed section markers** are *the* signature copy device. Every major section on the site is labelled with a single non-alphabetic glyph + a one-word noun:

| Marker | Section | Glyph |
|---|---|---|
| `‡Principles` | the "why" / values | double dagger |
| `~Format` | how nSFi works | tilde |
| `*Salons` | upcoming gatherings | asterisk |
| `@About` | nav item | at-sign |
| `Salons *` | activity name with trailing glyph | asterisk |
| `Research ◊` | activity name | lozenge |
| `Prototyping []` | activity name | empty brackets |

When writing for nSFi, **invent new symbol+word combos** for new sections. Never use `#hashtag` style and never put a space between the symbol and the word in eyebrow form.

**Glyph palette** — the homepage opens with a list of free-floating symbols: `✓ 🐕 $ ⌣ # *`. Treat this as a vocabulary of "social tokens" — checkmarks, dollar, smile-mouth, hash, asterisk, dog emoji. Use them sparingly as standalone visual punctuation, never as decoration on every line.

**Pronouns** — "we" for nSFi as an organization, "you" for the reader, "they/people/participants/practitioners" for grantees and salon-goers. Avoid "users".

**Emoji** — used very sparingly, and only as concrete iconographic objects (the dog, the hand-drawn smile). Not as expressive UI affordance.

**Punctuation** — em dashes are common. Sentences can be short and assertive, or long and contemplative. Italics for proper nouns of programs (*DisCourse*, *AI Seances*, *Light Rituals*). No exclamation points except in calls to action.

**Examples (drop-in copy you can lift)**

- Eyebrow: `‡Principles` / `~Format` / `*Salons` / `@About`
- Headline: *"(Re)Designing the Social Architectures of Human Connection"*
- Subhead: *"A Living Map of Emerging Social Forms"*
- Microcopy: *"Don't fill this out if you are a human"* (anti-spam, dryly funny — the brand tolerates a bit of this)
- CTA: *"Join the Salon Series"*, *"Register"*, *"Send"* (verbs, plain).

---

## VISUAL FOUNDATIONS

**The look** — print-feeling, archival, slightly eccentric. Black ink on warm paper, with one loud chartreuse green for accent, and a tiny pixel font used as connective tissue between blocks. Equal parts MIT lab and zine.

**Color**

- **Primary ink**: pure black `#000` on a warm off-white paper `#FAFAF7`. Pure white reserved for cards and contrast moments.
- **Brand accent**: `#A7CC2E` — a chartreuse / acid-lime green sampled from the avatar. Use sparingly — for a single fill on a page, behind the monogram, behind a featured pull-quote, or as a button background. Not a gradient base.
- **Greens scale**: `#8FB320` (deep, hover state) and `#E8F2C2` (tint, soft backgrounds).
- **Greys**: a 5-step scale from `#000` to `#B8B8B8` plus a paper-warm `#F4F1E8`.
- **No purple/blue gradients. No pastel tints other than the green tint.** Imagery handles the warmth.

**Typography**

- **UN-11ST** (SourceType, commercial license) — primary for everything. Geometric, slightly architectural, very readable. Regular for body, Bold for display, Italic sparingly.
- **TINY5x3** — pixel/bitmap font used as an *accent*: section markers, eyebrows, captions, numerical labels, UI metadata. Always uppercase, always with a touch of letter-spacing. Never use it for body copy.
- **Type rhythm**: huge display headlines (60–128px) sit directly above tiny pixel labels, with little in between. The contrast is the point.

**Backgrounds** — solid colors only. Off-white paper for marketing pages, white for cards, black for inverse blocks. **No gradients, no textures, no glassmorphism.** Full-bleed photographs (chair-circle, AI seance scenes) are used as standalone hero moments — never overlaid with text or color washes.

**Imagery vibe** — warm, lived-in, slightly cinematic photography of real gatherings. Soft incandescent light. People mid-conversation. Tactile objects (stones, mirrors, tables). Not stock. When real photography isn't available, use a flat color block or a placeholder labelled with TINY5x3.

**Borders & rules** — hard 2–3px black rules under section markers; 1px hairlines `#E5E1D5` for cards. No dashed or dotted borders.

**Corner radii** — small. `2px` and `4px` are the workhorses. `8px` only for larger surfaces. `pill` (999px) is reserved for buttons / tags. **No big 16–24px rounded cards.**

**Cards** — paper-feeling: white surface, hairline border, very soft shadow (`0 1px 0` + `0 12px 32px -8px`). No heavy drop shadows.

**Shadows** — used minimally. Three steps: barely-there 1px line, soft elevation, paper-floating. Never colored shadows.

**Hover states** — text links shift to deep-green `#8FB320`. Buttons darken (green→deep-green, black→#1A1A1A) and never scale. No glow.

**Press states** — opacity 0.92 + a 1px translateY downward. Not a scale-shrink.

**Animation** — sparse and earnest. Fade + 8–12px translate-up on entry. Easing `cubic-bezier(0.22, 1, 0.36, 1)` (out-quart). 240ms is the default duration. **No bounces, no springs, no parallax.** The site has one signature interaction: shared cursors visible to other visitors — celebrate the social, not the flashy.

**Transparency / blur** — almost never. The aesthetic is opaque, printed, layered like paper, not glassy. The one allowed use: a header that gains a subtle white/96% opacity backdrop on scroll.

**Layout** — single column at small sizes, generous gutters at desktop. **Asymmetric grids** are encouraged for editorial moments (image left 60% / caption stack right 40%). Numbered lists use big numerals with TINY5x3 labels beside them, not bullet points.

**Fixed elements** — top nav stays sticky on scroll. No floating chat bubbles, no bottom CTAs.

---

## ICONOGRAPHY

nSFi's icon vocabulary is **typographic, not pictographic**. The system relies on:

- **Symbol prefixes** — `‡ ~ * @ ◊ []` rendered in UN-11ST or TINY5x3 right next to text. These ARE the icon system. Treat them as first-class brand elements, not decoration.
- **Glyph tokens** — `✓ 🐕 $ ⌣ # *` from the homepage hero, used as standalone "social objects." Available for poster/social moments.
- **Wordmark + monogram** — the bubble-letterform `nsfi` monogram is iconic in itself and can stand in for an icon at favicon / avatar / very small sizes.

**For UI affordances** (arrows, close, menu, mail, link-out) the brand has no committed system. We default to **Lucide** (`https://unpkg.com/lucide@latest`) at `1.5px` stroke — it matches the geometric, minimal feeling of UN-11ST. *This is a substitution; flag if the user wants the brand to commit to a different set.*

- No emoji as UI icons (only as content tokens, see above).
- No gradient or duotone icon styles.
- Stroke only, never filled, except for the brand monogram itself.
- Icon size pairs with type: 16px next to body text, 20px next to h6, 24px next to h5+.

Logo files live in `Logos/` (SVG preferred). Avatar is the lime-green square monogram — use this as favicon and social profile picture.

---

## Notes & caveats

- **Photography from the site couldn't be downloaded** (CORS-locked). The UI kit and slide layouts use solid placeholder boxes labelled "chair-circle", "principle-conversations", etc. Drop the real JPGs in `assets/img/` with those filenames and they'll appear automatically.
- **PDF brand guidelines + PPTX template** are in the source GitHub repo but not extracted here — they're large binaries. If you need them as ground truth, reference the repo directly or import them.
- **UN-11ST is a commercially-licensed font.** Read `Font/UN-11 Font/SourceType_EULA.pdf` (in the source repo) before using outside nSFi work.
- The **Lucide** icon set is a *substitution*, not the brand's official choice. Flagged.
