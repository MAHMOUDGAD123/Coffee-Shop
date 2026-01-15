<script setup lang="ts">
  const categoryFilterStore = useCategoryFilterStore();
  const { currentFilter } = storeToRefs(categoryFilterStore);
</script>

<template>
  <div class="w-full">
    <URadioGroup
      loop
      orientation="horizontal"
      :items="categoryFilterStore.filterOptions"
      variant="card"
      indicator="hidden"
      :ui="{
        item: 'cursor-pointer border-none hover:transition-[color] duration-global text-center',
        fieldset: 'justify-center gap-0',
      }"
      name="category-filter"
      v-model="currentFilter"
      class="scrollbar-none mx-auto w-full overflow-auto"
    >
      <template #label="{ item }">
        <span
          class="option relative flex items-center justify-center text-[1.3rem] whitespace-nowrap"
          :class="{ 'active text-primary': item.value === currentFilter }"
        >
          {{ item.label }}
        </span>
      </template>
    </URadioGroup>
  </div>
</template>

<style scoped>
  .option {
    &::before {
      content: '';
      position: absolute;
      transition: opacity var(--transition-duration-global);
      opacity: 0;
      top: 120%;
      left: 0;
      height: 3px;
      width: 100%;
      background-color: var(--color-primary);
      border-radius: 999px;
    }

    &.active::before {
      opacity: 1;
    }
  }
</style>
