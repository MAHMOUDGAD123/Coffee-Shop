<script setup lang="ts">
  // --- Import ---

  import type { ButtonProps, LinkPropsKeys } from '@nuxt/ui';

  // --- Types ---

  type ArrowStyle = Omit<ButtonProps, LinkPropsKeys>;

  // --- Data ---

  const startIndex = 0;
  const activeArrowStyles: ArrowStyle = { variant: 'solid', color: 'primary' };
  const inactiveArrowStyles: ArrowStyle = { variant: 'outline', color: 'neutral' };

  // --- State ---

  const activeIndex = ref(startIndex);
  const productsStore = useProductsStore();
  const { locale } = useI18n();

  // --- Computed ---

  const bestSelleItems = computed(() =>
    productsStore.data.list.filter((prod) => prod.isBestSeller),
  );
  const isAtStart = computed(() => activeIndex.value === 0);
  const isAtEnd = computed(() => activeIndex.value === bestSelleItems.value.length - 1);
  const isEnglish = computed(() => locale.value === 'en');
</script>

<template>
  <UCarousel
    @select="(index) => (activeIndex = index)"
    v-slot="{ item, index }"
    arrows
    fade
    :items="bestSelleItems"
    :prev="isAtStart ? inactiveArrowStyles : activeArrowStyles"
    :next="isAtEnd ? inactiveArrowStyles : activeArrowStyles"
    :ui="{
      controls: isEnglish ? 'absolute -bottom-7 left-2/3' : 'absolute -bottom-7 right-2/3',
      viewport: 'overflow-visible',
    }"
    :start-index="startIndex"
    class="ms-10 select-none"
  >
    <UTooltip :text="isEnglish ? item.shortName.en : item.shortName.ar">
      <UButton
        :to="{ name: 'product', params: { product_id: item.id } }"
        variant="link"
        color="neutral"
        class="aspect-square w-100 scale-50 rounded-full opacity-0 transition-[opacity_transform] duration-500 xl:w-130"
        :class="{
          'bg-brand-base': !(index & 1),
          'bg-accent-base': index & 1,
          'scale-100 opacity-100': index === activeIndex,
        }"
      >
        <img loading="lazy" :src="item.img" class="h-full w-full object-cover" />
      </UButton>
    </UTooltip>
  </UCarousel>
</template>
