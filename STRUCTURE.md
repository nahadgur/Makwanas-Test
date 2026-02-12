# Project Structure & Architecture

## 📋 Overview

This is a Next.js 15 application using the App Router, TypeScript, and Tailwind CSS. The architecture follows Next.js best practices with clear separation of concerns.

## 🏗️ Architecture Decisions

### Why Next.js 15 (App Router)?

**Advantages over Vite:**
1. **Server-Side Rendering (SSR)**: Better SEO, faster initial page loads
2. **File-based Routing**: Automatic routing based on file structure
3. **API Routes**: Built-in backend API capabilities
4. **Image Optimization**: Automatic image optimization and lazy loading
5. **Built-in Font Optimization**: Google Fonts are automatically optimized
6. **Production-Ready**: Zero-config production builds
7. **Incremental Static Regeneration**: Best of both static and dynamic
8. **Better Performance**: Automatic code splitting, prefetching

### TypeScript Benefits

1. Type safety catches errors before runtime
2. Better IDE autocomplete and IntelliSense
3. Self-documenting code
4. Easier refactoring
5. Better team collaboration

## 📁 Detailed Structure

```
makwana-solicitors/
│
├── src/                          # Source code
│   │
│   ├── app/                      # Next.js 15 App Router
│   │   ├── layout.tsx            # Root layout (wraps all pages)
│   │   │   ├── Metadata configuration
│   │   │   ├── Font loading (Inter & Playfair Display)
│   │   │   └── Global HTML structure
│   │   │
│   │   ├── page.tsx              # Homepage (default route /)
│   │   │   └── Composes all homepage sections
│   │   │
│   │   └── globals.css           # Global styles
│   │       ├── Tailwind directives
│   │       ├── Custom scrollbar
│   │       └── Utility classes
│   │
│   ├── components/               # React components (presentational)
│   │   │
│   │   ├── Navbar.tsx            # Main navigation
│   │   │   ├── Sticky header with scroll effects
│   │   │   ├── Mobile hamburger menu
│   │   │   ├── Framer Motion animations
│   │   │   └── Client component ('use client')
│   │   │
│   │   ├── Hero.tsx              # Hero section
│   │   │   ├── Animated headline
│   │   │   ├── CTA buttons
│   │   │   └── Background effects
│   │   │
│   │   ├── Services.tsx          # Services grid
│   │   │   ├── Animated service cards
│   │   │   ├── Icon integration
│   │   │   └── Hover effects
│   │   │
│   │   ├── InteractiveExplainer.tsx  # Process walkthrough
│   │   │   ├── Step-by-step process
│   │   │   ├── Image gallery
│   │   │   └── Interactive navigation
│   │   │
│   │   ├── SuccessStories.tsx    # Case studies
│   │   │   ├── Story cards
│   │   │   ├── Category filters
│   │   │   └── Modal dialogs
│   │   │
│   │   ├── Process.tsx           # How we work timeline
│   │   │   ├── Step indicators
│   │   │   └── Visual flow
│   │   │
│   │   ├── Testimonials.tsx      # Client reviews
│   │   │   ├── Review cards
│   │   │   ├── Star ratings
│   │   │   └── Auto-scroll carousel
│   │   │
│   │   ├── NewsFeed.tsx          # Latest updates
│   │   │   ├── News cards
│   │   │   ├── Date formatting
│   │   │   └── Category badges
│   │   │
│   │   ├── Contact.tsx           # Contact form
│   │   │   ├── Form validation
│   │   │   ├── Direct contact CTAs
│   │   │   └── Map integration ready
│   │   │
│   │   ├── Footer.tsx            # Site footer
│   │   │   ├── Multi-column layout
│   │   │   ├── Quick links
│   │   │   └── Social media icons
│   │   │
│   │   │   ├── Floating chat button
│   │   │   ├── Message history
│   │   │   └── Smooth animations
│   │   │
│   │   └── Logo.tsx              # SVG logo component
│   │       ├── Multiple variants (light/dark)
│   │       ├── Responsive sizing
│   │       └── Reusable across site
│   │
│   ├── constants/                # Static data & configuration
│   │   └── index.tsx             # Central data store
│   │       ├── Navigation items
│   │       ├── Services data
│   │       ├── Testimonials
│   │       ├── Success stories
│   │       ├── Process steps
│   │       ├── News items
│   │       └── Contact information
│   │
│   ├── lib/                      # Utilities & services
│   │       ├── API initialization
│   │       ├── Chat session management
│   │       └── Error handling
│   │
│   └── types/                    # TypeScript definitions
│       └── index.ts              # Shared type definitions
│           ├── NavItem
│           ├── Service
│           ├── Testimonial
│           ├── SuccessStory
│           ├── ExplainerStep
│           ├── NewsItem
│           └── ChatMessage
│
├── public/                       # Static assets (served as-is)
│   ├── favicon.ico               # Browser tab icon
│   └── Logo.png                  # Company logo
│
├── Configuration Files
│   ├── next.config.js            # Next.js configuration
│   │   ├── Image optimization settings
│   │   ├── Allowed image domains
│   │   └── Build settings
│   │
│   ├── tailwind.config.js        # Tailwind CSS configuration
│   │   ├── Custom color palette (makwana)
│   │   ├── Font family variables
│   │   ├── Content paths
│   │   └── Theme extensions
│   │
│   ├── postcss.config.js         # PostCSS configuration
│   │   └── Tailwind & Autoprefixer plugins
│   │
│   ├── tsconfig.json             # TypeScript configuration
│   │   ├── Compiler options
│   │   ├── Path aliases (@/*)
│   │   ├── Strict mode enabled
│   │   └── Next.js plugin
│   │
│   ├── .eslintrc.json            # ESLint configuration
│   │   └── Next.js recommended rules
│   │
│   ├── package.json              # Dependencies & scripts
│   │   ├── Next.js 15
│   │   ├── React 19
│   │   ├── TypeScript
│   │   ├── Tailwind CSS
│   │   ├── Framer Motion
│   │   ├── Lucide React
│   │
│   └── .env.local                # Environment variables (gitignored)
│       └── API keys & secrets
│
└── Documentation
    ├── README.md                 # Main documentation
    ├── DEPLOYMENT.md             # Deployment guide
    └── STRUCTURE.md              # This file
```

