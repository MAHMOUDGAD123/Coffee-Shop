import { createLogger } from '~~/shared/logger';

export default defineEventHandler(async (ev) => {
  const authSession = await useAuthSession(ev);

  ev.node.res.on('finish', async () => {
    console.log('\n');
    createLogger({ tag: 'SESSION' })!.log(authSession.data);
  });
});
