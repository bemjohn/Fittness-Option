import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

// Exact replica of the official Fitness Options "enjoy your body" logo as provided by the user
const fullLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 500" width="1080" height="1000" fill="none">
  <defs>
    <!-- 3D Bevel Filters and Gradients for Text & Figure -->
    <!-- Red 3D Extrusion Gradient -->
    <linearGradient id="redFront" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#E8242B" />
      <stop offset="100%" stop-color="#C9161C" />
    </linearGradient>
    <linearGradient id="redBevel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B31217" />
      <stop offset="100%" stop-color="#660A0D" />
    </linearGradient>

    <!-- Blue 3D Extrusion Gradient -->
    <linearGradient id="blueFront" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1B55C8" />
      <stop offset="100%" stop-color="#113F9E" />
    </linearGradient>
    <linearGradient id="blueBevel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0E337E" />
      <stop offset="100%" stop-color="#061842" />
    </linearGradient>

    <!-- Figure Blue Gradient with 3D sheen -->
    <linearGradient id="figureBlue" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stop-color="#2164E8" />
      <stop offset="50%" stop-color="#144ABF" />
      <stop offset="100%" stop-color="#0D358F" />
    </linearGradient>

    <!-- Head Red Gradient with 3D sphere highlight -->
    <radialGradient id="headSphere" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF5259" />
      <stop offset="50%" stop-color="#D91C23" />
      <stop offset="100%" stop-color="#800D11" />
    </radialGradient>

    <!-- Soft Drop Shadow -->
    <filter id="subtleShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="2" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.25" />
    </filter>
  </defs>

  <!-- ================= LOGO GRAPHIC ================= -->
  <g filter="url(#subtleShadow)">
    
    <!-- ================= WORD: Fitness (3D Extruded Red) ================= -->
    <g transform="translate(25, 230)">
      <!-- 3D Extrusion Layers (Bottom-Right Angle) -->
      <text x="7" y="7" font-family="'Montserrat', 'Arial Black', 'Helvetica Black', sans-serif" font-weight="900" font-size="124" letter-spacing="-2" fill="#5A080A">Fitness</text>
      <text x="6" y="6" font-family="'Montserrat', 'Arial Black', 'Helvetica Black', sans-serif" font-weight="900" font-size="124" letter-spacing="-2" fill="#750B0E">Fitness</text>
      <text x="5" y="5" font-family="'Montserrat', 'Arial Black', 'Helvetica Black', sans-serif" font-weight="900" font-size="124" letter-spacing="-2" fill="#910D11">Fitness</text>
      <text x="4" y="4" font-family="'Montserrat', 'Arial Black', 'Helvetica Black', sans-serif" font-weight="900" font-size="124" letter-spacing="-2" fill="#A81015">Fitness</text>
      <text x="3" y="3" font-family="'Montserrat', 'Arial Black', 'Helvetica Black', sans-serif" font-weight="900" font-size="124" letter-spacing="-2" fill="#BF141A">Fitness</text>
      <text x="2" y="2" font-family="'Montserrat', 'Arial Black', 'Helvetica Black', sans-serif" font-weight="900" font-size="124" letter-spacing="-2" fill="#CE181F">Fitness</text>
      <!-- Front Face -->
      <text x="0" y="0" font-family="'Montserrat', 'Arial Black', 'Helvetica Black', sans-serif" font-weight="900" font-size="124" letter-spacing="-2" fill="url(#redFront)">Fitness</text>
    </g>

    <!-- ================= WORD: Options (3D Extruded Royal Blue) ================= -->
    <g transform="translate(25, 348)">
      <!-- 3D Extrusion Layers (Bottom-Right Angle) -->
      <text x="7" y="7" font-family="'Montserrat', 'Arial Black', 'Helvetica Black', sans-serif" font-weight="900" font-size="124" letter-spacing="-2" fill="#051433">Options</text>
      <text x="6" y="6" font-family="'Montserrat', 'Arial Black', 'Helvetica Black', sans-serif" font-weight="900" font-size="124" letter-spacing="-2" fill="#081E4D">Options</text>
      <text x="5" y="5" font-family="'Montserrat', 'Arial Black', 'Helvetica Black', sans-serif" font-weight="900" font-size="124" letter-spacing="-2" fill="#0B2B6E">Options</text>
      <text x="4" y="4" font-family="'Montserrat', 'Arial Black', 'Helvetica Black', sans-serif" font-weight="900" font-size="124" letter-spacing="-2" fill="#0E378C">Options</text>
      <text x="3" y="3" font-family="'Montserrat', 'Arial Black', 'Helvetica Black', sans-serif" font-weight="900" font-size="124" letter-spacing="-2" fill="#1245B0">Options</text>
      <text x="2" y="2" font-family="'Montserrat', 'Arial Black', 'Helvetica Black', sans-serif" font-weight="900" font-size="124" letter-spacing="-2" fill="#1651CE">Options</text>
      <!-- Front Face -->
      <text x="0" y="0" font-family="'Montserrat', 'Arial Black', 'Helvetica Black', sans-serif" font-weight="900" font-size="124" letter-spacing="-2" fill="url(#blueFront)">Options</text>
    </g>

    <!-- ================= TAGLINE: enjoy your body (Royal Blue) ================= -->
    <g transform="translate(132, 404)">
      <!-- Bold lowercase tagline matching exact logo font -->
      <text x="1" y="1" font-family="'Montserrat', 'Arial Black', 'Helvetica Black', sans-serif" font-weight="900" font-size="43" letter-spacing="-0.5" fill="#071E47">enjoy your body</text>
      <text x="0" y="0" font-family="'Montserrat', 'Arial Black', 'Helvetica Black', sans-serif" font-weight="900" font-size="43" letter-spacing="-0.5" fill="#113F9E">enjoy your body</text>
    </g>

    <!-- ================= ATHLETIC FIGURE (Gymnast / Dancer Stretch) ================= -->
    <g id="figureGraphic">
      <!-- 3D Shadow under figure -->
      <path
        d="M 454 44 C 418 52, 368 84, 347 132 C 330 170, 337 205, 348 232 C 354 246, 363 256, 372 262 C 390 274, 436 270, 484 252 C 488 250, 486 257, 480 260 C 428 286, 370 292, 349 272 C 334 258, 323 234, 321 200 C 319 148, 350 88, 412 52 C 440 36, 474 34, 498 38 C 504 39, 502 43, 496 44 C 482 46, 467 43, 454 44 Z"
        fill="#071938"
        transform="translate(4, 4)"
        opacity="0.6"
      />
      <path
        d="M 372 262 C 374 290, 384 345, 400 410 C 405 432, 412 458, 419 476 C 420 478, 417 479, 416 476 C 404 446, 386 360, 356 268 C 362 265, 367 263, 372 262 Z"
        fill="#071938"
        transform="translate(4, 4)"
        opacity="0.6"
      />

      <!-- Main Upper Arc and Extended Arm -->
      <path
        d="M 454 44 C 418 52, 368 84, 347 132 C 330 170, 337 205, 348 232 C 354 246, 363 256, 372 262 C 390 274, 436 270, 484 252 C 488 250, 486 257, 480 260 C 428 286, 370 292, 349 272 C 334 258, 323 234, 321 200 C 319 148, 350 88, 412 52 C 440 36, 474 34, 498 38 C 504 39, 502 43, 496 44 C 482 46, 467 43, 454 44 Z"
        fill="url(#figureBlue)"
      />

      <!-- Trailing Slender Leg (Tapering to sharp foot at bottom right) -->
      <path
        d="M 372 262 C 374 290, 384 345, 400 410 C 405 432, 412 458, 419 476 C 420 478, 417 479, 416 476 C 404 446, 386 360, 356 268 C 362 265, 367 263, 372 262 Z"
        fill="url(#figureBlue)"
      />

      <!-- Inside Upper Ribbon Bevel (3D Highlight curve) -->
      <path
        d="M 496 44 C 446 44, 396 74, 362 120 C 342 147, 334 182, 336 210 C 334 180, 342 145, 364 116 C 400 68, 450 40, 500 38 C 499 40, 498 42, 496 44 Z"
        fill="#3B82F6"
        opacity="0.8"
      />

      <!-- Circular Head in Vibrant 3D Red (Tilted triumphantly in the crook of the arch) -->
      <!-- Head 3D shadow -->
      <ellipse cx="380" cy="116" rx="20" ry="24" fill="#5A080A" opacity="0.6" transform="translate(3, 4)" />
      <!-- Head 3D Sphere -->
      <ellipse cx="380" cy="116" rx="20" ry="24" fill="url(#headSphere)" />
    </g>
  </g>
