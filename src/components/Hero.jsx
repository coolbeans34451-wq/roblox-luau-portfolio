import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero = ({ onViewCodeClick }) => {
  const techStack = [
    'Luau',
    'OOP',
    'Rojo',
    'Knit Framework',
    'ProfileService',
    'Custom Physics',
    'UI Math',
    'Raycast Hitboxing',
    'Network Optimization',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      ></motion.div>

      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      ></motion.div>

      <motion.div
        className="max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          variants={itemVariants}
        >
          <span className="block mb-4">Engineering Immersive</span>
          <motion.span
            className="block bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-emerald bg-clip-text text-transparent"
            animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Roblox Gameplay & Systems
          </motion.span>
          <span className="block mt-4 text-3xl md:text-5xl text-neon-cyan">Architecture</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Expert in server-authoritative design, physics simulation, UI mathematics, and network-optimized gameplay systems. Specialized in combat mechanics, FPS frameworks, and interactive minigames.
        </motion.p>

        {/* Tech Stack Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={containerVariants}
        >
          {techStack.map((tech, idx) => (
            <motion.div
              key={tech}
              className="px-4 py-2 glass-panel rounded-full text-sm font-semibold text-neon-cyan border border-neon-cyan/30 hover:border-neon-cyan/100 transition-all highlight-glow"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)' }}
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center"
          variants={containerVariants}
        >
          <motion.a
            href="#showcase"
            className="px-8 py-4 bg-neon-cyan text-slate-950 font-bold rounded-lg hover:shadow-glow-cyan transition-all"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 240, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            View Work Showcase
          </motion.a>

          <motion.button
            onClick={onViewCodeClick}
            className="px-8 py-4 border-2 border-neon-purple text-neon-purple font-bold rounded-lg hover:shadow-glow-purple transition-all glass-panel"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            View Code Architecture
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-neon-cyan" size={32} />
      </motion.div>
    </section>
  )
}

export default Hero