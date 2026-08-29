# Portfolio

My personal software engineering portfolio — built with Next.js, TypeScript, and Tailwind CSS.

## Personalizing

All of the content (name, bio, projects, experience, skills, links) lives in one file:
[`src/data/portfolio.ts`](src/data/portfolio.ts). Edit that file to make the site yours — no
need to touch any component code.

To add a downloadable resume, drop a PDF at `public/resume.pdf` and set `resumeUrl` in
`src/data/portfolio.ts` to `"/resume.pdf"`.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying

The easiest option is [Vercel](https://vercel.com/new) — import this GitHub repo and it
deploys automatically with zero configuration. Every push to `main` redeploys the live site.
