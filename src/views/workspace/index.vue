<template>
  <div class="app-container container">
    <div class="function-btn-row">
      <el-button @click="handleAdd" type="primary" size="mini">创建</el-button>
    </div>
    <div class="workspace-item-box">
      <workspace-item
        class="workspace-item"
        v-for="item in dataList"
        :key="item.id"
        :item="item"
        @click.native="handleClickItem(item)"
      ></workspace-item>
    </div>
    <workspace-edit :visible.sync="editVisible"></workspace-edit>
  </div>
</template>

<script>
import WorkspaceItem from "./components/workspace-item.vue";
import WorkspaceEdit from "./components/workspace-edit.vue";
export default {
  components: {
    WorkspaceItem,
    WorkspaceEdit,
  },
  data() {
    return {
      dataList: [],
      editVisible: false,
    };
  },
  mounted() {
    this.handleQuery();
  },
  methods: {
    handleQuery() {
      this.dataList = [
        {
          title: "第一个工作区",
          id: 1,
        },
        {
          title: "第二个工作区",
          id: 2,
        },
      ];
    },
    handleAdd() {
      console.log("创建");
      this.editVisible = true;
    },
    handleClickItem(item) {
      console.log("click item", item);
      this.$router.push({
        name: "Task",
        params: {
          id: item.id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
.function-btn-row {
  width: 100%;
  height: 50px;
}
.workspace-item-box {
  .workspace-item {
    cursor: pointer;
    margin: 5px;
  }
}
</style>
