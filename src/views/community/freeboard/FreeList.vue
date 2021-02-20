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
        <tr v-for="item in freeBoardList" :key="item.id">
          <td>{{ item.number }}</td>
          <td class="text-left">
            <router-link :to="`/community/freeboard/detail/${item.id}`">
              {{ item.title }}
            </router-link>
          </td>
          <td>{{ item.date }}</td>
          <td>{{ item.authorName }}</td>
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
import { mapState, mapActions } from 'vuex';
/* import axios from 'axios'; */

export default {
  name: 'FreeList',
  components: {
    Paginate,
    SubTitle,
    TableSearch,
    ButtonWrap,
  },
  computed: {
    ...mapState({
      freeBoardList: 'freeBoardList',
    }),
  },
  data() {
    return {
      title: '자유게시판',
    };
  },
  methods: {
    goPage() {
      this.$router.push('/community/freeboard/form');
    },
    ...mapActions([
      'FETCH_FREE_BOARD_LIST',
    ]),
  },
  created() {
    this.FETCH_FREE_BOARD_LIST();
    /* axios
      .get('http://localhost:3000/api/freeboards')
      .then((response) => {
        this.freeBoardList = response.data;
      })
      .catch((error) => {
        console.log('Error Message :', error.response);
      }); */
  },
};
</script>

<style scoped>

</style>
