interface CartRequestBody {
  productId?: string;
}

type CartItems = Record<string, number>;

interface FilterRequestBody {
  filter: FilterCategory;
}

interface LanguageRequestBody {
  lang: Language;
}
