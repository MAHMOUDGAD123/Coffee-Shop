<script setup lang="ts">
  // --- Impoerts ---

  import type { NavigationMenuItem } from '@nuxt/ui';

  // --- Types ---

  type USize = 'sm' | 'xl' | 'xs' | 'md' | 'lg';
  type SliderSide = 'left' | 'right';

  // --- Data ---

  const { t: translate } = useI18n();

  // theme & UI
  const iconSize: USize = 'xl';

  // --- State ---

  const languageStore = useLanguageStore();

  // --- Computed ---

  // Links
  const NavItems = computed<NavigationMenuItem[]>(() => [
    {
      to: { name: 'shop' },
      label: translate('nav_links.home'),
      icon: 'fa7-solid:shop',
    },
    {
      to: { name: 'products' },
      label: translate('nav_links.products'),
      icon: 'fa7-solid:mug-hot',
    },
  ]);

  const sliderSide = computed<SliderSide>(() =>
    languageStore.direction === 'ltr' ? 'right' : 'left',
  );
</script>

<template>
  <USlideover
    :side="sliderSide"
    :close="{
      icon: 'fa7-solid:xmark',
      color: 'neutral',
      size: iconSize,
    }"
  >
    <UButton
      class="rounded-full"
      color="neutral"
      icon="fa7-solid:bars"
      variant="ghost"
      :size="iconSize"
    />

    <template #actions>
      <UiLangSwitchSelect />
    </template>

    <template #body>
      <UNavigationMenu :items="NavItems" orientation="vertical">
        <template #item="{ item }">
          <div class="flex items-center gap-5 font-bold">
            <UIcon :name="item.icon" class="text-3xl" />
            <span class="">{{ item.label }}</span>
          </div>
        </template>
      </UNavigationMenu>
    </template>
  </USlideover>
</template>
