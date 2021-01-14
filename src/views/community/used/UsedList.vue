<template>
  <div>
    <sub-title title="중고장터"></sub-title>
    <section>
      <table-search></table-search>
      <ul class="thumb">
        <li>
          <span class="number">40</span>
          <div class="thumbnail"><i class="fa fa-file-image"></i></div>
          <ul class="titleWrap">
            <li><a href="#">
              <strong>1개월 사용 볼링화 팝니다.</strong>
            </a></li>
            <li><span>2020-11-25</span></li>
            <li><span>김아무</span></li>
          </ul>
          <div class="state">판매중</div>
        </li>
        <li>
          <span class="number">39</span>
          <div class="thumbnail"><i class="fa fa-file-image"></i></div>
          <ul class="titleWrap">
            <li><a href="#">
              <strong>새 볼링공 팝니다.</strong>
            </a></li>
            <li><span>2020-11-25</span></li>
            <li><span>김아무</span></li>
          </ul>
          <div class="state">판매중</div>
        </li>
        <li>
          <span class="number">38</span>
          <div class="thumbnail"><i class="fa fa-file-image"></i></div>
          <ul class="titleWrap">
            <li><a href="#">
              <strong>볼링장갑 싸게 팔아요.</strong>
            </a></li>
            <li><span>2020-11-25</span></li>
            <li><span>김아무</span></li>
          </ul>
          <div class="state text-danger">판매완료</div>
        </li>
        <li>
          <span class="number">37</span>
          <div class="thumbnail"><i class="fa fa-file-image"></i></div>
          <ul class="titleWrap">
            <li><a href="#">
              <strong>초보 볼링킷 박스 미개봉 팝니다.</strong>
            </a></li>
            <li><span>2020-11-25</span></li>
            <li><span>김아무</span></li>
          </ul>
          <div class="state">판매중</div>
        </li>
        <li>
          <span class="number">36</span>
          <div class="thumbnail"><i class="fa fa-file-image"></i></div>
          <ul class="titleWrap">
            <li><a href="#">
              <strong>1개월 사용 볼링화 팝니다.</strong>
            </a></li>
            <li><span>2020-11-25</span></li>
            <li><span>김아무</span></li>
          </ul>
          <div class="state">판매중</div>
        </li>
      </ul>
      <paginate></paginate>
      <button-wrap btn-name="글등록"></button-wrap>
    </section>
  </div>
</template>

<script>
import SubTitle from '@/components/SubTitle.vue';
import TableSearch from '@/components/TableSearch.vue';
import Paginate from '@/components/Paginate.vue';
import ButtonWrap from '@/components/ButtonWrap.vue';

export default {
  name: 'UsedList',
  components: {
    Paginate,
    SubTitle,
    TableSearch,
    ButtonWrap,
  },
};
</script>

<style scoped>

</style>
