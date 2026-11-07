export interface ProfileData {
  name: string
  handle: string
  taglineOptions: string[]
  activeTaglineIndex: number
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
  cvUrl?: string // Kosongkan atau isi URL CV
  funFacts: {
    emoji: string
    title: string
    description: string
  }[]
  skills: {
    name: string
    category: 'Software' | 'Skill' | 'Keahlian'
    highlight?: boolean
  }[]
}

export const profileData: ProfileData = {
  name: "Rawon Billish",
  handle: "@RawonBillish",
  taglineOptions: [
    "Mengubah ide liar jadi visual yang berkarakter & bikin senyum :)", // Terpilih: ramah, hangat, berkarakter
    "Bercerita lewat garis, warna pastel, dan karakter yang bernyawa.",
    "Teman kolaborasi visual untuk brand & cerita yang ingin tampil beda."
  ],
  activeTaglineIndex: 0,
  get tagline() {
    return this.taglineOptions[this.activeTaglineIndex]
  },
  bio: "Halo! Saya Illy, ilustrator dan desainer grafis yang gemar meracik dunia imajinatif lewat kombinasi palet pastel hangat dan goresan yang ekspresif. Terbiasa membantu brand independen, penerbit, dan kreator menghadirkan visual yang tak hanya memikat mata, tapi juga punya nyawa.",
  aboutDetail: "Bagi saya, setiap garis punya cerita dan setiap warna punya emosi. Sejak 2020, saya sudah mengeksplorasi pembuatan karakter buku anak, maskot brand, hingga visual campaign bertema pop-nostalgia.",
  email: "rawonbillish@gmail.com",
  phoneWhatsapp: "6281234567890",
  whatsappMessage: "Halo Anya! Saya tertarik dengan karya portofoliomu dan ingin ngobrol seputar potensi kolaborasi visual.",
  instagram: "anyacreates",
  location: "Bandung / Remote",
  availableForHire: true,
  statusBadge: "Terbuka untuk proyek seru ✨",
  cvUrl: "/cv-anya-maharani.pdf", // Bisa dikosongkan ("") jika file belum ada
  funFacts: [
    {
      emoji: "☕",
      title: "Bahan Bakar Harian",
      description: "Secangkir Americano hangat dan playlist jvke."
    },
    {
      emoji: "📖",
      title: "Selalu Siaga",
      description: "Buku sketsa saku & pensil mekanik selalu ada di dalam tas."
    },
    {
      emoji: "🐾",
      title: "Teman Studio",
      description: "Didampingi Mochi, kucing oranye yang suka tidur di atas keyboard."
    },
    {
      emoji: "✨",
      title: "150+ Karakter",
      description: "Sudah melahirkan ratusan karakter unik sejak masa kuliah seni rupa."
    }
  ],
  skills: [
    { name: "Ibis Paint X", category: "Software", highlight: true },
    { name: "Adobe Photoshop", category: "Software", highlight: true },
    { name: "Figma", category: "Software", highlight: false },
    { name: "Clip Studio Paint", category: "Software", highlight: false },
    { name: "Character Design", category: "Skill", highlight: true },
    { name: "Visual Identity & Branding", category: "Skill", highlight: true },
    { name: "Editorial Illustration", category: "Skill", highlight: false },
    { name: "Packaging Art", category: "Skill", highlight: false },
    { name: "Typography & Lettering", category: "Skill", highlight: false }
  ]
}
