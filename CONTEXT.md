# ridzu.one - AI Vibe-Coding Handoff & Context Guide

> Last Updated: 2026-11-23 (Evergreen Guide - Git tracks version history)
> Live URL: https://ridzu.one/
> Owner: Ameer Ridzuan (System Engineer & UI/UX Designer)

---

## 0. Quick Kickoff Prompt (Salin & Tampal Di Chat AI Baharu)

~~~text
Act as a Senior Full-Stack Developer & UI/UX Designer specializing in modern interactive portfolios, zero-build frontend engineering, micro-interactions, responsive design systems and clean PowerShell automation.

Aku nak sambung vibe coding untuk laman web portfolio peribadi aku, ridzu.one.
Sila baca keseluruhan fail CONTEXT.md yang aku lampirkan dan ikut 100% semua peraturan Safe-Patch, struktur kod, gaya reka bentuk dan gaya bahasa di dalamnya.

Jangan tulis semula keseluruhan index.html. Sentiasa guna skrip PowerShell Safe-Patch yang idempotent dengan backup bertarikh.

Tugasan aku hari ini:
[TULIS PERUBAHAN / FITUR BARU YANG KAU NAK BUAT DI SINI]
~~~

---

## 1. AI Assistant Operating Rules (Wajib Ikut)

### Communication & Writing Style
- **Language & Tone:** Respond in casual, friendly Malaysian Malay (Bahasa Melayu santai, bro-style) matching the user's tone, while keeping code, UI copy and Git commit messages in clean English unless requested otherwise.
- **Strict Punctuation Rules:**
  - Never use an Oxford comma (never put a comma before `and` or `dan` in a list).
  - Never use em-dashes or en-dashes anywhere in responses, copy or code comments. Use regular hyphens `-`, colons `:` or commas instead.

### Mandatory Safe-Patch PowerShell Workflow
1. **Zero Full-File Rewrites:** Never output the entire `index.html`. Always deliver a self-contained PowerShell script (`Safe-Patch`) that patches `index.html` cleanly from the project root folder.
2. **Auto-Backup First:** Every script MUST back up `index.html` to `.\_backup\YYYYMMDD_task-name\index.html` before modifying anything.
3. **UTF-8 Without BOM:** Always read and write files using `New-Object System.Text.UTF8Encoding($false)` so icons, emojis and UTF-8 characters never corrupt.
4. **Idempotent Markers:** Wrap every injected `<style>`, `<script>` or HTML block with clear `<!-- ... Start -->` and `<!-- ... End -->` markers so re-running the same script updates cleanly instead of duplicating code.
5. **Inspect Before Guessing:** If an exact HTML/JS block is unknown in a new chat, give the user a 1-line PowerShell clipboard snippet first to inspect the exact code before generating the patch.
6. **Standard Response Format:** Every Safe-Patch response must include:
   - Brief summary of what the patch changes
   - Ready-to-run PowerShell script (`$ErrorActionPreference = "Stop"`)
   - Concise **Test Checklist** for `http://127.0.0.1:5500`
   - **Commit Ready (GitHub Desktop)** Summary & Description

---

## 2. Tech Stack & Local Environment
- **Architecture:** Zero-build static site (`index.html`, `css/`, `js/`, `img/`, `manifest.webmanifest`) based on Envato Braxton template.
- **Libraries:** Phosphor Icons, Swiper, PhotoSwipe (gallery lightbox), GSAP ScrollTrigger, Lenis Smooth Scroll and Google Fonts (`Syne` via direct preconnect).
- **Hosting:** Cloudflare Pages auto-deploying from GitHub (managed via GitHub Desktop).
- **Local Dev:** Windows, VS Code with Live Server (`127.0.0.1:5500` or `npx --yes serve -l 5500`). Keep VS Code **Auto Save** enabled so unsaved editor buffers never overwrite disk patches.
- **Git Hygiene:** `_backup/` is ignored via `.gitignore`.

---

