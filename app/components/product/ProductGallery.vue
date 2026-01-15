<script setup lang="ts">
  // --- Macros ---
  const { images } = defineProps<{
    images: string[];
  }>();

  // --- State ---
  const activeImage = ref(images[0]);
</script>

<template>
  <div>
    <div
      class="aspect-w-4 aspect-h-3 mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
    >
      <img
        :src="activeImage"
        loading="lazy"
        alt="Coffee Product"
        class="h-125 w-full object-cover object-center transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div class="grid grid-cols-4 gap-4">
      <button
        v-for="(image, index) in images"
        :key="index"
        @click="activeImage = image"
        class="thumbnail-btn h-24 overflow-hidden rounded-md border-2 transition hover:opacity-75"
        :class="activeImage === image ? 'border-amber-600' : 'border-transparent'"
      >
        <img :src="image" class="h-full w-full object-cover" />
      </button>
    </div>
  </div>
</template>
