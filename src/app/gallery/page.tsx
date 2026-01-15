'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { photoAlbums } from '@/lib/data'
import { BottomBar } from '@/components/BottomBar'

interface SelectedAlbum {
  id: string
  photoIndex: number
}

/**
 * Gallery Page
 * Displays photo albums in a grid with lightbox functionality
 */
export default function GalleryPage() {
  const [selectedAlbum, setSelectedAlbum] = useState<SelectedAlbum | null>(null)

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  // Item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        type: 'spring' as const,
        stiffness: 100,
      },
    },
  }

  // Header animation
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  // Lightbox variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  }

  const handlePrevPhoto = () => {
    if (!selectedAlbum) return
    const album = photoAlbums.find((a) => a.id === selectedAlbum.id)
    if (!album?.photos) return

    setSelectedAlbum({
      ...selectedAlbum,
      photoIndex: (selectedAlbum.photoIndex - 1 + album.photos.length) % album.photos.length,
    })
  }

  const handleNextPhoto = () => {
    if (!selectedAlbum) return
    const album = photoAlbums.find((a) => a.id === selectedAlbum.id)
    if (!album?.photos) return

    setSelectedAlbum({
      ...selectedAlbum,
      photoIndex: (selectedAlbum.photoIndex + 1) % album.photos.length,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-wii-white to-wii-gray">
      {/* Header */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 pt-8 pb-12 px-4 md:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                mb-6
                flex items-center gap-2
                px-4 py-2 rounded-full
                bg-gradient-to-b from-wii-white to-wii-gray
                border-2 border-wii-lightBlue
                text-wii-dark font-semibold
                shadow-wii-subtle
                hover:shadow-wii-medium
                transition-all
              "
            >
              ← Back to Home
            </motion.button>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-wii-dark mb-3">
            Photo Gallery
          </h1>
          <p className="text-lg text-wii-dark/70">
            Explore my photo albums and memories
          </p>
        </div>
      </motion.div>

      {/* Albums Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pb-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photoAlbums.map((album) => (
            <motion.div
              key={album.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedAlbum({ id: album.id, photoIndex: 0 })}
              className="
                group
                cursor-pointer
                rounded-2xl
                border-4 border-wii-lightBlue
                bg-gradient-to-br from-white to-wii-gray
                overflow-hidden
                shadow-wii-subtle
                hover:shadow-wii-medium
                transition-all
                duration-300
              "
            >
              {/* Cover Image */}
              <div className="relative h-48 overflow-hidden bg-wii-gray">
                <img
                  src={album.coverImage}
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="text-white text-sm font-bold bg-wii-blue px-4 py-2 rounded-full"
                  >
                    View Album
                  </motion.div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-wii-dark mb-2">
                  {album.title}
                </h3>

                {album.description && (
                  <p className="text-sm text-wii-dark/70 mb-3 line-clamp-2">
                    {album.description}
                  </p>
                )}

                <div className="flex items-center justify-between text-sm text-wii-dark/60">
                  <span>{album.date}</span>
                  <span className="font-semibold">
                    {album.photoCount} photos
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedAlbum && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedAlbum(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedAlbum(null)}
                className="
                  absolute -top-12 right-0
                  p-2 rounded-full
                  bg-white text-wii-dark
                  hover:bg-wii-gray
                  transition-colors
                  z-10
                "
              >
                <X size={24} />
              </motion.button>

              {/* Image */}
              <div className="relative bg-black rounded-2xl overflow-hidden">
                <img
                  src={
                    photoAlbums
                      .find((a) => a.id === selectedAlbum.id)
                      ?.photos?.[selectedAlbum.photoIndex]?.url ||
                    photoAlbums.find((a) => a.id === selectedAlbum.id)
                      ?.coverImage ||
                    ''
                  }
                  alt="Gallery"
                  className="w-full h-auto"
                />

                {/* Navigation Buttons */}
                {photoAlbums.find((a) => a.id === selectedAlbum.id)?.photos &&
                  photoAlbums.find((a) => a.id === selectedAlbum.id)!.photos!
                    .length > 1 && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handlePrevPhoto}
                        className="
                          absolute left-4 top-1/2 -translate-y-1/2
                          p-2 rounded-full
                          bg-white/80 hover:bg-white text-wii-dark
                          transition-colors
                        "
                      >
                        <ChevronLeft size={24} />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleNextPhoto}
                        className="
                          absolute right-4 top-1/2 -translate-y-1/2
                          p-2 rounded-full
                          bg-white/80 hover:bg-white text-wii-dark
                          transition-colors
                        "
                      >
                        <ChevronRight size={24} />
                      </motion.button>
                    </>
                  )}
              </div>

              {/* Caption */}
              {photoAlbums
                .find((a) => a.id === selectedAlbum.id)
                ?.photos?.[selectedAlbum.photoIndex]?.caption && (
                <p className="mt-4 text-white text-center font-semibold">
                  {
                    photoAlbums
                      .find((a) => a.id === selectedAlbum.id)
                      ?.photos?.[selectedAlbum.photoIndex]?.caption
                  }
                </p>
              )}

              {/* Photo Counter */}
              {photoAlbums.find((a) => a.id === selectedAlbum.id)?.photos && (
                <p className="mt-2 text-white/70 text-center text-sm">
                  {selectedAlbum.photoIndex + 1} /{' '}
                  {photoAlbums.find((a) => a.id === selectedAlbum.id)?.photos
                    ?.length}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for bottom bar */}
      <div className="h-24 md:h-28" />

      {/* Bottom Bar */}
      <BottomBar show={true} showBackButton={true} />
    </div>
  )
}
