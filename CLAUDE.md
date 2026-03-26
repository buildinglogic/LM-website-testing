# Liquidmind AI — Claude Rulebook

## Project Stack
- Next.js 14 App Router, TypeScript, Tailwind CSS
- Shell: bash (Unix syntax, forward slashes)
- Package manager: npm
- Dev server: `npm run dev` (port 3000)

---

## Brand Colour Palette — NEVER deviate

| Role | Value |
|---|---|
| Primary Blue | `#0066CC` |
| Primary Green | `#00A86B` |
| Navy | `#1B4F8A` |
| Dark text | `#0F172A` |
| Body text | `#475569` |
| Muted text | `#64748B` |
| Placeholder / label muted | `#94A3B8` |
| White bg | `#FFFFFF` |
| Light bg | `#F8FAFC` |
| Border | `#E2E8F0` |
| Light blue tint | `#EFF6FF` |
| Light green tint | `#ECFDF5` |

**Gradient (primary):** `linear-gradient(90deg, #0066CC, #00A86B)`
**Gradient (icon/circle):** `linear-gradient(135deg, #0066CC, #00A86B)`

### Forbidden colours
- No teal/cyan (`#c3e6ec`, `#a7d1d9`, `#14b8a6`, etc.)
- No yellow/amber (`#F59E0B`, `#EAB308`)
- No dark overlay hover cards
- No off-brand gradients

---

## Typography Scale

Always use this responsive pattern — never flat `text-base` or `text-lg`:

| Context | Mobile | Tablet | Desktop |
|---|---|---|---|
| Hero H1 | `text-[26px]` | `sm:text-[36px]` | `lg:text-[48px]` |
| Section H2 | `text-[22px]` | `sm:text-[30px]` | `lg:text-[40px]` |
| Card H3 | `text-[14px]` | `sm:text-[15px]` | — |
| Body | `text-[13px]` | `sm:text-[14px]` | — |
| Small / label | `text-[11px]` | `sm:text-[12px]` | — |
| Micro / badge | `text-[10px]` | — | — |

---

## Spacing & Layout Conventions

### Section padding
- Standard: `py-10 lg:py-14 px-5 lg:px-8`
- Compact (legal/timeline style): `pt-5 pb-4 px-5 lg:px-8`
- Hero pages: `pt-[140px] pb-10 px-5 lg:px-8`

### Fixed navbar offset
- Announcement bar: `40px` (hidden when scrolled)
- Navbar height: `72px`
- Nav top when scrolled: `0`, when not scrolled: `40px`
- Page `pt` to clear nav: `pt-[112px]` (scrolled) or `pt-[140px]` (not scrolled, with announcement bar)
- Timeline / compact pages: `<main className="pt-[112px]">` + section `pt-6 pb-5`

### Max widths
- Wide content: `max-w-[1100px]`
- Standard content: `max-w-[780px]` or `max-w-[860px]`
- Narrow/forms: `max-w-[620px]`
- Hero: `max-w-[1400px]`

---

## Section Label Pattern (use on EVERY section)

```tsx
<div className="flex items-center gap-3 mb-3">
  <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
  <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Label Text</span>
  <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
</div>
```

For left-aligned (non-centred) sections, omit the right rule and `justify-center`.

---

## Card Patterns

### Standard white card
```tsx
<div className="p-5 rounded-2xl" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
```

### Hover lift card
```tsx
className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
```

### Coloured icon square (inside card)
```tsx
<div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#EFF6FF", color: "#0066CC" }}>
  {icon}
</div>
```

### Dark stat card (home hero style)
```tsx
<div className="p-4 rounded-2xl" style={{ background: "#0F172A" }}>
```

### Accordion-style section cards (legal pages)
- Header: `background: #F8FAFC`, `borderBottom: 1px solid #E2E8F0`
- Badge: gradient circle `linear-gradient(135deg, #0066CC, #00A86B)` white text

---

## Buttons

### Primary (gradient)
```tsx
className="px-6 py-2.5 rounded-lg text-[14px] font-bold btn-shine transition-all hover:scale-105"
style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF" }}
```

### Secondary (outlined)
```tsx
className="px-6 py-2.5 rounded-lg text-[14px] font-semibold border transition-all hover:bg-[#F8FAFC]"
style={{ border: "1px solid #E2E8F0", color: "#0F172A" }}
```

### Watch Demo / secondary CTA (same height as primary)
```tsx
className="inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all hover:scale-105"
style={{ background: "#FFFFFF", border: "2px solid #0066CC", boxShadow: "0 4px 20px rgba(0,102,204,0.18)" }}
// Text: bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent
```

