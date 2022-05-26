<template>
  <div class="waterfall">
    <div class="title-row">
      <span class="title-text">{{ title }}</span>
    </div>
    <div class="content">
      <TaskItem
        class="task-item"
        v-for="task in list"
        :item="task"
        :key="task.id"
      />
    </div>
  </div>
</template>

<script>
import TaskItem from "./task-item.vue";
export default {
  components: {
    TaskItem,
  },
  props: {
    title: String,
    list: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.title-row {
  height: 20px;
  line-height: 20px;
  margin-bottom: 10px;
}
.title-text {
  font-size: 14px;
}
.waterfall {
  width: 200px;
  display: inline-block;
  background-color: antiquewhite;
  margin-right: 10px;
  padding: 10px;
}
.task-item {
  margin-bottom: 10px;
}
</style>
