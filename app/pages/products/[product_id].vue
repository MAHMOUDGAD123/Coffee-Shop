<script setup lang="ts">
  // --- Imports ---

  import prodImg1 from '~/assets/imgs/prod1.webp';
  import prodImg2 from '~/assets/imgs/prod2.webp';
  import prodImg3 from '~/assets/imgs/prod3.webp';
  import ProductDetails from '~/components/product/ProductDetails.vue';

  // --- Macros ---

  definePageMeta({
    name: 'product',
  });

  // --- Data & State ---

  const route = useRoute();
  const productsStore = useProductsStore();
  const { locale } = useI18n();

  const images = [prodImg1, prodImg2, prodImg3];

  // --- Computed ---

  const isEnglish = computed(() => locale.value === 'en');
  const product = computed(() => productsStore.getProductById(route.params.product_id as string));
  const averageRating = computed(() => {
    if (product.value.reviews.length === 0) return 0;
    const total = product.value.reviews.reduce((acc, review) => acc + review.reviewStars, 0);
    return total / product.value.reviews.length;
  });

  // --- Check ---

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
</script>

<template>
  <div class="min-h-screen text-gray-800">
    <Head>
      <Title>{{ isEnglish ? product.shortName.en : product.shortName.ar }}</Title>
      <Meta
        name="description"
        :content="isEnglish ? product.description.en : product.description.ar"
      />
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
