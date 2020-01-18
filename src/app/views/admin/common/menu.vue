<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="white"
  
    :router="true"
    :collapse="sidebarOpened"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="/">
      <i class="el-icon-location"></i>
      <span>Admin</span>
    </el-menu-item>
    <el-menu-item index="/example">
      <i class="el-icon-location"></i>
      <span>Admin</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  computed: {
    sidebarOpened() {
      return this.$store.state.app.sidebarOpened;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100%;
  width: 180px;
}
.el-menu-vertical-demo {
  height: 100%;
}
</style>

