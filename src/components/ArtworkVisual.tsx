import React from 'react'
import { WorkItem } from '../data/works'

interface ArtworkVisualProps {
  work: WorkItem
  className?: string
  priority?: boolean
}

export const ArtworkVisual: React.FC<ArtworkVisualProps> = ({ work, className = '', priority = false }) => {
  if (work.imageSrc && work.imageSrc.trim() !== '') {
    return (
      <img
        src={work.imageSrc}
        alt={`${work.title} - ${work.category}`}
        loading={priority ? 'eager' : 'lazy'}
        className={`w-full h-full object-cover ${className}`}
      />
    )
  }

  // Pure Cobalt (#2242F5) & Stark White (#FFFFFF) Manga Ink & Halftone Artworks
  const renderGraphicArtwork = () => {
    switch (work.placeholderType) {
      case 'bear':
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ht-bear" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="4" cy="4" r="2.2" fill="#2242F5" />
              </pattern>
            </defs>
            {/* Background Halftone Halo */}
            <circle cx="200" cy="210" r="150" fill="url(#ht-bear)" stroke="#2242F5" strokeWidth="4" />
            <circle cx="200" cy="210" r="120" fill="#FFFFFF" stroke="#2242F5" strokeWidth="6" />

            {/* Bear Ears */}
            <circle cx="120" cy="120" r="42" fill="#FFFFFF" stroke="#2242F5" strokeWidth="7" />
            <circle cx="120" cy="120" r="24" fill="url(#ht-bear)" />
            <circle cx="280" cy="120" r="42" fill="#FFFFFF" stroke="#2242F5" strokeWidth="7" />
            <circle cx="280" cy="120" r="24" fill="url(#ht-bear)" />

            {/* Chef Hat with Ink Shadow */}
            <path d="M150 90C140 30 260 30 250 90Z" fill="#FFFFFF" stroke="#2242F5" strokeWidth="7" />
            <rect x="155" y="85" width="90" height="26" fill="#2242F5" />
            <line x1="180" y1="50" x2="180" y2="85" stroke="#2242F5" strokeWidth="4" />
            <line x1="205" y1="42" x2="205" y2="85" stroke="#2242F5" strokeWidth="4" />
            <line x1="230" y1="52" x2="230" y2="85" stroke="#2242F5" strokeWidth="4" />

            {/* Head */}
            <circle cx="200" cy="210" r="95" fill="#FFFFFF" stroke="#2242F5" strokeWidth="8" />

            {/* Eyes - Stylized Manga Ink */}
            <circle cx="160" cy="195" r="12" fill="#2242F5" />
            <circle cx="164" cy="190" r="4" fill="#FFFFFF" />
            <circle cx="240" cy="195" r="12" fill="#2242F5" />
            <circle cx="244" cy="190" r="4" fill="#FFFFFF" />

            {/* Halftone Screentone Cheeks */}
            <circle cx="140" cy="230" r="18" fill="url(#ht-bear)" stroke="#2242F5" strokeWidth="2" />
            <circle cx="260" cy="230" r="18" fill="url(#ht-bear)" stroke="#2242F5" strokeWidth="2" />

            {/* Snout & Mouth */}
            <ellipse cx="200" cy="225" rx="35" ry="26" fill="#FFFFFF" stroke="#2242F5" strokeWidth="6" />
            <polygon points="190,215 210,215 200,226" fill="#2242F5" />
            <path d="M200 226V238M192 236C196 242 204 242 208 236" stroke="#2242F5" strokeWidth="5" strokeLinecap="round" />

            {/* Sparkles */}
            <polygon points="80,80 84,95 99,99 84,103 80,118 76,103 61,99 76,95" fill="#2242F5" />
            <polygon points="320,290 323,300 333,303 323,306 320,316 317,306 307,303 317,300" fill="#2242F5" />
          </svg>
        )

      case 'coffee-cup':
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ht-coffee" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="2.8" fill="#2242F5" />
              </pattern>
              <pattern id="diag-croissant" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#2242F5" strokeWidth="3" />
              </pattern>
            </defs>
            {/* Outer Target Circle */}
            <circle cx="200" cy="200" r="160" fill="#FFFFFF" stroke="#2242F5" strokeWidth="6" strokeDasharray="12 8" />
            <circle cx="200" cy="200" r="130" fill="url(#ht-coffee)" />
            <circle cx="200" cy="200" r="105" fill="#FFFFFF" stroke="#2242F5" strokeWidth="6" />

            {/* Saucer */}
            <ellipse cx="200" cy="280" rx="90" ry="24" fill="#FFFFFF" stroke="#2242F5" strokeWidth="8" />
            <ellipse cx="200" cy="275" rx="70" ry="14" fill="#2242F5" />

            {/* Cup */}
            <path d="M140 210C140 280 260 280 260 210Z" fill="#FFFFFF" stroke="#2242F5" strokeWidth="8" />
            <path d="M255 220C285 220 285 255 255 255" stroke="#2242F5" strokeWidth="8" strokeLinecap="round" />
            <ellipse cx="200" cy="210" rx="60" ry="18" fill="#2242F5" />
            {/* Latte Art Foam in Negative White */}
            <ellipse cx="200" cy="210" rx="42" ry="11" fill="#FFFFFF" />
            <path d="M192 208C188 202 196 200 200 206C204 200 212 202 208 208L200 214Z" fill="#2242F5" />

            {/* Dynamic Manga Steam Lines */}
            <path d="M180 170C165 145 195 125 180 95" stroke="#2242F5" strokeWidth="6" strokeLinecap="round" />
            <path d="M220 165C235 140 205 120 220 90" stroke="#2242F5" strokeWidth="6" strokeLinecap="round" />

            {/* Graphic Croissant */}
            <g transform="translate(80, 80) rotate(-15)">
              <ellipse cx="30" cy="20" rx="26" ry="16" fill="url(#diag-croissant)" stroke="#2242F5" strokeWidth="5" />
              <path d="M14 12C22 25 38 25 46 12" stroke="#2242F5" strokeWidth="4" />
            </g>
          </svg>
        )

      case 'mountains':
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="stripes-mtn" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#FFFFFF" strokeWidth="3" />
              </pattern>
            </defs>
            {/* Deep Solid Cobalt Frame */}
            <rect x="20" y="20" width="360" height="360" fill="#2242F5" stroke="#2242F5" strokeWidth="8" />

            {/* Stark White Crescent Moon */}
            <circle cx="310" cy="90" r="45" fill="#FFFFFF" />
            <circle cx="295" cy="80" r="42" fill="#2242F5" />

            {/* Manga Stars */}
            <polygon points="90,70 93,80 103,83 93,86 90,96 87,86 77,83 87,80" fill="#FFFFFF" />
            <polygon points="170,110 172,118 180,120 172,122 170,130 168,122 160,120 168,118" fill="#FFFFFF" />
            <polygon points="240,60 242,66 248,68 242,70 240,76 238,70 232,68 238,66" fill="#FFFFFF" />

            {/* Rear Mountain with White Diagonal Hatching */}
            <polygon points="20,380 150,160 280,380" fill="url(#stripes-mtn)" stroke="#FFFFFF" strokeWidth="6" />

            {/* Foreground Solid Mountain in Stark White */}
            <polygon points="120,380 260,180 380,380" fill="#FFFFFF" stroke="#2242F5" strokeWidth="7" />
            {/* Foreground Ridge Shadow in Cobalt */}
            <polygon points="260,180 380,380 260,380" fill="#2242F5" />

            {/* Mountain Base Line */}
            <line x1="20" y1="380" x2="380" y2="380" stroke="#FFFFFF" strokeWidth="8" />
          </svg>
        )

      case 'robot':
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ht-bot" width="7" height="7" patternUnits="userSpaceOnUse">
                <circle cx="3.5" cy="3.5" r="2.2" fill="#2242F5" />
              </pattern>
            </defs>
            {/* Background Sunburst */}
            <g transform="translate(200, 200)">
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                <line key={deg} x1="0" y1="0" x2="180" y2="0" stroke="#2242F5" strokeWidth="3" strokeDasharray="6 6" transform={`rotate(${deg})`} />
              ))}
            </g>

            {/* Antenna */}
            <line x1="200" y1="100" x2="200" y2="50" stroke="#2242F5" strokeWidth="7" />
            <circle cx="200" cy="45" r="14" fill="#2242F5" stroke="#FFFFFF" strokeWidth="3" />
            <circle cx="200" cy="45" r="6" fill="#FFFFFF" />

            {/* Head Box */}
            <rect x="125" y="100" width="150" height="110" fill="#FFFFFF" stroke="#2242F5" strokeWidth="8" />
            {/* Screen Visor in Solid Cobalt */}
            <rect x="145" y="120" width="110" height="50" fill="#2242F5" />
            {/* Glowing Eyes in Stark White */}
            <circle cx="175" cy="145" r="10" fill="#FFFFFF" />
            <circle cx="225" cy="145" r="10" fill="#FFFFFF" />
            {/* Smile in White */}
            <path d="M190 158C195 163 205 163 210 158" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />

            {/* Neck Joint */}
            <rect x="180" y="210" width="40" height="20" fill="url(#ht-bot)" stroke="#2242F5" strokeWidth="5" />

            {/* Body */}
            <rect x="110" y="230" width="180" height="130" fill="#FFFFFF" stroke="#2242F5" strokeWidth="8" />
            {/* Center Gauge in Halftone */}
            <circle cx="200" cy="295" r="32" fill="url(#ht-bot)" stroke="#2242F5" strokeWidth="5" />
            <circle cx="200" cy="295" r="12" fill="#2242F5" />

            {/* Sprout Plant in Arm */}
            <path d="M290 280H340V330" stroke="#2242F5" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M340 280C340 250 370 250 370 280Z" fill="#2242F5" />
            <path d="M340 270C315 255 330 235 340 250Z" fill="#FFFFFF" stroke="#2242F5" strokeWidth="4" />
          </svg>
        )

      case 'kite':
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ht-kite" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="4" cy="4" r="2.5" fill="#2242F5" />
              </pattern>
              <pattern id="stripes-kite" width="6" height="6" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="6" stroke="#2242F5" strokeWidth="2.5" />
              </pattern>
            </defs>
            {/* Manga Action Speedlines */}
            <g stroke="#2242F5" strokeWidth="3">
              <line x1="20" y1="20" x2="140" y2="100" />
              <line x1="10" y1="60" x2="120" y2="120" />
              <line x1="30" y1="120" x2="130" y2="160" />
              <line x1="380" y1="380" x2="260" y2="300" strokeDasharray="8 6" />
              <line x1="350" y1="340" x2="250" y2="270" strokeDasharray="8 6" />
            </g>

            {/* Diamond Kite */}
            <g transform="translate(140, 70) rotate(18)">
              {/* Top Left Quadrant Solid Cobalt */}
              <polygon points="50,0 100,80 50,80" fill="#2242F5" stroke="#2242F5" strokeWidth="6" />
              {/* Top Right Quadrant Halftone */}
              <polygon points="50,0 0,80 50,80" fill="url(#ht-kite)" stroke="#2242F5" strokeWidth="6" />
              {/* Bottom Left Quadrant Stripes */}
              <polygon points="50,160 100,80 50,80" fill="url(#stripes-kite)" stroke="#2242F5" strokeWidth="6" />
              {/* Bottom Right Quadrant Stark White */}
              <polygon points="50,160 0,80 50,80" fill="#FFFFFF" stroke="#2242F5" strokeWidth="6" />

              {/* Central Cross Frame */}
              <line x1="50" y1="0" x2="50" y2="160" stroke="#FFFFFF" strokeWidth="4" />
              <line x1="0" y1="80" x2="100" y2="80" stroke="#FFFFFF" strokeWidth="4" />

              {/* Tail Ribbon with Bows */}
              <path d="M50 160C80 200 20 230 60 270" stroke="#2242F5" strokeWidth="5" strokeLinecap="round" />
              <polygon points="55,190 70,185 62,200" fill="#2242F5" />
              <polygon points="30,225 15,220 23,235" fill="url(#ht-kite)" stroke="#2242F5" strokeWidth="2" />
              <polygon points="58,260 74,255 66,270" fill="#2242F5" />
            </g>
          </svg>
        )

      case 'window':
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ht-window" width="9" height="9" patternUnits="userSpaceOnUse">
                <circle cx="4.5" cy="4.5" r="2.8" fill="#2242F5" />
              </pattern>
            </defs>
            {/* Attic Window Frame in Bold Ink */}
            <rect x="70" y="40" width="150" height="180" fill="#FFFFFF" stroke="#2242F5" strokeWidth="8" />
            <line x1="145" y1="40" x2="145" y2="220" stroke="#2242F5" strokeWidth="7" />
            <line x1="70" y1="120" x2="220" y2="120" stroke="#2242F5" strokeWidth="7" />
            {/* Night Screentone outside window pane */}
            <rect x="74" y="44" width="67" height="72" fill="url(#ht-window)" />
            <rect x="149" y="124" width="67" height="92" fill="url(#ht-window)" />

            {/* Lamp Beam Negative Space Triangle */}
            <polygon points="290,90 220,340 370,340" fill="#2242F5" />
            <polygon points="280,105 235,330 355,330" fill="#FFFFFF" />

            {/* Desk Lamp */}
            <path d="M260 70L300 100H240Z" fill="#2242F5" />
            <path d="M270 100V260" stroke="#2242F5" strokeWidth="7" strokeLinecap="round" />
            <rect x="250" y="260" width="40" height="12" fill="#2242F5" />

            {/* Stack of Manga & Books */}
            <rect x="70" y="290" width="130" height="26" fill="#FFFFFF" stroke="#2242F5" strokeWidth="6" />
            <line x1="90" y1="290" x2="90" y2="316" stroke="#2242F5" strokeWidth="4" />
            <rect x="85" y="264" width="105" height="26" fill="#2242F5" stroke="#2242F5" strokeWidth="4" />
            <rect x="100" y="240" width="80" height="24" fill="#FFFFFF" stroke="#2242F5" strokeWidth="5" />
            <line x1="120" y1="240" x2="120" y2="264" stroke="#2242F5" strokeWidth="4" />
          </svg>
        )

      case 'jar':
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ht-jar" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="4" cy="4" r="2.5" fill="#2242F5" />
              </pattern>
            </defs>
            {/* Background Arch Line */}
            <path d="M70 360V140C70 70 330 70 330 140V360" stroke="#2242F5" strokeWidth="4" strokeDasharray="10 8" />

            {/* Jar Glass Outline */}
            <rect x="100" y="90" width="200" height="270" rx="30" fill="#FFFFFF" stroke="#2242F5" strokeWidth="8" />
            
            {/* Lid */}
            <rect x="120" y="60" width="160" height="35" rx="8" fill="#2242F5" stroke="#2242F5" strokeWidth="4" />
            <rect x="140" y="50" width="120" height="12" fill="#FFFFFF" stroke="#2242F5" strokeWidth="4" />

            {/* Label in Deep Cobalt */}
            <rect x="100" y="160" width="200" height="130" fill="#2242F5" />
            
            {/* Botanical Flower in Center Label */}
            <circle cx="200" cy="225" r="28" fill="#FFFFFF" />
            <circle cx="200" cy="225" r="12" fill="url(#ht-jar)" stroke="#2242F5" strokeWidth="3" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <line key={deg} x1="200" y1="225" x2="200" y2="198" stroke="#2242F5" strokeWidth="4" strokeLinecap="round" transform={`rotate(${deg} 200 225)`} />
            ))}

            <text x="200" y="315" textAnchor="middle" fill="#2242F5" fontSize="13" fontWeight="bold" fontFamily="monospace" letterSpacing="3">
              ★ BOTANICAL INK ★
            </text>
          </svg>
        )

      case 'cat':
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ht-cat" width="7" height="7" patternUnits="userSpaceOnUse">
                <circle cx="3.5" cy="3.5" r="2.2" fill="#2242F5" />
              </pattern>
            </defs>
            {/* Heavy Manga Die-cut Outline */}
            <circle cx="200" cy="200" r="160" fill="#FFFFFF" stroke="#2242F5" strokeWidth="8" />
            <circle cx="200" cy="200" r="148" fill="none" stroke="#2242F5" strokeWidth="3" strokeDasharray="8 6" />

            {/* Cat Ears */}
            <polygon points="120,160 140,70 190,130" fill="#2242F5" stroke="#2242F5" strokeWidth="6" />
            <polygon points="135,145 145,95 175,135" fill="#FFFFFF" />
            
            <polygon points="280,160 260,70 210,130" fill="#2242F5" stroke="#2242F5" strokeWidth="6" />
            <polygon points="265,145 255,95 225,135" fill="#FFFFFF" />

            {/* Cat Face */}
            <ellipse cx="200" cy="210" rx="95" ry="80" fill="#FFFFFF" stroke="#2242F5" strokeWidth="8" />

            {/* Happy Curved Wink Eyes */}
            <path d="M150 195C160 185 175 185 185 195" stroke="#2242F5" strokeWidth="7" strokeLinecap="round" />
            <path d="M215 195C225 185 240 185 250 195" stroke="#2242F5" strokeWidth="7" strokeLinecap="round" />

            {/* Halftone Screentone Cheeks */}
            <ellipse cx="140" cy="225" rx="18" ry="12" fill="url(#ht-cat)" />
            <ellipse cx="260" cy="225" rx="18" ry="12" fill="url(#ht-cat)" />

            {/* Nose & Whiskers */}
            <polygon points="195,210 205,210 200,218" fill="#2242F5" />
            <path d="M200 218V226M192 224C196 230 204 230 208 224" stroke="#2242F5" strokeWidth="5" strokeLinecap="round" />
            
            {/* Sharp Manga Whiskers */}
            <line x1="120" y1="210" x2="60" y2="195" stroke="#2242F5" strokeWidth="6" strokeLinecap="round" />
            <line x1="120" y1="225" x2="65" y2="235" stroke="#2242F5" strokeWidth="6" strokeLinecap="round" />
            <line x1="280" y1="210" x2="340" y2="195" stroke="#2242F5" strokeWidth="6" strokeLinecap="round" />
            <line x1="280" y1="225" x2="335" y2="235" stroke="#2242F5" strokeWidth="6" strokeLinecap="round" />
          </svg>
        )

      case 'flower':
      default:
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ht-flower" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="4" cy="4" r="2.8" fill="#2242F5" />
              </pattern>
            </defs>
            {/* Optical Rotating Starburst Frame */}
            <circle cx="200" cy="200" r="160" fill="#2242F5" />
            <circle cx="200" cy="200" r="140" fill="#FFFFFF" stroke="#2242F5" strokeWidth="6" />

            {/* 12 Sharp Manga Floral Petals */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
              <path
                key={deg}
                d="M200 200L185 110C190 90 210 90 215 110Z"
                fill={i % 2 === 0 ? '#2242F5' : '#FFFFFF'}
                stroke="#2242F5"
                strokeWidth="5"
                transform={`rotate(${deg} 200 200)`}
              />
            ))}

            {/* Center Screentone Disc */}
            <circle cx="200" cy="200" r="50" fill="#FFFFFF" stroke="#2242F5" strokeWidth="8" />
            <circle cx="200" cy="200" r="42" fill="url(#ht-flower)" />
            <circle cx="200" cy="200" r="18" fill="#2242F5" />
            <circle cx="200" cy="200" r="6" fill="#FFFFFF" />
          </svg>
        )
    }
  }

  return (
    <div className="w-full h-full bg-white flex items-center justify-center relative overflow-hidden select-none border-b-4 border-cobalt">
      {renderGraphicArtwork()}
    </div>
  )
}
