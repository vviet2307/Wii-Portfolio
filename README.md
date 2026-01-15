# Wii Portfolio

A modern portfolio website built with React, Next.js, and Tailwind CSS, featuring Wii UI aesthetics and Frutiger Aero design principles.

## 🎮 Overview

This project showcases a reusable **WiiButton** component that combines:
- **Wii UI Design**: Pill-shaped buttons with glossy gradients and soft shadows
- **Frutiger Aero Aesthetics**: Colorful, rounded, and playful design elements
- **Framer Motion Animations**: Springy, responsive interactions
- **Audio Integration**: Interactive sound effects for hover and click events

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Modern web browser

### Installation

1. **Clone the repository:**
   ```bash
   cd Wii-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
Wii-Portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Home page with button examples
│   │   └── globals.css         # Global Tailwind styles
│   ├── components/
│   │   ├── WiiButton.tsx       # Main reusable button component
│   │   └── WiiButton.md        # Component documentation
│   └── ...
├── public/
│   └── sounds/                 # Audio files (add your Wii sounds here)
│       ├── wii-hover.mp3
│       └── wii-click.mp3
├── package.json
├── tailwind.config.ts          # Tailwind configuration with Wii colors
├── tsconfig.json               # TypeScript configuration
├── next.config.js              # Next.js configuration
└── README.md
```

## 🎨 Key Components

### WiiButton Component

A fully-featured, reusable button component with:

**Visual Features:**
- Pill-shaped or wide rounded corners
- Glossy gradient background (white to light gray)
- Soft light-blue border
- Neumorphic drop shadows

**Interactive Features:**
- Spring-based scale animation on hover (1.0 → 1.05)
- Glowing border pulse effect
- Optional audio on hover and click
- Smooth transitions

**Props:**
```tsx
interface WiiButtonProps {
  children: ReactNode          // Button content
  onClick?: () => void         // Click handler
  wide?: boolean               // Wide vs square style
  hoverSound?: string          // Path to hover sound
  clickSound?: string          // Path to click sound
  className?: string           // Additional CSS classes
  disabled?: boolean           // Disabled state
}
```

**Usage:**
```tsx
<WiiButton
  onClick={() => alert('Clicked!')}
  hoverSound="/sounds/wii-hover.mp3"
  clickSound="/sounds/wii-click.mp3"
  wide={false}
>
  🎮 Click Me
</WiiButton>
```

## 🎨 Color Palette

The project uses a custom Wii-inspired color palette:

| Color | Hex | Usage |
|-------|-----|-------|
| Wii Blue | `#3b7dd9` | Primary accents, glow effects |
| Wii Light Blue | `#88c0e8` | Borders, secondary elements |
| Wii White | `#f5f5f5` | Button backgrounds, light elements |
| Wii Gray | `#e8e8e8` | Gradient backgrounds, subtle shadows |
| Wii Dark | `#333333` | Text, dark elements |

## 🎬 Animations

### Button Hover Animation
```
Scale: 1.0 → 1.05
Type: Spring (stiffness: 400, damping: 10)
Duration: ~400-600ms with bounce
```

### Border Pulse Effect
```
Type: Looping animation
Duration: 1.5s per cycle
Effect: Glowing blue shadow pulse
Triggers: On hover
```

## 🔊 Audio Integration

The component uses the `use-sound` hook for audio playback:

- **Hover Sound**: Triggered on mouse enter (volume: 0.5)
- **Click Sound**: Triggered on button click (volume: 0.6)
- **Graceful Degradation**: Component works without sound files

### Adding Sound Files

Place audio files in `public/sounds/`:
```
public/
└── sounds/
    ├── wii-hover.mp3  (100-200ms soft beep)
    └── wii-click.mp3  (200-300ms decisive click)
```

**Recommended sources:**
- [Freesound.org](https://freesound.org/) - Free audio effects
- [Zapsplat](https://www.zapsplat.com/) - Royalty-free sounds
- Record your own Wii UI sounds!

## 🛠️ Development

### Build for Production

```bash
npm run build
npm start
```

### Lint Code

```bash
npm run lint
```

### Project Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📦 Dependencies

### Core
- **Next.js 15**: React framework with SSR and optimization
- **React 19**: UI library
- **Tailwind CSS 3**: Utility-first CSS framework

### Animation & Effects
- **Framer Motion 12**: Advanced motion library with spring physics
- **use-sound 4**: Audio playback hook

### Development
- **TypeScript**: Type-safe development
- **PostCSS**: CSS processing
- **Autoprefixer**: Vendor prefix automation

## 🎯 Features

- ✅ **Reusable Components**: Modular, self-contained WiiButton
- ✅ **Responsive Design**: Works on mobile, tablet, and desktop
- ✅ **Accessibility**: Keyboard navigation, focus states, ARIA labels
- ✅ **Performance**: Optimized animations using GPU acceleration
- ✅ **Type Safety**: Full TypeScript support
- ✅ **Audio Support**: Interactive sound effects
- ✅ **Documentation**: Comprehensive JSDoc and README

## 🎮 Customization

### Change Colors

Edit `tailwind.config.ts`:
```ts
colors: {
  wii: {
    blue: '#your-color',
    lightBlue: '#your-color',
    // ... other colors
  }
}
```

### Adjust Animation Speed

Modify the button variants in `WiiButton.tsx`:
```tsx
transition: {
  type: 'spring',
  stiffness: 400,  // Increase for snappier
  damping: 10,     // Increase for less bounce
}
```

### Customize Button Shape

Change the border radius:
```tsx
// Pill shape (current)
rounded-full

// More rounded
rounded-3xl

// Moderate rounding
rounded-2xl
```

## 📱 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| iOS Safari | 14+ | ✅ Full |

## 🐛 Troubleshooting

### Sounds Not Playing
- Ensure files exist in `public/sounds/`
- Check browser autoplay policies (may require user interaction)
- Use `.mp3` format for broader compatibility

### Animations Lag
- Check for GPU acceleration in DevTools
- Ensure Framer Motion is updated
- Profile with Chrome DevTools Performance tab

### Tailwind Classes Not Applying
- Verify `content` paths in `tailwind.config.ts`
- Run `npm run dev` with fresh build
- Check `globals.css` is imported in layout

## 🚧 Future Enhancements

- [ ] Additional button variants (outline, gradient)
- [ ] Ripple effect on click
- [ ] Custom cursor implementation
- [ ] Dark mode variant
- [ ] Storybook integration
- [ ] Unit tests with Jest
- [ ] E2E tests with Cypress

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest enhancements
- Submit pull requests
- Improve documentation

## 📞 Support

For issues or questions:
1. Check the [WiiButton documentation](src/components/WiiButton.md)
2. Review the example usage in [src/app/page.tsx](src/app/page.tsx)
3. Check browser console for error messages

---

**Made with ❤️ and 🎮 Wii nostalgia**
