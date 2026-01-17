'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface ThemeContextType {
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
  soundEnabled: boolean
  setSoundEnabled: (enabled: boolean) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Load saved preferences from localStorage
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('wii-theme') as 'light' | 'dark' | null
    const savedSound = localStorage.getItem('wii-sound')
    
    if (savedTheme) setTheme(savedTheme)
    if (savedSound !== null) setSoundEnabled(savedSound === 'true')
  }, [])

  // Save preferences and apply theme
  useEffect(() => {
    if (!mounted) return

    localStorage.setItem('wii-theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
    
    // Apply theme to body
    if (theme === 'dark') {
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }
  }, [theme, mounted])

  useEffect(() => {
    if (!mounted) return
    localStorage.setItem('wii-sound', soundEnabled.toString())
  }, [soundEnabled, mounted])

  if (!mounted) {
    return null
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, soundEnabled, setSoundEnabled }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
