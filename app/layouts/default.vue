<script setup lang="ts">
  // --- Imports ---

  import LayoutFooter from '~/components/layout/LayoutFooter.vue';
  import LayoutHeader from '~/components/layout/LayoutHeader.vue';

  // --- State ---

  const languageStore = useLanguageStore();
</script>

<template>
  <UApp :dir="languageStore.direction">
    <div class="fixed top-38 left-0 -z-1 hidden lg:block">
      <img loading="lazy" src="~/assets/imgs/fixed-shape.svg" alt="fixed-shape" />
    </div>

    <LayoutHeader />

    <main
      class="min-h-[calc(100vh-var(--ui-header-height))] sm:mt-[calc(var(--ui-header-height)+50px)]"
    >
      <slot></slot>
    </main>

    <LayoutFooter />

    <UiBackToTopBtn />
  </UApp>
</template>
