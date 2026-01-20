export default defineEventHandler(async (ev) => {
  const { productId } = await readBody<CartRequestBody>(ev);
  const authSession = await useAuthSession(ev);

  if (!authSession.data.user) {
    throw createUnauthorizedError();
  }

  if (!productId) {
    return authSession.data.user;
  }

  const { [productId]: removedItem, ...newCart } = authSession.data.user.cart;

  await authSession.update({
    user: {
      ...authSession.data.user,
      cart: { ...newCart },
    },
  });

  setResponseStatus(ev, 201, 'Cart Updated');

  return authSession.data.user;
});
