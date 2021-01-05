import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NoticeList from '../views/community/notice/NoticeList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/community/notice/list',
    name: 'Community',
    component: NoticeList,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
