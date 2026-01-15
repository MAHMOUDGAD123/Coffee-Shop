import { H3Event, SessionConfig } from 'h3';

export const useAuthSession = (ev: H3Event) => {
  const runtimeConfig = useRuntimeConfig(ev);

  const sessionConfig: SessionConfig = {
    name: 'nuxt-store-session',
    password: runtimeConfig.storeSessionPassword,
    cookie: {
      maxAge: 60 * 60, // 1 hour
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
    },
  };

  return useSession<{ user?: ServerUserInfo }>(ev, sessionConfig);
};
