<script setup lang="ts">
  import coffeeImg from '~/assets/imgs/w-coffee.webp';
  import seedsImg from '~/assets/imgs/w-seeds.webp';
  import cupImg from '~/assets/imgs/w-cup.webp';
  import carasauImg from '~/assets/imgs/w-carasau.webp';

  type WelcomeCardsKeys = 'quantity' | 'easy' | 'taste' | 'quick';
  type WelcomeCards = { key: WelcomeCardsKeys; img: string }[];

  const cardsData: WelcomeCards = [
    {
      key: 'quantity',
      img: seedsImg,
    },
    {
      key: 'easy',
      img: cupImg,
    },
    {
      key: 'taste',
      img: carasauImg,
    },
    {
      key: 'quick',
      img: coffeeImg,
    },
  ];

  const islargeScreen = useMediaQuery('(width >= 1024px)');
</script>

<template>
  <div dir="ltr" class="z-0 my-20 grid w-screen grid-cols-1 gap-10 lg:my-60 lg:grid-cols-2">
    <div class="relative z-1 hidden lg:block" v-if="islargeScreen">
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

    <div
      :dir="$i18n.localeProperties.value.dir"
      class="z-2 flex flex-col items-center justify-center gap-15 px-3 lg:items-start lg:ps-15"
    >
      <div class="text-center lg:text-start">
        <h3 class="mb-4 text-4xl font-bold">{{ $t('home.welcome.title') }}</h3>
        <p class="text-xl">{{ $t('home.welcome.description') }}</p>
      </div>

      <!-- Cards -->
      <div class="mx-5 grid max-w-175 grid-cols-1 gap-6 md:mx-0 md:grid-cols-2">
        <div
          v-for="card in cardsData"
          class="xsm:flex-row xsm:text-start flex max-w-100 flex-col items-center gap-3 text-center"
        >
          <div
            class="bg-accent-base flex aspect-square max-w-19 min-w-19 items-center justify-center rounded-full"
          >
            <img
              :src="card.img"
              :alt="$t(`home.welcome.cards.${card.key}.img_alt`)"
              class="w-[70%]"
            />
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-primary text-lg font-bold">{{
              $t(`home.welcome.cards.${card.key}.title`)
            }}</span>
            <span class="max-w-55 text-sm">{{
              $t(`home.welcome.cards.${card.key}.description`)
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
