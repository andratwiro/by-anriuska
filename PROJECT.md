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
- **Booking:** "Real booking system" requested — embedded third-party scheduler she
  controls, wired into the static site. **DECISION (2026-06-16): SimplyBook.me**, not
  Cal.com. Anriuska's requirements: pick a service w/ price tag, per-service durations
  (manos vs manos+pies = longer), **attach a photo at booking** (client inspo), and
  later **deposit/prepay** to cut no-shows. Photo-upload-at-booking is the decider:
  Cal.com's file upload is an unshipped feature request; Square has no upload during
  booking; Fresha undocumented. SimplyBook.me does all four + Spanish + Google Calendar
  sync + embeddable widget we can style to her palette.
  - PRICING VERIFIED 2026-06-16 (simplybook.me/en/pricing):
    - Free €0: 50 bookings/mo, 1 premium-feature slot.
    - Basic ~€12/mo: 100 bookings/mo, 3 slots (Payments/Deposits incl.).
    - Standard ~€25/mo: 500 bookings, 8 slots. Premium ~€50/mo: 2000, unlimited.
    - Intake Forms, Calendar Sync, Deposits are EACH premium features (eat a slot).
    - API access is PREMIUM-ONLY (~€50/mo) → bulk-loading the menu via API key is
      NOT viable on Free/Basic. Set the menu up manually in the UI (small menu, fine).
  - PLAN: start on FREE. Spend the 1 slot on the photo-upload Intake Form (her
    must-have). Gets full service menu + prices + durations + SimplyBook's own booking
    calendar. Trade-off: no Google Calendar 2-way sync (use SimplyBook app), no deposits.
  - Phase 1 (launch, FREE): service menu + prices + durations + photo-upload intake.
  - Phase 2 (busier/regularised → Basic ~€12/mo, 3 slots): add Calendar Sync + Deposits.
    No rebuild. Claude to prep exact menu (service / duration / price / field config)
    for manual entry + step-by-step setup instructions.
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

## Anriuska's REAL brand identity (from her own assets, 2026-06-16)
She already has a professional visual identity — this is the real direction (option 3).
- **Wordmark:** `ANRIUSKA` in a high-contrast Trajan-style serif (Cinzel-like), with
  `Bermúdez` in a fine looping script overlapping beneath/right.
- **Monogram:** intertwined `AB` inside a thin line circle, tagline *"Alcanzando tu
  máxima belleza"* curved around it.
- **Tagline:** "Alcanzando tu máxima belleza"
- **Palette:** midnight navy (#16233b), deep wine/burgundy (#6b1f2b), warm greige/taupe
  (#c3bcb2), cream (#f4efe8), silver. Elegant/editorial/premium — NOT festival.
- **Motifs:** organic blob shapes with dashed-stitch outlines, fine line circles,
  generous negative space.
- **She has a physical studio too** (black salon, geometric LED lighting, ring light,
  styling chairs) — not only a domicilio. Messaging can mention both.
- **Real service menu:**
  - *Uñas:* Recubrimiento de Polygel en uña natural con encapsulados (+ manicura
    semiperm., acrílicas/gel, nail art, pedicura).
  - *Cabello:* Lavado, Hidratación profunda, Secado, Planchado, Ondas, Tinturado,
    Corte de puntas, Cortes elaborados en capas, Ondas al agua, Ondas Sirena con
    máquina, Limpieza de horquetillas. ("Consulta todos nuestros precios.")
- Her photo saved as `anri.png` (1080×1080).

## Three style options (switcher at bottom of every page)
Built 3 full self-contained themes; switcher toggles between them for comparison:
1. `index.html` + `styles.css` — **✨ Festival**: dark tropical glitter maximalism
   (sparkle cursor, neon, Y2K). Aleida's note: "festival modernillo", not enough sabor latino.
2. `retro.html` + `retro.css` — **📼 Retro Latino**: warm early-2000s (papel picado,
   Pacifico, polaroid, mango/turquoise/coral, beveled buttons).
3. `brand.html` + `brand.css` — **🤍 Marca**: her ACTUAL elegant brand identity above.
   **← recommended direction.**
Shared `script.js` (guarded so festival-only fx don't break the other pages).
Open naming question: lead with "ANRIUSKA Bermúdez" (her brand) vs "by Anriuska" (IG handle).

## Environment
- Project folder: `/Users/rob/Documents/anriuska`
- Node v24.15.0 available
- Repo: github.com/andratwiro/by-anriuska (public) · live: https://andratwiro.github.io/by-anriuska/
