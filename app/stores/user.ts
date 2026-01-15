export const useUserStore = defineStore('store', () => {
  const userData = shallowRef<ClientUserInfo | null>(null);
  const $api = useRequestFetch();

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
