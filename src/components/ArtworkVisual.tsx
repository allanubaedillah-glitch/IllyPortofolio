import React from 'react'
import { WorkItem } from '../data/works'

interface ArtworkVisualProps {
  work: WorkItem
  className?: string
  priority?: boolean
}

export const ArtworkVisual: React.FC<ArtworkVisualProps> = ({ work, className = '', priority = false }) => {
  // Jika gambar nyata disediakan
  if (work.imageSrc && work.imageSrc.trim() !== '') {
    return (
      <img
        src={work.imageSrc}
        alt={`Karya visual: ${work.title} - ${work.category}`}
        loading={priority ? 'eager' : 'lazy'}
        className={`w-full h-full object-cover transition-transform duration-500 ${className}`}
      />
    )
  }

  // Placeholder SVG vektor ilustrasi buatan sendiri dengan tema pastel
  const renderSvgArtwork = () => {
    switch (work.placeholderType) {
      case 'momo-mascot':
        return (
          <svg viewBox="0 0 400 450" className="w-full h-full p-4 drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background Blob */}
            <path d="M60 120C40 220 70 380 200 400C330 420 360 270 340 150C320 30 180 20 60 120Z" fill="#FFF0E6" />
            {/* Bear Ears */}
            <circle cx="130" cy="110" r="38" fill="#FFAF87" stroke="#2B2340" strokeWidth="6" />
            <circle cx="130" cy="110" r="20" fill="#FFD8C2" />
            <circle cx="270" cy="110" r="38" fill="#FFAF87" stroke="#2B2340" strokeWidth="6" />
            <circle cx="270" cy="110" r="20" fill="#FFD8C2" />
            {/* Chef Hat */}
            <path d="M160 85C150 40 250 40 240 85Z" fill="#FFFFFF" stroke="#2B2340" strokeWidth="6" />
            <rect x="165" y="80" width="70" height="20" rx="6" fill="#DCCFF5" stroke="#2B2340" strokeWidth="5" />
            {/* Head */}
            <ellipse cx="200" cy="200" rx="100" ry="85" fill="#FFAF87" stroke="#2B2340" strokeWidth="7" />
            {/* Cheeks */}
            <circle cx="140" cy="225" r="16" fill="#FF8A7A" opacity="0.6" />
            <circle cx="260" cy="225" r="16" fill="#FF8A7A" opacity="0.6" />
            {/* Eyes */}
            <ellipse cx="160" cy="190" rx="9" ry="12" fill="#2B2340" />
            <circle cx="163" cy="186" r="3.5" fill="#FFFFFF" />
            <ellipse cx="240" cy="190" rx="9" ry="12" fill="#2B2340" />
            <circle cx="243" cy="186" r="3.5" fill="#FFFFFF" />
            {/* Snout & Nose */}
            <ellipse cx="200" cy="220" rx="32" ry="24" fill="#FFF8F1" stroke="#2B2340" strokeWidth="5" />
            <path d="M190 212C195 208 205 208 210 212C208 219 192 219 190 212Z" fill="#2B2340" />
            <path d="M200 220V232M193 230C197 235 203 235 207 230" stroke="#2B2340" strokeWidth="4" strokeLinecap="round" />
            {/* Body & Apron */}
            <path d="M130 280C110 320 110 370 120 410H280C290 370 290 320 270 280Z" fill="#FFAF87" stroke="#2B2340" strokeWidth="7" />
            <path d="M150 285L200 340L250 285" fill="#CDEFE0" stroke="#2B2340" strokeWidth="5" />
            <circle cx="200" cy="370" r="10" fill="#FF8A7A" stroke="#2B2340" strokeWidth="4" />
            {/* Sparkles */}
            <path d="M90 70L95 85L110 90L95 95L90 110L85 95L70 90L85 85Z" fill="#FF8A7A" />
            <path d="M310 280L314 290L325 294L314 298L310 310L306 298L295 294L306 290Z" fill="#DCCFF5" />
          </svg>
        )

      case 'kopi-senja':
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full p-4 drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="160" fill="#FFF0E6" stroke="#2B2340" strokeWidth="6" strokeDasharray="8 8" />
            {/* Coffee Saucer & Cup */}
            <ellipse cx="200" cy="280" rx="90" ry="24" fill="#CDEFE0" stroke="#2B2340" strokeWidth="6" />
            <ellipse cx="200" cy="275" rx="70" ry="16" fill="#EEFAF4" />
            <path d="M140 220C140 280 260 280 260 220Z" fill="#DCCFF5" stroke="#2B2340" strokeWidth="6" />
            <path d="M255 230C280 230 280 260 255 260" stroke="#2B2340" strokeWidth="6" strokeLinecap="round" />
            <ellipse cx="200" cy="220" rx="60" ry="18" fill="#5A3E2E" stroke="#2B2340" strokeWidth="5" />
            {/* Latte Heart Art */}
            <path d="M190 216C185 210 195 206 200 214C205 206 215 210 210 216L200 224Z" fill="#FFF8F1" />
            {/* Steam Aromatics */}
            <path d="M185 180C175 160 195 140 185 120" stroke="#FFAF87" strokeWidth="5" strokeLinecap="round" />
            <path d="M215 175C225 155 205 135 215 115" stroke="#FF8A7A" strokeWidth="5" strokeLinecap="round" />
            {/* Croissant sticker */}
            <g transform="translate(80, 100) rotate(-15)">
              <ellipse cx="40" cy="30" rx="30" ry="18" fill="#FFAF87" stroke="#2B2340" strokeWidth="4" />
              <path d="M20 20C30 35 50 35 60 20" stroke="#2B2340" strokeWidth="3" />
            </g>
          </svg>
        )

      case 'hutan-fantasi':
        return (
          <svg viewBox="0 0 500 350" className="w-full h-full p-4" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Moon & Night sky backdrop */}
            <rect x="20" y="20" width="460" height="310" rx="30" fill="#2B2340" />
            <circle cx="380" cy="90" r="50" fill="#DCCFF5" opacity="0.8" />
            <circle cx="370" cy="85" r="45" fill="#2B2340" />
            {/* Layered Mountains */}
            <path d="M20 290L140 170L240 280L360 150L480 300V330H20Z" fill="#3D3356" />
            <path d="M60 330L190 200L290 310L420 180L480 270V330H60Z" fill="#58B98F" opacity="0.7" />
            {/* Glowing Trees */}
            <polygon points="120,290 85,330 155,330" fill="#CDEFE0" stroke="#2B2340" strokeWidth="4" />
            <polygon points="180,260 145,310 215,310" fill="#A3E7C9" stroke="#2B2340" strokeWidth="4" />
            <polygon points="320,270 290,320 350,320" fill="#DCCFF5" stroke="#2B2340" strokeWidth="4" />
            {/* Fireflies with glowing halos */}
            <circle cx="160" cy="140" r="14" fill="#FF8A7A" opacity="0.3" />
            <circle cx="160" cy="140" r="6" fill="#FFF0E6" />
            <circle cx="280" cy="110" r="18" fill="#CDEFE0" opacity="0.4" />
            <circle cx="280" cy="110" r="7" fill="#FFFFFF" />
            <circle cx="230" cy="190" r="12" fill="#FFAF87" opacity="0.4" />
            <circle cx="230" cy="190" r="5" fill="#FFF8F1" />
            <circle cx="340" cy="220" r="15" fill="#DCCFF5" opacity="0.5" />
            <circle cx="340" cy="220" r="6" fill="#FFFFFF" />
          </svg>
        )

      case 'robot-kebun':
        return (
          <svg viewBox="0 0 400 450" className="w-full h-full p-4" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Antenna with bulb */}
            <line x1="200" y1="110" x2="200" y2="70" stroke="#2B2340" strokeWidth="6" />
            <circle cx="200" cy="65" r="16" fill="#FF8A7A" stroke="#2B2340" strokeWidth="5" />
            {/* Robot Head */}
            <rect x="130" y="110" width="140" height="110" rx="24" fill="#CDEFE0" stroke="#2B2340" strokeWidth="6" />
            {/* Screen visor */}
            <rect x="150" y="130" width="100" height="50" rx="14" fill="#2B2340" />
            {/* Glowing friendly eyes */}
            <circle cx="175" cy="155" r="9" fill="#FFAF87" />
            <circle cx="225" cy="155" r="9" fill="#FFAF87" />
            {/* Cheerful mouth */}
            <path d="M185 195C193 203 207 203 215 195" stroke="#2B2340" strokeWidth="5" strokeLinecap="round" />
            {/* Neck joint */}
            <rect x="180" y="220" width="40" height="20" rx="4" fill="#DCCFF5" stroke="#2B2340" strokeWidth="5" />
            {/* Body */}
            <rect x="115" y="240" width="170" height="130" rx="30" fill="#DCCFF5" stroke="#2B2340" strokeWidth="6" />
            {/* Watering can in arm */}
            <path d="M80 270L120 280M280 280L320 290" stroke="#2B2340" strokeWidth="6" strokeLinecap="round" />
            {/* Flower growing in chest gauge */}
            <circle cx="200" cy="305" r="28" fill="#FFF8F1" stroke="#2B2340" strokeWidth="4" />
            <circle cx="200" cy="305" r="10" fill="#FF8A7A" />
            <path d="M200 290V280M200 320V330M185 305H175M215 305H225" stroke="#58B98F" strokeWidth="4" strokeLinecap="round" />
            {/* Sunflower bud */}
            <circle cx="330" cy="310" r="14" fill="#FFAF87" stroke="#2B2340" strokeWidth="4" />
            <path d="M330 324V360" stroke="#58B98F" strokeWidth="5" strokeLinecap="round" />
          </svg>
        )

      case 'festival-musim-semi':
        return (
          <svg viewBox="0 0 400 450" className="w-full h-full p-4" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Clouds */}
            <ellipse cx="120" cy="80" rx="50" ry="24" fill="#FFFFFF" opacity="0.9" />
            <ellipse cx="280" cy="140" rx="60" ry="28" fill="#FFFFFF" opacity="0.9" />
            {/* Big Diamond Kite */}
            <g transform="translate(140, 100) rotate(15)">
              <polygon points="50,0 100,70 50,140 0,70" fill="#FF8A7A" stroke="#2B2340" strokeWidth="5" />
              <line x1="50" y1="0" x2="50" y2="140" stroke="#2B2340" strokeWidth="4" />
              <line x1="0" y1="70" x2="100" y2="70" stroke="#2B2340" strokeWidth="4" />
              {/* Ribbons */}
              <path d="M50 140C60 170 30 190 55 220" stroke="#2B2340" strokeWidth="3.5" strokeDasharray="6 4" />
              <polygon points="52,165 64,168 55,178" fill="#CDEFE0" stroke="#2B2340" strokeWidth="2" />
              <polygon points="36,195 48,198 39,208" fill="#DCCFF5" stroke="#2B2340" strokeWidth="2" />
            </g>
            {/* Small Bird Kite */}
            <path d="M70 240C90 220 120 220 140 240C160 220 190 220 210 240" stroke="#2B2340" strokeWidth="5" strokeLinecap="round" />
            {/* Sunny Hill Ground */}
            <path d="M0 380C120 330 280 340 400 390V450H0Z" fill="#CDEFE0" stroke="#2B2340" strokeWidth="6" />
          </svg>
        )

      case 'ruang-baca':
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full p-4" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Cozy Window */}
            <rect x="70" y="50" width="140" height="160" rx="16" fill="#DCCFF5" stroke="#2B2340" strokeWidth="5" />
            <line x1="140" y1="50" x2="140" y2="210" stroke="#2B2340" strokeWidth="4" />
            <line x1="70" y1="130" x2="210" y2="130" stroke="#2B2340" strokeWidth="4" />
            {/* Hanging Pothos Plant */}
            <path d="M120 40V70" stroke="#2B2340" strokeWidth="3" />
            <ellipse cx="120" cy="75" rx="16" ry="10" fill="#FFAF87" stroke="#2B2340" strokeWidth="3" />
            <path d="M110 85C100 110 130 130 115 150" stroke="#58B98F" strokeWidth="4" strokeLinecap="round" />
            {/* Warm Reading Lamp */}
            <path d="M260 90L290 140H230Z" fill="#FF8A7A" stroke="#2B2340" strokeWidth="5" />
            <path d="M260 140V280" stroke="#2B2340" strokeWidth="5" />
            <path d="M235 280H285" stroke="#2B2340" strokeWidth="6" strokeLinecap="round" />
            {/* Lamp Light Glow */}
            <polygon points="230,140 180,320 340,320 290,140" fill="#FFEADB" opacity="0.45" />
            {/* Stack of books on shelf */}
            <rect x="80" y="270" width="130" height="24" rx="4" fill="#CDEFE0" stroke="#2B2340" strokeWidth="4" />
            <rect x="95" y="246" width="105" height="24" rx="4" fill="#FFD8C2" stroke="#2B2340" strokeWidth="4" />
            <rect x="110" y="222" width="80" height="24" rx="4" fill="#DCCFF5" stroke="#2B2340" strokeWidth="4" />
          </svg>
        )

      case 'kemasan-teh':
        return (
          <svg viewBox="0 0 400 450" className="w-full h-full p-4" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Canister Body */}
            <rect x="110" y="100" width="180" height="260" rx="36" fill="#FFF8F1" stroke="#2B2340" strokeWidth="6" />
            {/* Wooden Lid */}
            <rect x="120" y="70" width="160" height="36" rx="14" fill="#FFAF87" stroke="#2B2340" strokeWidth="5" />
            {/* Label Center Wrap */}
            <rect x="110" y="150" width="180" height="150" fill="#CDEFE0" stroke="#2B2340" strokeWidth="4" />
            {/* Chamomile Botanical Flower */}
            <g transform="translate(200, 215)">
              <circle cx="0" cy="0" r="16" fill="#FF8A7A" stroke="#2B2340" strokeWidth="3" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <ellipse
                  key={i}
                  cx="0"
                  cy="-28"
                  rx="7"
                  ry="14"
                  fill="#FFFFFF"
                  stroke="#2B2340"
                  strokeWidth="2.5"
                  transform={`rotate(${angle})`}
                />
              ))}
            </g>
            <text x="200" y="280" textAnchor="middle" fill="#2B2340" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
              CHAMOMILE BLISS
            </text>
            <text x="200" y="340" textAnchor="middle" fill="#FFAF87" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
              ✦ 100% ARTISAN LEAF ✦
            </text>
          </svg>
        )

      case 'stiker-kucing':
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full p-4" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Cat with White Sticker Outline */}
            <g transform="translate(40, 40)">
              {/* Outer white die-cut contour */}
              <circle cx="160" cy="160" r="140" fill="#FFFFFF" stroke="#2B2340" strokeWidth="5" strokeDasharray="6 6" />
              {/* Cat Ears */}
              <polygon points="90,130 110,60 160,110" fill="#FF8A7A" stroke="#2B2340" strokeWidth="6" />
              <polygon points="105,120 115,80 145,110" fill="#FFF0E6" />
              <polygon points="230,130 210,60 160,110" fill="#FF8A7A" stroke="#2B2340" strokeWidth="6" />
              <polygon points="215,120 205,80 175,110" fill="#FFF0E6" />
              {/* Cat Face */}
              <ellipse cx="160" cy="160" rx="80" ry="70" fill="#FFAF87" stroke="#2B2340" strokeWidth="6" />
              {/* Sleepy Happy Eyes */}
              <path d="M125 155C135 145 145 155 145 155" stroke="#2B2340" strokeWidth="5" strokeLinecap="round" />
              <path d="M175 155C185 145 195 155 195 155" stroke="#2B2340" strokeWidth="5" strokeLinecap="round" />
              {/* Pink Nose & Whiskers */}
              <polygon points="160,165 155,172 165,172" fill="#FF705F" />
              <path d="M160 172V178M154 176C157 180 163 180 166 176" stroke="#2B2340" strokeWidth="3" />
              <line x1="100" y1="165" x2="70" y2="160" stroke="#2B2340" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="100" y1="175" x2="70" y2="180" stroke="#2B2340" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="220" y1="165" x2="250" y2="160" stroke="#2B2340" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="220" y1="175" x2="250" y2="180" stroke="#2B2340" strokeWidth="3.5" strokeLinecap="round" />
            </g>
          </svg>
        )

      case 'poster-bumi':
      default:
        return (
          <svg viewBox="0 0 500 350" className="w-full h-full p-4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="460" height="310" rx="28" fill="#EEFAF4" stroke="#2B2340" strokeWidth="5" />
            {/* Friendly Planet Earth */}
            <circle cx="250" cy="175" r="100" fill="#CDEFE0" stroke="#2B2340" strokeWidth="6" />
            {/* Continents */}
            <path d="M200 130C210 110 240 120 250 140C260 160 220 180 200 160Z" fill="#58B98F" />
            <path d="M260 190C280 180 310 200 290 220C270 230 250 210 260 190Z" fill="#58B98F" />
            {/* Cheerful Smiley Face on Earth */}
            <circle cx="230" cy="170" r="6" fill="#2B2340" />
            <circle cx="270" cy="170" r="6" fill="#2B2340" />
            <path d="M240 190C246 198 254 198 260 190" stroke="#2B2340" strokeWidth="4" strokeLinecap="round" />
            <circle cx="218" cy="180" r="8" fill="#FF8A7A" opacity="0.6" />
            <circle cx="282" cy="180" r="8" fill="#FF8A7A" opacity="0.6" />
            {/* Sprout atop */}
            <path d="M250 75V55" stroke="#2B2340" strokeWidth="4" strokeLinecap="round" />
            <path d="M250 55C240 45 225 55 235 65C245 75 250 55 250 55Z" fill="#58B98F" stroke="#2B2340" strokeWidth="3" />
            <path d="M250 60C260 50 275 60 265 70C255 80 250 60 250 60Z" fill="#58B98F" stroke="#2B2340" strokeWidth="3" />
          </svg>
        )
    }
  }

  return (
    <div className={`w-full h-full bg-gradient-to-br ${work.bgGradient} flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500 ease-out select-none`}>
      {renderSvgArtwork()}
    </div>
  )
}
