import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

// Pixel-accurate SVG representing the exact official Fitness Options logo provided by user
const officialLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 500" width="1080" height="1000" fill="none">
  <defs>
    <!-- Red 3D Gradient for 'Fitness' front face -->
    <linearGradient id="red3DFront" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#E6262D" />
      <stop offset="100%" stop-color="#C7181F" />
    </linearGradient>

    <!-- Blue 3D Gradient for 'Options' front face -->
    <linearGradient id="blue3DFront" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1B55C8" />
      <stop offset="100%" stop-color="#1243A2" />
    </linearGradient>

    <!-- Figure 3D Gradients -->
    <linearGradient id="figBlueGradient" x1="10%" y1="0%" x2="90%" y2="100%">
      <stop offset="0%" stop-color="#2464E0" />
      <stop offset="50%" stop-color="#154BBA" />
      <stop offset="100%" stop-color="#0E368E" />
    </linearGradient>

    <radialGradient id="headRadial" cx="36%" cy="32%" r="65%">
      <stop offset="0%" stop-color="#FF585E" />
      <stop offset="55%" stop-color="#D91C23" />
      <stop offset="100%" stop-color="#880E13" />
    </radialGradient>

    <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="2" dy="5" stdDeviation="3.5" flood-color="#000000" flood-opacity="0.3" />
    </filter>
  </defs>

  <g filter="url(#softGlow)">
    <!-- ================= WORD: Fitness (Red 3D) ================= -->
    <g transform="translate(38, 252)">
      <!-- 3D extrusion sides angled slightly bottom-right -->
      <text x="8" y="8" font-family="'Liberation Sans', 'Arial Black', Impact, sans-serif" font-weight="900" font-size="134" letter-spacing="-1.5" fill="#50070A">Fitness</text>
      <text x="7" y="7" font-family="'Liberation Sans', 'Arial Black', Impact, sans-serif" font-weight="900" font-size="134" letter-spacing="-1.5" fill="#660A0D">Fitness</text>
      <text x="6" y="6" font-family="'Liberation Sans', 'Arial Black', Impact, sans-serif" font-weight="900" font-size="134" letter-spacing="-1.5" fill="#7E0D11">Fitness</text>
      <text x="5" y="5" font-family="'Liberation Sans', 'Arial Black', Impact, sans-serif" font-weight="900" font-size="134" letter-spacing="-1.5" fill="#961014">Fitness</text>
      <text x="4" y="4" font-family="'Liberation Sans', 'Arial Black', Impact, sans-serif" font-weight="900" font-size="134" letter-spacing="-1.5" fill="#AF1318">Fitness</text>
      <text x="3" y="3" font-family="'Liberation Sans', 'Arial Black', Impact, sans-serif" font-weight="900" font-size="134" letter-spacing="-1.5" fill="#C4171E">Fitness</text>
      <text x="2" y="2" font-family="'Liberation Sans', 'Arial Black', Impact, sans-serif" font-weight="900" font-size="134" letter-spacing="-1.5" fill="#D71B22">Fitness</text>
      <!-- Front Face -->
      <text x="0" y="0" font-family="'Liberation Sans', 'Arial Black', Impact, sans-serif" font-weight="900" font-size="134" letter-spacing="-1.5" fill="url(#red3DFront)">Fitness</text>
    </g>

    <!-- ================= WORD: Options (Royal Blue 3D) ================= -->
    <g transform="translate(38, 385)">
      <!-- 3D extrusion sides angled slightly bottom-right -->
      <text x="8" y="8" font-family="'Liberation Sans', 'Arial Black', Impact, sans-serif" font-weight="900" font-size="134" letter-spacing="-1.5" fill="#041230">Options</text>
      <text x="7" y="7" font-family="'Liberation Sans', 'Arial Black', Impact, sans-serif" font-weight="900" font-size="134" letter-spacing="-1.5" fill="#061B45">Options</text>
      <text x="6" y="6" font-family="'Liberation Sans', 'Arial Black', Impact, sans-serif" font-weight="900" font-size="134" letter-spacing="-1.5" fill="#08255E">Options</text>
      <text x="5" y="5" font-family="'Liberation Sans', 'Arial Black', Impact, sans-serif" font-weight="900" font-size="134" letter-spacing="-1.5" fill="#0B3078">Options</text>
      <text x="4" y="4" font-family="'Liberation Sans', 'Arial Black', Impact, sans-serif" font-weight="900" font-size="134" letter-spacing="-1.5" fill="#0E3D94">Options</text>
      <text x="3" y="3" font-family="'Liberation Sans', 'Arial Black', Impact, sans-serif" font-weight="900" font-size="134" letter-spacing="-1.5" fill="#1249B0">Options</text>
      <text x="2" y="2" font-family="'Liberation Sans', 'Arial Black', Impact, sans-serif" font-weight="900" font-size="134" letter-spacing="-1.5" fill="#1654C8">Options</text>
      <!-- Front Face -->
      <text x="0" y="0" font-family="'Liberation Sans', 'Arial Black', Impact, sans-serif" font-weight="900" font-size="134" letter-spacing="-1.5" fill="url(#blue3DFront)">Options</text>
    </g>

    <!-- ================= TAGLINE: enjoy your body (Royal Blue) ================= -->
    <g transform="translate(162, 442)">
      <text x="1.5" y="1.5" font-family="'Liberation Sans', 'Arial Black', sans-serif" font-weight="900" font-size="44" letter-spacing="-0.5" fill="#06173B">enjoy your body</text>
      <text x="0" y="0" font-family="'Liberation Sans', 'Arial Black', sans-serif" font-weight="900" font-size="44" letter-spacing="-0.5" fill="#1243A2">enjoy your body</text>
    </g>

    <!-- ================= ATHLETIC FIGURE (Stretching Ribon Figure) ================= -->
    <g id="figureStretching">
      <!-- 3D Cast Shadow / Depth -->
      <path
        d="M 474 36 C 440 43, 392 72, 370 118 C 352 155, 357 190, 368 217 C 374 231, 383 241, 392 247 C 410 259, 456 255, 504 237 C 508 235, 506 242, 500 245 C 448 271, 390 277, 369 257 C 354 243, 343 219, 341 185 C 339 133, 370 73, 432 37 C 460 21, 494 19, 518 23 C 524 24, 522 28, 516 29 C 502 31, 487 35, 474 36 Z"
        fill="#051536"
        transform="translate(4, 5)"
        opacity="0.55"
      />
      <path
        d="M 392 247 C 394 275, 404 330, 420 395 C 425 417, 432 443, 439 461 C 440 463, 437 464, 436 461 C 424 431, 406 345, 376 253 C 382 250, 387 248, 392 247 Z"
        fill="#051536"
        transform="translate(4, 5)"
        opacity="0.55"
      />

      <!-- Main Upper Arc Ribbon -->
      <path
        d="M 474 36 C 440 43, 392 72, 370 118 C 352 155, 357 190, 368 217 C 374 231, 383 241, 392 247 C 410 259, 456 255, 504 237 C 508 235, 506 242, 500 245 C 448 271, 390 277, 369 257 C 354 243, 343 219, 341 185 C 339 133, 370 73, 432 37 C 460 21, 494 19, 518 23 C 524 24, 522 28, 516 29 C 502 31, 487 35, 474 36 Z"
        fill="url(#figBlueGradient)"
      />

      <!-- Slender Trailing Leg -->
      <path
        d="M 392 247 C 394 275, 404 330, 420 395 C 425 417, 432 443, 439 461 C 440 463, 437 464, 436 461 C 424 431, 406 345, 376 253 C 382 250, 387 248, 392 247 Z"
        fill="url(#figBlueGradient)"
      />

      <!-- Bright 3D Specular Highlight on Ribbon Ridge -->
      <path
        d="M 516 29 C 466 29, 416 59, 382 105 C 362 132, 354 167, 356 195 C 354 165, 362 130, 384 101 C 420 53, 470 25, 520 23 C 519 25, 518 27, 516 29 Z"
        fill="#60A5FA"
        opacity="0.85"
      />

      <!-- Head 3D Drop Shadow -->
      <ellipse cx="400" cy="104" rx="20" ry="24" fill="#50070A" opacity="0.55" transform="translate(3, 4)" />
      <!-- Head 3D Red Sphere -->
      <ellipse cx="400" cy="104" rx="20" ry="24" fill="url(#headRadial)" />
    </g>
  </g>
