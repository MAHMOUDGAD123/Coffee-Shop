<script setup lang="ts">
  const { d = 35 } = defineProps<{
    d?: number;
  }>();
</script>

<template>
  <div class="relative inline-flex w-fit items-center gap-1">
    <div
      v-for="(n, i) in 4"
      :key="n"
      class="jump-spin-animation"
      :style="{ width: `${d}px`, animationDelay: `${i * 100}ms` }"
    >
      <img loading="eager" decoding="sync" src="~/assets/imgs/coffee-bean.svg" alt="Coffee bean" />
    </div>
  </div>
</template>

<style scoped>
  .jump-spin-animation {
    animation: jumpSpin 1s ease-in infinite;
  }

  @keyframes jumpSpin {
    0% {
      transform: translateY(0) rotateZ(0deg);
    }
    60% {
      transform: translateY(0) rotateZ(0deg);
    }
    75% {
      transform: translateY(-50px) rotateZ(0);
    }
    90% {
      transform: translateY(-50px) rotateZ(360deg);
    }
    95% {
      transform: translateY(-40px) rotateZ(360deg);
    }
    100% {
      transform: translateY(0) rotateZ(360deg);
    }
  }
</style>
