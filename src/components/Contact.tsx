import React, { useState } from 'react'
import { Mail, MessageSquare, Instagram, Copy, Check, ArrowUpRight } from 'lucide-react'
import { profileData } from '../data/profile'
import { SparkleStar, Starburst, BarcodeStamp } from './Doodles'

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText(profileData.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const waUrl = `https://wa.me/${profileData.phoneWhatsapp}?text=${encodeURIComponent(
    profileData.whatsappMessage
  )}`

  const igUrl = `https://instagram.com/${profileData.instagram}`

  return (
    <section
      id="kontak"
      className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative bg-white"
      aria-label="Kontak dan Kolaborasi"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-10 pointer-events-none hidden md:block">
        <Starburst className="w-16 h-16 text-cobalt opacity-30" />
      </div>
      <div className="absolute bottom-12 left-10 pointer-events-none hidden md:block">
        <SparkleStar className="w-12 h-12 text-cobalt opacity-40" />
      </div>

      {/* Header with Huge Impactful Lettering: "Punya ide seru? Mari kita wujudkan bersama!" */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        
        {/* Section Stamp */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cobalt text-white border-3 border-cobalt shadow-cobalt mb-6 font-mono font-bold text-xs uppercase tracking-widest">
          <SparkleStar className="w-4 h-4" inverted />
          <span>TRANSMISSION // 03</span>
        </div>

        {/* Huge Impactful Lettering */}
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cobalt mb-6 tracking-tight uppercase leading-[1.05]">
          Punya ide seru? Mari kita wujudkan bersama!
        </h2>

        <p className="font-mono text-cobalt text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          // Tersedia untuk kolaborasi visual, character licensing, ilustrasi buku komik, serta visual identity bertenaga tinggi.
        </p>
      </div>

      {/* 3 Blocky Heavily Outlined Contact Cards with Solid Cobalt Buttons & Social Icons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        
        {/* Card 1: Email */}
        <div className="group relative bg-white p-7 border-4 border-cobalt shadow-cobalt-lg hover:shadow-cobalt-xl hover:-translate-x-1 hover:-translate-y-1 transition-all flex flex-col justify-between">
          
          {/* Top Decorative Tag */}
          <div className="flex items-center justify-between pb-4 border-b-2 border-cobalt mb-6">
            <span className="font-mono font-bold text-xs uppercase tracking-widest text-cobalt">
              [ CHANNEL 01 // EMAIL ]
            </span>
            <SparkleStar className="w-5 h-5 text-cobalt" />
          </div>

          <div>
            <div className="w-14 h-14 bg-cobalt text-white flex items-center justify-center border-3 border-cobalt shadow-cobalt-sm mb-4">
              <Mail className="w-7 h-7 stroke-[2.5]" />
            </div>

            <h3 className="font-display font-extrabold text-2xl text-cobalt uppercase mb-2">
              Email Resmi
            </h3>
            <p className="font-mono text-xs sm:text-sm text-cobalt leading-relaxed mb-6">
              Pengiriman brief resmi, dokumen proyek, NDA, dan penawaran komersial.
            </p>
          </div>

          <div className="pt-4 border-t-2 border-cobalt">
            <a
              href={`mailto:${profileData.email}`}
              className="w-full flex items-center justify-between p-3.5 bg-cobalt text-white font-mono font-bold text-xs uppercase tracking-wider border-2 border-cobalt hover:bg-white hover:text-cobalt transition-colors mb-2"
            >
              <span className="truncate">{profileData.email}</span>
              <ArrowUpRight className="w-4 h-4 flex-shrink-0 stroke-[3]" />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-full py-2 bg-white text-cobalt font-mono font-bold text-xs uppercase tracking-wider border-2 border-cobalt hover:bg-cobalt hover:text-white transition-colors flex items-center justify-center gap-1.5"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>ALAMAT EMAIL TERSALIN!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>SALIN ALAMAT EMAIL</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Card 2: WhatsApp (Highlighted Card with Inverted or Heavy Accent) */}
        <div className="group relative bg-white p-7 border-4 border-cobalt shadow-cobalt-xl hover:-translate-x-1 hover:-translate-y-1 transition-all flex flex-col justify-between">
          
          {/* Top Decorative Tag with Highlight Badge */}
          <div className="flex items-center justify-between pb-4 border-b-2 border-cobalt mb-6">
            <span className="font-mono font-bold text-xs uppercase tracking-widest text-cobalt">
              [ CHANNEL 02 // WHATSAPP ]
            </span>
            <span className="px-2 py-0.5 bg-cobalt text-white font-mono font-extrabold text-[10px] uppercase">
              FAST DISPATCH ⚡
            </span>
          </div>

          <div>
            <div className="w-14 h-14 bg-cobalt text-white flex items-center justify-center border-3 border-cobalt shadow-cobalt-sm mb-4">
              <MessageSquare className="w-7 h-7 stroke-[2.5]" />
            </div>

            <h3 className="font-display font-extrabold text-2xl text-cobalt uppercase mb-2">
              WhatsApp Direct
            </h3>
            <p className="font-mono text-xs sm:text-sm text-cobalt leading-relaxed mb-6">
              Diskusi cepat, cek ketersediaan jadwal gambar, atau sekadar tanya jawab teknis.
            </p>
          </div>

          <div className="pt-4 border-t-2 border-cobalt">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 p-3.5 bg-cobalt text-white font-mono font-bold text-xs uppercase tracking-wider border-2 border-cobalt shadow-cobalt hover:bg-white hover:text-cobalt hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <span>BUKA CHAT WHATSAPP</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </a>
            <p className="font-mono text-[10px] text-center text-cobalt mt-2 font-bold uppercase">
              // PRE-FILLED MESSAGE READY
            </p>
          </div>
        </div>

        {/* Card 3: Instagram */}
        <div className="group relative bg-white p-7 border-4 border-cobalt shadow-cobalt-lg hover:shadow-cobalt-xl hover:-translate-x-1 hover:-translate-y-1 transition-all flex flex-col justify-between">
          
          {/* Top Decorative Tag */}
          <div className="flex items-center justify-between pb-4 border-b-2 border-cobalt mb-6">
            <span className="font-mono font-bold text-xs uppercase tracking-widest text-cobalt">
              [ CHANNEL 03 // INSTAGRAM ]
            </span>
            <SparkleStar className="w-5 h-5 text-cobalt" />
          </div>

          <div>
            <div className="w-14 h-14 bg-cobalt text-white flex items-center justify-center border-3 border-cobalt shadow-cobalt-sm mb-4">
              <Instagram className="w-7 h-7 stroke-[2.5]" />
            </div>

            <h3 className="font-display font-extrabold text-2xl text-cobalt uppercase mb-2">
              Instagram Daily
            </h3>
            <p className="font-mono text-xs sm:text-sm text-cobalt leading-relaxed mb-6">
              Ikuti sketsa spontan harian, video proses inking, dan karya grafis eksperimental.
            </p>
          </div>

          <div className="pt-4 border-t-2 border-cobalt">
            <a
              href={igUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-3.5 bg-white text-cobalt font-mono font-bold text-xs uppercase tracking-wider border-2 border-cobalt hover:bg-cobalt hover:text-white transition-colors mb-2"
            >
              <span>@{profileData.instagram}</span>
              <ArrowUpRight className="w-4 h-4 text-cobalt stroke-[3]" />
            </a>
            <p className="font-mono text-[10px] text-center text-cobalt mt-2 font-bold uppercase">
              // DM OPEN FOR QUICK CHAT
            </p>
          </div>
        </div>

      </div>

      {/* Decorative Bottom Barcode */}
      <div className="flex items-center justify-between border-t-4 border-cobalt pt-6">
        <BarcodeStamp className="w-32 h-8 text-cobalt" />
        <span className="font-mono font-bold text-xs text-cobalt uppercase tracking-widest">
          COMMUNICATION PROTOCOL // #2242F5
        </span>
      </div>
    </section>
  )
}
