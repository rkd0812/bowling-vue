<template>
  <div>
    <sub-title title="명예의전당"></sub-title>
    <section>
      <tabs>
        <li class="on"><a href="#">전체</a></li>
        <li><a href="#">퍼펙트</a></li>
        <li><a href="#">800</a></li>
        <li><a href="#">700</a></li>
      </tabs>
      <ul class="listWrap">
        <li>
          <div class="rankingNumber col-1">
            <i class="fa fa-trophy text-danger"></i>
            <span>1위</span>
          </div>
          <div class="profile col-1"><span>김</span></div>
          <div class="rankTitle">
            <label>김일등</label>
            <ul class="info">
              <li>볼링블링팀</li>
              <li>갈마볼링장</li>
              <li>2020-12-24</li>
            </ul>
          </div>
          <div class="scoreWrap col-2">
            <label>714</label>
            <ul class="score">
              <li>289</li>
              <li>234</li>
              <li>191</li>
            </ul>
          </div>
        </li>
      </ul>
      <paginate></paginate>
    </section>
  </div>

</template>

<script>
import SubTitle from '@/components/SubTitle.vue';
import Tabs from '@/components/Tabs.vue';
import Paginate from '@/components/Paginate.vue';

export default {
  name: 'HallOfFame',
  components: {
    Paginate,
    SubTitle,
    Tabs,
  },
};
</script>

<style scoped>
.listWrap {
  margin: 30px 0;
}

.listWrap > li {
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px dashed #ccc;
}

.listWrap > li:last-child {
  border-bottom: none;
}

.listWrap > li .rankingNumber {
  text-align:center;
}
.listWrap > li .rankingNumber i {
  font-size:34px;
}
.listWrap > li .rankingNumber span {
  display:block;
  font-size:22px;
  font-weight:700;
  margin-top:10px;
}

.listWrap > li .profile span {
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background: #888;
  line-height: 60px;
  color: #fff;
  text-align: center;
}

.listWrap > li .rankTitle {
  flex: 1;
}

.listWrap > li .rankTitle label {
  font-weight: 700;
  font-size: 22px;
}

.listWrap > li .rankTitle ul.info {
  margin: 10px 0;
}

.listWrap > li .rankTitle ul.info li {
  display: inline-block;
  color: #888;
}
.listWrap > li .rankTitle ul.info li:after {
  content:'|';
  padding:0 10px;
  color:#ccc;
}
.listWrap > li .rankTitle ul.info li:last-child:after {
  display:none;
}

.listWrap > li .scoreWrap label {
  display: block;
  background: #555;
  padding: 10px;
  text-align: center;
  border-radius: 100px;
  color:#fff;
  font-size:20px;
  font-weight:700;
}
.listWrap > li .scoreWrap .score {text-align:center;margin-top:10px;}
.listWrap > li .scoreWrap .score li {display:inline-block;font-weight:700;margin-right:10px;}
</style>
