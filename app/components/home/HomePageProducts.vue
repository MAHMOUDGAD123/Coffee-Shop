<script setup lang="ts"></script>

<template>
  <div class="my-25 flex flex-col gap-5">
    <h2 class="text-center text-2xl">{{ $t('home_products_1st_title') }}</h2>
    <h3 class="text-accent-dark text-center text-4xl font-bold">
      {{ $t('home_products_2nd_title') }}
    </h3>
    <ProductCategoryFilter />
    <ProductGrid :limit="4" class="mt-5" />
    <UButton
      :to="{ name: 'products' }"
      label="More Products"
      class="mx-auto mt-5 w-fit text-lg"
      variant="outline"
    />
  </div>
</template>
