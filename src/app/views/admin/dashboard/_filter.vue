<template>
  <div class="box-flex box-flex-between app-filter">
    <div class="box-flex">
      <el-button type="primary" @click="clickOpenDialog">DIALOG</el-button>
    </div>
    <div class="box-flex">
      <el-input
        v-model="input"
        placeholder="请输入内容"
      ></el-input>
      <el-button type="primary">检索</el-button>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      input: ""
    };
  },
  methods:{
    clickOpenDialog(){
      this.$store.commit("app/TOGGLE_DIALOG");
    }
  }
};
</script>

<style>
</style>