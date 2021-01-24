<template>
  <div>
    <sub-title title="볼링영상"></sub-title>
    <section>
      <div class="inputWrap">
        <form
          id="app"
          @submit="checkForm"
          action="https://vuejs.org/"
          method="post"
        >
        <table class="table-horizontal">
          <colgroup>
            <col width="20%">
            <col width="*">
          </colgroup>
          <tbody>
          <tr>
            <th>제목</th>
            <td><input id="title"
                       v-model="title"
                       type="text"
                       class="form-control">
            </td>
          </tr>
          <tr>
            <th>표시여부</th>
            <td class="radioWrap">
              <label><input id="visibleGallery"
                            value="Y"
                            type="radio"
                            v-model="showGalleryYn"> 표시</label>
              <label><input id="hiddenGallery"
                            value="N"
                            type="radio"
                            v-model="showGalleryYn"> 표시안함</label>
            </td>
          </tr>
          <tr>
            <th>영상</th>
            <td>
              <ul class="fileFUpload">
                <li>
                  <strong>파일 찾기</strong>
                  <input type="file" class="form-control">
                  <div class="tableBtnWrap">
                    <a href="#"><i class="fa fa-plus-circle"></i></a>
                    <a href="#"><i class="fa fa-minus-circle"></i></a>
                  </div>
                </li>
                <li>
                  <strong>URL</strong>
                  <input type="file" class="form-control">
                  <div class="tableBtnWrap">
                    <a href="#"><i class="fa fa-plus-circle"></i></a>
                    <a href="#"><i class="fa fa-minus-circle"></i></a>
                  </div>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>내용</th>
            <td>
                            <textarea rows="10" class="form-control">

                            </textarea>
            </td>
          </tr>
          </tbody>
        </table>
        </form>
      </div>
      <button-wrap>
        <button class="btn btn-default"
                @click="goPage()">
          <i class="fa fa-times"></i>  취소
        </button>
        <button class="btn btn-primary"
                @click="goPage()">
          <i class="fa fa-check"></i>  등록
        </button>
      </button-wrap>
    </section>
  </div>
</template>

<script>
import SubTitle from '@/components/SubTitle.vue';
import ButtonWrap from '@/components/ButtonWrap.vue';

export default {
  name: 'GalleryForm',
  components: {
    SubTitle,
    ButtonWrap,
  },
  methods: {
    // eslint-disable-next-line consistent-return
    checkForm(e) {
      if (this.title) {
        return true;
      }

      this.errors = [];

      if (!this.title) {
        this.errors.push('Name required.');
      }

      e.preventDefault();
    },
    goPage() {
      this.$router.push('/bowling/gallery/list');
    },
  },
  data() {
    return {
      title: '',
      showGalleryYn: 'Y',
    };
  },
};
</script>

<style scoped>

</style>
