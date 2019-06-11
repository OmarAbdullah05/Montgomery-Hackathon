import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import AOS from 'aos'
import 'aos/dist/aos.css'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)


import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight, faMobile,  faApple,  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAngleRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

AOS.init({
  once: true,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
