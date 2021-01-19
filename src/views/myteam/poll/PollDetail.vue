<template>
  <div>
    <sub-title title="팀투표"></sub-title>
    <section>
      <div class="contents_header">
        <div class="titleWrap">
          <h3>11차 볼링대회 일정 결정</h3>
          <span>투표종료일 : 2020-11-25</span>
          <span class="badge badge-default">복수선택 가능</span>
        </div>
      </div>
      <div class="contents_body">
        <div class="governing">
          11차 볼딩대회 일정을 결정하려 합니다. 회원님들의 가능하신 시간에 투표해 주세요.
        </div>
        <ul class="pollWrap">
          <li>
            <strong><input type="checkbox"> 2020-12-02(수)</strong>
            <div class="progress">
              <span></span>
            </div>
            <span>11명</span>
          </li>
          <li>
            <strong><input type="checkbox"> 2020-12-15(화)</strong>
            <div class="progress">
              <span></span>
            </div>
            <span>02명</span>
          </li>
          <li>
            <strong><input type="checkbox"> 2020-12-30(수)</strong>
            <div class="progress">
              <span></span>
            </div>
            <span>09명</span>
          </li>
        </ul>
        <button-wrap class="text-center">
          <button class="btn btn-primary" @click="goPage()"><i class="fa fa-check"></i> 투표</button>
        </button-wrap>
      </div>
      <div class="contents_footer">
        <ul class="reply">
          <li>
            <span>김</span>
            <strong>김일등</strong>
            <div class="">저는 다 괜찮습니다.</div>
          </li>
          <li>
            <span>이</span>
            <strong>이이등</strong>
            <div class="">저는 이번달 다 불참이요.</div>
          </li>
          <li>
            <span>최</span>
            <strong>최삼등</strong>
            <div class="replyInput">
              <textarea rows="2" class="form-control"></textarea>
              <button class="btn btn-primary btn-reply">등록</button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>

</template>

<script>
import SubTitle from '@/components/SubTitle.vue';
import ButtonWrap from '@/components/ButtonWrap.vue';

export default {
  name: 'PollDetail',
  components: {
    SubTitle,
    ButtonWrap,
  },
  methods: {
    goPage() {
      this.$router.push('/myteam/poll/polllist');
    },
  },
};
</script>

<style scoped>
.contents_header {
  border-bottom: 1px solid #ccc;
}

.contents_header .titleWrap span {
  display: inline-block;
  margin-right: 5px;
}

.pollWrap {
  width: 600px;
  margin: 50px auto;
  background: #f4f4f4;
  padding: 50px;
}

.pollWrap li {
  display: flex;
  margin-bottom: 40px;
  font-size: 20px;
}

.pollWrap li:last-child {
  margin-bottom: 0;
}

.pollWrap li strong {
  flex: 0 0 40%;
}

.pollWrap li div.progress {
  flex: 1;
  background: #fff;
  height: 1em;
}

.pollWrap li div.progress span {
  display: inline-block;
  height: 1em;
  background: #F2B441;
  width: 50%;
}

.pollWrap li span {
  flex: 0 0 15%;
  text-align: right;
}

.contents_body {
  border-bottom: 1px solid #ccc;
}

.contents_footer {
  padding: 40px 0;
}

.contents_footer .reply li {
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px dashed #ccc;
}
.contents_footer .reply li:last-child {
  border-bottom:none;
}
.contents_footer .reply li span {
  display:inline-block;
  width:40px;
  height:40px;
  background:#888;
  color:#fff;
  border-radius:100px;
  text-align:center;
  line-height:40px;
  margin-right:20px;
}
.contents_footer .reply li strong {
  font-weight:700;
  display:inline-block;
  width:100px;
  margin-right:20px;
}
.contents_footer .reply li .replyInput {
  flex:1;
}
.contents_footer .reply li .replyInput textarea {
  float:left;
  width:calc(100% - 80px);
}
.contents_footer .reply li .replyInput button.btn-reply {
  height:60px;
}
</style>
