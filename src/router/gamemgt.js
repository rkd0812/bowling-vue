import GameFee from '../views/gameMgt/gameFee/GameFee.vue';
import recruitList from '../views/gameMgt/gameRecruit/RecruitList.vue';
import recruitDetail from '../views/gameMgt/gameRecruit/RecruitDetail.vue';
import recruitForm from '../views/gameMgt/gameRecruit/RecruitForm.vue';

const gamemgt = [
  {
    path: '/gameMgt/gameFee/fee',
    name: 'GameFee',
    component: GameFee,
  },
  {
    path: '/gameMgt/recruit/list',
    name: 'recruitList',
    component: recruitList,
  },
  {
    path: '/gameMgt/recruit/detail',
    name: 'recruitDetail',
    component: recruitDetail,
  },
  {
    path: '/gameMgt/recruit/form',
    name: 'recruitForm',
    component: recruitForm,
  },
];

export default gamemgt;
