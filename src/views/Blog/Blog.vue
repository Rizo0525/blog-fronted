<template>
    <div class="blog-container" v-loadingData="isloading" @scroll="handleScroll" ref="blogContainer">
        <div class="header">
            <div class="title">
                <h2>博客文章</h2>
            </div>
            <div class="subtitle">
                <h4>总计{{blogsRef.total}}篇文章</h4>
            </div>
        </div>
        <div class="main">
            <BlogItem :blogsRef="blogsRef"></BlogItem>
        </div>
        <div class="pagination-container">
            <el-pagination background :page-sizes="[5, 10, 15, 20]" layout="total,sizes,prev,pager, next"  :total="blogsRef.total" @current-change="handleChange" @size-change="handleSizeChange"  v-model:page-size="routerInfo.limit" v-model:current-page="routerInfo.page"
            />
        </div>
        <el-backtop :right="60" :bottom="100" :visibility-height="150" target=".blog-container"/>
    </div>

</template>

<script setup>
import {getBlogsAPI} from '@/apis/blog'
import { onMounted, onUpdated, ref } from 'vue';
import Icon from '@/components/Icon/index.vue'
import BlogItem from './blogItem.vue'
import {useRoute,useRouter} from 'vue-router'
const blogsRef = ref({})
const route = useRoute()
const router = useRouter()

const routerInfo = computed(()=>{
    const page = +route.query.page || 1
    const limit = +route.query.limit || 5
    return {
        page,limit
    }
})

const blogContainer = ref(null)


const isloading = ref(true)

const getBlogs = async ()=>{
    let resp = await getBlogsAPI(routerInfo.value.page,routerInfo.value.limit)
    blogsRef.value = resp.data
}

watch(()=>route,async ()=>{
    await getBlogs()
},{
    deep: true,
})

const handleChange = async (item)=>{
    router.push({
        path:'blog',
        query:{
            page:item,
            limit:routerInfo.value.limit
        }
    })
    blogContainer.value.scrollTop = 0
    trans(blogContainer)
    
}
const handleSizeChange = (size)=>{
    router.push({
        path:'blog',
        query:{
            page:routerInfo.value.page,
            limit:size
        }
    })
    // blogContainer.value.scrollTop = 0
    trans(blogContainer)
}
onMounted(async ()=>{
    await getBlogs()
    isloading.value = false
})
const trans = (dom)=>{
    dom.value.style.transition = 'none'
    dom.value.style.transform = "translateX(-30px)"
    dom.value.style.opacity = 0
    dom.value.clientHeight
    dom.value.style.transition = 'all 1s'
    dom.value.style.transform = "translateX(0px)"
    dom.value.style.opacity = 1
}

</script>

<style lang="scss" scoped>
.blog-container{
    height: 100%;
    // background: rebeccapurple;
    overflow-y: scroll;
    position: relative;
    // max-height: 750px;
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
        text-align: center;
        padding: 25px;
        
    }
    .pagination-container{
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
    }
}
</style>