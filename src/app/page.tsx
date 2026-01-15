'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Code, Palette, Mail, Plus } from 'lucide-react'
import { profile, devProjects, artWorks } from '@/lib/data'
import { MiiHero, ArtGalleryModal, ChannelItem, BottomBar } from '@/components'

/**
 * Home Page - Dual Portfolio Dashboard
 * Wii Menu-inspired layout with:
 * - Large Mii Hero tile (2x2)
 * - Dev Projects channel (Code icon)
 * - Art Portfolio channel (Palette icon)
 * - Contact channel (Mail icon)
 */
export default function Home() {
  const [selectedArtwork, setSelectedArtwork] = useState<(typeof artWorks)[0] | null>(
    artWorks[0] || null
  )
  const [isArtModalOpen, setIsArtModalOpen] = useState(false)

  // Page transition animations
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        type: 'spring' as const,
        damping: 25,
        stiffness: 300,
      },
    }),
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-wii-white via-wii-gray to-wii-lightBlue/20">
      {/* Decorative Wii menu background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-wii-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-wii-lightBlue/5 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-6 md:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header with Mii Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring' as const,
              damping: 25,
              stiffness: 300,
            }}
            className="mb-12"
          >
            <MiiHero
              miiImageSrc={profile.miiImageSrc}
              name={profile.name}
              role={profile.role}
              bio={profile.bio}
            />
          </motion.div>

          {/* Channel Grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          >
            {/* Dev Projects Channel */}
            <motion.div custom={0} variants={itemVariants} className="lg:col-span-1">
              <Link href="/projects" className="w-full block">
                <ChannelItem
                  title="Dev Projects"
                  Icon={Code}
                  href="/projects"
                  variant="green"
                />
              </Link>
            </motion.div>

            {/* Art Portfolio Channel */}
            <motion.div custom={1} variants={itemVariants} className="lg:col-span-1">
              <button
                onClick={() => {
                  setSelectedArtwork(artWorks[0] || null)
                  setIsArtModalOpen(true)
                }}
                className="w-full"
              >
                <ChannelItem
                  title="Art Portfolio"
                  Icon={Palette}
                  variant="red"
                />
              </button>
            </motion.div>

            {/* Contact Channel */}
            <motion.div custom={2} variants={itemVariants} className="lg:col-span-1">
              <Link href="/contact" className="w-full block">
                <ChannelItem
                  title="Contact"
                  Icon={Mail}
                  href="/contact"
                  variant="yellow"
                />
              </Link>
            </motion.div>

            {/* Placeholder Tiles */}
            {[
              { label: 'Photo', id: 'photo' },
              { label: 'Playlist', id: 'playlist' },
              { label: 'Internet', id: 'internet' },
              { label: 'More...', id: 'more' },
            ].map((placeholder, idx) => (
              <motion.div key={placeholder.id} custom={3 + idx} variants={itemVariants}>
                <div
                  className="
                    bg-gradient-to-br
                    from-wii-lightBlue/30
                    to-wii-lightBlue/10
                    aspect-video
                    rounded-2xl
                    border-4
                    border-wii-lightBlue/30
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    hover:shadow-lg
                    hover:border-wii-lightBlue/50
                    transition-all
                    group
                  "
                >
                  <div className="flex flex-col items-center gap-2">
                    <Plus
                      className="w-10 h-10 text-wii-dark/30 group-hover:text-wii-dark/50 transition-colors"
                      strokeWidth={1.5}
                    />
                    <span className="text-xs font-bold text-wii-dark/30 group-hover:text-wii-dark/50 transition-colors">
                      {placeholder.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="bg-wii-white/80 backdrop-blur-sm rounded-xl border-2 border-wii-blue/30 p-4 text-center">
              <div className="text-2xl font-bold text-wii-blue">{devProjects.length}</div>
              <div className="text-xs text-wii-dark/60 font-semibold mt-1">Dev Projects</div>
            </div>
            <div className="bg-wii-white/80 backdrop-blur-sm rounded-xl border-2 border-wii-blue/30 p-4 text-center">
              <div className="text-2xl font-bold text-wii-blue">{artWorks.length}</div>
              <div className="text-xs text-wii-dark/60 font-semibold mt-1">Art Works</div>
            </div>
            <div className="bg-wii-white/80 backdrop-blur-sm rounded-xl border-2 border-wii-blue/30 p-4 text-center">
              <div className="text-2xl font-bold text-wii-blue">2</div>
              <div className="text-xs text-wii-dark/60 font-semibold mt-1">Portfolios</div>
            </div>
            <div className="bg-wii-white/80 backdrop-blur-sm rounded-xl border-2 border-wii-blue/30 p-4 text-center">
              <div className="text-2xl font-bold text-wii-blue">∞</div>
              <div className="text-xs text-wii-dark/60 font-semibold mt-1">Creativity</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Art Gallery Modal */}
      <ArtGalleryModal
        artwork={selectedArtwork}
        isOpen={isArtModalOpen}
        onClose={() => setIsArtModalOpen(false)}
      />

      {/* Bottom Bar */}
      <BottomBar show={true} />
    </main>
  )
}

