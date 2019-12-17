<template>
  <el-table :data="$store.state.app.myApply.list" style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="房间名称">
            <span>{{ props.row.roomName }}</span>
          </el-form-item>
          <el-form-item label="房间位置">
            <span>{{ props.row.floor + " 楼" }}</span>
          </el-form-item>
          <el-form-item label="活动介绍">
            <span>{{ props.row.introduce }}</span>
          </el-form-item>
          <el-form-item label="审批">
            <span>{{ props.row.text }}</span>
          </el-form-item>
        </el-form>
        <el-button
          type="danger"
          v-if="props.row.state == 2"
          :value="props.row.applyId"
          @click="cancelApply"
          >取消预约</el-button
        >
      </template>
    </el-table-column>
    <el-table-column
      label="房间号"
      :formatter="formatterRoom"
      sortable
    ></el-table-column>
    <el-table-column
      label="时间"
      :formatter="formatterDate"
      sortable
    ></el-table-column>
    <el-table-column label="活动名称" prop="title"></el-table-column>
    <el-table-column label="状态" :formatter="formatterState"></el-table-column>
  </el-table>
</template>

<script>
Date.prototype.format = function(fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};
export default {
  methods: {
    cancelApply: async function(err) {
      try {
        await this.$store.dispatch("cancelApply", {
          applyId: err.target.value
        });
      } catch (e) {
        console.log(e);
      }
    },
    formatterState: function(row, column) {
      let state = row.state;
      switch (state) {
        case 0:
          return "拒绝";
        case 1:
          return "通过";
        case 2:
          return "正在预约";
        case 3:
          return "审核超时";
      }
    },
    formatterDate: function(row, column) {
      return new Date(row.date * 1000).format("yyyy-MM-dd");
    },
    formatterRoom: function(row, column) {
      return row.roomId + ": " + row.roomName;
    }
  }
};
</script>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
