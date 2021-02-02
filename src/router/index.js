import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import account from './account';
import community from './community';
import gamemgt from './gamemgt';
import bowling from './bowling';
import mypage from './mypage';
import halloffame from './halloffame';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  ...account,
  ...community,
  ...gamemgt,
  ...bowling,
  ...mypage,
  ...halloffame,
];

const router = new VueRouter({
  routes,
});

export default router;
