import { defineNuxtConfig } from 'nuxt/config';
import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-12-11',

  runtimeConfig: {
    storeSessionPassword: '7b4e8a12-9c3f-4e5d-b2a1-6d8f7e9c0a1b',
  },

  devtools: { enabled: false },

  devServer: { port: 5555, host: '0.0.0.0' },

  typescript: {
    typeCheck: false,
    tsConfig: {
      compilerOptions: {
        skipLibCheck: true,
        strict: false,
        noUnusedLocals: true,
        noUnusedParameters: true,
      },
    },
  },

  app: {
    pageTransition: {
      appear: true,
      mode: 'out-in',
      type: 'transition',
      name: 'fade',
    },
  },

  $development: {
    nitro: {
      handlers:
        process.env.NODE_ENV === 'development'
          ? [
              {
                middleware: true,
                handler: './server/dev/log.ts',
              },
            ]
          : [],
    },
  },

  nitro: {
    storage: {
      sessions: {
        driver: 'memory',
      },
    },
  },

  sourcemap: {
    server: false,
    client: false,
  },

  css: ['./app/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ['@pinia/nuxt', '@vueuse/nuxt', '@nuxt/ui', '@nuxt/icon', '@nuxtjs/i18n'],

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    vueI18n: 'i18n.config.ts',
    locales: [
      { code: 'en', name: 'English', file: 'en.ts', language: 'en-US', dir: 'ltr' },
      { code: 'ar', name: 'Arabic', file: 'ar.ts', language: 'ar-EG', dir: 'rtl' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
    },
  },

  icon: {
    serverBundle: {
      collections: [
        'qlementine-icons',
        'simple-icons',
        'ph',
        'bi',
        'fa',
        'mi',
        'mdi',
        'uil',
        'mdi-light',
        'ant-design',
        'teenyicons',
        'fa6-solid',
        'fa7-solid',
        'fa7-regular',
        'fa-regular',
        'material-symbols',
        'line-md',
        'lucide',
        'carbon',
        'streamline-plump',
      ],
      remote: false,
    },
    mode: 'css',
  },

  ui: {
    colorMode: false,
  },
});
