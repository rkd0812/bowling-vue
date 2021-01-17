import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/members/Login.vue';
import Join from '../views/members/Join.vue';
import FindPW from '../views/members/FindPW.vue';
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
    path: '/members/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/members/join',
    name: 'Join',
    component: Join,
  },
  {
    path: '/members/findpw',
    name: 'FindPW',
    component: FindPW,
  },
  {
    path: '/community/notice/list',
    name: 'NoticeList',
    component: NoticeList,
  },
  {
    path: '/community/notice/detail',
    name: 'NoticeDetail',
    component: NoticeDetail,
  },
  {
    path: '/community/notice/form',
    name: 'NoticeForm',
    component: NoticeForm,
  },
  {
    path: '/community/freeboard/list',
    name: 'FreeList',
    component: FreeList,
  },
  {
    path: '/community/freeboard/detail',
    name: 'FreeDetail',
    component: FreeDetail,
  },
  {
    path: '/community/freeboard/form',
    name: 'FreeForm',
    component: FreeForm,
  },
  {
    path: '/mypage/account/myaccount',
    name: 'MyAccount',
    component: MyAccount,
  },
  {
    path: '/mypage/schedule/mycalendar',
    name: 'MyCalendar',
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
