<script setup lang="ts">
  // --- Macros ---

  defineProps<{
    limit?: number;
  }>();

  // --- State ---

  const categoryFilterStore = useCategoryFilterStore();
</script>

<template>
  <UContainer>
    <template v-if="limit">
      <div class="grid-auto-fixed-fill-280 justify-center gap-9">
        <ProductCard
          v-for="product in categoryFilterStore.filteredProducts.slice(0, limit)"
          :key="product.id"
          :product="product"
        />
      </div>
    </template>

    <template v-else>
      <TransitionGroup
        tag="div"
        class="grid-auto-fixed-fill-280 justify-center gap-9"
        appear
        name="fade"
        type="transition"
      >
        <ProductCard
          v-for="product in categoryFilterStore.filteredProducts"
          :key="product.id"
          :product="product"
        />
      </TransitionGroup>
    </template>
  </UContainer>
</template>