</svg>`;

// Standalone Figure Mark
const markSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 500" width="480" height="1000" fill="none">
  <defs>
    <linearGradient id="figBlueMark" x1="10%" y1="0%" x2="90%" y2="100%">
      <stop offset="0%" stop-color="#2464E0" />
      <stop offset="50%" stop-color="#154BBA" />
      <stop offset="100%" stop-color="#0E368E" />
    </linearGradient>
    <radialGradient id="headRadialMark" cx="36%" cy="32%" r="65%">
      <stop offset="0%" stop-color="#FF585E" />
      <stop offset="55%" stop-color="#D91C23" />
      <stop offset="100%" stop-color="#880E13" />
    </radialGradient>
  </defs>

  <g transform="translate(-320, 0)">
    <!-- Shadow -->
    <path
      d="M 474 36 C 440 43, 392 72, 370 118 C 352 155, 357 190, 368 217 C 374 231, 383 241, 392 247 C 410 259, 456 255, 504 237 C 508 235, 506 242, 500 245 C 448 271, 390 277, 369 257 C 354 243, 343 219, 341 185 C 339 133, 370 73, 432 37 C 460 21, 494 19, 518 23 C 524 24, 522 28, 516 29 C 502 31, 487 35, 474 36 Z"
      fill="#051536"
      transform="translate(3, 4)"
      opacity="0.5"
    />
    <path
      d="M 392 247 C 394 275, 404 330, 420 395 C 425 417, 432 443, 439 461 C 440 463, 437 464, 436 461 C 424 431, 406 345, 376 253 C 382 250, 387 248, 392 247 Z"
      fill="#051536"
      transform="translate(3, 4)"
      opacity="0.5"
    />

    <!-- Main Body -->
    <path
      d="M 474 36 C 440 43, 392 72, 370 118 C 352 155, 357 190, 368 217 C 374 231, 383 241, 392 247 C 410 259, 456 255, 504 237 C 508 235, 506 242, 500 245 C 448 271, 390 277, 369 257 C 354 243, 343 219, 341 185 C 339 133, 370 73, 432 37 C 460 21, 494 19, 518 23 C 524 24, 522 28, 516 29 C 502 31, 487 35, 474 36 Z"
      fill="url(#figBlueMark)"
    />
    <path
      d="M 392 247 C 394 275, 404 330, 420 395 C 425 417, 432 443, 439 461 C 440 463, 437 464, 436 461 C 424 431, 406 345, 376 253 C 382 250, 387 248, 392 247 Z"
      fill="url(#figBlueMark)"
    />

    <!-- Highlight -->
    <path
      d="M 516 29 C 466 29, 416 59, 382 105 C 362 132, 354 167, 356 195 C 354 165, 362 130, 384 101 C 420 53, 470 25, 520 23 C 519 25, 518 27, 516 29 Z"
      fill="#60A5FA"
      opacity="0.8"
    />

    <!-- Head -->
    <ellipse cx="400" cy="104" rx="20" ry="24" fill="#50070A" opacity="0.5" transform="translate(2, 3)" />
    <ellipse cx="400" cy="104" rx="20" ry="24" fill="url(#headRadialMark)" />
  </g>
</svg>`;

