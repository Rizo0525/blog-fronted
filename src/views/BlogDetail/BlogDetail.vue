<template>
    <div class="detail-container">
        <Layout>
            <div class="main" @scroll="debounceScroll" ref="main">
                <BlogContent v-loadingData="isloading" :blogContentRef="blogContentRef" v-if="blogContentRef.htmlContent"></BlogContent>
            </div>
            <template #right v-if="blogContentRef.toc?.length">
                <div class="right-container">
                    <span class="directory">目录</span>
                    <BlogToc :toc="blogContentRef.toc"></BlogToc>
                </div>
            </template>
        </Layout>
    </div>
</template>

<script setup>
import BlogContent from './BlogContent.vue'
import {getOneBlogAPI} from '@/apis/blog'
import { computed, onMounted, onUpdated, ref, watch, watchEffect } from 'vue';
import {useRoute} from "vue-router"
import Layout from '@/Layout/index.vue'
import BlogToc from './BlogToc.vue'
import {debounce} from '@/utils/debounce'
import {emitter} from '@/eventBus.js'
// console.log(emitter)
const route = useRoute()
const blogContentRef = ref({})

const isloading = ref(true)

const getOneBlog = async ()=>{
    let resp = await getOneBlogAPI(route.params.id)
    // console.log(resp.data)
    blogContentRef.value = resp.data
}
const main = ref(null)

let handleScroll = ()=>{
    emitter.emit('blogScroll',main.value)
}
const debounceScroll = debounce(handleScroll,10)
onMounted(async ()=>{
    await getOneBlog()
    isloading.value = false
})

</script>

<style lang="scss" scoped>
.detail-container{
    height: 100%;
    width: 100%;
    position: relative;
    .main{
        height: 100%;
        overflow-y: scroll;
        scroll-behavior: smooth;
        overflow-x: hidden;
        box-sizing: border-box;
        margin: 0 10px;
    }
    .right-container{
        width: 240px;
        overflow-y: scroll;
        scroll-behavior: smooth;
        padding: 20px;
        .directory{
            font-size: 20px;
            color:#dc6a12
        }
    }
}
</style>