# 🚀 QUICK START GUIDE

## Step 1: Setup Your Project

1. Copy all files to your project directory
2. Open terminal in the project folder

## Step 2: Install Dependencies

```bash
npm install
```

This will install:
- Next.js 15
- React 19
- Framer Motion (animations)
- Lenis (smooth scroll)
- Tailwind CSS
- TypeScript

## Step 3: Run Development Server

```bash
npm run dev
```

## Step 4: View Your Site

Open your browser and go to:
```
http://localhost:3000
```

## 🎨 What You'll See

Your portfolio website with these sections:
- ✅ Animated hero section with your name
- ✅ Work experience timeline
- ✅ Project portfolio with image galleries
- ✅ Awards showcase
- ✅ Education background
- ✅ Skills & tools
- ✅ Contact form with social links

## 📝 Next Steps - Customize Your Site

### 1. Update Your Information

Open `app/page.tsx` and change:

```typescript
// Line ~80 - Your name
<h1>AMIR MOHSENI</h1>
// Change to your name

// Line ~120 - Email
A95Mohseni@gmail.com
// Change to your email

// Line ~450 - Social links
{ label: "LinkedIn", href: "#" }
// Add your real social media URLs
```

### 2. Add Your Own Projects

Replace the `projects` array (line ~8) with your projects:

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "What you built...",
    images: ["/your-image.jpg"],
    liveUrl: "https://yourproject.com"
  }
];
```

### 3. Add Your Images

Create a `public` folder in your project root:
```
your-project/
  ├── public/
  │   ├── profile.jpg
  │   ├── project1.jpg
  │   └── project2.jpg
  ├── app/
  ├── components/
  └── ...
```

Then reference them in your code:
```typescript
src="/profile.jpg"  // ✅ Correct
```

### 4. Update Metadata

Open `app/layout.tsx` and update SEO information:

```typescript
export const metadata: Metadata = {
  title: "Your Name – Your Title",
  description: "Your bio...",
  metadataBase: new URL("https://yourwebsite.com"),
};
```

## 🎨 Design Customization

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  background: "#050507",  // Main background
  foreground: "#f9fafb",  // Text color
  muted: "#9ca3af"        // Muted text
}
```

### Modify Animations

Edit animation settings in components:
- `components/navbar.tsx` - Navigation animations
- `components/project-card.tsx` - Project card animations
- `app/page.tsx` - Page scroll animations

## 📱 Mobile Optimization

The site is already responsive! Test it by:
1. Resizing your browser window
2. Using browser DevTools (F12) → Mobile view
3. Testing on actual mobile devices

## 🚀 Deploy Your Site

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`

## 🔥 Pro Tips

1. **Use WebP Images** - Smaller file sizes, faster loading
2. **Compress Images** - Use tools like TinyPNG before uploading
3. **Test Animations** - Make sure they work on different devices
4. **Update Regularly** - Keep your portfolio fresh with new projects
5. **Analytics** - Add Google Analytics to track visitors

## ❓ Need Help?

Common issues:

**Port 3000 already in use?**
```bash
# Kill the process using port 3000
npx kill-port 3000
# Then try npm run dev again
```

**Module not found errors?**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

**Build errors?**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

## 🎯 Checklist Before Launch

- [ ] Updated all personal information
- [ ] Added your own project images
- [ ] Updated social media links
- [ ] Changed email addresses
- [ ] Updated metadata/SEO
- [ ] Tested on mobile devices
- [ ] Checked all links work
- [ ] Optimized images
- [ ] Added real CV link
- [ ] Tested contact form

---

**You're all set! Happy coding! 🎉**
