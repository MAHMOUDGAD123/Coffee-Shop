export default defineEventHandler(async (ev) => {
  const reqBody = await readBody<CartRequestBody>(ev);
  const authSession = await useAuthSession(ev);

  if (!authSession.data.user) {
    throw createUnauthorizedError();
  }

  if (!reqBody.productId) {
    return authSession.data.user;
  }

  const newCartSet = new Set(authSession.data.user.cart);
  newCartSet.delete(reqBody.productId);

  await authSession.update({
    user: {
      ...authSession.data.user,
      cart: [...newCartSet],
    },
  });

  setResponseStatus(ev, 201, 'Cart Updated');

  return authSession.data.user;
});
