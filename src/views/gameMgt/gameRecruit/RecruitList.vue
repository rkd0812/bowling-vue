<template>
  <div>
    <sub-title title="게임모집"></sub-title>
    <section>
      <table-search></table-search>
      <table class="table-vertical">
        <colgroup>
          <col width="60px">
          <col width="*">
          <col width="15%">
          <col width="15%">
          <col width="10%">
        </colgroup>
        <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>등록날짜</th>
          <th>작성자</th>
          <th>조회수</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.number }}</td>
          <td class="text-left">
            <router-link :to="`/gameMgt/recruit/detail/${item.id}`">
              {{ item.title }}
            </router-link>
          </td>
          <td>{{ item.date }}</td>
          <td>{{ item.author }}</td>
          <td>{{ item.views }}</td>
        </tr>
        </tbody>
      </table>
      <paginate></paginate>
      <button-wrap>
        <button class="btn btn-primary"
                @click="goPage()">
          <i class="fa fa-check"></i> 신청
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
          date: '2021-01-24',
          title: '1월 게임모집합니다.',
          views: 400,
        },
        {
          id: 3,
          number: 3,
          author: '관리자',
          date: '2021-01-24',
          title: '2:2 게임인원 모집합니다.',
          views: 300,
        },
        {
          id: 2,
          number: 2,
          author: '관리자',
          date: '2021-01-24',
          title: '외부 클럽 대항전 게임 인원 모집',
          views: 200,
        },
        {
          id: 1,
          number: 1,
          author: '관리자',
          date: '2021-01-24',
          title: '1:1 대전신청',
          views: 100,
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

</style>
