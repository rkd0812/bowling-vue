import Login from '../views/members/Login.vue';
import Join from '../views/members/Join.vue';
import FindPW from '../views/members/FindPW.vue';

const account = [
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
];

export default account;
