<template>
  <div>
    <sub-title title="자유게시판"></sub-title>
    <section>
      <div class="contents_header">
        <div class="titleWrap">
          <span>2020-10-28</span>
          <h3>11회 프리덤 팀전</h3>
        </div>
        <div class="authorWrap">
          <span class="author">관리자</span>
          <span class="date">2020-11-25</span>
          <span class="hit">15</span>
        </div>
      </div>
      <div class="contents_body">
        <div class="video"></div>
        <div class="parag">
          양측 회원들의 열띤 응원속에서 오늘의 우승자가 극적으로 탄생했다.
        </div>
      </div>
      <button-wrap>
        <button class="btn btn-primary" @click="goPage()">
          <i class="fa fa-list"></i> 목록
        </button>
      </button-wrap>
    </section>
  </div>
</template>

<script>
import SubTitle from '@/components/SubTitle.vue';
import ButtonWrap from '@/components/ButtonWrap.vue';

export default {
  name: 'GalleryDetail',
  components: {
    ButtonWrap,
    SubTitle,
  },
  methods: {
    goPage() {
      this.$router.push('/bowling/gallery/list');
    },
  },
};
</script>

<style scoped>

</style>
