<template>
  <el-dialog
    title="提示"
    :visible="dialogVisible"
    width="30%"
  >
    <span>这是一段信息</span>
    <span
      slot="footer"
      class="dialog-footer"
    >
      <el-button
        @click="cancle"
      >取 消</el-button>
      <el-button
        type="primary"
        @click="save"
      >确 定</el-button>
    </span>
  </el-dialog>
</template> 
    
<script>
export default {
  data() {
    return {};
  },
  computed: {
    dialogVisible() {
      return this.$store.state.app.isShowDialog;
    }
  },
  methods: {
    cancle(done) {
      this.$store.commit("app/TOGGLE_DIALOG");
    },
    save() {
      this.$store.commit("app/TOGGLE_DIALOG");
    }
  }
};
</script>