<template>
  <div class="btnWrap">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ButtonWrap',
};
</script>

<style scoped>
.btnWrap {
  text-align:right;
  margin-top:30px;
}
</style>
