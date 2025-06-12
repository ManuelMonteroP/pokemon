<template>
  <svg class="pokeball-svg" width="106" height="106" viewBox="0 0 106 106" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="53" cy="53" r="51" fill="white" stroke="#333333" stroke-width="4" />
    <mask id="mask0_12_49" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="106" height="53">
      <rect width="106" height="53" fill="#C4C4C4" />
    </mask>
    <g mask="url(#mask0_12_49)">
      <circle cx="53" cy="53" r="51" fill="#F22539" stroke="#333333" stroke-width="4" />
    </g>
    <path d="M0.392578 53H105.607" stroke="#333333" stroke-width="4" />
    <circle cx="53" cy="52.9998" r="20.8074" fill="white" />
    <circle cx="53" cy="52.9998" r="18.8074" stroke="#333333" stroke-width="4" />
    <path d="M91.731 36.7077C86.9398 25.3318 77.283 16.5081 65.3667 12.8428" stroke="white" stroke-width="4"
      stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="53" cy="53.0004" r="10.3852" stroke="#808080" stroke-width="2" />
  </svg>
</template>

<style scoped>
.pokeball-svg {
  animation: capture-swing 0.6s ease-in-out infinite;
  transform-origin: center;
}

@keyframes capture-swing {
  0% {
    transform: rotate(0deg);
  }

  15% {
    transform: rotate(15deg);
  }

  30% {
    transform: rotate(-10deg);
  }

  45% {
    transform: rotate(6deg);
  }

  60% {
    transform: rotate(-4deg);
  }

  75% {
    transform: rotate(2deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
</style>
