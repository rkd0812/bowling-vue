<template>
  <div class="loginWrap">
    <h2>로그인</h2>
    <input type="text" class="form-control">
    <input type="text" class="form-control">
    <button class="btn btn-primary">
      <i class="fa fa-check"></i> 로그인
    </button>
    <div class="positionContainer">
      <div class="left">
        <a href="#"><i class="fa fa-search"></i> 아이디 찾기</a>
      </div>
      <div class="right">
        <router-link to="/members/findpw"><i class="fa fa-lock"></i> 비밀번호 찾기</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
};
</script>

<style scoped>
.loginWrap {
  width:500px;
  margin:0 auto;
  padding:140px 100px;
}
.loginWrap h2 {
  text-align:center;
  margin-bottom:20px;
}
.loginWrap input {margin-bottom:10px;}
.loginWrap button {
  display:block;
  width:100%;
  margin-bottom:20px;
  margin-left:0;
}

.loginWrap .positionContainer {
  display:flex;
}
.loginWrap .positionContainer .left {
  flex:0 0 50%;
  text-align:left;
}
.loginWrap .positionContainer .right {
  flex:0 0 50%;
  text-align:right;
}
</style>
