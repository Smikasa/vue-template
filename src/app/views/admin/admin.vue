<template>
  <div class="app-layout admnin">
    <div class="app-layout-sidebar">
      <s-menu></s-menu>
    </div>
    <div class="app-layout-header">
      <div class="app-layout-header-info">
        <img
          src="@/assets/logo.png"
          class="app-layout-header-info-logo"
        >
        <div class="app-layout-header-info-title">
          模板系统
        </div>
      </div>

      <div class="app-layout-header-username"></div>

      <div class="app-layout-header-logout">
        <i
          class="el-icon-s-fold"
          @click="clickSidebarOpend"
        ></i>
        退出
      </div>
    </div>
    <div
      class="app-layout-content"
      :style="{marginLeft:leftContent}"
    >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sMenu from "./common/menu.vue";
export default {
  components: {
    sMenu
  },
  data() {
    return {};
  },
  computed: {
    sidebarOpened() {
      return this.$store.state.app.sidebarOpened;
    },
    leftContent() {
      return this.sidebarOpened ? "64px" : "180px";
    }
  },
  methods: {
    clickSidebarOpend() {
      this.$store.commit("app/TOGGLE_SIDEBAR");
    }
  }
};
</script>

<style>
</style>