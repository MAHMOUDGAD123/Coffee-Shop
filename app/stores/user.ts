export const useUserStore = defineStore('store', () => {
  // --- State ---

  const userData = shallowRef<ClientUserInfo | null>(null);
  const $api = useRequestFetch();

  // --- Methods ---

  const loadUserData = async () => {
    userData.value = await $api<ClientUserInfo>('/api/auth/signup', {
      method: 'POST',
    });
  };

  return {
    userData,
    loadUserData,
  };
});
