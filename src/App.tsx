import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Gallery } from './components/Gallery'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-cobalt flex flex-col font-body selection:bg-cobalt selection:text-white">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#karya"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cobalt focus:text-white focus:font-mono focus:font-bold focus:border-2 focus:border-white focus:shadow-cobalt"
      >
        [ LANGSUNG KE GALERI KARYA ]
      </a>

      {/* Sharp Cobalt Navbar */}
      <Navbar />

      {/* Main Semantic Page Content */}
      <main className="flex-grow">
        <Hero />
        <Gallery />
        <About />
        <Contact />
      </main>

      {/* Solid Cobalt Footer */}
      <Footer />
    </div>
  )
}

export default App
