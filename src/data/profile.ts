export interface ProfileData {
  name: string
  handle: string
  tagline: string
  bio: string
  aboutDetail: string
  email: string
  phoneWhatsapp: string // Format 62xxx
  whatsappMessage: string
  instagram: string
  location: string
  availableForHire: boolean
  statusBadge: string
  cvUrl?: string
  funFacts: {
    number: string
    title: string
    description: string
  }[]
  skills: string[]
}

export const profileData: ProfileData = {
  name: "Power Biliah",
  handle: "@powerbiliah",
  tagline: "Mengubah ide liar jadi visual yang berkarakter, bertenaga & bikin hati hangat.",
  bio: "Creator visual & ilustrator beraliran graphic manga ink. Meracik visual bertenaga tinggi lewat kontras murni cobalt blue dan ruang negatif putih yang tajam, bernyawa, dan tanpa kompromi.",
  aboutDetail: "Mulai dari guratan karakter manga ekspresif, screentone halftone dinamis, hingga identitas visual berkarakter kuat yang langsung membekas dalam 3 detik pertama.",
  email: "halo@powerbiliah.studio",
  phoneWhatsapp: "6281234567890",
  whatsappMessage: "Halo Power Biliah! Saya tertarik dengan karya visual berkarakter cobalt blue dan ingin mendiskusikan kolaborasi.",
  instagram: "powerbiliah",
  location: "Bandung / Worldwide",
  availableForHire: true,
  statusBadge: "OPEN FOR VISUAL PROJECTS // 2026",
  cvUrl: "/cv-power-biliah.pdf",
  funFacts: [
    {
      number: "01 // INK",
      title: "Garis & Screentone",
      description: "Eksplorasi garis tinta tegas dan tekstur halftone analog bergaya manga indie."
    },
    {
      number: "02 // 200+",
      title: "Karakter Diciptakan",
      description: "Lebih dari dua ratus karakter komik dan maskot visual dengan siluet ikonik."
    },
    {
      number: "03 // PURE",
      title: "Cobalt Blue & Stark White",
      description: "Komitmen estetika grafis berani tanpa gradien abu-abu generik."
    },
    {
      number: "04 // GEAR",
      title: "Alat Harian",
      description: "Display tablet, kuas tinta digital kustom, dan buku sketsa saku tebal."
    }
  ],
  skills: [
    "MANGA INK ART",
    "CHARACTER DESIGN",
    "SCREENTONE & HALFTONE",
    "EDITORIAL GRAPHICS",
    "VISUAL IDENTITY",
    "PROCREATE",
    "CLIP STUDIO PAINT",
    "ADOBE ILLUSTRATOR"
  ]
}
