import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home/Home.vue';
import Menu from './views/Menu/Menu.vue';
import PCustomer from './presentation/modules/order/4_pages/p-customer/p-customer.vue';
import PMenu from './presentation/modules/order/4_pages/p-menu/p-menu.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
    },
    {
      path: '/registrar-orden/cliente',
      name: 'OrderCustomer',
      component: PCustomer,
    },
    {
      path: '/registrar-orden/menu',
      name: 'OrderMenu',
      component: PMenu,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
