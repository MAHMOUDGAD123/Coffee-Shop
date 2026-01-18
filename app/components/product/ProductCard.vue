<script setup lang="ts">
  // --- Macros ---

  const props = defineProps<{
    product: ProductWithMetaData;
  }>();

  // --- State ---

  const { locale } = useI18n();

  // --- Computed ---

  const review = computed(() => props.product.reviews[3]);
  const isEnglish = computed(() => locale.value === 'en');
</script>

<template>
  <ULink
    :to="{ name: 'product', params: { product_id: product.id } }"
    class="flex flex-col items-center gap-3"
  >
    <div
      class="bg-brand-dark relative z-0 flex aspect-square w-full items-center justify-center rounded-t-[30px] rounded-b-[80px] contain-content"
    >
      <div
        v-if="product.discount > 0"
        class="absolute top-1/9 left-1/9 z-2 rounded-md bg-amber-200 px-3 py-0.5 text-sm font-medium"
      >
        -{{ $n(product.discount * 100, 'integer') }}%
      </div>

      <img
        loading="lazy"
        :src="product.img"
        alt="coffee"
        class="img-box-shadow z-1 aspect-square w-[95%] rounded-tl-[70px] rounded-tr-[inherit] rounded-b-[inherit] bg-[#f2f2f2] object-cover"
      />
    </div>

    <h4 class="text-2xl font-medium text-black">
      {{ isEnglish ? product.shortName.en : product.shortName.ar }}
    </h4>

    <h5 class="text-2xl">
      {{ isEnglish ? review.customerName.en : review.customerName.ar }}
    </h5>

    <ProductRating :rate="review.reviewStars" />
  </ULink>
</template>

<style scoped>
  .img-box-shadow {
    box-shadow:
      -9px -9px 0 0 var(--color-accent-base),
      -9px 0px 0 0 var(--color-accent-base),
      0px -9px 0 0 var(--color-accent-base);
  }
</style>
