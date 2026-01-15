export default defineEventHandler(async (ev) => {
  await useStorage().dispose();
  await (await useAuthSession(ev)).clear();
  await initStore();

  setResponseStatus(ev, 201, 'Store Initialized');

  return {
    message: 'done ✅',
  };
});
