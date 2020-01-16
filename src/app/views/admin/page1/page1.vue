<template>
  <div>
    <div>版本：v1.0.0</div>
    <div>技术链：vue vue-router axios element</div>
    <div>路由：此时是根路由，指向了admin模块的page1</div>
    <div></div>
  </div>
</template>
<script>
import { getList } from "@/app/api/index";
export default {
  data() {
    return {
      list: null,
      listLoading: true
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getList().then(response => {
        this.list = response.data.items;
        this.listLoading = false;
      });
    }
  }
};
</script>

<style>
</style>