import React, { useState, useEffect } from 'react'
import { Menu, X, Sparkles, ArrowUpRight } from 'lucide-react'
import { profileData } from '../data/profile'
import { SparkleDoodle } from './Doodles'

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

  // Menutup menu mobile saat link diklik
  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-100/90 backdrop-blur-md shadow-sm border-b border-peach/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 text-plum-900 font-display font-bold text-xl sm:text-2xl tracking-tight transition-transform active:scale-95"
          aria-label={`${profileData.name} - Beranda`}
        >
          <div className="w-9 h-9 rounded-2xl bg-peach flex items-center justify-center border-2 border-plum-900 shadow-sticker group-hover:rotate-6 transition-transform">
            <SparkleDoodle className="w-5 h-5 text-coral" />
          </div>
          <span className="flex items-center gap-1.5">
            {profileData.name}
            <span className="text-xs px-2 py-0.5 rounded-full bg-mint border border-plum-900 text-plum-900 font-body font-semibold hidden sm:inline-block">
              {profileData.handle}
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-cream-50/80 p-1.5 rounded-full border-2 border-plum-900/10 shadow-sm backdrop-blur-sm" aria-label="Navigasi Utama">
          <a
            href="#karya"
            className="px-5 py-2 rounded-full font-display font-medium text-plum-900 hover:bg-peach/60 hover:text-plum-950 transition-all"
          >
            Karya
          </a>
          <a
            href="#tentang"
            className="px-5 py-2 rounded-full font-display font-medium text-plum-900 hover:bg-lilac/60 hover:text-plum-950 transition-all"
          >
            Tentang
          </a>
          <a
            href="#kontak"
            className="px-5 py-2 rounded-full font-display font-medium text-plum-900 hover:bg-mint/60 hover:text-plum-950 transition-all"
          >
            Kontak
          </a>
        </nav>

        {/* Status Pill & Action */}
        <div className="hidden md:flex items-center gap-3">
          {profileData.availableForHire && (
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint/50 border border-mint-dark/40 text-xs font-semibold text-plum-900">
              <span className="w-2 h-2 rounded-full bg-mint-dark animate-ping" />
              <span>{profileData.statusBadge}</span>
            </div>
          )}
          <a
            href="#kontak"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-coral hover:bg-coral-hover text-cream-50 font-display font-bold text-sm border-2 border-plum-900 shadow-sticker hover:shadow-sticker-hover hover:-translate-y-0.5 active:translate-y-0.5 transition-all"
          >
            <span>Kirim Pesan</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex-shrink-0 p-2 rounded-2xl bg-peach border-2 border-plum-900 text-plum-900 shadow-sticker focus:outline-none active:scale-95 transition-transform"
          aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden bg-cream-100/98 backdrop-blur-xl border-b-2 border-plum-900 px-6 pt-4 pb-8 mt-3 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {profileData.availableForHire && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mint/70 border border-mint-dark/40 text-xs font-semibold text-plum-900 self-start mb-2">
                <span className="w-2 h-2 rounded-full bg-mint-dark" />
                <span>{profileData.statusBadge}</span>
              </div>
            )}
            <a
              href="#karya"
              onClick={handleNavClick}
              className="text-lg font-display font-bold text-plum-900 py-2.5 px-4 rounded-2xl hover:bg-peach border border-transparent hover:border-plum-900 transition-all"
            >
              🎨 Galeri Karya
            </a>
            <a
              href="#tentang"
              onClick={handleNavClick}
              className="text-lg font-display font-bold text-plum-900 py-2.5 px-4 rounded-2xl hover:bg-lilac border border-transparent hover:border-plum-900 transition-all"
            >
              🙋‍♀️ Tentang Saya
            </a>
            <a
              href="#kontak"
              onClick={handleNavClick}
              className="text-lg font-display font-bold text-plum-900 py-2.5 px-4 rounded-2xl hover:bg-mint border border-transparent hover:border-plum-900 transition-all"
            >
              💬 Kontak & Kolaborasi
            </a>
            <div className="pt-2">
              <a
                href="#kontak"
                onClick={handleNavClick}
                className="w-full text-center flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-coral text-cream-50 font-display font-bold border-2 border-plum-900 shadow-sticker active:translate-y-0.5"
              >
                <span>Ayo Mulai Kolaborasi</span>
                <Sparkles className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
