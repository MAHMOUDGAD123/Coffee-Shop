<script setup lang="ts">
  // --- Data ---
  const footerLinks: { icon: string; toolTipText?: string }[] = [
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
      src="~/assets/imgs/coffee-bag.webp"
      alt="Coffee bag"
      class="absolute -top-2/3 right-0 drop-shadow-2xl"
    />

    <div class="flex flex-col items-center justify-center gap-7">
      <div class="xsm:grid-cols-2 mx-auto grid max-w-3xl grid-cols-1 gap-10 md:grid-cols-3">
        <div class="flex flex-col gap-5">
          <h4 class="font-bold">MENU</h4>
          <span class="link">Get Inspired</span>
          <span class="link">Our products</span>
          <span class="link">For a better world</span>
          <span class="link">Contact</span>
          <span class="link">Blog</span>
        </div>

        <div class="flex flex-col gap-5">
          <h4 class="font-bold">LOCATION</h4>
          <span class="link">Get Inspired</span>
          <span class="link">Our products</span>
          <span class="link">For a better world</span>
          <span class="link">Contact</span>
          <span class="link">Blog</span>
        </div>

        <div class="flex flex-col gap-5">
          <h4 class="font-bold">CONTACT</h4>
          <span class="link">Do you have a question?</span>
          <span class="link">+20109876487</span>
        </div>
      </div>

      <hr class="link h-px w-full bg-white" />

      <div class="max-xsm:flex-col flex w-full items-center justify-between gap-5">
        <span class="text-[0.75rem] opacity-75">PRIVACY POLICY</span>
        <div class="flex flex-wrap gap-2">
          <UTooltip v-for="link in footerLinks" :text="link.toolTipText" :content="{ side: 'top' }">
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

  .link {
    opacity: 0.65;
    transition: color var(--transition-duration-global);
    cursor: pointer;
    font-size: 0.75rem;

    &:hover {
      opacity: 1;
    }
  }
</style>
