export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Takanashi Kiara Fanmade Website',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-title', property: 'og:title', content: 'Takanashi Kiara Fanmade Website' },
      { hid: 'og-desc', property: 'og:description', content: 'This is a fanmade website introducing Takanashi Kiara and her fanbase, KFP.' },
      { hid: 'og-image', property: 'og:image', content: 'https://takanashikiara.me/ogimage.png' },
      { hid: 'og-url', property: 'og:url', content: 'https://takanashikiara.me' },
      { hid: 'description', name: 'description', content: 'This is a fanmade website introducing Takanashi Kiara and her fanbase, KFP.' },
      { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    sass: ['./assets/general.sass'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass: { sourceMap: false },
    },
  },

  generate: {
    dir: '../docs',
  },
}
