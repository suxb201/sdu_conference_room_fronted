<template>
  <div>
    <side-bar/>
    <div style="margin-left:253px">
      <nav-bar/>
      <div style="padding:31px">
        <transition name="fade-transform" mode="out-in">
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";
import NavBar from "./NavBar.vue";

export default {
  components: {
    SideBar,
    NavBar
  }
};
</script>
<style scoped>
/*fade-transform*/
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.23s;
}
.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>


