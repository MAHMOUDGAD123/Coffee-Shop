export default defineEventHandler(async (ev) => {
  const { productId } = await readBody<CartRequestBody>(ev);
  const authSession = await useAuthSession(ev);

  if (!authSession.data.user) {
    throw createUnauthorizedError();
  }

  if (!productId) {
    return authSession.data.user;
  }

  const oldCart = authSession.data.user.cart;
  const newCart: CartItems = {};

  // Exclude the target item from the cart object
  for (const id in oldCart) {
    if (id !== productId) {
      newCart[id] = oldCart[id];
    }
  }

  await authSession.update({
    user: {
      ...authSession.data.user,
      cart: newCart,
    },
  });

  setResponseStatus(ev, 201, 'Cart Updated');

  return authSession.data.user;
});
