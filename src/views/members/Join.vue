<template>
  <div>
    <sub-title title="회원가입"></sub-title>
    <section>
      <div class="form-vertical join">
        <div class="form-group">
          <label class="control-label col-4"><span class="text-danger">*</span> 아이디</label>
          <div class="col-8">
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-4"><span class="text-danger">*</span> 비밀번호</label>
          <div class="col-8">
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-4"><span class="text-danger">*</span> 비밀번호 확인</label>
          <div class="col-8">
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-4"><span class="text-danger">*</span> 사용자명</label>
          <div class="col-8">
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-4"><span class="text-danger">*</span> 이메일</label>
          <div class="col-8 email">
            <input type="text" class="form-control"> @
            <select class="form-control">
              <option>직접입력</option>
              <option>gmail.com</option>
              <option>naver.com</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-4"><span class="text-danger">*</span> 모바일</label>
          <div class="col-8 connect">
            <input type="text" class="form-control"> -
            <input type="text" class="form-control"> -
            <input type="text" class="form-control">
          </div>
        </div>
      </div>
      <button-wrap class="text-center">
        <button class="btn btn-primary"><i class="fa fa-check"></i> 회원가입</button>
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
.join {padding:80px 200px 80px 100px;}
</style>
