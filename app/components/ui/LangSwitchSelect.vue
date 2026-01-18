<script setup lang="ts">
  // --- State ---
  const languageStore = useLanguageStore();
</script>

<template>
  <USelect
    :loading="languageStore.loading"
    v-model="languageStore.language"
    :items="languageStore.languageOptions"
    class="w-33"
    variant="subtle"
    icon="fa7-solid:language"
  >
  </USelect>
</template>
