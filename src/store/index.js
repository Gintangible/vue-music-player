import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import recommend from './modules/recommend';
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        recommend
    },
    getters
});

export default store;
