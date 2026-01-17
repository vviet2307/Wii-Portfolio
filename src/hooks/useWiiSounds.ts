'use client'

import { useEffect, useState } from 'react'

/**
 * useWiiSounds Hook
 * Provides Wii Menu sound effects
 * Gracefully degrades if sounds aren't available
 */
export function useWiiSounds() {
  const [sounds, setSounds] = useState<{
    click: HTMLAudioElement | null
    hover: HTMLAudioElement | null
    whoosh: HTMLAudioElement | null
  }>({
    click: null,
    hover: null,
    whoosh: null,
  })

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return

    // Create audio elements
    const click = new Audio('/sounds/wii-click.mp3')
    const hover = new Audio('/sounds/wii-hover.mp3')
    const whoosh = new Audio('/sounds/wii-whoosh.mp3')

    // Set volumes
    click.volume = 0.4
    hover.volume = 0.2
    whoosh.volume = 0.3

    setSounds({ click, hover, whoosh })
  }, [])

  const playClick = () => {
    if (sounds.click) {
      sounds.click.currentTime = 0
      sounds.click.play().catch(() => {
        // Silently fail if user hasn't interacted yet
      })
    }
  }

  const playHover = () => {
    if (sounds.hover) {
      sounds.hover.currentTime = 0
      sounds.hover.play().catch(() => {
        // Silently fail
      })
    }
  }

  const playWhoosh = () => {
    if (sounds.whoosh) {
      sounds.whoosh.currentTime = 0
      sounds.whoosh.play().catch(() => {
        // Silently fail
      })
    }
  }

  return {
    playClick,
    playHover,
    playWhoosh,
  }
}
