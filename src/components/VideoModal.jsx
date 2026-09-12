import React from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

const VideoModal = ({ video, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh]"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <motion.button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-neon-cyan hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <X size={32} />
        </motion.button>

        {/* Video Container */}
        <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={video.videoUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Title and Info */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-3">{video.title}</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {video.badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 text-xs font-semibold text-neon-cyan border border-neon-cyan/50 rounded-full bg-neon-cyan/5"
              >
                [{badge}]
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default VideoModal