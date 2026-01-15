'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface MiiHeroProps {
  miiImageSrc: string
  name: string
  role: string
  bio: string
}

/**
 * MiiHero Component
 * A Wii Mii Channel-inspired avatar component with breathing, floating, and interactive animations
 * Features glossy Frutiger Aero styling with soft blue shadows
 */
export function MiiHero({
  miiImageSrc,
  name,
  role,
  bio,
}: MiiHeroProps) {
  const [isSpinning, setIsSpinning] = useState(false)

  // Breathing animation: scale 1.0 to 1.02 slowly
  const breathingVariants = {
    animate: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  }

  // Floating animation: gentle vertical movement
  const floatingVariants = {
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  }

  // Spinning animation: triggered on click
  const spinVariants = {
    spin: {
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: 'easeInOut' as const,
      },
    },
  }

  // Nodding gesture: subtle rotation on hover (not currently used)
  // const nodVariants = {
  //   hover: {
  //     rotateZ: [-2, 2, -2, 0],
  //     transition: {
  //       duration: 0.5,
  //       ease: 'easeInOut' as const,
  //     },
  //   },
  // }

  const handleMiiClick = () => {
    setIsSpinning(true)
    setTimeout(() => setIsSpinning(false), 600)
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {/* Mii Container - Glossy glowing box */}
      <motion.div
        className="
          relative
          mb-6
          p-8
          rounded-3xl
          bg-gradient-to-br
          from-white
          to-wii-gray
          border-4
          border-wii-lightBlue
          shadow-lg
          cursor-pointer
          group
          overflow-hidden
        "
        style={{
          boxShadow: '0 0 30px rgba(59, 125, 217, 0.3), inset -1px -1px 2px rgba(0,0,0,0.1)',
        }}
        onHoverStart={() => {
          // Trigger nod on hover - just relying on CSS animations is simpler
        }}
      >
        {/* Glossy shine effect */}
        <div
          className="
            absolute
            top-0
            left-0
            right-0
            h-1/2
            bg-gradient-to-b
            from-white
            to-transparent
            rounded-t-3xl
            opacity-40
            pointer-events-none
            group-hover:opacity-60
            transition-opacity
          "
        />

        {/* Mii Image with animations */}
        <motion.div
          data-mii-image
          variants={{
            ...breathingVariants,
            spin: spinVariants.spin,
          }}
          animate={isSpinning ? 'spin' : 'animate'}
          className="relative z-10 w-48 h-48 mx-auto mb-4"
          onClick={handleMiiClick}
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="w-full h-full"
          >
            <Image
              src={miiImageSrc}
              alt="Mii Avatar"
              fill
              className="object-contain drop-shadow-lg"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Click hint text */}
        <p className="text-center text-sm text-wii-dark/50 mt-2 font-semibold">
          ✨ Click to spin!
        </p>
      </motion.div>

      {/* Bio Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center max-w-md"
      >
        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-wii-dark mb-2">
          {name}
        </h1>

        {/* Role - with color accent */}
        <p className="text-xl font-semibold text-wii-blue mb-4">{role}</p>

        {/* Bio */}
        <p className="text-lg text-wii-dark/70 leading-relaxed">
          {bio}
        </p>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="mt-8 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 rounded-full bg-wii-lightBlue"
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}
