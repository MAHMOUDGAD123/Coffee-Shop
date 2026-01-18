<script setup lang="ts">
  // --- State ---

  const categoryFilterStore = useCategoryFilterStore();
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    :items="categoryFilterStore.filteredProducts"
    :prev="{ variant: 'solid', color: 'primary' }"
    :next="{ variant: 'solid', color: 'primary' }"
    :ui="{
      item: 'md:basis-[300px]',
    }"
    :start-index="0"
    class="relative z-1 mx-auto max-w-297"
  >
    <ProductCard :product="item" />
  </UCarousel>
</template>
