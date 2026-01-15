'use client'

import React, { ReactNode, useState } from 'react'
import { motion } from 'framer-motion'
import useSound from 'use-sound'

interface WiiButtonProps {
  /**
   * Content to display inside the button
   */
  children: ReactNode

  /**
   * Callback function triggered on button click
   */
  onClick?: () => void

  /**
   * Whether the button should display in wide mode (bottom bar style)
   * @default false
   */
  wide?: boolean

  /**
   * Path to the hover sound effect (e.g., "/sounds/wii-hover.mp3")
   * @optional
   */
  hoverSound?: string

  /**
   * Path to the click sound effect (e.g., "/sounds/wii-click.mp3")
   * @optional
   */
  clickSound?: string

  /**
   * Additional CSS classes to customize the button
   * @optional
   */
  className?: string

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean
}

/**
 * WiiButton Component
 * A reusable button component styled with Wii UI aesthetics and Frutiger Aero design.
 * Features glossy gradients, neumorphic-inspired shadows, and interactive Framer Motion animations.
 *
 * @example
 * ```tsx
 * <WiiButton
 *   onClick={() => console.log('clicked')}
 *   hoverSound="/sounds/wii-hover.mp3"
 *   clickSound="/sounds/wii-click.mp3"
 *   wide={false}
 * >
 *   Click Me!
 * </WiiButton>
 * ```
 */
export const WiiButton: React.FC<WiiButtonProps> = ({
  children,
  onClick,
  wide = false,
  hoverSound,
  clickSound,
  className = '',
  disabled = false,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  // Initialize sound hooks
  const [playHoverSound] = useSound(hoverSound ?? '/sounds/wii-hover.mp3', {
    volume: 0.5,
    interrupt: true,
  })

  const [playClickSound] = useSound(clickSound ?? '/sounds/wii-click.mp3', {
    volume: 0.6,
    interrupt: true,
  })

  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovered(true)
      try {
        playHoverSound()
      } catch (error) {
        // Silently fail if sound file is missing
        console.debug('Hover sound not available:', error)
      }
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleClick = () => {
    if (!disabled) {
      try {
        playClickSound()
      } catch (error) {
        // Silently fail if sound file is missing
        console.debug('Click sound not available:', error)
      }
      onClick?.()
    }
  }

  // Motion variants for springy bounce effect
  const buttonVariants = {
    rest: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 10,
      },
    },
  }

  // Border glow pulse effect
  const borderPulseVariants = {
    rest: {
      boxShadow: '0 0 0px rgba(59, 125, 217, 0.2)',
    },
    hover: {
      boxShadow: [
        '0 0 0px rgba(59, 125, 217, 0.2)',
        '0 0 15px rgba(59, 125, 217, 0.5)',
        '0 0 0px rgba(59, 125, 217, 0.2)',
      ],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  }

  return (
    <motion.button
      variants={buttonVariants}
      initial="rest"
      animate={isHovered ? 'hover' : 'rest'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      disabled={disabled}
      className={`
        relative
        px-6 py-3
        ${wide ? 'w-full md:w-64 py-4' : 'px-8 py-4'}
        ${wide ? 'rounded-2xl' : 'rounded-full'}
        
        /* Base styling */
        font-semibold
        text-lg
        text-wii-dark
        transition-all
        duration-200
        
        /* Background with glossy gradient */
        bg-gradient-to-b
        from-wii-white
        to-wii-gray
        
        /* Wii-style border */
        border-4
        border-wii-lightBlue
        
        /* Shadows for depth */
        shadow-wii-subtle
        
        /* Disabled state */
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-wii-medium'}
        
        /* Focus state for accessibility */
        focus:outline-none
        focus:ring-2
        focus:ring-wii-blue
        focus:ring-offset-2
        
        /* Prevent text selection on double-click */
        select-none
        
        /* Custom classes */
        ${className}
      `}
      style={{
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      }}
    >
      {/* Inner glow/pulse border effect */}
      <motion.div
        variants={borderPulseVariants}
        initial="rest"
        animate={isHovered ? 'hover' : 'rest'}
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          borderRadius: wide ? '1rem' : '9999px',
        }}
      />

      {/* Content wrapper with relative positioning */}
      <div className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </div>
    </motion.button>
  )
}

export type { WiiButtonProps }

export default WiiButton
