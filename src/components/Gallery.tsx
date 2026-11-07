import React, { useState, useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Eye, Sparkles } from 'lucide-react'
import { CATEGORIES, WORKS, WorkCategory, WorkItem } from '../data/works'
import { ArtworkVisual } from './ArtworkVisual'
import { Lightbox } from './Lightbox'
import { SparkleDoodle } from './Doodles'

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'Semua' | WorkCategory>('Semua')
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null)
  const shouldReduceMotion = useReducedMotion()

  const filteredWorks = useMemo(() => {
    if (activeCategory === 'Semua') return WORKS
    return WORKS.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  return (
    <section
      id="karya"
      className="py-20 md:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      aria-label="Galeri Portofolio"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-lilac/70 border-2 border-plum-900 shadow-sticker mb-4">
          <SparkleDoodle className="w-4 h-4 text-coral" />
          <span className="font-display font-bold text-xs uppercase tracking-wider text-plum-900">
            Showcase Visual
          </span>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-plum-900 mb-4 tracking-tight">
          Pilihan Karya & Eksplorasi Visual
        </h2>
        <p className="text-plum-800 text-base sm:text-lg max-w-2xl">
          Dari guratan konsep karakter hingga identitas visual lengkap. Klik pada kartu mana saja untuk melihat detail proses dan cerita di baliknya!
        </p>

        {/* Filter Category Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 bg-cream-50 rounded-full border-2 border-plum-900/15 shadow-sm">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat
            const count = cat === 'Semua' ? WORKS.length : WORKS.filter((w) => w.category === cat).length

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 sm:px-5 py-2 rounded-full font-display font-semibold text-xs sm:text-sm transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-plum-900 text-cream-50 shadow-sticker -translate-y-0.5'
                    : 'text-plum-900 hover:bg-peach/60'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-coral text-cream-50' : 'bg-cream-200 text-plum-800'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Masonry-style Responsive Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {filteredWorks.map((work) => (
          <motion.article
            layout
            key={work.id}
            whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-cream-50 rounded-3xl sm:rounded-4xl border-3 border-plum-900 shadow-sticker hover:shadow-sticker-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col"
            onClick={() => setSelectedWork(work)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setSelectedWork(work)
              }
            }}
            role="button"
            aria-label={`Buka detail karya: ${work.title}`}
          >
            {/* Visual Aspect Box */}
            <div
              className={`relative w-full overflow-hidden border-b-2 border-plum-900 ${
                work.aspect === 'portrait'
                  ? 'aspect-[4/5]'
                  : work.aspect === 'landscape'
                  ? 'aspect-[16/11]'
                  : 'aspect-square'
              }`}
            >
              <ArtworkVisual work={work} />

              {/* Top Category Badge */}
              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="px-3 py-1 rounded-full bg-cream-50/95 backdrop-blur-sm border-2 border-plum-900 text-xs font-display font-bold text-plum-900 shadow-sm">
                  {work.category}
                </span>
              </div>

              {/* Hover Overlay with Eye Icon */}
              <div className="absolute inset-0 bg-plum-950/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-cream-50 text-plum-900 border-2 border-plum-900 shadow-sticker flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Eye className="w-5 h-5 text-coral" />
                </div>
              </div>
            </div>

            {/* Card Content Footer */}
            <div className="p-5 flex flex-col justify-between flex-grow bg-cream-50">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-plum-900 group-hover:text-coral transition-colors">
                    {work.title}
                  </h3>
                  <span className="text-xs font-semibold text-plum-800/80 bg-peach/50 px-2 py-0.5 rounded-md">
                    {work.year}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-plum-800 line-clamp-2 leading-relaxed">
                  {work.description}
                </p>
              </div>

              {/* Tag Pills */}
              <div className="mt-4 pt-3 border-t border-peach/50 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {work.tags.slice(0, 2).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-mint/60 text-plum-900"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-display font-bold text-coral group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                  Detail →
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Helpful Customization Note for the User */}
      <div className="mt-14 p-5 rounded-3xl bg-peach-light/80 border-2 border-peach max-w-2xl mx-auto flex items-center gap-3 text-left">
        <div className="w-10 h-10 rounded-2xl bg-peach border border-plum-900 flex-shrink-0 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-coral" />
        </div>
        <p className="text-xs sm:text-sm text-plum-900">
          <strong>Tips Kustomisasi:</strong> Seluruh karya di atas terhubung ke file <code className="bg-cream-100 px-1.5 py-0.5 rounded font-mono text-plum-950 font-bold border border-plum-900/20">/src/data/works.ts</code>. Kamu cukup meletakkan file gambar asli di folder <code className="bg-cream-100 px-1.5 py-0.5 rounded font-mono text-plum-950 font-bold border border-plum-900/20">/public/works/</code> lalu isi field <code className="bg-cream-100 px-1.5 py-0.5 rounded font-mono text-plum-950 font-bold border border-plum-900/20">imageSrc</code>!
        </p>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        work={selectedWork}
        works={filteredWorks}
        onClose={() => setSelectedWork(null)}
        onSelectWork={(work) => setSelectedWork(work)}
      />
    </section>
  )
}
