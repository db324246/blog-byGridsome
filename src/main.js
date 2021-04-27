// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import 'highlight.js/styles/atom-one-dark-reasonable.css';
import "@/assets/code-highlight.css"

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.mixin({
    data() {
      return {
        baseUrl: process.env.GRIDSOME_API_URL
      }
    }
  })
  Vue.component('Layout', DefaultLayout)

  head.bodyAttrs = {
    class: ""
  };
}
