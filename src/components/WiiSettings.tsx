'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Settings, Volume2, VolumeX, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

/**
 * WiiSettings Component
 * Settings panel for sound and theme preferences
 * Mimics Wii Options menu aesthetic
 */
export function WiiSettings() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme, soundEnabled, setSoundEnabled } = useTheme()

  return (
    <>
      {/* Settings Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05, rotate: 90 }}
        whileTap={{ scale: 0.95 }}
        className="
          p-2.5
          bg-gradient-to-br from-wii-white to-wii-gray
          border-2 border-wii-lightBlue
          rounded-full
          shadow-wii-subtle
          hover:shadow-wii-medium
          transition-all
        "
      >
        <Settings className="w-5 h-5 text-wii-dark" strokeWidth={2} />
      </motion.button>

      {/* Settings Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Settings Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="
                fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-[90%] max-w-md
                bg-gradient-to-br from-wii-white to-wii-gray
                border-4 border-wii-lightBlue
                rounded-3xl
                shadow-2xl
                z-50
                p-6
              "
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-wii-lightBlue/30">
                <Settings className="w-8 h-8 text-wii-blue" strokeWidth={2} />
                <h2 className="text-2xl font-bold text-wii-dark">Wii Options</h2>
              </div>

              {/* Settings Options */}
              <div className="space-y-4">
                {/* Sound Toggle */}
                <div className="flex items-center justify-between p-4 bg-white rounded-xl border-2 border-wii-lightBlue/50">
                  <div className="flex items-center gap-3">
                    {soundEnabled ? (
                      <Volume2 className="w-6 h-6 text-wii-blue" strokeWidth={2} />
                    ) : (
                      <VolumeX className="w-6 h-6 text-wii-dark/40" strokeWidth={2} />
                    )}
                    <div>
                      <h3 className="font-bold text-wii-dark">Sound Effects</h3>
                      <p className="text-xs text-wii-dark/60">Wii Menu sounds</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className={`
                      relative w-14 h-8 rounded-full
                      ${soundEnabled ? 'bg-green-400' : 'bg-gray-300'}
                      transition-colors
                    `}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      animate={{
                        x: soundEnabled ? 24 : 2,
                      }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
                    />
                  </motion.button>
                </div>

                {/* Theme Toggle */}
                <div className="flex items-center justify-between p-4 bg-white rounded-xl border-2 border-wii-lightBlue/50">
                  <div className="flex items-center gap-3">
                    {theme === 'light' ? (
                      <Sun className="w-6 h-6 text-yellow-500" strokeWidth={2} />
                    ) : (
                      <Moon className="w-6 h-6 text-blue-600" strokeWidth={2} />
                    )}
                    <div>
                      <h3 className="font-bold text-wii-dark">Theme</h3>
                      <p className="text-xs text-wii-dark/60">
                        {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                      </p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    className={`
                      relative w-14 h-8 rounded-full
                      ${theme === 'light' ? 'bg-blue-400' : 'bg-gray-700'}
                      transition-colors
                    `}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      animate={{
                        x: theme === 'light' ? 24 : 2,
                      }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
                    />
                  </motion.button>
                </div>

                {/* Info */}
                <div className="p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
                  <p className="text-xs text-blue-900 leading-relaxed">
                    💡 <strong>Tip:</strong> Settings are saved to your browser. Sound effects require
                    audio files in the `/public/sounds/` directory.
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <motion.button
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  w-full mt-6
                  px-4 py-3
                  bg-gradient-to-b from-wii-blue to-blue-600
                  text-white font-bold
                  rounded-xl
                  shadow-wii-medium
                  hover:shadow-wii-glow
                  transition-all
                "
              >
                Done
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
