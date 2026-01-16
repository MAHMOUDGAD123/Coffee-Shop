// --- Imports---

import { cart_en } from './data/cart';
import { footer_en } from './data/footer';
import { home_page_en } from './data/home-page';
import { nav_en } from './data/nav';
import { products_en } from './data/products';
import { random_text_en } from './data/text';

// --- English Translation Map ---

export default defineI18nLocale(() => ({
  lang: {
    en: 'English',
    ar: 'Arabic',
  },
  text: random_text_en,
  home: home_page_en,
  cart: cart_en,
  nav_links: nav_en,
  products: products_en,
  footer: footer_en,
}));
