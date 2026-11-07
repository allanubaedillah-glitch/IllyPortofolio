# Portofolio Ilustrator & Graphic Designer ✨

Landing page portofolio satu halaman untuk ilustrator & desainer grafis dengan karakter visual yang **hangat, ramah, playful, dan berkarakter kuat**. Bukan template SaaS generik — dibuat dengan palet pastel lembut, estetika doodle stiker, tipografi ramah (Fredoka + Plus Jakarta Sans), dan interaktivitas ringan.

---

## 🎨 Desain Sistem & Fitur Utama

- **Palet Warna Pastel Harmonis**:
  - Background utama: Warm Cream (`#FFF8F1`)
  - Kontur & teks utama: Deep Plum (`#2B2340`) dengan rasio kontras tinggi (WCAG AA+)
  - Aksen Pastel: Peach (`#FFD8C2`), Mint (`#CDEFE0`), Lilac (`#DCCFF5`)
  - Aksen CTA: Coral (`#FF8A7A`)
- **Struktur Halaman**:
  1. **Navbar Sticky**: Glassmorphism blur, badge status *"Tersedia untuk proyek baru ✨"*, tombol CTA cepat, dan drawer mobile hamburger.
  2. **Hero Section**: Tipografi clamp berani, sapaan hangat, 2 CTA (*Lihat Karya* & *Ngobrol Santai*), maskot karakter ilustrator SVG kustom, dan doodle melayang.
  3. **Galeri Karya**: Grid responsif ala masonry dengan tab filter kategori (*Semua*, *Karakter*, *Poster & Branding*, *Ilustrasi*). Efek hover halus & Lightbox lengkap (navigasi panah, preview besar, cerita di balik karya, penutupan ESC).
  4. **Tentang Saya**: Foto ilustrator berbingkai blob organik asimetris, bio naratif ramah, 4 fun facts studio, dan chips daftar keahlian/software (Procreate, Illustrator, Photoshop, Figma).
  5. **Kontak & Footer**: 3 kartu CTA taktil (Email dengan tombol salin otomatis, WhatsApp dengan pesan pre-filled, Instagram), tahun dinamis otomatis, dan tombol *Kembali ke Atas*.

---

## 🚀 Cara Menjalankan di Lokal

Pastikan Node.js (v18+) sudah terpasang di komputermu:

```bash
# 1. Jalankan development server
npm run dev

# Buka tautan lokal yang muncul (biasanya http://localhost:5173) di browsermu
```

Untuk menguji build produksi:
```bash
# 2. Build proyek
npm run build

# 3. Preview hasil build
npm run preview
```

---

## ✏️ Panduan Kustomisasi (Mudah & Cepat)

Seluruh konten teks dan data karya dipisahkan ke dalam folder `/src/data/` agar kamu tidak perlu mengutak-atik kode komponen:

### 1. Mengubah Data Pribadi & Kontak
Buka file `src/data/profile.ts`:
- Ganti `name`, `handle`, `tagline`, dan `bio`.
- Ubah `email`, `phoneWhatsapp` (format `628xxx`), dan `instagram`.
- Sesuaikan `funFacts` dan daftar `skills`.
- Atur `availableForHire: true/false` untuk menyalakan/mematikan badge status.

### 2. Mengganti & Menambah Karya
Buka file `src/data/works.ts`:
- Masukkan file gambarmu ke dalam folder `public/works/` (misal: `karya-1.jpg`).
- Buka `src/data/works.ts` dan isi properti `imageSrc`:
  ```ts
  {
    id: 'karya-baru',
    title: 'Judul Karyamu',
    category: 'Karakter', // 'Karakter' | 'Poster & Branding' | 'Ilustrasi'
    year: '2025',
    description: 'Deskripsi singkat karya...',
    story: 'Cerita menarik tentang proses pembuatan karya ini...',
    aspect: 'portrait', // 'portrait' | 'landscape' | 'square'
    imageSrc: '/works/karya-1.jpg', // Path gambar aslimu
    tags: ['Branding', 'Vector']
  }
  ```
- *Catatan:* Jika `imageSrc` dikosongkan (`""`), website akan secara otomatis menampilkan visual artwork pastel SVG bawaan!

---

## 🌐 Cara Deploy ke Vercel / Netlify

Proyek ini sudah dikonfigurasi 100% siap deploy:

### Deploy ke Vercel:
1. Hubungkan repositori GitHub/GitLab kamu ke [Vercel](https://vercel.com).
2. Framework Preset akan otomatis terdeteksi sebagai **Vite**.
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Klik **Deploy**!

### Deploy ke Netlify:
1. Hubungkan repositori ke [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Klik **Deploy Site**!
