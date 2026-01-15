'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface WiiGridProps {
  /**
   * Child elements (usually ChannelItem components)
   */
  children: React.ReactNode

  /**
   * Number of columns in the grid
   * @default 4
   */
  columns?: number

  /**
   * Custom gap between grid items
   * @default 'gap-6'
   */
  gap?: string

  /**
   * Show the diagonal stripe background
   * @default true
   */
  showBackground?: boolean

  /**
   * Custom background color
   * @default 'from-wii-white to-wii-gray'
   */
  bgGradient?: string
}

/**
 * WiiGrid Component
 * Main container for the Wii menu grid layout
 * Features diagonal stripe background and responsive grid
 */
export const WiiGrid: React.FC<WiiGridProps> = ({
  children,
  columns = 4,
  gap = 'gap-6',
  showBackground = true,
  bgGradient = 'from-wii-white to-wii-gray',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`
        relative
        min-h-screen
        bg-gradient-to-br
        ${bgGradient}
        overflow-hidden
      `}
    >
      {/* Diagonal stripe background pattern */}
      {showBackground && (
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="diagonal-stripes"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="20"
                  stroke="#3b7dd9"
                  strokeWidth="2"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-stripes)" />
          </svg>
        </div>
      )}

      {/* Grid container */}
      <div className="relative z-10 w-full h-full px-4 md:px-8 py-8">
        <div
          className={`
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-${columns}
            ${gap}
            auto-rows-max
            lg:auto-rows-fr
          `}
          style={{
            gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          {children}
        </div>
      </div>
    </motion.div>
  )
}

export default WiiGrid
