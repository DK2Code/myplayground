import { motion } from 'framer-motion'
import { TrendingUp, Clock, MessageSquare, Zap, Lightbulb, Target } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    { icon: Clock, title: 'Save Hours Every Week', color: 'from-blue-400 to-cyan-400' },
    { icon: Zap, title: 'Reduce Repetitive Tasks', color: 'from-purple-400 to-pink-400' },
    { icon: MessageSquare, title: 'Improve Communication', color: 'from-cyan-400 to-blue-400' },
    { icon: TrendingUp, title: 'Make Faster Decisions', color: 'from-pink-400 to-purple-400' },
    { icon: Lightbulb, title: 'Boost Creativity', color: 'from-blue-400 to-purple-400' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Productivity Benefits
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience tangible improvements in how you work
          </p>
        </motion.div>

        {/* Benefits grid with animated cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                {/* Card glow effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300`} />

                {/* Card */}
                <div className="relative p-8 rounded-xl bg-dark-800/50 border border-gray-600/30 hover:border-gray-400/50 backdrop-blur-sm transition-all">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
                      className={`mb-4 p-4 rounded-lg bg-gradient-to-r ${benefit.color} bg-opacity-20`}
                    >
                      <Icon size={28} className="text-white" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: '5h+', label: 'Time Saved per Week', icon: Clock },
            { number: '80%', label: 'Tasks Automated', icon: Zap },
            { number: '3x', label: 'More Output', icon: TrendingUp },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-center"
            >
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </p>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background */}
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl opacity-40" />
    </section>
  )
}
