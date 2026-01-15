# 🎮 Wii Portfolio Website - Architecture Guide

## Overview

This is a **scalable, data-driven portfolio website** with a Nintendo Wii interface theme. All content (projects, albums, social links) is managed through a single data file, making it easy to update without touching UI code.

---

## 📁 Project Structure

```
src/
├── lib/
│   └── data.ts                 ⭐ MAIN DATA FILE - Edit this to update content
│
├── components/
│   ├── WiiButton.tsx           (Reusable button with Wii styling)
│   ├── ChannelItem.tsx         (Grid channel card)
│   ├── WiiGrid.tsx             (Main grid container)
│   ├── BottomBar.tsx           (Sticky footer with socials)
│   └── index.ts                (Component exports)
│
├── app/
│   ├── page.tsx                📄 Home page (4x3 grid)
│   ├── layout.tsx              (Root layout)
│   ├── globals.css             (Global Tailwind styles)
│   ├── projects/
│   │   └── page.tsx            📄 Projects page
│   ├── gallery/
│   │   └── page.tsx            📄 Gallery page
│   ├── about/
│   │   └── page.tsx            (To be created)
│   └── contact/
│       └── page.tsx            (To be created)
```

---

## 🎯 How to Use

### 1. Update Your Profile & Content

Edit **`src/lib/data.ts`** - This is your single source of truth:

```typescript
// Profile
export const profile: Profile = {
  name: 'Your Name',
  role: 'Your Role',
  bio: 'Your bio...',
  avatarUrl: 'your-avatar-url',
  email: 'your-email@example.com',
}

// Add/edit projects
export const devProjects: DevProject[] = [
  {
    id: 'project-id',
    title: 'Project Name',
    description: 'Short description',
    longDescription: 'Longer description',
    techStack: ['React', 'TypeScript'],
    repoLink: 'https://github.com/...',
    demoLink: 'https://demo.com',
    imageUrl: 'https://image-url.jpg',
    featured: true,
    date: 'Jan 2025',
  },
  // Add more projects...
]

// Add/edit photo albums
export const photoAlbums: PhotoAlbum[] = [
  {
    id: 'album-id',
    title: 'Album Name',
    description: 'Album description',
    coverImage: 'https://cover-image.jpg',
    date: 'August 2024',
    photoCount: 48,
    photos: [
      {
        id: '1',
        url: 'https://photo1.jpg',
        caption: 'Photo caption',
      },
      // Add more photos...
    ],
  },
  // Add more albums...
]

// Update social links
export const socials: Social[] = [
  {
    platform: 'github',
    label: 'GitHub',
    url: 'https://github.com/yourname',
    icon: 'Github',
  },
  // More socials...
]
```

### 2. Components Auto-Update

All pages automatically read from `data.ts`:

- **Home page**: Reads `profile`, creates 4x3 grid
- **Projects page**: Reads `devProjects`, displays in grid
- **Gallery page**: Reads `photoAlbums`, shows with lightbox
- **Bottom bar**: Reads `socials`, creates social buttons

**Zero UI code changes needed!** 🎉

---

## 🏠 Home Page Layout

The home page is a **4x3 grid** (4 columns, 3 rows):

```
┌─────────┬─────────┬─────────┬─────────┐
│ About   │ Projects│ Gallery │ Contact │  Row 1 (Active Channels)
├─────────┼─────────┼─────────┼─────────┤
│  News   │ Clock   │ Empty   │ Empty   │  Row 2 (Decorative)
├─────────┼─────────┼─────────┼─────────┤
│ Empty   │ Empty   │ Empty   │ Empty   │  Row 3 (Placeholders)
└─────────┴─────────┴─────────┴─────────┘
```

**Each channel is a `ChannelItem` component** that:
- Displays an icon + title
- Scales up on hover with spring animation
- Shows border glow effect
- Links to respective pages

---

## 🎨 Component Details

### ChannelItem
```tsx
<ChannelItem
  title="Dev Projects"
  Icon={Zap}
  href="/projects"
  variant="green"
/>
```

**Props:**
- `title` - Display text
- `Icon` - Lucide React icon
- `href` - Navigation link
- `variant` - Color variant (default, blue, green, red, yellow)
- `isEmpty` - Show as placeholder
- `content` - Additional text (for placeholders)

### WiiGrid
```tsx
<WiiGrid columns={4} rows={3} gap="gap-6">
  {/* ChannelItem children */}
</WiiGrid>
```

**Props:**
- `columns` - Grid columns (default: 4)
- `rows` - Grid rows (default: 3)
- `gap` - Spacing between items
- `showBackground` - Diagonal stripe pattern
- `bgGradient` - Background color

### BottomBar
```tsx
<BottomBar show={true} showBackButton={true} />
```

**Props:**
- `show` - Visibility toggle
- `showBackButton` - Back to home button
- `leftContent` - Custom left content

---

## 📊 Data Types Reference

### Profile
```typescript
interface Profile {
  name: string
  role: string
  bio: string
  avatarUrl: string
  email: string
}
```

