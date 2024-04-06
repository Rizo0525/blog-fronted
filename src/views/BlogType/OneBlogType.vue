<template>
    <div class="blogByType" v-if="blogsByType.rows" ref="blogByType">
        <Layout>
            <div class="main">
                <div class="header">
                    <div class="title">
                    <h2>当前分类:{{ blogsByType.rows[0].category.name }}</h2>
                    </div>
                    <div class="subtitle">
                        <h4>总计{{blogsByType.total}}篇文章</h4>
                    </div>
                </div>
                <div class="content">
                    <BlogItem :blogsRef="blogsByType"></BlogItem>
                </div>
                <div class="pagination-container">
                    <el-pagination background :page-sizes="[5, 10, 15, 20]" layout="total,sizes,prev,pager, next"  :total="blogsByType.total" @current-change="handleChange" v-model:current-page="curPage" v-model:page-size="curLimit" @size-change = "handleSizeChange"
                    />
                </div>
            </div>


            <template #right>
                <div class="right-container">
                    <span class="directory">分类</span>
                    <div class="typeDetail">
                        <RightList :list="blogTypes" @select="handleSelect"></RightList>
                    </div>
                </div>
            </template>
        </Layout>
    </div>
</template>

<script setup>
import {getBlogByCategoryAPI} from '@/apis/blog.js'
import { onMounted,ref,computed, watch } from 'vue';
import {useRoute,useRouter} from 'vue-router'
import BlogItem from '../Blog/blogItem.vue'
import { getAllBlogTypesAPI } from '@/apis/blogtype';
import Layout from '@/Layout/index.vue'
import RightList from '@/components/RightList/index.vue'
import { translate } from 'element-plus';
const loading = ref(true)
const route = useRoute()
const router = useRouter()
const curPage = ref(+route.query.page)
const curLimit = ref(+route.query.limit)
const data = ref([])
const getBlogTypes = async ()=>{
    let resp = await getAllBlogTypesAPI()
    data.value = resp.data
}
const page = computed(()=>{
    return +route.query.page
})
const limit = computed(()=>{
    return +route.query.limit
})
const categoryid = computed(()=>{
    return +route.params.id
})
// const limit = computed(()=>{
//     return +
// })
const blogTypes = computed(()=>{
    return data.value.map((item)=>{
        return {
            ...item,
            isSelected:categoryid.value == item.id
        }
    })
})
// watch(()=>route.params.id,(newValue,oldValue)=>{
//     console.log(newValue,oldValue)
// })

const blogsByType = ref([])

const getBlogByCategory = async ()=>{
    let resp = await getBlogByCategoryAPI(page.value,limit.value,categoryid.value)
    blogsByType.value = resp.data
}
onMounted(async ()=>{
    await getBlogByCategory()
    loading.value = false
    await getBlogTypes()
})
const blogByType = ref(null)

const handleChange = async (item)=>{
    console.log(item)
    router.push({
        name:'OneBlogType',
        query:{
            page:item,
            limit:limit.value
        },params:{
            id:categoryid.value,
        }}
    )
    blogByType.value.scrollTop = 0
    trans()
}
// console.log(route)

watch(()=>route,async ()=>{
    loading.value = true
    // console.log('路由变化了')
    await getBlogByCategory()
    loading.value = false
},{
    deep: true,
})

const handleSelect = async (item)=>{
    router.push({
        name:'OneBlogType',
        query:{
            page:page.value,
            limit:limit.value
        },params:{
            id:item.id,
        }}
    )
    // console.log(blogByType.value.style)
    // console.log(blogByType.value)
    trans()

}
const handleSizeChange = (size)=>{
    console.log('size:',size)
}
const trans = ()=>{
    blogByType.value.style.transition = 'none'
    blogByType.value.style.transform = "translateX(-30px)"
    blogByType.value.style.opacity = 0
    blogByType.value.clientHeight
    blogByType.value.style.transition = 'all 1s'
    blogByType.value.style.transform = "translateX(0px)"
    blogByType.value.style.opacity = 1
}
</script>

<style lang="scss" scoped>
.blogByType{
    position: relative;
    height: 100%;
    transition: all 1s;
    .main{
        height: 100%;
        overflow-y: scroll;
        scroll-behavior: smooth;
        .header{
            .title{
            padding: 15px 0;
            font-size: 24px;
            }
            .subtitle{
                padding: 6px 0;
            }
        }
        .pagination-container{
            display: flex;
            justify-content: center;
            margin-bottom: 50px;
        }
    }
    .right-container{
        width: 240px;
        overflow-y: scroll;
        scroll-behavior: smooth;
        padding: 80px 20px; 
        .directory{
            font-size: 20px;
            color:#dc6a12
        }
        .typeDetail{
            margin-top: 20px;
        }
    }
}
</style>