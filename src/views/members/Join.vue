<template>
  <div>
    <sub-title title="회원가입"></sub-title>
    <section>
      <div class="form-vertical join">
        <div class="form-group">
          <label class="control-label col-4"><span class="text-danger">*</span> 이메일</label>
          <div class="col-8 email">
            <input
              type="text"
              class="form-control"
              v-model="email"> @
            <select class="form-control">
              <option>직접입력</option>
              <option>gmail.com</option>
              <option>naver.com</option>
            </select>
            <span class="text-info text-small">
              <i class="fa fa-check"></i> 사용할 수 있는 이메일 입니다.
            </span>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-4"><span class="text-danger">*</span> 비밀번호</label>
          <div class="col-8">
            <input type="password"
                   class="form-control"
                   v-model="password1">
            <span
              class="text-danger text-small"
              v-show="errMsgPw"><i class="fa fa-times"></i>
              비밀번호는 특수문자, 소문자, 숫자를 이용하여 8자 ~ 20자 이내로 작성하여 주세요.
            </span>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-4"><span class="text-danger">*</span> 비밀번호 확인</label>
          <div class="col-8">
            <input type="password"
                   class="form-control"
                   v-model="password2"
                   v-bind:disabled="this.errMsgPw">
            <span
              class="text-danger text-small"
              v-show="errMsgPwConfirm">
              <i class="fa fa-times"></i> 비밀번호를 확인하세요</span>
            <span
              class="text-info text-small"
              v-show="msgPwConfirm">
              <i class="fa fa-check"></i> 비밀번호가 확인되었습니다.
            </span>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-4"><span class="text-danger">*</span> 사용자명</label>
          <div class="col-8">
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-4"><span class="text-danger">*</span> 모바일</label>
          <div class="col-8 connect">
            <input type="text"
                   class="form-control"
                   v-model="phoneNum1"> -
            <input type="text"
                   class="form-control"
                   v-model="phoneNum2"> -
            <input type="text"
                   class="form-control"
                   v-model="phoneNum3">
          </div>
        </div>
      </div>
      <button-wrap class="text-center">
        <button class="btn btn-primary"><i class="fa fa-check"></i> 회원가입</button>
      </button-wrap>
      <div class="snsJoinWrap">
        <h3>SNS으로 회원가입</h3>
        <div class="sns">
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-apple"></i></a>
          <a href="#"><i class="fab fa-google"></i></a>
          <a href="#" class="naver">N</a>
        </div>
      </div>
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
  data() {
    return {
      email: '',
      password1: '',
      password2: '',
      errMsgPw: true,
      errMsgPwConfirm: false,
      msgPwConfirm: false,
      phoneNum1: null,
      phoneNum2: null,
      phoneNum3: null,
    };
  },
  watch: {
    password1(value) {
      this.checkPassword(value);
      this.checkPasswordMatch();
    },
    password2() {
      this.checkPasswordMatch();
    },
    phoneNum1() {
      this.phoneNum1 = this.phoneNum1.replace(/[^0-9]/g, '');
    },
    phoneNum2() {
      this.phoneNum2 = this.phoneNum2.replace(/[^0-9]/g, '');
    },
    phoneNum3() {
      this.phoneNum3 = this.phoneNum3.replace(/[^0-9]/g, '');
    },
  },
  methods: {
    checkPassword(pw) {
      const num = pw.search(/[0-9]/g);
      const engLo = pw.search(/[a-z]/g);
      const engUp = pw.search(/[A-Z]/g);
      const spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

      if (pw.length < 8 || pw.length > 20) {
        this.errMsgPw = true;
      } else if (pw.search(/\s/) !== -1) {
        this.errMsgPw = true;
      } else if (num < 0 || engLo < 0 || spe < 0 || engUp < 0) {
        this.errMsgPw = true;
      } else {
        this.errMsgPw = false;
      }
    },
    checkPasswordMatch() {
      if (this.errMsgPw) return;
      if (this.password2 !== this.password1) {
        this.errMsgPwConfirm = true;
        this.msgPwConfirm = false;
      } else {
        this.errMsgPwConfirm = false;
        this.msgPwConfirm = true;
      }
    },
  },
};
</script>

<style scoped>
.join {padding:80px 200px 80px 100px;}

.snsJoinWrap {
  margin-top:40px;
}

.sns {
  display: block;
  margin-top:40px;
  text-align:center;
}

.sns a {
  display: inline-block;
  text-align:center;
  width: 40px;
  height: 40px;
  border:1px solid #ccc;
  line-height:36px;
  border-radius:5px;
  margin-right:5px;
}
.sns a:hover {
  background:#333;color:#fff;
  text-decoration:none;
}
.sns a.naver {
  font-size:1.2em;
  font-weight:bold;
}
</style>
