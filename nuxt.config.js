
export default {
  mode: 'universal',
  generate: {
    fallback: "404.html"
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'GrowUPwTech - STEM Education for Kids',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'keywords', name: 'keywords', content: 'GrowUPwTech - Gru Tech STEM Education Kids' },
      { hid: 'author', name: 'author', content: 'GrowUPwTech - Gru Tech' },
      { property: 'og:url', content: 'https://grutech.edu.vn/assets/img/logo.png' },
      { property: 'og:image', content: 'https://grutech.edu.vn/assets/img/logo.png' },
      { property: 'og:image:type', content: 'image/svg' },
      { property: 'og:title', content: 'GrowUPwTech - STEM Education for Kids' },
      { property: 'og:description', content: 'GrowUPwTech - STEM Education for Kids' },
      { property: 'og:locale', content: 'vi_VN' },
      { property: 'og:site_name', content: 'GrowUPwTech - STEM Education for Kids' },
      { property: 'og:type', content: 'website' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700" },
      { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/assets/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "/assets/plugins/mediabox/mediabox.min.css" },
      { rel: "stylesheet", href: "/assets/css/style.css" },
      { rel: "stylesheet", href: "/assets/css/responsive.css" },
      { rel: "stylesheet", href: "/assets/css/custom.css" },
    ],
    script: [
      { src: "/assets/plugins/mediabox/mediabox.min.js", body: true },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#f77ade',
    height: '4px'
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/robots', { UserAgent: '*' }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
