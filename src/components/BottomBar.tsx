'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { socials } from '@/lib/data'
import * as LucideIcons from 'lucide-react'

interface BottomBarProps {
  /**
   * Whether to show the bottom bar
   * @default true
   */
  show?: boolean

  /**
   * Custom className
   */
  className?: string

  /**
   * Show back button
   * @default false
   */
  showBackButton?: boolean

  /**
   * Custom content to display on the left
   */
  leftContent?: React.ReactNode
}

/**
 * BottomBar Component
 * Sticky footer with social links styled as Wii buttons
 * Features the "Message Board" style layout
 */
export const BottomBar: React.FC<BottomBarProps> = ({
  show = true,
  className = '',
  showBackButton = false,
  leftContent,
}) => {
  if (!show) return null

  // Container animation
  const containerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.08,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 10,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`
        fixed
        bottom-0
        left-0
        right-0
        bg-gradient-to-t
        from-wii-white
        to-wii-gray
        border-t-4
        border-wii-lightBlue
        shadow-lg
        z-50
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
        {/* Content grid: left (back button), center (social links), right (credits) */}
        <div className="flex items-center justify-between gap-4">
          {/* Left Content */}
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            {showBackButton && (
              <Link href="/">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  initial="rest"
                  className="
                    px-4 py-2 rounded-full
                    bg-gradient-to-b from-wii-white to-wii-gray
                    border-2 border-wii-lightBlue
                    text-wii-dark font-semibold
                    text-sm md:text-base
                    shadow-wii-subtle
                    hover:shadow-wii-medium
                    transition-all
                    focus:outline-none focus:ring-2 focus:ring-wii-blue
                  "
                >
                  ← Back
                </motion.button>
              </Link>
            )}
            {leftContent}
          </motion.div>

          {/* Center: Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {socials.map((social) => {
              // Get the icon component from lucide-react
              const IconComponent =
                (LucideIcons[social.icon as keyof typeof LucideIcons] as any) ||
                LucideIcons.Link

              return (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  whileHover="hover"
                  initial="rest"
                  className="
                    p-2 md:p-3
                    rounded-full
                    bg-gradient-to-b from-wii-white to-wii-gray
                    border-2 border-wii-lightBlue
                    text-wii-blue
                    shadow-wii-subtle
                    hover:shadow-wii-medium
                    transition-all
                    focus:outline-none focus:ring-2 focus:ring-wii-blue
                    group
                  "
                  title={social.label}
                >
                  <IconComponent
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Right: Credits / Info */}
          <motion.div
            variants={itemVariants}
            className="text-xs md:text-sm text-wii-dark/60 text-right whitespace-nowrap"
          >
            <p>Wii Portfolio 2025</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default BottomBar
