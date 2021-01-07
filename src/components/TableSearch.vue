<template>
  <div class="listSearch">
    <select class="form-control">
      <option>제목</option>
      <option>작성자</option>
      <option>제목 + 작성자</option>
    </select>
    <input type="text" class="form-control">
    <button class="btn btn-search btn-small"><i class="fa fa-search"></i></button>
  </div>
</template>

<script>
export default {
  name: 'TableTop',
};
</script>

<style scoped>

</style>
