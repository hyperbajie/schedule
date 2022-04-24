<template>
  <div class="task-card">
    <div>{{ taskData.title }}</div>
    <div><span class="el-icon-time"></span>{{ taskData.startTimeStamp + "-" + taskData.endTimeStamp }}</div>
  </div>
</template>

<script>
export default {
  props: {
    taskData: {
      type: Object,
      default: function () {
        return null;
      },
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.task-card {
  border: 1px black solid;
  border-radius: 10px;
  padding: 10px;
  min-height: 100px;
}
</style>
