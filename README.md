# Jiya Mehul Kothari — Aathai Parna Invitation

A single-page, mobile-first digital invitation built with React + Vite.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL on your phone (or your browser's mobile device
toolbar) — the experience is designed for a phone screen first.

## Replace the placeholder content

Two files are placeholders and are meant to be swapped without touching any code:

- **Jiya's photo** → `public/images/jiya.jpg`
  Replace this file with the real photograph, same filename. A square or
  portrait-orientation photo works best — it's shown inside a circular frame.

- **The song** → `public/music/jai-ho-jai-ho-tapasvi.mp3`
  Currently a silent placeholder so the music toggle works end-to-end.
  Drop in the real "Jai Ho Jai Ho Tapasvi" audio file with the same filename.

No other file needs to change for either swap.

## How the experience is structured

- `src/components/TempleGate.jsx` — the opening reveal (the religious
  invocation + the tap-to-open temple-gate animation). Music starts the
  moment the visitor taps, inside the same click handler, so mobile browsers
  don't block it.
- `src/sections/` — each part of the invitation in order (name, intro,
  photo, invitation line, date/time, venue + map, parking, RSVP, closing
  moment).
- `src/hooks/useAudioPlayer.js` — background music playback + mute toggle;
  fails silently if playback is blocked, so the site never breaks because of audio.
- `prefers-reduced-motion` is respected throughout — anyone with that OS
  setting on gets a calmer, near-instant version of the same experience.

## Deploy to Vercel

```bash
npm run build
```

Then deploy the project as-is (it's a static Vite app — Vercel will detect
it automatically). `vercel.json` is already included for correct routing.
No backend or environment variables are needed.
