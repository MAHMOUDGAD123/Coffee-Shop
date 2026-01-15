export default defineEventHandler(async (ev) => {
  const storage = useStorage();
  return await storage.getItem<ServerProductsStore>(STORAGE_KEYS.productStoreData);
});
