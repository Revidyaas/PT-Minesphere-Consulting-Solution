import React, { useState } from 'react';
import { Phone, Mail, MapPin, Globe, Instagram, Linkedin, Send, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { Language, Theme } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { ScrollReveal } from './ScrollReveal';

interface ContactCTAProps {
  lang: Language;
  theme?: Theme;
  prefilledService?: string;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ lang, theme, prefilledService }) => {
  const isLight = theme === 'light';
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    commodity: 'Batubara',
    service: prefilledService || 'Studi Kelayakan / RKAB',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build direct WhatsApp message
    const waText = encodeURIComponent(
      `Halo PT Minesphere Consulting Solution,\n\nNama: ${formData.name}\nPerusahaan: ${formData.company}\nKomoditas: ${formData.commodity}\nKebutuhan Layanan: ${formData.service}\nNo. Telp/WA: ${formData.phone}\n\nPesan:\n${formData.message}`
    );
    window.open(`https://wa.me/6285186060812?text=${waText}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section className={`py-24 relative border-t transition-colors duration-300 ${
      isLight ? 'bg-[#F4F5EE] border-neutral-200/60' : 'bg-[#051F20] border-[#163832]'
    }`} id="contact">
      {/* Subtle Background Glow */}
      <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isLight ? 'bg-[#1F7A63]/10' : 'bg-emerald-500/5'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Headline & Direct Contact Info - Scroll Reveal Left */}
          <ScrollReveal direction="left" duration={0.7} className="lg:col-span-5">
            <h2 className={`text-4xl sm:text-5xl font-black tracking-tight font-heading leading-tight mb-6 ${
              isLight ? 'text-[#061D1A]' : 'text-white'
            }`}>
              LET'S BUILD <br />
              <span className={isLight ? 'text-[#1F7A63]' : 'text-[#5EEAD4]'}>BETTER MINING</span> <br />
              SOLUTIONS.
            </h2>

            <p className={`text-base sm:text-lg leading-relaxed mb-8 ${
              isLight ? 'text-[#061D1A]' : 'text-[#DAF1DE]'
            }`}>
              {lang === 'EN'
                ? 'Partner with Minesphere for technical, environmental, and strategic consulting solutions across the mining lifecycle.'
                : 'Bermitra dengan Minesphere untuk solusi konsultasi teknis, lingkungan, dan strategis di seluruh siklus hidup pertambangan.'}
            </p>

            {/* Verified Contact Details from Company Profile */}
            <div className="space-y-4 mb-8">
              <div className={`p-4 rounded-2xl border flex items-start gap-3.5 transition-colors ${
                isLight ? 'bg-white border-neutral-200/80 shadow-xs' : 'bg-[#0B2B26] border-[#163832]'
              }`}>
                <MapPin className={`w-5 h-5 flex-shrink-0 mt-1 ${
                  isLight ? 'text-[#1F7A63]' : 'text-[#5EEAD4]'
                }`} />
                <div className="text-xs">
                  <span className={`font-bold block mb-0.5 ${
                    isLight ? 'text-[#061D1A]' : 'text-white'
                  }`}>
                    {lang === 'EN' ? 'Headquarters (Kantor Pusat)' : 'Kantor Pusat Palembang'}
                  </span>
                  <p className={`leading-relaxed ${
                    isLight ? 'text-[#0F172A]' : 'text-slate-400'
                  }`}>
                    {COMPANY_INFO.address.street}, {COMPANY_INFO.address.subdistrict}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.province}, {COMPANY_INFO.address.country}
                  </p>
                </div>
              </div>

              <div className={`p-4 rounded-xl border flex items-start gap-3.5 transition-colors ${
                isLight ? 'bg-slate-50 border-[#E2E8F0]' : 'bg-slate-900/60 border-slate-800/80'
              }`}>
                <Phone className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                  isLight ? 'text-[#235347]' : 'text-emerald-400'
                }`} />
                <div className="text-xs">
                  <span className={`font-bold block mb-0.5 ${
                    isLight ? 'text-[#061D1A]' : 'text-white'
                  }`}>
                    {lang === 'EN' ? 'Phone & WhatsApp Advisory' : 'Telepon & Layanan WhatsApp'}
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className={`font-mono font-bold hover:underline ${
                      isLight ? 'text-[#061D1A]' : 'text-emerald-400'
                    }`}
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className={`p-4 rounded-xl border flex items-start gap-3.5 transition-colors ${
                isLight ? 'bg-slate-50 border-[#E2E8F0]' : 'bg-slate-900/60 border-slate-800/80'
              }`}>
                <Globe className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                  isLight ? 'text-[#235347]' : 'text-emerald-400'
                }`} />
                <div className="text-xs">
                  <span className={`font-bold block mb-0.5 ${
                    isLight ? 'text-[#061D1A]' : 'text-white'
                  }`}>
                    {lang === 'EN' ? 'Digital Channels' : 'Kanal Resmi & Media Sosial'}
                  </span>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    <a
                      href={COMPANY_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 transition-colors ${
                        isLight ? 'text-[#061D1A] font-semibold hover:text-[#235347]' : 'text-slate-300 hover:text-emerald-400'
                      }`}
                    >
                      <Instagram className={`w-3.5 h-3.5 ${isLight ? 'text-[#235347]' : 'text-emerald-400'}`} />
                      <span>{COMPANY_INFO.instagram}</span>
                    </a>
                    <span className={isLight ? 'text-slate-400' : 'text-slate-600'}>•</span>
                    <a
                      href={COMPANY_INFO.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 transition-colors ${
                        isLight ? 'text-[#061D1A] font-semibold hover:text-[#235347]' : 'text-slate-300 hover:text-emerald-400'
                      }`}
                    >
                      <Linkedin className={`w-3.5 h-3.5 ${isLight ? 'text-[#235347]' : 'text-emerald-400'}`} />
                      <span>{COMPANY_INFO.linkedin}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Interactive Consultation Request Form - Scroll Reveal Right */}
          <ScrollReveal direction="right" duration={0.7} delay={0.15} className="lg:col-span-7">
            <div className={`p-8 sm:p-10 rounded-3xl border transition-colors ${
              isLight
                ? 'bg-white border-neutral-200/80 shadow-xl'
                : 'bg-gradient-to-b from-[#0B2B26] to-[#051F20] border-[#163832] shadow-2xl'
            }`}>
              <div className="mb-6">
                <h3 className={`text-xl font-bold font-heading ${
                  isLight ? 'text-[#061D1A]' : 'text-white'
                }`}>
                  {lang === 'EN' ? 'Schedule a Technical Consultation' : 'Ajukan Konsultasi Teknis Tambang'}
                </h3>
                <p className={`text-xs mt-1 ${
                  isLight ? 'text-[#061D1A]' : 'text-[#DAF1DE]/70'
                }`}>
                  {lang === 'EN'
                    ? 'Connect directly with our mining engineers and environmental specialists.'
                    : 'Terhubung langsung dengan tim insinyur pertambangan dan ahli lingkungan kami.'}
                </p>
              </div>

              {isSubmitted ? (
                <div className={`p-8 text-center rounded-2xl border ${
                  isLight
                    ? 'bg-[#DAF1DE]/40 border-[#1F7A63]/40'
                    : 'bg-[#0B2B26] border-[#1F7A63]/30'
                }`}>
                  <CheckCircle2 className={`w-12 h-12 mx-auto mb-3 ${
                    isLight ? 'text-[#1F7A63]' : 'text-[#5EEAD4]'
                  }`} />
                  <h4 className={`text-lg font-bold font-heading mb-1 ${
                    isLight ? 'text-[#061D1A]' : 'text-white'
                  }`}>
                    {lang === 'EN' ? 'Consultation Request Dispatched' : 'Permintaan Konsultasi Terkirim'}
                  </h4>
                  <p className={`text-xs mb-4 ${
                    isLight ? 'text-[#061D1A]' : 'text-[#DAF1DE]/80'
                  }`}>
                    {lang === 'EN'
                      ? 'Our partners will review your concession scope and respond shortly.'
                      : 'Tim partner kami sedang meninjau lingkup konsesi Anda dan akan segera menghubungi Anda.'}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2.5 text-xs font-black text-white bg-[#1F7A63] rounded-full hover:bg-[#186451] transition-colors cursor-pointer"
                  >
                    {lang === 'EN' ? 'Submit Another Request' : 'Kirim Pesan Lainnya'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-bold mb-1.5 ${
                        isLight ? 'text-[#061D1A]' : 'text-[#DAF1DE]'
                      }`}>
                        {lang === 'EN' ? 'Full Name *' : 'Nama Lengkap *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={lang === 'EN' ? 'e.g., Ir. Bambang S.' : 'contoh: Ir. Bambang S.'}
                        className={`w-full rounded-xl px-3.5 py-2.5 text-xs focus:outline-none transition-colors ${
                          isLight
                            ? 'bg-[#F4F5EE] border border-neutral-300 text-[#061D1A] font-medium focus:bg-white focus:border-[#1F7A63]'
                            : 'bg-[#051F20] border border-[#163832] text-slate-200 focus:border-[#1F7A63]'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-bold mb-1.5 ${
                        isLight ? 'text-[#061D1A]' : 'text-[#DAF1DE]'
                      }`}>
                        {lang === 'EN' ? 'Company / Concession (IUP) *' : 'Nama Perusahaan / Pemegang IUP *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder={lang === 'EN' ? 'e.g., PT Tambang Maju' : 'contoh: PT Tambang Maju'}
                        className={`w-full rounded-xl px-3.5 py-2.5 text-xs focus:outline-none transition-colors ${
                          isLight
                            ? 'bg-[#F4F5EE] border border-neutral-300 text-[#061D1A] font-medium focus:bg-white focus:border-[#1F7A63]'
                            : 'bg-[#051F20] border border-[#163832] text-slate-200 focus:border-[#1F7A63]'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-bold mb-1.5 ${
                        isLight ? 'text-[#061D1A]' : 'text-[#DAF1DE]'
                      }`}>
                        {lang === 'EN' ? 'Commodity' : 'Komoditas Tambang'}
                      </label>
                      <select
                        value={formData.commodity}
                        onChange={(e) => setFormData({ ...formData, commodity: e.target.value })}
                        className={`w-full rounded-xl px-3.5 py-2.5 text-xs focus:outline-none transition-colors ${
                          isLight
                            ? 'bg-[#F4F5EE] border border-neutral-300 text-[#061D1A] font-medium focus:bg-white focus:border-[#1F7A63]'
                            : 'bg-[#051F20] border border-[#163832] text-slate-200 focus:border-[#1F7A63]'
                        }`}
                      >
                        <option value="Batubara">Batubara (Coal)</option>
                        <option value="Nikel / Mineral Logam">Nikel / Bauksit / Emas</option>
                        <option value="Batu Andesit / Batuan">Batu Andesit / Split / Granit</option>
                        <option value="Tanah Urug & Bahan Galian">Tanah Urug & Pasir</option>
                        <option value="Lainnya">Komoditas Lainnya</option>
                      </select>
                    </div>

                    <div>
                      <label className={`block text-xs font-bold mb-1.5 ${
                        isLight ? 'text-[#061D1A]' : 'text-[#DAF1DE]'
                      }`}>
                        {lang === 'EN' ? 'Phone / WhatsApp *' : 'Nomor WhatsApp Aktif *'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+62 8..."
                        className={`w-full rounded-xl px-3.5 py-2.5 text-xs focus:outline-none transition-colors ${
                          isLight
                            ? 'bg-[#F4F5EE] border border-neutral-300 text-[#061D1A] font-medium focus:bg-white focus:border-[#1F7A63]'
                            : 'bg-[#051F20] border border-[#163832] text-slate-200 focus:border-[#1F7A63]'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-bold mb-1.5 ${
                      isLight ? 'text-[#061D1A]' : 'text-[#DAF1DE]'
                    }`}>
                      {lang === 'EN' ? 'Service Focus Required' : 'Fokus Layanan yang Dibutuhkan'}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`w-full rounded-xl px-3.5 py-2.5 text-xs focus:outline-none transition-colors ${
                        isLight
                          ? 'bg-[#F4F5EE] border border-neutral-300 text-[#061D1A] font-medium focus:bg-white focus:border-[#1F7A63]'
                          : 'bg-[#051F20] border border-[#163832] text-slate-200 focus:border-[#1F7A63]'
                      }`}
                    >
                      <option value="Penyusunan Dokumen RKAB & Matriks Input">Penyusunan Dokumen RKAB & Matriks Input ESDM</option>
                      <option value="Studi Kelayakan (FS) & Tekno-Ekonomi">Studi Kelayakan (FS) & Evaluasi Tekno-Ekonomi</option>
                      <option value="Persetujuan Teknis Air Limbah (Pertek) & SLO">Persetujuan Teknis Air Limbah (Pertek) & SLO</option>
                      <option value="AMDAL / UKL-UPL & PPKPLH Amdalnet">AMDAL / UKL-UPL & PPKPLH Amdalnet</option>
                      <option value="Kajian Geoteknik & Kestabilan Lereng">Kajian Geoteknik & Kestabilan Lereng</option>
                      <option value="Kajian Hidrologi, Hidrogeologi & Air Asam Tambang">Kajian Hidrologi, Hidrogeologi & Air Asam Tambang</option>
                      <option value="Rencana Peledakan (RKAB Blasting)">Rencana Peledakan (RKAB Blasting)</option>
                      <option value="Reklamasi & Pasca Tambang">Rencana Reklamasi 5 Tahunan & Pasca Tambang</option>
                      <option value="Perizinan Tambang (WIUP/IUP/MODI)">Perizinan Tambang (WIUP / IUP / MODI / KTT)</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-xs font-bold mb-1.5 ${
                      isLight ? 'text-[#061D1A]' : 'text-[#DAF1DE]'
                    }`}>
                      {lang === 'EN' ? 'Project Details or Specific Requirement' : 'Keterangan Tambahan / Lingkup Tambang'}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        lang === 'EN'
                          ? 'Please describe your concession location, current stage, and desired target date.'
                          : 'Sebutkan lokasi konsesi, luas area, tahapan operasional, atau target waktu pengajuan.'
                      }
                      className={`w-full rounded-xl px-3.5 py-2.5 text-xs focus:outline-none transition-colors ${
                        isLight
                          ? 'bg-[#F4F5EE] border border-neutral-300 text-[#061D1A] font-medium focus:bg-white focus:border-[#1F7A63]'
                          : 'bg-[#051F20] border border-[#163832] text-slate-200 focus:border-[#1F7A63]'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full bg-[#1F7A63] hover:bg-[#186451] text-white font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                    id="submit-consultation-form-btn"
                  >
                    <span>{lang === 'EN' ? 'CONSULT OUR TEAM NOW' : 'KONSULTASI DENGAN TIM SEKARANG'}</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

