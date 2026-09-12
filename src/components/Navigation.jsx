import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, MessageCircle, Gamepad2 } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel glow-border' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold font-mono tracking-wider"
          whileHover={{ textShadow: '0 0 20px rgba(0, 240, 255, 0.6)' }}
        >
          <span className="text-neon-cyan">DEV</span>
          <span className="text-gray-500"> // </span>
          <span>PORTFOLIO</span>
        </motion.div>

        {/* Commission Status & Social Links */}
        <div className="flex items-center gap-6">
          {/* Live Status */}
          <motion.div
            className="flex items-center gap-2 px-4 py-2 glass-panel rounded-full"
            whileHover={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)' }}
          >
            <div className="w-2 h-2 bg-neon-emerald rounded-full animate-pulse-glow"></div>
            <span className="text-sm font-semibold text-neon-emerald">Commissions Open</span>
          </motion.div>

          {/* Social Links */}
          <div className="flex gap-4">
            <SocialLink icon={Gamepad2} label="Roblox" href="https://www.roblox.com" />
            <SocialLink icon={Github} label="GitHub" href="https://github.com" />
            <SocialLink icon={MessageCircle} label="Discord" href="#" />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

const SocialLink = ({ icon: Icon, label, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-lg glass-panel text-neon-cyan hover:text-white transition-colors"
    whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)' }}
    whileTap={{ scale: 0.95 }}
    title={label}
  >
    <Icon size={20} />
  </motion.a>
)

export default Navigation