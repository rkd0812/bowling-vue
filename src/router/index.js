import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NoticeList from '../views/community/notice/NoticeList.vue';
import NoticeDetail from '../views/community/notice/NoticeDetail.vue';
import NoticeForm from '../views/community/notice/NoticeForm.vue';
import FreeList from '../views/community/freeboard/FreeList.vue';
import FreeDetail from '../views/community/freeboard/FreeDetail.vue';
import FreeForm from '../views/community/freeboard/FreeForm.vue';
import MyAccount from '../views/mypage/account/MyAccount.vue';
import MyCalendar from '../views/mypage/schedule/MyCalendar.vue';
import HallOfFame from '../views/halloffame/fame/HallOfFame.vue';

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
  {
    path: '/community/notice/detail',
    name: 'Community',
    component: NoticeDetail,
  },
  {
    path: '/community/notice/form',
    name: 'Community',
    component: NoticeForm,
  },
  {
    path: '/community/freeboard/list',
    name: 'Community',
    component: FreeList,
  },
  {
    path: '/community/freeboard/detail',
    name: 'Community',
    component: FreeDetail,
  },
  {
    path: '/community/freeboard/form',
    name: 'Community',
    component: FreeForm,
  },
  {
    path: '/mypage/account/myaccount',
    name: 'mypage',
    component: MyAccount,
  },
  {
    path: '/mypage/schedule/mycalendar',
    name: 'mypage',
    component: MyCalendar,
  },
  {
    path: '/halloffame/fame/HallOfFame',
    name: 'HallOfFame',
    component: HallOfFame,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
