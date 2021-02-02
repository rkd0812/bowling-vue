<template>
  <div class="listSearch">
    <select class="form-control">
      <option>제목</option>
      <option>작성자</option>
      <option>제목 + 작성자</option>
    </select>
    <input type="text" class="form-control">
    <button class="btn btn-search"><i class="fa fa-search"></i></button>
  </div>
</template>

<script>
export default {
  name: 'TableSearch',
};
</script>

<style scoped>
/* table top */
.listSearch {
  padding-bottom: 10px;
  text-align: right;
}

.listSearch select {
  display: inline-block;
  width: 100px;
}

.listSearch input {
  display: inline-block;
  width: 200px;
}

.listSearch .btn-search {
  line-height: 40px;
  height: 40px;
  font-size: .85em;
  width: 40px;
  padding: 0;
  vertical-align:top;
}

</style>
