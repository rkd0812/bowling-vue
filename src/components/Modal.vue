<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3>대전신청 회원검색</h3>
        <span class="modal-close"></span>
      </div>
      <div class="modal-body">
        <div class="modal-contents">
          <table-search></table-search>
          <table-vertical></table-vertical>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-default"><i class="fa fa-times"></i> 취소</button>
        <button class="btn btn-primary"><i class="fa fa-check"></i> 확인</button>
      </div>
    </div>
  </div>
</template>

<script>
import TableSearch from '@/components/TableSearch.vue';
import TableVertical from '@/components/TableVertical.vue';

export default {
  name: 'Modal',
  components: {
    TableSearch,
    TableVertical,
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  /*display: none;*/
  background: rgba(0, 0, 0, 0.5);
}

.modal .modal-dialog {
  position: absolute;
  left: 50%;
  top: 50%;
  transform:translate(-50%, -50%);
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.modal.modal-small .modal-dialog {
  width: 600px;
  /*margin-left: -300px;*/
}

.modal.modal-middle .modal-dialog {
  width: 1000px;
  /*margin-left: -500px;*/
}

.modal.modal-large .modal-dialog {
  width: 1400px;
  /*margin-left: -700px;*/
}

.modal.modal-xlarge .modal-dialog {
  width: 1800px;
  /*margin-left: -900px;*/
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #ccc;
}

.modal-header h3 {
  font-size: 26px;
  font-weight: bold;
  padding: 20px;
  margin-bottom:0;
}

.modal-header span.modal-close {
  position: absolute;
  right: 20px;
  top: 16px;
  display: inline-block;
  width: 26px;
  height: 26px;
  transition: .3s;
  cursor: pointer;
}

.modal-header span.modal-close:hover {
  transform: rotate(180deg);
  transform-origin: center;
}

.modal-header span.modal-close:before {
  position: absolute;
  content: '';
  left: -4px;
  top: 12px;
  width: 34px;
  height: 2px;
  background: #888;
  transform: rotate(45deg);
}

.modal-header span.modal-close:after {
  position: absolute;
  content: '';
  left: -4px;
  top: 12px;
  width: 34px;
  height: 2px;
  background: #888;
  transform: rotate(-45deg);
}

.modal-body {
  padding: 40px 20px;
}

.modal-body h4 {
  font-size: 22px;
  font-weight: 700;
  text-align: center;
}

.modal-footer {
  padding: 20px;
  border-top: 1px solid #ccc;
  text-align: right;
}

</style>
