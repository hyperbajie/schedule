<template>
  <el-dialog :visible.sync="localVisible" title="新增">
    <el-form :model="formData" :rules="formRules" ref="formEl">
      <el-form-item label="工作区标题" prop="title">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="工作区描述" prop="desc">
        <el-input type="textarea" v-model="formData.desc"></el-input>
      </el-form-item>
    </el-form>
    <template v-slot:footer>
      <el-button type="primary" @click="handleClickConfirm">确认</el-button>
      <el-button type="warning" @click="handleClickCancel">取消</el-button>
    </template>
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
    return {
      formData: {
        title: "",
        desc: "",
      },
      formRules: {
        title: {
          required: true,
          message: "请输入工作区标题",
        },
      },
    };
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
  methods: {
    handleClickConfirm() {
      // todo
    },
    handleClickCancel() {
      // todo
    },
  },
};
</script>
