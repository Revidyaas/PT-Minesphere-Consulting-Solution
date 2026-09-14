import React from 'react';
import { Theme } from '../types';

export interface BrandLogoProps {
  className?: string;
  showSubtitle?: boolean;
  isScrolled?: boolean;
  theme?: Theme;
  layout?: 'horizontal' | 'stacked';
  useFullImage?: boolean;
}

export const MinesphereLogoSvg: React.FC<{
  className?: string;
  id?: string;
}> = ({
  className = 'w-10 h-10 sm:w-11 sm:h-11',
  id = 'minesphere-logo-svg',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="60 50 280 270"
    className={className}
    id={id}
    role="img"
    aria-label="PT Minesphere Konsultan Indonesia Logo"
  >
    <defs>
      {/* Main Minesphere green */}
      <linearGradient
        id={`${id}-green`}
        x1="0"
        y1="0"
        x2="0"
        y2="1"
      >
        <stop offset="0%" stopColor="#3DBA3A" />
        <stop offset="100%" stopColor="#3A9638" />
      </linearGradient>

      {/* Upper dome green */}
      <linearGradient
        id={`${id}-dome`}
        x1="0"
        y1="0"
        x2="0"
        y2="1"
      >
        <stop offset="0%" stopColor="#3DBA3A" />
        <stop offset="100%" stopColor="#3C9639" />
      </linearGradient>
    </defs>

    {/* ===================================== */}
    {/* TOP DOME / MINING HELMET              */}
    {/* ===================================== */}

    <path
      fill={`url(#${id}-dome)`}
      d="
        M 100 168
        A 100 100 0 0 1 300 168
        L 265 158
        L 265 143
        L 257 143
        L 257 157
        L 200 190
        L 143 157
        L 143 143
        L 135 143
        L 135 158
        Z
      "
    />

    {/* ===================================== */}
    {/* MAIN M / MOUNTAIN STRUCTURE            */}
    {/* ===================================== */}

    <path
      fill={`url(#${id}-green)`}
      d="
        M 65 178
        L 135 154
        L 200 190
        L 265 154
        L 335 178

        L 335 305

        L 289 280
        A 96 91 0 0 0 111 280

        L 65 305
        Z
      "
    />

    {/* ===================================== */}
    {/* NEGATIVE SPACE                         */}
    {/* ===================================== */}

    {/*
      IMPORTANT:
      DO NOT add a white path here.

      This area is intentionally transparent.
      The background behind the logo must show through.
    */}

    {/* ===================================== */}
    {/* FLOATING MINERAL ELEMENTS              */}
    {/* ===================================== */}

    {/* Left dark circle */}
    <circle
      cx="142"
      cy="257"
      r="6"
      fill="#416C4A"
    />

    {/* Left green circle */}
    <circle
      cx="161"
      cy="294"
      r="9"
      fill="#67AF60"
    />

    {/* Upper-right dark CIRCLE */}
    {/* MUST remain a circle — NOT a rectangle */}
    <circle
      cx="247"
      cy="239"
      r="10.5"
      fill="#416C4A"
    />

    {/* Right small dark circle */}
    <circle
      cx="268"
      cy="250"
      r="6"
      fill="#416C4A"
    />

    {/* Lower light circle */}
    <circle
      cx="218"
      cy="299"
      r="11"
      fill="#BCE9BA"
    />
  </svg>
);

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  showSubtitle = true,
  theme = 'dark',
  layout = 'horizontal',
  useFullImage = false,
}) => {
  const isLight = theme === 'light';

  const Emblem = (
    <MinesphereLogoSvg
      className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
      id="brand-logo-icon-svg"
    />
  );

  if (layout === 'stacked' || useFullImage) {
    return (
      <a
        href="#"
        className={`inline-flex flex-col items-center text-center group ${className}`}
        id="brand-logo-stacked-link"
        title="PT Minesphere Konsultan Indonesia"
      >
        <MinesphereLogoSvg
          className="w-20 h-20 sm:w-24 sm:h-24 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xs"
          id="brand-logo-stacked-svg"
        />
        <div className="flex flex-col items-center mt-2 font-heading">
          <span
            className={`font-black tracking-tight text-lg sm:text-xl font-heading transition-colors ${
              isLight ? 'text-[#0E4D64]' : 'text-white'
            }`}
          >
            MINESPHERE
          </span>
          {showSubtitle && (
            <span className="font-heading text-[10px] uppercase font-bold tracking-[0.16em] text-[#38A137] mt-0.5">
              KONSULTAN INDONESIA
            </span>
          )}
        </div>
      </a>
    );
  }

  return (
    <a
      href="#"
      className={`flex items-center gap-3 group ${className}`}
      id="brand-logo-link"
      title="PT Minesphere Konsultan Indonesia"
    >
      {Emblem}

      <div className="flex flex-col justify-center font-heading">
        <div className="flex items-center gap-1 leading-none font-heading">
          <span
            className={`font-black tracking-tight text-base sm:text-lg lg:text-xl font-heading transition-colors ${
              isLight ? 'text-[#0E4D64]' : 'text-white'
            }`}
          >
            MINESPHERE
          </span>
        </div>

        {showSubtitle && (
          <span
            className="font-heading text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.14em] text-[#38A137] mt-0.5"
          >
            KONSULTAN INDONESIA
          </span>
        )}
      </div>
    </a>
  );
};
