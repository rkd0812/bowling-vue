<template>
  <div class="rating">
    <ul class="list">
      <li @click="rate(star)" v-for="star in maxStars"
          :class="{ 'active': star <= stars }"
          :key="star.stars" class="star">
      <i :class="star <= stars ? 'fas fa-star' : 'far fa-star'"></i>
      </li>
    </ul>
    <div v-if="hasCounter" class="info counter">
      <span class="score-rating">{{ stars }}</span>
      <span class="divider">/</span>
      <span class="score-max">{{ maxStars }}</span>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Rating',
  props: ['grade', 'maxStars', 'hasCounter'],
  data() {
    return {
      stars: this.grade,
    };
  },
  methods: {
    rate(star) {
      if (typeof star === 'number' && star <= this.maxStars && star >= 0) {
        this.stars = this.stars === star ? star - 1 : star;
      }
    },
  },
};
</script>

<style scoped>
.rating {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    color: #b7b7b7;
    background: #fff;
    border-radius: 8px;
}
.rating .list {
  padding: 0;
  margin: 0 20px 0 0;
}

.rating .active{
  color: #ffe100;
}
.star {
  display: inline-block;
  font-size: 42px;
  transition: all .2s ease-in-out;
  cursor: pointer;
}

.star:hover {
  color: #ffe100;
}

.info {
  margin-top: 15px;
  font-size: 40px;
  text-align: center;
  display: table;
}
.info .divider {
  margin: 0 5px;
  font-size: 30px;
}
.info .score-max {
  font-size: 30px;
  vertical-align: sub;
}
</style>
