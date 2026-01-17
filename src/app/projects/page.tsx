'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { devProjects } from '@/lib/data'
import { BottomBar } from '@/components/BottomBar'

/**
 * Projects Page
 * Displays all development projects in a grid layout
 */
export default function ProjectsPage() {
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
            Dev Projects
          </h1>
          <p className="text-lg text-wii-dark/70">
            A collection of my recent development projects and experiments
          </p>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pb-24 md:pb-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="
                group
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
              {/* Image */}
              <div className="relative h-40 overflow-hidden bg-wii-gray">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-2 right-2 px-3 py-1 bg-wii-blue text-white text-xs font-bold rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Title & Date */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-wii-dark mb-1">
                    {project.title}
                  </h3>
                  {project.date && (
                    <p className="text-xs text-wii-dark/50">{project.date}</p>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-wii-dark/70 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.slice(0, 3).map((tech: string) => (
                    <span
                      key={tech}
                      className="
                        px-2 py-1
                        text-xs font-semibold
                        bg-wii-lightBlue/30
                        text-wii-blue
                        rounded-full
                      "
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="text-xs text-wii-dark/60 px-2 py-1">
                      +{project.stack.length - 3} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      flex items-center justify-center gap-2
                      px-3 py-2
                      rounded-lg
                      bg-gradient-to-b from-wii-white to-wii-gray
                      border-2 border-wii-lightBlue
                      text-wii-dark font-semibold text-sm
                      hover:shadow-wii-medium
                      transition-all
                    "
                  >
                    <Github size={16} />
                    Code
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex-1
                        flex items-center justify-center gap-2
                        px-3 py-2
                        rounded-lg
                        bg-gradient-to-b from-wii-lightBlue to-blue-200
                        border-2 border-wii-blue
                        text-white font-semibold text-sm
                        hover:shadow-wii-medium
                        transition-all
                      "
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Spacer for bottom bar */}
      <div className="h-24 md:h-28" />

      {/* Bottom Bar */}
      <BottomBar show={true} showBackButton={true} />
    </div>
  )
}
