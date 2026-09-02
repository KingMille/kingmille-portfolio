# KingMille Portfolio

The personal portfolio website for **KingMille** — a graphic designer, UI/UX enthusiast, and robotics hobbyist working with Python, Django, AI automation, and data analytics.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Email:** Resend (contact form)
- **Deployment:** Vercel (auto-deploy from Git)

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home — animated hero, about, skills, featured work, blog preview, contact |
| `/about` | Full about story + skills |
| `/blog` | Robotics & tech blog listing |
| `/contact` | Contact form (forwards to email via Resend) |

## ✨ Features

- Animated hero with portrait pop-out hover effect
- Scroll-triggered reveal animations, gradient backgrounds, floating skill badges
- Filterable project grid (UI/UX, Python/Django, AI Automation, Robotics, Print Design)
- Custom social SVG icons, magnetic buttons, 3D tilt cards
- Working contact form wired to Resend

## 🗂️ Project Structure

```
src/
├── app/        # Pages + API routes
│   ├── layout.tsx
│   ├── page.tsx           # Home
│   ├── about/
│   ├── blog/
│   ├── contact/
│   └── api/contact/       # Resend email endpoint
├── components/
│   ├── animations/        # Framer Motion wrappers, text scramble, tilt, magnetic
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Hero, About, Skills, Work, BlogPreview, Contact
│   └── ui/                # Button, SectionHeading, SocialIcons
└── lib/                   # site config, utils
```

## 🛠️ Local Development

```bash
npm install
npm run dev
```

> **Note:** On this Windows machine, Smart App Control blocks native binaries (SWC/Tailwind oxide), so a full local build may fail. The site builds and deploys cleanly on Vercel (Linux).

## 🚀 Deploying

With Vercel Git integration connected, every push to `master` auto-deploys:

```bash
git add -A
git commit -m "your change"
git push
```

Manual deploy (Vercel CLI):

```bash
vercel --prod
```

## 🔐 Environment Variables

Set in the Vercel dashboard (never commit these):

- `RESEND_API_KEY` — your Resend API key for the contact form
- `CONTACT_EMAIL` — the address contact-form messages are forwarded to

## 📸 Content

Your portrait is at `public/images/me.png`. Project, blog, and skill content lives in the components under `src/components/sections/` and `src/lib/site.ts` (a CMS can be added later for no-code editing).

---

Built with ❤️ by KingMille