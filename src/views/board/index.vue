<template>
  <div class="container">
    <div class="container-title">
      <span class="container-title-text">{{ boardTitle }}</span>
    </div>
    <div class="task-pool">
      <TaskList title="未开始" :list="futureTasks" />
      <TaskList title="进行中" :list="ingTasks" />
      <TaskList title="已延期" :list="postponeTasks" />
      <TaskList title="已完成" :list="doneTasks" />
    </div>
  </div>
</template>

<script>
import TaskList from "./components/task-list.vue";
export default {
  components: {
    TaskList,
  },
  data() {
    return {
      boardId: "0",
      boardTitle: "",
      allTasks: [],
      futureTasks: [],
      ingTasks: [],
      postponeTasks: [],
      doneTasks: [],
    };
  },
  created() {
    this.boardId = this.$route.params ? this.$route.params.boardId : 0;
    this.getBoardInfo();
    this.getBoardTaskData();
  },
  methods: {
    getBoardInfo() {
      setTimeout(() => {
        this.boardTitle = "板子名";
      }, 1000);
    },
    getBoardTaskData() {
      setTimeout(() => {
        this.futureTasks = [
          {
            id: 1,
            title: "task one",
            person: [
              {
                pId: 1,
                name: "zs",
              },
            ],
          },
          {
            id: 2,
            title: "task two",
            person: [
              {
                pId: 1,
                name: "zs",
              },
            ],
          },
        ];
      }, 1000);
    },
  },
};
</script>

<style scoped>
.container {
  width: 1200px;
  position: relative;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}
.container-title {
  height: 24px;
  line-height: 24px;
  margin-bottom: 10px;
}
.container-title-text {
  font-size: 18px;
  font-weight: bold;
}
.task-pool {
  width: 100%;
  display: flex;
  align-items: flex-start;
}
</style>
