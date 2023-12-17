// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
    apiKey: process.env.API_KEY,
    baseUrl: process.env.BASE_URL,
    apiHost : process.env.API_HOST
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    "@nuxt/image"
  ],
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'dark',
  },
  tailwindcss: {
    // Options
  }
})