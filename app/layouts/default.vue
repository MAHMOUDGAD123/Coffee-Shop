<script setup lang="ts">
  import LayoutFooter from '~/components/layout/LayoutFooter.vue';
  import LayoutHeader from '~/components/layout/LayoutHeader.vue';

  const languageStore = useLanguageStore();
</script>

<template>
  <UApp :dir="languageStore.direction">
    <div class="fixed top-38 left-0 -z-1 hidden lg:block">
      <img src="~/assets/imgs/fixed-shape.svg" alt="fixed-shape" />
    </div>

    <!-- <div
      class="hero-shape absolute -top-80 left-50 -z-1 h-190 w-500 rotate-[-30deg] rounded-full md:-top-70 md:left-95 lg:-top-50 lg:left-150"
    ></div> -->

    <LayoutHeader />

    <main class="min-h-[calc(100vh-var(--ui-header-height))]">
      <slot></slot>
    </main>

    <LayoutFooter />

    <BackToTopBtn />
  </UApp>
</template>

<style scoped>
  .hero-shape {
    background-image: linear-gradient(#a3bdcd, #a3bdcd75, #a3bdcd50, #a3bdcd25, transparent 70%);
  }
</style>
