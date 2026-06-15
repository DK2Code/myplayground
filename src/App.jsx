import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import WhyAIMatters from './components/WhyAIMatters'
import UseCases from './components/UseCases'
import Workflow from './components/Workflow'
import Benefits from './components/Benefits'
import AITools from './components/AITools'
import FutureOfWork from './components/FutureOfWork'
import FinalCTA from './components/FinalCTA'
import Navigation from './components/Navigation'

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 via-dark-900 to-dark-800 overflow-hidden">
      <Navigation />
      <Hero />
      <WhyAIMatters />
      <UseCases />
      <Workflow />
      <Benefits />
      <AITools />
      <FutureOfWork />
      <FinalCTA />
    </div>
  )
}

export default App
