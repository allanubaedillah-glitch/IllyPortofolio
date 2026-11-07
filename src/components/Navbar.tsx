import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { profileData } from '../data/profile'
import { SparkleStar } from './Doodles'

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white border-b-4 border-cobalt ${
        scrolled ? 'py-3 shadow-cobalt' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo: "Power Biliah" in sharp cobalt blue */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-cobalt font-display font-extrabold text-2xl tracking-tighter"
          aria-label={`${profileData.name} - Beranda`}
        >
          <div className="w-9 h-9 bg-cobalt text-white flex items-center justify-center border-2 border-cobalt shadow-cobalt-sm group-hover:bg-white group-hover:text-cobalt transition-colors">
            <SparkleStar className="w-5 h-5" inverted />
          </div>
          <span className="flex items-center gap-2">
            <span>{profileData.name}</span>
            <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 bg-cobalt text-white border-2 border-cobalt hidden sm:inline-block">
              VOL. 26 // ZINE
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links in Sharp Cobalt */}
        <nav className="hidden md:flex items-center gap-1 font-mono font-bold text-sm" aria-label="Navigasi Utama">
          <a
            href="#karya"
            className="px-4 py-2 text-cobalt hover:bg-cobalt hover:text-white border-2 border-transparent hover:border-cobalt transition-all"
          >
            [ 01 // KARYA ]
          </a>
          <a
            href="#tentang"
            className="px-4 py-2 text-cobalt hover:bg-cobalt hover:text-white border-2 border-transparent hover:border-cobalt transition-all"
          >
            [ 02 // TENTANG ]
          </a>
          <a
            href="#kontak"
            className="px-4 py-2 text-cobalt hover:bg-cobalt hover:text-white border-2 border-transparent hover:border-cobalt transition-all"
          >
            [ 03 // KONTAK ]
          </a>
        </nav>

        {/* Action Button: "Start up for free" with thick cobalt border and drop shadow */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#kontak"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-cobalt text-white font-mono font-bold text-xs uppercase tracking-wider border-3 border-cobalt shadow-cobalt hover:shadow-none hover:translate-x-1 hover:translate-y-1 active:translate-x-1 active:translate-y-1 transition-all"
          >
            <span>Start up for free</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex-shrink-0 p-2 bg-white border-3 border-cobalt text-cobalt shadow-cobalt focus:outline-none active:translate-x-0.5 active:translate-y-0.5"
          aria-label={isOpen ? 'Tutup navigasi' : 'Buka navigasi'}
        >
          {isOpen ? <X className="w-6 h-6 stroke-[3]" /> : <Menu className="w-6 h-6 stroke-[3]" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t-4 border-cobalt px-6 py-6 shadow-cobalt-lg">
          <div className="flex flex-col gap-3 font-mono font-bold">
            <a
              href="#karya"
              onClick={() => setIsOpen(false)}
              className="text-lg text-cobalt p-3 border-2 border-cobalt hover:bg-cobalt hover:text-white transition-colors"
            >
              01 // PILIHAN KARYA
            </a>
            <a
              href="#tentang"
              onClick={() => setIsOpen(false)}
              className="text-lg text-cobalt p-3 border-2 border-cobalt hover:bg-cobalt hover:text-white transition-colors"
            >
              02 // DI BALIK SETIAP GORESAN
            </a>
            <a
              href="#kontak"
              onClick={() => setIsOpen(false)}
              className="text-lg text-cobalt p-3 border-2 border-cobalt hover:bg-cobalt hover:text-white transition-colors"
            >
              03 // KONTAK & KOLABORASI
            </a>
            <div className="pt-2">
              <a
                href="#kontak"
                onClick={() => setIsOpen(false)}
                className="w-full text-center flex items-center justify-center gap-2 py-3.5 bg-cobalt text-white font-bold text-sm uppercase tracking-wider border-3 border-cobalt shadow-cobalt"
              >
                <span>Start up for free</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
