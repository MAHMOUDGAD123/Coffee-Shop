<script setup lang="ts">
  const languageStore = useLanguageStore();
</script>

<template>
  <USelect
    v-model="languageStore.language"
    :items="languageStore.languageOptions"
    class="w-33"
    variant="subtle"
    icon="fa7-solid:language"
  >
  </USelect>
</template>
