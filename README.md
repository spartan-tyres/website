# Spartan Tyres — Website

Static marketing site built with [Astro](https://astro.build/), deployed to **GitHub Pages** for free, with a contact form wired to **Web3Forms** (also free).

## Local development

Requires **Node 22+**. If you use nvm: `nvm use` (reads `.nvmrc`).

```bash
npm install
npm run dev
```

Open http://localhost:4321 — changes hot-reload.

## Project layout

```
src/
  layouts/Layout.astro     Shared shell (header, footer, <head>)
  pages/                   File-based routes → URLs
    index.astro              /
    services.astro           /services/
    about.astro              /about/
    contact.astro            /contact/
  styles/global.css        Single stylesheet
public/
  CNAME                    Custom domain for GitHub Pages
astro.config.mjs           Astro config — update `site` with real domain
.github/workflows/deploy.yml   Auto-deploy on push to main
```

## First-time setup — getting this live

### 1. Sign up for Web3Forms (2 minutes) — for contact form emails

1. Go to https://web3forms.com
2. Enter the email you want enquiries sent to (`dondemetrius7@gmail.com`)
3. Copy the access key they email you
4. Paste it into `src/pages/contact.astro` — replace `YOUR_WEB3FORMS_ACCESS_KEY`

Free tier: 250 submissions/month, no backend needed. Also adds spam protection automatically.

### 2. Push this repo to GitHub

```bash
git add .
git commit -m "Initial Astro site"
# Create a new repo on github.com under your account, then:
git remote add origin https://github.com/<your-username>/spartan-tyres-website.git
git push -u origin main
```

### 3. Enable GitHub Pages

In the GitHub repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

The workflow in `.github/workflows/deploy.yml` will then build + deploy on every push to `main`. First deploy takes ~1 minute. Site will appear at `https://<your-username>.github.io/spartan-tyres-website/` initially — that's fine, we'll point the domain at it next.

### 4. Point your GoDaddy domain at GitHub Pages

Decide your final domain (e.g. `spartantyres.co.uk`). Then:

**Update these two files with your real domain:**
- `public/CNAME` — contains just `YOUR-DOMAIN.com` → replace with actual domain (no `https://`, no trailing slash)
- `astro.config.mjs` — update the `site:` value to the full `https://your-domain.com` URL

Commit & push. GitHub will read `CNAME` and configure Pages automatically.

**Then in GoDaddy DNS settings for your domain**, add these records (delete any existing A/CNAME records for the same names first):

If using an **apex domain** (e.g. `spartantyres.co.uk`):

| Type | Name | Value           | TTL |
| ---- | ---- | --------------- | --- |
| A    | @    | 185.199.108.153 | 1h  |
| A    | @    | 185.199.109.153 | 1h  |
| A    | @    | 185.199.110.153 | 1h  |
| A    | @    | 185.199.111.153 | 1h  |
| CNAME| www  | `<your-username>.github.io` | 1h |

If using `www` as primary: point CNAME `www` at `<username>.github.io`, keep the A records for apex redirect.

DNS propagation: usually ~15 minutes, can take up to 24 hours.

### 5. Confirm custom domain + enable HTTPS in GitHub

Once DNS is live: **Repo Settings → Pages** — GitHub should show your custom domain with a green tick. Tick **Enforce HTTPS** (it's free — GitHub provisions a cert via Let's Encrypt).

## Editing content

- **Copy / services / prices** → `src/pages/*.astro` (top `---` section is frontmatter JS, below is HTML)
- **Contact details** (address, phone) → bottom of `src/pages/contact.astro`
- **Colours / fonts** → CSS variables at top of `src/styles/global.css`
- **Header / footer** → `src/layouts/Layout.astro`

## Commands

| Command           | What it does                    |
| ----------------- | ------------------------------- |
| `npm run dev`     | Start dev server on :4321       |
| `npm run build`   | Build static site to `dist/`    |
| `npm run preview` | Serve the built `dist/` locally |

## Things still to do before going live

- [ ] Paste Web3Forms access key in `src/pages/contact.astro`
- [ ] Replace `YOUR-DOMAIN.com` in `public/CNAME` and `astro.config.mjs`
- [ ] Fill in real address, phone, opening hours in `src/pages/contact.astro`
- [ ] Replace placeholder `favicon.svg` in `public/` with your logo
- [ ] Review service prices in `src/pages/services.astro`
