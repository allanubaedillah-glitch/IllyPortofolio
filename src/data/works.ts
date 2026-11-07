export type WorkCategory = 'Karakter' | 'Poster & Branding' | 'Ilustrasi'

export interface WorkItem {
  id: string
  code: string
  title: string
  category: WorkCategory
  year: string
  client?: string
  description: string
  story: string
  tags: string[]
  placeholderType: 
    | 'bear'
    | 'coffee-cup'
    | 'mountains'
    | 'robot'
    | 'kite'
    | 'window'
    | 'jar'
    | 'cat'
    | 'flower'
  imageSrc?: string
}

export const CATEGORIES: ('Semua' | WorkCategory)[] = [
  'Semua',
  'Karakter',
  'Poster & Branding',
  'Ilustrasi'
]

export const WORKS: WorkItem[] = [
  {
    id: 'momo-the-bear',
    code: 'ART-01 // CHAR',
    title: 'Momo Si Beruang Koki',
    category: 'Karakter',
    year: '2026',
    client: 'Studio Ceria Komik',
    description: 'Maskot beruang kecil bertopi chef dengan garis tinta manga tebal dan arsiran halftone screentone.',
    story: 'Karakter beruang bulat dengan topi koki, digambar menggunakan pendekatan tinta hitam-putih manga klasik yang diadaptasi penuh ke warna cobalt murni.',
    tags: ['Manga Ink', 'Character Design', 'Screentone'],
    placeholderType: 'bear'
  },
  {
    id: 'kopi-dan-aroma',
    code: 'ART-02 // POSTER',
    title: 'Kopi Hangat & Croissant',
    category: 'Poster & Branding',
    year: '2026',
    client: 'Teduh Roastery',
    description: 'Ilustrasi cangkir kopi mengepul dengan motif halftone melingkar dan siluet croissant grafis.',
    story: 'Mengambil energi pagi hari ke dalam bentuk poster zine kontras tinggi: cangkir bergaris tebal dengan aroma uap ekspresif dan titik screentone dinamis.',
    tags: ['Zine Art', 'Food Graphic', 'Line Art'],
    placeholderType: 'coffee-cup'
  },
  {
    id: 'pegunungan-malam',
    code: 'ART-03 // ILUS',
    title: 'Puncak Lembah & Bulan Sabit',
    category: 'Ilustrasi',
    year: '2025',
    client: 'Indie Sci-Fi Zine',
    description: 'Pemandangan pegunungan geometris dramatis di bawah langit malam cobalt bertabur bintang.',
    story: 'Pola arsiran diagonal dan siluet tajam menciptakan ilusi kedalaman ruang angkasa tanpa memakai warna abu-abu sama sekali.',
    tags: ['Landscape', 'Hatching', 'Geometric'],
    placeholderType: 'mountains'
  },
  {
    id: 'boti-robot-taman',
    code: 'ART-04 // CHAR',
    title: 'Boti Robot Penjaga Bunga',
    category: 'Karakter',
    year: '2025',
    client: 'Eco Mecha Project',
    description: 'Robot mekanis kuno berwajah ramah dengan mata menyala dan pot bunga matahari di lengannya.',
    story: 'Desain karakter mecha ramah dengan tekstur screenprint vintage dan pola titik-titik mekanik yang tajam.',
    tags: ['Mecha Art', 'Manga Mascot', 'Halftone'],
    placeholderType: 'robot'
  },
  {
    id: 'festival-layang-layang',
    code: 'ART-05 // POSTER',
    title: 'Layang-Layang Angkasa',
    category: 'Poster & Branding',
    year: '2025',
    client: 'Festival Musim Angin',
    description: 'Komposisi layangan berlian geometris melayang dengan pita gelombang dinamis di langit terbuka.',
    story: 'Dinamika gerak angin diwujudkan lewat kontras garis kecepatan (speedlines) khas komik laga Jepang.',
    tags: ['Speedlines', 'Graphic Poster', 'Vector Ink'],
    placeholderType: 'kite'
  },
  {
    id: 'jendela-loteng',
    code: 'ART-06 // ILUS',
    title: 'Bilik Jendela Studio',
    category: 'Ilustrasi',
    year: '2025',
    client: 'Literasi Visual',
    description: 'Sudut meja kerja dengan lampu belajar menyala, buku bertumpuk, dan pot tanaman menjuntai.',
    story: 'Studi pencahayaan negatif: cahaya lampu digambarkan dengan bidang putih solid memotong latar belakang cobalt pekat.',
    tags: ['Negative Space', 'Interior Art', 'Cozy Manga'],
    placeholderType: 'window'
  },
  {
    id: 'toples-botanikal',
    code: 'ART-07 // POSTER',
    title: 'Toples Sari Herbal',
    category: 'Poster & Branding',
    year: '2026',
    client: 'Botanika Artisan',
    description: 'Kemasan toples kaca dengan kelopak chamomile mekar dalam arsiran tinta linocut kontemporer.',
    story: 'Kombinasi gaya cetak manual linocut dan estetika poster grafis modern dengan tipografi bold tegas.',
    tags: ['Packaging', 'Linocut Ink', 'Botanical'],
    placeholderType: 'jar'
  },
  {
    id: 'kucing-ekspresif',
    code: 'ART-08 // CHAR',
    title: 'Stiker Kucing Mengantuk',
    category: 'Karakter',
    year: '2026',
    client: 'Zine Merch Line',
    description: 'Karakter kepala kucing ekspresif dengan telinga tajam, kumis kaku, dan garis luar die-cut tebal.',
    story: 'Desain stiker manga berdaya tahan visual tinggi: mudah dibaca dari kejauhan dengan garis tinta 4px mantap.',
    tags: ['Sticker Pack', 'Cute Ink', 'Manga Cat'],
    placeholderType: 'cat'
  },
  {
    id: 'bunga-grafis',
    code: 'ART-09 // ILUS',
    title: 'Bunga Mekar Grafis',
    category: 'Ilustrasi',
    year: '2026',
    client: 'Komik Alam Lestari',
    description: 'Bunga matahari pop-art dengan kelopak simetris berputar dan pusaran halftone di intinya.',
    story: 'Representasi grafis flora dengan pengaruh optical art dan motif screentone klasik cetakan mangaka.',
    tags: ['Pop Art', 'Floral Graphic', 'Op-Art'],
    placeholderType: 'flower'
  }
]
