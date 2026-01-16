<script setup lang="ts">
  const { averageRating, product } = defineProps<{
    product: ProductWithMetaData;
    averageRating: number;
  }>();

  // --- Methods ---

  // Helper to calculate bar width for review summary
  const getStarPercentage = (starCount: number) => {
    if (product.reviews.length === 0) return 0;
    const count = product.reviews.filter((r) => r.reviewStars === starCount).length;
    return Math.round((count / product.reviews.length) * 100);
  };
</script>

<template>
  <div class="mt-20">
    <h2 class="mb-8 border-b pb-4 text-2xl font-bold text-gray-900">
      {{ $t('text.customer_reviews') }}
    </h2>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
      <!-- Reviews Logic Summary -->
      <div class="h-fit rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div class="text-center">
          <span class="text-5xl font-bold text-gray-900">{{ averageRating.toFixed(1) }}</span>
          <div class="my-2 flex justify-center">
            <ProductRating :rate="Math.round(averageRating)" />
          </div>
          <p class="text-sm text-gray-500">Based on {{ product.reviews.length }} reviews</p>
        </div>

        <div class="mt-6 space-y-2">
          <!-- Star Bars (5 to 1) -->
          <div v-for="star in [5, 4, 3, 2, 1]" :key="star" class="flex items-center text-sm">
            <span class="w-8">{{ star }} ★</span>
            <div class="mx-2 h-2.5 w-full rounded-full bg-gray-200">
              <div
                class="h-2.5 rounded-full bg-amber-400"
                :style="{ width: getStarPercentage(star) + '%' }"
              ></div>
            </div>
            <span class="w-10 text-right">{{ getStarPercentage(star) }}%</span>
          </div>
        </div>
      </div>

      <!-- Reviews List -->
      <div class="space-y-6 md:col-span-2">
        <div
          v-for="(review, index) in product.reviews"
          :key="index"
          class="rounded-lg border border-gray-100 p-6 shadow-sm"
        >
          <div class="mb-3 flex items-center">
            <div class="flex items-center gap-2">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-stone-200 text-sm font-bold text-stone-600"
              >
                {{ review.customerName.charAt(0) }}
              </div>
              <div>
                <h4 class="text-sm font-bold">{{ review.customerName }}</h4>
                <ProductRating :rate="Math.round(review.reviewStars)" :d="13" class="mt-0.75" />
              </div>
            </div>
          </div>
          <p class="text-sm leading-relaxed text-gray-700">"{{ review.description }}"</p>
        </div>
      </div>
    </div>
  </div>
</template>
