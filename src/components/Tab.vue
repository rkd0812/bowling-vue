<template>
    <li><a href="#">{{ tabItemName }}</a></li>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    tabItemName: String,
  },
};
</script>

<style scoped>
.tabs li {
  flex: 0 0 20%;
}

.tabs li a {
  display: block;
  padding: 10px;
  border-radius: 5px 5px 0 0;
  background: #f5f5f5;
  text-align: center;
}
.tabs li.on a,.tabs li a:hover {
  background: #458955;
  color:#fff;
  text-decoration:none;
}
</style>
