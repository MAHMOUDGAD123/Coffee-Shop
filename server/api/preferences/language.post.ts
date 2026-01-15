export default defineEventHandler(async (ev) => {
  const reqBody = await readBody<LanguageRequestBody>(ev);
  const authSession = await useAuthSession(ev);

  if (!authSession.data.user) {
    throw createUnauthorizedError();
  }

  if (!reqBody.lang) {
    return authSession.data.user;
  }

  await authSession.update({
    user: {
      ...authSession.data.user,
      language: reqBody.lang.toLowerCase() as Language,
    },
  });

  setResponseStatus(ev, 201, 'Filter Updated');

  return authSession.data.user;
});
