<template>
  <table class="table-horizontal">
    <Horizontal-tbody></Horizontal-tbody>
  </table>
</template>

<script>
import HorizontalTbody from '@/components/HorizontalTbody.vue';

export default {
  name: 'TableHorizontal',
  components: {
    HorizontalTbody,
  },
};
</script>

<style scoped>
/* table */
table.table-horizontal th {text-align:right;color:#555;background:#f9f9f9;}
table.table-horizontal td {text-align:left;border-left:1px solid #ddd;}

</style>
