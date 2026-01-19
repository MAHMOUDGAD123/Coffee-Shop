<script setup lang="ts">
  // --- State ---

  const cartStore = useCartStore();
  const isLargeScreen = useMediaQuery('(width >= 1024px)');
  const { locale } = useI18n();

  // --- Computed ---

  const isEnglish = computed(() => locale.value === 'en');
</script>

<template>
  <UContainer
    class="relative mt-20 mb-30 grid grid-cols-1 items-center text-center lg:min-h-130 lg:grid-cols-2 lg:gap-15 lg:text-start"
  >
    <!-- Shape -->
    <div
      class="hero-shape absolute -top-100 -z-1 h-200 w-500 rounded-full lg:-top-90"
      :class="{
        'left-1/3 -rotate-25 lg:left-1/3': isEnglish,
        'right-1/3 rotate-25 lg:right-1/3': !isEnglish,
      }"
    ></div>

    <!-- Hero Text -->
    <div class="flex h-full flex-col justify-center gap-9 lg:ps-10">
      <h1
        class="hero text-primary xsm:text-8xl flex flex-col text-6xl font-extrabold select-none"
        :class="{ 'xsm:leading-27 leading-20': !isEnglish }"
      >
        <span class="whitespace-nowrap">
          <span class="relative">
            <span>{{ $t('home.hero.c') }}</span>
            <img
              loading="eager"
              decoding="sync"
              v-if="isEnglish"
              src="~/assets/imgs/coffee.svg"
              alt="coffee-svg"
              class="absolute top-[52%] left-[55%] w-[50%] -translate-1/2"
            />
          </span>
          <span>{{ $t('home.hero.title_top') }}</span>
        </span>
        <span>{{ $t('home.hero.title_bottom') }}</span>
      </h1>

      <p class="text-muted flex flex-col px-3">
        <span>{{ $t('home.hero.desc_top') }}</span>
        <span>{{ $t('home.hero.desc_bottom') }}</span>
      </p>

      <div
        class="xsm:flex-row flex w-full flex-col items-center justify-center gap-5 lg:justify-start"
      >
        <ULink
          :to="{ name: 'products' }"
          class="border-accent-base text-accent-base flex items-center gap-3.5 rounded-[20px] border px-7 py-2.5 font-medium whitespace-nowrap"
        >
          <span>{{ $t('home.hero.btn_offer_msg') }}</span>
          <UIcon
            name="mdi-light:arrow-up"
            class="text-xl font-medium"
            :class="{ '-rotate-135': !isEnglish, 'rotate-135': isEnglish }"
          ></UIcon>
        </ULink>

        <UButton
          variant="solid"
          color="primary"
          active-class="text-white"
          class="relative flex aspect-square w-12.5 min-w-12.5 items-center justify-center rounded-full"
          @click="cartStore.toggleCartSlider"
        >
          <UIcon name="uil:cart" class="absolute text-[33px]"></UIcon>
        </UButton>
      </div>
    </div>

    <!-- Carousel -->
    <ClientOnly>
      <div dir="ltr" v-if="isLargeScreen">
        <UiHeroCarousel />
      </div>
    </ClientOnly>
  </UContainer>
</template>

<style scoped>
  .hero {
    letter-spacing: 7px;
  }

  .hero-shape {
    background-image: linear-gradient(#a3bdcd, #a3bdcd75, #a3bdcd50, #a3bdcd25, transparent 70%);
  }
</style>
