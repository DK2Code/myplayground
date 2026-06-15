import { motion } from 'framer-motion'
import { Users, Heart, Sparkles } from 'lucide-react'

export default function FutureOfWork() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="p-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-lg"
        >
          <div className="text-center mb-12">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mb-6"
            >
              <Heart size={40} className="text-white" />
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              The Future of Work is Human-Centered
            </h2>

            <p className="text-2xl text-gray-300 leading-relaxed mb-8">
              AI doesn't replace people. Instead, it empowers them to work smarter, more creatively, and more efficiently than ever before.
            </p>
          </div>

          {/* Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Sparkles,
                title: 'Work Faster',
                description: 'Automate repetitive tasks and accelerate your workflow with AI assistance',
              },
              {
                icon: Users,
                title: 'Think Smarter',
                description: 'Make better decisions with AI-powered insights and analysis',
              },
              {
                icon: Heart,
                title: 'Create Better',
                description: 'Focus on what truly matters while AI handles the mundane',
              },
            ].map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 text-center"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4"
                  >
                    <Icon size={32} className="text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">{pillar.title}</h3>
                  <p className="text-gray-400">{pillar.description}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-8 rounded-xl bg-dark-800/50 border border-purple-500/20 text-center"
          >
            <p className="text-xl text-gray-300">
              By leveraging AI, you'll have more time for strategic thinking, innovation, and the human connections that make work meaningful.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-50" />
    </section>
  )
}
