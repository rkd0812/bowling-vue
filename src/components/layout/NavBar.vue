<template>
    <header>
        <h1 class="branding"><i class="fa fa-bowling-ball"></i> BOWLING CLUB </h1>
        <div class="gnb">
            <ul class="depth_first">
                <li><a href="#">볼링</a>
                    <ul class="depth_second">
                        <li><a href="#">볼링지식</a></li>
                        <li><a href="#">볼링영상</a></li>
                        <li><a href="#">볼링장정보</a></li>
                    </ul>
                </li>
                <li><a href="#">명예의전당</a></li>
                <li><a href="#">커뮤니티</a>
                    <ul class="depth_second">
                        <li><a href="notice-list.html">공지사항</a></li>
                        <li><a href="board-list.html">자유게시판</a></li>
                        <li><a href="used-list.html">중고장터</a></li>
                        <li><a href="#">대전신청</a></li>
                    </ul>
                </li>
                <li><a href="#">마이페이지</a>
                    <ul class="depth_second">
                        <li><a href="#">나의 계정</a></li>
                        <li><a href="#">나의 스코어</a></li>
                        <li><a href="#">게임관리</a></li>
                        <li><a href="my-calendar.html">일정관리</a></li>
                    </ul>
                </li>
                <li><a href="#">팀관리</a>
                    <ul class="depth_second">
                        <li><a href="#">팀관리</a></li>
                        <li><a href="#">투표</a></li>
                        <li><a href="#">회비관리</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>

</style>
