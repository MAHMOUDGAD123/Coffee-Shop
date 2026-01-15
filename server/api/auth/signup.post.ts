import { H3Event, EventHandlerRequest } from 'h3';

const openNewSession = async (event: H3Event<EventHandlerRequest>): Promise<ServerUserInfo> => {
  const authSession = await useAuthSession(event);

  if (authSession.data.user) {
    return authSession.data.user;
  }

  const newUserInfo: ServerUserInfo = {
    cart: [],
    filter: 'all',
    language: 'en',
  };

  await authSession.update({
    user: newUserInfo,
  });

  return newUserInfo;
};

export default defineEventHandler(async (ev) => {
  const user = await openNewSession(ev);

  setResponseStatus(ev, 201, 'Session Created');

  return user;
});
