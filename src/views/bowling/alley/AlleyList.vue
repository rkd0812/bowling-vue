<template>
  <div>
    <sub-title title="볼링장 정보"></sub-title>
    <section>
      <table-search></table-search>
      <ul class="thumb">
        <li v-for="item in items" :key="item.id">
          <span class="number">{{ item.number }}</span>
          <div class="thumbnail">
            <i class="fa fa-file-image"></i>
          </div>
          <ul class="titleWrap">
            <li>
              <strong>{{ item.alleyName }}</strong>
            </li>
            <li>
              <label class="control-label">전화번호</label>
              <span>{{ item.phoneNumber }}</span>
            </li>
            <li>
              <label class="control-label">주소</label>
              <span>{{ item.alleyAddress }}
                                <button class="btn btn-default btn-xs">
                                    <i class="fa fa-map-marked"></i>
                                </button>
              </span>
            </li>
            <li>
              <label class="control-label">레일 수</label>
              <span>{{ item.railCnt }}</span>
            </li>
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
              <button class="btn btn-white btn-xs modalCall"
                      name="inputStar"
                      @click="modalOpen(item)">
                별점주기
              </button>
            </div>
          </div>
        </li>
      </ul>
      <paginate></paginate>
      <button-wrap>
        <button class="btn btn-primary"
                @click="goPage()">
          <i class="fa fa-check"></i> 등록
        </button>
      </button-wrap>
    </section>
    <modal title="별점주기"
           id="inputStar"
           class="modal-small"
           :is-open.sync="modalIsOpen">
      <div slot="modal-contents">
        <h4>{{ modalAlleyName }}</h4>
        <div class="inputStar">
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import SubTitle from '@/components/SubTitle.vue';
import TableSearch from '@/components/TableSearch.vue';
import Paginate from '@/components/Paginate.vue';
import ButtonWrap from '@/components/ButtonWrap.vue';
import Modal from '@/components/ModalStar.vue';

export default {
  name: 'AlleyList',
  components: {
    Paginate,
    SubTitle,
    TableSearch,
    ButtonWrap,
    Modal,
  },
  data() {
    return {
      modalIsOpen: false,
      modalAlleyName: '',
      items: [
        {
          id: 4,
          number: 4,
          alleyName: '스타락볼링',
          phoneNumber: '042-000-000',
          alleyAddress: '대전시 서구 갈마로00 00번길',
          railCnt: 10,
        },
        {
          id: 3,
          number: 3,
          alleyName: '퍼펙트 볼링센타',
          phoneNumber: '042-000-000',
          alleyAddress: '대전시 서구 갈마로00 00번길',
          railCnt: 10,
        },
        {
          id: 2,
          number: 2,
          alleyName: '둔산볼링센터',
          phoneNumber: '042-000-000',
          alleyAddress: '대전시 서구 갈마로00 00번길',
          railCnt: 10,
        },
        {
          id: 1,
          number: 1,
          alleyName: '에스케이월드볼링',
          phoneNumber: '042-000-000',
          alleyAddress: '대전시 서구 갈마로00 00번길',
          railCnt: 10,
        },
      ],
    };
  },
  methods: {
    modalOpen(item) {
      this.modalIsOpen = !this.modalIsOpen;
      this.modalAlleyName = item.alleyName;
    },
    goPage() {
      this.$router.push('/bowling/alley/form');
    },
  },
};
</script>

<style scoped>
/* thumbnail list */
.thumb {
  border-top:2px solid #ccc;
}
.thumb>li {
  display:flex;
  flex-wrap:wrap;
  justify-content:flex-start;
  align-items:center;
  border-bottom:1px dashed #ccc;
  padding:10px 0;
  list-style: circle;
}
.thumb>li:last-child {
  border-bottom-style:solid;
}
.thumb li .number {
  flex-basis:60px;
}
.thumb li .thumbnail {
  flex-basis:100px;
  background:#f9f9f9;
  border:1px solid #ddd;
  height:100px;
  text-align:center;
  ine-height:100px;
  margin-right:10px;
  color:#ccc;
}
.titleWrap {
  flex:1;
  margin-left:20px;
}
.titleWrap ul {
  list-style:circle;
}
.titleWrap li {
  margin-left:20px;
  margin-bottom:5px;
}

.container .thumb>li>.titleWrap li:first-child {
  list-style:none;
  margin-left:0;
  margin-bottom:10px;
}

.container .thumb>li>.titleWrap li {
  border-bottom:none;
  list-style:circle;
  display: list-item;
  padding: 0;
  justify-content:flex-start;
}
.container .thumb>li>.titleWrap li strong {
  font-size:1.2em;
  font-weight:700;
}
.container .thumb>li>.titleWrap li .control-label {
  display:inline-block;
  margin-right:5px;
}
.container .thumb>li>.titleWrap li .control-label:after {
  content:':';
  padding-left:5px;
  margin-right:5px;
}
.container .thumb>li>.titleWrap li span {
  font-size:1em;
  color:#888;
}
.container .thumb>li>.titleWrap li span button {
  margin-left:10px;
}
/* 별점주기 */
.container .thumb>li>.state {
  flex-basis:200px;
  text-align:right;
}
.container .thumb>li>.state.star .starWrap {
  color:#F2B441;
}
.container .thumb>li>.state .starButton {
  margin-top:5px;
}
.modal .inputStar {text-align:center;font-size:40px;padding:50px 0;}
.btn-white {
  background: #fff;
  color: #555;
  border: 1px solid #ccc;
}
</style>
