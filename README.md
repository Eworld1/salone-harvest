# Salone Harvest — Farmer Marketplace for Sierra Leone

## Project review

Salone Harvest is a front-end coursework prototype for a responsive multi-page website concept that helps people discover agricultural produce and explore ways for farmers and buyers in Sierra Leone to connect. The product listings and contact form are demonstrations only: the project has no database, authentication, payment processing, verified seller records or back-end message delivery.

## Description

The project demonstrates a consistent website architecture across five pages, a green-and-orange visual identity, semantic HTML5, mobile-first CSS, responsive layouts, and small JavaScript interactions. Content examples include rice, cassava, pepper, sweet potato, plantain and okra.

## Pages

- `index.html` — Home page and introduction to the concept.
- `about.html` — Project background, purpose and design values.
- `services.html` — Proposed service features and user flow.
- `marketplace.html` — Sample produce cards with search and category filtering.
- `contact.html` — Contact form with browser validation and a demo-only confirmation.

## Features

- Shared header, navigation and footer across all five pages.
- Mobile hamburger navigation with `aria-expanded` state.
- Mobile-first responsive CSS with breakpoints for phones, tablets and desktop.
- Product cards that stack on small screens and form columns that adapt to wider screens.
- Marketplace search and category filtering using JavaScript.
- Contact form client-side validation; no data is sent to a server.
- Semantic landmarks, descriptive page titles, meta descriptions, image alternative text, keyboard focus styles and a skip link.
- Reduced-motion preference support.
- No CSS framework; styling is written in CSS3.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Git and GitHub for version control

## File structure

```text
salone-harvest/
├── index.html
├── about.html
├── services.html
├── contact.html
├── marketplace.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── freetown-market.jpg       (add your own image)
    ├── cassava.jpg               (optional replacement asset)
    └── rice.jpg                  (optional replacement asset)
```

The current interface uses CSS illustration blocks and emoji as fallbacks so the pages remain presentable if you have not added the optional photo assets. If you add photographs, use images you have permission to use, compress them for the web, and provide accurate `alt` text.

## How to run

1. Download or clone the project folder.
2. Open `index.html` in a modern browser.
3. For a more realistic local development workflow, open the folder in Visual Studio Code and use a local server extension such as Live Server.
4. Test every page and navigation link.
5. Test the viewport at 320 px, 375 px, 768 px, 1024 px and 1440 px.
6. Test the marketplace search and category filter.
7. Test the contact form with empty and valid fields. Remember that it is a front-end demo only.

## Responsive design notes

- Base CSS is mobile-first.
- `@media (max-width: 767px)` handles small-screen layout and hamburger navigation visibility.
- `@media (min-width: 600px)` introduces tablet-style columns for many components.
- `@media (min-width: 768px)` shows the full horizontal navigation and additional grid columns.
- `@media (min-width: 1024px)` adds wider desktop spacing and a three-column marketplace.
- `@media (max-width: 360px)` adds adjustments for very narrow phones.

The breakpoints overlap intentionally: CSS applies the matching rules in order. Test the exact 768 px and 1024 px widths because a breakpoint is a layout rule, not proof by itself that the design is responsive.

## GitHub setup

Create an empty repository on GitHub first, then run these commands from the project folder (replace the URL with your own repository URL):

```bash
git init
git add .
git commit -m "Build Salone Harvest responsive website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/salone-harvest.git
git push -u origin main
```

- `git init` creates a local Git repository.
- `git add .` stages project files for the next commit.
- `git commit` records a snapshot with a descriptive message.
- `git branch -M main` names the primary branch `main`.
- `git remote add origin ...` connects the local repository to GitHub.
- `git push -u origin main` uploads the commit and sets the upstream branch.

After changes, use `git add .`, `git commit -m "Describe the update"`, and `git push`.

## Assessment self-review against the six criteria

This is a self-review checklist, not an official mark or a guarantee of marks.

1. **Website Architecture & Page Requirements /15:** Five separate pages exist and share the same navigation/footer. Before submission, click every link and confirm all pages load without 404 errors.
2. **Responsive Web Design & Cross-Device Layouts /25:** The CSS uses media queries and mobile-first layouts; the menu, cards, grids and form adapt to smaller screens. Capture actual browser screenshots at phone, tablet and desktop widths and fix any overflow or awkward wrapping.
3. **CSS Styling, Design Fidelity & Media /20:** A consistent green/orange palette, reusable components, spacing and hover/focus states are provided. Replace placeholder illustration blocks with appropriate, compressed, permission-cleared photographs if the Figma design calls for real images.
4. **Code Quality, Semantics & Best Practices /15:** The pages use semantic landmarks, labels, accessible navigation state and descriptive metadata. Run an HTML validator and inspect the browser console before submission.
5. **Version Control & GitHub Repository /10:** The README and Git commands are provided. Marks depend on the real repository, meaningful commits, and whether the lecturer can open and inspect it.
6. **Deliverables & A3 Design Board /15:** This project folder does not itself include your final A3 board or proof screenshots. Create those separately and include Figma-to-live comparisons, a colour palette, page map and responsive evidence.

## Limitations and next steps

- Listings are sample data and are not verified real offers.
- The contact form does not submit to a server.
- There is no user account, database, order system, checkout or payment feature.
- Add real photographs and your own Figma design/screenshots before final submission.
- Do not claim that this prototype has live farmers, real prices or production-ready transactions unless you implement and verify those features.
