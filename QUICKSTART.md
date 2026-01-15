# WiiButton Component - Quick Start Guide

## Overview

The **WiiButton** component is a production-ready, reusable React button styled with Wii UI aesthetics and Frutiger Aero design. It features:

- 🎨 Glossy gradient backgrounds
- ⚙️ Springy Framer Motion animations
- 🔊 Optional audio effects
- ♿ Full accessibility support
- 📱 Responsive design

## Installation

All dependencies are already installed. Just make sure your project has:
```bash
npm install
```

## Basic Usage

```tsx
import { WiiButton } from '@/components'

export default function MyComponent() {
  return (
    <WiiButton onClick={() => console.log('Clicked!')}>
      Click Me
    </WiiButton>
  )
}
```

## Common Patterns

### 1. Button with Audio

```tsx
<WiiButton
  onClick={() => navigate('/menu')}
  hoverSound="/sounds/wii-hover.mp3"
  clickSound="/sounds/wii-click.mp3"
>
  🎮 Play Game
</WiiButton>
```

### 2. Wide Button (Bottom Navigation Style)

```tsx
<WiiButton
  wide={true}
  onClick={() => openSettings()}
>
  ⚙️ Settings
</WiiButton>
```

### 3. Disabled Button

```tsx
<WiiButton disabled={true}>
  Coming Soon
</WiiButton>
```

### 4. Custom Styling

```tsx
<WiiButton
  onClick={handleClick}
  className="text-2xl font-bold"
>
  Large Button
</WiiButton>
```

### 5. With Icons

```tsx
<WiiButton onClick={handleShare}>
  <span>📤</span>
  <span>Share</span>
</WiiButton>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | Required | Button content |
| `onClick` | `() => void` | - | Click handler |
| `wide` | `boolean` | `false` | Use wide/bottom bar style |
| `hoverSound` | `string` | - | Path to hover sound file |
| `clickSound` | `string` | - | Path to click sound file |
| `className` | `string` | - | Additional Tailwind classes |
| `disabled` | `boolean` | `false` | Disable the button |

## Styling Guide

### Button Size & Shape

**Square/Round Button (default)**
```tsx
<WiiButton wide={false}>
  Button
</WiiButton>
```

**Wide Bottom Bar Button**
```tsx
<WiiButton wide={true}>
  Wide Button
</WiiButton>
```

### Colors

The component uses the predefined Wii color palette from `tailwind.config.ts`:

```
Primary Blue:    #3b7dd9
Light Blue:      #88c0e8 (border)
White:           #f5f5f5 (background)
Light Gray:      #e8e8e8 (gradient)
Dark Text:       #333333
```

To customize globally, edit `tailwind.config.ts`:

```ts
colors: {
  wii: {
    blue: '#your-color',
    // ... other colors
  }
}
```

### Custom Classes with Tailwind

```tsx
<WiiButton className="text-xl font-black tracking-wide">
  Custom Style
</WiiButton>
```

## Animation Behavior

### Hover Animation
- Scale from 1.0 to 1.05
- Springy bounce effect (spring physics)
- Duration: ~400-600ms

### Border Glow
- Pulsing blue glow on hover
- Loops every 1.5 seconds
- Creates a "focusing" effect

### Click
- Sound plays immediately
- No visual delay or flash

## Audio Setup

### Adding Sound Files

1. Create `public/sounds/` directory
2. Add audio files:
   - `wii-hover.mp3` (100-200ms beep)
   - `wii-click.mp3` (200-300ms click)

```
public/
└── sounds/
    ├── wii-hover.mp3
    └── wii-click.mp3
```

### Using Custom Sound Paths

```tsx
<WiiButton
  hoverSound="/audio/custom-hover.wav"
  clickSound="/audio/custom-click.wav"
>
  Custom Sounds
</WiiButton>
```

### Graceful Fallback

If sound files are missing, the component still works without errors. The audio is optional.

## Accessibility

### Keyboard Navigation
- Tab to focus
- Enter/Space to click
- Tab+Shift to navigate backwards

### Visual Indicators
- Focus ring appears on Tab navigation
- Disabled state is visually distinct
- High contrast text colors

### Screen Readers
- Proper button semantics
- ARIA labels supported
- Focus states announced

## Responsive Design

The component is mobile-friendly:

```tsx
// Adapts to screen size automatically
<WiiButton className="w-full md:w-auto">
  Responsive Button
</WiiButton>
```

## Examples

See [src/app/page.tsx](../src/app/page.tsx) for complete examples including:
- Basic button usage
- Wide button variant
- Audio integration
- Feature showcase

## Performance Tips

1. **Lazy load audio files** if they're large
2. **Use sound compression** (MP3 format recommended)
3. **Avoid rendering many buttons** in heavy lists
4. **Cache Framer Motion calculations** with `layoutId` if needed

## Troubleshooting

### Sounds Not Playing
- Check `public/sounds/` directory exists
- Verify file paths are correct
- Check browser console for errors
- Some browsers block autoplay—sounds require user interaction

### Animation Feels Sluggish
- Ensure `use client` directive is present
- Check for other heavy CSS animations on page
- Verify Framer Motion is up to date

### Styles Not Applying
- Confirm `globals.css` is imported in layout
- Check Tailwind `content` path in config
- Rebuild dev server: `npm run dev`

## Advanced Customization

### Change Animation Spring Physics

Edit `WiiButton.tsx` button variants:

```tsx
transition: {
  type: 'spring',
  stiffness: 400,  // Higher = snappier
  damping: 10,     // Higher = less bouncy
}
```

### Modify Glow Effect

Edit border pulse variants:

```tsx
boxShadow: [
  '0 0 0px rgba(59, 125, 217, 0.2)',
  '0 0 15px rgba(59, 125, 217, 0.5)',  // Glow strength
  '0 0 0px rgba(59, 125, 217, 0.2)',
]
```

### Custom Hover Scale

```tsx
hover: {
  scale: 1.1,  // Increase from 1.05 for bigger zoom
  transition: {
    type: 'spring',
    stiffness: 400,
    damping: 10,
  }
}
```

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start dev server: `npm run dev`
3. ✅ Open [http://localhost:3000](http://localhost:3000)
4. ✅ Check out the demo page
5. ✅ Add `public/sounds/` with audio files
6. ✅ Import `WiiButton` in your components
7. ✅ Customize colors and animations as needed

## File Structure

```
src/
├── components/
│   ├── WiiButton.tsx          ← Main component (edit for customization)
│   ├── WiiButton.md           ← Full documentation
│   └── index.ts               ← Barrel export
├── app/
│   ├── page.tsx               ← Example usage
│   ├── layout.tsx             ← Root layout
│   └── globals.css            ← Global styles
└── ...
```

## Support & Documentation

- Full component docs: [WiiButton.md](WiiButton.md)
- Example usage: [page.tsx](../app/page.tsx)
- Project README: [README.md](../../README.md)

---

**Happy building! 🎮**
