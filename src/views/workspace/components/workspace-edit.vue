<template>
  <el-dialog :visible.sync="localVisible" title="新增">
    create workspace-item
  </el-dialog>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: function () {
        return false;
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    localVisible: {
      get: function () {
        return this.visible;
      },
      set: function (v) {
        this.$emit("update:visible", v);
      },
    },
  },
};
</script>
