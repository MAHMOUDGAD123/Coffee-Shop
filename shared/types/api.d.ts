interface CartRequestBody {
  productId?: string;
  count: number;
}

interface FilterRequestBody {
  filter: CategoryFilter;
}

interface LanguageRequestBody {
  lang: Language;
}
