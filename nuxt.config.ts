// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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