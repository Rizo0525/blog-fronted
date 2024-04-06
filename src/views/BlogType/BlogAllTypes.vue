<template>
    <div class="blogtype-container">
        <div class="header">
            <div class="title">
            <h2>博客分类</h2>
            </div>
            <div class="subtitle">
                <h4>总计{{blogTypes.count}}个分类</h4>
            </div>
        </div>
        <div class="main">
            <div class="item" v-for="item in blogTypes.rows" :key="item.id">
                <p>
                    <span class="icon"><Icon type="category"></Icon></span>
                    <span class="item-name">
                            分类名:<span class="name" @click="handleClick(item)">{{ item.name }}</span>
                            <span class="num">[ {{ item.articleCount }} ]</span>
                    </span>
                </p>
            </div>
        </div>
        <div class="footer">
            <el-pagination background :page-sizes="[5, 10, 15, 20]" layout="total,sizes,prev, pager, next" :total="blogTypes.count"  @change="pageChange" v-model:page-size="query.limit"/>
        </div>
    </div>
</template>

<script setup>
import {getBlogTypeAPI} from '@/apis/blogtype'
import { onMounted, ref } from 'vue';
import Icon from '@/components/Icon/index.vue'
import {useRouter} from 'vue-router'
const router = useRouter()
const blogTypes = ref({})
const query = ref({})
query.value = {
    page:1,
    limit:5
}
const getBlogType = async ()=>{
    let resp = await getBlogTypeAPI(query.value.page, query.value.limit)
    // console.log(resp)
    blogTypes.value = resp.data
}
const pageChange = async (page)=>{
    query.value.page = page
    await getBlogType()
}
const handleClick = (item)=>{
    router.push({
        name:'OneBlogType',
        query:{
            page:query.value.page,
            limit:query.value.limit
        },
        params:{id:item.id}
    })
}
onMounted(()=>{
    getBlogType()
})
</script>

<style lang="scss" scoped>
.blogtype-container{
    padding: 10px 40px;
    height: 100%;
    overflow-y: scroll;
    scroll-behavior: smooth;
    position: relative;
    .header{
        .title{
        padding: 15px 0;
        font-size: 24px;
        }
        .subtitle{
            padding: 6px 0;
        }
    }
    .main{
        padding: 20px;
        text-align: left;
        margin-top: 20px;
        border: 2px solid rgba(0,0,0,0.2);
        transition: all 1s;
        &:hover{
            box-shadow: 10px 0px 10px #ccc,-10px 0px 10px #ccc,0px 10px 10px #ccc,0px -10px 10px #ccc;
            transform: translate3d(0,-6px,0);
        }
        background: #fff;
        height: 500px;
        overflow: auto;
        
        .item{
            display: flex;
            padding: 10px 0;
            width: auto;
            // background: pur;

            .name{
                color: red;
                margin-left: 10px;
                cursor: pointer;
            }
            .num{
                margin-left: 10px;
            }
            .icon{
                font-size: 20px;
                i{
                    vertical-align:baseline;
                }
            }
        }
    }
    .footer{
        margin-top: 15px;  
        display: flex;
        justify-content: center;  
    }
}
</style>