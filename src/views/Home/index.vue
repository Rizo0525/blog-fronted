<template>
    <div class="home-container">
        <div class="content">
            <h2>About Me</h2>
            <p>一名前端开发者</p>
            <p>本科毕业于西南科技大学，目前硕士生在读...</p>
        </div>
        <div class="item-img">
            <img src="../../assets/home.jpeg" alt="">
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.home-container{
    text-align: left;
    height: 100%;
    margin: 0 20px;
    // background-size: cover;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .content{
        h2{
            margin-bottom: 10px;
            font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
        }
        p{
            margin-bottom: 20px;
            font-size: 16px;
        }
    }
    .item-img{
        // margin: 0 auto;
        width: 600px;
        // height: 70%;
        img{
            width: 100%;
            height: 100%;
        }
    }
    
}
</style>