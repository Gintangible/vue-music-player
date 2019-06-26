import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routers = [
    {
        path: '/',
        name: 'Home',
        redirect: '/recommend'
    },
    {
        path: '/recommend',
        name: 'Recommend',
        component: () => import('views/recommend/recommend')
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('views/userCenter/user')
    }
];

export default new Router({
    mode: 'history',
    base: '/music',
    // scrollBehavior: () => ({
    //     y: 0
    // }),
    routers
});
