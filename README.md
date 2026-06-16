# by Anriuska — website

Static site for **Anriuska Bermúdez** — Hair & Nails Artist, uñas y peinados a domicilio en Reus.
Instagram: [@by_anriuska](https://www.instagram.com/by_anriuska/)

## Stack
Plain HTML + CSS + JS. No build step. Hosted on GitHub Pages.

## Local preview
Open `index.html` in a browser, or run a quick server:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Status
Initial deploy with **placeholder content**. See [`PROJECT.md`](PROJECT.md) for the
full plan and the TODO list (real photos, services/prices, WhatsApp number, booking).

## To finish
- **WhatsApp:** set `WHATSAPP` in `script.js` (intl format, no `+`, e.g. `34600112233`).
- **Photos:** replace `.gallery-item` placeholders with real `<img>` tags.
- **Services/prices:** edit the cards in `index.html#servicios`.
- **Booking:** embed Cal.com in `index.html#reservar`.