async function main() {
  const publicDir = path.resolve(process.cwd(), 'public');
  const srcAssetsDir = path.resolve(process.cwd(), 'src/assets/images');

  // Save SVGs
  fs.writeFileSync(path.join(publicDir, 'fitness-options-logo.svg'), officialLogoSvg);
  fs.writeFileSync(path.join(publicDir, 'fitness-options-mark.svg'), markSvg);

  // Render PNGs with system fonts loaded
  const resvgFull = new Resvg(officialLogoSvg, {
    fitTo: { mode: 'width', value: 1080 },
    font: { loadSystemFonts: true }
  });
  const fullPng = resvgFull.render().asPng();

  const resvgMark = new Resvg(markSvg, {
    fitTo: { mode: 'height', value: 800 },
    font: { loadSystemFonts: true }
  });
  const markPng = resvgMark.render().asPng();

  // Write PNG files to both public and src/assets/images
  fs.writeFileSync(path.join(publicDir, 'fitness-options-logo.png'), fullPng);
  fs.writeFileSync(path.join(publicDir, 'image.png'), fullPng);
  fs.writeFileSync(path.join(publicDir, 'logo.png'), fullPng);
  fs.writeFileSync(path.join(publicDir, 'fitness-options-mark.png'), markPng);

  fs.writeFileSync(path.join(srcAssetsDir, 'logo.png'), fullPng);
  fs.writeFileSync(path.join(srcAssetsDir, 'fitness-options-logo.png'), fullPng);
  fs.writeFileSync(path.join(srcAssetsDir, 'fitness-options-mark.png'), markPng);

  console.log('✅ Generated official Fitness Options logo files in public/ and src/assets/images/');
}

main().catch(console.error);
