// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const config = {
  siteName: '猫十一的盒子',
  titleTemplate: "%s - 猫十一的盒子",
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['posts', 'tags', 'contacts'],
        singleTypes: ['site-config']
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ]
  // templates: {
  //   StrapiPosts: [
  //     {
  //       path: '/article/:id',
  //       component: './src/templates/article.vue'
  //     }
  //   ]
  // }
}

module.exports = config
