<script setup lang="ts">
  // --- Imports ---

  // --- Types ---

  type Props = {
    product: ProductWithMetaData;
    orientation?: 'horizontal' | 'vertical';
  };

  // --- Macros ---

  const { product } = defineProps<Props>();

  // --- State ---

  const cartStore = useCartStore();

  // --- Methods ---

  const handleCountChange = useDebounceFn(() => {
    if (!product.inCart) return;
    cartStore.updateItemCartCount(product, product.cartCount);
  }, 1000);
</script>

<template>
  <UInputNumber
    :orientation
    @change="handleCountChange"
    v-model="product.cartCount"
    variant="outline"
    color="secondary"
    name="cart-item-count"
    class="h-full items-stretch"
    highlight
    :min="1"
  />
</template>
