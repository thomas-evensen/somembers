// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/styles.css';
import '~/assets/normalize.css';
import VueLazyload from 'vue-lazyload';
require("typeface-open-sans");
//require("source-sans-pro");
//require("normalize.css");


export default function(Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout);
    Vue.use(VueLazyload, {
        observer: true
    });
}