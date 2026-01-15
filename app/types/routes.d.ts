import 'strict-vue-router';

declare module 'strict-vue-router' {
  interface CustomRouteMap {
    shop: CustomRouteInfo<['/'], ['/'], 'Shop'>;

    products: CustomRouteInfo<['/products'], ['/products'], 'Products'>;

    product: CustomRouteInfo<
      ['/products', ':product_id'],
      ['/products', ':product_id'],
      'Product',
      'Product <[product_id]>',
      never,
      { product_id: string }
    >;
  }
}
