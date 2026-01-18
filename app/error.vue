<script setup lang="ts">
  // --- Imports ---
  import type { NuxtError } from '#app';

  // --- Macros ---

  useHead({
    title: 'ERROR',
  });

  const { error } = defineProps<{
    error: NuxtError;
  }>();
</script>

<template>
  <UApp>
    <MainHeader />

    <UContainer as="main" class="min-h-[calc(100vh-var(--ui-header-height))]">
      <UError
        :error="{
          statusCode: error?.statusCode ?? 404,
          statusMessage: error.data?.overwriteStatusMessage ?? 'Error',
          message: error?.message || 'Something went wrong!',
          fatal: true,
        }"
        :clear="{
          icon: 'fa7-solid:shop',
          label: 'Back to shop',
          replace: true,
        }"
        :ui="{
          statusCode: 'text-8xl font-quicksand',
          statusMessage: 'text-2xl',
          message: 'text-md',
        }"
      />
    </UContainer>

    <MainFooter />
  </UApp>
</template>
