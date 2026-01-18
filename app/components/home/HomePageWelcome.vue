<script setup lang="ts">
  // --- Imports ---

  import coffeeImg from '~/assets/imgs/w-coffee.webp';
  import seedsImg from '~/assets/imgs/w-seeds.webp';
  import cupImg from '~/assets/imgs/w-cup.webp';
  import carasauImg from '~/assets/imgs/w-carasau.webp';

  // --- Types ---

  type WelcomeCardsKeys = 'quantity' | 'easy' | 'taste' | 'quick';
  type WelcomeCards = { key: WelcomeCardsKeys; img: string }[];

  // --- Data ---

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

  // --- State ---

  const islargeScreen = useMediaQuery('(width >= 1024px)');
  const { locale } = useI18n();

  // --- Computed ---

  const isEnglish = computed(() => locale.value === 'en');
</script>

<template>
  <UContainer class="z-0 my-20 grid w-screen grid-cols-1 gap-10 lg:my-60 lg:grid-cols-2">
    <ClientOnly>
      <div class="relative z-1" v-if="islargeScreen">
        <img
          loading="lazy"
          src="~/assets/imgs/blob.svg"
          alt="blob svg"
          class="absolute top-1/2 w-200 max-w-none -translate-y-1/2"
          :class="{
            '-left-120': isEnglish,
            '-right-120 rotate-180': !isEnglish,
          }"
        />
        <img
          loading="lazy"
          src="~/assets/imgs/coffee-bags.webp"
          alt="Coffee svg"
          class="absolute top-1/2 w-220 max-w-none -translate-y-1/2"
          :class="{
            'left-60 -translate-x-1/2': isEnglish,
            'right-60 translate-x-1/2': !isEnglish,
          }"
        />
      </div>
    </ClientOnly>

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
              loading="lazy"
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
  </UContainer>
</template>
