<script setup lang="ts">
  import coffee from '~/assets/imgs/coffee-big-bag.webp';
  import cup from '~/assets/imgs/cup.webp';
  // import { createLogger } from '~~/shared/logger';

  const items = new Array(10).fill(0).map((_, i) => (!(i & 1) ? coffee : cup));
  const startIndex = 0;
  const activeIndex = shallowRef(startIndex);

  // const itemRefs = ref<HTMLDivElement[]>([]);

  // watch(
  //   () => activeIndex.value,
  //   (newVal) => {
  //     createLogger().info(newVal);
  //   },
  // );

  // const handleKeyPress = (e: KeyboardEvent) => {
  //   createLogger().log(e.key);
  //   itemRefs.value[1].scrollIntoView({ behavior: 'smooth' });
  // };
</script>

<template>
  <UCarousel
    @select="(index) => (activeIndex = index)"
    v-slot="{ item, index }"
    arrows
    :items="items"
    :prev="{ variant: 'outline', color: 'neutral' }"
    :next="{ variant: 'solid', color: 'primary' }"
    :ui="{
      container: 'relative',
      controls: 'top-8 right-0 absolute',
    }"
    :start-index="startIndex"
    class="w-full"
  >
    <div class="bg-brand-base aspect-square rounded-full">
      <img :src="item" width="320" height="320" class="h-full w-full object-cover" />
    </div>
  </UCarousel>
</template>

<style scoped></style>
