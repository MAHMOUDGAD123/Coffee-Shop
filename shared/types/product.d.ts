type ProductReviewRate = 1 | 2 | 3 | 4 | 5;

interface Review {
  customerName: string;
  description: string;
  reviewStars: ProductReviewRate;
}

interface Product {
  id: string;
  title: string;
  shortName: string;
  description: string;
  price: number;
  discount: number;
  category: Category;
  reviews: Review[];
  isBestSeller: boolean;
}

interface ProductWithMetaData extends Product {
  inCart: boolean;
}

interface ServerProductsStore {
  list: Product[];
  categories: Category[];
  itemCount: number;
}

type ClientProductsStore = Omit<ServerProductsStore, 'list'> & {
  list: ProductWithMetaData[];
};

type ProductIdLookup = Record<string, Product>;

type Category = 'coffee' | 'equipment' | 'roasting';

type FilterCategory = Category | 'best' | 'offer' | 'all';