## 3. Current Site Architecture & Section Order
1. **Sidebar:** Profile card, maximized interactive 3D Tech Globe (natural horizontal drag direction) and CTA.
2. **Home (Hero Bento Grid):** 12-column desktop bento layout with Intro Card, Shah Alam Real-Time SVG Analog Clock + Open-Meteo Live Weather, Highlights, **Flagship Venture iOS Smart Stack** (5 projects) and **UI/UX Lab** (5-preset Live Accent Color Lab + 2D Sticker Physics Board).
3. **About Me:** Interactive 3D Bento Grid with tabbed bio (Overview, Enterprise, Tech Focus) and 3D tilt/flip Digital ID Card triggering the QR Business Card modal. Redundant Services grid removed.
4. **Resume:** Experience, education and skills timeline.
5. **Portfolio:** Balanced 8-slot 2-column grid (7 projects + 1 dashed "Start a new project" CTA card). Redundant `Featured Demos: by.ridzu.one` block removed.
6. **Certs:** Master-Detail **Certs Vault** with 47 certificates (MBOT Graduate Technologist pinned at #1), search input, horizontal Provider Filter Pills with live counts and click-to-zoom Lightbox.
7. **Contact & Footer:** Compact mobile-friendly Contact form (Web3Forms linked to `ameer@ridzu.one`), 6-card Social Grid (6 columns desktop / 3x2 mobile) and centered 3D glassmorphism logo Back-to-Top button.

---

## 4. Critical Code Anchors & Gotchas (Jangan Rosakkan)

### A. Hero Bento Flagship Venture Smart Stack (Dual Array Gotcha)
- The 5 featured projects are: `by.ridzu.one`, `CuciCop`, `Pakatlah`, `SplitSukan` and `Gymeer / GymFlow`.
- **Gotcha:** The project array exists in **two** scripts inside `index.html`: `<script id="hero-bento-script">` AND the iOS Smart Stack script (Safe-Patch 46/47). Whenever adding, editing or reordering Hero projects, always patch **both** arrays and verify the counter (`1 / 5`) and side dots stay synced.

### B. Portfolio Grid, PhotoSwipe & CTA Card
- **Uniform 4:3 Thumbnails:** `#portfolio .my-gallery .gallery__link` uses `aspect-ratio: 4 / 3` with `object-fit: cover; object-position: top center`.
- **PhotoSwipe `data-size` Rule:** Never hardcode mismatched dimensions on `<a class="gallery__link">`. Always read the image's real pixel dimensions (`System.Drawing.Image`) and write exact `data-size="WIDTHxHEIGHT"` to avoid lightbox distortion.
- **PhotoSwipe SafeGuard (`portfolio-pswp-fix-script`):** The 8th slot `#portfolioStartProjectCard` is a non-`<figure>` CTA card that smooth-scrolls to `#contact`. `portfolio-pswp-fix-script` temporarily detaches `#portfolioStartProjectCard` during PhotoSwipe click parsing and restores it after 50ms. Never remove this safeguard or project modal clicks will break.

### C. Adaptive iOS Liquid Glass Styling & Case Study Modals
- **Unified Glass Style (`portfolio-glass-tags-style`):** Both thumbnail `.rounded-tag` pills and `.cs-trigger-btn` Case Study badges share an adaptive iOS Liquid Glass design that stays consistent across Light and Dark modes:
  - Bright thumbnails (`by.ridzu.one`, `Heidi`, `JPJ`) use **Smoked Liquid Glass**.
  - Dark thumbnails (`CuciCop`, `Pakatlah`, `SplitSukan`, `Gymeer`) automatically receive `.is-dark-thumb` via `darkKeys` in `portfolio-pswp-fix-script` and render in **Crystal Liquid Glass**.
- **Case Study Engine (`case-study-script`):** Adding an object to `var CASES = [...]` with a `match` keyword automatically renders the top-right `Case Study` badge and full modal breakdown on the matching Portfolio card.

### D. Theme, PWA & Scroll Integrity
- **System Theme Sync:** Defaults to OS `prefers-color-scheme` with live OS sync while preserving manual `localStorage` overrides.
- **iOS PWA:** Uses `viewport-fit=cover`, `manifest.webmanifest` (`ridzu.one`), dynamic `theme-color` and `#ios-status-blur`.
- **Certs Vault Scroll:** Must keep `data-lenis-prevent` on the scrollable cert list so Lenis smooth scroll does not hijack scrolling.

---

## 5. Quick Maintenance Recipes
- **Add a New Project:** Drop optimized screenshot in `img/` -> insert `<figure>` in `#portfolio .my-gallery` with real `data-size` -> update both Hero Smart Stack arrays (if featured) -> add entry to `case-study-script` `CASES` -> add keyword to `darkKeys` if dark-themed -> decide whether to keep or adjust `#portfolioStartProjectCard` based on even/odd card count.
- **Add a New Certificate:** Save image with explicit `.jpg`/`.png` extension in `img/certs/` -> add issuer SVG in `img/icons/` if new -> append entry to Certs Vault array.

---

<!-- EVERGREEN_SYNC_AND_ROADMAP_START -->
## Evergreen Sync & Principal UI/UX Roadmap (Updated: 2026-11-24)

### Recently Completed Milestones
- [x] **Custom Domain Email & Form Migration**: Replaced legacy Gmail endpoints across JSON-LD metadata, Digital ID Card, Quick Dock and QR Business Card with `ameer@ridzu.one` plus updated Web3Forms routing.
- [x] **CuciCop #1 Showcase Promotion**: Updated `img/cucicop.png` light preview, promoted CuciCop to #1 in Hero Bento Smart Stack and Portfolio Grid, synced PhotoSwipe `data-size` and applied Smoked Liquid Glass tags.
- [x] **Mobile 120fps Smooth Glide & PWA Dynamic Island Offset**: Added `#mobile-ux-offset-scroll-script` and `#mobile-ux-offset-and-pills-style` to bypass Lenis `scroll-behavior: auto`, strip GSAP `translateY` offsets on first tap in standalone iOS PWA and scale down mobile Portfolio Liquid Glass pills (`max-width: 767.98px`).
- [x] **Certificate Vault Swipe-Flick & Synced Rail Auto-Scroll**: Added `#certs-swipe-sync-script` and `#certs-swipe-sync-style` for 1:1 touch/mouse drag-flick physics on `#certStageMedia` (and `#certsLightbox`), click-suppression guard after swipes and smooth internal `requestAnimationFrame` scrolling on `#certRailList`.
- [x] **Phase 1 - Smart Adjacent Image Preloader (`#cert` & Lightbox)**: Added `#phase1-phase2-ux-script` to warm `N-1`, `N+1` and `N+2` certificate images via `Image.decode()` for 0ms flick transitions.
- [x] **Phase 2 - Quick Dock SVG Scroll Progress Ring**: Wrapped `#mobileSmartNextBtn` inside `.quick-dock` with a GPU-friendly SVG `stroke-dashoffset` progress ring (`0%` to `100%`) across desktop and mobile, wired to the Dynamic Island safe-offset glide.
- [x] **Phase 3 - Smart Shareable Deep-Links (`#case=<slug>` & `#cert=<slug>`)**: Added `#phase3-phase4-ux-script` hash router plus one-click `Copy Direct Link` actions inside both the Case Study modal (`#csShareLinkBtn`) and Certificate Vault (`#certShareLinkBtn`) with toast feedback.
- [x] **Phase 4 - System Architecture Flow & Impact Metrics in Case Study Modal**: Injected `#csEngWrap` inside `#csBackdrop` rendering 3 scannable engineering outcome cards and a node-by-node System Architecture Flow pipeline for `CuciCop`, `by.ridzu.one`, `Pakatlah`, `SplitSukan` and `Gym Tracker`.

### Active Roadmap Queue (Principal UI/UX & Full-Stack Polish)
- [ ] **Phase 5 - WebP Thumbnail & Asset Optimization (Lighthouse 98+)**: Convert heavy PNG/JPEG portfolio and certificate assets to WebP (~85% quality) with clean fallbacks to push mobile LCP under 1.5s.

### Engineering Guardrails & Living Context Rule
- **Living Context Sync (Mandatory)**: Whenever a major feature upgrade, architectural module, or workflow convention is added/changed, always update `CONTEXT.md` in the same session so future AI chats stay 100% synced from a single file attachment.
- **Evergreen Versioning**: Git is the single source of truth; use date-stamped backups (`_backup/YYYYMMDD_task-name/`), idempotent HTML/MD comment markers, single-quoted PowerShell literals (`'...'`) to avoid null bytes, and UTF-8 without BOM.
- **Performance & Accessibility**: Keep enhancements vanilla JS with zero heavy external dependencies, preserve 60/120fps scroll performance and respect `prefers-reduced-motion: reduce`.
- **Responsive Isolation**: Desktop layouts (`>= 992px` / `>= 768px`) must remain untouched when tuning mobile or standalone PWA ergonomics.
<!-- EVERGREEN_SYNC_AND_ROADMAP_END -->
