import React from 'react'
import { ArrowUp } from 'lucide-react'
import { profileData } from '../data/profile'
import { SparkleDoodle } from './Doodles'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-cream-200/80 border-t-2 border-peach py-12 px-4 sm:px-6 lg:px-8 text-plum-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand & Motto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-xl bg-peach flex items-center justify-center border-2 border-plum-900 shadow-sm">
              <SparkleDoodle className="w-4 h-4 text-coral" />
            </div>
            <span className="font-display font-bold text-lg text-plum-900">
              {profileData.name}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-cream-50 border border-plum-900 text-plum-900 font-semibold">
              {profileData.handle}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-plum-800/80 max-w-sm">
            Dibuat dengan pensil digital, banyak teh melati, dan dedikasi untuk visual yang berkarakter.
          </p>
        </div>

        {/* Center: Copyright with Heart */}
        <div className="flex flex-col items-center text-xs text-plum-800/80 order-3 md:order-2">
          <div className="flex items-center gap-1.5 mb-1 font-medium">
            <span>© {currentYear} {profileData.name}. Hak Cipta Dilindungi.</span>
          </div>
          <span className="flex items-center gap-1 text-[11px] text-plum-800/60">
            Didesain khusus untuk personal branding ilustrator & desainer grafis.
          </span>
        </div>

        {/* Right Side: Back to Top Button */}
        <div className="order-2 md:order-3">
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-cream-50 hover:bg-peach border-2 border-plum-900 text-plum-900 font-display font-bold text-xs sm:text-sm shadow-sticker hover:shadow-sticker-hover hover:-translate-y-0.5 active:translate-y-0.5 transition-all"
            aria-label="Kembali ke bagian atas halaman"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-coral" />
          </button>
        </div>

      </div>
    </footer>
  )
}
