
# Shamsuddin Associates — Premium Corporate Website

Frontend-only, component-based, inspired by indinero.com's structure and premium feel. All content, imagery, and branding will be original.

Note on stack: this project runs on **TanStack Start (React 19 + Vite 7 + TypeScript + Tailwind v4)** with **file-based routing via `src/routes/`**. This is functionally equivalent to your "React + Vite + TS + Tailwind + React Router" spec — I'll use TanStack Router (type-safe, same UX) instead of React Router DOM, and Tailwind v4 CSS-first tokens instead of `tailwind.config.js`. Framer Motion and Lucide Icons as requested. Deployment target on this platform is Lovable's edge hosting (Vercel-compatible output); if you specifically need Vercel I can note that at ship time.

---

## 1. Product Requirements Document (PRD)

**Overview.** Marketing website for Shamsuddin Associates, an accounting & financial consulting firm, positioned as a premium alternative to legacy CPA firms.

**Business goals.** (1) Generate qualified consultation leads. (2) Establish trust with mid-market clients. (3) Communicate service breadth (tax, accounting, CFO, advisory). (4) Support recruiting.

**Target audience.** Founders/CFOs of $1M–$50M revenue businesses; startup operators; ops leaders in healthcare, tech, construction, manufacturing, retail, nonprofit, professional services.

**Problem.** SMBs struggle to find a modern, tech-forward accounting partner that speaks their language and scales with them.

**Value proposition.** "Finance and accounting, engineered for growth." One team for tax, books, payroll, reporting, and CFO strategy.

**Objectives.** Premium brand perception; clear service navigation; frictionless "Free Consultation" CTA; industry-specific credibility.

**Core sections.** Announcement bar, sticky nav, hero, client logos, services, why-us, industries, case studies, testimonials, pricing preview, FAQ, blog preview, contact CTA, footer.

**User journey.** Land → scan hero value prop → skim services/industries → build trust via case studies + testimonials → click Free Consultation → contact form.

**Functional requirements.** Responsive nav (desktop mega-menu style + mobile drawer), animated counters, accordion FAQ, filterable industries, testimonial carousel, newsletter form (UI only), contact CTA linking to contact page.

**Non-functional.** LCP < 2.5s, CLS < 0.1, WCAG AA contrast, keyboard nav, semantic HTML, SEO meta per route.

**MVP scope (Phase 1–N).** Full marketing site as specified, placeholder content, no backend.

**Future scope.** CMS integration, client portal, live chat, booking widget, blog CMS, multi-language.

**Success metrics.** Consultation form submits, avg session duration, scroll depth on services, bounce rate on hero.

**Excluded.** Auth, DB, CMS, payments, live chat, real blog engine, dashboards.

---

## 2. Technical Requirements Document

**Stack.** React 19, TypeScript, Vite 7, Tailwind CSS v4, Framer Motion, TanStack Router (file-based), Lucide Icons.

**Architecture.** Component-based. Route files own composition; sections are dumb components; UI primitives via shadcn.

**Folder structure.**
```text
src/
  routes/           # file-based routes: index, services, industries, about, resources, careers, contact
  components/
    layout/         # Navbar, Footer, AnnouncementBar, MobileDrawer
    sections/       # Hero, ClientLogos, Services, WhyUs, Industries, CaseStudies,
                    # Testimonials, PricingPreview, FAQ, BlogPreview, ContactCTA
    ui/             # shadcn primitives
    common/         # AnimatedCounter, SectionHeading, GradientBadge, ServiceCard, etc.
  data/             # placeholder content (services, industries, testimonials, faqs, posts)
  lib/              # utils, motion presets
  styles.css        # Tailwind v4 tokens + typography
  assets/           # generated illustrations/patterns
```

**Design tokens (Tailwind v4 `@theme` in `src/styles.css`).** Primary `#0B1F3A`, secondary `#1E3A8A`, accent gold `#C9A227`, bg `#FFFFFF`, light gray `#F8FAFC`, dark `#111827`. Fonts: Manrope (headings), Inter (body), loaded via `<link>` in `__root.tsx` head.

**Responsive.** Mobile-first; breakpoints sm/md/lg/xl/2xl.

**SEO.** Per-route `head()` with title, description, og:*, twitter:*.

