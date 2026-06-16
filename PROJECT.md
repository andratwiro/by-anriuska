# Anriuska — Website Project

Reference / context file for building Anriuska's website. Started 2026-06-16.

## Who she is
- **Name:** Anriuska Bermúdez
- **Profession:** Hair & Nails Artist (uñas y peinados)
- **Service model:** A domicilio (mobile / at-home) in **Reus**, Catalonia, Spain
- **Origin:** Venezuelan — from **Maracaibo** (per her Facebook profile)
- **Instagram:** [@by_anriuska](https://www.instagram.com/by_anriuska/) — primary online presence (handle predates her move; not Catalan-style)
- **Facebook:** https://www.facebook.com/profile.php?id=100086228780175
- Client of the project owner (Rob / roberto@deltastudio.io) — she's his friend.

## Goal
Build her a website. Chosen features:
- Showcase her work (gallery/portfolio)
- Take bookings (real booking system, she manages availability)
- Show services & prices
- Contact / WhatsApp

## Decisions made
- **Language:** Spanish, mobile-first (most traffic via the IG link, on phones).
- **Tech:** Static site (plain HTML/CSS/JS). Free hosting (Netlify / GitHub Pages / Vercel).
- **Booking:** "Real booking system" requested. On a static site the clean path is an
  embedded third-party scheduler that *she* controls. Recommendation: **Cal.com**
  (free, open-source, mobile-friendly, self-managed availability). She creates a free
  account; we wire her booking link/username into the site. Placeholder until then.
- **Content source:** "Pull from her Instagram" — BUT both Instagram AND Facebook
  block automated scraping (login-gated; fetches only returned name + "Maracaibo").
  WORKAROUND: Claude can read image files. Owner to drop screenshots/downloads of her
  bio, price posts, and best work photos into this folder; Claude extracts text + uses
  the real photos. Until then, build with placeholders structured for easy swap-in.

## Planned site structure (one-page, mobile-first, Spanish)
1. **Hero** — brand/name, "Uñas y peinados a domicilio en Reus", WhatsApp/Reservar CTA
2. **Servicios y precios** — list with prices
3. **Galería** — best work
4. **Reservas** — Cal.com embed (booking)
5. **Contacto** — WhatsApp, Instagram, zona de servicio (Reus + alrededores)

## TODO — info still needed from Anriuska
- [ ] Real photos of her work (gallery) + a profile/hero photo
- [ ] Service list with durations + prices (uñas, peinados, etc.)
- [ ] WhatsApp number
- [ ] Cal.com account/username (or chosen booking tool) for the booking embed
- [ ] Brand preferences: colors, logo, vibe (if any)
- [ ] Domain name (if she wants a custom one)

## Visual direction & references (added 2026-06-16)
Aesthetic read from her own work + IG grid: **warm-elegant**, NOT loud nail-bar.
- **Palette:** cream/ivory base; dusty/powder blue + gold-leaf accent; deep wine red
  (good for CTAs); metallic teal/purple/navy as occasional pops. Glossy, tactile.
- **Mood:** personal, feminine, Caribbean/Mediterranean warmth (Maracaibo→Reus).
- **Work shown:** glossy gel nails (nudes, blues w/ gold flecks, wine, shimmer) +
  hair braids/trenzas/ondas (incl. kids). Gallery should read as a lookbook.

### Reference sites
- Closest lane (solo, soft palette, photo-led):
  - The Nail Studio – Shannon Scalise — shannonscalise.glossgenius.com (structure)
  - AKIKO Nails — akikonailsnyc.com (lookbook gallery, typography)
  - Local Honey — localhoneybk.com (warmth, live IG feed)
- Warm-luxe palette: QQ Nails (qqnailspa.com), Sugarcoat (sugarcoatbeauty.com),
  Paintbox (paint-box.com)
- Aspirational feel/motion (don't over-engineer static site): Mistretta Coiffure,
  Hair Me Up, Shen Beauty (all Awwwards)
- Booking alternatives to compare w/ Cal.com: Fresha, Treatwell, EasyWeek
  (free solo tier), SimplyBook.me

### Design recommendation
One elegant scrolling page; cream base + dusty-blue/gold accents + wine CTAs;
gallery as tight lookbook grid (IG squares drop in); sticky WhatsApp + Reservar.

## Environment
- Project folder: `/Users/rob/Documents/anriuska`
- Node v24.15.0 available
- Not a git repo yet
