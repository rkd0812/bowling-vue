import Vue from 'vue';
import VueRouter from 'vue-router';
import NoticeList from '../views/community/notice/NoticeList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/community',
    name: 'Community',
    children: [
      {
        path: './notice',
        name: 'Notice',
        children: [
          {
            path: './list',
            name: 'NoticeList',
            component: NoticeList,
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
