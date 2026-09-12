import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, Mail, ExternalLink } from 'lucide-react'

const ContactCard = () => {
  const [copiedDiscord, setCopiedDiscord] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const discordHandle = 'YourHandle#1234'
  const email = 'dev@example.com'
  const devForumUrl = 'https://devforum.roblox.com/'

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(discordHandle)
    setCopiedDiscord(true)
    setTimeout(() => setCopiedDiscord(false), 2000)
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        className="glass-panel rounded-2xl p-8 md:p-12 glow-border highlight-glow"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-2xl mx-auto text-center">
          {/* Title */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Let's <span className="text-neon-cyan">Collaborate</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Open to commissions, partnerships, and exciting Roblox development opportunities. Reach out through any of these channels.
          </motion.p>

          {/* Contact Methods */}
          <motion.div
            className="space-y-4 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Discord */}
            <motion.div
              className="flex items-center justify-between p-4 glass-panel rounded-lg border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all group"
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)' }}
            >
              <div className="text-left">
                <p className="text-xs uppercase text-gray-500 font-semibold">Discord</p>
                <p className="text-lg font-mono text-neon-cyan group-hover:text-white transition-colors">
                  {discordHandle}
                </p>
              </div>
              <motion.button
                onClick={handleCopyDiscord}
                className="p-2 rounded-lg bg-neon-cyan/10 text-neon-cyan hover:bg-neon-cyan/20 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {copiedDiscord ? <Check size={20} /> : <Copy size={20} />}
              </motion.button>
            </motion.div>

            {/* Email */}
            <motion.div
              className="flex items-center justify-between p-4 glass-panel rounded-lg border border-neon-purple/20 hover:border-neon-purple/50 transition-all group"
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)' }}
            >
              <div className="text-left">
                <p className="text-xs uppercase text-gray-500 font-semibold">Email</p>
                <p className="text-lg font-mono text-neon-purple group-hover:text-white transition-colors">
                  {email}
                </p>
              </div>
              <motion.button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-neon-purple/10 text-neon-purple hover:bg-neon-purple/20 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {copiedEmail ? <Check size={20} /> : <Copy size={20} />}
              </motion.button>
            </motion.div>

            {/* DevForum */}
            <motion.a
              href={devForumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 glass-panel rounded-lg border border-neon-emerald/20 hover:border-neon-emerald/50 transition-all group"
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)' }}
            >
              <div className="text-left">
                <p className="text-xs uppercase text-gray-500 font-semibold">DevForum</p>
                <p className="text-lg font-mono text-neon-emerald group-hover:text-white transition-colors">
                  Roblox Developer Community
                </p>
              </div>
              <motion.div
                className="p-2 rounded-lg bg-neon-emerald/10 text-neon-emerald group-hover:bg-neon-emerald/20 transition-all"
                whileHover={{ scale: 1.1 }}
              >
                <ExternalLink size={20} />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Quick Response Info */}
          <motion.div
            className="text-sm text-gray-400 border-t border-neon-cyan/20 pt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="flex items-center justify-center gap-2 mb-2">
              <span className="w-2 h-2 bg-neon-emerald rounded-full animate-pulse"></span>
              Typically respond within 24 hours
            </p>
            <p>Available for full-time contracts, one-off commissions, and technical consultation</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactCard