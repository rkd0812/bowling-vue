<template>
  <ul class="paginate">
    <li class="backward">
      <span><i class="fa fa-angle-double-left"></i></span>
    </li>
    <li class="prev"><a href="notice-detail.html">
      <i class="fa fa-angle-left"></i></a>
    </li>
    <li class="on"><a href="notice-detail.html">1</a></li>
    <li><a href="notice-detail.html">2</a></li>
    <li><a href="notice-detail.html">3</a></li>
    <li class="next"><a href="notice-detail.html"><i class="fa fa-angle-right"></i></a></li>
    <li class="forward">
      <a href="notice-detail.html">
        <i class="fa fa-angle-double-right"></i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'paginate',
};
</script>

<style scoped>

.paginate {
  text-align: center;
  padding: 30px 0;
}

.paginate li {
  display: inline-block;
}

.paginate li a {
  display: block;
  padding: 5px 10px;
}

.paginate li span {
  display: block;
  padding: 5px 10px;
  color: #aaa;
}

</style>
