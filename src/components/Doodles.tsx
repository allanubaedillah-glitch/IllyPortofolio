import React from 'react'

// Sparkle Star 4-pointed
export const SparkleDoodle: React.FC<{ className?: string; color?: string }> = ({ 
  className = "w-6 h-6", 
  color = "#FF8A7A" 
}) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    style={{ color }}
    aria-hidden="true"
  >
    <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
  </svg>
)

// Cute 5-pointed Star with rounded corners
export const StarDoodle: React.FC<{ className?: string; color?: string }> = ({
  className = "w-6 h-6",
  color = "#FFAF87"
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={{ color }}
    aria-hidden="true"
  >
    <path d="M12 1.5L14.7 8.3L22 9L16.4 13.9L18.1 21L12 17.2L5.9 21L7.6 13.9L2 9L9.3 8.3L12 1.5Z" />
  </svg>
)

// Wavy Squiggle Line
export const SquiggleDoodle: React.FC<{ className?: string; color?: string }> = ({
  className = "w-16 h-4",
  color = "#FF8A7A"
}) => (
  <svg
    viewBox="0 0 80 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M2 8C8 2 14 2 20 8C26 14 32 14 38 8C44 2 50 2 56 8C62 14 68 14 74 8C76 6 78 4 78 4"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Curvy Arrow Doodle
export const ArrowDoodle: React.FC<{ className?: string; color?: string }> = ({
  className = "w-12 h-12",
  color = "#2B2340"
}) => (
  <svg
    viewBox="0 0 60 60"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M10 15C18 10 38 12 42 32C44 42 36 48 28 46"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M24 38L28 46L36 43"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Smiley Face Sticker
export const SmileyDoodle: React.FC<{ className?: string; bgColor?: string; strokeColor?: string }> = ({
  className = "w-10 h-10",
  bgColor = "#FFD8C2",
  strokeColor = "#2B2340"
}) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <circle cx="20" cy="20" r="18" fill={bgColor} stroke={strokeColor} strokeWidth="3" />
    <circle cx="14" cy="16" r="2.5" fill={strokeColor} />
    <circle cx="26" cy="16" r="2.5" fill={strokeColor} />
    <path
      d="M13 23C15.5 27 24.5 27 27 23"
      stroke={strokeColor}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
)

// Floating Flower
export const FlowerDoodle: React.FC<{ className?: string; color?: string; centerColor?: string }> = ({
  className = "w-8 h-8",
  color = "#DCCFF5",
  centerColor = "#FFAF87"
}) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <circle cx="20" cy="10" r="7" fill={color} />
    <circle cx="30" cy="20" r="7" fill={color} />
    <circle cx="20" cy="30" r="7" fill={color} />
    <circle cx="10" cy="20" r="7" fill={color} />
    <circle cx="20" cy="20" r="6" fill={centerColor} stroke="#2B2340" strokeWidth="2" />
  </svg>
)
