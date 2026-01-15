export default defineEventHandler(async (ev) => {
  await (await useAuthSession(ev)).clear();

  setResponseStatus(ev, 201, 'Session Terminated');

  return {
    message: 'Session terminated successfully ⚡',
  };
});
