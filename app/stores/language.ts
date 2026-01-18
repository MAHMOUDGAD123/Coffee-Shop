import type { Direction, SelectItem } from '@nuxt/ui';

export const useLanguageStore = defineStore('language', () => {
  // --- State ---

  const { locale, locales, t, setLocale, localeProperties } = useI18n();
  const loading = ref(false);

  // --- Computed ---

  const direction = computed(() => localeProperties.value.dir as Direction);

  const language = computed({
    get() {
      return locale.value;
    },
    async set(lang) {
      loading.value = true;
      await setLocale(lang);
      await updateAPILanguage(lang);
      loading.value = false;

      useHead({
        htmlAttrs: {
          dir: direction.value,
          lang: language.value,
        },
      });
    },
  });

  const languageOptions = computed<SelectItem[]>(() => {
    return locales.value.map(
      (loc) =>
        ({
          label: t(`lang.${loc.code}`),
          value: loc.code,
        }) satisfies SelectItem,
    );
  });

  // --- Methods ---

  async function updateAPILanguage(lang: Language) {
    await $fetch('/api/preferences/language', {
      method: 'POST',
      body: {
        lang: lang,
      },
    });
  }

  return {
    language,
    languageOptions,
    direction,
    loading,
  };
});
