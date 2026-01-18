<script setup lang="ts">
  useHead({
    title: 'Products',
    meta: [
      {
        name: 'description',
        content: 'Shop page - contains all products',
      },
    ],
  });

  definePageMeta({
    name: 'products',
  });
</script>

<template>
  <div class="relative z-0 mt-25 mb-50 flex flex-col gap-15 *:z-1">
    <div class="absolute top-0 -right-10">
      <img
        loading="lazy"
        src="~/assets/imgs/coffee-base.svg"
        alt="coffee"
        class="-z-1 w-50 opacity-50"
      />
    </div>
    <h1 class="text-center text-5xl font-bold sm:text-6xl">{{ $t('text.products') }}</h1>
    <ProductCategoryFilter />
    <ProductGrid />
  </div>
</template>
