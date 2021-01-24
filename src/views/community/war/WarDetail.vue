<template>
  <div>
    <sub-title title="대전신청"></sub-title>
    <section>
      <div class="contents_header">
        <div class="titleWrap">
          <span>2020-11-25</span>
          <h3>2020년 신년 맞이 팀전 신청합니다.</h3>
        </div>
        <div class="authorWrap">
          <span class="author">관리자</span>
          <span class="date">2020-11-25</span>
          <span class="hit">15</span>
        </div>
      </div>
      <div class="contents_body">
        <div class="paragraph">
          2021년 새해가 밝았습니다. 지루하고 재미없는 일상속에 작은 즐거움을 찾고자 볼링 한 게임 하실 분 찾아요. <br><br><br>
          일시 : 2021년 01월 25일(금) 오후 7시<br><br>
          장소 : 둔산볼링센터<br><br>
          모집인원 : 00명
        </div>
        <div class="replyWrap">
          <ul>
            <li><strong>김</strong> <label>김일등</label> <span>저 가능합니다.</span></li>
            <li><strong>최</strong> <label>최이등</label> <span>저도 가능합니다.</span></li>
            <li><strong>박</strong> <label>박삼등</label> <span>저는 다음에 같이해요~</span></li>
          </ul>
          <div class="inputReply row">
            <div class="col-10">
              <textarea class="form-control" rows="3"></textarea>
            </div>
            <div class="col-2">
              <button class="btn btn-default">등록</button>
            </div>
          </div>
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
  name: 'WarDetail',
  components: {
    ButtonWrap,
    SubTitle,
  },
  methods: {
    goPage() {
      this.$router.push('/community/war/list');
    },
  },
};
</script>

<style scoped>

</style>
