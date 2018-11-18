import Vue from 'vue';
import Router from 'vue-router';

import PCustomer from './presentation/modules/order/4_pages/p-customer/p-customer.vue';
import PMenu from './presentation/modules/order/4_pages/p-menu/p-menu.vue';
import PListarOrder from './presentation/modules/order/4_pages/p-list-order/p-list-order.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/registrar-orden/cliente',
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
      path: '/listar-ordenes',
      name: 'ListarOrdenes',
      component: PListarOrder,
    },
  ],
});
