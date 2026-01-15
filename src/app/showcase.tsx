'use client'

import React from 'react'
import { WiiButton } from '@/components'
import { motion } from 'framer-motion'

/**
 * WiiButton Component Showcase
 * 
 * Demonstrates all variations and use cases of the WiiButton component.
 * This page serves as a living documentation of the component's capabilities.
 */
export default function WiiButtonShowcase() {
  const handleExample = (example: string) => {
    console.log(`Example triggered: ${example}`)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-wii-white via-wii-gray to-wii-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-wii-dark mb-4">
            WiiButton Showcase
          </h1>
          <p className="text-xl text-wii-dark/70">
            Explore all variations of the Wii-inspired button component
          </p>
        </motion.div>

        {/* Basic Buttons Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="wii-card mb-12"
        >
          <h2 className="text-3xl font-bold text-wii-dark mb-8">
            Basic Variations
          </h2>

          <div className="space-y-8">
            {/* Default Button */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-wii-dark">
                Default Button
              </h3>
              <div className="flex flex-wrap gap-4">
                <WiiButton onClick={() => handleExample('default')}>
                  Default Button
                </WiiButton>
              </div>
            </div>

            {/* With Emoji */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-wii-dark">
                With Emoji/Icons
              </h3>
              <div className="flex flex-wrap gap-4">
                <WiiButton onClick={() => handleExample('play')}>
                  🎮 Play
                </WiiButton>
                <WiiButton onClick={() => handleExample('settings')}>
                  ⚙️ Settings
                </WiiButton>
                <WiiButton onClick={() => handleExample('favorite')}>
                  ❤️ Favorite
                </WiiButton>
                <WiiButton onClick={() => handleExample('share')}>
                  📤 Share
                </WiiButton>
              </div>
            </div>

            {/* Size Variations */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-wii-dark">
                Size Variations
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <WiiButton
                  onClick={() => handleExample('small')}
                  className="text-sm px-4 py-2"
                >
                  Small
                </WiiButton>
                <WiiButton onClick={() => handleExample('normal')}>
                  Normal
                </WiiButton>
                <WiiButton
                  onClick={() => handleExample('large')}
                  className="text-xl px-10 py-5"
                >
                  Large
                </WiiButton>
              </div>
            </div>

            {/* Wide Button Variant */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-wii-dark">
                Wide Button (Bottom Navigation Style)
              </h3>
              <div className="flex flex-col gap-4 max-w-md">
                <WiiButton
                  wide={true}
                  onClick={() => handleExample('continue')}
                >
                  ➤ Continue
                </WiiButton>
                <WiiButton
                  wide={true}
                  onClick={() => handleExample('next')}
                >
                  ► Next Chapter
                </WiiButton>
                <WiiButton wide={true} onClick={() => handleExample('back')}>
                  ◄ Back to Menu
                </WiiButton>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Interactive States Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="wii-card mb-12"
        >
          <h2 className="text-3xl font-bold text-wii-dark mb-8">
            Interactive States
          </h2>

          <div className="space-y-8">
            {/* Hover Demo */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-wii-dark">
                Hover Effects (Try hovering!)
              </h3>
              <p className="text-wii-dark/70 mb-4">
                Notice the scale animation and glowing border pulse
              </p>
              <div className="flex flex-wrap gap-4">
                <WiiButton
                  onClick={() => handleExample('hover1')}
                  hoverSound="/sounds/wii-hover.mp3"
                >
                  With Hover Sound
                </WiiButton>
                <WiiButton onClick={() => handleExample('hover2')}>
                  Without Sound
                </WiiButton>
              </div>
            </div>

            {/* Click Feedback */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-wii-dark">
                Click Feedback
              </h3>
              <p className="text-wii-dark/70 mb-4">
                Check browser console for click events
              </p>
              <div className="flex flex-wrap gap-4">
                <WiiButton
                  onClick={() => alert('Button clicked!')}
                  clickSound="/sounds/wii-click.mp3"
                >
                  Click Me! (With Sound)
                </WiiButton>
              </div>
            </div>

            {/* Disabled State */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-wii-dark">
                Disabled State
              </h3>
              <p className="text-wii-dark/70 mb-4">
                Button cannot be clicked and appears faded
              </p>
              <div className="flex flex-wrap gap-4">
                <WiiButton disabled={true}>
                  Coming Soon
                </WiiButton>
                <WiiButton disabled={true}>⚠️ Unavailable</WiiButton>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Usage Patterns Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="wii-card mb-12"
        >
          <h2 className="text-3xl font-bold text-wii-dark mb-8">
            Common Usage Patterns
          </h2>

          <div className="space-y-8">
            {/* Navigation */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-wii-dark">
                Navigation Menu
              </h3>
              <div className="flex flex-wrap gap-3">
                <WiiButton onClick={() => handleExample('home')}>
                  🏠 Home
                </WiiButton>
                <WiiButton onClick={() => handleExample('portfolio')}>
                  🎨 Portfolio
                </WiiButton>
                <WiiButton onClick={() => handleExample('about')}>
                  👤 About
                </WiiButton>
                <WiiButton onClick={() => handleExample('contact')}>
                  💬 Contact
                </WiiButton>
              </div>
            </div>

            {/* Form Actions */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-wii-dark">
                Form Actions
              </h3>
              <div className="flex flex-wrap gap-4">
                <WiiButton
                  onClick={() => handleExample('submit')}
                  className="bg-gradient-to-b from-green-200 to-green-100"
                >
                  ✓ Submit
                </WiiButton>
                <WiiButton
                  onClick={() => handleExample('cancel')}
                  className="bg-gradient-to-b from-red-200 to-red-100"
                >
                  ✕ Cancel
                </WiiButton>
              </div>
            </div>

            {/* Game Controls */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-wii-dark">
                Game-like Controls
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 flex-wrap">
                  <WiiButton
                    wide={true}
                    onClick={() => handleExample('start')}
                  >
                    ▶ Start Game
                  </WiiButton>
                </div>
                <div className="flex gap-4 flex-wrap">
                  <WiiButton onClick={() => handleExample('continue')}>
                    Continue
                  </WiiButton>
                  <WiiButton onClick={() => handleExample('settings')}>
                    Settings
                  </WiiButton>
                  <WiiButton onClick={() => handleExample('quit')}>
                    Quit
                  </WiiButton>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Code Examples Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="wii-card mb-12"
        >
          <h2 className="text-3xl font-bold text-wii-dark mb-8">
            Code Examples
          </h2>

          <div className="space-y-6 text-sm">
            {/* Basic Usage */}
            <div>
              <h3 className="font-semibold text-wii-dark mb-2">Basic Usage</h3>
              <pre className="bg-wii-dark text-white p-4 rounded-lg overflow-x-auto">
{`import { WiiButton } from '@/components'

export function MyComponent() {
  return (
    <WiiButton onClick={() => console.log('clicked')}>
      Click Me!
    </WiiButton>
  )
}`}
              </pre>
            </div>

            {/* With Audio */}
            <div>
              <h3 className="font-semibold text-wii-dark mb-2">
                With Audio Effects
              </h3>
              <pre className="bg-wii-dark text-white p-4 rounded-lg overflow-x-auto">
{`<WiiButton
  onClick={() => navigate('/menu')}
  hoverSound="/sounds/wii-hover.mp3"
  clickSound="/sounds/wii-click.mp3"
>
  🎮 Play
</WiiButton>`}
              </pre>
            </div>

            {/* Wide Button */}
            <div>
              <h3 className="font-semibold text-wii-dark mb-2">Wide Button</h3>
              <pre className="bg-wii-dark text-white p-4 rounded-lg overflow-x-auto">
{`<WiiButton wide={true} onClick={handleContinue}>
  ➤ Continue
</WiiButton>`}
              </pre>
            </div>

            {/* Custom Styling */}
            <div>
              <h3 className="font-semibold text-wii-dark mb-2">
                Custom Styling
              </h3>
              <pre className="bg-wii-dark text-white p-4 rounded-lg overflow-x-auto">
{`<WiiButton
  onClick={handleClick}
  className="text-xl font-bold"
>
  Custom Style
</WiiButton>`}
              </pre>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="wii-card mb-12"
        >
          <h2 className="text-3xl font-bold text-wii-dark mb-8">Features</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '🎨',
                title: 'Wii Aesthetic',
                description:
                  'Glossy gradients and soft shadows inspired by Nintendo Wii UI',
              },
              {
                icon: '⚙️',
                title: 'Smooth Animations',
                description:
                  'Spring-based physics with Framer Motion for natural motion',
              },
              {
                icon: '🔊',
                title: 'Audio Integration',
                description:
                  'Optional hover and click sounds using use-sound hook',
              },
              {
                icon: '♿',
                title: 'Accessibility',
                description:
                  'Full keyboard navigation and screen reader support',
              },
              {
                icon: '📱',
                title: 'Responsive',
                description: 'Works perfectly on mobile, tablet, and desktop',
              },
              {
                icon: '⚡',
                title: 'Performance',
                description:
                  'GPU-accelerated animations with minimal repaints',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="bg-white rounded-2xl border-2 border-wii-lightBlue p-4"
              >
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h3 className="font-bold text-wii-dark mb-1">
                  {feature.title}
                </h3>
                <p className="text-wii-dark/70 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center py-12 text-wii-dark/70"
        >
          <p>
            See more examples at{' '}
            <a
              href="/api"
              className="text-wii-blue font-semibold hover:underline"
            >
              Component Documentation
            </a>
          </p>
        </motion.div>
      </div>
    </main>
  )
}
