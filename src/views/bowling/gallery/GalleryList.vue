<template>
  <div>
    <sub-title title="볼링영상"></sub-title>
    <section>
      <table-search></table-search>
      <ul class="gallery">
        <li v-for="item in items" :key="item.id">
          <router-link :to="`/bowling/gallery/detail/${item.id}`">
            <img :src="item.thumbnail">
            <span>{{ item.date }}</span>
            <h3>{{ item.title }}</h3>
          </router-link>
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
  name: 'GalleryList',
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
          id: 1,
          thumbnail: 'gallery1.jpg',
          date: '2021-01-24',
          title: '1회 프리덤 팀전',
        },
        {
          id: 2,
          thumbnail: 'gallery1.jpg',
          date: '2021-01-24',
          title: '2회 프리덤 팀전',
        },
        {
          id: 3,
          thumbnail: 'gallery1.jpg',
          date: '2021-01-24',
          title: '3회 프리덤 팀전',
        },
        {
          id: 4,
          thumbnail: 'gallery1.jpg',
          date: '2021-01-24',
          title: '4회 프리덤 팀전',
        },
      ],
    };
  },
  methods: {
    goPage() {
      this.$router.push('/bowling/gallery/form');
    },
  },
};
</script>

<style scoped>

</style>
