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
        component: () => import('views/recommend/recommend'),
        children: [
            {
                path: ':id',
                component: () => import('views/recommend/components/recommendDetail')
            }
        ]
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('views/userCenter/user')
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import('views/search/index')
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
