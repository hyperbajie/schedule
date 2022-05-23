<template>
  <div class="box">
    <div class="title-row">
      <span class="title">{{ data.title }}</span>
    </div>
    <span class="star-icon" :class="{ 'el-icon-star-off': !data.star, 'el-icon-star-on': data.star }"></span>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleMouseOver() {},
  },
};
</script>

<style scoped>
.box {
  width: 200px;
  height: 100px;
  border-radius: 5px;
  background-color: var(--color-green);
  margin-right: 10px;
  cursor: pointer;
  position: relative;
}
.box:hover {
  background-color: rgba(56, 143, 80, 0.8);
}
.title-row {
  min-height: 24px;
  line-height: 24px;
  position: relative;
  left: 10px;
  top: 6px;
}
.title {
  word-wrap: break-word;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
}
.star-icon {
  position: absolute;
  bottom: 5px;
  right: 5px;
}
</style>
