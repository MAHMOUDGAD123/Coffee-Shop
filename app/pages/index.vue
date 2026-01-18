<script setup lang="ts">
  // --- Imports ---

  import CoffeeBeanLoader from '~/components/ui/CoffeeBeanLoader.vue';

  // --- Macros ---

  useHead({
    title: 'Shop',
    meta: [
      {
        name: 'description',
        content: 'Shop home page',
      },
    ],
  });

  definePageMeta({
    name: 'shop',
    alias: ['/home'],
  });
</script>

<template>
  <div>
    <HomePageHero />
    <HomePageMarquee />
    <HomePageProducts />
    <HomePageWelcome />

    <div class="mx-auto my-40 w-full px-20 text-center md:text-end">
      <CoffeeBeanLoader />
    </div>
  </div>
</template>