</svg>`;

// Standalone Mark (the athletic ribbon figure with red head)
const markSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 500" width="480" height="1000" fill="none">
  <defs>
    <linearGradient id="figureBlueMark" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stop-color="#2164E8" />
      <stop offset="50%" stop-color="#144ABF" />
      <stop offset="100%" stop-color="#0D358F" />
    </linearGradient>
    <radialGradient id="headSphereMark" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF5259" />
      <stop offset="50%" stop-color="#D91C23" />
      <stop offset="100%" stop-color="#800D11" />
    </radialGradient>
  </defs>

  <g transform="translate(-300, 0)">
    <!-- 3D Shadow -->
    <path
      d="M 454 44 C 418 52, 368 84, 347 132 C 330 170, 337 205, 348 232 C 354 246, 363 256, 372 262 C 390 274, 436 270, 484 252 C 488 250, 486 257, 480 260 C 428 286, 370 292, 349 272 C 334 258, 323 234, 321 200 C 319 148, 350 88, 412 52 C 440 36, 474 34, 498 38 C 504 39, 502 43, 496 44 C 482 46, 467 43, 454 44 Z"
      fill="#071938"
      transform="translate(3, 4)"
      opacity="0.5"
    />
    <path
      d="M 372 262 C 374 290, 384 345, 400 410 C 405 432, 412 458, 419 476 C 420 478, 417 479, 416 476 C 404 446, 386 360, 356 268 C 362 265, 367 263, 372 262 Z"
      fill="#071938"
      transform="translate(3, 4)"
      opacity="0.5"
    />

    <!-- Main Upper Body & Arm -->
    <path
      d="M 454 44 C 418 52, 368 84, 347 132 C 330 170, 337 205, 348 232 C 354 246, 363 256, 372 262 C 390 274, 436 270, 484 252 C 488 250, 486 257, 480 260 C 428 286, 370 292, 349 272 C 334 258, 323 234, 321 200 C 319 148, 350 88, 412 52 C 440 36, 474 34, 498 38 C 504 39, 502 43, 496 44 C 482 46, 467 43, 454 44 Z"
      fill="url(#figureBlueMark)"
    />

    <!-- Leg -->
    <path
      d="M 372 262 C 374 290, 384 345, 400 410 C 405 432, 412 458, 419 476 C 420 478, 417 479, 416 476 C 404 446, 386 360, 356 268 C 362 265, 367 263, 372 262 Z"
      fill="url(#figureBlueMark)"
    />

    <!-- Highlight -->
    <path
      d="M 496 44 C 446 44, 396 74, 362 120 C 342 147, 334 182, 336 210 C 334 180, 342 145, 364 116 C 400 68, 450 40, 500 38 C 499 40, 498 42, 496 44 Z"
      fill="#3B82F6"
      opacity="0.8"
    />

    <!-- Red Head -->
    <ellipse cx="380" cy="116" rx="20" ry="24" fill="#5A080A" opacity="0.5" transform="translate(2, 3)" />
    <ellipse cx="380" cy="116" rx="20" ry="24" fill="url(#headSphereMark)" />
  </g>
</svg>`;

