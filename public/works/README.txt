FOLDER PENYIMPANAN KARYA ASLI (/public/works)
=============================================

Di sini kamu bisa menyimpan file gambar karya aslimu (PNG, JPG, WEBP, atau GIF).

Cara Menampilkan Gambar Asli di Galeri Portofolio:
1. Simpan file gambar di dalam folder ini (misal: "karya-saya-1.jpg")
2. Buka file "/src/data/works.ts"
3. Cari item karya yang ingin diganti, lalu isi properti "imageSrc" dengan path gambarmu:
   
   imageSrc: '/works/karya-saya-1.jpg'

Jika "imageSrc" dibiarkan kosong (''), website akan otomatis menampilkan ilustrasi SVG pastel kustom yang sudah disiapkan!
