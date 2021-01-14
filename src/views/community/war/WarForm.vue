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
            <td><input type="text" class="form-control"></td>
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
              <label><input type="radio" name="group1" checked> 지정</label>
              <label><input type="radio" name="group1"> 지정하지 않음</label>
            </td>
          </tr>
          <tr>
            <th>대전상대</th>
            <td class="player">
              <span>홍길동</span><span>장발장</span><span>소문</span>
              <button class="btn btn-default btn-small modalCall"
                      name="searchPlayer">대전상대 찾기
              </button>
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
  name: 'WarForm',
  components: {
    SubTitle,
  },
};
</script>

<style scoped>

</style>