## 🔄 Data Flow

```
1. User visits site
   ↓
2. Next.js Server renders layout.tsx
   ↓
3. Loads global styles (globals.css)
   ↓
4. Renders page.tsx (homepage)
   ↓
5. Hydrates client components with 'use client'
   ↓
6. Components fetch data from constants/
   ↓
7. User interactions trigger animations
   ↓
   ↓
   ↓
10. Real-time chat responses
```

## 🎨 Component Pattern

### Server Components (Default)
- Rendered on server
- No JavaScript sent to client
- Better performance
- Examples: Logo, Footer, Process

### Client Components ('use client')
- Interactive components
- Use React hooks
- Browser APIs

## 🗂️ File Naming Conventions

- **Components**: PascalCase (e.g., `Navbar.tsx`)
- **Routes**: lowercase (e.g., `page.tsx`, `layout.tsx`)
- **Types**: PascalCase interfaces (e.g., `NavItem`, `Service`)
- **Constants**: UPPER_SNAKE_CASE exports (e.g., `NAV_ITEMS`)

## 🚀 Import Aliases

Using `@/*` alias for clean imports:

```typescript
// ❌ Old way (relative paths)
import { Service } from '../../../types'
import { SERVICES } from '../../../constants'

// ✅ New way (clean aliases)
import { Service } from '@/types'
import { SERVICES } from '@/constants'
```

Configured in `tsconfig.json`:
```json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

## 🎯 Best Practices Implemented

### 1. **Separation of Concerns**
- Components: UI only
- Constants: Data only
- Lib: Business logic
- Types: Type definitions

### 2. **Performance**
- Server components by default
- Client components only when needed
- Lazy loading with dynamic imports
- Optimized fonts and images

### 3. **Maintainability**
- TypeScript for type safety
- Consistent file structure
- Clear naming conventions
- Comprehensive documentation

### 4. **Scalability**
- Easy to add new pages (create `src/app/new-page/page.tsx`)
- Easy to add new components
- Centralized data management
- Modular architecture

## 📊 Adding New Features

### Add a New Page

1. Create `src/app/new-page/page.tsx`:
```typescript
export default function NewPage() {
  return <div>New Page Content</div>
}
```

2. Automatically available at `/new-page`

### Add a New Component

1. Create `src/components/NewComponent.tsx`:
```typescript
'use client' // Only if interactive

export default function NewComponent() {
  return <div>New Component</div>
}
```

2. Import in any page:
```typescript
import NewComponent from '@/components/NewComponent'
```

### Add New Data

1. Add to `src/constants/index.tsx`:
```typescript
export const NEW_DATA = [...]
```

2. Import where needed:
```typescript
import { NEW_DATA } from '@/constants'
```

## 🔐 Environment Variables

**Public (client-side):**
- Must start with `NEXT_PUBLIC_`
- Available in browser
- Example: `NEXT_PUBLIC_GEMINI_API_KEY`

**Private (server-side only):**
- No prefix needed
- Never sent to browser
- Example: `DATABASE_URL`

## 📦 Build Output

```
npm run build
```

Creates optimized production build in `.next/`:
- Minified JavaScript
- Optimized CSS
- Server-side code
- Static assets

## 🧪 Testing (Future)

Recommended setup:
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom jest
```

Test structure:
```
src/
  components/
    __tests__/
      Navbar.test.tsx
```

## 📈 Future Enhancements

1. **Blog System**: Add `src/app/blog/` route
2. **Case Studies**: Individual case pages
3. **Admin Panel**: Manage content
4. **CMS Integration**: Contentful or Sanity
5. **Analytics**: Google Analytics 4
6. **Form Backend**: Email integration
7. **Booking System**: Appointment scheduling
8. **Multi-language**: i18n support
