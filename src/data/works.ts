export type WorkCategory = 'Karakter' | 'Poster & Branding' | 'Ilustrasi'

export interface WorkItem {
  id: string
  title: string
  category: WorkCategory
  year: string
  client?: string
  description: string
  aspect: 'square' | 'portrait' | 'landscape'
  accentColor: string
  bgGradient: string
  tags: string[]
  // Jalur gambar asli di folder /public/works (opsional, jika kosong gunakan artwork ilustrasi bawaan)
  imageSrc?: string
  // Detail naratif untuk lightbox
  story: string
  // Jenis placeholder visual bawaan
  placeholderType: 
    | 'momo-mascot'
    | 'kopi-senja'
    | 'hutan-fantasi'
    | 'ruang-baca'
    | 'festival-musim-semi'
    | 'robot-kebun'
    | 'stiker-kucing'
    | 'kemasan-teh'
    | 'poster-bumi'
}

export const CATEGORIES: ('Semua' | WorkCategory)[] = [
  'Semua',
  'Karakter',
  'Poster & Branding',
  'Ilustrasi'
]

export const WORKS: WorkItem[] = [
  {
    id: 'momo-mascot',
    title: 'Momo & Kawan Gembira',
    category: 'Karakter',
    year: '2024',
    client: 'Penerbit Ceria Anak',
    description: 'Desain maskot beruang kecil pembuat kue untuk seri buku cerita anak interaktif.',
    story: 'Momo dirancang dengan bentuk siluet bulat yang memancarkan kehangatan dan rasa ingin tahu tinggi. Koleksi ekspresinya dirancang untuk mudah direlasikan oleh anak usia 4-8 tahun.',
    aspect: 'portrait',
    accentColor: '#FFAF87',
    bgGradient: 'from-[#FFD8C2] via-[#FFEADB] to-[#FFF0E6]',
    tags: ['Mascot', 'Buku Anak', 'Digital Art'],
    placeholderType: 'momo-mascot',
    imageSrc: ''
  },
  {
    id: 'kopi-senja-branding',
    title: 'Kopi Teduh & Roti Hangat',
    category: 'Poster & Branding',
    year: '2024',
    client: 'Teduh Bakery & Coffee',
    description: 'Identitas visual, poster menu, dan kemasan kopi botol bergaya nostalgia hangat.',
    story: 'Menggabungkan lettering tangan bergaya retro lembut dengan ilustrasi cangkir kopi mengepul dan croissant empuk untuk menciptakan kesan "comfort space" bagi pengunjung kafe.',
    aspect: 'square',
    accentColor: '#FF8A7A',
    bgGradient: 'from-[#FFD8C2] via-[#FFB2A7] to-[#DCCFF5]',
    tags: ['Branding', 'Lettering', 'Packaging'],
    placeholderType: 'kopi-senja',
    imageSrc: ''
  },
  {
    id: 'hutan-fantasi',
    title: 'Penjaga Lembah Kunang-Kunang',
    category: 'Ilustrasi',
    year: '2024',
    client: 'Personal Project',
    description: 'Ilustrasi editorial pemandangan malam magis dengan nuansa warna mint dan ungu lembut.',
    story: 'Eksplorasi pencahayaan ambient alami di mana ribuan kunang-kunang menerangi danau kecil tempat tinggal roh hutan bertelinga rusa.',
    aspect: 'landscape',
    accentColor: '#A3E7C9',
    bgGradient: 'from-[#CDEFE0] via-[#DCCFF5] to-[#EEFAF4]',
    tags: ['Editorial', 'Environment', 'Fantasy'],
    placeholderType: 'hutan-fantasi',
    imageSrc: ''
  },
  {
    id: 'robot-kebun',
    title: 'Boti Si Robot Penyiram Bunga',
    category: 'Karakter',
    year: '2023',
    client: 'EcoKids Studio',
    description: 'Karakter robot kuno berbahan kaleng daur ulang yang menyukai tanaman bunga matahari.',
    story: 'Karakter dengan kontras bahan logam dingin dan kehangatan hati seorang tukang kebun kecil. Dirancang dengan proporsi ramah anak dan palet warna bumi.',
    aspect: 'portrait',
    accentColor: '#C5B0EE',
    bgGradient: 'from-[#DCCFF5] via-[#EADBFA] to-[#CDEFE0]',
    tags: ['Character Concept', 'Game Asset', 'Sticker'],
    placeholderType: 'robot-kebun',
    imageSrc: ''
  },
  {
    id: 'festival-musim-semi',
    title: 'Poster Festival Layang-Layang',
    category: 'Poster & Branding',
    year: '2023',
    client: 'Dinas Pariwisata & Komunitas Kreatif',
    description: 'Poster promosi festival tahunan dengan komposisi langit biru pastel penuh dinamika.',
    story: 'Menggambarkan puluhan bentuk layangan tradisional dan kontemporer yang menari di angkasa, mengajak keluarga berkumpul di tepi pantai di akhir pekan cerah.',
    aspect: 'portrait',
    accentColor: '#58B98F',
    bgGradient: 'from-[#EEFAF4] via-[#CDEFE0] to-[#FFD8C2]',
    tags: ['Poster Event', 'Komposisi', 'Vector Art'],
    placeholderType: 'festival-musim-semi',
    imageSrc: ''
  },
  {
    id: 'ruang-baca-senja',
    title: 'Bilik Buku di Sudut Loteng',
    category: 'Ilustrasi',
    year: '2023',
    client: 'Majalah Literasi Pustaka',
    description: 'Ilustrasi cerita bertema kenyamanan membaca buku di loteng ditemani hujan rintik-rintik.',
    story: 'Menonjolkan detail-detail kecil: tumpukan buku bersampul lusuh, tanaman pothos yang menjuntai, lampu meja kuning temaram, dan jendela berembun.',
    aspect: 'square',
    accentColor: '#FFAF87',
    bgGradient: 'from-[#FFF0E6] via-[#FFD8C2] to-[#DCCFF5]',
    tags: ['Editorial', 'Cozy Art', 'Lofi Aesthetic'],
    placeholderType: 'ruang-baca',
    imageSrc: ''
  },
  {
    id: 'kemasan-teh-organik',
    title: 'Seri Teh Herbal Kembang Sari',
    category: 'Poster & Branding',
    year: '2024',
    client: 'Kembang Sari Botanicals',
    description: 'Desain label kaleng dan ilustrasi botanical untuk tiga varian teh bunga lokal.',
    story: 'Gaya goresan pensil warna bertekstur dengan sentuhan kontur modern. Tiap varian membawa palet pastel khas seperti Chamomile Peach, Lavender Mint, dan Rosella Lilac.',
    aspect: 'portrait',
    accentColor: '#FF8A7A',
    bgGradient: 'from-[#FFD8C2] via-[#CDEFE0] to-[#FFF8F1]',
    tags: ['Packaging', 'Botanical Art', 'Visual Branding'],
    placeholderType: 'kemasan-teh',
    imageSrc: ''
  },
  {
    id: 'stiker-kucing-ekspresif',
    title: 'Sticker Pack: Hari Sibuk Si Meong',
    category: 'Karakter',
    year: '2023',
    client: 'Line Creators / WhatsApp Stickers',
    description: 'Set 16 stiker digital bertema kehidupan pekerja kreatif dari sudut pandang kucing.',
    story: 'Ekspresi dramatis saat deadline mendekat, kepuasan meneguk es kopi, hingga mode santai berguling di lantai studio.',
    aspect: 'square',
    accentColor: '#C5B0EE',
    bgGradient: 'from-[#DCCFF5] via-[#FFF0E6] to-[#CDEFE0]',
    tags: ['Sticker Pack', 'Digital Merch', 'Character Design'],
    placeholderType: 'stiker-kucing',
    imageSrc: ''
  },
  {
    id: 'poster-bumi-lestari',
    title: 'Katalog Visual: Langkah Kecil Kita',
    category: 'Ilustrasi',
    year: '2024',
    client: 'Komunitas Bumi Teduh',
    description: 'Seri ilustrasi infografis edukatif tentang kebiasaan ramah lingkungan sehari-hari.',
    story: 'Menyajikan pesan ekologi tanpa kesan menggurui, lewat ilustrasi gaya komik ramah dengan karakter manusia dan tanaman yang saling merawat.',
    aspect: 'landscape',
    accentColor: '#58B98F',
    bgGradient: 'from-[#CDEFE0] via-[#EEFAF4] to-[#FFD8C2]',
    tags: ['Infographic Art', 'Social Campaign', 'Eco Art'],
    placeholderType: 'poster-bumi',
    imageSrc: ''
  }
]
