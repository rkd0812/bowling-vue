<template>
  <div>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'SubTitle',
  props: {
    title: String,
  },
};
</script>

<style scoped>
.container h2 {
  font-size: 24px;
  font-weight: bold;
  padding: 30px 0;
  border-bottom: 1px solid #ccc;
}
</style>
