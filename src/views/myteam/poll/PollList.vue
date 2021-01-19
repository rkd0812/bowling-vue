<template>
  <div>
    <sub-title title="팀투표"></sub-title>
    <section>
      <ul class="panelWrap">
        <li v-for="(poll, idx) in pollList" :key="idx">
          <div class="panel">
            <div class="panel-header">
              <h4>투표종료일 : <span>{{ poll.endDate }}</span></h4>
            </div>
            <div class="panel-body">
              <h4>{{ poll.pollTitle }}
                <router-link to="/myteam/poll/polldetail">투표하기</router-link>
              </h4>
              <ul class="pollWrap">
                <li>
                  <strong>{{ poll.pollItem[0] }}</strong>
                  <div class="progress"><span></span></div>
                  <span>{{ poll.player[0] }}</span>
                </li>
                <li>
                  <strong>{{ poll.pollItem[1] }}</strong>
                  <div class="progress"><span></span></div>
                  <span>{{ poll.player[1] }}</span>
                </li>
                <li>
                  <strong>{{ poll.pollItem[2] }}</strong>
                  <div class="progress"><span></span></div>
                  <span>{{ poll.player[2] }}</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
      <paginate></paginate>
    </section>
  </div>

</template>

<script>
import SubTitle from '@/components/SubTitle.vue';
import Paginate from '@/components/Paginate.vue';

export default {
  name: 'PollList',
  components: {
    Paginate,
    SubTitle,
  },
  data() {
    return {
      pollList: [
        {
          endDate: '2020-12-30',
          pollTitle: '11회 볼링대회 일정',
          pollItem: [
            '2020-12-02(화)',
            '2020-12-15(수)',
            '2020-12-30(화)',
          ],
          player: [
            '11명',
            '05명',
            '02명',
          ],
        },
        {
          endDate: '2020-11-30',
          pollTitle: '11회 게임 회식장소',
          pollItem: [
            '연타발(돼지갈비)',
            '태백집(뒷고기)',
            'BHC(치킨&맥주)',
          ],
          player: [
            '22명',
            '01명',
            '04명',
          ],
        },
        {
          endDate: '2020-10-31',
          pollTitle: '09회 볼링대회 일정',
          pollItem: [
            '2020-10-02(화)',
            '2020-10-22(목)',
            '2020-10-27(수)',
          ],
          player: [
            '19명',
            '07명',
            '11명',
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
ul.panelWrap {
  display:flex;
  flex-wrap:wrap;
}
ul.panelWrap>li {
  flex:0 0 50%;
  padding:0 10px;
}
ul.panelWrap>li .panel {
  position:relative;
}
ul.panelWrap>li .panel.end:after {
  content:'투표종료';
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom: 0;
  background:rgba(0,0,0,.5);
  text-align:center;
  line-height:250px;
  font-size:30px;
  color:#fff;
}
ul.panelWrap li .panel-header {
  background:#888;
}
ul.panelWrap li .panel-header h4 {
  margin-bottom:0;
  font-weight:normal;
  text-align:center;
  color:#fff;
}
ul.panelWrap li .panel-body h4 {
  position:relative;
  margin:20px 0;
}
ul.panelWrap li .panel-body h4 a {
  position:absolute;
  right:0;
  top:-5px;
  display:inline-block;
  border:1px solid #458955;
  color:#458955;
  border-radius:100px;
  padding:3px 10px;
  font-size:14px;
  font-weight:normal;
}
ul.panelWrap li .panel-body h4 a:hover {
  background:#458955;
  color:#fff;
  text-decoration:none;
}
ul.pollWrap li {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

ul.pollWrap li strong {
  display: inline-block;
  flex:0 0 30%;
}
ul.pollWrap li div.progress {
  display: inline-block;
  flex:1;
  background:#f5f5f5;
  height:1em;
}
ul.pollWrap li div.progress span {
  display:inline-block;
  width:100px;
  background:#F2B441;
}
ul.pollWrap li span {
  display: inline-block;
  flex:0 0 10%;
  text-align:right;
}
</style>
