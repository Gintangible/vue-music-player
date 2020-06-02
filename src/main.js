import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'amfe-flexible';
import 'normalize.css/normalize.css';
import './assets/css/reset.css'
import store from './store';
import VueLazyload from 'vue-lazyload';

import fastclick from 'fastclick'
fastclick.attach(document.body) // 解决移动端事件300ms延时

import '@/icons';

import '@/styles/index.scss';

Vue.use(VueLazyload, {
    error: require('./assets/images/error.jpg'),
    // loading: require('./assets/images/loading.gif')
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
