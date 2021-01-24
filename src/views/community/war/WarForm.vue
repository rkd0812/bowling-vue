<template>
  <div>
    <sub-title title="대전신청"></sub-title>
    <section>
      <div class="inputWrap">
        <table class="table-horizontal">
          <colgroup>
            <col width="20%">
            <col width="*">
          </colgroup>
          <tbody>
          <tr>
            <th>제목</th>
            <td><input id="title"
                           v-model="title"
                           type="text"
                           class="form-control">
            </td>
          </tr>
          <tr>
            <th>내용</th>
            <td>
              <textarea rows="10" class="form-control">
              </textarea>
            </td>
          </tr>
          <tr>
            <th>대전상대 지정</th>
            <td class="radioWrap">
              <label><input id="selectOpponent"
                            value="Y"
                            type="radio"
                            v-model="selectOpponentYn"> 지정</label>
              <label><input id="unselectOpponent"
                            value="N"
                            type="radio"
                            v-model="selectOpponentYn"> 지정하지 않음</label>
            </td>
          </tr>
          <tr>
            <th>대전상대</th>
            <td class="player">
              <span>홍길동</span><span>장발장</span><span>소문</span>
              <button class="btn btn-default btn-small modalCall"
                      name="searchPlayer"
                      @click="modalOpen">
                대전상대 찾기
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <button-wrap>
        <button class="btn btn-default"
                @click="goPage()">
          <i class="fa fa-times"></i>  취소
        </button>
        <button class="btn btn-primary"
                @click="goPage()">
          <i class="fa fa-check"></i>  등록
        </button>
      </button-wrap>
    </section>
    <modal title="대전상대 찾기"
           id="searchPlayer"
           class="modal-middle"
           :is-open.sync="modalIsOpen">
      <div slot="modal-contents">
        <table-search></table-search>
        <table-vertical></table-vertical>
      </div>
    </modal>
  </div>
</template>

<script>
import SubTitle from '@/components/SubTitle.vue';
import ButtonWrap from '@/components/ButtonWrap.vue';
import TableSearch from '@/components/TableSearch.vue';
import TableVertical from '@/components/TableVertical.vue';
import Modal from '@/components/ModalStar.vue';

export default {
  name: 'WarForm',
  components: {
    SubTitle,
    ButtonWrap,
    TableSearch,
    TableVertical,
    Modal,
  },
  data() {
    return {
      modalIsOpen: false,
      title: '',
      selectOpponentYn: 'Y',
    };
  },
  methods: {
    goPage() {
      this.$router.push('/community/war/list');
    },
    modalOpen() {
      this.modalIsOpen = !this.modalIsOpen;
    },
  },
};
</script>

<style scoped>

</style>
