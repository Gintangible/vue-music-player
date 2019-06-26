import Vue from 'vue';
import App from './App.vue';
import router from './router'

import 'amfe-flexible';
import 'normalize.css/normalize.css';
import store from './store';

import '@/icons';

import '@/styles/index.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
