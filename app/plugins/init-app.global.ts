import { createLogger } from '~~/shared/logger';

export default defineNuxtPlugin(async () => {
  const { $i18n } = useNuxtApp();
  const userStore = useUserStore();
  const productsStore = useProductsStore();

  await userStore.loadUserData();
  await productsStore.loadData();
  // Set the language
  await $i18n.setLocale(userStore.userData.language);

  useHead({
    htmlAttrs: {
      dir: $i18n.localeProperties.value.dir,
      lang: $i18n.locale.value,
    },
  });

  if (!import.meta.dev) return;

  addRouteMiddleware(
    'auth',
    () => {
      if (userStore.userData) {
        createLogger({ tag: 'AUTH', side: 'client' }).success('Authorized ✅');
      } else {
        createLogger({ tag: 'AUTH', side: 'client' }).warn('Unauthorozed ✅');
      }
    },
    { global: true },
  );
});
