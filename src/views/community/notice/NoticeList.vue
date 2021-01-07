<template>
  <div>
    <sub-title title="공지사항"></sub-title>
    <section>
      <table-search></table-search>
      <table class="table-vertical">
        <colgroup>
          <col width="60px">
          <col width="*">
          <col width="15%">
          <col width="15%">
          <col width="10%">
        </colgroup>
        <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>등록날짜</th>
          <th>작성자</th>
          <th>조회수</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>45</td>
          <td class="text-left">
              <router-link to="/community/notice/detail">갈마볼링장 레인 정비시간 안내</router-link>
          </td>
          <td>2020-11-25</td>
          <td>관리자</td>
          <td>15</td>
        </tr>
        <tr>
          <td>44</td>
          <td class="text-left"><a href="board-detail.html">12월 프리덤 전 상품 안내</a></td>
          <td>2020-11-25</td>
          <td>1팀장</td>
          <td>24</td>
        </tr>
        <tr>
          <td>43</td>
          <td class="text-left"><a href="board-detail.html">12월 프리덤 전 일정 안내</a></td>
          <td>2020-11-25</td>
          <td>관리자</td>
          <td>66</td>
        </tr>
        <tr>
          <td>42</td>
          <td class="text-left">
            <a href="board-detail.html">
              “락볼링장서 영감” 에피치오, UX디자인 IoT 포켓볼 기기 개발 - 매일경제
            </a>
          </td>
          <td>2020-11-25</td>
          <td>55팀장</td>
          <td>22</td>
        </tr>
        <tr>
          <td>41</td>
          <td class="text-left"><a href="board-detail.html">실업 볼링팀, 대통령기 전국볼링대회 개인전 金</a></td>
          <td>2020-11-25</td>
          <td>관리자</td>
          <td>17</td>
        </tr>
        <tr>
          <td>40</td>
          <td class="text-left"><a href="board-detail.html">야간 이벤트 안내</a></td>
          <td>2020-11-25</td>
          <td>++팀장</td>
          <td>15</td>
        </tr>
        <tr>
          <td>39</td>
          <td class="text-left"><a href="board-detail.html">11월 프리덤 전 상품 안내</a></td>
          <td>2020-11-25</td>
          <td>관리자</td>
          <td>33</td>
        </tr>
        <tr>
          <td>38</td>
          <td class="text-left"><a href="board-detail.html">11월 프리덤 전 일정 안내</a></td>
          <td>2020-11-25</td>
          <td>관리자</td>
          <td>48</td>
        </tr>
        <tr>
          <td>37</td>
          <td class="text-left">
            <a href="board-detail.html">
              “락볼링장서 영감” 에피치오, UX디자인 IoT 포켓볼 기기 개발 - 매일경제
            </a>
          </td>
          <td>2020-11-25</td>
          <td>관리자</td>
          <td>34</td>
        </tr>
        <tr>
          <td>36</td>
          <td class="text-left"><a href="board-detail.html">실업 볼링팀, 대통령기 전국볼링대회 개인전 金</a></td>
          <td>2020-11-25</td>
          <td>**팀장</td>
          <td>26</td>
        </tr>
        </tbody>
      </table>
      <paginate></paginate>
      <button-wrap btn-name="글등록"></button-wrap>
    </section>
  </div>

</template>

<script>
import SubTitle from '@/components/SubTitle.vue';
import TableSearch from '@/components/TableSearch.vue';
import Paginate from '@/components/paginate.vue';
import ButtonWrap from '@/components/ButtonWrap.vue';

export default {
  name: 'NoticeList',
  components: {
    Paginate,
    SubTitle,
    TableSearch,
    ButtonWrap,
  },
};
</script>

<style scoped>

</style>
