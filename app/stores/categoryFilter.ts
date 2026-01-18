// --- Types ---

interface FilterOptionsMapProps {
  value: CategoryFilter;
  label:
    | 'All Categories'
    | 'Special Offers'
    | 'Best Seller'
    | 'Coffee'
    | 'Coffee Equipment'
    | 'Roasting';
}
type FilterMetaDataMap = Record<CategoryFilter, Pick<FilterOptionsMapProps, 'label'>>;

export const useCategoryFilterStore = defineStore('categoryFilter', () => {
  // --- State ---

  const $api = useRequestFetch();
  const userStore = useUserStore();
  const productsStore = useProductsStore();
  const currentFilter = shallowRef(userStore.userData.filter);

  // --- Watchers ---

  // Watch the filter value and update the API on change
  watch(currentFilter, async (newValue) => {
    await $api('/api/preferences/filter', {
      method: 'POST',
      body: {
        filter: newValue,
      },
    });
  });

  // --- Data ---

  const _filterMetaDataMap: FilterMetaDataMap = {
    all: {
      label: 'All Categories',
    },
    coffee: {
      label: 'Coffee',
    },
    equipment: {
      label: 'Coffee Equipment',
    },
    roasting: {
      label: 'Roasting',
    },
    best: {
      label: 'Best Seller',
    },
    offer: {
      label: 'Special Offers',
    },
  };

  // --- Computed ---

  const _filterOptionsMap = computed(
    () =>
      new Map<CategoryFilter, FilterOptionsMapProps>(
        ['all', 'best', 'offer', ...productsStore.data.categories].map((category) => {
          const cat = category as CategoryFilter;
          return [
            cat,
            {
              value: cat,
              label: _filterMetaDataMap[cat].label,
            },
          ];
        }),
      ),
  );

  const filterOptions = computed(() => [..._filterOptionsMap.value.values()]);

  const filteredProducts = computed(() => {
    switch (currentFilter.value) {
      case 'coffee':
      case 'equipment':
      case 'roasting':
        return productsStore.data.list.filter((prod) => prod.category.en === currentFilter.value);
      case 'best':
        return productsStore.data.list.filter((prod) => prod.isBestSeller);
      case 'offer':
        return productsStore.data.list.filter((prod) => prod.discount > 0);
      case 'all':
      default:
        return productsStore.data.list;
    }
  });

  // --- Methods ---

  const getCategory = (category: CategoryFilter) => {
    return _filterOptionsMap.value.get(category);
  };

  return {
    filterOptions,
    filteredProducts,
    currentFilter,
    getCategory,
  };
});
