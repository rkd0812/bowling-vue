<template>
  <div class="btnWrap">
    <button class="btn btn-primary">
      <router-link to="/community/notice/detail">{{ btnName }}</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonWrap',
  props: {
    btnName: String,
  },
};
</script>

<style scoped>
.btnWrap {text-align:right;margin-top:30px;}
</style>
