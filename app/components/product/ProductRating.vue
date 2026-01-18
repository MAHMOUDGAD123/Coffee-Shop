<script setup lang="ts">
  // --- Macros ---

  const { d = 20 } = defineProps<{
    rate: number;
    d?: number;
  }>();
</script>

<template>
  <div class="flex text-amber-400">
    <svg
      v-for="i in 5"
      :key="i"
      class="aspect-square"
      :class="i <= rate ? 'fill-current' : 'fill-current text-gray-300'"
      :style="{ width: `${d}px` }"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
    </svg>
  </div>
</template>
