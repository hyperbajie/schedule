<template>
  <div class="task-block">
    <div>{{ item.title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.task-block {
  width: 100%;
  height: 80px;
  background-color: gray;
  border-radius: 5px;
}
.task-block:hover {
  background-color: beige;
}
</style>
