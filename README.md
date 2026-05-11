# Axion ONE — Static Website (GitHub Pages ready)

A fully static, framework-free version of the Axion ONE site. Includes the homepage sections, six Intelligence detail pages, a premium configurator page, working menu links, and motion visuals.

## Files
- `index.html` — homepage (Hero, Architecture, Performance, Cockpit, Intelligence, Reserve)
- `system.html` — dynamic system detail page (uses `?slug=` query param)
- `configure.html` — premium Axion ONE configurator
- `style.css` — all styles
- `script.js` — interactivity (cursor glow, scroll reveals, exploded view, parallax car, system pages, configurator)
- `assets/` — car & cockpit images

Upload all of these to GitHub:

```
index.html
system.html
configure.html
style.css
script.js
.gitignore
assets/hero-car.jpg
assets/car-side.png
assets/car-top.png
assets/cockpit.jpg
```

## Intelligence detail pages
- `system.html?slug=neural-drive`
- `system.html?slug=battery`
- `system.html?slug=aero`
- `system.html?slug=materials`
- `system.html?slug=lighting`
- `system.html?slug=sound`

## Run locally
Double-click `index.html`, or:

```
python3 -m http.server
```

then open http://localhost:8000

## Deploy to GitHub Pages
1. Create a new GitHub repo (e.g. `axion-one`).
2. Upload all files (keep folder structure — `assets/` must stay).
3. Repo → **Settings → Pages**.
4. Source: **Deploy from a branch**, Branch: `main`, Folder: `/ (root)`.
5. Save. Your site goes live at `https://<username>.github.io/axion-one/`.

No build step. No Node. No config files.
