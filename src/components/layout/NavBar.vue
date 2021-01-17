<template>
  <header>
    <h1 class="branding">
      <i class="fa fa-bowling-ball"></i> <router-link to="/">BOWLING CLUB</router-link>
    </h1>
    <div class="global">
      <router-link to="/members/Login"><i class="fa fa-sign-in"></i> 로그인</router-link>
      <router-link to="/members/Join"><i class="fa fa-user-plus"></i> 회원가입</router-link>
    </div>
    <div class="gnb">
      <ul class="depth_first">
        <li><a href="#">볼링</a>
          <ul class="depth_second">
            <li>
              <router-link to="">볼링지식</router-link>
            </li>
            <li><a href="#">볼링영상</a></li>
            <li><a href="#">볼링장정보</a></li>
          </ul>
        </li>
        <li>
          <router-link to="/halloffame/fame/HallOfFame">명예의전당</router-link>
        </li>
        <li><a href="#">커뮤니티</a>
          <ul class="depth_second">
            <li>
              <router-link to="/community/notice/list">공지사항</router-link>
            </li>
            <li>
              <router-link to="/community/freeBoard/list">자유게시판</router-link>
            </li>
            <li><a href="used-list.html">중고장터</a></li>
            <li><a href="#">대전신청</a></li>
          </ul>
        </li>
        <li><a href="#">마이페이지</a>
          <ul class="depth_second">
            <li>
              <router-link to="/mypage/account/myaccount">나의 계정</router-link>
            </li>
            <li><a href="#">나의 스코어</a></li>
            <li><a href="#">게임관리</a></li>
            <li>
              <router-link to="/mypage/schedule/mycalendar">나의 일정</router-link>
            </li>
          </ul>
        </li>
        <li><a href="#">팀관리</a>
          <ul class="depth_second">
            <li><a href="#">팀관리</a></li>
            <li><a href="#">투표</a></li>
            <li><a href="#">회비관리</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>

header {
  position:relative;
  background: linear-gradient(90deg, #145ee2 0%, #00a595 100%);
  padding: 30px 0 20px;
}

header .branding {
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  padding: 20px 0;
}
header .branding a {
  color: #fff;
}
header .branding a:focus {
  outline:none;
}
header .branding a:hover {
  text-decoration:none;
}
header .global {
  position:absolute;
  left:50%;
  width:1000px;
  margin-left:-500px;
  top:20px;
  text-align:right;
  opacity:.5;
}
header .global a {
  display:inline-block;
  margin-left:20px;
  color:#fff;
  font-size:14px;
}
header .global a i {
  display:inline-block;
  margin-right:5px;
}
header .gnb {
  text-align: center;
  padding-top: 20px;
}

header .gnb ul.depth_first > li {
  position: relative;
  display: inline-block;
}

header .gnb ul.depth_first > li > a {
  display: block;
  padding: 10px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
}

header .gnb ul.depth_first > li > a:hover {
  opacity:.5;
  text-decoration: none;
}

header .gnb ul.depth_first > li > a:after {
  position: relative;
  top: -5px;
  content: '';
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 100px;
  background: #fff;
  opacity: .5;
  margin-left: 20px;
}

header .gnb ul.depth_first > li:last-child a:after {
  display: none;
}

header .gnb ul.depth_first > li:hover > ul.depth_second {
  display: block;
}

header .gnb ul.depth_second {
  display: none;
  position: absolute;
  width: 140px;
  background: #fff;
  padding: 10px;
  border: 1px solid #3F628F;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  z-index:10;
}

header .gnb ul.depth_second > li > a {
  display: block;
  text-align: left;
  color: #3f4f5f;
  padding: 10px;
}

header .gnb ul.depth_second > li > a:hover {
  background: #F2B441;
  color: #fff;
  text-decoration: none;
}

</style>
