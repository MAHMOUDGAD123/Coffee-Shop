// --- Filter ---
type ProductsFilter = Record<CategoryFilter, string>;

const products_filter_en = {
  all: 'All Categories',
  best: 'Best Seller',
  offer: 'Special Offers',
  coffee: 'Coffee',
  equipment: 'Coffee Equipment',
  roasting: 'Roasting',
} satisfies ProductsFilter;

const products_filter_ar = {
  all: 'جميع الفئات',
  best: 'الأكثر مبيعًا',
  offer: 'عروض خاصة',
  coffee: 'قهوة',
  equipment: 'معدات القهوة',
  roasting: 'التحميص',
} satisfies ProductsFilter;

export const products_en = {
  filter: products_filter_en,
};

export const products_ar = {
  filter: products_filter_ar,
};
