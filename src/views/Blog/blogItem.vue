<template>
    <div class="item" v-for="item in blogsRef.rows" :key="item.id">
        <div class="header">
            <h4>{{ item.title }}</h4>
            <div class="description">文章描述:{{ item.description }}</div>
            <button class="watchMore" @click="$router.push({name:'BlogDetail',params:{id:`${item.id}`}})">
                查看更多
            </button>
        </div>
        <div class="footer">
            <div class="category">
                <Icon type="category"></Icon>
                <span @click="$router.push({name:'OneBlogType',query:{page:1,limit:5},params:{id:`${item.category.id}`}})">分类:{{ item.category.name }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
let props = defineProps({
    blogsRef:{
        type:Object,
        default:()=>{}
    }
})
// console.log(props.blogsRef)

</script>

<style lang="scss" scoped>
.item{
            width: 80%;
            // height: 100px;
            // background: red;
            border: 1px solid rgba(0,0,0,0.2);
            border-radius: 10px;
            margin: 30px auto;
            // padding: 10px 20px;
            transition: all .4s;
            &:hover{
                transform: translate3d(0,-10px,0);
                cursor: pointer;
                box-shadow: 8px 8px 8px rgb(0, 0, 0,0.2);
            }
            .header{
                padding: 20px;
                h4{
                font-size: 24px;
                }
                .description{
                    width: 200px;
                    font-size: 14px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;     
                    margin: 10px auto;           
                }
                .watchMore{
                    margin-top: 20px;
                    color: #fff;
                    border: 1px solid #9397e4;
                    outline: none;
                    background: #9397e4;
                }
            }
            .footer{
                .category{
                    border-top: 1px solid rgba(0,0,0,0.2);
                    padding: 10px;
                    text-align: left;
                    i{
                        font-size: 20px;
                        vertical-align: -2px;
                    }
                    span{
                        margin-left: 10px;
                    }
                }
            }
        }
</style>