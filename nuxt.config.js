export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  buildDir: 'dist',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ibrahimdeniz.me',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.scss',
    '~/assets/custom.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/bootstrap.js', '~/plugins/fontawesome.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
  ],

  // specify module rules for css and scss
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  // use these settings to use custom css
  bootstrapVue: {
    bootstrapCSS: false,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  serverMiddleware: [{ path: '/api', handler: '~/api/index.js' }],

  env: {
    NOTION_TOKEN: process.env.NOTION_TOKEN,
    NOTION_RESUME_DESC_ID: process.env.NOTION_RESUME_DESC_ID,
    NOTION_RESUME_INFO_ID: process.env.NOTION_RESUME_INFO_ID,
    NOTION_RESUME_EXP_ID: process.env.NOTION_RESUME_EXP_ID,
    NOTION_RESUME_EDU_ID: process.env.NOTION_RESUME_EDU_ID,
    NOTION_RESUME_SKILLS_ID: process.env.NOTION_RESUME_SKILLS_ID,
  },
}
