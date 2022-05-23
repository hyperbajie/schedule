<template>
  <div class="container">boardId: {{ boardId }}</div>
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

<style scoped>
.container {
  width: 1200px;
  position: relative;
  margin: 0 auto;
  padding-top: 20px;
  box-sizing: border-box;
}
</style>
