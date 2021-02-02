import NoticeList from '../views/community/notice/NoticeList.vue';
import NoticeDetail from '../views/community/notice/NoticeDetail.vue';
import NoticeForm from '../views/community/notice/NoticeForm.vue';
import FreeList from '../views/community/freeboard/FreeList.vue';
import FreeDetail from '../views/community/freeboard/FreeDetail.vue';
import FreeForm from '../views/community/freeboard/FreeForm.vue';
import UsedDetail from '../views/community/used/UsedDetail.vue';
import UsedForm from '../views/community/used/UsedForm.vue';
import UsedList from '../views/community/used/UsedList.vue';

const community = [
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
];

export default community;
