<script setup lang="ts">
  // --- Imports ---

  import prodImg1 from '~/assets/imgs/prod1.webp';
  import prodImg2 from '~/assets/imgs/prod2.webp';
  import prodImg3 from '~/assets/imgs/prod3.webp';
  import ProductDetails from '../../components/product/ProductDetails.vue';

  // --- Macros ---

  definePageMeta({
    name: 'product',
  });

  // --- Data & Stores ---

  const route = useRoute();
  const productsStore = useProductsStore();
  const product = computed(() => productsStore.getProductById(route.params.product_id as string));

  if (!product) {
    throw createError({
      statusCode: 404,
      message: `Product id [${route.params.product_id}] not found`,
      fatal: true,
      data: {
        overwriteStatusMessage: 'Product not found',
      },
    });
  }

  const images = [prodImg1, prodImg2, prodImg3];

  // --- Computed ---

  const averageRating = computed(() => {
    if (product.value.reviews.length === 0) return 0;
    const total = product.value.reviews.reduce((acc, review) => acc + review.reviewStars, 0);
    return total / product.value.reviews.length;
  });
</script>

<template>
  <div class="min-h-screen text-gray-800">
    <Head>
      <Title>{{ product.shortName }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>

    <div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <ProductGallery :images />
        <ProductDetails :product :averageRating />
      </div>

      <ProductReviews :product :averageRating />
    </div>
  </div>
</template>
