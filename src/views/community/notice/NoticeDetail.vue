<template>
  <div>
    <sub-title title="공지사항"></sub-title>
    <section>
      <div class="contents_header">
        <div class="titleWrap">
          <span>2020-11-25</span>
          <h3>실업 볼링팀, 대통령기 전국볼링대회 개인전 金</h3>
        </div>
        <div class="authorWrap">
          <span class="author">관리자</span>
          <span class="date">2020-11-25</span>
          <span class="hit">15</span>
        </div>
      </div>
      <div class="contents_body">
        <div class="noImage">
          <i class="fa fa-file-image"></i>
        </div>
        <div class="parag">
          구미시(시장 장세용)는 11월 16일(월)부터 11월 19일(목)까지 구미복합스포츠센터 볼링경기장에서 ‘2020 구미컵 프로볼링대회’를 개최한다.<br><br>
          (사)한국프로볼링협회에서 주관하는 이번 대회는 국내 프로볼링선수 남녀 상위 랭커 72명이 참여, 4일간 열띤 경기를 펼친다.<br><br>
          경기방식은 예선경기 종합 득점 상위 남32위, 여16위까지 TV파이널 진출하며, 이후 토너먼트경기 방식으로 최종 우승자를 결정한다. <br>
          경기는 스포츠전문채널인 IB Sports를 통해 12월 7일부터 3개월간 매주 월요일 오후 11시에 방영(녹화중계)된다.<br><br>
          구미복합스포츠센터는 지하1층, 지상 3층, 연면적 8,737㎡로 지상1층은 40레인을 갖춘 볼링경기장, 2층은 핸드볼, 배구, 배드민턴 등 실내경기 전 종목을
          치룰수 있는 다목적 체육관으로 국내 최고시설을 자랑한다.
        </div>
      </div>
      <button-wrap btn-name="목록"></button-wrap>
    </section>
  </div>
</template>

<script>
import SubTitle from '@/components/SubTitle.vue';
import ButtonWrap from '@/components/ButtonWrap.vue';

export default {
  name: 'NoticeDetail',
  components: {
    ButtonWrap,
    SubTitle,
  },
};
</script>

<style scoped>

.container .contents_header {
  display: flex;
  margin-bottom: 10px;
}

.container .contents_header .titleWrap {
  flex: 1;
}

.container .contents_header .titleWrap span {
  display: inline-block;
  color: #888;
  margin-bottom: 10px;
}

.container .contents_header .titleWrap h3 {
  font-size: 20px;
  font-weight: bold;
}

.container .contents_header .authorWrap {
  flex: 1;
  text-align: right;
}

.container .contents_header .authorWrap span {
  display: inline-block;
  color: #aaa;
  margin-left: 10px;
  font-size: .9em;
}

.container .contents_header .authorWrap span:before {
  content: '';
  display: inline-block;
  width: 1px;
  height: 10px;
  background: #ccc;
  margin-right: 13px;
}

.container .contents_header .authorWrap span:first-child:before {
  display: none;
}

.container .contents_body {
  padding: 20px 0;
}

.container .contents_body .video {
  height: 400px;
  border: 1px solid #ccc;
  background: #f4f4f4;
  margin-bottom: 20px;
}

</style>
