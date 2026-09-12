import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ShowcaseGrid from './components/ShowcaseGrid'
import CodeInspector from './components/CodeInspector'
import ContactCard from './components/ContactCard'
import Footer from './components/Footer'

function App() {
  const [showCodeInspector, setShowCodeInspector] = useState(false)

  return (
    <div className="bg-slate-950 text-white overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern" style={{ backgroundSize: '50px 50px' }}></div>
      
      {/* Gradient Overlays */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero onViewCodeClick={() => setShowCodeInspector(true)} />
        <ShowcaseGrid />
        <ContactCard />
        <Footer />
      </div>

      {/* Code Inspector Modal */}
      {showCodeInspector && (
        <CodeInspector onClose={() => setShowCodeInspector(false)} />
      )}
    </div>
  )
}

export default App