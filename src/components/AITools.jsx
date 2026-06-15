import { motion } from 'framer-motion'
import { Code, Users, BarChart3, Headphones, Crown, Shield } from 'lucide-react'

export default function AITools() {
  const roles = [
    {
      icon: Code,
      title: 'Developers',
      benefits: ['Code generation', 'Bug detection', 'Documentation'],
      color: 'from-blue-400 to-cyan-400',
    },
    {
      icon: Users,
      title: 'Project Managers',
      benefits: ['Schedule planning', 'Risk analysis', 'Report generation'],
      color: 'from-purple-400 to-pink-400',
    },
    {
      icon: BarChart3,
      title: 'Analysts',
      benefits: ['Data insights', 'Trend analysis', 'Report automation'],
      color: 'from-cyan-400 to-blue-400',
    },
    {
      icon: Headphones,
      title: 'Support Teams',
      benefits: ['Response drafting', 'Issue categorization', 'Fast resolution'],
      color: 'from-pink-400 to-purple-400',
    },
    {
      icon: Crown,
      title: 'Executives',
      benefits: ['Decision support', 'Briefing prep', 'Strategy insights'],
      color: 'from-blue-400 to-purple-400',
    },
    {
      icon: Shield,
      title: 'Administrators',
      benefits: ['Task automation', 'Process streamlining', 'Efficiency gains'],
      color: 'from-purple-400 to-cyan-400',
    },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            AI Tools in the Workplace
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tailored AI assistance for every role in your organization
          </p>
        </motion.div>

        {/* Roles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => {
            const Icon = role.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${role.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`} />

                {/* Card */}
                <div className="relative p-8 rounded-xl bg-gradient-to-br from-dark-800/80 to-dark-700/80 border border-gray-600/30 group-hover:border-gray-400/50 backdrop-blur-sm transition-all">
                  <div className="mb-6">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${role.color} flex items-center justify-center`}
                    >
                      <Icon size={32} className="text-white" />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{role.title}</h3>

                  <div className="space-y-2">
                    {role.benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                        {benefit}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Every role can benefit from AI-powered assistance</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-bold text-lg hover:shadow-xl transition-all"
          >
            Discover Your Role Benefits
          </motion.button>
        </motion.div>
      </div>

      {/* Background */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl opacity-30" />
    </section>
  )
}
