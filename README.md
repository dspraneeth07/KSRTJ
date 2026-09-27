# Sanātana Vidyā Kendra

**Positioning.** A personal centre for the *study, practice and teaching* of
Vastu Shastra, Jyotisha, Numerology and the spiritual and Vedic disciplines —
not a consultancy and not a research organisation. Practice and teaching carry
equal weight, and every claim on the site has to be one that can be stood
behind on day one. See *What was deliberately removed* below before adding
anything back.

Bilingual (Telugu / English) site for an integrated Vedic sciences
consultation house. React 19 + TypeScript + Vite, with a WebGL yantra in the
hero and CSS 3D depth throughout.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck, build, then write robots.txt + sitemap.xml
npm run preview    # serve the production build
npm run typecheck
```

---

## Deploying to Netlify

Two ways, both work with what is committed.

**Recommended — connect the git repo.** Netlify reads `netlify.toml`; nothing
needs entering by hand. It sets `URL` at build time, which is passed to Vite as
`VITE_SITE_URL` and drives canonical links, `og:url` and the sitemap. Attaching
a custom domain later needs no code change, only a redeploy.

**Or drag `dist/` onto the Netlify dashboard.** Redirects and headers live in
`public/_redirects` and `public/_headers`, which are copied into `dist/`, so
they apply on this path too. Build with the host first so the SEO tags are
right, since drag-and-drop never runs a build:

```bash
VITE_SITE_URL=https://your-site.netlify.app npm run build
```

Without it the build omits canonical, `og:url` and the sitemap rather than
emitting wrong ones, which is the safer failure.

| | |
|---|---|
| Build command | `VITE_SITE_URL=$URL npm run build` |
| Publish directory | `dist` |
| Node | 22, pinned in `netlify.toml` and `.nvmrc` |

### Why headers are not in netlify.toml

`netlify.toml` is not inside `dist`, so a drag-and-drop or `netlify deploy
--dir=dist` never sees it and the headers vanish silently. `public/_headers`
and `public/_redirects` ship with the build and apply on every deploy path.
Each rule lives in exactly one place, so the two cannot drift.

### What was verified before shipping

Not assumed — exercised against the real build with a server that parses the
actual `_redirects` and `_headers` out of `dist/`, matching Netlify's order
(an existing file wins over a rewrite, then the SPA fallback):

- **Every route cold-loaded**, which is what a refresh is. All seven render the
  right `<h1>` and `<title>`, with **zero console errors, zero failed
  subresources and zero 4xx across 34 requests.**
- **Deep links** — `/services/vastu`, with a trailing slash, with a query
  string, and with a hash — all render the correct page, not the 404.
- **Static files win over the SPA rewrite**: `robots.txt` and `sitemap.xml`
  are served as themselves, not rewritten to `index.html`.
- **Headers land per path**: `/assets/*` immutable for a year, the shell
  `must-revalidate`.
- **CSP** allows `'self'` plus Google Fonts and nothing else, with no inline
  scripts. The page loads clean under it, WebGL included. *Adding analytics or
  an embed later will be blocked until its host is added to `_headers`.*
- **Import and asset casing** audited across 75 relative imports. Netlify
  builds on Linux, where casing matters and Windows hides mismatches.
- **Language choice survives a refresh** on a deep route.

### Known optimisation, not a blocker

The main bundle is **164 KB gzipped**. Routes are code-split, but the largest
remaining win is unclaimed: `Header.tsx` imports `verticalById` to build the
mega menu, which pulls all of `vastu.ts`, `jyotisha.ts` and `numerology.ts`
(268 KB of source) into the main chunk, though the menu needs only each
service's `name` and `cluster`.

The fix is to split each vertical file into a light menu half and a heavy
content half loaded with its page — one source of truth per field, no
duplication. Worth roughly 60–70 KB gzipped off first load. Left undone
deliberately rather than refactoring three content files immediately before a
deploy. `three.js` is already lazy and is not in that figure.

---

## Structure

```
src/
  i18n/
    strings.ts            en + te dictionaries, 210 keys
    bi.ts                 Bi pair type + useBi(), for long-form page copy
    LanguageProvider.tsx  context, persistence, <html lang> sync
  data/
    content.ts            homepage content as typed data, not markup
    verticalTypes.ts      the shape every service vertical shares
    verticals.ts          the registry — add a vertical here and it routes
    vastu.ts              15 services, 4 clusters, 3 bundles, 6 FAQs
    jyotisha.ts           19 services, 5 clusters, 3 bundles, 6 FAQs
    numerology.ts         12 services, 4 clusters, 3 bundles, 6 FAQs
    swara.ts              the fourth vertical — a different shape entirely
    about.ts              the practitioner's profile page
  pages/
    HomePage.tsx
    VerticalPage.tsx      renders any consultation vertical from its config
    SwaraPage.tsx         Swarashastra & Brahmavidya — its own component
    AboutPage.tsx         /about — editorial profile, its own component
  three/YantraScene.tsx   the WebGL hero (code-split)
  components/
    Tilt.tsx              pointer-driven 3D tilt
    Reveal.tsx            scroll reveal with a visibility failsafe
    Icons.tsx             line-art marks + flat yantra fallback
    layout/               Header (+ mega menu), Footer
    sections/             Hero, then everything else in Sections.tsx
  styles/
    base.css              tokens, reset, Telugu rules, 3D primitives
    sections.css          section layout + responsive
    verticals.css         vertical pages + grouped mega-menu column
    quiet.css             the restrained register, Swarashastra page only
    about.css             editorial layout, About page only
```

Routes: `/`, `/about`, `/services/vastu`, `/services/jyotisha`,
`/services/numerology`, `/services/swarashastra`. Unknown paths fall back to
the homepage.
Deep links need a server rewrite — `public/_redirects` (Netlify) and
`vercel.json` are included; for nginx, `try_files $uri /index.html;`.

Content lives in `data/content.ts` as arrays of translation **keys**, so adding
a language never means touching a component.

---

## The 3D

**Hero — real WebGL.** `three` + `@react-three/fiber` + `@react-three/drei`.
A yantra built from actual geometry: four concentric torus rings, a square
enclosure, two interlocking extruded triangles (shatkona), eight petal markers
and a bindu at the centre. It rotates slowly, breathes on a sine, and leans
toward the cursor.

Three things worth knowing before you edit it:

- **Lighting is in-scene.** Gold is a metal, and metal without an environment
  map renders black. Rather than fetch a preset HDR from a CDN, the reflection
  map is built from four `<Lightformer>` planes — including one *behind the
  camera*, which is what the flat triangle faces actually reflect. Delete that
  one and the triangles go black.
- **Flat faces are not near-pure metal.** The rings sit at `metalness 0.98`,
  but the triangles and square bars are at `0.82` with higher roughness, so
  they pick up diffuse light instead of mirroring empty space.
- **It is code-split.** `three` is ~939 KB (254 KB gzipped) and loads lazily.
  First paint ships 263 KB (80 KB gzipped) and shows the flat SVG yantra until
  the scene arrives.

**Everywhere else — CSS 3D.** `<Tilt>` writes `--rx / --ry / --tz / --mx / --my`
from inside a rAF, so pointer movement costs one composited transform and
**zero React re-renders**. Cards lift on `translateZ`, their inner elements sit
at different depths, and a specular sheen tracks the pointer. The mega menu
opens on a `rotateX`, and section content rotates in on scroll.

**Graceful degradation, in order:**

| Condition | What renders |
|---|---|
| Normal | WebGL yantra, tilt, parallax, reveal |
| No WebGL | Flat SVG yantra; everything else unchanged |
| `prefers-reduced-motion` | Flat yantra, no tilt, no parallax, content visible immediately, r3f drops to `frameloop="demand"` |
| Coarse pointer (touch) | Tilt disabled — a hover-only effect is dead weight on a phone |
| JS fails | Nothing renders. This is a SPA; see *Known trade-off* below |

Every effect degrades to *nothing moves*, never to *moves faster*.

---

## Type

| Role | Latin | Telugu |
|---|---|---|
| Everything | **Poppins** 200–700 | **Anek Telugu** 200–700 |

**On Google Sans:** it is Google's proprietary brand font and is not licensed
for third-party use. Only *Google Sans Code* (a monospace) is on Google Fonts,
which is wrong for this. Poppins is the closest available geometric sans, and
it pairs with Anek Telugu unusually well — both are Indian Type Foundry
designs, so the two scripts share a geometric spine at matching weights.

Telugu is not the Latin rules with a different font (`base.css` §Telugu):
leading up to 1.82, optical size down slightly, and **letter-spacing forced to
zero** — positive tracking pulls Telugu conjunct clusters apart. Uppercase +
wide tracking is a Latin idiom, so Telugu eyebrows and labels drop
`text-transform` entirely and size up instead. Numerals stay in Poppins in
both languages.

## Colour

Cream and burnt orange. No red anywhere — the old maroon is gone.

| Token | Hex | Use |
|---|---|---|
| `--ink` / `--ink-2` / `--ink-3` | `#1A140E` / `#4D3F33` / `#7D6A57` | Body text, secondary, meta |
| `--paper` / `--paper-2` / `--paper-3` | `#FDF9F0` / `#F7EEDD` / `#FFFCF6` | Cream ground, alt band, cards |
| `--orange` | `#B5451B` | Headings, links, primary accent |
| `--orange-soft` | `#D9713F` | Hover on dark grounds |
| `--umber` / `--umber-deep` | `#2A1508` / `#1B0E05` | Dark sections, hero and footer |
| `--amber` | `#C98A2E` | Hairlines, decoration, text **on dark only** |
| `--amber-ink` | `#8A5A12` | The same role **on cream** |
| `--amber-soft` / `--amber-pale` / `--amber-lit` | `#E0A85C` / `#F2DCB4` / `#FBE7BE` | Hover, headings on dark, 3D highlight |

**Two tokens for one role, deliberately.** `--amber` at 11px on cream is 3.0:1
and fails WCAG AA, which the earlier gold palette quietly did too. Eyebrows and
small labels on light grounds use `--amber-ink` (5.5:1); `--amber` is kept for
dark grounds and for hairlines, where contrast rules do not apply. `--orange` on
`--paper` is 5.1:1, so it is safe for body-size text, not only headings.

Keep `--orange` at this depth. Brightening it toward a pure `#F97316` loses the
burnt quality and starts reading as a discount banner.

---

## What was deliberately removed

The first version read as a large, established consultancy. These came out and
should not return unless they become true and provable:

| Removed | Why |
|---|---|
| "India's first integrated house of the Vedic sciences" | Unprovable superlative |
| "the method and record-keeping of a research institution" | Overstates what this is |
| 27+ years · 14,000+ consultations · 380+ projects · 9 countries | Placeholder figures, replaced by one honest sentence |
| Service counts — "15 services", "19 services", "12 services" | Volume is not the argument |
| Fee tables of `₹ —` and per-service turnaround days | Every row was a commitment nobody had agreed to |
| "within seven working days", "90-day review included", "no further fee to your architect", "reply within one working day" | Operational promises that become obligations |
| Four testimonials | They were written examples. An invented testimonial is the one thing that cannot ship |
| "admission by assessment", "taught in a lineage" | Implied an established gurukula that would have to be shown to exist |
| Builders / corporate / industrial / educational cards | Reduced to a single paragraph |
| `[Guru's name]`, `[n] years`, `[year]`, `[university]`, `[CONFIRM]` | **No bracketed placeholder remains anywhere on the site** |
| "The science of built space / of time and disposition / of number and name" | Reads as an academic claim; these are taught as traditional disciplines |
| "the one stage where correction costs nothing" | Untrue — a consultation still carries a fee |
| "a drawing-level report your architect can build from" | Implied architectural and structural services that are not offered |
| "a check against the registrar and trademark record" | Must not read as legal or trademark clearance |
| "Remedies without demolition" | Read as a guarantee; now "where applicable" |
| "the next three years of gochara" | A fixed commitment per client |
| "so trading is not interrupted", "phased to fall inside your scheduled shutdowns", "one review visit … included" | Scheduling and inclusions promised on the client's behalf |
| "Institute of Vedic Sciences" | Formal-institution framing; the strapline now names the four fields |

**The fourth field was reframed.** *Swarashastra & Brahmavidya* is now
**Spiritual & Vedic Studies** at `/services/spiritual`, covering mantra,
meditation, swara sadhana and self-knowledge — offered as guidance *and* as a
fourth course, rather than as something gatekept.

**Certificates.** Courses carry a **Course Completion Certificate** and nothing
more. The About page states plainly that these are not university degrees or
government-recognised qualifications. Do not soften that sentence.

**Qualifications** now read `M.A. in Astrology` and
`Ph.D. scholar — research in progress`. Confirm both, and add the awarding
university and year when available. If either is not exact, delete the line —
the block is built to look right with one, or none.

---

## Site structure

| Route | What it is |
|---|---|
| `/` | Hero, practice statement, four fields, principal services, method, founder, institutions, four courses, FAQ, contact |
| `/about` | Editorial profile of Sri K. Sreenivasa Reddy |
| `/services/vastu` | 15 sub-services, grouped into 4 clusters |
| `/services/jyotisha` | 19 sub-services, grouped into 5 clusters |
| `/services/numerology` | 12 sub-services, grouped into 4 clusters |
| `/services/spiritual` | Two study areas, in a deliberately quieter register |

The three consultation verticals share `VerticalPage.tsx` and are driven
entirely by their data file — adding a vertical is a data file plus one line in
`verticals.ts`. The fourth uses its own component and stylesheet, because a page
that looked like the other three would be selling something that is not for
sale.

Sub-service pages still carry their full content; what was removed was the
advertised *count*, the fee table and the per-service turnaround.

---

## Photography

`public/img/acharya-portrait.*` and `acharya-square.*`, generated from
`source/MST_9638.JPG.jpeg`. The 10 MB original lives in `source/` and is **not**
in `public/`, so it never ships.

**Processed at build time, not with CSS filters.** Orientation is corrected
from the EXIF data (the original is rotated), then a gentle S-curve, a light
vignette and an unsharp pass. No runtime `filter` runs on scroll.

The photograph was black and white for one revision; it is now in colour at the
client's request, on the same crops so nothing shifts. The greyscale recipe — a
red-weighted channel mix of 0.46 R / 0.40 G / 0.14 B, which drops the blue
studio backdrop to a deep neutral grey on its own — is recorded here in case it
is wanted again.

| File | Size | Where |
|---|---|---|
| `acharya-portrait` | 1100 × 1393 | Founder block, About hero |
| `acharya-square` | 560 × 560 | Circular byline on the four service pages |
| `og-card` | 1200 × 630 | Open Graph card, rendered with headless Chrome so it uses real Poppins |

---

## Still to supply

| What | Where |
|---|---|
| **Organisation name** | `Sanātana Vidyā Kendra` is a working title. It appears in the header, footer, page titles, the OG card and the favicon |
| Email address | Not yet on the site. Phone and WhatsApp are set to +91 83090 96407 |
| Door number and PIN | `footer.addr` — the rest of the address is set |
| Qualification detail | University and year for the M.A.; the Ph.D. institution |
| Testimonials | The section was removed. It can return once there are genuine, attributed quotes |

---

## Known trade-off

This is a client-rendered SPA, so with JavaScript disabled the page is blank and
a crawler that does not execute JS sees only the static tags in `index.html`.
For a business that would benefit from organic search, the fix is prerendering
or a move to Next.js.

The main bundle is ~164 KB gzipped. Routes are code-split, but `Header.tsx`
imports `verticalById` to build the mega menu, which pulls all three vertical
content files into the main chunk though the menu needs only each service's
name. Splitting each into a light menu half and a heavy content half is worth
roughly 60–70 KB. `three.js` is already lazy and is not in that figure.
