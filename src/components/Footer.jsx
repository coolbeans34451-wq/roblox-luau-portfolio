import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer className="border-t border-neon-cyan/10 py-12 px-6 bg-slate-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center space-y-4"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Footer Text */}
          <div className="font-mono text-sm text-gray-400 space-y-2">
            <p>
              <span className="text-neon-cyan">{"//>"}</span> Crafted with precision and passion for Roblox development
            </p>
            <p>
              Built with <span className="text-neon-purple">React</span>, <span className="text-neon-cyan">Tailwind CSS</span>, and{' '}
              <span className="text-neon-emerald">Framer Motion</span>
            </p>
          </div>

          {/* Copyright */}
          <motion.p
            className="text-xs text-gray-500 pt-4 border-t border-neon-cyan/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            © {currentYear} All rights reserved. | Roblox is a trademark of Roblox Corporation.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer