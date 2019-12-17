<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="房间号">
      <el-input v-model="form.roomId"></el-input>
    </el-form-item>
    <el-form-item label="房间名称">
      <el-input v-model="form.roomName"></el-input>
    </el-form-item>
    <el-form-item label="楼层">
      <el-radio-group v-model="form.floor">
        <el-radio label="1">1 楼</el-radio>
        <el-radio label="2">2 楼</el-radio>
        <el-radio label="3">3 楼</el-radio>
        <el-radio label="4">4 楼</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="房间类型">
      <el-radio-group v-model="form.type">
        <el-radio label="1">普通教室</el-radio>
        <el-radio label="2">会议室</el-radio>
        <el-radio label="3">阶梯教室</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="房间介绍">
      <el-input type="textarea" v-model="form.introduce"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="addRoom">立即创建</el-button>
      <!--<el-button>取消</el-button>-->
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data: function() {
    return {
      form: {
        roomId: "",
        roomName: "",
        floor: "",
        introduce: "",
        type: ""
      }
    };
  },
  methods: {
    addRoom() {
      this.$store.dispatch("addRoom", this.form).catch(e => {
        this.$message.error(err);
        console.log(e);
      });
    }
  }
};
</script>
