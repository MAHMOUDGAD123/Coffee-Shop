export const useCartStore = defineStore('cart', () => {
  // --- State ---

  const productsStore = useProductsStore();
  const { data: productStoreData } = storeToRefs(productsStore);
  const cartSliderOpen = ref(false);
  const cartConfirmModelOpen = ref(false);
  const toast = useToast();
  const { t: translate } = useI18n();
  const { $i18n } = useNuxtApp();

  // --- Computed ---

  const cartItems = computed(() => productsStore.data.list.filter((product) => product.inCart));
  const cartItemsCount = computed(() => cartItems.value.length);
  const cartEmpty = computed(() => cartItems.value.length === 0);
  const isEnglish = computed(() => $i18n.locale.value === 'en');

  // --- Methods ---

  const toggleCartSlider = () => {
    cartSliderOpen.value = !cartSliderOpen.value;
  };

  const toggleCartItem = async (product: ProductWithMetaData) => {
    const isAdded = !product.inCart;
    product.inCart = isAdded;

    await $fetch(isAdded ? '/api/cart/add' : '/api/cart/remove', {
      method: 'POST',
      body: {
        productId: product.id,
      },
    });

    toast.clear();
    toast.add({
      id: product.id,
      icon: isAdded ? 'icon-park-solid:shopping-cart-add' : 'icon-park-solid:shopping-cart-del',
      title: isEnglish.value ? product.title.en : product.title.ar,
      description: isAdded ? translate('cart.add_msg') : translate('cart.remove_msg'),
      color: isAdded ? 'primary' : 'warning',
      type: 'foreground',
    });
  };

  const clearCart = async () => {
    if (cartEmpty.value) return;

    productStoreData.value = {
      ...productStoreData.value,
      list: productStoreData.value.list.map((product) => ({ ...product, inCart: false })),
    };

    await $fetch('/api/cart/clear', { method: 'POST' });

    // toast.clear();
    // toast.add({
    //   id: Math.random(),
    //   icon: 'mdi:cart-off',
    //   title: 'Empty cart',
    //   description: 'Cart cleared successfully',
    //   color: 'warning',
    //   type: 'foreground',
    // });
  };

  const confirmCheckout = async () => {
    cartConfirmModelOpen.value = false;
    cartSliderOpen.value = false;

    await clearCart();

    toast.clear();
    toast.add({
      id: Math.random(),
      icon: 'fa7-solid:circle-check',
      title: translate('cart.checkout_done_title'),
      description: translate('cart.checkout_done_desc'),
      color: 'success',
      type: 'foreground',
    });
  };

  return {
    cartItems,
    cartItemsCount,
    cartEmpty,
    cartSliderOpen,
    cartConfirmModelOpen,
    toggleCartItem,
    toggleCartSlider,
    confirmCheckout,
    clearCart,
  };
});
