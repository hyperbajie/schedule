<template>
  <div class="container">
    <div class="header">
      <span class="header-title">{{ workspaceData.title }}</span>
    </div>
    <div class="item-box">
      <WorkspaceBoard v-for="item in workspaceData.list" :key="item.id" :data="item" />
    </div>
  </div>
</template>

<script>
import WorkspaceBoard from "./workspace-board.vue";
export default {
  components: {
    WorkspaceBoard,
  },
  props: {
    workspaceData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
}
.header-title {
  height: 24px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #172b4d;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item-box {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
