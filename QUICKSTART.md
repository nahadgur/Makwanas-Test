# Quick Start Guide - Makwana Solicitors

Get your site running in 5 minutes! ⚡

## Prerequisites

- Node.js 18+ installed ([Download here](https://nodejs.org/))
- Code editor (VS Code recommended)
- Terminal/Command Prompt

## 1️⃣ Install Dependencies (2 minutes)

Open terminal in project folder:

```bash
npm install
```

## 2️⃣ Run Development Server (30 seconds)

```bash
npm run dev
```

Open http://localhost:3000 in your browser 🎉

## 3️⃣ Customize Content (Optional)

### Update Contact Information

Edit `src/constants/index.tsx`:

```typescript
export const CONTACT_EMAIL = "your-email@example.com";
export const CONTACT_PHONE = "020 YOUR NUMBER";
```

### Change Services

Edit the `SERVICES` array in `src/constants/index.tsx`

### Update Colors

Edit `tailwind.config.js`:

```javascript
makwana: {
  dark: '#your-color',
  mid: '#your-color',
  light: '#your-color',
}
```

## 🚀 Deploy to Internet (5 minutes)

### Option 1: Vercel (Easiest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Click "New Project"
5. Import your repository
6. Deploy!

Site will be live at `yourproject.vercel.app`

### Option 2: Your Own Server

See `DEPLOYMENT.md` for full instructions.

## 🛠️ Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for errors
npm run lint
```

## 📁 Key Files to Edit

```
src/
  ├── constants/index.tsx    # Update content here
  ├── components/           # Edit components
  └── app/
      ├── page.tsx         # Homepage layout
      └── globals.css      # Global styles

public/
  └── Logo.png             # Replace with your logo
```

## ❓ Troubleshooting

### Port 3000 already in use

```bash
# Use different port
npm run dev -- -p 3001
```

### Build errors

```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run dev
```

## 📚 Next Steps

- Read `README.md` for full documentation
- Check `STRUCTURE.md` to understand architecture
- See `DEPLOYMENT.md` for production deployment
- Customize content in `src/constants/index.tsx`

## 🆘 Need Help?

- Check README.md
- Email: vim@extraedgeclub.com
- Create GitHub issue

## ✅ You're Ready!

Your site should now be running at http://localhost:3000

Enjoy building! 🎉
