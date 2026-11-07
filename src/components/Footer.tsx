import React, { useState } from 'react'
import { ArrowUp, MessageSquarePlus, Check } from 'lucide-react'
import { profileData } from '../data/profile'
import { SparkleStar } from './Doodles'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)
  const [feedbackSent, setFeedbackSent] = useState(false)
  const [feedbackText, setFeedbackText] = useState('')

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault()
    if (!feedbackText.trim()) return
    setFeedbackSent(true)
    setTimeout(() => {
      setFeedbackSent(false)
      setShowFeedbackModal(false)
      setFeedbackText('')
    }, 2000)
  }

  return (
    <footer className="bg-cobalt text-white border-t-4 border-cobalt py-10 px-4 sm:px-6 lg:px-8 relative select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand "Power Biliah" & Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-6 h-6 bg-white text-cobalt flex items-center justify-center font-bold text-xs">
              <SparkleStar className="w-4 h-4 text-cobalt" />
            </div>
            <span className="font-display font-extrabold text-xl tracking-tight text-white uppercase">
              {profileData.name}
            </span>
            <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 bg-white text-cobalt border border-white">
              EST. 2026
            </span>
          </div>
          <p className="font-mono text-xs text-white/80">
            © {currentYear} {profileData.name}. All visual assets and inking rights reserved.
          </p>
        </div>

        {/* Center: Small Links in White Text */}
        <div className="flex flex-wrap items-center justify-center gap-4 font-mono font-bold text-xs uppercase tracking-wider text-white">
          <a href="#karya" className="hover:underline underline-offset-4 decoration-2">
            Karya
          </a>
          <span className="text-white/40">//</span>
          <a href="#tentang" className="hover:underline underline-offset-4 decoration-2">
            Tentang
          </a>
          <span className="text-white/40">//</span>
          <a href="#kontak" className="hover:underline underline-offset-4 decoration-2">
            Kontak
          </a>
          <span className="text-white/40">//</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="hover:underline underline-offset-4 decoration-2 flex items-center gap-1 text-white"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 stroke-[3]" />
          </button>
        </div>

        {/* Right: Stark "Saran & Kritik" Button */}
        <div>
          <button
            type="button"
            onClick={() => setShowFeedbackModal(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-cobalt font-mono font-extrabold text-xs uppercase tracking-wider border-3 border-white shadow-white hover:bg-cobalt hover:text-white transition-all active:translate-x-0.5 active:translate-y-0.5"
          >
            <MessageSquarePlus className="w-4 h-4 stroke-[2.5]" />
            <span>Saran & Kritik</span>
          </button>
        </div>

      </div>

      {/* Modal Stark Saran & Kritik */}
      {showFeedbackModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cobalt/85 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg bg-white text-cobalt border-4 border-cobalt shadow-white-xl p-6 sm:p-8">
            <div className="flex items-center justify-between pb-3 border-b-2 border-cobalt mb-4">
              <span className="font-mono font-extrabold text-sm uppercase tracking-wider">
                [ TRANSMISI // SARAN & KRITIK ]
              </span>
              <button
                type="button"
                onClick={() => setShowFeedbackModal(false)}
                className="w-7 h-7 bg-cobalt text-white flex items-center justify-center font-bold font-mono text-sm border-2 border-cobalt hover:bg-white hover:text-cobalt"
              >
                ✕
              </button>
            </div>

            {feedbackSent ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-cobalt text-white flex items-center justify-center mb-3">
                  <Check className="w-7 h-7 stroke-[3]" />
                </div>
                <h4 className="font-display font-extrabold text-xl uppercase mb-1">
                  Pesan Diterima!
                </h4>
                <p className="font-mono text-xs text-cobalt">
                  Terima kasih atas saran & masukanmu untuk Power Biliah.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendFeedback} className="flex flex-col gap-4">
                <p className="font-mono text-xs leading-relaxed text-cobalt">
                  Punya tanggapan, kritik membangun, atau ide untuk eksplorasi visual berikutnya? Tuliskan langsung di bawah:
                </p>
                <textarea
                  required
                  rows={4}
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="Tuliskan saran & kritik di sini..."
                  className="w-full p-3 bg-white text-cobalt font-mono text-xs border-3 border-cobalt focus:outline-none focus:ring-2 focus:ring-cobalt placeholder:text-cobalt/50"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-cobalt text-white font-mono font-extrabold text-xs uppercase tracking-widest border-2 border-cobalt shadow-cobalt hover:bg-white hover:text-cobalt transition-colors"
                >
                  KIRIM TRANSMISI SEKARANG
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </footer>
  )
}
