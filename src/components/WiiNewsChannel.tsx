'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Newspaper, X, ArrowRight } from 'lucide-react'

interface NewsItem {
  id: string
  title: string
  date: string
  category: 'Update' | 'Project' | 'Achievement'
  preview: string
  content: string
  image?: string
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Portfolio Launch',
    date: 'January 2026',
    category: 'Update',
    preview: 'Welcome to my Wii-themed portfolio experience!',
    content: 'This portfolio brings together my passion for Nintendo aesthetics and modern web development. Explore my projects, art, and get in touch!',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=250&fit=crop',
  },
  {
    id: '2',
    title: 'New React Project',
    date: 'December 2025',
    category: 'Project',
    preview: 'Built a real-time collaboration tool with WebSockets',
    content: 'Developed a full-stack application featuring real-time updates, collaborative editing, and a beautiful UI inspired by modern design systems.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=250&fit=crop',
  },
  {
    id: '3',
    title: 'Featured on Dev.to',
    date: 'November 2025',
    category: 'Achievement',
    preview: 'Article about Frutiger Aero design reached 10k views',
    content: 'My deep-dive into nostalgic UI design resonated with the developer community. Thanks for all the support!',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop',
  },
]

const categoryColors = {
  Update: 'bg-blue-100 border-blue-400 text-blue-900',
  Project: 'bg-green-100 border-green-400 text-green-900',
  Achievement: 'bg-yellow-100 border-yellow-400 text-yellow-900',
}

/**
 * WiiNewsChannel Component
 * Displays portfolio updates in Wii News Channel style
 * Showcases recent projects, achievements, and updates
 */
export function WiiNewsChannel() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)

  const handleNewsClick = (news: NewsItem) => {
    setSelectedNews(news)
  }

  return (
    <>
      {/* News Channel Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          w-full
          bg-gradient-to-br from-red-100 to-red-50
          border-4 border-red-400
          rounded-3xl
          p-4
          shadow-wii-medium
          hover:shadow-wii-glow
          transition-all
          group
        "
      >
        <div className="flex items-center gap-3">
          <Newspaper className="w-8 h-8 text-red-600" strokeWidth={2} />
          <div className="text-left flex-1">
            <h3 className="text-lg font-bold text-wii-dark">News Channel</h3>
            <p className="text-xs text-wii-dark/70">Latest updates & projects</p>
          </div>
          <ArrowRight className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.button>

      {/* News Channel Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsOpen(false)
                setSelectedNews(null)
              }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* News Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="
                fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-[90%] max-w-3xl max-h-[85vh]
                bg-gradient-to-br from-wii-white to-wii-gray
                border-4 border-wii-lightBlue
                rounded-3xl
                shadow-2xl
                z-50
                overflow-hidden
                flex flex-col
              "
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b-2 border-wii-lightBlue/30">
                <div className="flex items-center gap-3">
                  <Newspaper className="w-8 h-8 text-wii-blue" strokeWidth={2} />
                  <h2 className="text-2xl font-bold text-wii-dark">News Channel</h2>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false)
                    setSelectedNews(null)
                  }}
                  className="
                    p-2 rounded-full
                    bg-wii-gray
                    hover:bg-red-100
                    border-2 border-wii-lightBlue
                    hover:border-red-400
                    transition-all
                  "
                >
                  <X className="w-5 h-5 text-wii-dark" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <AnimatePresence mode="wait">
                  {selectedNews ? (
                    // Detail View
                    <motion.div
                      key="detail"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <button
                        onClick={() => setSelectedNews(null)}
                        className="text-wii-blue hover:text-wii-dark font-semibold text-sm mb-2"
                      >
                        ← Back to all news
                      </button>
                      
                      {selectedNews.image && (
                        <div className="w-full h-48 rounded-xl overflow-hidden border-2 border-wii-lightBlue/50">
                          <img
                            src={selectedNews.image}
                            alt={selectedNews.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${categoryColors[selectedNews.category]}`}>
                          {selectedNews.category}
                        </span>
                        <span className="text-sm text-wii-dark/60">{selectedNews.date}</span>
                      </div>

                      <h3 className="text-3xl font-bold text-wii-dark">{selectedNews.title}</h3>
                      <p className="text-wii-dark/80 leading-relaxed">{selectedNews.content}</p>
                    </motion.div>
                  ) : (
                    // List View
                    <motion.div
                      key="list"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      {newsItems.map((news, index) => (
                        <motion.button
                          key={news.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => handleNewsClick(news)}
                          className="
                            text-left
                            bg-white
                            border-2 border-wii-lightBlue/50
                            rounded-xl
                            p-4
                            hover:border-wii-blue
                            hover:shadow-wii-medium
                            transition-all
                            group
                          "
                        >
                          {news.image && (
                            <div className="w-full h-32 rounded-lg overflow-hidden mb-3 border-2 border-wii-lightBlue/30">
                              <img
                                src={news.image}
                                alt={news.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              />
                            </div>
                          )}
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-bold border ${categoryColors[news.category]}`}>
                              {news.category}
                            </span>
                          </div>
                          <h4 className="font-bold text-wii-dark mb-1">{news.title}</h4>
                          <p className="text-xs text-wii-dark/60 mb-2">{news.date}</p>
                          <p className="text-sm text-wii-dark/70 line-clamp-2">{news.preview}</p>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
