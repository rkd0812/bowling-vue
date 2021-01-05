<template>
  <div>
    <h2>자유게시판</h2>
    <div class="listSearch">
      <select class="form-control">
        <option>제목</option>
        <option>작성자</option>
        <option>제목 + 작성자</option>
      </select>
      <input type="text" class="form-control">
      <button class="btn btn-search btn-small"><i class="fa fa-search"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubTitle',
};
</script>

<style scoped>

</style>
