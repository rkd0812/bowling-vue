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
        <!--        <a href="#"><i class="fa fa-search"></i> 아이디 찾기</a>-->
      </div>
      <div class="right">
        <router-link to="/members/findpw"><i class="fa fa-lock"></i> 비밀번호 찾기</router-link>
      </div>
    </div>
    <div class="sns">
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-facebook"></i></a>
      <a href="#"><i class="fab fa-apple"></i></a>
      <a href="#"><i class="fab fa-google"></i></a>
      <a href="#" class="naver">N</a>
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
  width: 500px;
  margin: 0 auto;
  padding: 140px 100px;
}

.loginWrap h2 {
  text-align: center;
  margin-bottom: 20px;
}

.loginWrap input {
  margin-bottom: 10px;
}

.loginWrap button {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  margin-left: 0;
}

.loginWrap .positionContainer {
  display: flex;
}

.loginWrap .positionContainer .left {
  flex: 0 0 50%;
  text-align: left;
}

.loginWrap .positionContainer .right {
  flex: 0 0 50%;
  text-align: right;
}

.loginWrap .sns {
  display: block;
  margin-top:40px;
  text-align:center;
}

.loginWrap .sns a {
  display: inline-block;
  text-align:center;
  width: 40px;
  height: 40px;
  border:1px solid #ccc;
  line-height:36px;
  border-radius:5px;
  margin-right:5px;
}
.loginWrap .sns a:hover {
  background:#333;color:#fff;
  text-decoration:none;
}
.sns a.naver {
  font-size:1.2em;
  font-weight:bold;
}
</style>
