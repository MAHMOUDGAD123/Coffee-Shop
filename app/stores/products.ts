export const useProductsStore = defineStore('products', () => {
  // --- State ---

  const $api = useRequestFetch();
  const { userData } = storeToRefs(useUserStore());
  const productStoreData = ref<ClientProductsStore | null>(null);

  // --- Methods ---

  const loadData = async () => {
    const storeData = await $api<ServerProductsStore>('/api/products', {
      method: 'POST',
    });

    const list: ProductWithMetaData[] = [];
    for (let i = 0; i < storeData.itemCount; ++i) {
      const product = storeData.list[i];
      const inCart = userData.value.cart.includes(product.id);
      list.push({ ...product, inCart });
    }
    productStoreData.value = {
      categories: storeData.categories,
      itemCount: storeData.itemCount,
      list,
    };
  };

  const getProductById = (id: string): ProductWithMetaData | null => {
    const productData = productStoreData.value.list.find((prod) => prod.id === id);
    return productData;
  };

  return {
    data: productStoreData,
    loadData,
    getProductById,
  };
});
