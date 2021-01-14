<template>
  <div>
    <sub-title title="볼링 영상"></sub-title>
    <section>
      <table-search></table-search>
      <ul class="gallery">
        <li>
          <a href="gallery-detail.html">
            <img :src="images">
            <span>2020.10.28</span>
            <h3>11회 프리덤 팀전</h3>
          </a>
        </li>
        <li>
          <a href="gallery-detail.html">
            <img :src="images">
            <span>2020.10.28</span>
            <h3>11회 프리덤 팀전</h3>
          </a>
        </li>
        <li>
          <a href="gallery-detail.html">
            <img :src="images">
            <span>2020.10.28</span>
            <h3>11회 프리덤 팀전</h3>
          </a>
        </li>
        <li>
          <a href="gallery-detail.html">
            <img :src="images">
            <span>2020.10.28</span>
            <h3>11회 프리덤 팀전</h3>
          </a>
        </li>
        <li>
          <a href="gallery-detail.html">
            <img :src="images">
            <span>2020.10.28</span>
            <h3>11회 프리덤 팀전</h3>
          </a>
        </li>
        <li>
          <a href="gallery-detail.html">
            <img :src="images">
            <span>2020.10.28</span>
            <h3>11회 프리덤 팀전</h3>
          </a>
        </li>
        <li>
          <a href="gallery-detail.html">
            <img :src="images">
            <span>2020.10.28</span>
            <h3>11회 프리덤 팀전</h3>
          </a>
        </li>
        <li>
          <a href="gallery-detail.html">
            <img :src="images">
            <span>2020.10.28</span>
            <h3>11회 프리덤 팀전</h3>
          </a>
        </li>
      </ul>
      <paginate></paginate>
      <button-wrap btn-name="영상등록"></button-wrap>
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
};
</script>

<style scoped>

</style>
