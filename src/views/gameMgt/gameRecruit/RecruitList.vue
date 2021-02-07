<template>
  <div>
    <sub-title title="게임모집"></sub-title>
    <section>
      <table-search></table-search>
      <div class="listButton">
        <button class="btn btn-default">전체</button>
        <button class="btn">모집중</button>
        <button class="btn">모집완료</button>
      </div>
      <div>
        <div class="card" :class="{green : !item.recruiting}" v-for="item in items" :key="item.id">
          <div class="additional">
            <div class="user-card">
              <div class="level center">
                {{ item.state }}
              </div>
              <div class="date center">
                {{ item.date }}
              </div>
              <div class="day center">
                {{ item.day }}
              </div>
            </div>
          </div>
          <div class="more-info">
            <router-link :to="`/gameMgt/recruit/detail/${item.id}`">
              <h1>{{ item.title }}</h1>
            </router-link>
            <div class="coords">
              <span><i class="fa fa-calendar-alt"></i></span>
              <span>{{ item.dateTime }}</span>
            </div>
            <div class="coords">
              <span><i class="fa fa-map-marker-alt"></i></span>
              <span>{{ item.alleyName }}</span>
            </div>
          </div>
          <div class="general">
            <div class="stats">
              <div>
                <div class="title">모집종료일</div>
                <i class="fa"
                   :class="item.recruiting ?
                          'fa-hourglass-half' : 'fa-hourglass-end'"></i>
                <div class="value">{{ item.endDate }}</div>
              </div>
              <div>
                <div class="title">모집인원</div>
                <i class="fa fa-walking"></i>
                <div class="value infinity">∞</div>
              </div>
              <div>
                <div class="title">신청인원</div>
                <i class="fa fa-gamepad"></i>
                <div class="value">{{ item.applicationNumber }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <paginate></paginate>
      <button-wrap>
        <button class="btn btn-primary"
                @click="goPage()">
          <i class="fa fa-check"></i> 게임 만들기
        </button>
      </button-wrap>
    </section>
  </div>
</template>

<script>
import SubTitle from '@/components/SubTitle.vue';
import TableSearch from '@/components/TableSearch.vue';
import Paginate from '@/components/Paginate.vue';
import ButtonWrap from '@/components/ButtonWrap.vue';

export default {
  name: 'RecruitList',
  components: {
    Paginate,
    SubTitle,
    TableSearch,
    ButtonWrap,
  },
  data() {
    return {
      items: [
        {
          id: 4,
          number: 4,
          author: '관리자',
          state: '모집중',
          date: '02.15',
          day: '월',
          endDate: '02.14',
          title: '1월 게임모집합니다.',
          alleyName: '현대볼링장',
          dateTime: '2021. 02. 15(월) 18:30',
          views: 400,
          recruiting: true,
          applicationNumber: 3,
        },
        {
          id: 3,
          number: 3,
          author: '관리자',
          state: '모집중',
          date: '02.24',
          day: '수',
          endDate: '02.23',
          title: '2:2 게임인원 모집합니다.',
          alleyName: '만년볼링장',
          dateTime: '2021. 02. 24(수) 18:30',
          views: 300,
          recruiting: true,
          applicationNumber: 10,
        },
        {
          id: 2,
          number: 2,
          author: '관리자',
          state: '모집완료',
          date: '01.24',
          day: '일',
          endDate: '01.24',
          title: '외부 클럽 대항전 게임 인원 모집',
          alleyName: '현대볼링장',
          dateTime: '2021. 01. 24(일) 13:00',
          views: 200,
          recruiting: false,
          applicationNumber: 3,
        },
        {
          id: 1,
          number: 1,
          author: '관리자',
          state: '모집완료',
          date: '01.01',
          day: '금',
          endDate: '01.01',
          title: '1:1 대전신청',
          alleyName: '현대볼링장',
          dateTime: '2021. 01. 01(금) 18:00',
          views: 100,
          recruiting: false,
          applicationNumber: 6,
        },
      ],
    };
  },
  methods: {
    goPage() {
      this.$router.push('/gameMgt/recruit/form');
    },
  },
};
</script>

<style scoped>
.btn-recruiting {
  background: linear-gradient(#dE685E, #EE786E);
}
.btn-completed {
  background: linear-gradient(#92bCa6, #A2CCB6);
}

.listButton {
  padding-left: 20px;
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
}
.card {
  width: 900px;
  height: 140px;
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin: 1.5rem;
}

.card h1 {
  margin: 1rem;
  font-size: 1.5em;
}

.card .additional {
  position: absolute;
  height: 100%;
  width: 150px;
  border-radius: 0 5px 5px 0;
  background: linear-gradient(#dE685E, #EE786E);
  transition: width 0.4s;
  overflow: hidden;
  z-index: 2;
}

.card.green .additional {
  background: linear-gradient(#92bCa6, #A2CCB6);
}

/*
.card:hover .additional {
  width: 100%;
  border-radius: 0 5px 5px 0;
}
*/

.card .additional .user-card {
  width: 150px;
  height: 100%;
  position: relative;
  float: left;
}

.card .additional .user-card::after {
  content: "";
  display: block;
  position: absolute;
  top: 10%;
  right: -2px;
  height: 80%;
  border-left: 2px solid rgba(0,0,0,0.025);
}

.card .additional .user-card .date {
  top: 45%;
  color: #ffffff;
  font-size: 2em;
  font-weight: bold;
}
.card .additional .user-card .level{
  top: 15%;
  color: #fff;
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: bold;
  background: rgba(0,0,0,0.15);
  padding: 0.125rem 0.75rem;
  border-radius: 100px;
  white-space: nowrap;
}

.card .additional .user-card .day {
  top: 80%;
  color: dimgrey;
  text-transform: uppercase;
  font-size: 0.85em;
  font-weight: bold;
  background: white;
  padding: 0.3rem 2.3rem;
  border-radius: 6px;
  white-space: nowrap;
}

.card .more-info {
  width: 500px;
  float: left;
  position: absolute;
  left: 160px;
  top: 10px;
  height: 95%;
}

.card .coords {
  margin: 0 1rem;
  font-size: 1rem;
}

.card .coords span + span {
  margin: 0 1rem;
}

.card .stats {
  font-size: 2rem;
  display: flex;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  top: auto;
}

.card .stats > div {
  flex: 1;
  text-align: center;
}

.card .stats i {
  display: block;
}

.card .stats div.title {
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
}

.card .stats div.value {
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.5rem;
}

.card .stats div.value.infinity {
  font-size: 2.5rem;
}

.card .general {
  width: 300px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  box-sizing: border-box;
  padding: 1rem;
  padding-top: 0;
}

.card .general .more {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 0.9em;
}
</style>
