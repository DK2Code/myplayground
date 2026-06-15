import { motion } from 'framer-motion'
import { ArrowRight, Lightbulb, Zap, CheckCircle, Sparkles } from 'lucide-react'

export default function Workflow() {
  const steps = [
    { icon: Lightbulb, label: 'Input', description: 'Share your task or idea' },
    { icon: Zap, label: 'AI Assistance', description: 'Get intelligent suggestions' },
    { icon: CheckCircle, label: 'Review', description: 'Polish and refine' },
    { icon: Sparkles, label: 'Output', description: 'Get the final result' },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            The AI Workflow
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A simple, powerful process that feels natural and intuitive
          </p>
        </motion.div>

        {/* Workflow steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="relative z-10 p-8 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm hover:border-blue-500/60 transition-all">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center mx-auto mb-4"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <Icon size={32} className="text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white text-center mb-2">{step.label}</h3>
                    <p className="text-gray-300 text-center text-sm">{step.description}</p>

                    {/* Step number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>

                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute -right-9 top-1/2 -translate-y-1/2 z-20"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <ArrowRight className="text-blue-400" size={24} />
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 rounded-xl bg-dark-800/50 border border-purple-500/20 backdrop-blur-sm text-center"
        >
          <p className="text-lg text-gray-300">
            This seamless workflow ensures you stay in control while leveraging AI's power to enhance your work at every stage.
          </p>
        </motion.div>
      </div>

      {/* Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-50" />
    </section>
  )
}
