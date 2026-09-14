import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Language, Theme } from '../types';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import { MapPin, Phone, Globe, Instagram, Linkedin, ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: Language;
  theme?: Theme;
}

export const Footer: React.FC<FooterProps> = ({ lang, theme }) => {
  const isLight = theme === 'light';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="transition-colors duration-300 border-t text-xs bg-[#061D1A] border-[#163832] text-[#DAF1DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <BrandLogo theme="dark" />
            </div>
            <p className="text-xs leading-relaxed max-w-sm mb-6 text-[#E2E8F0]">
              {lang === 'EN'
                ? 'PT Minesphere Consulting Solution is an independent Indonesian mining engineering and environmental consulting advisory, delivering integrated solutions from exploration to post-mining closure.'
                : 'PT Minesphere Consulting Solution adalah perusahaan konsultan teknik pertambangan dan lingkungan independen di Indonesia, menghadirkan solusi terpadu dari eksplorasi hingga pasca-penambangan.'}
            </p>
            <div className="text-[11px] font-mono font-bold text-[#9EF073]">
              {lang === 'EN' ? COMPANY_INFO.taglineEn : COMPANY_INFO.taglineId}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider font-heading mb-4 text-white">
              {lang === 'EN' ? 'Navigation' : 'Navigasi'}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="text-[#DAF1DE] hover:text-[#9EF073] transition-colors">
                  {lang === 'EN' ? 'About Minesphere' : 'Tentang Kami'}
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#DAF1DE] hover:text-[#9EF073] transition-colors">
                  {lang === 'EN' ? 'Consulting Services' : 'Layanan Konsultasi'}
                </a>
              </li>
              <li>
                <a href="#expertise" className="text-[#DAF1DE] hover:text-[#9EF073] transition-colors">
                  {lang === 'EN' ? 'Core Expertise' : 'Keahlian Teknis'}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-[#DAF1DE] hover:text-[#5EEAD4] transition-colors">
                  {lang === 'EN' ? 'Project Portfolio' : 'Portofolio Proyek'}
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-[#DAF1DE] hover:text-[#5EEAD4] transition-colors">
                  {lang === 'EN' ? 'Why Minesphere' : 'Filosofi MINE & GREEN'}
                </a>
              </li>
              <li>
                <a href="#team" className="text-[#DAF1DE] hover:text-[#5EEAD4] transition-colors">
                  {lang === 'EN' ? 'Our Engineers & Partners' : 'Tim Partner & Ahli'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Consulting Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider font-heading mb-4 text-white">
              {lang === 'EN' ? 'Key Services' : 'Layanan Utama'}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#services" className="text-[#DAF1DE] hover:text-[#5EEAD4] transition-colors">
                  {lang === 'EN' ? '3-Year RKAB & ESDM Input Matrix' : 'Penyusunan RKAB 3-Tahunan & Matriks'}
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#DAF1DE] hover:text-[#5EEAD4] transition-colors">
                  {lang === 'EN' ? 'Wastewater Technical Approvals (Pertek)' : 'Persetujuan Teknis (Pertek) Air Limbah'}
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#DAF1DE] hover:text-[#5EEAD4] transition-colors">
                  {lang === 'EN' ? 'AMDAL & UKL-UPL (Amdalnet)' : 'AMDAL & UKL-UPL Bersetifikat KTPA'}
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#DAF1DE] hover:text-[#5EEAD4] transition-colors">
                  {lang === 'EN' ? 'Geotechnical & Hydrological Studies' : 'Kajian Geoteknik & Hidrologi Tambang'}
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#DAF1DE] hover:text-[#5EEAD4] transition-colors">
                  {lang === 'EN' ? 'Feasibility Studies & Techno-Economics' : 'Studi Kelayakan (FS) & Tekno-Ekonomi'}
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#DAF1DE] hover:text-[#5EEAD4] transition-colors">
                  {lang === 'EN' ? 'Reclamation & Mine Closure (RPT)' : 'Rencana Reklamasi & Pasca Tambang'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Palembang HQ & Socials */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider font-heading mb-4 text-white">
              {lang === 'EN' ? 'Palembang HQ Office' : 'Kantor Pusat Palembang'}
            </h4>
            <div className="space-y-3 text-[#E2E8F0]">
              <p className="leading-relaxed text-[#E2E8F0]">
                {COMPANY_INFO.address.street}, {COMPANY_INFO.address.subdistrict}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.province}
              </p>
              <div>
                <span className="block text-[10px] uppercase font-mono font-bold text-[#5EEAD4]">
                  Telepon & WA
                </span>
                <a href={`tel:${COMPANY_INFO.phone}`} className="font-semibold hover:underline text-white hover:text-[#5EEAD4]">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border transition-colors bg-[#163832] border-[#235347] text-[#DAF1DE] hover:text-white hover:bg-[#1F7A63] hover:border-[#1F7A63]"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border transition-colors bg-[#163832] border-[#235347] text-[#DAF1DE] hover:text-white hover:bg-[#1F7A63] hover:border-[#1F7A63]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`https://${COMPANY_INFO.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border transition-colors bg-[#163832] border-[#235347] text-[#DAF1DE] hover:text-white hover:bg-[#1F7A63] hover:border-[#1F7A63]"
                  aria-label="Website"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 border-[#163832] text-[#DAF1DE]">
          <p className="text-xs text-[#DAF1DE]">
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved. Palembang, South Sumatra, Indonesia.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-colors text-xs font-semibold cursor-pointer border-[#235347] hover:border-[#1F7A63] bg-[#163832] text-[#DAF1DE] hover:text-white hover:bg-[#1F7A63]"
          >
            <span>{lang === 'EN' ? 'Back to top' : 'Kembali ke atas'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

