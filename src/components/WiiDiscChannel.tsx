'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Disc3, Download, ExternalLink } from 'lucide-react'

/**
 * WiiDiscChannel Component
 * Represents a featured project or resume as a "disc" in Wii style
 * Mimics the Wii Disc Channel appearance
 */
export function WiiDiscChannel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="
        relative
        bg-gradient-to-br from-blue-50 to-blue-100
        border-4 border-blue-400
        rounded-3xl
        p-6
        shadow-wii-medium
        hover:shadow-wii-glow
        transition-all
        group
        cursor-pointer
      "
    >
      {/* Disc Animation */}
      <div className="flex items-center gap-4 mb-4">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            w-16 h-16
            bg-gradient-to-br from-wii-blue to-blue-600
            rounded-full
            flex items-center justify-center
            shadow-lg
            relative
          "
        >
          {/* Disc Center Hole */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-wii-gray rounded-full" />
          </div>
          <Disc3 className="w-8 h-8 text-white relative z-10" strokeWidth={2} />
        </motion.div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-wii-dark mb-1">Resume & CV</h3>
          <p className="text-sm text-wii-dark/70">View or download my credentials</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            flex-1
            flex items-center justify-center gap-2
            px-4 py-2
            bg-gradient-to-b from-wii-white to-wii-gray
            border-2 border-wii-lightBlue
            rounded-xl
            text-wii-dark font-semibold
            text-sm
            shadow-wii-subtle
            hover:shadow-wii-medium
            transition-all
          "
        >
          <ExternalLink className="w-4 h-4" />
          View
        </motion.a>
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            flex-1
            flex items-center justify-center gap-2
            px-4 py-2
            bg-gradient-to-b from-green-100 to-green-200
            border-2 border-green-400
            rounded-xl
            text-green-900 font-semibold
            text-sm
            shadow-wii-subtle
            hover:shadow-wii-medium
            transition-all
          "
        >
          <Download className="w-4 h-4" />
          Download
        </motion.a>
      </div>

      {/* Wii-style pulse effect */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute inset-0
          rounded-3xl
          border-2 border-wii-blue
          pointer-events-none
        "
      />
    </motion.div>
  )
}
