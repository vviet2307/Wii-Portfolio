'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { ArtWork } from '@/lib/data'

interface ArtGalleryModalProps {
  artwork: ArtWork | null
  isOpen: boolean
  onClose: () => void
}

/**
 * ArtGalleryModal Component
 * Wii Photo Channel-inspired modal for viewing art with process images
 * Split view layout: Large final image + process/sketch gallery
 * Click sketches to swap with main image to show the creative process
 */
export function ArtGalleryModal({
  artwork,
  isOpen,
  onClose,
}: ArtGalleryModalProps) {
  const [selectedProcessIndex, setSelectedProcessIndex] = useState(0)
  const [displayImage, setDisplayImage] = useState(artwork?.finalImage)
  const [isProcessImage, setIsProcessImage] = useState(false)

  // Update display image when artwork changes
  React.useEffect(() => {
    if (artwork) {
      setDisplayImage(artwork.finalImage)
      setSelectedProcessIndex(0)
      setIsProcessImage(false)
    }
  }, [artwork])

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring' as const, damping: 25, stiffness: 300 },
    },
    exit: { opacity: 0, scale: 0.8, y: 20 },
  }

  const handleProcessImageClick = (index: number) => {
    if (!artwork) return
    setSelectedProcessIndex(index)
    setDisplayImage(artwork.processImages[index])
    setIsProcessImage(true)
  }

  const navigateProcess = (direction: 'prev' | 'next') => {
    if (!artwork) return
    const newIndex =
      direction === 'next'
        ? (selectedProcessIndex + 1) % artwork.processImages.length
        : (selectedProcessIndex - 1 + artwork.processImages.length) %
          artwork.processImages.length
    setSelectedProcessIndex(newIndex)
    setDisplayImage(artwork.processImages[newIndex])
    setIsProcessImage(true)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              fixed
              inset-4
              md:inset-8
              z-50
              flex
              flex-col
              md:flex-row
              gap-6
              bg-gradient-to-br
              from-white
              to-wii-gray
              rounded-3xl
              border-4
              border-wii-lightBlue
              overflow-hidden
              shadow-2xl
            "
            style={{
              boxShadow:
                '0 20px 60px rgba(0,0,0,0.3), 0 0 40px rgba(59, 125, 217, 0.2)',
            }}
          >
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="
                absolute
                top-6
                right-6
                z-20
                p-2
                rounded-full
                bg-white
                border-2
                border-wii-lightBlue
                text-wii-dark
                shadow-lg
                hover:bg-wii-gray
                transition-colors
              "
            >
              <X size={24} />
            </motion.button>

            {/* Main Image Section */}
            {artwork && (
            <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-8 overflow-hidden bg-gradient-to-br from-wii-white to-blue-50">
              <motion.div
                key={displayImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full max-h-96 md:max-h-full flex items-center justify-center"
              >
                <Image
                  src={displayImage || ''}
                  alt={artwork.title}
                  fill
                  className="object-contain drop-shadow-lg"
                  quality={90}
                />
              </motion.div>

              {/* Image info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-center"
              >
                <p className="text-sm text-wii-dark/60 font-semibold">
                  {isProcessImage
                    ? `Process #${selectedProcessIndex + 1}`
                    : 'Final Artwork'}
                </p>
              </motion.div>
            </div>
            )}

            {/* Right Panel: Art Info + Process Gallery */}
            {artwork && (
            <div className="w-full md:w-80 flex flex-col p-6 md:p-8 border-t-4 md:border-t-0 md:border-l-4 border-wii-lightBlue/30">
              {/* Art Info */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <h2 className="text-2xl font-bold text-wii-dark mb-2">
                  {artwork.title}
                </h2>

                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-wii-lightBlue/30 border border-wii-blue text-sm font-semibold text-wii-dark">
                    {artwork.medium}
                  </span>
                  {artwork.date && (
                    <span className="text-sm text-wii-dark/60 font-semibold">
                      {artwork.date}
                    </span>
                  )}
                </div>

                <p className="text-sm text-wii-dark/70 leading-relaxed">
                  {artwork.description}
                </p>
              </motion.div>

              {/* Process Images Gallery */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-sm font-bold text-wii-dark mb-4 uppercase tracking-wider">
                  Creative Process ({artwork.processImages.length})
                </h3>

                {/* Horizontal scroll gallery on mobile, grid on desktop */}
                <div className="flex-1 flex flex-col gap-3 overflow-y-auto md:overflow-y-auto">
                  {artwork.processImages.map((image, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleProcessImageClick(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        relative
                        h-20
                        rounded-xl
                        border-2
                        overflow-hidden
                        transition-all
                        ${
                          selectedProcessIndex === index
                            ? 'border-wii-blue shadow-lg shadow-wii-blue/50'
                            : 'border-wii-lightBlue/50 hover:border-wii-lightBlue'
                        }
                      `}
                    >
                      <Image
                        src={image}
                        alt={`Process step ${index + 1}`}
                        fill
                        className="object-cover"
                      />

                      {/* Selection indicator */}
                      {selectedProcessIndex === index && (
                        <motion.div
                          layoutId="activeProcess"
                          className="
                            absolute
                            inset-0
                            bg-wii-blue/20
                            border-2
                            border-wii-blue
                            rounded-xl
                          "
                        />
                      )}

                      {/* Step number */}
                      <div className="absolute top-2 right-2 bg-white/90 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold text-wii-dark shadow-md">
                        {index + 1}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Navigation buttons for process images */}
              {artwork.processImages.length > 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-2 mt-4"
                >
                  <button
                    onClick={() => navigateProcess('prev')}
                    className="
                      flex-1
                      py-2
                      rounded-lg
                      bg-gradient-to-b
                      from-wii-white
                      to-wii-gray
                      border-2
                      border-wii-lightBlue
                      text-wii-dark
                      font-semibold
                      hover:shadow-md
                      transition-all
                      flex
                      items-center
                      justify-center
                      gap-2
                    "
                  >
                    <ChevronLeft size={18} />
                    <span className="hidden sm:inline">Prev</span>
                  </button>

                  <button
                    onClick={() => navigateProcess('next')}
                    className="
                      flex-1
                      py-2
                      rounded-lg
                      bg-gradient-to-b
                      from-wii-white
                      to-wii-gray
                      border-2
                      border-wii-lightBlue
                      text-wii-dark
                      font-semibold
                      hover:shadow-md
                      transition-all
                      flex
                      items-center
                      justify-center
                      gap-2
                    "
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight size={18} />
                  </button>
                </motion.div>
              )}
            </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
