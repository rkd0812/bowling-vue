<template>
  <div>
    <sub-title title="명예의전당"></sub-title>
    <section>
      <tabs>
        <li class="on"><a href="#">전체</a></li>
        <li><a href="#">퍼펙트</a></li>
        <li><a href="#">800</a></li>
        <li><a href="#">700</a></li>
      </tabs>
      <ul class="listWrap">
        <li v-for="(fame, idx) in famelist" :key="idx">
          <div class="rankingNumber col-1">
            <i class="fa fa-trophy text-danger"></i>
            <span>{{ fame.rankingNumber }}</span>
          </div>
          <div class="profile col-1"><span>{{ fame.profile.avatar }}</span></div>
          <div class="rankTitle">
            <label>{{ fame.profile.username }}</label>
            <ul class="info">
              <li>{{ fame.profile.info[0] }}</li>
              <li>{{ fame.profile.info[1] }}</li>
              <li>{{ fame.profile.info[2] }}</li>
            </ul>
          </div>
          <div class="scoreWrap col-2">
            <label>{{ fame.scoreWrap.totalScore }}</label>
            <ul class="score">
              <li>{{ fame.scoreWrap.score[0] }}</li>
              <li>{{ fame.scoreWrap.score[1] }}</li>
              <li>{{ fame.scoreWrap.score[2] }}</li>
            </ul>
          </div>
        </li>
      </ul>
      <paginate></paginate>
    </section>
  </div>

</template>

<script>
import SubTitle from '@/components/SubTitle.vue';
import Tabs from '@/components/Tabs.vue';
import Paginate from '@/components/Paginate.vue';

export default {
  name: 'HallOfFame',
  components: {
    Paginate,
    SubTitle,
    Tabs,
  },
  data() {
    return {
      famelist: [
        {
          rankingNumber: '1위',
          profile: {
            avatar: '김',
            username: '김일등',
            info: ['볼링블링팀', '갈마볼링장', '2020-12-24'],
          },
          scoreWrap: {
            totalScore: 719,
            score: [289, 234, 191],
          },
        },
        {
          rankingNumber: '2위',
          profile: {
            avatar: '이',
            username: '이이등',
            info: ['볼링블링팀', '갈마볼링장', '2020-12-24'],
          },
          scoreWrap: {
            totalScore: 698,
            score: [289, 234, 191],
          },
        },
        {
          rankingNumber: '3위',
          profile: {
            avatar: '최',
            username: '최삼등',
            info: ['볼링블링팀', '갈마볼링장', '2020-12-24'],
          },
          scoreWrap: {
            totalScore: 680,
            score: [289, 234, 191],
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.listWrap {
  margin: 30px 0;
}

.listWrap > li {
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px dashed #ccc;
}

.listWrap > li:last-child {
  border-bottom: none;
}

.listWrap > li .rankingNumber {
  text-align:center;
}
.listWrap > li .rankingNumber i {
  font-size:34px;
}
.listWrap > li .rankingNumber span {
  display:block;
  font-size:22px;
  font-weight:700;
  margin-top:10px;
}

.listWrap > li .profile span {
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background: #888;
  line-height: 60px;
  color: #fff;
  text-align: center;
}

.listWrap > li .rankTitle {
  flex: 1;
}

.listWrap > li .rankTitle label {
  font-weight: 700;
  font-size: 22px;
}

.listWrap > li .rankTitle ul.info {
  margin: 10px 0;
}

.listWrap > li .rankTitle ul.info li {
  display: inline-block;
  color: #888;
}
.listWrap > li .rankTitle ul.info li:after {
  content:'|';
  padding:0 10px;
  color:#ccc;
}
.listWrap > li .rankTitle ul.info li:last-child:after {
  display:none;
}

.listWrap > li .scoreWrap label {
  display: block;
  background: #555;
  padding: 10px;
  text-align: center;
  border-radius: 100px;
  color:#fff;
  font-size:20px;
  font-weight:700;
}
.listWrap > li .scoreWrap .score {text-align:center;margin-top:10px;}
.listWrap > li .scoreWrap .score li {display:inline-block;font-weight:700;margin-right:10px;}
</style>
