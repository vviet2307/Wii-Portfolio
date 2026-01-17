'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, X, ChevronLeft, ChevronRight } from 'lucide-react'

interface Message {
  id: string
  title: string
  preview: string
  date: string
  read: boolean
  icon: string
}

const sampleMessages: Message[] = [
  {
    id: '1',
    title: 'Welcome to Wii Portfolio!',
    preview: 'Thanks for checking out my portfolio. Feel free to explore all the channels!',
    date: 'Jan 17',
    read: false,
    icon: '✨',
  },
  {
    id: '2',
    title: 'New Projects Added',
    preview: 'Check out my latest development projects in the Dev Projects channel.',
    date: 'Jan 15',
    read: true,
    icon: '🎮',
  },
  {
    id: '3',
    title: 'Art Portfolio Updated',
    preview: 'Fresh artwork has been added to the gallery!',
    date: 'Jan 10',
    read: true,
    icon: '🎨',
  },
]

/**
 * WiiMessageBoard Component
 * Displays messages in Wii Message Board style
 * Clickable to open message viewer
 */
export function WiiMessageBoard() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const unreadCount = sampleMessages.filter((m) => !m.read).length

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sampleMessages.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + sampleMessages.length) % sampleMessages.length)
  }

  return (
    <>
      {/* Message Board Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          relative
          flex items-center gap-2
          px-3 py-2
          bg-gradient-to-br from-wii-white to-wii-gray
          border-2 border-wii-lightBlue
          rounded-xl
          shadow-wii-subtle
          hover:shadow-wii-medium
          transition-all
        "
      >
        <Mail className="w-5 h-5 text-wii-blue" strokeWidth={2} />
        <span className="text-sm font-semibold text-wii-dark hidden sm:inline">
          Messages
        </span>
        {unreadCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="
              absolute -top-1 -right-1
              bg-red-500
              text-white
              text-xs
              font-bold
              w-5 h-5
              rounded-full
              flex items-center justify-center
            "
          >
            {unreadCount}
          </motion.div>
        )}
      </motion.button>

      {/* Message Board Modal */}
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

            {/* Message Board */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="
                fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-[90%] max-w-2xl
                bg-gradient-to-br from-wii-white to-wii-gray
                border-4 border-wii-lightBlue
                rounded-3xl
                shadow-2xl
                z-50
                p-6
              "
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-8 h-8 text-wii-blue" strokeWidth={2} />
                  <h2 className="text-2xl font-bold text-wii-dark">Message Board</h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="
                    p-2 rounded-full
                    bg-wii-gray
                    hover:bg-red-100
                    border-2 border-wii-lightBlue
                    hover:border-red-400
                    transition-all
                  "
                >
                  <X className="w-5 h-5 text-wii-dark" />
                </button>
              </div>

              {/* Message Display */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="
                      bg-white
                      border-2 border-wii-lightBlue/50
                      rounded-2xl
                      p-6
                      min-h-[200px]
                    "
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl">{sampleMessages[currentIndex].icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-wii-dark mb-1">
                          {sampleMessages[currentIndex].title}
                        </h3>
                        <p className="text-sm text-wii-dark/60">
                          {sampleMessages[currentIndex].date}
                        </p>
                      </div>
                      {!sampleMessages[currentIndex].read && (
                        <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                          NEW
                        </div>
                      )}
                    </div>
                    <p className="text-wii-dark/80 leading-relaxed">
                      {sampleMessages[currentIndex].preview}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={handlePrev}
                    className="
                      p-2 rounded-full
                      bg-gradient-to-br from-wii-white to-wii-gray
                      border-2 border-wii-lightBlue
                      hover:border-wii-blue
                      transition-all
                    "
                  >
                    <ChevronLeft className="w-5 h-5 text-wii-dark" />
                  </button>

                  <div className="text-sm font-semibold text-wii-dark/70">
                    {currentIndex + 1} / {sampleMessages.length}
                  </div>

                  <button
                    onClick={handleNext}
                    className="
                      p-2 rounded-full
                      bg-gradient-to-br from-wii-white to-wii-gray
                      border-2 border-wii-lightBlue
                      hover:border-wii-blue
                      transition-all
                    "
                  >
                    <ChevronRight className="w-5 h-5 text-wii-dark" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
