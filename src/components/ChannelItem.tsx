'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { useWiiSounds } from '@/hooks/useWiiSounds'

interface ChannelItemProps {
  /**
   * Display title of the channel
   */
  title: string

  /**
   * Icon component to display (Lucide React icon)
   */
  Icon: LucideIcon

  /**
   * Href link for the channel
   */
  href?: string

  /**
   * Whether this is an empty placeholder
   * @default false
   */
  isEmpty?: boolean

  /**
   * Optional content to display (like date/time in empty slots)
   */
  content?: React.ReactNode

  /**
   * Callback when clicked (alternative to href)
   */
  onClick?: () => void

  /**
   * Color variant for the channel
   * @default 'default'
   */
  variant?: 'default' | 'blue' | 'green' | 'red' | 'yellow'
}

const variantStyles = {
  default:
    'bg-gradient-to-br from-wii-white to-wii-gray border-wii-lightBlue hover:from-wii-white hover:to-white',
  blue: 'bg-gradient-to-br from-blue-100 to-blue-50 border-blue-400 hover:from-blue-100 hover:to-blue-100',
  green:
    'bg-gradient-to-br from-green-100 to-green-50 border-green-400 hover:from-green-100 hover:to-green-100',
  red: 'bg-gradient-to-br from-red-100 to-red-50 border-red-400 hover:from-red-100 hover:to-red-100',
  yellow:
    'bg-gradient-to-br from-yellow-100 to-yellow-50 border-yellow-400 hover:from-yellow-100 hover:to-yellow-100',
}

/**
 * ChannelItem Component
 * Represents a Wii channel card in the grid
 * Can be an interactive link or an empty placeholder
 */
export const ChannelItem = React.forwardRef<HTMLDivElement, ChannelItemProps>(
  (
    {
      title,
      Icon,
      href,
      isEmpty = false,
      content,
      onClick,
      variant = 'default',
    },
    ref
  ) => {
    const { playClick, playHover } = useWiiSounds()

    // Motion variants for hover effects
    const containerVariants = {
      rest: {
        scale: 1,
        y: 0,
      },
      hover: {
        scale: 1.05,
        y: -8,
        transition: {
          type: 'spring' as const,
          stiffness: 400,
          damping: 10,
        },
      },
    }

    const iconVariants = {
      rest: { scale: 1 },
      hover: {
        scale: 1.15,
        transition: {
          type: 'spring' as const,
          stiffness: 400,
          damping: 10,
        },
      },
    }

    const shadowVariants = {
      rest: {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
      hover: {
        boxShadow: '0 12px 32px rgba(59, 125, 217, 0.15)',
      },
    }

    // Base channel content
    const channelContent = (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="rest"
        whileHover="hover"
        onHoverStart={() => playHover()}
        onTap={() => playClick()}
        className={`
          relative
          h-full
          rounded-3xl
          border-4
          ${variantStyles[variant]}
          p-6
          cursor-pointer
          flex flex-col items-center justify-center gap-4
          transition-all duration-300
          ${isEmpty ? 'opacity-60' : 'opacity-100'}
        `}
      >
        {/* Shadow effect */}
        <motion.div
          variants={shadowVariants}
          className="absolute inset-0 rounded-3xl pointer-events-none"
        />

        {/* Content wrapper */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center">
          {/* Icon */}
          <motion.div variants={iconVariants} className="text-wii-blue">
            <Icon size={56} strokeWidth={1.5} />
          </motion.div>

          {/* Title */}
          <h2 className="text-xl font-bold text-wii-dark leading-tight">
            {title}
          </h2>

          {/* Optional content (for empty slots) */}
          {content && (
            <p className="text-sm text-wii-dark/70 mt-2">{content}</p>
          )}
        </div>

        {/* Glossy shine effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </motion.div>
    )

    // If it's a link, wrap in Next.js Link
    if (href && !isEmpty) {
      return (
        <Link href={href} className="group h-full">
          {channelContent}
        </Link>
      )
    }

    // If it has an onClick handler, make it a button
    if (onClick && !isEmpty) {
      return (
        <button
          onClick={onClick}
          className="group h-full w-full focus:outline-none focus:ring-2 focus:ring-wii-blue focus:ring-offset-2 rounded-3xl"
        >
          {channelContent}
        </button>
      )
    }

    // Otherwise just render as is (for empty slots)
    return <div className="group h-full">{channelContent}</div>
  }
)

ChannelItem.displayName = 'ChannelItem'

export default ChannelItem
