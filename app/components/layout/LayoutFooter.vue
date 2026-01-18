<script setup lang="ts">
  // --- Types ---

  interface FooterMenu {
    key: string;
    isLink: boolean;
    listCount: number;
  }

  // --- Data ---

  const socialLinks: { icon: string; toolTipText?: string }[] = [
    {
      icon: 'fa7-brands:facebook-f',
      toolTipText: 'Facebook',
    },
    {
      icon: 'fa7-brands:instagram',
      toolTipText: 'Instagram',
    },
    {
      icon: 'fa7-brands:linkedin-in',
      toolTipText: 'LinkedIn',
    },
  ];

  const footerList: FooterMenu[] = [
    {
      key: 'menu',
      isLink: true,
      listCount: 4,
    },
    {
      key: 'location',
      isLink: false,
      listCount: 3,
    },
    {
      key: 'contact',
      isLink: true,
      listCount: 2,
    },
  ];

  // --- Media Query ---

  const mediaQuery = useMediaQuery('(width >= 1024px)');
</script>

<template>
  <footer
    data-allow-mismatch="children"
    class="relative flex items-center justify-center p-15 text-white"
    :class="{ 'lg:mt-70': $route.name === 'shop' }"
  >
    <img
      v-if="mediaQuery && $route.name === 'shop'"
      loading="lazy"
      src="~/assets/imgs/coffee-bag.webp"
      alt="Coffee bag"
      class="absolute -top-2/3 right-0 drop-shadow-2xl"
    />

    <div class="flex flex-col items-center justify-center gap-7">
      <div class="xsm:grid-cols-2 mx-auto grid max-w-3xl grid-cols-1 gap-10 md:grid-cols-3">
        <div v-for="item in footerList" class="flex flex-col gap-5">
          <h4 class="font-bold uppercase">{{ $t(`footer.${item.key}.title`) }}</h4>
          <span
            v-for="(_, i) in item.listCount"
            class="text-[0.8rem] opacity-75"
            :class="{
              'transition=colors cursor-pointer hover:opacity-100 hover:transition-opacity':
                item.isLink,
            }"
            >{{ $t(`footer.${item.key}.list[${i}]`) }}
          </span>
        </div>
      </div>

      <hr class="link h-px w-full bg-white" />

      <div class="max-xsm:flex-col flex w-full items-center justify-between gap-5">
        <span class="text-[0.75rem] opacity-70">{{ $t('text.privacy_policy') }}</span>
        <div class="flex flex-wrap gap-2">
          <UTooltip
            v-for="link in socialLinks"
            class="hover:text-primary cursor-pointer hover:bg-white hover:transition-colors"
            :text="link.toolTipText"
            :content="{ side: 'top' }"
          >
            <div
              class="border-accented flex aspect-square w-9 items-center justify-center rounded-full border text-xl"
            >
              <UIcon :name="link.icon" />
            </div>
          </UTooltip>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    background-image: linear-gradient(to right, #024a78, #0f5c8e, #024a78);
  }
</style>
