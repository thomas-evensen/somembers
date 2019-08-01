// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueLazyload from 'vue-lazyload';
import '~/assets/styles.css';
require("typeface-open-sans");
require("normalize.css");


export default function (Vue, {
    router,
    head,
    isClient
}) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout);
    Vue.use(VueLazyload, {
        observer: true
    });
}