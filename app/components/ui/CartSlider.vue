<script setup lang="ts">
  // --- Types ---

  type SliderSide = 'left' | 'right';
  type ChipPosition = 'top-right' | 'top-left';

  // --- Macros ---

  defineOptions({
    inheritAttrs: false,
  });

  defineProps<{}>();

  // --- State ---

  const { n: numberFormater } = useI18n();
  const languageStore = useLanguageStore();
  const cartStore = useCartStore();
  const { cartConfirmModelOpen, cartSliderOpen, cartItemsCount, cartItems, cartEmpty } =
    storeToRefs(cartStore);

  // --- Computed ---

  const cartCountDisplay = computed(() => numberFormater(cartItemsCount.value, 'integer'));
  const sliderSide = computed<SliderSide>(() =>
    languageStore.direction === 'ltr' ? 'right' : 'left',
  );
  const chipPosition = computed<ChipPosition>(() =>
    languageStore.direction === 'ltr' ? 'top-left' : 'top-right',
  );
</script>

<template>
  <USlideover
    v-model:open="cartSliderOpen"
    :side="sliderSide"
    :ui="{ footer: 'justify-end', title: 'uppercase' }"
  >
    <UTooltip :text="$t('cart')">
      <UChip
        size="3xl"
        color="secondary"
        :text="cartCountDisplay"
        :show="!cartEmpty"
        :position="chipPosition"
        :ui="{ base: 'p-2' }"
      >
        <UButton
          active-class="text-white"
          class="relative flex aspect-square w-8 items-center justify-center rounded-full"
          icon="uil:cart"
        />
      </UChip>
    </UTooltip>

    <template #title>
      <div class="flex items-center gap-3">
        <span>{{ $t('cart') }}</span>
        <span
          v-if="!cartEmpty"
          class="bg-accent-base content-center rounded-xl px-2 py-0.5 text-center text-white"
          >{{ cartCountDisplay }}</span
        >
      </div>
    </template>

    <template #body>
      <div v-if="!cartEmpty" class="my-5 flex flex-col gap-3">
        <UButton
          v-for="item in cartItems"
          :to="{ name: 'product', params: { product_id: item.id } }"
          variant="subtle"
          class="flex items-center gap-5"
        >
          <UIcon name="streamline:coffee-bean-solid" class="aspect-square text-5xl" />
          <div class="ga-3 flex flex-col text-start">
            <h6 class="font-solid text-lg">{{ item.shortName }}</h6>
            <p class="text-dimmed line-clamp-2">{{ item.description }}</p>
          </div>
          <UTooltip text="Remove">
            <UButton
              icon="fa7-solid:trash"
              variant="solid"
              color="secondary"
              @click="() => cartStore.toggleCartItem(item)"
            />
          </UTooltip>
        </UButton>
      </div>

      <UEmpty
        v-else
        icon="mdi:cart-off"
        :title="$t('cart_empty_title')"
        :description="$t('cart_empty_desc')"
      />
    </template>

    <template #footer>
      <UButton
        :label="$t('cart_close')"
        color="neutral"
        variant="subtle"
        @click="cartStore.toggleCartSlider"
      />

      <UButton :label="$t('cart_clear')" color="secondary" @click="cartStore.clearCart" />

      <UModal
        v-model:open="cartConfirmModelOpen"
        :title="$t('cart_checkout_confirm_title')"
        :ui="{ footer: 'justify-end' }"
      >
        <UButton :label="$t('cart_checkout')" :disabled="cartEmpty" />

        <template #body>
          <p>{{ $t('cart_checkout_confirm_desc') }}</p>
        </template>

        <template #footer>
          <UButton
            :label="$t('cart_checkout_reject')"
            color="neutral"
            variant="outline"
            @click="cartConfirmModelOpen = false"
          />
          <UButton :label="$t('cart_checkout_confirm')" @click="cartStore.confirmCheckout" />
        </template>
      </UModal>
    </template>
  </USlideover>
</template>
