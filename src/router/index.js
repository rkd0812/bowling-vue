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
import TeamFee from '../views/myteam/team/TeamFee.vue';
import PollList from '../views/myteam/poll/PollList.vue';
import PollDetail from '../views/myteam/poll/PollDetail.vue';
import WarDetail from '../views/community/war/WarDetail.vue';
import WarForm from '../views/community/war/WarForm.vue';
import WarList from '../views/community/war/WarList.vue';
import UsedDetail from '../views/community/used/UsedDetail.vue';
import UsedForm from '../views/community/used/UsedForm.vue';
import UsedList from '../views/community/used/UsedList.vue';
import GalleryDetail from '../views/bowling/gallery/GalleryDetail.vue';
import GalleryForm from '../views/bowling/gallery/GalleryForm.vue';
import GalleryList from '../views/bowling/gallery/GalleryList.vue';
import AlleyList from '../views/bowling/alley/AlleyList.vue';

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
    path: '/community/notice/detail/:id',
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
    path: '/community/freeboard/detail/:id',
    name: 'FreeDetail',
    component: FreeDetail,
  },
  {
    path: '/community/freeboard/form',
    name: 'FreeForm',
    component: FreeForm,
  },
  {
    path: '/community/used/list',
    name: 'UsedList',
    component: UsedList,
  },
  {
    path: '/community/used/detail/:id',
    name: 'UsedDetail',
    component: UsedDetail,
  },
  {
    path: '/community/used/form',
    name: 'UsedForm',
    component: UsedForm,
  },
  {
    path: '/community/war/list',
    name: 'WarList',
    component: WarList,
  },
  {
    path: '/community/war/detail/:id',
    name: 'WarDetail',
    component: WarDetail,
  },
  {
    path: '/community/war/form',
    name: 'WarForm',
    component: WarForm,
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
    path: '/halloffame/fame/halloffame',
    name: 'HallOfFame',
    component: HallOfFame,
  },
  {
    path: '/bowling/gallery/list',
    name: 'Gallery',
    component: GalleryList,
  },
  {
    path: '/bowling/gallery/detail/:id',
    name: 'GalleryDetail',
    component: GalleryDetail,
  },
  {
    path: '/bowling/gallery/form',
    name: 'GalleryForm',
    component: GalleryForm,
  },
  {
    path: '/bowling/alley/list',
    name: 'AlleyList',
    component: AlleyList,
  },
  {
    path: '/myteam/team/teamfee',
    name: 'TeamFee',
    component: TeamFee,
  },
  {
    path: '/myteam/poll/polllist',
    name: 'PollList',
    component: PollList,
  },
  {
    path: '/myteam/poll/polldetail',
    name: 'PollDetail',
    component: PollDetail,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
