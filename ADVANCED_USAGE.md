# Advanced Usage Guide

This guide covers advanced techniques and patterns for the WiiButton component.

## Table of Contents

1. [Custom Animations](#custom-animations)
2. [Sound Integration](#sound-integration)
3. [Styling Patterns](#styling-patterns)
4. [Accessibility Deep Dive](#accessibility-deep-dive)
5. [Performance Optimization](#performance-optimization)
6. [Advanced Patterns](#advanced-patterns)

## Custom Animations

### Modifying Spring Physics

Adjust the animation feel by changing spring parameters in `WiiButton.tsx`:

```tsx
const buttonVariants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 400,  // Increase for snappier (300-500)
      damping: 10,     // Increase for less bounce (5-15)
    },
  },
}
```

**Presets:**

- **Snappy** (Quick response): `stiffness: 450, damping: 20`
- **Bouncy** (Fun): `stiffness: 350, damping: 5`
- **Smooth** (Elegant): `stiffness: 280, damping: 15`
- **Stiff** (Rigid): `stiffness: 600, damping: 30`

### Custom Scale Values

```tsx
// More dramatic hover effect
scale: 1.15  // Instead of 1.05

// Subtle hover
scale: 1.02  // Instead of 1.05
```

### Adding Additional Animations

```tsx
// Example: Add rotation on hover
hover: {
  scale: 1.05,
  rotate: 2,  // Slight rotation
  transition: {
    type: 'spring',
    stiffness: 400,
    damping: 10,
  }
}
```

### Customizing Pulse Animation

Modify the border pulse effect in `borderPulseVariants`:

```tsx
hover: {
  boxShadow: [
    '0 0 0px rgba(59, 125, 217, 0.2)',
    '0 0 30px rgba(59, 125, 217, 0.8)',  // Stronger glow
    '0 0 0px rgba(59, 125, 217, 0.2)',
  ],
  transition: {
    duration: 2.0,  // Slower pulse (was 1.5)
    repeat: Infinity,
    ease: 'easeInOut',
  },
}
```

## Sound Integration

### Custom Sound Paths

```tsx
<WiiButton
  hoverSound="/audio/custom-beep.wav"
  clickSound="/audio/custom-click.wav"
>
  Custom Sounds
</WiiButton>
```

### Handling Audio Failures

The component gracefully handles missing audio files. For debugging:

```tsx
// In WiiButton.tsx, modify playHoverSound call
const handleMouseEnter = () => {
  if (!disabled) {
    setIsHovered(true)
    try {
      playHoverSound()
    } catch (error) {
      // Log or handle audio error
      console.error('Failed to play hover sound:', error)
      // Optionally trigger visual feedback instead
    }
  }
}
```

### Volume Levels

Adjust volume in sound hook initialization:

```tsx
// In WiiButton.tsx
const [playHoverSound] = useSound(hoverSound ?? '/sounds/wii-hover.mp3', {
  volume: 0.3,  // Lower volume (0-1)
  interrupt: true,
})

const [playClickSound] = useSound(clickSound ?? '/sounds/wii-click.mp3', {
  volume: 0.8,  // Higher volume
  interrupt: true,
})
```

### Sound Effects Library

Create a custom hook for sound management:

```tsx
// hooks/useWiiSounds.ts
import useSound from 'use-sound'

export function useWiiSounds(hoverPath?: string, clickPath?: string) {
  const [playHover] = useSound(hoverPath ?? '/sounds/wii-hover.mp3', {
    volume: 0.5,
    interrupt: true,
  })

  const [playClick] = useSound(clickPath ?? '/sounds/wii-click.mp3', {
    volume: 0.6,
    interrupt: true,
  })

  return { playHover, playClick }
}

// Usage in component
const { playHover, playClick } = useWiiSounds()
```

## Styling Patterns

### Color Variants

Create style variants using Tailwind classes:

```tsx
// Success Button
<WiiButton className="bg-gradient-to-b from-green-200 to-green-100 border-green-400">
  ✓ Success
</WiiButton>

// Warning Button
<WiiButton className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-yellow-400">
  ⚠️ Warning
</WiiButton>

// Danger Button
<WiiButton className="bg-gradient-to-b from-red-200 to-red-100 border-red-400">
  ✕ Delete
</WiiButton>
```

### Size Variants

```tsx
// Small Button
<WiiButton className="px-4 py-2 text-sm rounded-full">
  Small
</WiiButton>

// Large Button
<WiiButton className="px-12 py-6 text-2xl rounded-full">
  Large
</WiiButton>

// Extra Large
<WiiButton className="px-16 py-8 text-3xl font-black">
  XL Button
</WiiButton>
```

### Text Effects

```tsx
// Shadow Text
<WiiButton className="text-shadow-lg">
  Shadowed Text
</WiiButton>

// Outlined Text
<WiiButton className="text-transparent stroke-wii-dark stroke-1">
  Outlined
</WiiButton>

// Gradient Text
<WiiButton className="bg-gradient-to-r from-wii-blue to-wii-lightBlue bg-clip-text text-transparent">
  Gradient Text
</WiiButton>
```

### Compound Components

Create button groups:

```tsx
// ButtonGroup.tsx
export function WiiButtonGroup({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2">
      {children}
    </div>
  )
}

// Usage
<WiiButtonGroup>
  <WiiButton onClick={() => {}}>Cancel</WiiButton>
  <WiiButton onClick={() => {}}>OK</WiiButton>
</WiiButtonGroup>
```

## Accessibility Deep Dive

### Focus Management

Create a component with ref for focus control:

```tsx
import { useRef } from 'react'
import { WiiButton } from '@/components'

export function FocusManager() {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleFocus = () => {
    buttonRef.current?.focus()
  }

  return (
    <div>
      <WiiButton>Focused Button</WiiButton>
      <button onClick={handleFocus}>Set Focus</button>
    </div>
  )
}
```

### ARIA Labels

Add descriptive labels for screen readers:

```tsx
<WiiButton
  className="aria-label='Play background music'"
  onClick={toggleMusic}
>
  🎵
</WiiButton>
```

### Keyboard Shortcuts

Implement keyboard shortcuts:

```tsx
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSubmit()
    }
  }

  window.addEventListener('keydown', handleKeyPress)
  return () => window.removeEventListener('keydown', handleKeyPress)
}, [])
```

## Performance Optimization

### Memoization

Prevent unnecessary re-renders:

```tsx
import { memo } from 'react'

export const MemoizedWiiButton = memo(WiiButton)

// Usage in list
{items.map(item => (
  <MemoizedWiiButton key={item.id} onClick={() => handleItem(item)}>
    {item.label}
  </MemoizedWiiButton>
))}
```

### useCallback

Optimize click handlers:

```tsx
import { useCallback } from 'react'

export function MyComponent() {
  const handleClick = useCallback(() => {
    // Heavy operation
    console.log('clicked')
  }, []) // Empty dependency array = stable reference

  return <WiiButton onClick={handleClick}>Click</WiiButton>
}
```

### Lazy Loading

Load component only when needed:

```tsx
import { lazy, Suspense } from 'react'

const WiiButton = lazy(() => import('@/components/WiiButton'))

export function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WiiButton onClick={() => {}}>Lazy Loaded</WiiButton>
    </Suspense>
  )
}
```

## Advanced Patterns

### Button with Loading State

```tsx
import { useState } from 'react'
import { WiiButton } from '@/components'

export function LoadingButton() {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    try {
      await fetch('/api/data')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <WiiButton
      onClick={handleClick}
      disabled={isLoading}
      className={isLoading ? 'opacity-75' : ''}
    >
      {isLoading ? '⏳ Loading...' : '✓ Submit'}
    </WiiButton>
  )
}
```

### Button with Tooltip

```tsx
import { useState } from 'react'
import { WiiButton } from '@/components'
import { motion, AnimatePresence } from 'framer-motion'

export function TooltipButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="relative inline-block">
      <WiiButton
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => {}}
      >
        ❓
      </WiiButton>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-wii-dark text-white rounded-lg text-sm whitespace-nowrap"
          >
            This is a helpful tooltip
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
```

### Toggle Button

```tsx
import { useState } from 'react'
import { WiiButton } from '@/components'

export function ToggleButton() {
  const [isActive, setIsActive] = useState(false)

  return (
    <WiiButton
      onClick={() => setIsActive(!isActive)}
      className={isActive ? 'border-wii-blue shadow-wii-glow' : ''}
    >
      {isActive ? '🔘 Active' : '⭕ Inactive'}
    </WiiButton>
  )
}
```

### Button Menu

```tsx
import { useState } from 'react'
import { WiiButton } from '@/components'
import { motion } from 'framer-motion'

export function ButtonMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <WiiButton onClick={() => setIsOpen(!isOpen)}>
        ☰ Menu
      </WiiButton>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        className="overflow-hidden mt-4 space-y-2"
      >
        <WiiButton onClick={() => {}}>Option 1</WiiButton>
        <WiiButton onClick={() => {}}>Option 2</WiiButton>
        <WiiButton onClick={() => {}}>Option 3</WiiButton>
      </motion.div>
    </div>
  )
}
```

### Animated Counter Button

```tsx
import { useState } from 'react'
import { WiiButton } from '@/components'
import { motion } from 'framer-motion'

export function CounterButton() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <motion.div
        key={count}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-bold text-wii-dark mb-4"
      >
        {count}
      </motion.div>

      <WiiButton
        onClick={() => setCount(count + 1)}
        hoverSound="/sounds/wii-hover.mp3"
        clickSound="/sounds/wii-click.mp3"
      >
        Increment
      </WiiButton>
    </div>
  )
}
```

### Multi-State Button

```tsx
import { useReducer } from 'react'
import { WiiButton } from '@/components'

type ButtonState = 'idle' | 'loading' | 'success' | 'error'

export function MultiStateButton() {
  const [state, dispatch] = useReducer(
    (state: ButtonState) => {
      const states: Record<ButtonState, ButtonState> = {
        idle: 'loading',
        loading: 'success',
        success: 'idle',
        error: 'idle',
      }
      return states[state]
    },
    'idle'
  )

  const stateConfig = {
    idle: { text: 'Click Me', icon: '▶' },
    loading: { text: 'Loading...', icon: '⏳' },
    success: { text: 'Success!', icon: '✓' },
    error: { text: 'Error', icon: '✕' },
  }

  const config = stateConfig[state]

  return (
    <WiiButton
      onClick={() => dispatch(undefined as any)}
      disabled={state === 'loading'}
    >
      {config.icon} {config.text}
    </WiiButton>
  )
}
```

## Best Practices

1. **Keep it Simple**: Don't over-customize
2. **Consistent Spacing**: Use Tailwind's spacing scale
3. **Accessible First**: Always consider keyboard users
4. **Test Performance**: Profile animations in DevTools
5. **Mobile First**: Design for small screens first
6. **Semantic HTML**: Use proper button elements
7. **Error Handling**: Gracefully handle missing sounds/resources

## Common Pitfalls

❌ **Don't**: Add too many animations
✅ **Do**: Use subtle, purposeful animations

❌ **Don't**: Make buttons too small on mobile
✅ **Do**: Ensure minimum 44px touch target

❌ **Don't**: Use sounds without volume control
✅ **Do**: Make sounds optional and configurable

❌ **Don't**: Disable buttons without visual feedback
✅ **Do**: Show clear disabled state

---

**Need more help?** Check the main documentation or see examples in [src/app/page.tsx](src/app/page.tsx).
