<script setup lang="ts">
  // --- imports ---

  import coffeeImg from '~/assets/imgs/coffee.webp';
  import equipmentImg from '~/assets/imgs/equipment.webp';
  import roastingImg from '~/assets/imgs/roasting.webp';

  // --- Types ---

  type SliderSide = 'left' | 'right';
  type ChipPosition = 'top-right' | 'top-left';

  // --- Macros ---

  defineOptions({
    inheritAttrs: false,
  });

  // --- Data ---

  const imagesMap = {
    coffee: coffeeImg,
    equipment: equipmentImg,
    roasting: roastingImg,
  };

  // --- State ---

  const { n: numberFormater, locale } = useI18n();
  const languageStore = useLanguageStore();
  const cartStore = useCartStore();
  const { cartConfirmModelOpen, cartSliderOpen, cartItemsCount, cartItems, cartEmpty } =
    storeToRefs(cartStore);

  // --- Computed ---

  const isEnglish = computed(() => locale.value === 'en');
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
    <UTooltip :text="$t('text.cart')">
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
        <span class="text-xl">{{ $t('text.cart') }}</span>
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
          <div>
            <img
              :src="imagesMap[item.category.en]"
              loading="lazy"
              alt="coffee"
              class="aspect-square w-30"
            />
          </div>

          <div class="flex flex-col gap-1 text-start">
            <div class="flex items-center gap-3">
              <span class="font-solid text-lg">
                {{ isEnglish ? item.shortName.en : item.shortName.ar }}
              </span>
              <span class="bg-accent-base rounded-2xl px-2 text-white">{{
                $n(item.cartCount, 'integer')
              }}</span>
            </div>

            <p class="text-dimmed line-clamp-2">
              {{ isEnglish ? item.description.en : item.description.ar }}
            </p>

            <UInputNumber
              variant="outline"
              size="sm"
              v-model="item.cartCount"
              @change="
                () => {
                  cartStore.updateItemCartCount(item, item.cartCount);
                }
              "
              class="w-30"
              :min="1"
            />
          </div>

          <UTooltip :text="$t('text.remove')">
            <UButton
              icon="fa7-solid:trash"
              variant="solid"
              color="secondary"
              @click="() => cartStore.toggleCartItem(item, 1)"
            />
          </UTooltip>
        </UButton>
      </div>

      <UEmpty
        v-else
        icon="mdi:cart-off"
        :title="$t('cart.empty_title')"
        :description="$t('cart.empty_desc')"
      />
    </template>

    <template #footer>
      <UButton
        :label="$t('cart.close')"
        color="neutral"
        variant="subtle"
        @click="cartStore.toggleCartSlider"
      />

      <UButton :label="$t('cart.clear')" color="secondary" @click="cartStore.clearCart" />

      <UModal
        v-model:open="cartConfirmModelOpen"
        :title="$t('cart.checkout_confirm_title')"
        :ui="{ footer: 'justify-end' }"
      >
        <UButton :label="$t('cart.checkout')" :disabled="cartEmpty" />

        <template #body>
          <p>{{ $t('cart.checkout_confirm_desc') }}</p>
        </template>

        <template #footer>
          <UButton
            :label="$t('cart.checkout_reject')"
            color="neutral"
            variant="outline"
            @click="cartConfirmModelOpen = false"
          />
          <UButton :label="$t('cart.checkout_confirm')" @click="cartStore.confirmCheckout" />
        </template>
      </UModal>
    </template>
  </USlideover>
</template>
