# Kothari Industries website

Static website for Kothari Industries (Manilal & Brothers Group), built with
React, Vite and Tailwind CSS. No server or database is needed.

## Run it

```bash
npm install
npm run dev       # local preview at http://localhost:5173
npm run build     # writes the finished site to dist/
```

## Put it online

Upload everything inside `dist/` to the web root of your hosting
(for example `public_html` on cPanel). All paths are relative, so it also
works from a sub-folder. No rewrite rules are required.

## Change the content

| What | Where |
| --- | --- |
| Phone numbers, email, addresses | `src/data/site.js` → `company`, `locations`, `offices` |
| Products and categories | `src/data/site.js` → `categories` |
| Channel partners and their products | `src/data/site.js` → `brands`, `supplyLines` |
| Projects, Nal Jal Yojana, industries | `src/data/site.js` → `projects`, `nalJal`, `industries` |
| Story, values, leadership, team, timeline | `src/data/site.js` → `about`, `values`, `leaders`, `team`, `timeline` |
| Clients, testimonials, awards, quality text | `src/data/site.js` |
| Product photos | `public/images/products/` and `public/images/brands/<brand>/` |
| Colours and fonts | `src/index.css` → `@theme` |

A product photo is found by its name: "Foundation Bolts" loads
`public/images/products/foundation-bolts.webp`. To add a product, add its
name to the list and save a photo with the matching file name
(about 560 x 400 px or larger).

## Where the content comes from

Company text, figures, projects, awards, team and contact details follow the
2025 company brochure. The detailed product lists and their photos come from
the earlier products catalogue.

## Enquiry form

The form on the Contact page writes an email in the visitor's own mail app
addressed to the company. To receive enquiries directly instead, sign up for
a form service (Formspree, Web3Forms and similar) and replace the body of
`handleSubmit` in `src/pages/Contact.jsx` with a `fetch()` to that service.

## Pages

`src/pages/` has one file per page: Home, About, Products, Brands, Projects,
Quality, Contact. The header and footer are in `src/components/`.
