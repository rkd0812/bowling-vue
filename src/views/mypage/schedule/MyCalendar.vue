<template>
  <div>
    <sub-title title="나의일정"></sub-title>
    <section>
      <div class="calendarWrap">
        <h4>01월</h4>
        <div class="yearSelect">
          <select class="form-control">
            <option>2020년</option>
            <option>2019년</option>
            <option>2018년</option>
          </select>
        </div>
        <ul class="day">
          <li class="sunday">일</li>
          <li>월</li>
          <li>화</li>
          <li>수</li>
          <li>목</li>
          <li>금</li>
          <li class="saturday">토</li>
        </ul>
        <ul class="date">
          <li><span class="number"></span></li>
          <li><span class="number"></span></li>
          <li><span class="number"></span></li>
          <li><span class="number"></span></li>
          <li><span class="number"></span></li>
          <li><span class="number">1</span></li>
          <li><span class="number">2</span></li>
          <li><span class="number">3</span></li>
          <li><span class="number">4</span></li>
          <li><span class="number">5</span></li>
          <li><span class="number">6</span></li>
          <li><span class="number">7</span></li>
          <li><span class="number">8</span></li>
          <li><span class="number">9</span></li>
          <li><span class="number">10</span></li>
          <li><span class="number">11</span></li>
          <li><span class="number">12</span></li>
          <li>
            <span class="number">13</span>
            <div class="plane plane-primary">프리덤 팀전</div>
          </li>
          <li><span class="number">14</span></li>
          <li><span class="number">15</span></li>
          <li><span class="number">16</span></li>
          <li><span class="number">17</span></li>
          <li><span class="number">18</span></li>
          <li><span class="number">19</span></li>
          <li><span class="number">20</span></li>
          <li><span class="number">21</span></li>
          <li><span class="number">22</span></li>
          <li><span class="number">23</span></li>
          <li><span class="number">24</span></li>
          <li><span class="number">25</span></li>
          <li><span class="number">26</span></li>
          <li><span class="number">27</span></li>
          <li><span class="number">28</span></li>
          <li><span class="number">29</span></li>
          <li><span class="number">30</span></li>
          <li><span class="number">31</span></li>
          <li><span class="number"></span></li>
          <li><span class="number"></span></li>
          <li><span class="number"></span></li>
          <li><span class="number"></span></li>
          <li><span class="number"></span></li>
          <li><span class="number"></span></li>
        </ul>
      </div>
    </section>
  </div>

</template>

<script>
import SubTitle from '@/components/SubTitle.vue';

export default {
  name: 'MyAccount',
  components: {
    SubTitle,
  },
};
</script>

<style scoped>

</style>
