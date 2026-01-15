import { createLogger } from '~~/shared/logger';

const _buildProductIdlookup = (products: Product[]) => {
  const productIdLookup: Record<string, Product> = {};
  products.forEach((product) => {
    productIdLookup[product.id] = product;
  });
  return productIdLookup;
};

export const initStore = async () => {
  if (import.meta.dev) {
    createLogger({ tag: 'Init' })!.success('Init Data');
  }
  const storage = useStorage();
  const storeData = (await import('~~/public/products.json'))
    .default as unknown as ServerProductsStore;
  const productIdLookup = _buildProductIdlookup(storeData.list);

  storage.setItem<ServerProductsStore>(STORAGE_KEYS.productStoreData, storeData);
  storage.setItem<ProductIdLookup>(STORAGE_KEYS.productIdLookup, productIdLookup);
  // storage.setItem<ServerUserInfo[]>(STORAGE_KEYS.users, []);
};

export const createUnauthorizedError = () => {
  return createError({
    statusCode: 401,
    statusMessage: 'Unauthorized',
    message: 'Please, signup first to open a session',
    stack: '',
  });
};
