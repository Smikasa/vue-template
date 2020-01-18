<template>
  <div>
    <mg-filter></mg-filter>
    <mg-table></mg-table>
    <mg-dialog></mg-dialog>
  </div>
</template>
<script>
import { getList } from "@/app/api/index";
import mgTable from "./_table";
import mgFilter from "./_filter";
import mgDialog from "./_dialog.vue";
export default {
  components: {
    mgTable,
    mgFilter,
    mgDialog
  },
  data() {
    return {
      list: null,
      listLoading: true
    };
  },
  created() {
    // this.fetchData();
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