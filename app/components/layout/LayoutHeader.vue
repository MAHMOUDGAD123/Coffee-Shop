<script setup lang="ts">
  // --- State ---

  const isSmallScreen = useMediaQuery('(width >= 640px)');
  const windowScroll = useWindowScroll({
    throttle: 100,
  });

  // --- Computed ---

  const scrollAtTop = computed(() => windowScroll.y.value === 0);
</script>

<template>
  <header
    class="top-0 z-10 flex h-(--ui-header-height) items-center justify-center transition-colors sm:sticky"
    :class="{ 'bg-white': !scrollAtTop && isSmallScreen }"
  >
    <UContainer class="mx-auto flex h-full w-full max-w-350 items-center justify-between">
      <UiAppLogo />

      <div class="flex items-center gap-2">
        <UiCartSlider />
        <UiSideNavSlider />
      </div>
    </UContainer>
  </header>
</template>