async function renderAssets() {
  const publicDir = path.resolve('/app/applet/public');
  const srcAssetsDir = path.resolve('/app/applet/src/assets/images');

  // Save SVGs
  fs.writeFileSync(path.join(publicDir, 'fitness-options-logo.svg'), fullLogoSvg);
  fs.writeFileSync(path.join(publicDir, 'fitness-options-mark.svg'), markSvg);

  // Render High-Resolution PNG for Full Logo
  const resvgFull = new Resvg(fullLogoSvg, {
    fitTo: { mode: 'width', value: 1080 }
  });
  const fullPngData = resvgFull.render().asPng();

  // Render Mark PNG
  const resvgMark = new Resvg(markSvg, {
    fitTo: { mode: 'height', value: 800 }
  });
  const markPngData = resvgMark.render().asPng();

  // Save full logo PNGs
  fs.writeFileSync(path.join(publicDir, 'fitness-options-logo.png'), fullPngData);
  fs.writeFileSync(path.join(publicDir, 'image.png'), fullPngData);
  fs.writeFileSync(path.join(publicDir, 'logo.png'), fullPngData);
  fs.writeFileSync(path.join(srcAssetsDir, 'logo.png'), fullPngData);
  fs.writeFileSync(path.join(srcAssetsDir, 'fitness-options-logo.png'), fullPngData);

  // Save mark PNGs
  fs.writeFileSync(path.join(publicDir, 'fitness-options-mark.png'), markPngData);
  fs.writeFileSync(path.join(srcAssetsDir, 'fitness-options-mark.png'), markPngData);

  console.log('Successfully generated official Fitness Options logo assets!');
}

renderAssets().catch(err => {
  console.error(err);
  process.exit(1);
});
