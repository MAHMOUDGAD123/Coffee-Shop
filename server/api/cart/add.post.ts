export default defineEventHandler(async (ev) => {
  const reqBody = await readBody<CartRequestBody>(ev);
  const authSession = await useAuthSession(ev);

  if (!authSession.data.user) {
    throw createUnauthorizedError();
  }

  if (!reqBody.productId) {
    return authSession.data.user;
  }

  const newCart = { ...authSession.data.user.cart };
  newCart[reqBody.productId] = reqBody.count;

  await authSession.update({
    user: {
      ...authSession.data.user,
      cart: newCart,
    },
  });

  setResponseStatus(ev, 201, 'Cart Updated');

  return authSession.data.user;
});
