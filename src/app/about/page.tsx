'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { profile } from '@/lib/data'
import { BottomBar } from '@/components/BottomBar'

/**
 * About Page
 * Displays profile information and bio
 */
export default function AboutPage() {
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
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
        <div className="max-w-4xl mx-auto">
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
            About Me
          </h1>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 pb-32"
      >
        <div
          className="
            rounded-3xl
            border-4 border-wii-lightBlue
            bg-gradient-to-br from-white to-wii-gray
            p-8 md:p-12
            shadow-wii-subtle
          "
        >
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="
                  w-32 h-32 md:w-40 md:h-40
                  rounded-2xl
                  border-4 border-wii-lightBlue
                  overflow-hidden
                  shadow-wii-medium
                "
              >
                <img
                  src={profile.miiImageSrc}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-wii-dark mb-2">
                {profile.name}
              </h2>
              <p className="text-xl text-wii-blue font-semibold mb-4">
                {profile.role}
              </p>
              <p className="text-lg text-wii-dark/70 leading-relaxed mb-4">
                {profile.bio}
              </p>
              <p className="text-base text-wii-dark/60">
                Email:{' '}
                <a
                  href={`mailto:${profile.email}`}
                  className="text-wii-blue font-semibold hover:underline"
                >
                  {profile.email}
                </a>
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="border-t-2 border-wii-lightBlue pt-8">
            <h3 className="text-2xl font-bold text-wii-dark mb-6">
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold text-wii-blue mb-3">
                  Frontend Development
                </h4>
                <ul className="space-y-2 text-wii-dark/70">
                  <li>✨ React & Next.js</li>
                  <li>✨ TypeScript</li>
                  <li>✨ Tailwind CSS</li>
                  <li>✨ Framer Motion</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-wii-blue mb-3">
                  Design & UX
                </h4>
                <ul className="space-y-2 text-wii-dark/70">
                  <li>🎨 UI/UX Design</li>
                  <li>🎨 Responsive Design</li>
                  <li>🎨 Accessibility (WCAG)</li>
                  <li>🎨 Animation Design</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="border-t-2 border-wii-lightBlue mt-8 pt-8 text-center">
            <p className="text-lg text-wii-dark/70 mb-6">
              Interested in working together?
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  px-8 py-3 rounded-full
                  bg-gradient-to-b from-wii-lightBlue to-blue-200
                  border-2 border-wii-blue
                  text-white font-bold
                  shadow-wii-subtle
                  hover:shadow-wii-medium
                  transition-all
                "
              >
                Get in Touch
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Spacer for bottom bar */}
      <div className="h-24 md:h-28" />

      {/* Bottom Bar */}
      <BottomBar show={true} showBackButton={true} />
    </div>
  )
}
