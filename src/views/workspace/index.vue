<template>
  <div class="container">
    <div class="header">
      <span>您的工作区</span>
      <span class="common-text-btn create-btn" @click="handleClickCreate">创建</span>
    </div>
    <div class="content">
      <Workspace v-for="item in dataList" :key="item.id" :workspaceData="item" />
    </div>
    <WorkspaceCreate :visible.sync="createVisible" />
  </div>
</template>

<script>
import Workspace from "./components/workspace.vue";
import WorkspaceCreate from "./components/workspace-create.vue";
export default {
  components: { Workspace, WorkspaceCreate },
  data() {
    return {
      dataList: [],
      createVisible: false,
    };
  },
  mounted() {
    this.handleQuery();
  },
  methods: {
    handleQuery() {
      this.dataList = [
        {
          title: "医枢科技前端小组",
          id: 1,
          list: [
            {
              title: "前端任务",
              id: "10001",
              star: false,
            },
            {
              title: "医保控费系统",
              id: "10002",
              star: false,
            },
            {
              title: "单病种质量管理系统",
              id: "10003",
              star: false,
            },
          ],
        },
        {
          title: "medaxis",
          id: 2,
          list: [
            {
              title: "前端任务",
              id: "10001",
              star: false,
            },
            {
              title: "医保控费系统",
              id: "10002",
              star: false,
            },
            {
              title: "单病种质量管理系统",
              id: "10003",
              star: false,
            },
          ],
        },
      ];
    },
    handleClickCreate() {
      this.createVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 1200px;
  position: relative;
  margin: 0 auto;
  padding-top: 20px;
  box-sizing: border-box;
}
.header {
  width: 100%;
  color: #5e6c84;
  font-size: 16px;
  font-weight: 700;
  line-height: 40px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.content {
  width: 100%;
}
.create-btn {
  float: right;
}
</style>
