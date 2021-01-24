<template>
 <div>
   <sub-title title="자유게시판"></sub-title>
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
          <td><input type="text" class="form-control"></td>
        </tr>
        <tr>
          <th>내용</th>
          <td>
            <textarea rows="10" class="form-control"></textarea>
          </td>
        </tr>
        <tr>
          <th>첨부파일</th>
          <td>
            <ul class="fileFUpload">
              <li>
                <strong>파일 찾기</strong>
                <input type="file" class="form-control">
                <div class="tableBtnWrap">
                  <a href="#"><i class="fa fa-plus-circle"></i></a>
                  <a href="#"><i class="fa fa-minus-circle"></i></a>
                </div>
              </li>
            </ul>
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
 </div>
</template>

<script>
import SubTitle from '@/components/SubTitle.vue';
import ButtonWrap from '@/components/ButtonWrap.vue';

export default {
  name: 'FreeForm',
  components: {
    SubTitle,
    ButtonWrap,
  },
  methods: {
    goPage() {
      this.$router.push('/community/freeboard/list');
    },
  },
};
</script>

<style scoped>

</style>
