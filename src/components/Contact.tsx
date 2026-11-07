import React, { useState } from 'react'
import { Mail, MessageSquare, Instagram, Copy, Check, ArrowUpRight, Sparkles } from 'lucide-react'
import { profileData } from '../data/profile'
import { SparkleDoodle, StarDoodle } from './Doodles'

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText(profileData.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  // Format WhatsApp URL with encoded message
  const waUrl = `https://wa.me/${profileData.phoneWhatsapp}?text=${encodeURIComponent(
    profileData.whatsappMessage
  )}`

  // Format Instagram URL
  const igUrl = `https://instagram.com/${profileData.instagram}`

  return (
    <section
      id="kontak"
      className="py-20 md:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      aria-label="Kontak dan Kolaborasi"
    >
      {/* Decorative Floating Sparkles */}
      <div className="absolute top-12 left-8 pointer-events-none hidden md:block">
        <SparkleDoodle className="w-8 h-8 text-coral opacity-80" />
      </div>
      <div className="absolute top-20 right-12 pointer-events-none hidden md:block">
        <StarDoodle className="w-8 h-8 text-peach-medium opacity-80" />
      </div>

      {/* Heading & Call to Action */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-mint border-2 border-plum-900 shadow-sticker mb-4">
          <Sparkles className="w-4 h-4 text-coral" />
          <span className="font-display font-bold text-xs uppercase tracking-wider text-plum-900">
            Ayo Berkolaborasi
          </span>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-plum-900 mb-4 tracking-tight">
          Punya ide seru? Mari kita wujudkan bersama!
        </h2>

        <p className="text-plum-800 text-base sm:text-lg leading-relaxed">
          Mau mendiskusikan character design, ilustrasi editorial, cover buku, atau sekadar bertukar sapa? Pintu studio selalu terbuka lebar.
        </p>
      </div>

      {/* 3 Big Tactile CTA Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
        
        {/* Card 1: Email */}
        <div className="group relative bg-cream-50 p-7 rounded-3xl sm:rounded-4xl border-3 border-plum-900 shadow-sticker hover:shadow-sticker-xl hover:-translate-y-1.5 transition-all flex flex-col justify-between">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-peach border-2 border-plum-900 shadow-sticker flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
              <Mail className="w-7 h-7 text-plum-900" />
            </div>

            <span className="text-xs font-display font-bold uppercase tracking-wider text-plum-800/80">
              Kirim Surat Elektronik
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-plum-900 mt-1 mb-2">
              Email Resmi
            </h3>
            <p className="text-sm text-plum-800 leading-relaxed mb-6">
              Cocok untuk brief formal, permintaan proposal, atau proyek skala besar.
            </p>
          </div>

          <div>
            <a
              href={`mailto:${profileData.email}`}
              className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-cream-100 hover:bg-peach border-2 border-plum-900 text-plum-900 font-display font-bold text-sm transition-colors mb-2"
            >
              <span className="truncate">{profileData.email}</span>
              <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-coral" />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-plum-800 hover:text-plum-950 py-1 transition-colors"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-mint-dark" />
                  <span className="text-mint-dark font-bold">Tersalin ke clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin alamat email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Card 2: WhatsApp (Highlighted Card) */}
        <div className="group relative bg-mint-light p-7 rounded-3xl sm:rounded-4xl border-3 border-plum-900 shadow-sticker-lg hover:shadow-sticker-xl hover:-translate-y-1.5 transition-all flex flex-col justify-between">
          {/* Badge Rekomendasi */}
          <div className="absolute -top-3.5 right-6 bg-coral text-cream-50 font-display font-bold text-xs px-3 py-1 rounded-full border-2 border-plum-900 shadow-sm rotate-2">
            Respon Cepat ⚡
          </div>

          <div>
            <div className="w-14 h-14 rounded-2xl bg-mint border-2 border-plum-900 shadow-sticker flex items-center justify-center mb-6 group-hover:-rotate-6 transition-transform">
              <MessageSquare className="w-7 h-7 text-plum-900" />
            </div>

            <span className="text-xs font-display font-bold uppercase tracking-wider text-plum-800/80">
              Obrolan Langsung
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-plum-900 mt-1 mb-2">
              WhatsApp
            </h3>
            <p className="text-sm text-plum-800 leading-relaxed mb-6">
              Ngobrol santai seputar ketersediaan jadwal, perkiraan biaya, dan tanya jawab cepat.
            </p>
          </div>

          <div>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-coral hover:bg-coral-hover text-cream-50 font-display font-bold text-sm border-2 border-plum-900 shadow-sticker active:translate-y-0.5 transition-all"
            >
              <span>Chat di WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-[11px] text-center text-plum-800/70 mt-2 font-medium">
              Pesan sapaan otomatis sudah disiapkan
            </p>
          </div>
        </div>

        {/* Card 3: Instagram */}
        <div className="group relative bg-cream-50 p-7 rounded-3xl sm:rounded-4xl border-3 border-plum-900 shadow-sticker hover:shadow-sticker-xl hover:-translate-y-1.5 transition-all flex flex-col justify-between">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-lilac border-2 border-plum-900 shadow-sticker flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
              <Instagram className="w-7 h-7 text-plum-900" />
            </div>

            <span className="text-xs font-display font-bold uppercase tracking-wider text-plum-800/80">
              Keseharian & Doodles
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-plum-900 mt-1 mb-2">
              Instagram
            </h3>
            <p className="text-sm text-plum-800 leading-relaxed mb-6">
              Ikuti sketsa spontan, work in progress harian, dan reel proses berkarya.
            </p>
          </div>

          <div>
            <a
              href={igUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-cream-100 hover:bg-lilac/70 border-2 border-plum-900 text-plum-900 font-display font-bold text-sm transition-colors mb-2"
            >
              <span>@{profileData.instagram}</span>
              <ArrowUpRight className="w-4 h-4 text-coral" />
            </a>
            <p className="text-[11px] text-center text-plum-800/70 mt-2 font-medium">
              Kirim DM untuk sapaan singkat
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
