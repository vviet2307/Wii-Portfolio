'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { profile, socials } from '@/lib/data'
import { BottomBar } from '@/components/BottomBar'

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

/**
 * Contact Page
 * Contact form and social links
 */
export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: '',
  })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState({ status: 'loading', message: '' })

    // Simulate form submission
    // In production, connect to your email service (SendGrid, Resend, etc.)
    setTimeout(() => {
      setFormState({
        status: 'success',
        message: 'Thanks for reaching out! I will get back to you soon.',
      })
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Reset after 3 seconds
      setTimeout(() => {
        setFormState({ status: 'idle', message: '' })
      }, 3000)
    }, 1500)
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
            Get In Touch
          </h1>
          <p className="text-lg text-wii-dark/70">
            Have a question or want to collaborate? I'd love to hear from you!
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 pb-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <div className="rounded-2xl border-4 border-wii-lightBlue bg-gradient-to-br from-white to-wii-gray p-6 shadow-wii-subtle">
              <h3 className="text-xl font-bold text-wii-dark mb-6">
                Contact Info
              </h3>

              {/* Email */}
              <div className="mb-6">
                <p className="text-sm text-wii-dark/60 font-semibold mb-2">
                  EMAIL
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="
                    text-wii-blue font-semibold
                    hover:underline
                    break-all
                  "
                >
                  {profile.email}
                </a>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-wii-dark/60 font-semibold mb-3">
                  SOCIAL LINKS
                </p>
                <div className="space-y-2">
                  {socials.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        block
                        px-3 py-2 rounded-lg
                        bg-gradient-to-b from-wii-white to-wii-gray
                        border-2 border-wii-lightBlue
                        text-wii-blue font-semibold text-sm
                        hover:shadow-wii-medium
                        transition-all
                        text-center
                      "
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="rounded-2xl border-4 border-wii-lightBlue bg-gradient-to-br from-white to-wii-gray p-8 shadow-wii-subtle">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-bold text-wii-dark mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="
                      w-full px-4 py-3 rounded-lg
                      border-2 border-wii-lightBlue
                      bg-white
                      text-wii-dark
                      placeholder-wii-dark/40
                      focus:outline-none focus:ring-2 focus:ring-wii-blue
                      transition-all
                    "
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-bold text-wii-dark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="
                      w-full px-4 py-3 rounded-lg
                      border-2 border-wii-lightBlue
                      bg-white
                      text-wii-dark
                      placeholder-wii-dark/40
                      focus:outline-none focus:ring-2 focus:ring-wii-blue
                      transition-all
                    "
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-bold text-wii-dark mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="
                      w-full px-4 py-3 rounded-lg
                      border-2 border-wii-lightBlue
                      bg-white
                      text-wii-dark
                      placeholder-wii-dark/40
                      focus:outline-none focus:ring-2 focus:ring-wii-blue
                      transition-all
                    "
                    placeholder="What is this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-wii-dark mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="
                      w-full px-4 py-3 rounded-lg
                      border-2 border-wii-lightBlue
                      bg-white
                      text-wii-dark
                      placeholder-wii-dark/40
                      focus:outline-none focus:ring-2 focus:ring-wii-blue
                      transition-all
                      resize-none
                    "
                    placeholder="Your message here..."
                  />
                </div>

                {/* Status Messages */}
                {formState.status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="
                      flex items-center gap-3
                      px-4 py-3 rounded-lg
                      bg-green-100 border-2 border-green-400
                      text-green-700 font-semibold
                    "
                  >
                    <CheckCircle size={20} />
                    {formState.message}
                  </motion.div>
                )}

                {formState.status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="
                      flex items-center gap-3
                      px-4 py-3 rounded-lg
                      bg-red-100 border-2 border-red-400
                      text-red-700 font-semibold
                    "
                  >
                    <AlertCircle size={20} />
                    {formState.message}
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formState.status === 'loading'}
                  whileHover={{ scale: formState.status !== 'loading' ? 1.05 : 1 }}
                  whileTap={{ scale: formState.status !== 'loading' ? 0.95 : 1 }}
                  className="
                    w-full
                    flex items-center justify-center gap-2
                    px-6 py-3
                    rounded-lg
                    bg-gradient-to-b from-wii-lightBlue to-blue-200
                    border-2 border-wii-blue
                    text-white font-bold
                    shadow-wii-subtle
                    hover:shadow-wii-medium
                    transition-all
                    disabled:opacity-50 disabled:cursor-not-allowed
                  "
                >
                  {formState.status === 'loading' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <Mail size={20} />
                      </motion.div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
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
