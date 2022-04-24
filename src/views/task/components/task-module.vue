<template>
  <div>
    <task-card v-for="item in taskList" :key="item.id" :taskData="item" @click="handleClick(item)"></task-card>
  </div>
</template>

<script>
import TaskCard from "./task-card.vue";
export default {
  components: {
    TaskCard,
  },
  props: {
    taskList: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  methods: {
    handleClick(item) {
      this.$emit("clickTask", item);
    },
  },
};
</script>
