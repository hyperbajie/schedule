<template>
  <div class="app-container container-large">
    <el-tabs v-model="curTab" @tab-click="handleClickTab">
      <el-tab-pane label="全部" name="all"></el-tab-pane>
      <el-tab-pane label="未完成" name="future"></el-tab-pane>
      <el-tab-pane label="已完成" name="done"></el-tab-pane>
    </el-tabs>
    <task-module :taskList="taskList" @clickTask="handleClickTask"></task-module>
  </div>
</template>

<script>
import TaskModule from "./components/task-module.vue";
import TaskDetail from "./components/task-detail.vue";
export default {
  components: {
    TaskModule,
  },
  data() {
    return {
      curTab: "all",
      taskList: [
        {
          id: 1,
          title: "主页面",
          startTimeStamp: 110,
          endTimeStamp: 120,
        },
      ],
    };
  },
  methods: {
    handleClickTask(item) {
        
    },
  },
};
</script>

<style lang="scss" scoped>
.common-input:focus {
  border: 2px black solid;
}
</style>
