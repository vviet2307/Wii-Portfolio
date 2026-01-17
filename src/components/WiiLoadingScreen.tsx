'use client'

import React from 'react'
import { motion } from 'framer-motion'

/**
 * WiiLoadingScreen Component
 * Displays a Wii-style loading animation
 * Perfect for page transitions or data loading
 */
export function WiiLoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-wii-white to-wii-gray">
      <div className="flex flex-col items-center gap-6">
        {/* Wii Logo Placeholder */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-6xl font-bold text-wii-blue"
        >
          Wii
        </motion.div>

        {/* Loading Dots */}
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -12, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.15,
                ease: 'easeInOut',
              }}
              className="w-3 h-3 bg-wii-blue rounded-full"
            />
          ))}
        </div>

        {/* Loading Text */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-sm font-semibold text-wii-dark/70"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  )
}
