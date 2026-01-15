export default defineEventHandler(async (ev) => {
  const reqBody = await readBody<FilterRequestBody>(ev);
  const authSession = await useAuthSession(ev);

  if (!authSession.data.user) {
    throw createUnauthorizedError();
  }

  if (!reqBody.filter) {
    return authSession.data.user;
  }

  await authSession.update({
    user: {
      ...authSession.data.user,
      filter: reqBody.filter.toLowerCase() as FilterCategory,
    },
  });

  setResponseStatus(ev, 201, 'Filter Updated');

  return authSession.data.user;
});
