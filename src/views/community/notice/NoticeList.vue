<template>
  <div>
    <sub-title></sub-title>
    <section>
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
          <td class="text-left"><a href="board-detail.html">갈마볼링장 레인 정비시간 안내</a></td>
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
      <div class="btnWrap">
        <button class="btn btn-primary" onclick="location.href='board-regist.html'">글등록</button>
      </div>
    </section>
  </div>

</template>

<script>
import SubTitle from '@/components/SubTitle.vue';

export default {
  name: 'NoticeList',
  components: {
    SubTitle,
  },
};
</script>

<style scoped>

</style>
