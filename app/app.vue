<script setup lang="ts">
  // Fix the theme issue when the 'nuxt-color-mode' local storage isn't found.
  // Nuxt UI library theme flash issue fix at the very first load.
  const userStore = useUserStore();
  useHead({
    script: [
      {
        key: 'theme-init',
        textContent: `
          (() => {
            const serverTheme = '${userStore.userData?.theme || 'dark'}';
            const localTheme = localStorage.getItem('nuxt-color-mode');

            if (serverTheme && localTheme !== serverTheme) {
              localStorage.setItem('nuxt-color-mode', serverTheme);
            }
          })()
        `,
        type: 'text/javascript',
        tagPosition: 'head',
        tagPriority: 'critical',
      },
    ],
  });
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
