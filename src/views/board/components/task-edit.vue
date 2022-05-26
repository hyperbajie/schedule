<template>
  <el-dialog :visible.sync="localVisible"></el-dialog>
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
