<template>
    <div class="layout-container">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="main">
        <slot></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
.layout-container{
  height: 100%;
  display: flex;
  .left{
    // width: 200px;
    // height: 100%;
    flex: 0 0 auto;
    
  }
  .main{
    // width: 100%;
    flex: 1 1 auto;
    overflow: hidden;
    // background: paleturquoise;
  }
  .right{
    // width: 300px;
    // background: palegreen;
    flex: 0 0 auto;
    border-left: 1px solid rgba(0,0,0,0.2);
    box-shadow: -2px 0 2px rgba(0,0,0,0.2) ;
  }
}
</style>
  