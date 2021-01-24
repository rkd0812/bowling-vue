<template>
  <div>
    <sub-title title="자유게시판"></sub-title>
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
            <router-link :to="`/community/freeboard/detail/${item.id}`">
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
  name: 'FreeList',
  components: {
    Paginate,
    SubTitle,
    TableSearch,
    ButtonWrap,
  },
  data() {
    return {
      modalIsOpen: false,
      title: '자유게시판',
      items: [
        {
          id: 4,
          number: 4,
          author: '볼링의신',
          date: '2021-01-24',
          title: '볼링의신 일일강좌 모집',
          views: 400,
        },
        {
          id: 3,
          number: 3,
          author: '볼링초보',
          date: '2021-01-24',
          title: '볼링초보입니다. 가입인사드려요~~',
          views: 300,
        },
        {
          id: 2,
          number: 2,
          author: '관리자',
          date: '2021-01-24',
          title: '자유게시판입니다. 욕설금지',
          views: 200,
        },
        {
          id: 1,
          number: 1,
          author: '관리자',
          date: '2021-01-24',
          title: '자유게시판입니다. 테스트중입니다.',
          views: 100,
        },
      ],
    };
  },
  methods: {
    goPage() {
      this.$router.push('/community/freeboard/form');
    },
  },
};
</script>

<style scoped>

</style>
