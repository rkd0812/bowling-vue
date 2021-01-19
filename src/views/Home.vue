<template>
  <div>
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
    <div class="indexWrap">
      <ul class="panelWrap">
        <li>
          <div class="panel">
            <div class="panel-header">
              <strong>명예의전당</strong>
              <router-link to="/halloffame/fame/HallOfFame">more +</router-link>
            </div>
            <div class="panel-body">
              <ul class="rank">
                <li v-for="(rank, idx) in ranking" :key="idx">
                  <i class="fa fa-trophy text-danger"></i>
                  <strong>{{ rank.rankNumber }}</strong>
                  <div class="score">{{ rank.score }}</div>
                  <span>{{ rank.playerName }}</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="panel team">
            <div class="panel-header">
              <strong>나의 팀</strong>
              <router-link to="/halloffame/fame/HallOfFame">more +</router-link>
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
        </li>
        <li>
          <div class="panel">
            <div class="panel-header">
              <strong>공지사항</strong>
              <router-link to="/community/notice/list">more +</router-link>
            </div>
            <div class="panel-body">
              <ul class="board">
                <li v-for="(noticeItem, idx) in notice" :key="idx">
                  <a href="#">{{ noticeItem.noticeTitle }}</a>
                  <span>{{ noticeItem.noticeDate }}</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="panel">
            <div class="panel-header">
              <strong>자유게시판</strong>
              <router-link to="/community/freeboard/list">more +</router-link>
            </div>
            <div class="panel-body">
              <ul class="board">
                <li v-for="(freeItem, idx) in freeboard" :key="idx">
                  <a href="#">{{ freeItem.freeboardTitle }}</a>
                  <span>{{ freeItem.freeboardDate }}</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      ranking: [
        {
          rankNumber: '1위',
          score: 719,
          playerName: '김일등',
        },
        {
          rankNumber: '2위',
          score: 698,
          playerName: '이이등',
        },
        {
          rankNumber: '3위',
          score: 680,
          playerName: '최삼등',
        },
      ],
      notice: [
        {
          noticeTitle: '갈마볼링장 레인 정비시간 안내',
          noticeDate: '12-24',
        },
        {
          noticeTitle: '12월 프리덤 전 상품 안내',
          noticeDate: '12-24',
        },
        {
          noticeTitle: '11월 프리덤 전 상품 안내',
          noticeDate: '12-24',
        },
        {
          noticeTitle: '“락볼링장서 영감” 에피치오, UX디자인 IoT 포켓볼 기기 개발 - 매일경제',
          noticeDate: '12-24',
        },
        {
          noticeTitle: '실업 볼링팀, 대통령기 전국볼링대회 개인전 金',
          noticeDate: '12-24',
        },
      ],
      freeboard: [
        {
          freeboardTitle: 'list 1',
          freeboardDate: '12-30',
        },
        {
          freeboardTitle: 'list 2',
          freeboardDate: '12-30',
        },
        {
          freeboardTitle: 'list 3',
          freeboardDate: '12-30',
        },
        {
          freeboardTitle: 'list 4',
          freeboardDate: '12-30',
        },
        {
          freeboardTitle: 'list 5',
          freeboardDate: '12-30',
        },
      ],
    };
  },
};
</script>

<style scoped>

.carousel {
  position: absolute;
  left: 0;
  top: 189px;
  right: 0;
  height: 300px;
}

.carousel .nav {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  margin-top: -30px;
}

.carousel .nav .left {
  position: absolute;
  left: 20px;
  top: 0;
  font-size: 40px;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, .5);
}

.carousel .nav .right {
  position: absolute;
  right: 20px;
  top: 0;
  font-size: 40px;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, .5);
}

.carousel .indicator {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  text-align: center;
}

.carousel .indicator span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, .5);
  border-radius: 100px;
  margin: 0 5px;
}

.carousel .indicator span.active {
  background: rgba(255, 255, 255, 1);
}

.carousel .item {
  display: none;
  height: 300px;
  overflow: hidden;
}

.carousel .item.active {
  display: block;
}

.carousel .item:nth-child(1) {
  background: url('../assets/images/bowling_01.jpg') no-repeat center /cover;
}

.carousel .item .governing {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .6);
  padding: 60px;
}

.carousel .item .governing strong {
  display: block;
  font-size: 70px;
  font-weight: 100;
  text-align: center;
  color: #fff;
  line-height: 1.5em;
  text-shadow: 0 0 5px rgba(0, 0, 0, .8);
}

.carousel .item .governing span {
  display: block;
  color: #fff;
  font-weight: 300;
  font-size: 30px;
  text-align: center;
}

.indexWrap {
  width: 1000px;
  margin: 350px auto 50px;
}
.panelWrap {
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
}

.panelWrap li {
  flex: 0 0 50%;
  padding: 0 10px;
}

.panel .panel-header a {
  position: absolute;
  right: 10px;
  top: 10px;
  display: inline-block;
  font-weight: normal;
  font-size: 14px;
}

.panel .panel-body ul.rank {
  display: flex;
  padding-top: 10px;
}

.panel .panel-body ul.rank li {
  flex: 0 0 33.3333%;
  text-align: center;
  padding: 10px;
  color: #888;
}

.panel .panel-body ul.rank li i {
  display: block;
  margin-bottom: 10px;
  font-size: 40px;
  text-align: center;
}

.panel .panel-body ul.rank li strong {
  display: block;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}

.panel .panel-body ul.rank li .score {
  background: #555;
  color: #fff;
  border-radius: 100px;
  font-size: 20px;
  padding: 5px;
  margin-bottom: 10px;
}

.panel .panel-body ul.rank li span {
  display: block;
  font-size: 22px;
  font-weight: bold;
  color: #555;
}

.panel .panel-body ul.team {
  display: flex;
  padding: 10px 0;
}

.panel.team .panel-body h2 {
  font-size: 16px;
  background: #eee;
  padding: 5px 10px 7px;
  font-weight: 400;
  border-radius: 5px;
  text-align: center;
  margin-top: 10px;
}

.panel .panel-body ul.team li {
  flex: 0 0 33.333%;
  text-align: center;
  padding: 20px 0;
}

.panel .panel-body ul.team li i {
  display: block;
  font-size: 50px;
  margin-bottom: 10px;
}

.panel .panel-body ul.team li span {
  font-size: 16px;
}

.panel .panel-body ul.board li {
  display: flex;
  padding: 8px 0;
  border-bottom: 1px dashed #ccc;
}

.panel .panel-body ul.board li:last-child {
  border-bottom: none;
}

.panel .panel-body ul.board li a {
  flex: 0 0 60%;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}

.panel .panel-body ul.board li span {
  flex: 0 0 40%;
  text-align: right;
  font-size: 14px;
}
</style>
