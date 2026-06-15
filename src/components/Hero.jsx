import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const FloatingOrb = ({ delay, size, position }) => (
  <motion.div
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration: 6 + delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className={`absolute rounded-full blur-3xl ${position}`}
    style={{
      width: size,
      height: size,
    }}
  />
)

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated background orbs */}
      <FloatingOrb delay={0} size="300px" position="top-20 left-10 bg-blue-500/20" />
      <FloatingOrb delay={2} size="400px" position="bottom-20 right-10 bg-purple-500/20" />
      <FloatingOrb delay={4} size="250px" position="top-1/2 right-1/4 bg-cyan-500/20" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
            <Sparkles size={16} />
            Welcome to the Future of Work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Transform Your Daily Work with AI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Save time, automate repetitive tasks, boost productivity, and make smarter decisions with AI assistance integrated into your workflow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-bold text-lg flex items-center gap-2 hover:shadow-xl transition-all"
          >
            Explore Use Cases <ArrowRight size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-purple-300 rounded-lg font-bold text-lg border border-purple-500/30 flex items-center gap-2 hover:shadow-xl transition-all backdrop-blur-sm"
          >
            Start Working Smarter <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-2">
          <motion.div className="w-1 h-2 bg-blue-400 rounded-full" />
        </div>
      </motion.div>
    </div>
  )
}
