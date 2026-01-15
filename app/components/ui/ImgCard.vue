<script setup lang="ts">
  import type { VNode } from 'vue';

  interface Props {
    img?: string;
    alt?: string;
    title: string;
    description: string;
  }
  defineProps<{ data: Props }>();

  defineSlots<{
    default: () => VNode[];
  }>();
</script>

<template>
  <div class="xsm:flex-row xsm:text-start flex max-w-100 flex-col items-center gap-3 text-center">
    <div
      class="bg-accent-base flex aspect-square max-w-19 min-w-19 items-center justify-center rounded-full"
    >
      <slot>
        <img :src="data.img" :alt="data.alt ?? 'Card image'" class="w-[70%]" />
      </slot>
    </div>
    <div class="flex flex-col gap-2">
      <span class="text-primary text-lg font-bold">{{ data.title }}</span>
      <span class="max-w-55 text-sm">{{ data.description }}</span>
    </div>
  </div>
</template>
