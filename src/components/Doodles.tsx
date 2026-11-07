import React from 'react'

// Manga / Comic 4-Point Sparkle Star in pure Cobalt or White
export const SparkleStar: React.FC<{ className?: string; inverted?: boolean }> = ({ 
  className = "w-6 h-6", 
  inverted = false 
}) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={`${className} ${inverted ? 'text-white' : 'text-cobalt'}`} 
    aria-hidden="true"
  >
    <path d="M12 0C12 7 7 12 0 12C7 12 12 17 12 24C12 17 17 12 24 12C17 12 12 7 12 0Z" />
  </svg>
)

// Sharp 8-Point Manga Starburst
export const Starburst: React.FC<{ className?: string; inverted?: boolean }> = ({
  className = "w-8 h-8",
  inverted = false
}) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    className={`${className} ${inverted ? 'text-white' : 'text-cobalt'}`}
    aria-hidden="true"
  >
    <polygon points="16,0 20,10 30,6 24,15 32,20 22,23 24,32 16,26 8,32 10,23 0,20 8,15 2,6 12,10" />
  </svg>
)

// Graphic Tape Accent with Diagonal Stripes
export const HazardTape: React.FC<{ className?: string; text?: string; inverted?: boolean }> = ({
  className = "h-7 px-3",
  text = "POWER BILIAH // VISUAL ARCHIVE",
  inverted = false
}) => (
  <div
    className={`inline-flex items-center gap-2 font-mono font-bold text-xs uppercase tracking-widest border-2 ${
      inverted
        ? 'bg-white text-cobalt border-white shadow-cobalt-sm'
        : 'bg-cobalt text-white border-cobalt shadow-white-sm'
    } ${className}`}
  >
    <span className="w-2 h-2 bg-current" />
    <span>{text}</span>
    <span className="w-2 h-2 bg-current" />
  </div>
)

// Halftone Screentone Circle Element
export const HalftoneCircle: React.FC<{ className?: string; inverted?: boolean }> = ({
  className = "w-16 h-16",
  inverted = false
}) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
    <mask id={`mask-circle-${inverted ? 'inv' : 'reg'}`}>
      <circle cx="50" cy="50" r="48" fill="white" />
    </mask>
    <g mask={`url(#mask-circle-${inverted ? 'inv' : 'reg'})`}>
      <circle cx="50" cy="50" r="48" fill="none" stroke={inverted ? '#FFFFFF' : '#2242F5'} strokeWidth="4" />
      {[...Array(9)].map((_, row) =>
        [...Array(9)].map((_, col) => {
          const cx = 10 + col * 10
          const cy = 10 + row * 10
          const dist = Math.hypot(cx - 50, cy - 50)
          const r = Math.max(0.5, (50 - dist) / 10)
          return (
            <circle
              key={`${row}-${col}`}
              cx={cx}
              cy={cy}
              r={r}
              fill={inverted ? '#FFFFFF' : '#2242F5'}
            />
          )
        })
      )}
    </g>
  </svg>
)

// Graphic Barcode Stamp
export const BarcodeStamp: React.FC<{ className?: string; inverted?: boolean }> = ({
  className = "w-28 h-8",
  inverted = false
}) => (
  <svg viewBox="0 0 120 30" fill="currentColor" className={`${className} ${inverted ? 'text-white' : 'text-cobalt'}`}>
    <rect x="0" y="0" width="3" height="24" />
    <rect x="6" y="0" width="1.5" height="24" />
    <rect x="10" y="0" width="4" height="24" />
    <rect x="17" y="0" width="2" height="24" />
    <rect x="22" y="0" width="5" height="24" />
    <rect x="30" y="0" width="1.5" height="24" />
    <rect x="34" y="0" width="3" height="24" />
    <rect x="40" y="0" width="6" height="24" />
    <rect x="49" y="0" width="2" height="24" />
    <rect x="54" y="0" width="4" height="24" />
    <rect x="61" y="0" width="1.5" height="24" />
    <rect x="65" y="0" width="5" height="24" />
    <rect x="73" y="0" width="2" height="24" />
    <rect x="78" y="0" width="4" height="24" />
    <rect x="85" y="0" width="3" height="24" />
    <rect x="91" y="0" width="1.5" height="24" />
    <rect x="95" y="0" width="5" height="24" />
    <rect x="103" y="0" width="2" height="24" />
    <rect x="108" y="0" width="4" height="24" />
    <rect x="115" y="0" width="3" height="24" />
    <text x="60" y="30" fontSize="6" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
      PB-2026-COBALT
    </text>
  </svg>
)
