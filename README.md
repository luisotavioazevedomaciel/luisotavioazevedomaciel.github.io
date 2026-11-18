# Luis Maciel — Portfolio

Bilingual professional portfolio built with Astro and Tailwind CSS, deployed as a static site to GitHub Pages.

## Development

Requires Node.js `>=22.23.4`.

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Content

Profile, navigation and bilingual MVP content live in [`src/data/siteContent.ts`](./src/data/siteContent.ts). Update the contact links, social profiles, case studies and article drafts with verified details before publishing.

## Routes

English is the default language. Portuguese core pages are under `/pt/`. The language switcher maps matching static pages, articles and case studies to their available translations.

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys the site to GitHub Pages on pushes to `main`. Enable GitHub Pages with GitHub Actions as the repository's build and deployment source.
