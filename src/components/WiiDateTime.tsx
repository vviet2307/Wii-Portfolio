'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock } from 'lucide-react'

/**
 * WiiDateTime Component
 * Displays current date and time in Wii Menu style
 * Updates every second
 */
export function WiiDateTime() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        flex flex-col items-end gap-1
        bg-gradient-to-br from-wii-white/90 to-wii-gray/90
        backdrop-blur-sm
        border-2 border-wii-lightBlue/50
        rounded-xl
        px-3 py-2
        shadow-wii-subtle
      "
    >
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-wii-blue" strokeWidth={2} />
        <span className="text-lg font-bold text-wii-dark tabular-nums">
          {formatTime(currentTime)}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Calendar className="w-3.5 h-3.5 text-wii-dark/60" strokeWidth={2} />
        <span className="text-xs font-semibold text-wii-dark/70">
          {formatDate(currentTime)}
        </span>
      </div>
    </motion.div>
  )
}
