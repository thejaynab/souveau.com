# Olmo Studio - Modern Digital Studio Template

> Professional, high-performance digital studio template built with Astro 5, React 19, and Tailwind CSS v4. Features cinematic GSAP animations, buttery smooth scrolling, and a robust contact system.

[![Astro](https://img.shields.io/badge/Astro-5.17-FF5D01?logo=astro)](https://astro.build/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.14-88CE02?logo=gsap)](https://gsap.com/)

---

## 📑 Table of Contents

1. [Features](#-features)
2. [Tech Stack](#-tech-stack)
3. [Quick Start](#-quick-start)
4. [Project Structure](#-project-structure)
5. [Pages](#-pages)
6. [Components](#-components)
7. [Configuration Files](#-configuration-files)
8. [Contact Form](#-contact-form)
9. [Deployment](#-deployment)
10. [Environment Variables](#-environment-variables)
11. [SEO Management](#-seo-management)
12. [Customization](#-customization)
13. [Animations](#-animations)
14. [Content Management](#-content-management)
15. [Things to Keep in Mind](#-things-to-keep-in-mind)
16. [Resources](#-resources)
17. [Known Limitations](#-known-limitations)

---

## ✨ Features

### Core Features

- ⚡ **Ultra-fast Performance** - Built with Astro 5 for optimal loading speeds
- 🎨 **Modern Design** - Contemporary UI with Tailwind CSS v4
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🔄 **Smooth Animations** - GSAP-powered professional transitions
- 🌐 **SEO Optimized** - Complete meta tags, sitemap, and robots.txt
- ♿ **Accessible** - WCAG compliant components

### Advanced Features

- 🔒 **Secure Contact Form** - Server-side validation with Zod + email delivery via Resend
- 📧 **Email Integration** - Resend API for reliable email delivery
- 🎯 **React Islands** - Selective hydration for maximum efficiency
- 🌍 **Centralized Content** - All text content managed in `labels.ts` for easy updates
- 📊 **Type-Safe Configuration** - TypeScript-powered config files for services, projects, team, and values
- 🎭 **Smooth Scrolling** - Lenis integration for buttery-smooth scroll experience
- 🃏 **Sticky Card Stacking** - Desktop project cards stack with scroll-driven scale animations

---

## 🛠️ Tech Stack

### Framework & Core

- **[Astro 5.17](https://astro.build/)** - Static Site Generator with SSR
- **[React 19.2](https://react.dev/)** - Interactive islands
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4.1](https://tailwindcss.com/)** - Utility-first styling
- **[GSAP 3.14](https://gsap.com/)** - Professional animations

### Libraries & Tools

- **[Lenis 1.3](https://lenis.darkroom.engineering/)** - Smooth scrolling
- **[astro-icon 1.1](https://github.com/natemoo-re/astro-icon)** - Icon system with Iconify
- **[class-variance-authority](https://cva.style/)** - Component variants
- **[Resend](https://resend.com/)** - Email API
- **[clsx](https://github.com/lukeed/clsx)** + **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Conditional class utilities

### Deployment

- **[Vercel Adapter](https://docs.astro.build/en/guides/integrations-guide/vercel/)** - SSR deployment with edge functions
- **[Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** - Automatic sitemap generation

---

## 🚀 Quick Start

### Prerequisites

- Node.js 20.12.2 or higher
- npm 9.0.0 or higher

### Installation

```bash
# Unzip or clone the project folder
cd olmo-studio-code

# Install dependencies
npm install

# Set up environment variables (optional for basic usage)
cp .env.template .env
# Edit .env with your credentials if using contact form

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Build for Production

```bash
# Build the project
npm run build
```

---

## 📂 Project Structure

```
olmo-studio/
├── src/
│   ├── actions/           # Server actions (contact form)
│   ├── assets/            # Optimized images and media
│   ├── components/
│   │   ├── common/        # Shared components (BaseHead, FeatureGrid, ProjectGrid, etc.)
│   │   ├── sections/      # Page-specific sections
│   │   │   ├── home/      # Homepage sections
│   │   │   ├── works/     # Works page sections
│   │   │   ├── studio/    # Studio page sections
│   │   │   ├── services/  # Services slug sections
│   │   │   └── contact/   # Contact page sections
│   │   └── ui/            # Reusable UI components
│   │       ├── buttons/   # Button component
│   │       ├── cards/     # ProjectCard, ViewAllCard
│   │       └── nav/       # Navbar, MobileMenu
│   ├── config/            # Static data (labels, nav, values, team, etc.)
│   ├── content/           # Content collections (projects, services, legals)
│   ├── hooks/             # Custom hooks
│   ├── icons/             # Custom SVG icons
│   ├── layouts/           # Base page layout
│   ├── lib/               # Utility functions
│   ├── pages/             # Application routes
│   ├── styles/            # Global CSS and Tailwind config
│   └── content.config.ts  # Content collection schemas
├── public/                # Static files (fonts, images, served as-is)
├── astro.config.mjs       # Astro configuration
└── package.json           # Dependencies
```

---

## 📄 Pages

### 1. Homepage (`/`)

- Hero section with animated headline and video
- About / Who We Are section
- Partner logos grid
- "Why Choose Us" feature cards (dark theme)
- Services showcase (from content collection)
- Featured projects with sticky stacking animation
- Testimonials carousel
- CTA section

### 2. Works (`/works`)

- Full portfolio grid
- Individual project pages (`/works/[slug]`)
- Sticky card stacking animation on desktop
- Simple vertical stack on mobile

### 3. Studio (`/studio`)

- Hero section with studio overview
- "Our Story" section
- Core values grid (light theme)
- Work process timeline
- Team member profiles
- CTA section

### 4. Contact (`/contact`)

- Contact information section
- Contact form with validation
- FAQ section

### 5. Services (`/[slug]`)

- Individual service detail pages (from content collection)

### 6. Legal Pages

- **Terms of Service** (`/terms-of-service`)
- **Privacy Policy** (`/privacy-policy`)
- **Licensing** (`/licensing`)
- **robots.txt** (`/robot.txt.ts`)
- **404 Error Page** (`/404`)

---

## 🧩 Components

The project follows a modular component architecture, organized to promote reusability and maintainability.

### 1. Common Components (`src/components/common`)

Shared components used across multiple pages or layouts.

| Component                   | Description                | Key Features                                                         |
| --------------------------- | -------------------------- | -------------------------------------------------------------------- |
| `BaseHead.astro`            | HTML `<head>` manager      | Handles SEO meta tags, fonts, and Open Graph data dynamically.       |
| `Cta.astro`                 | Call to Action Section     | Reusable "Let's work together" section with `dark` prop support.     |
| `LoadingScreen.astro`       | Initial Loader             | Full-screen loading animation that hides once content is ready.      |
| `MarqueeText.astro`         | Animated Marquee Label     | Scrolling text label used above section titles, supports `dark` prop.|
| `FeatureGrid.astro`         | Feature Card Grid          | Reusable grid for values/features with `dark`/light theme support.   |
| `ProjectGrid.astro`         | Project Card Grid          | Reusable grid with sticky stacking animation and `showViewAll` prop. |
| `Faq.astro`                 | FAQ Wrapper                | FAQ section wrapper component.                                       |
| `ItemHoverImagesEffect.tsx` | Interactive Hover Effect   | React component for hover effects with image previews.               |

### 2. UI Components (`src/components/ui`)

Atomic and molecule-level UI elements.

- **Navigation** (`ui/nav/`)
  - `Navbar.astro`: Main sticky header with logo, nav links, and scroll-triggered shrink animation (GSAP). Active page indicator with underline.
  - `MobileMenu.tsx`: React-powered fullscreen overlay menu with image previews on hover, smooth open/close transitions, and active state highlighting.

- **Buttons** (`ui/buttons/`)
  - `Button.astro`: Standardized button component using `class-variance-authority` with variants (`primary`, `secondary`, `none`, `underline`) sizes (`sm`, `md`, `lg`, `none`) and hover effects (`shadowOffset`, `shadowOffsetDark`, `bgFillV`).

- **Cards** (`ui/cards/`)
  - `ProjectCard.astro`: Displays project thumbnail and title with hover effects.
  - `ViewAllCard.astro`: Special card linking to the full portfolio, with `mobile` and `desktop` variants.

- **General**
  - `Accordion.astro`: Accessible accordion component used for FAQs.
  - `Footer.astro`: Site footer with navigation links, social links, contact info, legal links, and GSAP animations.

### 3. Section Components (`src/components/sections`)

Large, page-specific composition blocks.

#### Home Sections (`sections/home/`)

| Component                 | Description                                                 |
| ------------------------- | ----------------------------------------------------------- |
| `HeroHome.astro`          | High-impact landing section with animated text and video.   |
| `AboutHome.astro`         | Brief agency introduction / "Who We Are".                   |
| `Partners.astro`          | Scrolling partner/client logo grid.                         |
| `ChoseUs.astro`           | "Why Choose Us" section using `FeatureGrid` (dark variant). |
| `Services.astro`          | Services showcase from content collection.                  |
| `WorksHome.astro`         | Featured projects using `ProjectGrid` with `showViewAll`.   |
| `Testimonials.astro`      | Testimonials section wrapper.                               |
| `TestimonialsCarousel.tsx` | React-powered testimonial slider with auto-play.           |

#### Works Sections (`sections/works/`)

| Component                | Description                                                      |
| ------------------------ | ---------------------------------------------------------------- |
| `WorkContent.astro`      | Works page layout using `ProjectGrid` (no ViewAll card).         |
| `WorkSlugContent.astro`  | Dynamic content renderer for individual project pages.           |
| `WorkSlugMoreWorks.astro`| "More Works" section on individual project pages.                |

#### Studio Sections (`sections/studio/`)

| Component              | Description                                                    |
| ---------------------- | -------------------------------------------------------------- |
| `HeroStudio.astro`     | Studio page header with animated intro.                        |
| `OurStory.astro`       | Agency story/history section.                                  |
| `OurValues.astro`      | Core values using `FeatureGrid` (light variant).               |
| `WorkProcess.astro`    | Step-by-step work methodology timeline.                        |
| `Team.astro`           | Team member profiles with social links.                        |

#### Contact Sections (`sections/contact/`)

| Component               | Description                                                     |
| ------------------------ | --------------------------------------------------------------- |
| `ContactSection.astro`   | Main contact section with heading, description, and info.       |
| `ContactInfo.astro`      | Contact details display (address, email, phone).                |
| `ContactForm.astro`      | Form with validation, submission states, and Astro Actions.     |

#### Services Sections (`sections/services/`)

| Component             | Description                                       |
| --------------------- | ------------------------------------------------- |
| `SlugServices.astro`  | Individual service page content renderer.         |

---

## ⚙️ Configuration Files

The project uses multiple configuration files in `src/config/` to manage different data. All files export TypeScript types for type safety.

In the `image` fields you can put both external links and images from the assets/public folder.

### 1. Global Labels (`labels.ts`)

Centralized text content and translations for the entire website.

```typescript
export const labels = {
  // Company
  'company.name': 'OLMO STUDIO',
  'company.short.name': 'OLMO',

  // Hero Section
  'index.hero.headline': '...',

  // Meta tags (SEO)
  'meta.index.title': 'Olmo Studio',
  'meta.index.description': '...',

  // ... more labels
} as const;
```

**Used in:** All pages and components for text content via `t()` helper.

### 2. Navigation Items (`navItems.data.ts`)

Defines the main navigation menu links and footer links.

```typescript
export const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'Work', href: '/works' },
  { title: 'Studio', href: '/studio' },
  { title: "Let's Chat", href: '/contact' },
];

export const footerOtherItems: NavItem[] = [
  { title: 'Term of Use', href: '/terms-of-service' },
  { title: 'Privacy Policy', href: '/privacy-policy' },
  { title: 'Licensing', href: '/licensing' },
  { title: 'FAQ', href: '/contact/#faq-section' },
];
```

**Used in:** `Navbar.astro`, `MobileMenu.tsx`, `Footer.astro`.

### 3. "Why Choose Us" Data (`choseUs.data.ts`)

Features displayed on the homepage in the dark-themed feature grid.

```typescript
export type ChoseUs = {
  title: string;
  description: string;
  icon: string;
  image?: ImageMetadata | string;
};

export const choseUs: ChoseUs[] = [
  {
    title: 'Fast turnarounds',
    description: 'Timelines are respected here...',
    icon: 'clock',
    image: tabletImage, // local asset
  },
  // ...
];
```

**Used in:** `ChoseUs.astro` → `FeatureGrid.astro` (dark mode).

### 4. Core Values (`values.data.ts`)

Values displayed on the Studio page in the light-themed feature grid.

```typescript
export type Value = {
  title: string;
  description: string;
  icon: string;
  image?: ImageMetadata | string;
};

export const values: Value[] = [
  {
    title: 'Creative Excellence',
    description: '...',
    icon: 'light',
    image: 'https://images.unsplash.com/...', // external URL
  },
  // ...
];
```

**Used in:** `OurValues.astro` → `FeatureGrid.astro` (light mode).

### 5. Team Members (`team.data.ts`)

Profiles for the studio's team members.

```typescript
export type TeamMember = {
  name: string;
  role: string;
  image: string;
  socials: Social[];
  description: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: 'Oliver Bennett',
    role: 'CEO, FOUNDER',
    image: '/src/assets/team/oliver.webp',
    socials: [
      { icon: 'linkedin', url: 'https://www.linkedin.com/' },
      { icon: 'instagram', url: 'https://www.instagram.com/' },
    ],
    description: '...',
  },
  // ...
];
```

**Used in:** `Team.astro` (Studio page).

### 6. Work Process (`workProcess.data.ts`)

Steps outlining the agency's working methodology.

```typescript
export type WorkProcess = {
  id: number;
  title: string;
  description: string;
};

export const workProcess: WorkProcess[] = [
  { id: 1, title: 'Discovery', description: '...' },
  { id: 2, title: 'Planning', description: '...' },
  { id: 3, title: 'Execution', description: '...' },
];
```

**Used in:** `WorkProcess.astro` (Studio page).

### 7. Partners (`partners.data.ts`)

Partner/client logos. The logo name must match the icon name placed in `/src/icons/logo-brands/`.

```typescript
export type Partner = {
  name: string;
  logo: string;
};

export const partners: Partner[] = [
  { name: 'name-1', logo: 'logoipsum-1' },
  // ...
];
```

**Used in:** `Partners.astro` (Homepage).

### 8. Testimonials (`testimonials.data.ts`)

Client testimonials for the carousel on the homepage.

```typescript
export type Testimonial = {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Olmo revamped our website and branding...',
    author: 'Joe Glodberg',
    role: 'CEO',
    image: 'https://i.pravatar.cc/150?img=11',
  },
  // ...
];
```

**Used in:** `TestimonialsCarousel.tsx` (Homepage).

### 9. FAQs (`faq.data.ts`)

Frequently asked questions and answers.

```typescript
export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: 'What services does your agency offer?',
    answer: '...',
  },
  // ...
];
```

**Used in:** `Faq.astro` → `Accordion.astro` (Contact page).

### 10. Social Links & Contact (`socialLinks.data.ts`)

Social media profiles and company contact details.

```typescript
export const socialLinks: SocialLink[] = [
  { href: 'https://www.instagram.com/', label: 'Instagram' },
  { href: 'https://www.facebook.com/', label: 'Facebook' },
  { href: 'https://www.linkedin.com/', label: 'LinkedIn' },
  { href: 'https://twitter.com/', label: 'X.com' },
];

export const contactInfo: ContactInfo = {
  address: {
    street: 'Mendoza, New York',
    city: 'NY 11111',
    country: 'United States',
  },
  email: 'contact@olmo-studio.com',
  phone: '(+000) 111 222 333',
  workingHours: 'Monday - Friday | 9AM - 5PM',
  workingDays: 'Sat-Sun: Closed',
};
```

**Used in:** `Footer.astro`, `ContactSection.astro`, `ContactInfo.astro`.

---

## 📧 Contact Form

The contact form is powered by **Astro Actions** with server-side validation and **Resend** for email delivery.

### Features

- ✅ Server-side validation with Zod
- ✅ Email delivery via Resend API
- ✅ Loading states
- ✅ Error handling
- ✅ Success feedback
- ✅ Ready for rate limiting with Upstash Redis

### Input Validation

Zod schema validation:

```typescript
input: z.object({
  name: z.string().min(3, "First name is required").max(30, "First name must be at most 30 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(500, "Message must be at most 500 characters"),
  company: z.string().optional(), // Honeypot field
}),
```

### Honeypot Anti-Spam

Hidden field that bots fill but humans don't see:

```typescript
// In form
<input
  type="text"
  name="company"
  style="position:absolute;left:-9999px;width:1px;height:1px;"
  tabindex="-1"
  autocomplete="off"
  aria-hidden="true"
/>

// In action
if (company) {
  throw new ActionError({
    code: "BAD_REQUEST",
    message: "Invalid submission detected",
  });
}
```

### Email Integration (Resend)

Configure in `.env`:

```env
RESEND_API_KEY=re_your_api_key
RESEND_EMAIL=onboarding@resend.dev
FROM_EMAIL=your-email@example.com
```

### Rate Limiting with Upstash Redis (Optional)

**30-second cooldown** between submissions per IP address using Redis for distributed rate limiting.

#### Setup

1. Create a free account at [Upstash](https://upstash.com/).
2. Create a Redis database.
3. Add your credentials to your `.env` file:
   ```env
   UPSTASH_REDIS_REST_URL=your_url_here
   UPSTASH_REDIS_REST_TOKEN=your_token_here
   ```
4. Open `src/actions/index.ts` and uncomment the Redis-related code sections.

**Why Redis?**

- ✅ Distributed rate limiting (works across multiple servers)
- ✅ Automatic key expiration
- ✅ Persistent storage
- ✅ Free tier available

**Email template** can be customized in `src/actions/index.ts`.

---

## 🚀 Deployment

### Platform Configuration

The project uses Vercel adapter by default, but you can easily switch to other platforms.

#### Current Setup (Vercel)

```typescript
// astro.config.mjs
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: 'https://olmo-studio.vercel.app',
});
```

#### Switch to Netlify

```bash
# Remove Vercel adapter
npm uninstall @astrojs/vercel

# Install Netlify adapter
npm install @astrojs/netlify
```

```typescript
// astro.config.mjs
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
});
```

#### Other Platforms

- **Cloudflare**: `@astrojs/cloudflare`
- **Node**: `@astrojs/node`
- **Deno**: `@astrojs/deno`

See [Astro Adapters Docs](https://docs.astro.build/en/guides/deploy/)

---

## 🔐 Environment Variables

Create `.env` file in root (copy from `.env.template`):

```env
# Resend Email API (Required for contact form)
# Get your API key from: https://resend.com/api-keys
RESEND_API_KEY=re_your_api_key_here

# Email address verified in Resend (sender)
RESEND_EMAIL=onboarding@resend.dev

# Your email address (recipient of contact form submissions)
FROM_EMAIL=your-email@example.com

# Upstash Redis (Optional - for rate limiting)
# Create free database at: https://console.upstash.com/
UPSTASH_REDIS_REST_URL="https://your-redis-url.upstash.io"
UPSTASH_REDIS_REST_TOKEN="your-redis-token-here"
```

### Getting API Keys

#### 1. Resend (Email Service)

1. Sign up at [resend.com](https://resend.com/)
2. Go to **API Keys** section
3. Create new API key
4. Copy to `RESEND_API_KEY`
5. Verify your domain or use `onboarding@resend.dev` for testing
6. Set `RESEND_EMAIL` to your verified sender email
7. Set `FROM_EMAIL` to where you want to receive contact form emails

#### 2. Upstash Redis (Rate Limiting - Optional)

1. Sign up at [upstash.com](https://upstash.com/)
2. Click **Create Database**
3. Choose **Global** for best performance
4. Select **Free** tier (25MB, 10K commands/day)
5. Copy **REST URL** to `UPSTASH_REDIS_REST_URL`
6. Copy **REST Token** to `UPSTASH_REDIS_REST_TOKEN`

---

## 🔍 SEO Management

The project implements a centralized SEO system using the `labels.ts` configuration file and the `BaseHead.astro` component.

### Architecture Overview

```
src/config/labels.ts → Page Components → BaseHead.astro → HTML <head>
```

### BaseHead Component

**Location:** `src/components/common/BaseHead.astro`

**Props:**
| Prop          | Type     | Required | Description                            |
| ------------- | -------- | -------- | -------------------------------------- |
| `title`       | `string` | Yes      | Page title (displays in browser tab)   |
| `description` | `string` | Yes      | Meta description (search results)      |
| `keywords`    | `string` | No       | SEO keywords (comma-separated)         |

**Generated Tags:**

- `<title>` - Page title
- `<meta name="description">` - Meta description
- `<meta name="keywords">` - SEO keywords
- `<meta property="og:*">` - Open Graph tags for social media
- `<meta name="twitter:*">` - Twitter Card tags
- `<link rel="canonical">` - Canonical URL

### Usage in Pages

```astro
---
import BaseHead from '@/components/common/BaseHead.astro';
import { t } from '@/lib/utils';
---

<html lang="en">
  <head>
    <BaseHead
      title={t('meta.index.title')}
      description={t('meta.index.description')}
      keywords={t('meta.index.keywords')}
    />
  </head>
  <body>
    <!-- Page content -->
  </body>
</html>
```

### SEO Configuration by Page

| Page          | Title Key             | Description Key             | Keywords Key             |
| ------------- | --------------------- | --------------------------- | ------------------------ |
| **Homepage**  | `meta.index.title`    | `meta.index.description`    | `meta.index.keywords`    |
| **Studio**    | `meta.studio.title`   | `meta.studio.description`   | `meta.studio.keywords`   |
| **Contact**   | `meta.contact.title`  | `meta.contact.description`  | `meta.contact.keywords`  |
| **Works**     | `meta.works.title`    | `meta.works.description`    | `meta.works.keywords`    |
| **404**       | `meta.404.title`      | `meta.404.description`      | -                        |

### How to Update SEO

#### 1. Update Existing SEO Tags

Edit the values in `src/config/labels.ts`:

```typescript
'meta.index.title': 'Your New Title | Olmo Studio',
'meta.index.description': 'Your updated description here',
'meta.index.keywords': 'keyword1, keyword2, keyword3',
```

#### 2. Add SEO for a New Page

1. Add new keys to `labels.ts`:

   ```typescript
   'meta.newpage.title': 'New Page | Olmo Studio',
   'meta.newpage.description': 'Description for the new page',
   'meta.newpage.keywords': 'relevant, keywords',
   ```

2. Use in your page:
   ```astro
   <BaseHead
     title={t('meta.newpage.title')}
     description={t('meta.newpage.description')}
     keywords={t('meta.newpage.keywords')}
   />
   ```

### SEO Best Practices

✅ **Title Tags (55-60 characters)** — Keep under 60 characters, include your brand name, make it unique per page.

✅ **Meta Descriptions (150-160 characters)** — Include a call-to-action, accurately summarize page content.

✅ **Keywords (Optional)** — Use 5-10 relevant keywords. Modern SEO relies more on content than keyword meta tags.

✅ **Open Graph Tags** — Automatically generated by `BaseHead.astro`, improves social media sharing appearance.

✅ **Canonical URLs** — Automatically set to current page URL, prevents duplicate content issues.

### Additional SEO Features

- **Semantic HTML**: Proper heading hierarchy (`h1`, `h2`, `h3`)
- **Alt Text**: All images should include descriptive alt attributes
- **Sitemap**: Auto-generated by Astro (configure in `astro.config.mjs`)
- **Robots.txt**: Generated via dynamic route at `src/pages/robot.txt.ts`
- **Performance**: Fast loading times boost SEO rankings
- **Mobile-First**: Responsive design is a ranking factor
- **Accessibility**: WCAG compliance helps SEO

---

## 🎨 Customization

### Colors

Edit `src/styles/global.css` to customize the color palette:

```css
@theme inline {
  /* Backgrounds & Surfaces */
  --color-primary: #F9F8F6;
  --color-secondary: #191919;

  /* Typography */
  --color-body: #0A0A0A;
  --color-muted: #4B5563;
  --color-muted-light: #9CA3AF;

  /* Accent & UI */
  --color-orange: #C2410C;
  --color-dark: #191919;
  --color-light: #F9F8F6;
}
```

### Typography

The fonts are in the `public/fonts` directory.
Update fonts in `src/styles/global.css`:

```css
@theme inline {
  --font-boldonse: 'Boldonse', 'Arial Narrow', sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
}
```

### Logo

Update the logo text in `src/config/labels.ts`:

```typescript
'company.name': 'YOUR COMPANY NAME',
'company.short.name': 'YOUR LOGO',
```

The logo is rendered as text using the `Boldonse` font in `Navbar.astro`.

### Work Pages (Individual Projects)

Individual project pages are generated from Markdown files located in `src/content/projects/`.

**Styling**: The layout and appearance of these pages are controlled by:

- **`src/styles/content-style.css`** — Typography, spacing, and formatting for project descriptions, media elements, and project headers.
- **`src/styles/content-legal-style.css`** — Specific styling for legal pages (Terms, Privacy, Licensing).

### Page Data

Edit files in `src/config/` to customize text and information. See [Configuration Files](#-configuration-files) for details on each file.

---

## 🎭 Animations

All animations are powered by **GSAP** with **Lenis** for smooth scrolling.

### Key Animation Features

- **Scroll-triggered animations** - Elements animate on scroll using `ScrollTrigger`
- **Timeline-based sequences** - Coordinated animation sequences
- **Sticky card stacking** - Projects stack with scale animation on desktop scroll
- **Navbar shrink** - Header shrinks and gets rounded corners on scroll
- **Smooth scrolling** - Lenis integration for buttery-smooth scroll
- **Performance optimized** - Hardware-accelerated transforms with `will-change`

### SSR Considerations

Due to Server-Side Rendering, animations include:

- **Client-side only execution** - Guard checks for `window` object
- **Proper cleanup** - `gsap.context()` for component scoping and cleanup
- **Page transition support** - Cleanup on `astro:before-swap`, re-init on `astro:page-load`
- **No flickering** - Animations initialize after hydration

---

## 📝 Content Management

### Adding New Works

Works are managed using **Astro Content Collections** with type-safe schema validation via Zod.

#### Step 1: Image Configuration

There are two ways images are handled depending on where they appear:

**A. For the `coverImage` field (Frontmatter):**
The main project image (shown on cards and headers) can be sourced from:

- **External URLs:** Paste the direct link (e.g., Unsplash, Cloudinary).
- **Public Folder:** Place files in `/public/projects/` and reference them as `/projects/my-image.webp`.

**B. For Content Images (Project Overview):**
If you want to add extra images inside the Markdown body (below the `---`):

- **Mandatory:** These images **must** be placed in the `/public/` folder.
- **Why?** Images stored in `src/assets/` are processed and renamed by Astro during the production build. Standard Markdown syntax cannot resolve these new names, resulting in broken links. Images in `public/` are served exactly as they are.

#### Step 2: Create Project File

Create a new `.md` file in `src/content/projects/` (e.g., `apex-logistics.md`):

```markdown
---
title: 'Apex Logistics'
tags: ['Rebranding', 'B2B Lead Gen', 'LinkedIn Automation']
description: 'Modernizing a 20-year-old logistics company and building an automated outbound lead generation engine.'
coverImage: '/projects-img/apex-logistics/apex-logistics-01.webp'
client: 'Apex Global'
date: 2023-06-05
featured: true
clientLink: 'https://example.com/'
---

## Project Overview

This is the main description. To add an extra image here, ensure it is in the **public** folder.
```

#### Field Reference

| Field         | Type      | Required | Description                                                                |
| ------------- | --------- | -------- | -------------------------------------------------------------------------- |
| `title`       | `string`  | ✅       | The name of the project.                                                   |
| `description` | `string`  | ✅       | Short description of the project.                                          |
| `coverImage`  | `string`  | ✅       | Main project image. Supports external URLs or local paths.                 |
| `tags`        | `array`   | ✅       | List of technologies or keywords (e.g., `['Rebranding', 'B2B Lead Gen']`).|
| `clientLink`  | `string`  | ❌       | Client or live project URL (optional, must be a valid URL).                |
| `date`        | `date`    | ✅       | Project completion or publication date (e.g., `2025-01-30`).               |
| `client`      | `string`  | ❌       | Client name (optional).                                                    |
| `featured`    | `boolean` | ❌       | Whether the project is featured (optional, defaults to `false`).           |

#### Step 3: Write Content

Below the frontmatter (`---`), write your project details using standard Markdown.

#### Step 4: Verify

Your project will automatically appear on the `/works` page and its individual page at `/works/[slug]`.

### Adding New Services

Services are also managed via **Content Collections**.

Create a new `.md` file in `src/content/services/`:

```markdown
---
title: 'Brand Strategy'
description: 'We craft comprehensive brand strategies...'
image: '/services/brand-strategy.webp'
tags: ['Branding', 'Strategy', 'Identity']
---

## Service Details

Full markdown content here...
```

---

## 💡 Things to Keep in Mind

### Site Domain Configuration

Update your site domain in `astro.config.mjs`:

```typescript
export default defineConfig({
  site: 'https://your-domain.com', // Change to your domain
  // ...
});
```

### Featured Projects on Homepage

By default, the homepage displays **3 featured projects**. To customize this:

1. **Change the number of projects displayed:**
   Edit `src/pages/index.astro` and modify the `slice()` value:

```typescript
const projectFilter = projects.filter((project) => project.data.featured).slice(0, 3);
// Change the number 3 to display more or fewer projects
```

2. **Mark projects as featured:**
   In your project frontmatter (`.md` file), set `featured: true`:

```yaml
---
title: "My Project"
featured: true
# ...
---
```

Only projects with `featured: true` will appear on the homepage.

### Terms of Service & Privacy Policy

To customize the legal pages, edit the markdown files in `src/content/legals/`:

- **Terms of Service:** `src/content/legals/terms-of-service.md`
- **Privacy Policy:** `src/content/legals/privacy-policy.md`
- **Licensing:** `src/content/legals/licensing.md`

These pages are rendered dynamically via `src/pages/[legals].astro`.

### Asset Organization

- **Images** → `src/assets/` (optimized by Astro)
- **Static files** → `public/` (served as-is)
- **Icons** → Use custom SVG icons in `src/icons/`
- **Fonts** → `public/fonts/`

---

## 📚 Resources

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [GSAP Documentation](https://gsap.com/docs/)
- [Resend API Docs](https://resend.com/docs)
- [Lenis Docs](https://lenis.darkroom.engineering/)
- [Iconify Icons](https://icon-sets.iconify.design/)

---

## ❗ Known Limitations

- Contact form requires environment variables to be configured (`.env`) for email delivery
- Upstash free tier limits:
  - 10,000 commands per day
  - 25 MB storage
- Some GSAP animations rely on client-only APIs; SSR guards are applied
- The sticky card stacking animation on the Works page is desktop-only (`>= 1024px`)

---
