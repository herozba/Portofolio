// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Playfair+Display': [400, 700, 900],
      'DM+Sans': [300, 400, 500],
      'DM+Mono': [400]
    },
    display: 'swap'
  },
  app: {
    head: {
      title: 'Dudung News — Portal Berita',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portal berita modern karya Dudung' }
      ]
    }
  }
})
