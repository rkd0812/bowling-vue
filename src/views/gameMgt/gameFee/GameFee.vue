<template>
  <div>
    <sub-title title="게임회비"></sub-title>
    <section>
      <ul class="feeList">
        <li v-for="(fee, idx) in feeList" :key="idx">
          <h3>{{ fee.gameTitle }}
            <strong>{{ fee.gameDate }}</strong>
            <span>단위 : 원</span>
          </h3>
          <table class="table-vertical">
            <thead>
            <tr>
              <th>이월</th>
              <th>회비</th>
              <th>총지출</th>
              <th>잔액</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{{ fee.carried }}</td>
              <td>{{ fee.fee }}</td>
              <td>{{ fee.total }}</td>
              <td>{{ fee.balanced }}</td>
            </tr>
            </tbody>
          </table>
        </li>
      </ul>
      <paginate></paginate>
    </section>
  </div>

</template>

<script>
import SubTitle from '@/components/SubTitle.vue';
import Paginate from '@/components/Paginate.vue';

export default {
  name: 'GameFee',
  components: {
    Paginate,
    SubTitle,
  },
  data() {
    return {
      feeList: [
        {
          gameTitle: '10차 프리덤 팀전',
          gameDate: '2020-12-20',
          carried: '720,000',
          fee: '400,000',
          total: '600,000',
          balanced: '520,000',
        },
        {
          gameTitle: '09차 프리덤 팀전',
          gameDate: '2020-11-15',
          carried: '530,000',
          fee: '400,000',
          total: '250,000',
          balanced: '720,000',
        },
        {
          gameTitle: '08차 프리덤 팀전',
          gameDate: '2020-07-22',
          carried: '550,000',
          fee: '330,000',
          total: '350,000',
          balanced: '530,000',
        },
      ],
    };
  },
};
</script>

<style scoped>
ul.feeList li {
  margin-bottom: 30px;
}

h3 {
  position: relative;
  margin-bottom: 10px;
}

h3 strong {
  display: inline-block;
  margin-left: 10px;
  font-size: 16px;
  font-weight: 400;
  color: #aaa;
}

h3 span {
  position: absolute;
  right: 0;
  color:#888;
  font-size:14px;
  font-weight:normal;
}
</style>
