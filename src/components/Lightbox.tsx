import React, { useEffect, useCallback } from 'react'
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-cobalt/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white border-4 border-cobalt shadow-cobalt-2xl flex flex-col md:flex-row max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 bg-cobalt text-white border-2 border-cobalt hover:bg-white hover:text-cobalt transition-colors focus:outline-none"
          aria-label="Tutup jendela detail karya (ESC)"
        >
          <X className="w-6 h-6 stroke-[3]" />
        </button>

        {/* Sisi Kiri: Visual Karya Graphic */}
        <div className="md:w-7/12 relative bg-white flex items-center justify-center min-h-[300px] sm:min-h-[420px] p-6 border-b-4 md:border-b-0 md:border-r-4 border-cobalt overflow-hidden">
          <div className="w-full h-full max-h-[460px] border-4 border-cobalt flex items-center justify-center bg-white">
            <ArtworkVisual work={work} priority={true} />
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
            <button
              type="button"
              onClick={handlePrev}
              className="pointer-events-auto p-2.5 bg-white text-cobalt border-3 border-cobalt shadow-cobalt hover:bg-cobalt hover:text-white transition-all active:translate-x-0.5"
              aria-label="Karya sebelumnya"
            >
              <ChevronLeft className="w-6 h-6 stroke-[3]" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="pointer-events-auto p-2.5 bg-white text-cobalt border-3 border-cobalt shadow-cobalt hover:bg-cobalt hover:text-white transition-all active:translate-x-0.5"
              aria-label="Karya berikutnya"
            >
              <ChevronRight className="w-6 h-6 stroke-[3]" />
            </button>
          </div>
        </div>

        {/* Sisi Kanan: Detail & Meta Informasi */}
        <div className="md:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-white text-cobalt">
          <div>
            {/* Category Stamp */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-cobalt text-white font-mono font-bold text-xs uppercase tracking-wider">
                {work.category}
              </span>
              <span className="flex items-center gap-1 font-mono font-bold text-xs">
                <Calendar className="w-3.5 h-3.5 stroke-[2.5]" />
                {work.year}
              </span>
            </div>

            {/* Title */}
            <h2 id="lightbox-title" className="font-display font-extrabold text-2xl sm:text-3xl text-cobalt mb-3 leading-tight uppercase">
              {work.title}
            </h2>

            {/* Client if exists */}
            {work.client && (
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-cobalt mb-4 pb-3 border-b-2 border-cobalt">
                <User className="w-4 h-4 stroke-[2.5]" />
                <span>KLIEN: {work.client}</span>
              </div>
            )}

            {/* Description */}
            <p className="font-mono text-sm leading-relaxed mb-4 text-cobalt">
              {work.description}
            </p>

            {/* Story Box with Diagonal Border */}
            <div className="p-4 bg-white border-3 border-cobalt shadow-cobalt mb-6">
              <h3 className="font-mono font-extrabold text-xs uppercase tracking-widest text-cobalt mb-1.5 flex items-center gap-1.5">
                <span>★ KONSEP VISUAL & GORESAN</span>
              </h3>
              <p className="font-mono text-xs leading-relaxed text-cobalt">
                {work.story}
              </p>
            </div>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {work.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2.5 py-1 bg-cobalt text-white font-mono font-bold text-[11px] uppercase"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Navigation Cue */}
          <div className="pt-4 border-t-2 border-cobalt flex items-center justify-between font-mono font-bold text-xs text-cobalt">
            <span>[ {currentIndex + 1} / {works.length} ]</span>
            <span>ESC UNTUK KELUAR</span>
          </div>
        </div>
      </div>
    </div>
  )
}
