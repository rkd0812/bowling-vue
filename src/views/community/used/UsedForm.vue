<template>
  <div>
    <sub-title title="공지사항"></sub-title>
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
      <div class="btnWrap">
        <button class="btn btn-default" onclick="location.href='board-list.html'">취소</button>
        <button class="btn btn-primary" onclick="location.href='board-list.html'">등록</button>
      </div>
    </section>
  </div>
</template>

<script>
import SubTitle from '@/components/SubTitle.vue';

export default {
  name: 'UsedForm',
  components: {
    SubTitle,
  },
};
</script>

<style scoped>

</style>