**Accessibility.** Semantic landmarks, focus-visible rings, ARIA on nav/drawer/accordion/carousel, AA contrast on gold-on-white (adjust to `#A8851A` where needed for text).

**Performance.** Route-level code split (automatic), image lazy loading, `content-visibility` on below-fold sections, motion `viewport={{ once: true }}`.

**Animations.** Framer Motion presets: fadeUp, fadeIn, scaleIn, staggerChildren, hoverLift; animated counters via `useInView` + `animate`.

---

## 3. UX Flow Document

**Global.**
- Announcement bar: dismissible, holds promo/CTA link.
- Sticky navbar: transparent over hero, solid + shadow after 40px scroll. Desktop shows links + gold "Free Consultation" pill button. Mobile shows logo + hamburger → full-screen drawer with staggered link reveal.
- Footer: 4-column links + newsletter input + social row + legal.

**Interactions.**
- Nav links: underline slide-in on hover; active route bold.
- Buttons: primary (navy fill → darker on hover, subtle lift + shadow); secondary (outline → fill on hover); tertiary (text + arrow that translates on hover).
- Cards: `hover-lift` (translateY -4px, shadow deepen, border tint gold).
- Section reveals: fadeUp on enter (`once: true`, 0.6s ease-out, 60px offset), stagger children 0.08s.
- Counters: count from 0 to target over 1.6s when in view.
- FAQ: accordion, chevron rotates 180°, content height animates.
- Testimonials: auto-advancing carousel, pause on hover, dot + arrow controls.
- Scroll: smooth, sticky nav shadow transitions in 200ms.

**States.** Loading (skeleton on carousel/counters pre-hydration), empty (n/a — placeholder data), hover (as above), active/focus (visible ring in gold at 40% opacity), disabled (opacity 50, no pointer).

**Responsive behavior.** Desktop: multi-column grids (services 4-col, industries 3-col). Tablet: 2-col. Mobile: 1-col stacks, carousel becomes swipeable.

**Page flows.** Home = all sections. Services/Industries/About/Resources/Careers/Contact each get their own route in later phases; Phase 1 stubs them.

---

## 4. UI/UX Design Brief

Ultra-premium, minimal, corporate. Deep navy canvas accents with abundant white space, gold used sparingly for emphasis (CTAs, underlines, stat highlights). Rounded-2xl cards, subtle 1px borders, soft layered shadows (`0 1px 2px`, `0 10px 30px -12px`). Glassmorphism only on the sticky nav when scrolled over hero, and on floating stat chips in the hero. Manrope 700/800 for display, Inter 400/500/600 for body. Iconography: Lucide, 1.5px stroke, gold or navy.

---

## Build Roadmap

- **Phase 1 (this turn):** Project theme setup, folder scaffold, Navbar + Announcement bar, Footer, home page skeleton with placeholder Hero + a couple of section stubs, reusable primitives (Section, SectionHeading, Button variants, ServiceCard, AnimatedCounter). Route stubs for services/industries/about/resources/careers/contact so nav links type-check.
- **Phase 2:** Full Hero polish, Client Logos, Services grid with hover, Why-Us with counters & timeline.
- **Phase 3:** Industries, Case Studies, Testimonials carousel.
- **Phase 4:** Pricing preview, FAQ, Blog preview, Contact CTA + Contact route form UI.
- **Phase 5:** Per-page routes fleshed out (Services detail, Industries detail, About, Careers, Resources), SEO polish, a11y pass, perf pass.

---

## Understood + Open Questions

**Understood:** premium, indinero-style layout/UX, original assets, frontend-only, placeholder content, exact color + type system, animation vocabulary, full section list.

**Assumptions I'll make unless you object:**
1. Use TanStack Router (file-based) instead of React Router DOM — same routing UX, this is the platform default.
2. Gold `#C9A227` will be darkened to `~#A8851A` when used as text on white, to hit WCAG AA. It stays `#C9A227` on navy backgrounds and as accent shapes.
3. Illustrations & pattern backgrounds will be generated as original SVG/PNG assets in later phases; Phase 1 uses tasteful geometric CSS placeholders.
4. Announcement bar copy: "New: 2026 tax planning guide — book a free consultation." (adjustable).
5. Newsletter/contact forms are UI-only (no submit handler) per "frontend only".

**Please confirm to proceed with Phase 1**, or tell me what to change (routing lib, gold contrast rule, announcement copy, anything else).
