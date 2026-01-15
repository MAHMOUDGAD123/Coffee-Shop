declare module 'nuxt/schema' {
  interface RuntimeConfig {
    storeSessionPassword: string;
  }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      NUXT_STORE_SESSION_PASSWORD: string;
    }
  }
}

export {};
