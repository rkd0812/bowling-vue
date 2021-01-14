<template>
  <div>
    <sub-title title="볼링장 정보"></sub-title>
    <section>
      <table-search></table-search>
      <ul class="thumb">
        <li>
          <span class="number">42</span>
          <div class="thumbnail"><i class="fa fa-file-image"></i></div>
          <ul class="titleWrap">
            <li><strong>스타락볼링</strong></li>
            <li><label class="control-label">전화번호</label><span>042-000-000</span></li>
            <li>
              <label class="control-label">주소</label>
              <span>대전시 서구 갈마로00 00번길
                                <button class="btn btn-default btn-xs">
                                    <i class="fa fa-map-marked"></i>
                                </button>
                            </span>
            </li>
            <li><label class="control-label">레일 수</label><span>20</span></li>
          </ul>
          <div class="state star">
            <div class="starWrap">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="starButton">
              <button class="btn btn-white btn-xs modalCall" name="inputStar">별점주기</button>
            </div>
          </div>
        </li>
        <li>
          <span class="number">41</span>
          <div class="thumbnail"><i class="fa fa-file-image"></i></div>
          <ul class="titleWrap">
            <li><strong>퍼펙트 볼링센타</strong></li>
            <li><label class="control-label">전화번호</label><span>042-000-000</span></li>
            <li>
              <label class="control-label">주소</label>
              <span>대전시 서구 갈마로00 00번길
                                <button class="btn btn-default btn-xs">
                                    <i class="fa fa-map-marked"></i>
                                </button>
                            </span>
            </li>
            <li><label class="control-label">레일 수</label><span>20</span></li>
          </ul>
          <div class="state star">
            <div class="starWrap">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="starButton">
              <button class="btn btn-white btn-xs modalCall" name="inputStar">별점주기</button>
            </div>
          </div>
        </li>
        <li>
          <span class="number">40</span>
          <div class="thumbnail"><i class="fa fa-file-image"></i></div>
          <ul class="titleWrap">
            <li><strong>둔산볼링센터</strong></li>
            <li><label class="control-label">전화번호</label><span>042-000-000</span></li>
            <li>
              <label class="control-label">주소</label>
              <span>대전시 서구 갈마로00 00번길
                                <button class="btn btn-default btn-xs">
                                    <i class="fa fa-map-marked"></i>
                                </button>
                            </span>
            </li>
            <li><label class="control-label">레일 수</label><span>20</span></li>
          </ul>
          <div class="state star">
            <div class="starWrap">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="starButton">
              <button class="btn btn-white btn-xs modalCall" name="inputStar">별점주기</button>
            </div>
          </div>
        </li>
        <li>
          <span class="number">39</span>
          <div class="thumbnail"><i class="fa fa-file-image"></i></div>
          <ul class="titleWrap">
            <li><strong>에스케이월드볼링</strong></li>
            <li><label class="control-label">전화번호</label><span>042-000-000</span></li>
            <li>
              <label class="control-label">주소</label>
              <span>대전시 서구 갈마로00 00번길
                                <button class="btn btn-default btn-xs">
                                    <i class="fa fa-map-marked"></i>
                                </button>
                            </span>
            </li>
            <li><label class="control-label">레일 수</label><span>20</span></li>
          </ul>
          <div class="state star">
            <div class="starWrap">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="starButton">
              <button class="btn btn-white btn-xs modalCall" name="inputStar">별점주기</button>
            </div>
          </div>
        </li>
        <li>
          <span class="number">38</span>
          <div class="thumbnail"><i class="fa fa-file-image"></i></div>
          <ul class="titleWrap">
            <li><strong>갈마볼링센터</strong></li>
            <li><label class="control-label">전화번호</label><span>042-000-000</span></li>
            <li>
              <label class="control-label">주소</label>
              <span>대전시 서구 갈마로00 00번길
                                <button class="btn btn-default btn-xs">
                                    <i class="fa fa-map-marked"></i>
                                </button>
                            </span>
            </li>
            <li><label class="control-label">레일 수</label><span>20</span></li>
          </ul>
          <div class="state star">
            <div class="starWrap">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="starButton">
              <button class="btn btn-white btn-xs modalCall" name="inputStar">별점주기</button>
            </div>
          </div>
        </li>
      </ul>
      <paginate></paginate>
      <button-wrap btn-name="영상등록"></button-wrap>
    </section>
  </div>
</template>

<script>
import SubTitle from '@/components/SubTitle.vue';
import TableSearch from '@/components/TableSearch.vue';
import Paginate from '@/components/Paginate.vue';
import ButtonWrap from '@/components/ButtonWrap.vue';

export default {
  name: 'AlleyList',
  components: {
    Paginate,
    SubTitle,
    TableSearch,
    ButtonWrap,
  },
};
</script>

<style scoped>

/* gallery list */
.container ul.gallery {display:flex;flex-wrap:wrap;justify-content:space-between;}
.container ul.gallery li {flex:0 0 23%;margin-bottom:20px;}
.container ul.gallery li:last-child {margin-right:0;}
.container ul.gallery li a {display:block;color:#3f4f5f;}
.container ul.gallery li a img {display:inline-block;width:100%;height:200px;margin-bottom:20px;}
.container ul.gallery li a h3 {font-size:18px;font-weight:bold;padding:10px 0;}
.container ul.gallery li a span {color:#888;}

/* gallery regist */
.container .fileFUpload li {margin-bottom:5px;}
.container .fileFUpload li strong {
  display:inline-block;width:80px;text-align:right;margin-right:10px;font-size:.9em;color:#888;
}
.container .fileFUpload li input {display:inline-block;width:calc(100% - 150px);}
.container .fileFUpload li .tableBtnWrap {display:inline-block;width:50px;}
.container .fileFUpload li .tableBtnWrap a {color:#555;}
.container .fileFUpload li .tableBtnWrap a:hover {color:#4721EB;}

ol, ul {
  list-style: none;
}
.container .thumb {
  border-top:2px solid #ccc;
}
.container .thumb>li {
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  align-items:center;
  border-bottom:1px dashed #ccc;
  padding:10px 0;
}
.container .thumb>li:last-child {
  border-bottom-style:solid;
}
.container .thumb>li .number {
  flex-basis:60px;
}
.container .thumb>li .thumbnail {
  flex-basis:100px;
  background:#f9f9f9;
  border:1px solid #ddd;
  height:100px;
  text-align:center;
  ine-height:100px;
  margin-right:10px;
  color:#ccc;
}
.container .thumb>li .titleWrap {flex:1;margin-left:20px;}
.container .thumb>li>.titleWrap li {margin-left:20px;margin-bottom:5px;list-style:circle;}
.container .thumb>li>.titleWrap li:first-child {
  list-style:none;
  margin-left:0;
  margin-bottom:10px;
}
.container .thumb>li>.titleWrap li a {}
.container .thumb>li>.titleWrap li strong {font-size:1.2em;font-weight:700;}
.container .thumb>li>.titleWrap li .control-label {display:inline-block;margin-right:5px;}
.container .thumb>li>.titleWrap li .control-label:after {
  content:':';
  padding-left:5px;
  margin-right:5px;
}
.container .thumb>li>.titleWrap li span {font-size:1em;color:#888;}
.container .thumb>li>.titleWrap li span button {margin-left:10px;}
.container .thumb>li>.state {flex-basis:200px;text-align:right;}
.container .thumb>li>.state.star .starWrap {color:#F2B441;}
.container .thumb>li>.state .starButton {margin-top:5px;}
</style>
