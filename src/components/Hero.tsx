import React from 'react'
import { ArrowDown, Sparkles } from 'lucide-react'
import { profileData } from '../data/profile'
import { BarcodeStamp } from './Doodles'

export const Hero: React.FC = () => {
  return (
    <section
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b-4 border-cobalt bg-white overflow-hidden"
      aria-label="Pengenalan Hero"
    >
      {/* Background Halftone & Line Grids */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-halftone-cobalt opacity-40 pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-48 bg-stripes-cobalt-sm opacity-20 pointer-events-none -z-0" />

      {/* Marquee Ticker Tape at the top of Hero */}
      <div className="w-full bg-cobalt text-white border-y-2 border-cobalt py-1.5 overflow-hidden whitespace-nowrap mb-10 select-none">
        <div className="inline-block animate-marquee font-mono font-bold text-xs uppercase tracking-widest">
          ⚡ POWER BILIAH // VISUAL ARCHIVE 2026 ★ HIGH CONTRAST COBALT BLUE GRAPHIC ART ★ MANGA INK & SCREENTONE ★ ZERO PASTEL TOLERANCE ★ 100% PURE VECTOR & INK ★&nbsp;
        </div>
        <div className="inline-block animate-marquee font-mono font-bold text-xs uppercase tracking-widest" aria-hidden="true">
          ⚡ POWER BILIAH // VISUAL ARCHIVE 2026 ★ HIGH CONTRAST COBALT BLUE GRAPHIC ART ★ MANGA INK & SCREENTONE ★ ZERO PASTEL TOLERANCE ★ 100% PURE VECTOR & INK ★&nbsp;
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Sisi Kiri: Headline, Subtext, & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Zine Badge / Stamp */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-cobalt border-3 border-cobalt shadow-cobalt mb-6 font-mono font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-cobalt stroke-[2.5]" />
              <span>{profileData.statusBadge}</span>
            </div>

            {/* Headline Display: "Membawa cerita jadi visual yang berkarakter & bikin hati hangat." */}
            <h1 className="font-display font-extrabold text-cobalt leading-[1.08] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Membawa cerita jadi visual yang{' '}
              <span className="relative inline-block bg-cobalt text-white px-3 py-1 my-1 border-3 border-cobalt shadow-cobalt">
                berkarakter
              </span>{' '}
              & bikin hati hangat.
            </h1>

            {/* Subtext */}
            <p className="text-cobalt font-mono text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              // {profileData.tagline}
            </p>

            {/* 2 Heavy Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href="#karya"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cobalt text-white font-mono font-extrabold text-sm sm:text-base uppercase tracking-wider border-4 border-cobalt shadow-cobalt-lg hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 active:translate-x-1.5 active:translate-y-1.5 transition-all text-center"
              >
                <span>Lihat Koleksi Karya</span>
                <ArrowDown className="w-5 h-5 stroke-[3]" />
              </a>

              <a
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-cobalt font-mono font-extrabold text-sm sm:text-base uppercase tracking-wider border-4 border-cobalt shadow-cobalt-lg hover:bg-cobalt hover:text-white hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 active:translate-x-1.5 active:translate-y-1.5 transition-all text-center"
              >
                <span>Start up for free</span>
              </a>
            </div>

            {/* Tech Barcode Stamp */}
            <div className="pt-2 flex items-center gap-4">
              <BarcodeStamp className="w-32 h-8 text-cobalt" />
              <span className="text-xs font-mono font-bold text-cobalt uppercase tracking-widest border-l-2 border-cobalt pl-4">
                ISSUE #01 // GRAPHIC ZINE
              </span>
            </div>

          </div>

          {/* Sisi Kanan: Anime-Style Character Illustration in High-Contrast Cobalt Ink */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px]">
              
              {/* Outer Graphic Backdrop Box with Halftone Shadow */}
              <div className="absolute inset-0 bg-halftone-cobalt border-4 border-cobalt shadow-cobalt-xl translate-x-3 translate-y-3 -z-10" />

              {/* Main Illustration Container */}
              <div className="relative bg-white border-4 border-cobalt p-4">
                
                {/* Comic / Manga Character SVG */}
                <svg
                  viewBox="0 0 360 420"
                  className="w-full h-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Anime/manga style character illustration drawn in heavy cobalt ink"
                >
                  <defs>
                    <pattern id="manga-ht-hero" width="6" height="6" patternUnits="userSpaceOnUse">
                      <circle cx="3" cy="3" r="1.8" fill="#2242F5" />
                    </pattern>
                    <pattern id="manga-diag-hero" width="6" height="6" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="0" y2="6" stroke="#2242F5" strokeWidth="2.5" />
                    </pattern>
                  </defs>

                  {/* Dramatic Radial Speedburst Background */}
                  <g stroke="#2242F5" strokeWidth="3">
                    {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340].map((deg) => (
                      <line key={deg} x1="180" y1="210" x2="180" y2="20" strokeDasharray="12 12" transform={`rotate(${deg} 180 210)`} />
                    ))}
                  </g>

                  {/* Character Halo Disc */}
                  <circle cx="180" cy="200" r="140" fill="url(#manga-ht-hero)" stroke="#2242F5" strokeWidth="6" />
                  <circle cx="180" cy="200" r="115" fill="#FFFFFF" stroke="#2242F5" strokeWidth="6" />

                  {/* Shoulders & Jacket (Solid Cobalt Ink with Stark White Trim) */}
                  <path
                    d="M70 410C70 310 115 270 180 270C245 270 290 310 290 410H70Z"
                    fill="#2242F5"
                    stroke="#2242F5"
                    strokeWidth="8"
                  />
                  {/* Jacket Lapels in White */}
                  <path d="M140 270L180 340L220 270" fill="#FFFFFF" stroke="#2242F5" strokeWidth="6" />
                  {/* Inner Shirt with Diagonal Hatching */}
                  <polygon points="160,270 200,270 180,310" fill="url(#manga-diag-hero)" />

                  {/* Neck with Halftone Shadow */}
                  <rect x="160" y="220" width="40" height="55" fill="#FFFFFF" stroke="#2242F5" strokeWidth="6" />
                  <polygon points="160,240 200,240 180,265" fill="#2242F5" />

                  {/* Anime Jawline / Head in Stark White */}
                  <polygon
                    points="120,160 125,205 180,250 235,205 240,160"
                    fill="#FFFFFF"
                    stroke="#2242F5"
                    strokeWidth="8"
                  />

                  {/* Anime Eyes - Sharp Manga Ink Style */}
                  {/* Left Eye */}
                  <g>
                    <path d="M135 180L165 175" stroke="#2242F5" strokeWidth="7" strokeLinecap="round" />
                    <ellipse cx="150" cy="192" rx="12" ry="15" fill="#2242F5" />
                    <circle cx="147" cy="188" r="4.5" fill="#FFFFFF" />
                    <circle cx="155" cy="198" r="2.5" fill="#FFFFFF" />
                    <path d="M140 204C145 208 155 208 160 204" stroke="#2242F5" strokeWidth="4" />
                  </g>
                  {/* Right Eye */}
                  <g>
                    <path d="M195 175L225 180" stroke="#2242F5" strokeWidth="7" strokeLinecap="round" />
                    <ellipse cx="210" cy="192" rx="12" ry="15" fill="#2242F5" />
                    <circle cx="207" cy="188" r="4.5" fill="#FFFFFF" />
                    <circle cx="215" cy="198" r="2.5" fill="#FFFFFF" />
                    <path d="M200 204C205 208 215 208 220 204" stroke="#2242F5" strokeWidth="4" />
                  </g>

                  {/* Screentone Anime Blush */}
                  <g>
                    <rect x="130" y="210" width="25" height="10" fill="url(#manga-ht-hero)" />
                    <line x1="132" y1="212" x2="142" y2="220" stroke="#2242F5" strokeWidth="2.5" />
                    <line x1="138" y1="212" x2="148" y2="220" stroke="#2242F5" strokeWidth="2.5" />
                    
                    <rect x="205" y="210" width="25" height="10" fill="url(#manga-ht-hero)" />
                    <line x1="212" y1="212" x2="222" y2="220" stroke="#2242F5" strokeWidth="2.5" />
                    <line x1="218" y1="212" x2="228" y2="220" stroke="#2242F5" strokeWidth="2.5" />
                  </g>

                  {/* Nose & Confident Smirk */}
                  <polygon points="178,210 182,210 180,217" fill="#2242F5" />
                  <path d="M172 230C176 235 186 235 190 230" stroke="#2242F5" strokeWidth="5" strokeLinecap="round" />

                  {/* Dynamic Anime Spiky Hair with Solid Ink & Negative Light */}
                  <path
                    d="M100 160L90 100L135 125L145 60L185 105L210 50L230 110L270 90L260 160L280 200L250 200L240 160C240 120 120 120 120 160L110 200L80 200Z"
                    fill="#2242F5"
                    stroke="#2242F5"
                    strokeWidth="6"
                  />
                  {/* Front Hair Bangs cutting over forehead */}
                  <polygon points="135,125 150,170 165,130" fill="#2242F5" stroke="#FFFFFF" strokeWidth="3" />
                  <polygon points="170,130 185,175 195,135" fill="#2242F5" stroke="#FFFFFF" strokeWidth="3" />
                  <polygon points="195,135 215,165 225,125" fill="#2242F5" stroke="#FFFFFF" strokeWidth="3" />

                  {/* Stylus Pen in Hand */}
                  <g transform="translate(230, 280) rotate(-20)">
                    <rect x="0" y="0" width="16" height="90" rx="4" fill="#2242F5" stroke="#FFFFFF" strokeWidth="3" />
                    <polygon points="0,90 16,90 8,115" fill="#FFFFFF" stroke="#2242F5" strokeWidth="3" />
                    <circle cx="8" cy="20" r="4" fill="#FFFFFF" />
                  </g>

                  {/* Comic Action Star Emblems */}
                  <polygon points="50,60 55,75 70,80 55,85 50,100 45,85 30,80 45,75" fill="#2242F5" />
                  <polygon points="310,130 314,142 326,146 314,150 310,162 306,150 294,146 306,142" fill="#2242F5" />
                </svg>

                {/* Floating Corner Badges in Stark Cobalt & White */}
                <div className="absolute -top-4 -left-4 bg-cobalt text-white font-mono font-extrabold text-xs px-3 py-1.5 border-3 border-cobalt shadow-cobalt">
                  ★ ORIGINAL INK
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white text-cobalt font-mono font-extrabold text-xs px-3 py-1.5 border-3 border-cobalt shadow-cobalt">
                  MANGA // #2242F5
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
