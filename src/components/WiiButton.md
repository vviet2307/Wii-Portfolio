# WiiButton Component

A reusable React button component styled with Wii UI aesthetics and Frutiger Aero design principles. Features glossy gradients, neumorphic shadows, Framer Motion animations, and audio integration.

## Features

- **Wii Aesthetic**: Pill-shaped design with glossy gradient background and soft blue borders
- **Framer Motion Animations**: Springy scale effect on hover with glowing border pulse
- **Audio Integration**: Optional hover and click sound effects using `use-sound` hook
- **Accessibility**: Full keyboard navigation support and focus states
- **Responsive**: Adapts to different screen sizes with flexible sizing options
- **TypeScript**: Fully typed component with comprehensive JSDoc documentation

## Installation

Ensure you have the required dependencies installed:

```bash
npm install react framer-motion use-sound
npm install -D tailwindcss postcss autoprefixer
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | Required | Content to display inside the button |
| `onClick` | `() => void` | Optional | Callback function triggered on click |
| `wide` | `boolean` | `false` | Wide mode (bottom bar style) vs square (channel button style) |
| `hoverSound` | `string` | Optional | Path to hover sound effect (e.g., `/sounds/wii-hover.mp3`) |
| `clickSound` | `string` | Optional | Path to click sound effect (e.g., `/sounds/wii-click.mp3`) |
| `className` | `string` | Optional | Additional CSS classes for customization |
| `disabled` | `boolean` | `false` | Whether the button is disabled |

## Usage

### Basic Button

```tsx
import { WiiButton } from '@/components/WiiButton'

export function MyComponent() {
  return (
    <WiiButton onClick={() => console.log('clicked')}>
      Click Me!
    </WiiButton>
  )
}
```

### With Audio

```tsx
<WiiButton
  onClick={() => console.log('clicked')}
  hoverSound="/sounds/wii-hover.mp3"
  clickSound="/sounds/wii-click.mp3"
>
  🎮 Play
</WiiButton>
```

### Wide Button (Bottom Bar Style)

```tsx
<WiiButton wide={true} onClick={() => navigate('/menu')}>
  ➤ Continue
</WiiButton>
```

### Disabled State

```tsx
<WiiButton disabled={true}>
  Disabled Button
</WiiButton>
```

## Styling

The component uses Tailwind CSS classes and custom Wii color variables:

- `wii-blue`: `#3b7dd9`
- `wii-lightBlue`: `#88c0e8`
- `wii-white`: `#f5f5f5`
- `wii-gray`: `#e8e8e8`
- `wii-dark`: `#333333`

### Custom Classes

Add custom styles using the `className` prop:

```tsx
<WiiButton className="text-xl font-extrabold">
  Custom Style
</WiiButton>
```

## Animation Details

### Hover Animation
- **Scale**: 1.0 → 1.05 with springy bounce (stiffness: 400, damping: 10)
- **Border Glow**: Pulsing blue glow with 1.5s animation loop

### Click Animation
- Instant click sound playback
- Smooth state transitions

## Accessibility

- Keyboard navigation support
- Focus ring visible on tab focus
- Proper disabled state handling
- ARIA-compliant markup
- High contrast colors for readability

## Audio Setup

To use audio features, add sound files to your `public/sounds/` directory:

```
public/
  └── sounds/
      ├── wii-hover.mp3
      └── wii-click.mp3
```

If sound files are not available, the component gracefully degrades without errors.

### Recommended Sounds

- **Wii Hover**: Short beep or soft tone (~100-200ms)
- **Wii Click**: Decisive click sound (~200-300ms)

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (iOS 14+)
- Mobile: Touch-friendly with hover emulation

## Performance

- Uses `'use client'` directive for client-side rendering
- Optimized motion with Framer Motion's GPU acceleration
- Sound interruption prevents overlapping audio
- Debounced hover interactions

## Examples

See [src/app/page.tsx](../src/app/page.tsx) for a complete example implementation.

## License

Part of the Wii Portfolio project.
