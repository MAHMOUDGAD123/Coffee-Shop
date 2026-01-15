<script setup lang="ts">
  const languageStore = useLanguageStore();
</script>

<template>
  <UiInfiniteMarquee duration="25s" gap="80px" :mode="languageStore.direction">
    <div class="flex items-center gap-13" v-for="n in 10" :key="n">
      <img src="~/assets/imgs/coffee-base.svg" />
      <span class="text-accent-dark text-2xl">{{ $t('coffee') }}</span>
    </div>
  </UiInfiniteMarquee>
</template>
