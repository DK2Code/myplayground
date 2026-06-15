import { motion } from 'framer-motion'
import { ArrowRight, Rocket } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute top-1/3 right-0 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm mb-8"
          >
            <Rocket size={16} />
            Ready to Transform Your Work?
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block mb-4">Work Smarter.</span>
            <span className="block mb-4">Create Faster.</span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Think Bigger with AI.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Join thousands of professionals who are already experiencing the power of AI in their daily work. Transform your productivity today.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)',
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white rounded-lg font-bold text-xl flex items-center gap-3 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
              <span className="relative flex items-center gap-3">
                Start Your AI Journey
                <ArrowRight size={24} />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-5 bg-purple-500/20 text-purple-300 rounded-lg font-bold text-lg border border-purple-500/50 hover:border-purple-500/80 transition-all backdrop-blur-sm"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-gray-700/50 flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              Free 30-day trial
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              Enterprise-grade security
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-20 pt-12 border-t border-gray-700/30 text-center text-gray-400"
      >
        <p className="mb-4">
          Transforming daily work with AI intelligence • © 2024 AI Transform
        </p>
        <div className="flex gap-6 justify-center text-sm">
          <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition">Terms of Service</a>
          <a href="#" className="hover:text-gray-300 transition">Contact Us</a>
        </div>
      </motion.footer>
    </section>
  )
}
