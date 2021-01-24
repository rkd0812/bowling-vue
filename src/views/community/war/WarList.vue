<template>
  <div>
    <sub-title title="대전신청"></sub-title>
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
            <router-link :to="`/community/war/detail/${item.id}`">
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
          <i class="fa fa-check"></i> 등록
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
  name: 'WarList',
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
          title: '대전신청',
          views: 400,
        },
        {
          id: 3,
          number: 3,
          author: '관리자',
          date: '2021-01-24',
          title: '대전신청',
          views: 300,
        },
        {
          id: 2,
          number: 2,
          author: '관리자',
          date: '2021-01-24',
          title: '대전신청',
          views: 200,
        },
        {
          id: 1,
          number: 1,
          author: '관리자',
          date: '2021-01-24',
          title: '대전신청',
          views: 100,
        },
      ],
    };
  },
  methods: {
    goPage() {
      this.$router.push('/community/war/form');
    },
  },
};
</script>

<style scoped>

</style>
