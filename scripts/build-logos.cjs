const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const COLOR_GREEN = '#38A635';       // Dome & M Structure
const COLOR_TEAL = '#104B5F';        // MINESPHERE in original logo
const COLOR_SUB_GREEN = '#2F6B34';   // KONSULTAN INDONESIA in original logo
const COLOR_MOUND = '#FFFFFF';       // White ore stockpile mound
const COLOR_DOT_DARK = '#204E3F';    // Dark teal/green mineral specks
const COLOR_DOT_GREEN = '#43A047';   // Vibrant green mineral speck
const COLOR_DOT_LIGHT = '#DDF4DC';   // Pale translucent green speck

// Light text variants for dark mode
const COLOR_TEAL_LIGHT = '#FFFFFF';
const COLOR_SUB_GREEN_LIGHT = '#9EF073';

function getEmblemSVG(moundColor = COLOR_MOUND) {
  return `
    <g id="minesphere-emblem">
      <!-- Top Green Dome -->
      <path d="M 382 338 A 118 118 0 0 1 618 338 Z" fill="${COLOR_GREEN}" />
      
      <!-- Stylized 'M' Structure -->
      <path d="M 332 376 
               L 413 330 
               L 413 314 
               L 420 314 
               L 420 334 
               L 500 376 
               L 580 334 
               L 580 314 
               L 587 314 
               L 587 330 
               L 668 376 
               L 668 576 
               L 614 548 
               A 135 125 0 0 0 386 548 
               L 332 576 Z" fill="${COLOR_GREEN}" />
               
      <!-- White Mound inside tunnel arch -->
      <path d="M 386 548 A 133 123 0 0 1 614 548 L 614 576 L 386 576 Z" fill="${moundColor}" />
      
      <!-- Specks of mineral ore on mound -->
      <circle cx="423" cy="522" r="7.5" fill="${COLOR_DOT_DARK}" />
      <circle cx="445" cy="560" r="10" fill="${COLOR_DOT_GREEN}" />
      <circle cx="553" cy="496" r="11" fill="${COLOR_DOT_DARK}" />
      <circle cx="576" cy="505" r="6.5" fill="${COLOR_DOT_DARK}" />
      <circle cx="525" cy="564" r="12" fill="${COLOR_DOT_LIGHT}" />
    </g>
  `;
}

// 1. Full Square / Stacked Logo (Like Fix Logo copy.png)
function getStackedLogoSVG(titleColor, subColor, bg = 'none') {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
    ${bg !== 'none' ? `<rect width="1000" height="1000" fill="${bg}" />` : ''}
    ${getEmblemSVG()}
    <text x="500" y="722" font-family="Liberation Sans, -apple-system, system-ui, sans-serif" font-weight="900" font-size="104" letter-spacing="-1.5" text-anchor="middle" fill="${titleColor}">MINESPHERE</text>
    <text x="500" y="792" font-family="Liberation Sans, -apple-system, system-ui, sans-serif" font-weight="700" font-size="43" letter-spacing="4" text-anchor="middle" fill="${subColor}">KONSULTAN INDONESIA</text>
  </svg>
  `;
}

// 2. Icon Only SVG (Tight bounds around emblem: 310,210 to 690,590)
function getIconSVG(bg = 'none') {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="320 215 360 370" width="512" height="512">
    ${bg !== 'none' ? `<rect x="320" y="215" width="360" height="370" fill="${bg}" />` : ''}
    ${getEmblemSVG()}
  </svg>
  `;
}

// 3. Horizontal Wide Logo (Emblem on left, text on right)
function getHorizontalLogoSVG(titleColor, subColor, bg = 'none') {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 360" width="1100" height="360">
    ${bg !== 'none' ? `<rect width="1100" height="360" fill="${bg}" />` : ''}
    <!-- Scaled & Shifted Emblem on the left -->
    <g transform="translate(-250, -115) scale(0.9)">
      ${getEmblemSVG()}
    </g>
    <!-- Text on the right -->
    <g transform="translate(360, 0)">
      <text x="0" y="195" font-family="Liberation Sans, -apple-system, system-ui, sans-serif" font-weight="900" font-size="94" letter-spacing="-1.2" fill="${titleColor}">MINESPHERE</text>
      <text x="4" y="258" font-family="Liberation Sans, -apple-system, system-ui, sans-serif" font-weight="700" font-size="36" letter-spacing="3.5" fill="${subColor}">KONSULTAN INDONESIA</text>
    </g>
  </svg>
  `;
}

async function generateAll() {
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // 1. "Fix Logo copy.png" (the exact name user uploaded - on transparent and white background)
  // Transparent version
  await sharp(Buffer.from(getStackedLogoSVG(COLOR_TEAL, COLOR_SUB_GREEN)))
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'Fix Logo copy.png'));
  console.log('✓ Created Fix Logo copy.png');

  // 2. Standard minesphere-logo.png
  await sharp(Buffer.from(getStackedLogoSVG(COLOR_TEAL, COLOR_SUB_GREEN)))
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'minesphere-logo.png'));
  console.log('✓ Created minesphere-logo.png');

  // 3. Dark mode stacked logo
  await sharp(Buffer.from(getStackedLogoSVG(COLOR_TEAL_LIGHT, COLOR_SUB_GREEN_LIGHT)))
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'minesphere-logo-dark.png'));
  console.log('✓ Created minesphere-logo-dark.png');

  // 4. Icon only
  await sharp(Buffer.from(getIconSVG()))
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'minesphere-icon.png'));
  console.log('✓ Created minesphere-icon.png');

  // 5. Favicon PNG
  await sharp(Buffer.from(getIconSVG()))
    .resize(64, 64)
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));
  console.log('✓ Created favicon.png');

  // 6. Horizontal Navbar Logo (Light & Dark)
  await sharp(Buffer.from(getHorizontalLogoSVG(COLOR_TEAL, COLOR_SUB_GREEN)))
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'minesphere-logo-horizontal.png'));
  console.log('✓ Created minesphere-logo-horizontal.png');

  await sharp(Buffer.from(getHorizontalLogoSVG(COLOR_TEAL_LIGHT, COLOR_SUB_GREEN_LIGHT)))
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'minesphere-logo-horizontal-dark.png'));
  console.log('✓ Created minesphere-logo-horizontal-dark.png');

  console.log('All PNG logos generated successfully!');
}

generateAll().catch(err => {
  console.error('Error generating logos:', err);
  process.exit(1);
});
