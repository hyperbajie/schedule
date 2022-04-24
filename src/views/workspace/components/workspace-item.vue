<template>
  <div class="item-container">
    <div>{{ item.title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: function () {
        return null;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.item-container {
    width: 300px;
    height: 80px;
    border: 1px gray solid;
    border-radius: 10px;
    padding: 10px;
}
</style>