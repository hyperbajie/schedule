<template>
  <div class="container">
    <span class="project-name">VueSchedule</span>

    <span class="common-text-btn" :class="{ 'common-text-btn-selected': workspaceVisible }" @click="handleClickWorkspace">工作区</span>

    <el-popover placement="bottom-start" width="400" trigger="click" @show="collectionVisible = true" @hide="collectionVisible = false">
      <span>nothing</span>
      <span class="common-text-btn" :class="{ 'common-text-btn-selected': collectionVisible }" slot="reference">加星</span>
    </el-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workspaceVisible: false,
      collectionVisible: false,
    };
  },
  methods: {
    handleClickWorkspace() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.project-name {
  margin-right: 10px;
}
.container {
  background: #026aa7;
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
  box-sizing: border-box;
  color: white;
}
</style>
