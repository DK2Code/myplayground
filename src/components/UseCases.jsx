import { motion } from 'framer-motion'
import {
  Mail,
  FileText,
  BarChart3,
  Zap,
  Code,
  PresentationIcon,
  MessageCircle,
  BookOpen,
} from 'lucide-react'

const useCase = {
  email: { icon: Mail, title: 'Email Writing', description: 'Draft professional emails instantly' },
  notes: { icon: FileText, title: 'Meeting Notes', description: 'Summarize meetings automatically' },
  data: { icon: BarChart3, title: 'Data Analysis', description: 'Analyze and report on data' },
  automate: { icon: Zap, title: 'Task Automation', description: 'Automate repetitive workflows' },
  code: { icon: Code, title: 'Code Generation', description: 'Generate and troubleshoot code' },
  presentation: { icon: PresentationIcon, title: 'Presentations', description: 'Create slides instantly' },
  support: { icon: MessageCircle, title: 'Customer Support', description: 'Draft support responses' },
  learning: { icon: BookOpen, title: 'Research & Learning', description: 'Accelerate your learning' },
}

const UseCaseCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -10, boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)' }}
    className="group p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all cursor-pointer"
  >
    <div className="mb-6">
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
        <Icon size={28} className="text-white" />
      </div>
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{description}</p>
  </motion.div>
)

export default function UseCases() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Daily AI Use Cases
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover how AI can enhance your work across different tasks and roles
          </p>
        </motion.div>

        {/* Use cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(useCase).map(([key, { icon, title, description }], index) => (
            <UseCaseCard
              key={key}
              icon={icon}
              title={title}
              description={description}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 -left-32 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-30" />
    </section>
  )
}
