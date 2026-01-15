<script setup lang="ts">
  import coffeeImg from '~/assets/imgs/w-coffee.webp';
  import seedsImg from '~/assets/imgs/w-seeds.webp';
  import cupImg from '~/assets/imgs/w-cup.webp';
  import carasauImg from '~/assets/imgs/w-carasau.webp';

  interface ImgsCardData {
    img: string;
    alt?: string;
    title: string;
    description: string;
  }

  const cardsData: ImgsCardData[] = [
    {
      title: 'Quality',
      description: "Every bean is carefully sourced from the world's finest farms.",
      img: seedsImg,
      alt: 'Coffee seeds',
    },
    {
      title: 'Easy',
      description: 'Ordering your perfect brew has never been simpler.',
      img: cupImg,
      alt: 'Coffee cup image',
    },
    {
      title: 'Taste',
      description: 'Experience rich, bold flavors crafted to perfection in every cup.',
      img: carasauImg,
      alt: 'Carasau image',
    },
    {
      title: 'Quick',
      description: 'From order to hand in minutes—great coffee without the wait.',
      img: coffeeImg,
      alt: 'Coffee seeds image',
    },
  ];

  const mediaQuery = useMediaQuery('(width >= 1024px)');
</script>

<template>
  <div dir="ltr" class="z-0 my-20 grid w-screen grid-cols-1 gap-10 lg:my-60 lg:grid-cols-2">
    <div class="relative z-1 hidden lg:block" v-if="mediaQuery">
      <img
        src="~/assets/imgs/blob.svg"
        alt="blob svg"
        class="absolute top-1/2 left-0 -translate-y-1/2"
      />
      <img
        src="~/assets/imgs/coffee-bags.webp"
        alt="Coffee svg"
        class="xl:270 absolute top-1/2 left-75 w-250 max-w-none -translate-x-1/2 -translate-y-1/2"
      />
    </div>

    <div class="z-2 flex flex-col items-center justify-center gap-9 px-3 lg:items-start">
      <div class="text-center lg:text-start">
        <h3 class="mb-3 text-4xl font-bold">Welcome To Our Shop</h3>
        <p class="text-2xl">The coffee you want, when you want it.</p>
      </div>
      <div class="mx-5 grid max-w-175 grid-cols-1 gap-6 md:mx-0 md:grid-cols-2">
        <UiImgCard v-for="(data, i) in cardsData" :data :key="i" class="max-w-none" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
