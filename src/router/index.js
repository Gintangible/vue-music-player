import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routers = [
    {
        path: '',
        name: 'Home',
        redirect: '/recommend'
    },
    {
        path: '/recommend',
        name: 'Recommend',
        component: () => import('pages/recommend/recommend'),
        children: [
            {
                path: ':id',
                component: () => import('pages/disc/disc')
            }
        ]
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('pages/userCenter/user')
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import('pages/search/index')
    }
];

export default new Router({
    // mode: 'history',
    // base: '/music',
    // scrollBehavior: () => ({
    //     y: 0
    // }),
    routes: routers
});
