import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Gallery } from './components/Gallery'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream-100 text-plum-900 flex flex-col font-body selection:bg-peach selection:text-plum-900">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#karya"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-coral focus:text-cream-50 focus:font-bold focus:rounded-xl focus:shadow-sticker focus:border-2 focus:border-plum-900"
      >
        Langsung ke Galeri Karya
      </a>

      {/* Sticky Blurred Navbar */}
      <Navbar />

      {/* Main Semantic Page Content */}
      <main className="flex-grow">
        <Hero />
        <Gallery />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
