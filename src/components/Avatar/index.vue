<template>
    <div class="avatar-container">
        <img :src="imgUrl" alt="" :style="{width:width+'px',height:height+'px'}" >
        <div class="name">Hekunnong's Blog</div>
    </div>
</template>

<script setup>
defineProps({
    width:{
        required:true,
        type:String
    },
    height:{
        required:true,
        type:String
    },
    imgUrl:{
        required:true,
        type:String
    }
})
</script>

<style lang="scss" scoped>
.avatar-container{
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
    overflow: hidden;
    .name{
        // margin-top: 20px;
        // margin-top: 30px;
        padding-top: 10px;
    }
    img{
        border-radius: 50%;
        display: block;
        margin: 0 auto;
        object-fit: cover;
    }
}
</style>