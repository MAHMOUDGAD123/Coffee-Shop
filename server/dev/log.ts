export default defineEventHandler(async (ev) => {
  const authSession = await useAuthSession(ev);
  const { createLogger } = await import('~~/shared/utils/logger');

  ev.node.res.on('finish', async () => {
    console.log('\n');
    createLogger({ tag: 'SESSION' })!.log(`[${authSession.id}]`, JSON.stringify(authSession.data));
  });
});
