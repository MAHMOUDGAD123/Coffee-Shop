<script setup lang="ts">
  // --- Macros ---

  const { product, averageRating } = defineProps<{
    product: ProductWithMetaData;
    averageRating: number;
  }>();

  // --- Data & Stores ---

  const cartStore = useCartStore();
  const categoryFilterStore = useCategoryFilterStore();

  // --- State ---

  const quantity = ref(1);

  // --- Computed ---

  const originalPrice = computed(() => {
    if (!product.discount) return null;
    return product.price / (1 - product.discount);
  });

  // --- Methods ---

  const toggleItemInCart = () => {
    // quantity.value = 1;
    cartStore.toggleCartItem(product);
  };
</script>

<template>
  <div class="product-info flex h-full flex-col">
    <!-- Title & Badges -->
    <div class="mb-2">
      <span
        class="mb-2 inline-block rounded bg-amber-100 px-2 py-1 text-xs font-bold tracking-wide text-amber-800 uppercase"
        >{{ categoryFilterStore.getCategory(product.category).label }}</span
      >
      <h1 class="text-3xl font-bold">{{ product.title }}</h1>
    </div>

    <!-- Rating -->
    <div class="mb-4 flex items-center">
      <ProductRating :rate="Math.round(averageRating)" />
    </div>

    <p class="mb-6 leading-relaxed text-gray-600">{{ product.description }}</p>

    <!-- Price -->
    <div class="mb-6">
      <div class="flex items-center gap-4">
        <span class="text-3xl font-bold text-gray-900">${{ product.price.toFixed(2) }}</span>
        <span v-if="product.discount > 0" class="text-lg text-gray-400 line-through"
          >${{ originalPrice?.toFixed(2) }}</span
        >
        <span
          v-if="product.discount > 0"
          class="text-accent-base ml-3 rounded bg-red-100 px-2.5 py-0.5 text-xs font-semibold"
        >
          -{{ product.discount }}%
        </span>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex flex-col items-center gap-4 sm:flex-row">
      <div class="w-full sm:w-32">
        <UInputNumber v-model="quantity" variant="outline" class="w-full" :min="1" />
      </div>

      <UButton
        @click="toggleItemInCart"
        class="bg-accent-base hover:bg-accent-dark flex w-full flex-1 items-center justify-center space-x-2 rounded-lg px-8 py-3 font-bold text-white shadow-lg shadow-amber-800/20 transition duration-300"
      >
        <UIcon name="uil:cart" class="text-[22px]"></UIcon>
        <span>{{ product.inCart ? $t('cart_remove_btn_msg') : $t('cart_add_btn_msg') }}</span>
      </UButton>
    </div>
  </div>
</template>
