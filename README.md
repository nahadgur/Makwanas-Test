# Makwana Solicitors Website

Modern, high-performance Next.js 15 website for Makwana Solicitors - Specialist legal representation for fare evasion, blue badge fraud, and criminal defense cases.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Playfair Display (Google Fonts)

## 📁 Project Structure

```
makwana-solicitors/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout with fonts & metadata
│   │   ├── page.tsx          # Homepage
│   │   └── globals.css       # Global styles & Tailwind
│   ├── components/           # React components
│   │   ├── Navbar.tsx        # Navigation with mobile menu
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Services.tsx      # Services grid
│   │   ├── InteractiveExplainer.tsx  # Process explainer
│   │   ├── SuccessStories.tsx        # Case studies
│   │   ├── Process.tsx       # How we work
│   │   ├── Testimonials.tsx  # Client reviews
│   │   ├── NewsFeed.tsx      # Latest updates
│   │   ├── Contact.tsx       # Contact form
│   │   ├── Footer.tsx        # Footer
│   │   └── Logo.tsx          # SVG logo component
│   ├── constants/            # Static data & configuration
│   │   └── index.tsx         # Services, testimonials, etc.
│   └── types/                # TypeScript type definitions
│       └── index.ts
├── public/                   # Static assets
│   ├── favicon.ico
│   └── Logo.png
├── .env.local                # Environment variables (gitignored)
├── .env.example              # Environment variables template
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies & scripts
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Update with your contact information if needed.

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm run start
```

## 🎨 Design System

### Colors (Tailwind)

```javascript
makwana: {
  dark: '#380e3c',    // Deep purple (primary buttons, headings)
  mid: '#8e1c66',     // Magenta (accents, hover states)
  light: '#c2185b',   // Light pink (highlights)
  bg: '#fdf4fa',      // Very light pink (backgrounds)
}
```

### Typography

- **Body Font**: Inter (Sans-serif)
- **Display Font**: Playfair Display (Serif - headings)

## ✨ Features

### 1. **Responsive Navigation**
- Sticky header with scroll effects
- Mobile-friendly hamburger menu
- Smooth scroll to sections

### 2. **Interactive Components**
- Animated hero section with Framer Motion
- Service cards with hover effects
- Interactive process explainer
- Success story cards
- Client testimonials carousel

### 3. **Contact Form**
- Clean, accessible design
- Form validation (ready for backend)
- Direct phone/email CTAs

### 4. **SEO Optimized**
- Proper meta tags & OpenGraph
- Semantic HTML structure
- Optimized fonts loading
- Next.js Image optimization ready

## 🔧 Customization

### Update Content

Edit `src/constants/index.tsx` to update:
- Navigation items
- Services
- Testimonials
- Success stories
- News items
- Contact information

### Modify Components

All components are in `src/components/`. They use:
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons

### Change Colors

Edit `tailwind.config.js` to modify the color scheme.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Build the static export:

```bash
npm run build
```

Then deploy the `.next` folder to your hosting provider.

## 📝 License

Private - Makwana Solicitors

## 🤝 Support

For support, email info@makwanasolicitors.co.uk or call 020 1234 5678
