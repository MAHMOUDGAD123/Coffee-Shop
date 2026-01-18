<script setup lang="ts"></script>

<template>
  <UMarquee :ui="{ content: 'w-0' }" :overlay="false" reverse>
    <div class="flex w-50 items-center gap-22" v-for="n in 7" :key="n">
      <img src="~/assets/imgs/coffee-base.svg" loading="lazy" />
      <span class="text-accent-dark text-2xl">{{ $t('text.coffee') }}</span>
    </div>
  </UMarquee>
</template>
