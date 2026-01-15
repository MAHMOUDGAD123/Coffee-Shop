import { STORAGE_KEYS } from '~~/server/utils/globals';

export default defineEventHandler(async (ev) => {
  const productId = getRouterParam(ev, 'product_id')!;
  const storage = useStorage();
  const productIdLookup = (await storage.getItem<ProductIdLookup>(STORAGE_KEYS.productIdLookup))!;
  return productIdLookup[productId];
});
