# IRP Web Development Assignment

Responsive Web Design & JavaScript Foundations.

```
irp-web-development-assignment/
├── part-a-responsive-ui/
│   ├── index.html   # Semantic HTML5 IRP LMS Home Page
│   └── style.css    # Responsive CSS (Flexbox, CSS Grid, Media Queries)
├── part-b-javascript/
│   └── bank.js      # Bank Account Simulator (Types & Coercion, Scoping & Hoisting)
└── README.md
```

## Part A — Responsive IRP LMS Home Page

**Run:** open `part-a-responsive-ui/index.html` in Google Chrome (no build step; assets load from the hosted URLs in the brief).

**Highlights**
- Navigation bar uses `position: sticky; top: 0; z-index: 1000;`, so it stays pinned while content scrolls beneath it.
- Design tokens from the brief are CSS custom properties in `:root`.
- Hero: stacked on mobile, 2 columns on desktop; the illustration uses `max-width: 100%; height: auto` so it never overflows.
- Step cards (CSS Grid):

| Viewport | Layout |
|---|---|
| ≥ 1024px (desktop) | 5 columns: `repeat(5, 1fr)` |
| 769px – 1023px (tablet) | 3 columns |
| ≤ 768px (mobile) | 1 column: `grid-template-columns: 1fr` |

- Nav links collapse (hidden) at ≤ 768px; the logo stays left and the outlined **Sign In** button stays right.

**Responsive testing steps**
1. Open `index.html` in Chrome and scroll. The navbar must remain at the top.
2. Press `F12`, then toggle the Device Toolbar (`Ctrl/Cmd + Shift + M`).
3. At **1200px+**: nav links visible, 2-column hero, step cards in 5 columns.
4. At **768px–1023px**: step cards wrap into 3 columns.
5. At **375px / 390px**: compact top bar, stacked hero, single-column cards, no horizontal scrollbar.

## Part B — JavaScript Bank Simulator

**Requirements:** Node.js 14 or newer.

**Run:**
```bash
node part-b-javascript/bank.js
```

**What it covers**
- **Part 1: Types & Coercion** — `parseAmount(input)` validates null/undefined, type, whitespace, empty string, `NaN` and non-positive values. It never logs; callers use `try/catch`. Includes comments on `"5" + 2` vs `"5" - 2` and `typeof null`.
- **Part 2: Scoping & Hoisting** — `const BANK_NAME` and `let transactionCounter`, plus a hoisting demo (`var`, `let` TDZ `ReferenceError`, function declaration, function expression `TypeError`) and the `var` vs `let` `setTimeout` loop (`3, 3, 3` vs `0, 1, 2`).
- `"use strict";` is at the top and only `===` / `!==` are used.

## Submission

Push this folder to a **public** GitHub repository and verify it in an incognito window.
```bash
git init && git add . && git commit -m "IRP web development assignment"
git branch -M main
git remote add origin https://github.com/<your-username>/irp-web-development-assignment.git
git push -u origin main
```
