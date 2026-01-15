# Installation & Setup Guide

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: v18.0.0 or higher ([Download](https://nodejs.org/))
- **npm**: v9.0.0 or higher (comes with Node.js)
- **Git**: Latest version (for version control)
- **A modern browser**: Chrome, Firefox, Safari, or Edge

### Verify Installation

```bash
node --version    # Should be v18+
npm --version     # Should be v9+
git --version     # Should show version info
```

## Project Setup

### 1. Navigate to Project Directory

```bash
cd /Users/vivi/Documents/wiiportfolio/Wii-Portfolio
```

### 2. Install Dependencies

This project comes with a pre-configured `package.json`. Install all required packages:

```bash
npm install
```

This will install:
- **React 19** & **React DOM** - UI library
- **Next.js 15** - React framework
- **Tailwind CSS 3** - Styling
- **Framer Motion 12** - Animations
- **use-sound 4** - Audio effects
- **TypeScript** - Type safety
- **PostCSS & Autoprefixer** - CSS processing

### 3. Verify Installation

Check that all packages installed successfully:

```bash
npm list
```

You should see all dependencies listed without errors.

## Development Setup

### 1. Start the Development Server

```bash
npm run dev
```

You'll see output like:
```
  ▲ Next.js 15.0.0
  - Local:        http://localhost:3000
```

### 2. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000)

You should see:
- The welcome page with WiiButton examples
- Interactive buttons that respond to clicks
- (Optional) Audio effects if sound files are added

### 3. Hot Module Replacement

The development server supports HMR. Editing files will automatically refresh your browser without losing state.

## Configuration Files

### TypeScript Configuration (`tsconfig.json`)
- Strict type checking enabled
- ES2020 target
- Path aliases configured (`@/*` → `./src/*`)

### Tailwind Configuration (`tailwind.config.ts`)
- Custom Wii color palette defined
- Custom shadows and animations
- Content paths configured for `src/` directory

### Next.js Configuration (`next.config.js`)
- React Strict Mode enabled
- SWC minification enabled

### PostCSS Configuration (`postcss.config.js`)
- Tailwind CSS processing
- Autoprefixer for vendor prefixes

## Adding Audio Files

To enable audio effects:

### 1. Create Sounds Directory

```bash
mkdir -p public/sounds
```

### 2. Add Audio Files

Place these files in `public/sounds/`:

- `wii-hover.mp3` - Hover effect sound
- `wii-click.mp3` - Click effect sound

**Recommended sources for sounds:**
- [Freesound.org](https://freesound.org/) - Search for "wii sound" or "beep"
- [Zapsplat](https://www.zapsplat.com/) - Free UI sound effects
- [BBC Sound Effects](https://sound-effects.bbcrewind.co.uk/) - High quality effects

### 3. Verify Setup

Check that files are in the correct location:

```bash
ls -la public/sounds/
```

You should see:
```
wii-hover.mp3
wii-click.mp3
README.md
```

## Production Build

### Create Optimized Build

```bash
npm run build
```

Output will show:
```
✓ Compiled successfully
✓ Linting and checking validity of types
```

### Start Production Server

```bash
npm start
```

The app will run on [http://localhost:3000](http://localhost:3000) in production mode (optimized and minified).

## Project Structure

```
Wii-Portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Home page
│   │   ├── globals.css             # Global styles
│   │   └── showcase.tsx            # Component showcase
│   ├── components/
│   │   ├── WiiButton.tsx           # Main component
│   │   ├── WiiButton.md            # Component docs
│   │   └── index.ts                # Exports
│   └── ...
├── public/
│   └── sounds/
│       ├── wii-hover.mp3           # (Add)
│       ├── wii-click.mp3           # (Add)
│       └── README.md
├── package.json                    # Dependencies
├── tsconfig.json                   # TypeScript config
├── tailwind.config.ts              # Tailwind config
├── next.config.js                  # Next.js config
├── postcss.config.js               # PostCSS config
├── .gitignore                      # Git ignore rules
├── README.md                       # Project docs
├── QUICKSTART.md                   # Quick start guide
└── INSTALLATION.md                 # This file
```

## Troubleshooting

### Port Already in Use

If port 3000 is busy:

```bash
npm run dev -- -p 3001
```

Or kill the process:
```bash
lsof -i :3000              # Find process
kill -9 <PID>              # Kill process
```

### Dependencies Not Installing

Clear npm cache and reinstall:

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

Rebuild TypeScript cache:

```bash
rm -rf .next
npm run build
```

### Tailwind Styles Not Appearing

Ensure `globals.css` is imported in layout:
```tsx
// src/app/layout.tsx
import './globals.css'
```

Then rebuild:
```bash
npm run dev
```

### Audio Not Playing

1. Verify files exist: `ls -la public/sounds/`
2. Check browser console for errors
3. Ensure files are `.mp3` format
4. Check volume levels aren't too low
5. Some browsers require user interaction before audio plays

## Environment Variables

Create `.env.local` for environment-specific settings:

```bash
cp .env.example .env.local
```

Edit `.env.local` as needed. Current variables:
- (None required for basic setup)

## Code Formatting

### Run Linter

```bash
npm run lint
```

Fix issues automatically:
```bash
npm run lint -- --fix
```

## Git Setup

Initialize git repository:

```bash
git init
git add .
git commit -m "Initial commit: WiiButton component"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Open [http://localhost:3000](http://localhost:3000)
4. ✅ Add audio files to `public/sounds/`
5. ✅ Explore the component in `src/components/WiiButton.tsx`
6. ✅ Check examples in `src/app/page.tsx`
7. ✅ Read [QUICKSTART.md](QUICKSTART.md) for usage patterns
8. ✅ Read [README.md](README.md) for full documentation

## Getting Help

### Documentation Files

- [QUICKSTART.md](QUICKSTART.md) - Quick reference
- [README.md](README.md) - Full project documentation
- [src/components/WiiButton.md](src/components/WiiButton.md) - Component documentation
- [src/app/page.tsx](src/app/page.tsx) - Example usage

### Check Console

Browser console may show helpful error messages:
- Press `F12` to open DevTools
- Check the "Console" tab for errors
- Check "Network" tab if audio files won't load

### Verify File Paths

Use `find` to locate files:
```bash
find . -name "*.tsx" -type f
find public -type f
```

## System Information

This project was tested with:
- **Node.js**: 18.0.0+
- **npm**: 9.0.0+
- **OS**: macOS, Windows, Linux
- **Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

## Additional Resources

### Official Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [use-sound Hook](https://use-sound-docs.vercel.app/)

### Community

- [Next.js Community](https://github.com/vercel/next.js)
- [React Community](https://react.dev/community/meetups)

---

**Questions?** Check the troubleshooting section or review the documentation files.

**Ready to build?** Start with `npm run dev` and explore the component! 🚀
