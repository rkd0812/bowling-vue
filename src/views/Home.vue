<template>
  <div class="indexWrap">
    <div class="carousel">
      <div class="item active">
        <div class="governing">
          <strong>It ain’t over till it’s over.</strong>
          <span>Lawrence Peter Berra</span>
        </div>
      </div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="nav">
        <a href="#" class="left"><i class="fa fa-chevron-left"></i></a>
        <a href="#" class="right"><i class="fa fa-chevron-right"></i></a>
      </div>
      <div class="indicator">
        <span class="active "></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="panelWrap">
      <div class="col-6">
        <div class="panel">
          <div class="panel-header">
            <strong>명예의전당</strong>
            <a href="#">more +</a>
          </div>
          <div class="panel-body">
            <ul class="rank">
              <li>
                <i class="fa fa-trophy text-danger"></i>
                <strong>1위</strong>
                <div class="score">719</div>
                <span>김일등</span>
              </li>
              <li>
                <i class="fa fa-medal text-warning"></i>
                <strong>2위</strong>
                <div class="score">699</div>
                <span>이이등</span>
              </li>
              <li>
                <i class="fa fa-award text-success"></i>
                <strong>3위</strong>
                <div class="score">680</div>
                <span>최삼등</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="panel team">
          <div class="panel-header">
            <strong>나의 팀</strong>
            <a href="#">more +</a>
          </div>
          <div class="panel-body">
            <h2>볼링블링</h2>
            <ul class="team">
              <li>
                <i class="fa fa-users"></i>
                <span>12명</span>
              </li>
              <li>
                <i class="fa fa-poll"></i>
                <span>회식장소 건</span>
              </li>
              <li>
                <i class="fa fa-money-bill"></i>
                <span>1,200,000원</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="panel">
          <div class="panel-header">
            <strong>공지사항</strong>
            <a href="#">more +</a>
          </div>
          <div class="panel-body">
            <ul class="board">
              <li>
                <a href="#">갈마볼링장 레인 정비시간 안내</a>
                <span>12-24</span>
              </li>
              <li>
                <a href="#">12월 프리덤 전 상품 안내</a>
                <span>12-24</span>
              </li>
              <li>
                <a href="#">12월 프리덤 전 일정 안내</a>
                <span>12-24</span>
              </li>
              <li>
                <a href="#"> “락볼링장서 영감” 에피치오, UX디자인 IoT 포켓볼 기기 개발 - 매일경제</a>
                <span>12-24</span>
              </li>
              <li>
                <a href="#">실업 볼링팀, 대통령기 전국볼링대회 개인전 金</a>
                <span>12-24</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="panel">
          <div class="panel-header">
            <strong>자유게시판</strong>
            <a href="#">more +</a>
          </div>
          <div class="panel-body">
            <ul class="board">
              <li><a href="#">list 1</a></li>
              <li><a href="#">list 2</a></li>
              <li><a href="#">list 3</a></li>
              <li><a href="#">list 4</a></li>
              <li><a href="#">list 5</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.indexWrap {
}
.carousel {
  position:absolute;
  left:0;
  top:189px;
  right:0;
  height:300px;
}
.carousel .nav {
  position:absolute;
  left:0;
  right:0;
  top:50%;
  margin-top:-30px;
}
.carousel .nav .left {
  position:absolute;
  left:20px;
  top:0;
  font-size:40px;
  color:#fff;
  text-shadow:0 0 10px rgba(0,0,0,.5);
}
.carousel .nav .right {
  position:absolute;
  right:20px;
  top:0;
  font-size:40px;
  color:#fff;
  text-shadow:0 0 10px rgba(0,0,0,.5);
}
.carousel .indicator {
  position:absolute;
  left:0;
  right:0;
  bottom:20px;
  text-align:center;
}
.carousel .indicator span {
  display:inline-block;
  width:10px;
  height:10px;
  background:rgba(255,255,255,.5);
  border-radius:100px;
  margin:0 5px;
}
.carousel .indicator span.active {
  background:rgba(255,255,255,1);
}
.carousel .item {
  display:none;
  height:300px;
  overflow:hidden;
}
.carousel .item.active {
  display:block;
}
.carousel .item:nth-child(1) {
  background:url('../assets/images/bowling_01.jpg') no-repeat center /cover;
}
.carousel .item .governing {
  position:absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
  background:rgba(0,0,0,.6);
  padding:60px;
}
.carousel .item .governing strong {
  display:block;
  font-size:70px;
  font-weight:100;
  text-align:center;
  color:#fff;
  line-height:1.5em;
  text-shadow:0 0 5px rgba(0,0,0,.8);
}
.carousel .item .governing span {
  display:block;
  color:#fff;
  font-weight:300;
  font-size:30px;
  text-align:center;
}
.panelWrap {
  width: 1000px;
  margin: 350px auto 50px;
  display: flex;
  flex-wrap: wrap;
}

.panel {
  border-radius:5px;
  border:2px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  margin-right:10px;
  margin-bottom:30px;
}

.panel .panel-header {
  position: relative;
  padding: 10px;
  font-size: 18px;
  font-weight: 700;
  border-bottom:1px solid #ccc;
}

.panel .panel-header a {
  position: absolute;
  right: 10px;
  top: 10px;
  display: inline-block;
  font-weight: normal;
  font-size: 14px;
}
.panel .panel-body {
  padding:10px 20px;
  height:200px;
}
.panel .panel-body ul.rank {
  display:flex;
  padding-top:10px;
}
.panel .panel-body ul.rank li {
  flex:0 0 33.3333%;
  text-align:center;
  padding:10px;
  color:#888;
}
.panel .panel-body ul.rank li i {
  display:block;
  margin-bottom:10px;
  font-size:40px;
  text-align:center;
}
.panel .panel-body ul.rank li strong {
  display:block;
  font-size:20px;
  font-weight:700;
  margin-bottom:10px;
}
.panel .panel-body ul.rank li .score {
  background:#555;
  color:#fff;
  border-radius:100px;
  font-size:20px;
  padding:5px;
  margin-bottom:10px;
}
.panel .panel-body ul.rank li span {
  display:block;
  font-size:22px;
  font-weight:bold;
  color:#555;
}
.panel .panel-body ul.team {
  display:flex;
  padding:10px 0;
}
.panel.team .panel-body h2 {
  font-size:16px;
  background:#eee;
  padding:5px 10px 7px;
  font-weight:400;
  border-radius:5px;
  text-align:center;
  margin-top:10px;
}
.panel .panel-body ul.team li {
  flex:0 0 33.333%;
  text-align:center;
  padding:20px 0;
}
.panel .panel-body ul.team li i {
  display:block;
  font-size:50px;
  margin-bottom:10px;
}
.panel .panel-body ul.team li span {
  font-size:16px;
}
.panel .panel-body ul.board li {
  display:flex;
  padding:8px 0;
  border-bottom:1px dashed #ccc;
}
.panel .panel-body ul.board li:last-child {
  border-bottom:none;
}
.panel .panel-body ul.board li a {
  flex:0 0 60%;
  width:250px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  font-size:14px;
}
.panel .panel-body ul.board li span {
  flex:0 0 40%;
  text-align:right;
  font-size:14px;
}
</style>
