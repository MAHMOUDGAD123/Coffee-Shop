<script setup lang="ts">
  // --- Import ---

  import type { ButtonProps, LinkPropsKeys } from '@nuxt/ui';
  import coffee from '~/assets/imgs/coffee.webp';
  import cup from '~/assets/imgs/cup.webp';

  // --- Types ---

  type ArrowStyle = Omit<ButtonProps, LinkPropsKeys>;

  // --- Data ---

  const items = new Array(10).fill(0).map((_, i) => (!(i & 1) ? coffee : cup));
  const startIndex = 0;
  const activeArrowStyles: ArrowStyle = { variant: 'solid', color: 'primary' };
  const inactiveArrowStyles: ArrowStyle = { variant: 'outline', color: 'neutral' };

  // --- State ---

  const activeIndex = ref(startIndex);

  // --- Computed ---

  const isAtStart = computed(() => activeIndex.value === 0);
  const isAtEnd = computed(() => activeIndex.value === items.length - 1);
</script>

<template>
  <UCarousel
    @select="(index) => (activeIndex = index)"
    v-slot="{ item, index }"
    arrows
    fade
    :items="items"
    :prev="isAtStart ? inactiveArrowStyles : activeArrowStyles"
    :next="isAtEnd ? inactiveArrowStyles : activeArrowStyles"
    :ui="{
      controls: 'absolute -top-5 right-20',
      viewport: 'overflow-visible',
    }"
    :start-index="startIndex"
    class="ms-10 select-none"
  >
    <div
      class="aspect-square w-100 scale-50 rounded-full transition-transform duration-500 xl:w-130"
      :class="{
        'bg-brand-base': !(index & 1),
        'bg-accent-base': index & 1,
        'scale-100': index === activeIndex,
      }"
    >
      <img loading="lazy" :src="item" class="h-full w-full object-cover" />
    </div>
  </UCarousel>
</template>
