import MyAccount from '../views/mypage/account/MyAccount.vue';
import MyCalendar from '../views/mypage/schedule/MyCalendar.vue';

const mypage = [
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
];

export default mypage;
