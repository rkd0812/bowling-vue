<template>
  <div>
    <sub-title title="중고장터"></sub-title>
    <section>
      <table-search></table-search>
      <ul class="thumb">
        <li v-for="item in items" :key="item.id">
          <span class="number">{{ item.number }}</span>
          <div class="thumbnail">
            <i class="fa fa-file-image"></i>
          </div>
          <ul class="titleWrap">
            <li>
              <router-link :to="`/community/used/detail/${item.id}`">
                 <strong>{{ item.title }}</strong>
              </router-link>
            </li>
            <li><span class="date">{{ item.date }}</span></li>
            <li><span class="author">{{ item.author }}</span></li>
          </ul>
          <div class="state"
               :class="{'text-danger': item.status }">
            {{ item.statusNm }}
          </div>
        </li>
      </ul>
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
  name: 'UsedList',
  components: {
    Paginate,
    SubTitle,
    TableSearch,
    ButtonWrap,
  },
  data() {
    return {
      modalIsOpen: false,
      items: [
        {
          id: 4,
          number: 4,
          author: '볼링의신',
          date: '2021-01-24',
          title: '새 볼링공 팝니다.',
          statusNm: '판매중',
          status: false,
          views: 400,
        },
        {
          id: 3,
          number: 3,
          author: '볼링초보',
          date: '2021-01-24',
          title: '볼링장갑 싸게 팔아요.',
          statusNm: '판매완료',
          status: true,
          views: 300,
        },
        {
          id: 2,
          number: 2,
          author: '이아무',
          date: '2021-01-24',
          title: '초보 볼링킷 박스 미개봉 팝니다.',
          statusNm: '판매완료',
          status: false,
          views: 200,
        },
        {
          id: 1,
          number: 1,
          author: '김아무',
          date: '2021-01-24',
          title: '1개월 사용 볼링화 팝니다.',
          statusNm: '판매중',
          status: false,
          views: 100,
        },
      ],
    };
  },
  methods: {
    goPage() {
      this.$router.push('/community/used/form');
    },
  },
};
</script>

<style scoped>
/* thumbnail list */
.container .thumb {
  border-top:2px solid #ccc;
}
.container .thumb>li {
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  align-items:center;
  border-bottom:1px dashed #ccc;
  padding: 5px 0;
}
.thumbnail {
  flex-basis:100px;
  background:#f9f9f9;
  border:1px solid #ddd;
  height:100px;
  text-align:center;
  line-height:100px;
  margin-right:10px;
  color:#ccc;
}
.thumb>li .number {flex-basis:60px;}

.container .thumb>li .titleWrap {
  flex: 1;
  margin-left: 20px;
  list-style: none;
}
.container .thumb>li>.titleWrap li {
  margin-left: 20px;
  margin-bottom: 5px;
  list-style: circle;
  border-bottom : none;
}
.container .thumb>li>.titleWrap li:first-child {
  list-style: none;
  margin-left: 0;
  margin-bottom: 10px;
}
.container .thumb>li>.titleWrap li strong {
  font-size: 1.2em;
  font-weight: 700;
}
.container .thumb>li>.titleWrap> li> .date  {
  display:block;
  font-size:1em;
  color:#888;
  margin-bottom:5px;
}
.container .thumb>li>.titleWrap> li> span.author {
  display:block;
  font-size:1em;
  color:#888;
}
</style>
