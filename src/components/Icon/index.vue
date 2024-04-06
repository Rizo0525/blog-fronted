<template>
      <i class='iconfont icon-container' :class="fontClass"></i>
</template>

<script setup>
import { computed } from 'vue';

const classMap = {
  'qq':'icon-QQ',
  'email':'icon-youxiang',
  'bilibili':'icon-bilibili',
  'wyy':'icon-wangyiyun1',
  'category':'icon-fenlei',
  'fuzhi':'icon-fuzhi'
};
let props = defineProps({
    type:{
        type:String,
        required:true
    },
})
const fontClass = computed(()=>{
    return classMap[props.type]
})
</script>

<style lang="scss" scoped>
@import "//at.alicdn.com/t/c/font_4489546_4y4n7c2iqgx.css";
.iconfont {
//   color: inherit;
  font-size: inherit;
}
</style>