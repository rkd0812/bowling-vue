<template>
  <div>
    <sub-title title="나의 계정"></sub-title>
    <section>
      <div class="form-vertical myaccount">
        <div class="form-group">
          <label class="control-label col-3">성명</label>
          <div class="form-control-static">홍길동</div>
        </div>
        <div class="form-group">
          <label class="control-label col-3">아이디</label>
          <div class="form-control-static">honggildong@gmail.com</div>
        </div>
        <div class="form-group">
          <label class="control-label col-3">비밀번호</label>
          <div class="">
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-3">비밀번호 확인</label>
          <div class="">
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-3">이메일</label>
          <div class="">
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-3">팀소속</label>
          <div class="badgeWrap">
            <span class="badge badge-primary">볼링블링</span>
            <span class="badge badge-primary">프리덤</span>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-3">초대허용여부</label>
          <div class="form-control-static checkboxWrap">
            <label><input type="radio" name="group1" checked> 허용</label>
            <label><input type="radio" name="group1"> 허용하지 않음</label>
          </div>
        </div>
      </div>
      <div class="btnWrap center">
        <button class="btn btn-primary">비밀번호 수정</button>
      </div>
    </section>
  </div>

</template>

<script>
import SubTitle from '@/components/SubTitle.vue';

export default {
  name: 'MyAccount',
  components: {
    SubTitle,
  },
};
</script>

<style scoped>

.myaccount {padding:50px 240px 50px 200px;}
</style>
