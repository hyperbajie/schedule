<template>
  <div>boardId: {{ boardId }}</div>
</template>

<script>
export default {
  data() {
    return {
      boardId: "0",
    };
  },
  created() {
    this.boardId = this.$route.params ? this.$route.params.boardId : 0;
  },
};
</script>
