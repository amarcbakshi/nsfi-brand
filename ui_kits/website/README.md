# nSFi Website — UI Kit

A high-fidelity React/JSX recreation of the New Social Forms marketing site (`newsocialforms.org`).

## Files

- `index.html` — runnable demo, loads React + Babel and composes the components below into the full marketing page.
- `Nav.jsx` — sticky top navigation with monogram + nav items + primary CTA.
- `Hero.jsx` — display headline, glyph row, full-bleed photograph hero block.
- `SectionMarker.jsx` — the symbol-prefixed eyebrow label (`‡Principles`, `~Format`, ...).
- `PrincipleCard.jsx` — image card with eyebrow + bold title + body, used for the three principles.
- `FormatList.jsx` — numbered activities list (Salons / Research / Prototyping).
- `SalonTopics.jsx` — 6-up grid of future session topics.
- `ContactForm.jsx` — interactive registration form with the brand's underline-input style.
- `Footer.jsx` — minimal footer with monogram + email + socials.

## Notes

- Photography from the live site is CORS-locked, so image slots render flat color blocks labelled with their filename (`chair-circle.jpg`, etc). Drop the real assets into `assets/img/` to replace.
- This is a hi-fi cosmetic recreation, not production code. The contact form is interactive (controlled inputs + submit confirmation) but doesn't post anywhere.
