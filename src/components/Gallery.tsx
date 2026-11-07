import React, { useState, useMemo } from 'react'
import { Eye } from 'lucide-react'
import { CATEGORIES, WORKS, WorkCategory, WorkItem } from '../data/works'
import { ArtworkVisual } from './ArtworkVisual'
import { Lightbox } from './Lightbox'
import { SparkleStar, HazardTape } from './Doodles'

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'Semua' | WorkCategory>('Semua')
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null)

  const filteredWorks = useMemo(() => {
    if (activeCategory === 'Semua') return WORKS
    return WORKS.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  return (
    <section
      id="karya"
      className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative bg-white"
      aria-label="Galeri Portofolio"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        
        {/* Zine Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cobalt text-white border-3 border-cobalt shadow-cobalt mb-4 font-mono font-bold text-xs uppercase tracking-widest">
          <SparkleStar className="w-4 h-4" inverted />
          <span>PORTFOLIO EXHIBITION // 01</span>
        </div>

        {/* Section Headline: "Pilihan Karya & Eksplorasi Visual" */}
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cobalt mb-4 tracking-tight uppercase">
          Pilihan Karya & Eksplorasi Visual
        </h2>
        
        <p className="font-mono text-cobalt text-base sm:text-lg max-w-2xl leading-relaxed">
          // Koleksi 9 karya grafis berkarakter manga ink murni dengan teknik screentone, kontras tinggi, dan komposisi dinamis.
        </p>

        {/* Category Filters with Sharp Borders & Heavy Shadows */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-2 bg-white border-3 border-cobalt shadow-cobalt">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat
            const count = cat === 'Semua' ? WORKS.length : WORKS.filter((w) => w.category === cat).length

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 font-mono font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2 border-2 ${
                  isActive
                    ? 'bg-cobalt text-white border-cobalt shadow-cobalt-sm'
                    : 'bg-white text-cobalt border-transparent hover:border-cobalt'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 font-mono font-extrabold border ${
                    isActive ? 'bg-white text-cobalt border-white' : 'bg-cobalt text-white border-cobalt'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* 3x3 Grid of Card Items with Sharp Borders, Heavy Shadows, & Diagonal Accent Lines */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWorks.map((work) => (
          <article
            key={work.id}
            className="group relative bg-white border-4 border-cobalt shadow-cobalt-lg hover:shadow-cobalt-xl hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col overflow-hidden"
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
            {/* Top Diagonal Accent Stripe Header */}
            <div className="h-3 w-full bg-stripes-cobalt border-b-2 border-cobalt" />

            {/* Visual Box with Artwork */}
            <div className="relative w-full aspect-square bg-white overflow-hidden">
              <ArtworkVisual work={work} />

              {/* Top Left Code Stamp */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-1 bg-white border-2 border-cobalt font-mono font-bold text-[11px] text-cobalt shadow-cobalt-sm">
                  {work.code}
                </span>
              </div>

              {/* Hover Graphic Overlay */}
              <div className="absolute inset-0 bg-cobalt/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-14 h-14 bg-white text-cobalt border-3 border-cobalt shadow-cobalt flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                  <Eye className="w-7 h-7 stroke-[2.5]" />
                </div>
              </div>
            </div>

            {/* Card Content & Heavy Contrast Typography */}
            <div className="p-5 flex flex-col justify-between flex-grow bg-white text-cobalt border-t-4 border-cobalt">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-cobalt group-hover:underline underline-offset-4 uppercase tracking-tight">
                    {work.title}
                  </h3>
                  <span className="font-mono text-xs font-bold px-2 py-0.5 border-2 border-cobalt">
                    {work.year}
                  </span>
                </div>
                <p className="font-mono text-xs sm:text-sm text-cobalt line-clamp-2 leading-relaxed">
                  {work.description}
                </p>
              </div>

              {/* Bottom Tag Bar & Prompt */}
              <div className="mt-5 pt-3 border-t-2 border-cobalt flex items-center justify-between font-mono font-bold text-xs">
                <span className="bg-cobalt text-white px-2 py-0.5 uppercase tracking-wider text-[10px]">
                  #{work.category}
                </span>
                <span className="text-cobalt group-hover:translate-x-1 transition-transform flex items-center gap-1 uppercase tracking-wider">
                  VIEW INK →
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Decorative Hazard Ribbon */}
      <div className="mt-14 flex justify-center">
        <HazardTape text="POWER BILIAH // GRAPHIC DESIGN ARCHIVE 2026 // ALL INK ORIGINAL" />
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
