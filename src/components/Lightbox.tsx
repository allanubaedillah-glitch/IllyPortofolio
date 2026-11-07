import React, { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Calendar, User, Tag } from 'lucide-react'
import { WorkItem } from '../data/works'
import { ArtworkVisual } from './ArtworkVisual'

interface LightboxProps {
  work: WorkItem | null
  works: WorkItem[]
  onClose: () => void
  onSelectWork: (work: WorkItem) => void
}

export const Lightbox: React.FC<LightboxProps> = ({ work, works, onClose, onSelectWork }) => {
  const currentIndex = work ? works.findIndex((item) => item.id === work.id) : -1

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelectWork(works[currentIndex - 1])
    } else {
      onSelectWork(works[works.length - 1])
    }
  }, [currentIndex, works, onSelectWork])

  const handleNext = useCallback(() => {
    if (currentIndex < works.length - 1) {
      onSelectWork(works[currentIndex + 1])
    } else {
      onSelectWork(works[0])
    }
  }, [currentIndex, works, onSelectWork])

  // ESC key and Arrow keys navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      }
    }

    if (work) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [work, onClose, handlePrev, handleNext])

  if (!work) return null

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-plum-950/70 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-title"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-cream-50 rounded-3xl sm:rounded-4xl border-3 border-plum-900 shadow-sticker-xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-cream-100/90 hover:bg-peach border-2 border-plum-900 text-plum-900 shadow-sticker hover:rotate-90 transition-all focus:outline-none"
            aria-label="Tutup jendela detail karya (ESC)"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Sisi Kiri: Visual Karya */}
          <div className="md:w-7/12 relative bg-cream-100 flex items-center justify-center min-h-[260px] sm:min-h-[380px] p-6 border-b-2 md:border-b-0 md:border-r-2 border-plum-900 overflow-hidden">
            <div className="w-full h-full max-h-[460px] rounded-2xl overflow-hidden border-2 border-plum-900/30 shadow-inner flex items-center justify-center">
              <ArtworkVisual work={work} priority={true} />
            </div>

            {/* Navigation Buttons: Prev / Next */}
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
              <button
                type="button"
                onClick={handlePrev}
                className="pointer-events-auto p-2.5 rounded-full bg-cream-50/95 hover:bg-peach border-2 border-plum-900 text-plum-900 shadow-sticker hover:-translate-x-0.5 active:translate-x-0 transition-all"
                aria-label="Karya sebelumnya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="pointer-events-auto p-2.5 rounded-full bg-cream-50/95 hover:bg-peach border-2 border-plum-900 text-plum-900 shadow-sticker hover:translate-x-0.5 active:translate-x-0 transition-all"
                aria-label="Karya berikutnya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sisi Kanan: Informasi & Cerita Karya */}
          <div className="md:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Category Pill & Year */}
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-mint text-xs font-display font-bold text-plum-900 border border-plum-900">
                  {work.category}
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-plum-800">
                  <Calendar className="w-3.5 h-3.5 text-coral" />
                  {work.year}
                </span>
              </div>

              {/* Title */}
              <h2 id="lightbox-title" className="font-display font-bold text-2xl sm:text-3xl text-plum-900 mb-3 leading-snug">
                {work.title}
              </h2>

              {/* Client if exists */}
              {work.client && (
                <div className="flex items-center gap-1.5 text-xs font-medium text-plum-800/80 mb-4 pb-3 border-b border-peach">
                  <User className="w-3.5 h-3.5 text-lilac-dark" />
                  <span>Klien: <strong className="text-plum-900">{work.client}</strong></span>
                </div>
              )}

              {/* Brief Description */}
              <p className="text-plum-900 font-medium text-sm leading-relaxed mb-4">
                {work.description}
              </p>

              {/* Story behind the art */}
              <div className="bg-peach-light/70 p-4 rounded-2xl border border-peach mb-5">
                <h3 className="font-display font-bold text-xs uppercase tracking-wider text-plum-900 mb-1 flex items-center gap-1.5">
                  <span>💡 Cerita Di Balik Karya</span>
                </h3>
                <p className="text-xs text-plum-800 leading-relaxed">
                  {work.story}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {work.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-lilac/40 text-[11px] font-semibold text-plum-900"
                  >
                    <Tag className="w-3 h-3 text-coral" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Meta & Instructions */}
            <div className="pt-4 border-t border-peach/60 flex items-center justify-between text-xs text-plum-800/70">
              <span>{currentIndex + 1} dari {works.length} karya</span>
              <span className="hidden sm:inline">Gunakan tombol ◀ ▶ keyboard</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
