# BASHAYAR

Personal portfolio site for Bashayar — psychology, counselling, research, literature, film and community work. Static HTML/CSS/JS, no build step. Design spec: [`DESIGN.md`](DESIGN.md) (Bashayar Editorial Reserve).

## Structure
```
index.html                       Home
about.html                       About, approach, background
work.html                        Projects (filterable, status pills)
writing.html                     Essays list (filterable)
post-rest-is-not-a-reward.html   Article template — copy for new posts
contact.html                     Contact form (mailto) + email
404.html                         Not-found page
styles.css      design tokens + styles, light/dark
main.js         theme toggle, mobile menu, filters, reveal, contact mailto
assets/         star.svg (logo mark), og-image.jpg
favicon.svg
```

## Edit content
Search all `.html` files for `<!-- EDIT` :
- **Work** — project cards; set `data-cat` (research | writing | film | community) and status pill (`completed` | `ongoing` | `submitted`).
- **Writing** — post cards in `writing.html` / `index.html`; duplicate the article template per post.
- **About** — portrait (`assets/portrait.jpg`) and education timeline.
- **Contact** — email address (form opens the visitor's mail app to this address).

## Run locally
```
python3 -m http.server 8000
```

## Deploy (GitHub Pages)
Settings → Pages → Source: *Deploy from a branch* → `main` / root. For a custom domain (e.g. bashayar.com) add it in the same screen.
