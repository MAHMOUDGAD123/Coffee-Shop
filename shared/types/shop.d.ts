interface CartRequestBody {
  productId?: string;
}

type CartItems = Record<string, number>;

interface FilterRequestBody {
  filter: CategoryFilter;
}

interface LanguageRequestBody {
  lang: Language;
}
