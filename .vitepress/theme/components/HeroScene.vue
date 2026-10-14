<template>
  <div class="hero-scene" aria-hidden="true">
    <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" class="hero-svg">
      <defs>
        <!-- 天空渐变 -->
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1a3a2a" />
          <stop offset="40%" stop-color="#2d5a3d" />
          <stop offset="70%" stop-color="#4a7c4e" />
          <stop offset="100%" stop-color="#8bc34a" stop-opacity="0.6" />
        </linearGradient>
        <!-- 太阳光晕 -->
        <radialGradient id="sun-glow">
          <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.8" />
          <stop offset="40%" stop-color="#f59e0b" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#f59e0b" stop-opacity="0" />
        </radialGradient>
        <!-- 山层 -->
        <linearGradient id="hill1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2d5a3d" />
          <stop offset="100%" stop-color="#1a3a2a" />
        </linearGradient>
        <linearGradient id="hill2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1a3a2a" />
          <stop offset="100%" stop-color="#0d1f15" />
        </linearGradient>
        <!-- 树叶 -->
        <radialGradient id="canopy">
          <stop offset="0%" stop-color="#5db86e" />
          <stop offset="60%" stop-color="#3c8c4c" />
          <stop offset="100%" stop-color="#2d7a3e" />
        </radialGradient>
      </defs>

      <!-- 天空 -->
      <rect width="600" height="400" fill="url(#sky)" />

      <!-- 太阳 + 光晕 -->
      <circle cx="450" cy="120" r="80" fill="url(#sun-glow)" class="sun-glow" />
      <circle cx="450" cy="120" r="35" fill="#f59e0b" opacity="0.9" class="sun-core" />
      <circle cx="450" cy="120" r="35" fill="none" stroke="#fbbf24" stroke-width="2" opacity="0.5" class="sun-ring" />

      <!-- 远山 -->
      <path d="M0,280 Q100,200 200,250 T400,230 T600,260 L600,400 L0,400 Z" fill="url(#hill1)" opacity="0.7" class="layer-far" />
      <!-- 近山 -->
      <path d="M0,320 Q80,260 180,290 Q300,320 400,280 Q500,250 600,290 L600,400 L0,400 Z" fill="url(#hill2)" class="layer-near" />

      <!-- 大树 -->
      <g class="tree-group" transform="translate(150, 280)">
        <!-- 树干 -->
        <path d="M-8,0 Q-6,-40 -4,-80 Q-2,-100 0,-120 Q2,-100 4,-80 Q6,-40 8,0 Z" fill="#3d2914" />
        <!-- 树枝 -->
        <path d="M0,-80 Q-20,-90 -35,-100" stroke="#3d2914" stroke-width="3" fill="none" />
        <path d="M0,-70 Q15,-85 30,-95" stroke="#3d2914" stroke-width="3" fill="none" />
        <!-- 树冠 -->
        <circle cx="0" cy="-130" r="45" fill="url(#canopy)" class="canopy-1" />
        <circle cx="-30" cy="-110" r="30" fill="url(#canopy)" class="canopy-2" />
        <circle cx="25" cy="-115" r="28" fill="url(#canopy)" class="canopy-3" />
        <circle cx="-15" cy="-145" r="25" fill="url(#canopy)" class="canopy-4" />
        <circle cx="15" cy="-140" r="22" fill="url(#canopy)" class="canopy-5" />
      </g>

      <!-- 小树 -->
      <g class="tree-small" transform="translate(380, 310)">
        <path d="M-4,0 Q-3,-25 -2,-50 Q0,-60 2,-50 Q3,-25 4,0 Z" fill="#3d2914" />
        <circle cx="0" cy="-60" r="25" fill="url(#canopy)" class="canopy-s1" />
        <circle cx="-12" cy="-50" r="15" fill="url(#canopy)" class="canopy-s2" />
        <circle cx="10" cy="-55" r="14" fill="url(#canopy)" class="canopy-s3" />
      </g>

      <!-- 草地 -->
      <path d="M0,350 Q150,340 300,345 T600,348 L600,400 L0,400 Z" fill="#1a3a2a" opacity="0.5" />

      <!-- 萤火虫 -->
      <circle cx="100" cy="200" r="2" fill="#c9d836" class="firefly f1" />
      <circle cx="250" cy="180" r="2" fill="#c9d836" class="firefly f2" />
      <circle cx="350" cy="220" r="2" fill="#c9d836" class="firefly f3" />
      <circle cx="500" cy="190" r="2" fill="#c9d836" class="firefly f4" />
      <circle cx="180" cy="250" r="2" fill="#c9d836" class="firefly f5" />
      <circle cx="420" cy="160" r="2" fill="#c9d836" class="firefly f6" />
    </svg>
  </div>
</template>

<style scoped>
.hero-scene {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}
.hero-svg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 太阳脉动 */
.sun-glow { animation: sunPulse 4s ease-in-out infinite; transform-origin: 450px 120px; }
@keyframes sunPulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.15); } }
.sun-core { animation: sunCore 3s ease-in-out infinite; transform-origin: 450px 120px; }
@keyframes sunCore { 0%,100% { transform: scale(1); } 50% { transform: scale(1.08); } }
.sun-ring { animation: sunRing 3s ease-in-out infinite; transform-origin: 450px 120px; }
@keyframes sunRing { 0%,100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.3); opacity: 0; } }

/* 树冠呼吸 */
.canopy-1 { animation: breathe1 5s ease-in-out infinite; transform-origin: 150px 150px; }
.canopy-2 { animation: breathe2 6s ease-in-out infinite; transform-origin: 120px 170px; }
.canopy-3 { animation: breathe1 5.5s ease-in-out infinite; transform-origin: 175px 165px; }
.canopy-4 { animation: breathe2 4.5s ease-in-out infinite; transform-origin: 135px 135px; }
.canopy-5 { animation: breathe1 5s ease-in-out infinite; transform-origin: 165px 140px; }
@keyframes breathe1 { 0%,100% { transform: scale(1); } 50% { transform: scale(1.06); } }
@keyframes breathe2 { 0%,100% { transform: scale(1); } 50% { transform: scale(1.04); } }

.canopy-s1 { animation: breathe1 4s ease-in-out infinite; transform-origin: 380px 250px; }
.canopy-s2 { animation: breathe2 5s ease-in-out infinite; transform-origin: 368px 260px; }
.canopy-s3 { animation: breathe1 4.5s ease-in-out infinite; transform-origin: 390px 255px; }

/* 萤火虫 */
.firefly { animation: firefly 4s ease-in-out infinite; }
.f1 { animation-delay: 0s; }
.f2 { animation-delay: 0.7s; }
.f3 { animation-delay: 1.4s; }
.f4 { animation-delay: 2.1s; }
.f5 { animation-delay: 0.3s; }
.f6 { animation-delay: 1.7s; }
@keyframes firefly {
  0%, 100% { opacity: 0; transform: translateY(0) translateX(0); }
  25% { opacity: 1; transform: translateY(-15px) translateX(5px); }
  50% { opacity: 0.5; transform: translateY(-25px) translateX(-5px); }
  75% { opacity: 1; transform: translateY(-10px) translateX(3px); }
}

/* 视差 */
.layer-far { animation: parallaxFar 20s ease-in-out infinite alternate; }
@keyframes parallaxFar { 0% { transform: translateX(-5px); } 100% { transform: translateX(5px); } }
.layer-near { animation: parallaxNear 15s ease-in-out infinite alternate; }
@keyframes parallaxNear { 0% { transform: translateX(-8px); } 100% { transform: translateX(8px); } }
</style>
