import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import disc from './modules/disc';
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        disc
    },
    getters
});

export default store;