### DevProject
```typescript
interface DevProject {
  id: string
  title: string
  description: string
  longDescription?: string
  techStack: string[]
  demoLink?: string
  repoLink: string
  imageUrl: string
  featured?: boolean
  date?: string
}
```

### PhotoAlbum
```typescript
interface PhotoAlbum {
  id: string
  title: string
  description?: string
  coverImage: string
  date: string
  photoCount: number
  photos?: PhotoItem[]
}

interface PhotoItem {
  id: string
  url: string
  caption?: string
}
```

### Social
```typescript
interface Social {
  platform: 'github' | 'linkedin' | 'twitter' | 'email'
  label: string
  url: string
  icon: string  // Lucide React icon name
}
```

---

## 🎨 Design System

### Color Palette

| Color | Value | Usage |
|-------|-------|-------|
| Wii Blue | `#3b7dd9` | Primary accents, icons |
| Wii Light Blue | `#88c0e8` | Borders |
| Wii White | `#f5f5f5` | Backgrounds |
| Wii Gray | `#e8e8e8` | Gradients |
| Wii Dark | `#333333` | Text |

### Typography

- **Headings**: Bold, 4xl-5xl
- **Body**: Regular, base-lg
- **Captions**: Semibold, text-xs-sm

### Spacing

- Grid gap: `gap-6` (24px)
- Padding: `px-4 md:px-8` / `py-8`
- Component padding: `p-5` / `p-6`

### Animations

- **Hover scale**: 1.05 (5% larger)
- **Spring physics**: stiffness 400, damping 10
- **Transitions**: 300-400ms duration

---

## 🚀 Adding Content

### Add a New Project

1. Edit `src/lib/data.ts`
2. Add to `devProjects` array:

```typescript
{
  id: 'my-new-project',
  title: 'My Awesome Project',
  description: 'A cool description',
  techStack: ['React', 'TypeScript', 'Tailwind'],
  repoLink: 'https://github.com/...',
  demoLink: 'https://demo.com',
  imageUrl: 'https://image.jpg',
  featured: false,
  date: 'Feb 2025',
}
```

3. Save - **Projects page auto-updates!**

### Add a New Album

1. Edit `src/lib/data.ts`
2. Add to `photoAlbums` array:

```typescript
{
  id: 'my-album',
  title: 'Vacation 2025',
  description: 'Amazing trip!',
  coverImage: 'https://cover.jpg',
  date: 'February 2025',
  photoCount: 32,
  photos: [
    { id: '1', url: 'https://photo1.jpg', caption: 'Beach' },
    { id: '2', url: 'https://photo2.jpg', caption: 'Sunset' },
    // More photos...
  ],
}
```

3. Save - **Gallery page auto-updates!**

### Update Social Links

Edit `socials` array in `src/lib/data.ts`:

```typescript
export const socials: Social[] = [
  {
    platform: 'github',
    label: 'GitHub',
    url: 'https://github.com/yourname',
    icon: 'Github',
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/yourname',
    icon: 'Linkedin',
  },
  // Add Twitter, email, personal site, etc.
]
```

---

## 📱 Responsive Design

All pages are **fully responsive**:

- **Mobile** (1 column)
- **Tablet** (2 columns)
- **Desktop** (3-4 columns)

Grid breakpoints:
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px

---

## ⚡ Performance Tips

1. **Image optimization**:
   - Use WebP format when possible
   - Compress images before uploading
   - Use descriptive alt text

2. **Code splitting**:
   - Pages are automatically code-split by Next.js
   - Lightbox modal loads only when needed

3. **Lazy loading**:
   - Images load on intersection
   - Framer Motion uses GPU acceleration

---

## 🎯 File Update Checklist

When adding content, update in this order:

1. **`src/lib/data.ts`** - Add/edit content
2. **Verify page loads** - Check routes auto-update
3. **Test responsive** - Mobile, tablet, desktop
4. **Optimize images** - Resize, compress
5. **Deploy** - Push to Vercel/hosting

---

## 🔧 Customization Guide

### Change Grid Size

Edit `src/app/page.tsx`:

```tsx
<WiiGrid columns={5} rows={4}>  {/* Change grid size */}
```

### Change Colors

Edit `tailwind.config.ts`:

```ts
colors: {
  wii: {
    blue: '#YOUR_COLOR',
    lightBlue: '#YOUR_COLOR',
    white: '#YOUR_COLOR',
    gray: '#YOUR_COLOR',
    dark: '#YOUR_COLOR',
  }
}
```

### Change Animations

Edit component animation variants (e.g., `ChannelItem.tsx`):

```tsx
transition: {
  type: 'spring',
  stiffness: 400,  // Increase for snappier
  damping: 10,     // Increase for less bounce
}
```

---

## 📚 Next Steps

1. ✅ Review `src/lib/data.ts` structure
2. ✅ Update profile information
3. ✅ Add your projects
4. ✅ Add your photo albums
5. ✅ Update social links
6. ✅ Customize colors (optional)
7. ✅ Deploy!

---

## 🎮 That's It!

Your Wii-themed portfolio is now **fully functional and scalable**. Update content in **one file** and watch everything auto-update across all pages!

**Happy building!** 🚀
