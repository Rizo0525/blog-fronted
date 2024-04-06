<template>
  <div
    class="sidebar-container"
    :style="{
      transform: `translateX(${sideOpen ? 0 : -sidebarWidth}px)`,
      width: `${sideOpen ? sidebarWidth : 0}px`,
    }"
  >
    <div class="header-img item">
      <avatar
        width="120"
        height="120"
        imgUrl="https://img0.baidu.com/it/u=1733799567,530175286&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1711990800&t=986f07b49305879a5b60b6b20d1333f7"
      >
      </avatar>
    </div>
    <div class="menu item">
        <Menu></Menu>
    </div>
    <div class="contact item">
        <Contact></Contact>
    </div>
  </div>
</template>

<script setup>
import avatar from "@/components/Avatar/index.vue";
import menu from '@/components/Menu/index.vue'
import contact from '@/components/Contact/index.vue';
import {ref} from 'vue'
const sidebarWidth = ref(240)
defineProps({
  sideOpen: Boolean,
});
</script>

<style lang="scss" scoped>
.sidebar-container {
  // width: 300px;
  position: sticky;
  height: 100%;
  transition: all 0.5s;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #ccc;
  box-shadow: 5px 0 5px rgba(0,0,0,0.2),inset -5 0 5 rgba(0,0,0,0.2);
  .item{
    padding: 20px;
  }
  .header-img{
    margin-top: 60px;
  }
  .menu {
    // background-color: #fff;
  }
  .contact{
    // background-color: aquamarine;
    // background-color: aquamarine;
    
  }
  // align-content: center;
  // align-items:center
  // justify-items: center
  // justify-content: flex-end;
  // align-items: center;
  // padding: 20px;
}
</style>
