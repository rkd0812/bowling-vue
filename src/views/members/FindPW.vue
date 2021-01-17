<template>
  <div>
    <sub-title title="비밀번호 찾기"></sub-title>
    <section>
      <div class="governing">
        입력하신 이메일로 임시 비밀번호를 발송해 드립니다. <br>
        이메일 확인 후 임시 비밀번호로 로그인 하시고 <span class="text-success">“마이페이지"</span>에서 비밀번호를 변경해 주세요.
      </div>
      <div class="form-vertical findpw">
        <div class="form-group">
          <label class="control-label col-3">이메일</label>
          <div class="col-5 email">
            <input type="text" class="form-control"> @
            <select class="form-control">
              <option>직접입력</option>
              <option>gmail.com</option>
              <option>naver.com</option>
            </select>
          </div>
        </div>
      </div>
      <button-wrap class="text-center">
        <button class="btn btn-primary"><i class="fa fa-check"></i> 이메일 보내기</button>
      </button-wrap>
    </section>
  </div>

</template>

<script>
import SubTitle from '@/components/SubTitle.vue';
import ButtonWrap from '@/components/ButtonWrap.vue';

export default {
  name: 'Join',
  components: {
    SubTitle,
    ButtonWrap,
  },
};
</script>

<style scoped>
.governing {
  width:800px;
  margin:0 auto;
  padding:30px;
}
.findpw {
  width:800px;
  margin:0 auto;
  padding:50px;
}
.findpw .form-group {
  margin-bottom:0;
}
</style>
