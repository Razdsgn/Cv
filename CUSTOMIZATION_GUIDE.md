# 🎨 CUSTOMIZATION GUIDE

Complete guide to personalizing your Amir Mohseni portfolio website.

---

## 📝 Table of Contents

1. [Personal Information](#1-personal-information)
2. [Projects & Portfolio](#2-projects--portfolio)
3. [Work Experience](#3-work-experience)
4. [Awards & Recognition](#4-awards--recognition)
5. [Education](#5-education)
6. [Skills & Tools](#6-skills--tools)
7. [Contact Information](#7-contact-information)
8. [Images & Media](#8-images--media)
9. [Colors & Styling](#9-colors--styling)
10. [Animations](#10-animations)

---

## 1. Personal Information

### Location: `app/page.tsx`

**Your Name (Line ~87):**
```typescript
<h1 className="text-5xl font-bold...">
  YOUR NAME
  <br />
  HERE
</h1>
```

**Role Tags (Line ~72):**
```typescript
{[
  "Your Role 1",
  "Your Role 2",
  "Your Role 3",
  "Your Role 4"
].map((role, i) => (
```

**Bio Description (Line ~101):**
```typescript
<p className="max-w-xl text-base...">
  Your professional bio goes here...
</p>
```

**Location Badge (Line ~96):**
```typescript
<span className="h-2 w-2 rounded-full bg-green-500"></span>
Based in Your Location
```

---

## 2. Projects & Portfolio

### Location: `app/page.tsx` (Lines ~8-68)

**Project Structure:**
```typescript
{
  slug: "unique-project-id",           // URL-friendly identifier
  title: "Project Name",                // Display name
  description: "Project description",   // What you built
  images: [                             // Project screenshots
    "/project1-image1.jpg",
    "/project1-image2.jpg",
    "/project1-image3.jpg"
  ],
  liveUrl: "https://project.com",       // Live site URL
  behanceUrl: "https://behance...",     // Behance case study
  awards: [                             // Optional awards
    {
      name: "Award Organization",
      awards: ["Award 1", "Award 2"],
      href: "https://award-site.com"
    }
  ]
}
```

**Example - Add Your Project:**
```typescript
const projects = [
  {
    slug: "my-awesome-project",
    title: "My Awesome Project",
    description: "A revolutionary e-commerce platform with AI recommendations",
    images: [
      "/projects/awesome/hero.jpg",
      "/projects/awesome/detail1.jpg",
      "/projects/awesome/detail2.jpg"
    ],
    liveUrl: "https://myproject.com",
    behanceUrl: "https://behance.net/gallery/123/my-project",
    awards: [
      {
        name: "Awwwards",
        awards: ["Site of the Day", "Developer Award"],
        href: "https://awwwards.com/sites/my-project"
      }
    ]
  },
  // Add more projects...
];
```

---

## 3. Work Experience

### Location: `app/page.tsx` (Lines ~238-290)

**Experience Structure:**
```typescript
<div className="grid-border space-y-4 rounded-2xl p-6 md:p-8">
  <p className="text-sm font-semibold uppercase...">
    START YEAR - END YEAR
  </p>
  <h3 className="text-2xl font-bold text-neutral-50">
    Your Job Title
  </h3>
  <p className="text-neutral-400">Company Name</p>
  <p className="text-sm leading-relaxed text-neutral-300">
    Description of your role and achievements...
  </p>
</div>
```

**Add More Positions:**
```typescript
<div className="grid gap-8 md:grid-cols-2">
  {/* Position 1 */}
  <motion.div...>
    <p>2023 - Present</p>
    <h3>Senior Designer</h3>
    <p>Company X</p>
    <p>Led design team of 5...</p>
  </motion.div>
  
  {/* Position 2 */}
  <motion.div...>
    <p>2020 - 2023</p>
    <h3>UI/UX Designer</h3>
    <p>Company Y</p>
    <p>Designed 20+ products...</p>
  </motion.div>
</div>
```

---

## 4. Awards & Recognition

### Location: `app/page.tsx` (Lines ~312-380)

**Award Card Structure:**
```typescript
{
  title: "Award Name - Category",
  project: "Project Name",
  image: "/awards/award-image.jpg"
}
```

**Example:**
```typescript
{[
  {
    title: "Awwwards - Site of the Day",
    project: "MyProject.com",
    image: "/awards/awwwards-sotd.jpg"
  },
  {
    title: "CSS Design Awards - Best UI",
    project: "MyApp",
    image: "/awards/cssda-ui.jpg"
  },
  // Add 4-6 awards for best layout
].map((award, i) => (
```

---

## 5. Education

### Location: `app/page.tsx` (Lines ~386-420)

**Education Structure:**
```typescript
{[
  {
    degree: "Master of Design",
    institution: "University Name",
    period: "2020 - 2022"
  },
  {
    degree: "Bachelor of Design",
    institution: "University Name",
    period: "2016 - 2020"
  }
].map((edu, i) => (
```

---

## 6. Skills & Tools

### Location: `app/page.tsx` (Lines ~426-500)

**Soft Skills (Line ~436):**
```typescript
{[
  "Art Direction",
  "Leadership",
  "Visual Design",
  "UI/UX Design",
  "Your Skill Here",
  // Add more skills...
].map((skill, i) => (
```

**Hard Skills/Tools (Line ~466):**
```typescript
{[
  "Figma",
  "Sketch",
  "Photoshop",
  "Your Tool Here",
  // Add more tools...
].map((tool, i) => (
```

---

## 7. Contact Information

### Location: `app/page.tsx` (Lines ~518-626)

**Email (Line ~540):**
```typescript
<a href="mailto:your-email@gmail.com"...>
  your-email@gmail.com
</a>
```

**Phone (Line ~550):**
```typescript
<a href="tel:+1234567890"...>
  +1 (234) 567-890
</a>
```

**Social Links (Line ~560):**
```typescript
{[
  { label: "LinkedIn", href: "https://linkedin.com/in/yourname" },
  { label: "Behance", href: "https://behance.net/yourname" },
  { label: "Twitter", href: "https://twitter.com/yourname" },
  { label: "Instagram", href: "https://instagram.com/yourname" },
  { label: "Dribbble", href: "https://dribbble.com/yourname" }
].map((link) => (
```

---

## 8. Images & Media

### Adding Your Images

1. **Create Structure:**
```
public/
  ├── profile/
  │   ├── photo1.jpg
  │   ├── photo2.jpg
  │   └── photo3.jpg
  ├── projects/
  │   ├── project1/
  │   │   ├── hero.jpg
  │   │   ├── detail1.jpg
  │   │   └── detail2.jpg
  │   └── project2/
  │       └── ...
  └── awards/
      ├── award1.jpg
      └── award2.jpg
```

2. **Reference in Code:**
```typescript
// Correct ✅
src="/profile/photo1.jpg"
src="/projects/project1/hero.jpg"

// Wrong ❌
src="profile/photo1.jpg"  // Missing leading slash
```

3. **Image Optimization Tips:**
   - Use WebP format for smaller file sizes
   - Compress images (use TinyPNG, ImageOptim, etc.)
   - Recommended sizes:
     - Hero images: 1920x1080px
     - Project images: 1600x1000px
     - Profile photos: 800x1000px
     - Award certificates: 1200x900px

---

## 9. Colors & Styling

### Location: `tailwind.config.ts`

**Main Colors:**
```typescript
colors: {
  background: "#050507",      // Dark background
  foreground: "#f9fafb",      // Text color
  muted: "#9ca3af"           // Muted text
}
```

**Accent Colors:**
```typescript
// Orange accent (current)
className="bg-orange-500"
className="text-orange-500"

// Change to blue accent
className="bg-blue-500"
className="text-blue-500"
```

### Custom CSS

**Location: `app/globals.css`**

```css
/* Add custom styles */
.your-custom-class {
  /* Your styles here */
}
```

---

## 10. Animations

### Framer Motion Settings

**Hover Animations:**
```typescript
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
```

**Scroll Animations:**
```typescript
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
```

**Custom Timing:**
```typescript
transition={{
  duration: 0.6,              // Animation length
  ease: [0.16, 1, 0.3, 1],   // Easing curve
  delay: 0.2                  // Start delay
}}
```

### Smooth Scroll Settings

**Location: `components/lenis-provider.tsx`**

```typescript
const lenis = new Lenis({
  duration: 1.2,        // Scroll speed (lower = faster)
  smoothWheel: true,    // Enable smooth scrolling
  wheelMultiplier: 1,   // Mouse wheel sensitivity
});
```

---

## 🎯 Quick Customization Checklist

- [ ] Update name and title
- [ ] Change role tags
- [ ] Update bio description
- [ ] Add your projects with images
- [ ] Update work experience
- [ ] Add your awards
- [ ] Update education info
- [ ] List your skills and tools
- [ ] Change email and phone
- [ ] Update social media links
- [ ] Add your profile images
- [ ] Replace project screenshots
- [ ] Adjust colors (optional)
- [ ] Customize animations (optional)

---

## 💡 Pro Tips

1. **Consistency**: Use consistent image sizes across similar sections
2. **Quality**: Always use high-resolution images (2x the display size)
3. **Loading**: Lazy load images to improve performance
4. **Alt Text**: Add descriptive alt text for all images
5. **Testing**: Test on different devices and browsers
6. **SEO**: Update meta tags in `layout.tsx` for better SEO

---

## 🆘 Need Help?

If you get stuck:
1. Check the code comments in each file
2. Review the example projects
3. Test changes in development mode first
4. Use browser DevTools to inspect elements

---

**Happy Customizing! 🎨**
