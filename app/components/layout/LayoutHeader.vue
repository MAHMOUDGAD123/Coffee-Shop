<script setup lang="ts"></script>

<template>
  <header
    class="top-0 z-1 flex h-(--ui-header-height) items-center justify-center bg-white sm:sticky"
  >
    <UContainer class="mx-auto flex h-full w-full max-w-350 items-center justify-between">
      <AppLogo />

      <div class="flex items-center gap-2">
        <UiCartSlider />
        <UiSideNavSlider />
      </div>
    </UContainer>
  </header>
</template>