**Rule:** Both buttons in a CTA pair must have identical `px` / `py` / `rounded` — never mix sizes.

---

## Forms

### Input / select style
```tsx
className="w-full px-3 py-2 rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", color: "#0F172A" }}
```

### Label style
```tsx
className="block text-[10px] font-semibold mb-1 uppercase tracking-wide"
style={{ color: "#0066CC" }}
```

### Grid fields: always `grid-cols-2 gap-3` (not `sm:grid-cols-2`)

---

## Navigation Rules

**File:** `components/navigation.tsx`

- Navbar: `height: 72px`, `background: #000000`
- Announcement bar: `height: 40px`, `background: #0066CC`, marquee animation
- Dropdown: white bg `#FFFFFF`, `border: 1px solid #E2E8F0`, `boxShadow: 0 25px 60px rgba(0,0,0,0.2)`, `rounded-xl`
- Dropdown items hover: `#F1F5F9` background
- Mobile menu: slides down from navbar, `top: scrolled ? "72px" : "112px"`, white bg, accordion for Products + Company

### Social links (correct URLs)
- YouTube: `https://www.youtube.com/@LIQUIDMIND_AI`
- LinkedIn: `https://www.linkedin.com/company/liquid-mind-product-consulting-inc./`
- Mail: `mailto:support@liquidmind.ai`

### Company dropdown order
About → Mission → Why Choose Us? → Minds Behind Liquidmind AI → Timeline → Map → Giving Back → [divider] → Privacy Policy → Terms of Service

---

## Page Structure Template

```tsx
<main className="min-h-screen" style={{ background: "#FFFFFF" }}>
  <Navigation />
  {/* compact hero */}
  <section className="pt-[140px] pb-10 px-5 lg:px-8 text-center" style={{ background: "#FFFFFF" }}>
  {/* sections alternate #FFFFFF and #F8FAFC backgrounds */}
  <FooterLinks />
  <Footer />
  <WhatsAppButton />
</main>
```

**Compact header pages** (legal, timeline, book-demo):
```tsx
<main className="min-h-screen pt-[112px]" style={{ background: "#FFFFFF" }}>
  <Navigation />
  <section className="pt-5 pb-4 px-5 lg:px-8 text-center" style={{ background: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
```

---

## Mobile Optimisation Rules

1. **Always** use responsive font pattern: `text-[Xpx] sm:text-[Ypx] lg:text-[Zpx]`
2. **Always** use responsive padding: `py-10 lg:py-16 px-5 lg:px-8`
3. **Images** must have explicit height at every breakpoint — never `sm:h-auto` alone with `fill`
4. **Hero sections**: `pt-[140px]` to clear announcement bar + navbar
5. **Never** use `min-h-screen` on sections where content + button must fit in one viewport
6. **Single framepoint rule**: if a section has a heading + content + CTA, everything must fit without scrolling. Use `height: min(Xpx, Yvh)` for media embeds.
7. **Form pages**: single-column centred layout (`max-w-[620px]`), no two-column split that causes overflow
8. **Mobile menu**: items `text-[15px]`, sub-items `text-[13px]`, consistent `px-2` padding

---

## RichText Component (legal pages)

Both `/legal/privacy-policy` and `/legal/terms` have a local `RichText` component that renders:
- `**bold**` → `<strong style={{ color: "#0F172A" }}>`
- Lines starting with `•` or `-` → dot-list `<li>` with `background: #0066CC` dot
- Empty lines → `<div className="h-2" />`

---

## Animations

- Scroll-triggered: use `useInView` from `react-intersection-observer` (`triggerOnce: true, threshold: 0.1`)
- Animated counter: `AnimatedCount` component (home page + book-demo) — ease-out cubic, 1400ms
- Stagger delays: `transitionDelay: ${Math.min(index * 40, 200)}ms`
- Standard fade-in: `transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`
- Hero staggered entrance: each element gets its own `delay-100`..`delay-[700ms]` with `translate-y-8` fade-in
- PatramCard typing animation: 3-step message reveal with `setInterval` at 1200ms, bounce dots for typing state
- Award toast: slide-up + scale entrance (`duration-1000`), hover-to-scale (`hover:scale-[1.03]`), cancel button rotates on hover (`hover:rotate-90 hover:scale-125`), award links pop on hover (`hover:scale-110 active:scale-95`)
- Lower hero product links: accent bar grows on hover, arrow slides in, text shifts right

### Animation Preservation Rule
**Animations must NEVER be deleted — only replaced with equal or better alternatives.** Every animation listed above and every `transition-*`, `animate-*`, `hover:scale-*`, `hover:translate-*`, or `active:scale-*` class currently in the codebase is intentional. If a section is redesigned, its animations must be carried forward or upgraded, never removed.

