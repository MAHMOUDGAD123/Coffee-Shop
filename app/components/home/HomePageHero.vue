<script setup lang="ts">
  // --- State ---

  const cartStore = useCartStore();
  const isSmaillScreen = useMediaQuery('(width >= 768px)');
</script>

<template>
  <div
    orientation="horizontal"
    class="mb-20 grid grid-cols-1 gap-0 py-25 text-center sm:px-30 sm:text-start md:grid-cols-2"
  >
    <div class="flex flex-col gap-9">
      <h1
        class="hero text-primary letter-spacing xsm:text-8xl flex flex-col text-7xl font-extrabold select-none md:text-8xl"
        :class="{ 'leading-27': $i18n.locale === 'ar' }"
      >
        <span class="whitespace-nowrap">
          <span class="relative">
            <span>{{ $t('home.hero.c') }}</span>
            <img
              v-if="$i18n.locale === 'en'"
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
        class="xsm:flex-row flex w-full flex-col items-center justify-center gap-5 sm:justify-start"
      >
        <ULink
          :to="{ name: 'products' }"
          class="border-accent-base text-accent-base flex items-center gap-3.5 rounded-[20px] border px-7 py-2.5 font-medium whitespace-nowrap"
        >
          <span>{{ $t('home.hero.btn_offer_msg') }}</span>
          <UIcon
            name="mdi-light:arrow-up"
            class="text-xl font-medium"
            :class="{ '-rotate-135': $i18n.locale === 'ar', 'rotate-135': $i18n.locale === 'en' }"
          ></UIcon>
        </ULink>

        <UButton
          variant="solid"
          color="primary"
          active-class="text-white"
          class="relative flex aspect-square w-12.5 items-center justify-center rounded-full"
          @click="cartStore.toggleCartSlider"
        >
          <UIcon name="uil:cart" class="absolute text-[33px]"></UIcon>
        </UButton>
      </div>
    </div>

    <USkeleton v-if="isSmaillScreen" class="h-full w-full" />
  </div>
</template>

<style scoped>
  .hero {
    letter-spacing: 7px;
  }
</style>
