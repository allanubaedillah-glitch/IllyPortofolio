import React from 'react'
import { Download, Sparkles, Heart, CheckCircle2 } from 'lucide-react'
import { profileData } from '../data/profile'

export const About: React.FC = () => {

  return (
    <section
      id="tentang"
      className="py-20 md:py-28 bg-cream-50/70 border-y-2 border-peach relative overflow-hidden"
      aria-label="Tentang Anya Maharani"
    >
      {/* Decorative ambient blobs */}
      <div className="absolute top-10 right-0 w-[350px] h-[350px] bg-lilac/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[320px] h-[320px] bg-mint/35 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Badge */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-peach border-2 border-plum-900 shadow-sticker mb-4">
            <Heart className="w-4 h-4 text-coral fill-coral" />
            <span className="font-display font-bold text-xs uppercase tracking-wider text-plum-900">
              Mengenal Lebih Dekat
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-plum-900 mb-4 tracking-tight">
            Di Balik Setiap Goresan & Warna
          </h2>
          <p className="text-plum-800 text-base sm:text-lg max-w-xl">
            Dari sketsa kasar di atas kertas hingga jadi aset visual yang berkarakter kuat untuk proyekmu.
          </p>
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Kolom Kiri: Foto / Ilustrasi Diri dengan Bingkai Blob Organik */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[290px] h-[340px] sm:w-[340px] sm:h-[400px]">
              {/* Organic Frame Layer 1 */}
              <div className="absolute inset-0 bg-lilac blob-shape-3 border-3 border-plum-900 shadow-sticker-lg" />
              {/* Organic Frame Layer 2 */}
              <div className="absolute inset-2 bg-peach blob-shape-1 border-2 border-plum-900/30" />

              {/* Portrait Content (Cute Stylized Illustrator Portrait SVG) */}
              <div className="relative z-10 w-full h-full p-4 flex items-center justify-center overflow-hidden">
                <svg
                  viewBox="0 0 320 380"
                  className="w-full h-full drop-shadow-sm"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Potret diri Anya Maharani"
                >
                  {/* Backdrop Glow */}
                  <circle cx="160" cy="180" r="120" fill="#FFF8F1" />
                  
                  {/* Shoulders & Clothing */}
                  <path
                    d="M80 360C80 280 120 250 160 250C200 250 240 280 240 360H80Z"
                    fill="#FF8A7A"
                    stroke="#2B2340"
                    strokeWidth="6"
                  />
                  {/* Floral Pattern on sweater */}
                  <circle cx="120" cy="300" r="8" fill="#FFF8F1" />
                  <circle cx="190" cy="320" r="8" fill="#FFF8F1" />
                  <circle cx="150" cy="340" r="7" fill="#CDEFE0" />

                  {/* Neck */}
                  <rect x="145" y="210" width="30" height="45" rx="8" fill="#FFD8C2" stroke="#2B2340" strokeWidth="5" />

                  {/* Face Head */}
                  <ellipse cx="160" cy="165" rx="52" ry="56" fill="#FFD8C2" stroke="#2B2340" strokeWidth="6" />

                  {/* Hair */}
                  <path
                    d="M105 160C105 100 215 100 215 160C215 210 205 220 205 220C205 220 200 160 160 160C120 160 115 220 115 220C115 220 105 210 105 160Z"
                    fill="#2B2340"
                  />

                  {/* Headband / Ribbon */}
                  <path
                    d="M108 135C125 110 195 110 212 135"
                    stroke="#CDEFE0"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <polygon points="120,110 135,120 120,130" fill="#CDEFE0" stroke="#2B2340" strokeWidth="3" />

                  {/* Friendly Eyes with smile crinkle */}
                  <path d="M135 160C140 152 148 152 153 160" stroke="#2B2340" strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M167 160C172 152 180 152 185 160" stroke="#2B2340" strokeWidth="4.5" strokeLinecap="round" />

                  {/* Rosy Cheeks */}
                  <circle cx="132" cy="175" r="9" fill="#FF8A7A" opacity="0.6" />
                  <circle cx="188" cy="175" r="9" fill="#FF8A7A" opacity="0.6" />

                  {/* Smile */}
                  <path
                    d="M152 182C156 190 164 190 168 182"
                    stroke="#2B2340"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  {/* Earrings */}
                  <circle cx="106" cy="178" r="5" fill="#FFAF87" stroke="#2B2340" strokeWidth="2.5" />
                  <circle cx="214" cy="178" r="5" fill="#FFAF87" stroke="#2B2340" strokeWidth="2.5" />
                </svg>
              </div>

              {/* Floating Mini Sticker 1 */}
              <div className="absolute -top-3 -left-3 bg-mint text-plum-900 border-2 border-plum-900 rounded-2xl px-3 py-1.5 shadow-sticker rotate-[-8deg]">
                <span className="text-xs font-display font-bold">Creative Soul 🎨</span>
              </div>

              {/* Floating Mini Sticker 2 */}
              <div className="absolute -bottom-3 -right-3 bg-cream-50 text-plum-900 border-2 border-plum-900 rounded-2xl px-3.5 py-1.5 shadow-sticker rotate-[6deg]">
                <span className="text-xs font-display font-bold">Tea & Pixels 🍵</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Bio Naratif & Keahlian */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Natural Warm Bio */}
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-plum-900 mb-4">
              Halo! Mari ciptakan sesuatu yang berkesan bersama.
            </h3>
            
            <p className="text-plum-900 font-normal text-base sm:text-lg leading-relaxed mb-4">
              {profileData.bio}
            </p>

            <p className="text-plum-800 text-sm sm:text-base leading-relaxed mb-8">
              {profileData.aboutDetail}
            </p>

            {/* Fun Facts Grid (3-4 item) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {profileData.funFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-cream-100 border-2 border-plum-900/20 shadow-sm flex items-start gap-3 hover:border-plum-900 hover:shadow-sticker transition-all"
                >
                  <span className="text-2xl p-2 rounded-xl bg-peach/40 flex-shrink-0">
                    {fact.emoji}
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-sm text-plum-900 mb-0.5">
                      {fact.title}
                    </h4>
                    <p className="text-xs text-plum-800/90 leading-snug">
                      {fact.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills & Tools Chips */}
            <div className="mb-8">
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-plum-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-coral" />
                <span>Alat & Fokus Keahlian</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {profileData.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border ${
                      skill.highlight
                        ? 'bg-peach text-plum-900 border-plum-900 shadow-sm'
                        : 'bg-cream-100 text-plum-800 border-plum-900/20'
                    }`}
                  >
                    <CheckCircle2 className={`w-3.5 h-3.5 ${skill.highlight ? 'text-coral' : 'text-mint-dark'}`} />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action: CV Download Button (Hidden or clearly indicated if not provided) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {profileData.cvUrl && profileData.cvUrl.trim() !== '' ? (
                <a
                  href={profileData.cvUrl}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cream-50 hover:bg-peach text-plum-900 font-display font-bold text-sm border-2 border-plum-900 shadow-sticker hover:shadow-sticker-hover hover:-translate-y-0.5 active:translate-y-0.5 transition-all"
                >
                  <Download className="w-4 h-4 text-coral" />
                  <span>Unduh CV & Resume (.pdf)</span>
                </a>
              ) : null}

              <a
                href="#kontak"
                className="inline-flex items-center gap-1.5 text-sm font-display font-bold text-coral hover:text-coral-dark underline underline-offset-4 decoration-2"
              >
                Langsung ajak ngobrol via kontak ↓
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
