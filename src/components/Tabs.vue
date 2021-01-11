<template>
  <div class="tabs">
    <tab class="on" tabItemName="전체"></tab>
    <tab tabItemName="퍼펙트"></tab>
    <tab tabItemName="800"></tab>
    <tab tabItemName="700"></tab>
  </div>
</template>

<script>
import Tab from '@/components/Tab.vue';

export default {
  name: 'Tabs',
  components: {
    Tab,
  },
  props: {
    tabItemName: String,
  },
};
</script>

<style scoped>
.tabs {
  display: flex;
  border-bottom: 1px solid #ccc;
}
</style>
