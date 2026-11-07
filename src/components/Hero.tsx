import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowDown, MessageCircle, Sparkles } from 'lucide-react'
import { profileData } from '../data/profile'
import { StarDoodle, SquiggleDoodle, SmileyDoodle, FlowerDoodle } from './Doodles'

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  // Parallax subtle shifts (disabled if prefers-reduced-motion)
  const charY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 60])
  const doodleY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -40])
  const textY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 30])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
      aria-label="Pengenalan Singkat"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-12 left-[-10%] w-[320px] h-[320px] md:w-[480px] md:h-[480px] bg-peach/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-[-5%] w-[300px] h-[300px] md:w-[420px] md:h-[420px] bg-lilac/45 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/3 w-[260px] h-[260px] bg-mint/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Animated Doodles */}
      <motion.div
        style={{ y: doodleY }}
        className="absolute top-24 left-6 md:left-20 pointer-events-none hidden sm:block animate-float-slow"
      >
        <StarDoodle className="w-8 h-8 text-coral drop-shadow-sm" />
      </motion.div>

      <motion.div
        style={{ y: doodleY }}
        className="absolute bottom-28 left-12 pointer-events-none hidden md:block animate-float-reverse"
      >
        <SmileyDoodle className="w-12 h-12" bgColor="#CDEFE0" strokeColor="#2B2340" />
      </motion.div>

      <motion.div
        style={{ y: doodleY }}
        className="absolute top-32 right-12 md:right-28 pointer-events-none hidden sm:block animate-wiggle-slow"
      >
        <FlowerDoodle className="w-10 h-10 text-lilac centerColor='#FF8A7A'" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Sisi Kiri: Headline, Tagline, & Tombol CTA */}
          <motion.div
            style={{ y: textY }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Friendly Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peach border-2 border-plum-900 shadow-sticker mb-6 rotate-[-1deg] hover:rotate-0 transition-transform">
              <Sparkles className="w-4 h-4 text-coral animate-pulse" />
              <span className="font-display font-bold text-xs sm:text-sm text-plum-900">
                Halo, saya {profileData.name} ({profileData.handle})
              </span>
            </div>

            {/* Scalable Clamp Headline */}
            <h1 className="font-display font-bold text-plum-900 leading-[1.18] tracking-tight text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 break-words">
              Membawa cerita jadi visual yang{' '}
              <span className="relative inline-block px-2 py-0.5 my-1">
                <span className="relative z-10 text-plum-900">berkarakter</span>
                <span className="absolute inset-0 bg-mint rounded-2xl -rotate-1 border-2 border-plum-900 shadow-sticker -z-0" />
              </span>{' '}
              & bikin hati hangat.
            </h1>

            {/* Tagline / Subtext */}
            <p className="text-plum-800 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-xl mb-8">
              {profileData.tagline}
            </p>

            {/* 2 CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#karya"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-coral hover:bg-coral-hover text-cream-50 font-display font-bold text-base sm:text-lg border-2 border-plum-900 shadow-sticker hover:shadow-sticker-hover hover:-translate-y-0.5 active:translate-y-0.5 transition-all text-center"
              >
                <span>Lihat Koleksi Karya</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-cream-50 hover:bg-peach/50 text-plum-900 font-display font-bold text-base sm:text-lg border-2 border-plum-900 shadow-sticker hover:shadow-sticker-hover hover:-translate-y-0.5 active:translate-y-0.5 transition-all text-center"
              >
                <MessageCircle className="w-5 h-5 text-coral" />
                <span>Yuk Ngobrol Santai</span>
              </a>
            </div>

            {/* Squiggle Decoration */}
            <div className="mt-8 pt-2">
              <SquiggleDoodle className="w-24 h-4 text-coral opacity-80" />
            </div>
          </motion.div>

          {/* Sisi Kanan: Karakter Ilustrator SVG & Sticker Art */}
          <motion.div
            style={{ y: charY }}
            className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0"
          >
            {/* Soft colored organic backdrop badge */}
            <div className="relative w-[280px] h-[320px] sm:w-[340px] sm:h-[390px] flex items-center justify-center">
              
              {/* Organic blob background */}
              <div className="absolute inset-0 bg-lilac/70 blob-shape-1 border-3 border-plum-900 shadow-sticker-lg" />
              <div className="absolute inset-2 bg-peach/50 blob-shape-2" />

              {/* Character Illustration SVG */}
              <div className="relative z-10 w-full h-full p-4 flex items-center justify-center">
                <svg
                  viewBox="0 0 360 400"
                  className="w-full h-full drop-shadow-md"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Ilustrasi Anya sedang menggambar dengan tablet kreatif"
                >
                  {/* Floating Palette Dots */}
                  <circle cx="60" cy="70" r="14" fill="#FF8A7A" stroke="#2B2340" strokeWidth="4" />
                  <circle cx="310" cy="90" r="18" fill="#CDEFE0" stroke="#2B2340" strokeWidth="4" />
                  <circle cx="320" cy="270" r="12" fill="#FFAF87" stroke="#2B2340" strokeWidth="3" />

                  {/* Character Body / Shoulders */}
                  <path
                    d="M100 370C100 290 140 265 180 265C220 265 260 290 260 370H100Z"
                    fill="#CDEFE0"
                    stroke="#2B2340"
                    strokeWidth="6"
                  />
                  {/* Sweater Collar */}
                  <path
                    d="M150 265C160 280 200 280 210 265"
                    stroke="#2B2340"
                    strokeWidth="5"
                    fill="#FFF8F1"
                  />

                  {/* Neck */}
                  <rect x="165" y="225" width="30" height="45" rx="8" fill="#FFD8C2" stroke="#2B2340" strokeWidth="5" />

                  {/* Head */}
                  <ellipse cx="180" cy="180" rx="55" ry="58" fill="#FFD8C2" stroke="#2B2340" strokeWidth="6" />

                  {/* Hair Base */}
                  <path
                    d="M125 180C125 110 235 110 235 180C235 220 230 230 230 230C230 230 220 180 180 180C140 180 130 230 130 230C130 230 125 220 125 180Z"
                    fill="#2B2340"
                  />
                  
                  {/* Playful Lilac Beret Hat */}
                  <path
                    d="M115 140C110 90 250 90 245 140C255 145 220 160 180 155C140 160 105 145 115 140Z"
                    fill="#DCCFF5"
                    stroke="#2B2340"
                    strokeWidth="6"
                  />
                  {/* Beret little stalk */}
                  <rect x="177" y="90" width="6" height="14" rx="3" fill="#2B2340" />

                  {/* Glasses */}
                  <circle cx="155" cy="180" r="18" fill="#FFFFFF" fillOpacity="0.4" stroke="#2B2340" strokeWidth="5" />
                  <circle cx="205" cy="180" r="18" fill="#FFFFFF" fillOpacity="0.4" stroke="#2B2340" strokeWidth="5" />
                  <line x1="173" y1="180" x2="187" y2="180" stroke="#2B2340" strokeWidth="5" />

                  {/* Cheerful Eyes & Blush */}
                  <circle cx="155" cy="180" r="4.5" fill="#2B2340" />
                  <circle cx="205" cy="180" r="4.5" fill="#2B2340" />
                  <circle cx="140" cy="195" r="10" fill="#FF8A7A" opacity="0.6" />
                  <circle cx="220" cy="195" r="10" fill="#FF8A7A" opacity="0.6" />

                  {/* Smile */}
                  <path
                    d="M172 202C176 208 184 208 188 202"
                    stroke="#2B2340"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  {/* Tablet & Stylus in Hand */}
                  <g transform="translate(180, 280) rotate(-10)">
                    <rect x="0" y="0" width="100" height="75" rx="12" fill="#2B2340" stroke="#FFF8F1" strokeWidth="3" />
                    <rect x="8" y="8" width="84" height="59" rx="6" fill="#CDEFE0" />
                    {/* Doodle on screen */}
                    <path d="M25 40C35 25 55 50 75 35" stroke="#FF8A7A" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="70" cy="30" r="3" fill="#FF8A7A" />
                  </g>

                  {/* Stylus */}
                  <rect x="235" y="260" width="8" height="45" rx="4" fill="#FFAF87" stroke="#2B2340" strokeWidth="3" transform="rotate(35 235 260)" />
                </svg>
              </div>

              {/* Floating Badge Sticker */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 bg-cream-50 border-2 border-plum-900 rounded-2xl px-3.5 py-2 shadow-sticker rotate-[-6deg] hover:rotate-0 transition-transform">
                <span className="text-xs font-display font-bold text-plum-900 flex items-center gap-1.5">
                  <span className="text-base">✨</span> Character & Vector Lover
                </span>
              </div>

              {/* Floating Procreate/Pen sticker */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-coral text-cream-50 border-2 border-plum-900 rounded-2xl px-3 py-1.5 shadow-sticker rotate-[8deg] hover:rotate-0 transition-transform">
                <span className="text-xs font-display font-bold flex items-center gap-1">
                  100% Original Art ✏️
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
