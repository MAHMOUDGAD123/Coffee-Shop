// --- Imports ---

import { cart_ar } from './data/cart';
import { footer_ar } from './data/footer';
import { home_page_ar } from './data/home-page';
import { nav_ar } from './data/nav';
import { products_ar } from './data/products';
import { random_text_ar } from './data/text';

// --- English Translation Map ---

export default defineI18nLocale(() => ({
  lang: {
    en: 'الإنجليزية',
    ar: 'العربية',
  },
  text: random_text_ar,
  home: home_page_ar,
  cart: cart_ar,
  nav_links: nav_ar,
  products: products_ar,
  footer: footer_ar,
}));
