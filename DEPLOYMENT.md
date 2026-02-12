# Deployment Guide - Makwana Solicitors

## Quick Deploy to Vercel (Recommended - 5 minutes)

Vercel is the platform made by the Next.js creators. It's the easiest and fastest way to deploy.

### Step 1: Push to GitHub

```bash
cd makwana-solicitors
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/makwana-solicitors.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

🎉 Done! Your site will be live in ~2 minutes at `yourproject.vercel.app`

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add your custom domain (e.g., `makwanasolicitors.co.uk`)
4. Follow DNS configuration instructions
5. Vercel handles SSL automatically

---

## Alternative: Deploy to Netlify

### Prerequisites
- Netlify account
- GitHub repository

### Steps

1. Go to [netlify.com](https://netlify.com)
2. "Add new site" → "Import from Git"
3. Select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Add environment variables in Settings
6. Deploy

---

## Alternative: Deploy to Your Own Server (VPS/AWS/DigitalOcean)

### Requirements
- Node.js 18+ installed
- PM2 or similar process manager
- Nginx for reverse proxy

### Steps

1. **SSH into your server**

```bash
ssh user@your-server-ip
```

2. **Clone repository**

```bash
git clone https://github.com/yourusername/makwana-solicitors.git
cd makwana-solicitors
```

3. **Install dependencies**

```bash
npm install --production
```

4. **Create .env.local**

```bash
nano .env.local
# Add your environment variables
```

5. **Build the project**

```bash
npm run build
```

6. **Install PM2**

```bash
npm install -g pm2
```

7. **Start with PM2**

```bash
pm2 start npm --name "makwana-site" -- start
pm2 save
pm2 startup
```

8. **Configure Nginx**

Create `/etc/nginx/sites-available/makwana`:

```nginx
server {
    listen 80;
    server_name makwanasolicitors.co.uk www.makwanasolicitors.co.uk;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:

```bash
sudo ln -s /etc/nginx/sites-available/makwana /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

9. **Setup SSL with Let's Encrypt**

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d makwanasolicitors.co.uk -d www.makwanasolicitors.co.uk
```

---

## Environment Variables Needed

```env
NEXT_PUBLIC_SITE_URL=https://makwanasolicitors.co.uk
NEXT_PUBLIC_CONTACT_EMAIL=info@makwanasolicitors.co.uk
NEXT_PUBLIC_CONTACT_PHONE=020 1234 5678
```

---

## Post-Deployment Checklist

- [ ] Test all pages and sections
- [ ] Verify AI chat is working
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify custom domain SSL
- [ ] Setup Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Working

- Ensure they start with `NEXT_PUBLIC_` for client-side access
- Rebuild after changing environment variables
- Check Vercel/Netlify dashboard for correct values

### Images Not Loading

- Ensure images are in `/public` folder
- Add domains to `next.config.js` for external images

---

## Performance Optimization (Post-Launch)

1. **Enable Image Optimization**
   - Use Next.js `<Image>` component
   - Add image domains to config

2. **Add Analytics**
   ```bash
   npm install @vercel/analytics
   ```

3. **Setup Monitoring**
   - Vercel Analytics (built-in)
   - Google Analytics
   - Sentry for error tracking

4. **CDN Configuration**
   - Vercel handles this automatically
   - For custom servers, consider Cloudflare

---

## Updates & Maintenance

### Pushing Updates

```bash
git add .
git commit -m "Update description"
git push
```

Vercel will automatically redeploy on push to main branch.

### Manual Redeploy

On Vercel dashboard:
1. Go to Deployments
2. Click "..." on latest deployment
3. Click "Redeploy"

---

## Support

If you need help with deployment, contact:
- Email: vim@extraedgeclub.com
- Your development team
