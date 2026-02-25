# Dominik Ziarno — Founder Diary

Personal portfolio and founder journey tracker. A single-page website documenting the path from zero to $1M in revenue as an aspiring solopreneur.

## What's on the page

- **Hero** — short intro: Head of Product Delivery at MasterBorn, building side projects on the side
- **Revenue goals** — live progress bar tracking MRR milestones ($200 → $250k → $1M), goals unlock as they're hit
- **Projects** — collapsible cards for each project, with description, key learnings, and tags:
  - [racefolio.app](https://racefolio.app) — athletic portfolio for runners, tracks PRs across all distances
  - [granfondorank.cc](https://granfondorank.cc) — cycling performance index for gran fondo athletes, 500k+ users
- **Footer** — live Warsaw clock and a day counter since the journey started (Feb 25, 2026)

## Tech

Pure HTML + CSS + vanilla JS. No frameworks, no build step — one file, opens straight in the browser.

- Dark / light theme toggle
- Scroll reveal animations
- Animated progress bar
- Collapsible project cards

## How to update MRR

Open `index.html` and find this line near the bottom:

```js
const CURRENT_MRR = 0; // ← update: current monthly recurring revenue in USD
```

Change `0` to the current MRR value and the progress bar updates automatically.

## Run locally

Just open `index.html` in a browser. No server or dependencies needed.

## Hosting — GitHub Pages + custom domain (dominikziarno.com)

The site is deployed via GitHub Pages with the custom domain `dominikziarno.com`.

**One-time GitHub setup:**
1. Go to repo **Settings → Pages**
2. Source: `main` branch, `/ (root)` folder → Save
3. Under "Custom domain" enter `dominikziarno.com` → Save

**DNS records** (set at your domain registrar):

| Type  | Name  | Value                |
|-------|-------|----------------------|
| A     | @     | 185.199.108.153      |
| A     | @     | 185.199.109.153      |
| A     | @     | 185.199.110.153      |
| A     | @     | 185.199.111.153      |
| CNAME | www   | ziarnooo.github.io   |

After DNS propagates (up to 24h), enable **"Enforce HTTPS"** in Pages settings.
