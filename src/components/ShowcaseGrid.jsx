import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import VideoModal from './VideoModal'

const showcaseData = [
  {
    id: 1,
    title: 'Melee Combat & Combo System',
    videoUrl: 'https://www.youtube.com/embed/DH-vLFZFmb8',
    originalUrl: 'https://www.youtube.com/shorts/DH-vLFZFmb8',
    badges: ['Raycast Hitboxing', 'OOP', 'Animation Tracks', 'Physics Knockback'],
    details: [
      'Smooth hit detection with raycast-based damage zones',
      'Directional knockback math using vector calculations',
      'Combo reset logic with debounce mechanics',
      'Server-side state validation for anti-cheat',
    ],
  },
  {
    id: 2,
    title: 'Custom FPS Framework & Camera Engine',
    videoUrl: 'https://www.youtube.com/embed/s4APgfEzl5s',
    originalUrl: 'https://www.youtube.com/watch?v=s4APgfEzl5s',
    badges: ['Viewmodel Math', 'Procedural Recoil', 'Spring Physics', 'Camera Manipulation'],
    details: [
      'Viewmodel positioning and offset calculations',
      'Procedural sway using sine/cosine wave generation',
      'Camera recoil springs with smooth dampening',
      'Ammo and reload logic with visual feedback',
    ],
  },
  {
    id: 3,
    title: 'Interactive Fishing Minigame Engine',
    videoUrl: 'https://www.youtube.com/embed/gTdXWZpJXHE',
    originalUrl: 'https://www.youtube.com/watch?v=gTdXWZpJXHE',
    badges: ['TweenService', 'UI Math', 'UserGameSettings', 'State Machine'],
    details: [
      'Dynamic cursor-tracking UI mechanics',
      'Real-time progress calculations and tension physics',
      'Fluid GUI animations with smooth interpolation',
      'State machine for fishable items and catch logic',
    ],
  },
  {
    id: 4,
    title: 'Interactive Bowling & Physics System',
    videoUrl: 'https://www.youtube.com/embed/OiBMGmxAtiU',
    originalUrl: 'https://www.youtube.com/watch?v=OiBMGmxAtiU',
    badges: ['Custom Physics', 'ProximityPrompts', 'Scoreboard Logic', 'Collision Detection'],
    details: [
      'Ball velocity and spin trajectory calculations',
      'Pin reset collision logic with physics simulation',
      'Multi-player score tracking and leaderboard',
      'Smooth interactive proximity prompts',
    ],
  },
  {
    id: 5,
    title: 'Branching NPC Dialogue & Interaction Bot',
    videoUrl: 'https://www.youtube.com/embed/fTwRG6QbdxQ',
    originalUrl: 'https://www.youtube.com/watch?v=fTwRG6QbdxQ',
    badges: ['Branching Trees', 'Custom Chat GUI', 'Proximity Interactions', 'State Engines'],
    details: [
      'Dynamic dialogue state trees with branching paths',
      'Proximity trigger logic for NPC interactions',
      'Animated typewriter text effects',
      'Customizable response paths and dialogue chains',
    ],
  },
]

const ShowcaseGrid = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="showcase" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-neon-cyan">Featured</span> Mechanics
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto">
          Interactive showcases of core systems, combining technical precision with engaging gameplay experiences.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {showcaseData.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="group"
          >
            <ShowcaseCard
              {...item}
              onVideoClick={() => setSelectedVideo(item)}
            />
          </motion.div>
        ))}
      </motion.div>

      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </section>
  )
}

const ShowcaseCard = ({ title, videoUrl, originalUrl, badges, details, onVideoClick }) => {
  return (
    <motion.div
      className="glass-panel rounded-xl overflow-hidden glow-border highlight-glow"
      whileHover={{ y: -5 }}
    >
      {/* Video Thumbnail */}
      <div
        className="relative bg-slate-900 aspect-video cursor-pointer group/video overflow-hidden"
        onClick={onVideoClick}
      >
        <img
          src={`https://img.youtube.com/vi/${getYouTubeId(originalUrl)}/maxresdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover group-hover/video:scale-105 transition-transform duration-300"
        />
        <motion.div
          className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover/video:bg-black/50 transition-colors"
          whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <motion.div
            className="w-16 h-16 rounded-full bg-neon-cyan flex items-center justify-center"
            whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(0, 240, 255, 0.6)' }}
          >
            <Play size={32} className="text-slate-950 fill-slate-950" />
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4 text-white group-hover:text-neon-cyan transition-colors">
          {title}
        </h3>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {badges.map((badge) => (
            <motion.span
              key={badge}
              className="px-3 py-1 text-xs font-semibold text-neon-cyan border border-neon-cyan/50 rounded-full bg-neon-cyan/5"
              whileHover={{ scale: 1.05, borderColor: 'rgba(0, 240, 255, 1)' }}
            >
              [{badge}]
            </motion.span>
          ))}
        </div>

        {/* Details */}
        <ul className="space-y-2">
          {details.map((detail, idx) => (
            <motion.li
              key={idx}
              className="text-sm text-gray-400 flex gap-3 leading-relaxed"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-neon-cyan flex-shrink-0">▸</span>
              <span>{detail}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

function getYouTubeId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : ''
}

export default ShowcaseGrid