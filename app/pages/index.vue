<script setup lang="ts">
  import CoffeeBeanLoader from '~/components/ui/CoffeeBeanLoader.vue';

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

    <div dir="ltr" class="mx-auto my-40 w-full px-20 text-center md:text-end">
      <CoffeeBeanLoader />
    </div>
  </div>
</template>
