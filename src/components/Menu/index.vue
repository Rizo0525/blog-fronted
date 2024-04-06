<template>
    <div class="menu-container">
        <el-menu
        class="el-menu-vertical-demo"
        :default-active="activeComputed"
      >
        <router-link to="/">
          <el-menu-item index="1">
              <el-icon><location /></el-icon>
              <span>首页</span>
          </el-menu-item>
        </router-link>
        <router-link to="/allblogtype">
          <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>博客分类</span>
          </el-menu-item>
        </router-link>

        <router-link to="/blog">
          <el-menu-item index="3">
              <el-icon><document /></el-icon>
              <span>博客</span>
          </el-menu-item>
        </router-link>

        <!-- <router-link to="/project">
          <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <span>个人项目</span>
          </el-menu-item>
        </router-link> -->

      </el-menu>
    </div>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { computed, onMounted, ref } from 'vue';
import {useRoute} from 'vue-router'
const route = useRoute()
const activeRef = ref(0)
const activeComputed = computed(()=>{
  return activeRef.value
})
const routerArr = ['/allblogtype','/blog']
onMounted(()=>{
  if(location.pathname == '/'){
    activeRef.value = 1
  }else{
    routerArr.forEach((item,index)=>{
      if(location.pathname.startsWith(item)){
        // console.log(item)
        // console.log(index)
        activeRef.value = index+2
        return ;
      }
    })
  }
  // console.log(route)
  // console.log(route.path)
  // console.log(route.fullPath)
  
})

</script>



<style lang="scss" scoped>
.menu-container{
  .el-menu{
    border-right:none;
  }
  padding-bottom: 20px;
  border-bottom:1px solid #ccc
}
</style>