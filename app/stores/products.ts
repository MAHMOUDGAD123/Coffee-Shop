// --- Imports ---

import coffeeImg from '~/assets/imgs/coffee.webp';
import equipmentImg from '~/assets/imgs/equipment.webp';
import roastingImg from '~/assets/imgs/roasting.webp';

export const useProductsStore = defineStore('products', () => {
  // --- Data ---

  const productImg = {
    coffee: coffeeImg,
    equipment: equipmentImg,
    roasting: roastingImg,
  };

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
      const cartCount = userData.value.cart[product.id];

      list.push({
        ...product,
        inCart: !!cartCount,
        cartCount: cartCount ?? 1,
        img: productImg[product.category.en],
      });
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
