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
    path: '/community/used/list',
    name: 'Used',
    component: UsedList,
  },
  {
    path: '/community/used/detail',
    name: 'Used',
    component: UsedDetail,
  },
  {
    path: '/community/used/form',
    name: 'War',
    component: UsedForm,
  },
  {
    path: '/community/war/list',
    name: 'War',
    component: WarList,
  },
  {
    path: '/community/war/detail',
    name: 'War',
    component: WarDetail,
  },
  {
    path: '/community/war/form',
    name: 'War',
    component: WarForm,
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
  {
    path: '/bowling/gallery/list',
    name: 'Gallery',
    component: GalleryList,
  },
  {
    path: '/bowling/gallery/detail',
    name: 'Gallery',
    component: GalleryDetail,
  },
  {
    path: '/bowling/gallery/form',
    name: 'Gallery',
    component: GalleryForm,
  },
  {
    path: '/bowling/alley/list',
    name: 'Alley',
    component: AlleyList,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
