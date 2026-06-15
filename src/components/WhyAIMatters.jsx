import { motion } from 'framer-motion'
import {
  Clock,
  Rocket,
  Brain,
  CheckCircle,
  Zap,
  Target,
  FileText,
  BarChart3,
} from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Email & Communication',
    description: 'Write, rewrite, and polish emails and messages with perfect tone and clarity',
  },
  {
    icon: FileText,
    title: 'Document Summarization',
    description: 'Turn lengthy documents and reports into concise, actionable summaries',
  },
  {
    icon: BarChart3,
    title: 'Data Analysis',
    description: 'Extract insights from data and create comprehensive reports instantly',
  },
  {
    icon: Zap,
    title: 'Task Automation',
    description: 'Reduce repetitive tasks and focus on high-value, creative work',
  },
  {
    icon: Brain,
    title: 'Creative Brainstorming',
    description: 'Generate ideas, outlines, and content for presentations and campaigns',
  },
  {
    icon: Target,
    title: 'Smart Planning',
    description: 'Schedule tasks, plan projects, and manage time more effectively',
  },
]

const BenefitCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex gap-4 p-6 rounded-lg bg-dark-800/50 border border-blue-500/10 hover:border-blue-500/30 transition-all backdrop-blur-sm"
  >
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
        <Icon size={24} className="text-white" />
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </motion.div>
)

export default function WhyAIMatters() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Why AI Matters for Your Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            AI enhances your capabilities across every aspect of professional work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              index={index}
            />
          ))}
        </div>

        {/* Key stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm"
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                50%+
              </p>
              <p className="text-gray-400 mt-2">Time Saved Weekly</p>
            </div>
            <div>
              <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                10x
              </p>
              <p className="text-gray-400 mt-2">Faster Output</p>
            </div>
            <div>
              <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                ∞
              </p>
              <p className="text-gray-400 mt-2">Possibilities</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl opacity-50" />
    </section>
  )
}
