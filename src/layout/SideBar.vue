<template>
  <el-menu
    :collapse="this.$store.state.isCollapse"
    class="sidebar"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="true"
    :default-active="this.$route.path"
  >
    <el-menu-item index="/state">
      <i class="el-icon-menu"></i> <span>会议室预约</span>
    </el-menu-item>
    <el-menu-item index="/my-apply">
      <el-badge
        :hidden="$store.state.app.myApply.untreated <= 0"
        :value="$store.state.app.myApply.untreated"
        class="item"
      >
        <i class="el-icon-document"></i> <span>预约历史</span>
      </el-badge>
    </el-menu-item>
    <el-menu-item v-if="$store.state.user.permission === 0" index="/submission">
      <el-badge
        :hidden="$store.state.app.submission.length <= 0"
        :value="$store.state.app.submission.length"
        class="item"
      >
        <i class="el-icon-setting"></i> <span>处理请求</span>
      </el-badge>
    </el-menu-item>
    <el-menu-item v-if="$store.state.user.permission === 0" index="/add-room">
      <i class="el-icon-circle-plus"></i> <span>添加教室</span>
    </el-menu-item>
  </el-menu>
</template>

<style>
.el-badge__content {
  top: 17px !important;
  right: -13px !important;
}
</style>

<style scoped>
.sidebar {
  width: 253px;
  position: fixed;
  top: 0;
  bottom: 0;
  border-right: 0;
}
</style>
