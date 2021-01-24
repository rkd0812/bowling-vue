<template>
  <table class="table-vertical">
    <vertical-thead></vertical-thead>
    <vertical-tbody></vertical-tbody>
  </table>
</template>

<script>
import VerticalThead from '@/components/VerticalThead.vue';
import VerticalTbody from '@/components/VerticalTbody.vue';

export default {
  name: 'TableVertical',
  components: {
    VerticalThead,
    VerticalTbody,
  },
};
</script>

<style scoped>
</style>
