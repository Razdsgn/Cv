# Amir Mohseni Portfolio Website

A stunning, award-winning portfolio website built with Next.js 15, featuring smooth animations, parallax effects, and a sophisticated dark theme design inspired by amirmohseni.com.

## ✨ Features

- **Smooth Scrolling** - Powered by Lenis for buttery-smooth scroll experiences
- **Advanced Animations** - Framer Motion for micro-interactions and page transitions
- **Responsive Design** - Looks perfect on all devices from mobile to desktop
- **Dark Theme** - Sophisticated dark mode with gradient accents
- **Project Galleries** - Multi-image showcases with smooth navigation
- **Award Section** - Highlight prestigious design awards and recognition
- **Contact Form** - Professional contact section with social links
- **Performance Optimized** - Next.js 15 with Image optimization

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles
├── components/
│   ├── lenis-provider.tsx  # Smooth scroll provider
│   ├── navbar.tsx          # Navigation with mobile menu
│   ├── project-card.tsx    # Project showcase cards
│   └── section-shell.tsx   # Reusable section wrapper
├── public/                 # Static assets (add your images here)
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## 🎨 Customization

### Update Personal Information

Edit `/app/page.tsx` to update:
- Name and title
- Bio and description
- Contact information
- Social media links

### Add Your Projects

Replace the `projects` array in `/app/page.tsx` with your actual projects:

```typescript
const projects = [
  {
    slug: "project-name",
    title: "Project Title",
    description: "Project description...",
    images: [
      "/path/to/image1.jpg",
      "/path/to/image2.jpg"
    ],
    liveUrl: "https://project-url.com",
    behanceUrl: "https://behance.net/gallery/...",
    awards: [
      {
        name: "Award Name",
        awards: ["Award 1", "Award 2"],
        href: "https://award-site.com"
      }
    ]
  }
];
```

### Change Colors

Update colors in `tailwind.config.ts`:

```typescript
colors: {
  background: "#050507",
  foreground: "#f9fafb",
  muted: "#9ca3af"
}
```

### Add Your Images

1. Place your images in the `public` folder
2. Reference them in your components like: `/image-name.jpg`
3. Or use external URLs for images hosted elsewhere

## 🎭 Key Sections

### Hero Section
Large name display with role tags and profile images

### Experience
Two-column layout showing work history

### Work Portfolio
Project cards with image galleries and expandable award sections

### Awards
Grid showcase of design awards with images

### Education
Academic background and degrees

### Skills
Soft skills and hard skills (tools) categorized separately

### Contact
Email, phone, social links, and contact form

## 📦 Dependencies

- **Next.js** - React framework
- **React** - UI library
- **Framer Motion** - Animation library
- **Lenis** - Smooth scroll
- **Tailwind CSS** - Utility-first CSS
- **TypeScript** - Type safety

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project structure is provided as-is for personal portfolio use.

## 🙏 Credits

Design inspired by the exceptional work at amirmohseni.com

## 💡 Tips

1. **Images**: Use high-quality images (at least 1920px wide) for best results
2. **Performance**: Optimize images before uploading (use WebP format when possible)
3. **SEO**: Update metadata in `layout.tsx` for better search engine visibility
4. **Analytics**: Add Google Analytics or other tracking in `layout.tsx`
5. **Deployment**: Deploy easily to Vercel, Netlify, or any Node.js hosting

## 🐛 Troubleshooting

**Animations not working?**
- Make sure Framer Motion is installed: `npm install framer-motion`

**Images not loading?**
- Check that images are in the `public` folder
- Verify image paths are correct (start with `/`)

**Smooth scroll issues?**
- Ensure Lenis is installed: `npm install @studio-freight/lenis`

## 📞 Support

For questions or issues with the code structure, please review the components and their implementations.

---

**Happy Building! 🚀**