---

## Key File Map

| File | Purpose |
|---|---|
| `app/page.tsx` | Home page — HeroSection, ProblemSection, AwardsSection, HowItWorks, MicroConversionSection (demo video) |
| `components/navigation.tsx` | Nav + mobile menu + announcement bar |
| `components/footer.tsx` | Footer |
| `components/footer-links.tsx` | Footer link strip (used on every page) |
| `components/whatsapp-button.tsx` | Floating WhatsApp CTA |
| `components/products-section.tsx` | Products tab section |
| `app/company/page.tsx` | Company / About page |
| `app/company/founder/page.tsx` | Naveen Athresh founder profile |
| `app/company/timeline/page.tsx` | Company timeline |
| `app/company/giving-back/page.tsx` | Community / giving back |
| `app/careers/page.tsx` | Careers + application form |
| `app/newsletter/page.tsx` | Newsletter subscribe page |
| `app/book-demo/page.tsx` | Book demo form |
| `app/legal/privacy-policy/page.tsx` | Privacy policy |
| `app/legal/terms/page.tsx` | Terms of service |
| `public/images/` | Local images (founder-naveen.avif, liquidmind-logo.png, award photos, etc.) |

---

## Editing Rules — STRICT

These rules apply to **every** change made to the website. Follow them exactly.

### 1. Do NOT touch unrelated code
- Only modify what is explicitly requested. Do not change, refactor, or "improve" any component, section, or element that is not part of the current task.
- The website has been precisely built for specific use cases. Changing unrelated code breaks things.
- When editing or adding to a section, **no other section** should be affected.

### 2. Design variety across sections — no copy-paste layouts
- Each section on the home page must feel **visually distinct**. Do not reuse the same card layout, grid pattern, or component structure across multiple sections.
- For example: if "Cost of Doing Nothing" uses a 2x2 card grid, "The Journey" must use a **different** visual approach (timeline, steps, tabs, etc.) — not the same card grid again.
- Every section should be immediately distinguishable from adjacent sections at a glance.

### 3. CTA / button consistency
- All CTA buttons across the site must share a **uniform** look: same colours, same shape (`rounded-xl`), same padding (`px-7 py-4` for primary, `px-6 py-2.5` for compact), same gradient direction.
- The user should be able to instantly recognise a clickable CTA no matter where it appears.
- Never mix different button styles within the same page — primary CTAs always use the gradient, secondary always use the outlined style.

### 4. Laptop framepoint rule — every section must fit in one screen
- Target viewport: **1366×768** laptop in a non-fullscreen browser window (~696px usable height after 72px navbar).
- Every section (heading + content + CTA) must be **fully visible** without scrolling when that section is scrolled into view.
- Use compact padding (`py-10 lg:py-14`), tight header margins (`mb-8 lg:mb-10`), and size content to stay within ~650px of vertical space.
- Media embeds (video, images) should use constrained max-widths so their 16:9 ratio doesn't exceed the available height.
- Test mentally: 140px top offset + section padding + heading + cards/content + CTA + bottom padding ≤ 696px.

### 5. Think from the customer's perspective
- Every design decision should prioritise **customer convenience** — easy scanning, clear hierarchy, obvious actions.
- If a user lands on the page, they should understand what each section does without effort.

### 6. Award card sizes are LOCKED
- The AwardsSection card layout in `app/page.tsx` (card dimensions `h-[460px] sm:h-[500px]`, grid layout, gradient border, image positioning, overlaid footer) must NOT be resized, restructured, or altered in any future change.
- These cards have been carefully designed and iterated multiple times. Any changes to the award section should only touch text content or links, never the card structure or dimensions.

---

## What NOT to Do

- No emojis anywhere
- No `text-base`, `text-lg`, `text-xl` — use explicit `text-[Xpx]` always
- No teal/cyan/yellow colours
- No two-column form layouts that overflow on mobile
- No `sm:h-auto` on `fill` image containers
- No `min-h-screen` on sections that need a CTA visible below content
- No dark overlay cards (the old teal gradient cards)
- No inline `style={{ color: "..." }}` using off-brand colours
- Do not add docstrings, comments, or type annotations to unchanged code
- Do not create helpers/abstractions for one-off use
- Do not add backwards-compat shims
- Never guess external URLs — only use URLs provided by the user
- Never touch code outside the scope of the current request — no drive-by changes
- Never duplicate the same card/grid layout across multiple home page sections — each section must be visually distinct
- Never create CTA buttons with inconsistent sizing, colours, or shapes — keep them uniform site-wide
