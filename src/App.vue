<script setup>
import Layout from '@/Layout/index.vue'
import sideBar from '@/components/SideBar/index.vue'
import {useSettingStore} from '@/stores/useSetting.js'

const settingStore = useSettingStore()


</script>

<template>
  <div class="app-container">
    <div class="mainIcon" @click="settingStore.toggleSideStatus">
      <el-icon v-show="!settingStore.sideOpen"><i-ep-Operation /></el-icon>
      <el-icon v-show="settingStore.sideOpen"><i-ep-Close /></el-icon>
    </div>

    <Layout>
      <template #left>
        <sideBar :sideOpen="settingStore.sideOpen"></sideBar>
      </template>
      <template #default>
        <transition name="fade-transform" mode="out-in">
          <router-view></router-view>
        </transition>
      </template>
    </Layout>
  </div>
</template>

<style scoped lang="scss">
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.app-container{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  // background: linear-gradient(to right,#003973 0,#e5e5be 100%);
  .mainIcon{
    position: fixed;
    left: 25px;
    top: 15px;
    width: 36px;
    height: 36px;
    font-size: 24px;
    z-index: 999;
    box-sizing: border-box;
    transition-property: background-color;
    transition-duration:  1s;
    cursor: pointer;
    .el-icon{
      width: 100%;
      height: 100%;
    }
    border-radius: 50%;

    &:hover{
      border: 1px solid paleturquoise;
      background-color: paleturquoise;
    }
  }
}
</style>
