export default defineEventHandler(async (ev) => {
  const authSession = await useAuthSession(ev);

  if (!authSession.data.user) {
    throw createUnauthorizedError();
  }

  await authSession.update({
    user: {
      ...authSession.data.user,
      cart: [],
    },
  });

  setResponseStatus(ev, 201, 'Cart Cleared');

  return authSession.data.user;
});
