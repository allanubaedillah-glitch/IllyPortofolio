import React from 'react'
import { Sparkles, ArrowRight, Download } from 'lucide-react'
import { profileData } from '../data/profile'
import { SparkleStar, Starburst } from './Doodles'

export const About: React.FC = () => {
  return (
    <section
      id="tentang"
      className="py-20 md:py-28 bg-cobalt text-white border-y-4 border-cobalt relative overflow-hidden"
      aria-label="Tentang Power Biliah"
    >
      {/* Background Screentone Patterns in White on Cobalt */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-halftone-white opacity-20 pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-48 bg-stripes-white-sm opacity-20 pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Kolom Kiri: Anime Avatar in Heavy Cobalt Ink on White Circular Graphic */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* White Circular Graphic with Heavy Cobalt Ink Avatar */}
            <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] bg-white rounded-full border-6 border-white shadow-white-xl flex items-center justify-center overflow-hidden">
              
              {/* Halftone Screentone Arc inside Circle */}
              <div className="absolute inset-0 bg-halftone-cobalt opacity-30" />

              {/* Anime-Style Avatar SVG in Heavy Cobalt Ink */}
              <svg
                viewBox="0 0 320 320"
                className="relative z-10 w-full h-full p-2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Anime style avatar rendered in heavy cobalt ink"
              >
                <defs>
                  <pattern id="avatar-ht" width="6" height="6" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="1.8" fill="#2242F5" />
                  </pattern>
                </defs>

                {/* Halo Ring */}
                <circle cx="160" cy="160" r="135" stroke="#2242F5" strokeWidth="6" strokeDasharray="8 6" />

                {/* Shoulders & Collar in Solid Cobalt */}
                <path
                  d="M70 320C70 250 110 220 160 220C210 220 250 250 250 320H70Z"
                  fill="#2242F5"
                  stroke="#2242F5"
                  strokeWidth="8"
                />
                {/* High Contrast White Collar */}
                <polygon points="130,220 160,280 190,220" fill="#FFFFFF" stroke="#2242F5" strokeWidth="6" />

                {/* Neck */}
                <rect x="145" y="180" width="30" height="45" fill="#FFFFFF" stroke="#2242F5" strokeWidth="6" />

                {/* Head / Jaw */}
                <polygon points="110,130 115,170 160,210 205,170 210,130" fill="#FFFFFF" stroke="#2242F5" strokeWidth="8" />

                {/* Anime Eyes with Solid Cobalt Pupil and White Catchlights */}
                <ellipse cx="140" cy="155" rx="10" ry="14" fill="#2242F5" />
                <circle cx="137" cy="150" r="3.5" fill="#FFFFFF" />
                <path d="M125 142L155 145" stroke="#2242F5" strokeWidth="6" strokeLinecap="round" />

                <ellipse cx="180" cy="155" rx="10" ry="14" fill="#2242F5" />
                <circle cx="177" cy="150" r="3.5" fill="#FFFFFF" />
                <path d="M165 145L195 142" stroke="#2242F5" strokeWidth="6" strokeLinecap="round" />

                {/* Manga Screentone Blush */}
                <rect x="122" y="170" width="22" height="8" fill="url(#avatar-ht)" />
                <rect x="176" y="170" width="22" height="8" fill="url(#avatar-ht)" />

                {/* Mouth & Expression */}
                <path d="M152 185C156 190 164 190 168 185" stroke="#2242F5" strokeWidth="5" strokeLinecap="round" />

                {/* Dynamic Anime Spiky Hair with Screentone Texture */}
                <path
                  d="M90 140L80 80L120 100L130 40L165 80L190 30L205 90L240 70L230 140L245 180L220 180L210 140C210 100 110 100 110 140L100 180L75 180Z"
                  fill="#2242F5"
                  stroke="#2242F5"
                  strokeWidth="6"
                />
                {/* Foreground Hair Strands cutting across eyes */}
                <polygon points="120,100 135,145 150,105" fill="#2242F5" stroke="#FFFFFF" strokeWidth="3" />
                <polygon points="155,105 168,150 180,110" fill="#2242F5" stroke="#FFFFFF" strokeWidth="3" />
                <polygon points="180,110 195,145 205,100" fill="#2242F5" stroke="#FFFFFF" strokeWidth="3" />
              </svg>

              {/* Required labels: "avatar" and "ooreon..." */}
              <div className="absolute top-4 left-6 bg-cobalt text-white font-mono font-extrabold text-xs px-2.5 py-1 border-2 border-white shadow-cobalt-sm uppercase tracking-widest z-20">
                avatar
              </div>

              <div className="absolute bottom-4 right-6 bg-cobalt text-white font-mono font-extrabold text-xs px-2.5 py-1 border-2 border-white shadow-cobalt-sm uppercase tracking-widest z-20">
                ooreon...
              </div>
            </div>

            {/* Label Sub-badge below avatar */}
            <div className="mt-6 inline-flex items-center gap-2 bg-white text-cobalt px-4 py-1.5 font-mono font-extrabold text-xs uppercase tracking-widest border-3 border-white shadow-white">
              <Sparkles className="w-4 h-4 stroke-[2.5]" />
              <span>POWER BILIAH // VISUAL OPERATOR</span>
            </div>
          </div>

          {/* Kolom Kanan: Bold Text "Di Balik Setiap Goresan & Warna" & Interactive Boxes */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-cobalt font-mono font-extrabold text-xs uppercase tracking-wider mb-4 border-2 border-white shadow-white-sm">
              <SparkleStar className="w-4 h-4" />
              <span>SECTION // 02</span>
            </div>

            {/* Headline: "Di Balik Setiap Goresan & Warna" */}
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight uppercase leading-tight">
              Di Balik Setiap Goresan & Warna
            </h2>

            {/* Bio Naratif */}
            <p className="font-mono text-base sm:text-lg leading-relaxed text-white mb-6">
              {profileData.bio}
            </p>

            <p className="font-mono text-sm sm:text-base leading-relaxed text-white/90 mb-8 border-l-4 border-white pl-4">
              {profileData.aboutDetail}
            </p>

            {/* High-Contrast Interactive Boxes (Grid of 4 Fun Facts) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {profileData.funFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white text-cobalt border-4 border-white shadow-white hover:bg-cobalt hover:text-white transition-all duration-200 cursor-default group"
                >
                  <span className="font-mono font-extrabold text-xs uppercase tracking-widest bg-cobalt text-white group-hover:bg-white group-hover:text-cobalt px-2 py-0.5 inline-block mb-2">
                    {fact.number}
                  </span>
                  <h3 className="font-display font-extrabold text-lg uppercase tracking-tight mb-1">
                    {fact.title}
                  </h3>
                  <p className="font-mono text-xs leading-relaxed opacity-90">
                    {fact.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bullet Points with Sharp Contrast */}
            <div className="w-full mb-8 p-6 bg-white text-cobalt border-4 border-white shadow-white">
              <h3 className="font-mono font-extrabold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <Starburst className="w-5 h-5 text-cobalt" />
                <span>FOCUS AREAS & CAPABILITIES:</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono font-bold text-xs uppercase">
                {profileData.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-cobalt text-white flex items-center justify-center text-[10px] flex-shrink-0">
                      ✓
                    </span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sharp Contrast Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {profileData.cvUrl && (
                <a
                  href={profileData.cvUrl}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-cobalt font-mono font-extrabold text-xs sm:text-sm uppercase tracking-wider border-4 border-white shadow-white hover:bg-cobalt hover:text-white hover:border-white transition-all"
                >
                  <Download className="w-4 h-4 stroke-[3]" />
                  <span>Download Dossier (.PDF)</span>
                </a>
              )}

              <a
                href="#kontak"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-cobalt text-white font-mono font-extrabold text-xs sm:text-sm uppercase tracking-wider border-4 border-white shadow-white hover:bg-white hover:text-cobalt transition-all"
              >
                <span>Mulai Diskusi Visual</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
