<template>
    <div class="blogdetail-container">
        <h1>{{ blogContentRef.title }}</h1>
        <div class="aside">
            <!-- <span>日期:{{ formatDate(blog.createDate) }}</span> -->
            <span>浏览:{{ blogContentRef.scanNumber }}</span>
            <!-- <a href="#data-form-container">评论:{{ blog.commentNumber }}</a> -->
            <RouterLink :to="{name:'OneBlogType',query:{page:1,limit:5},params:{id:`${blogContentRef.categoryId}`}}">分类:{{ blogContentRef.category.name }}</RouterLink>
        </div>
        <!-- <div v-if="blogContentRef.htmlContent" v-html="blogContentRef.htmlContent" class="markdown-body"></div> -->
        <div v-html="blogContentRef.htmlContent" class="markdown-body"></div>
    </div>
</template>

<script setup>
import '@/styles/markdown.css'
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'
import { nextTick, onMounted } from 'vue';
import Icon from '@/components/Icon/index.vue'
import { ElMessage } from 'element-plus';
let props = defineProps({
    blogContentRef:{
        type:Object
    }
})
// console.log(props.blogContentRef.htmlContent)
onMounted(()=>{
    document.querySelectorAll('pre code').forEach((block)=>{
        hljs.highlightBlock(block)
    })
    document.querySelectorAll('.toastui-editor-ww-code-block').forEach((item)=>{
        // console.log(item)
        item.style.position = 'relative'
        let iconStr = "<i class='iconfont icon-fuzhi'"+ "style='position:absolute;right:8px;top:0;font-size:24px;cursor:pointer'"+"></i>"
        let str = item.innerHTML + iconStr
        item.innerHTML = str
    })
})
onMounted(()=>{
    document.querySelectorAll('.icon-fuzhi').forEach((item)=>{
        item.addEventListener('click',(e)=>{
            // console.log(navigator)
            // console.log(navigator.clipboard)
            let content = item.previousElementSibling.children[0].textContent
            // item.previousElementSibling.children[0].textContent.execCommand('copy')
            if(navigator.clipboard){
                navigator.clipboard.writeText(content)
            }
            else{
                let textArea = document.createElement("textarea");
                textArea.value = content;
                // 使text area不在viewport，同时设置不可见
                textArea.style.position = "absolute";
                textArea.style.opacity = 0;
                textArea.style.left = "-999999px";
                textArea.style.top = "-999999px";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                document.execCommand('copy') 
                textArea.remove()
            }
            ElMessage({
                message:'复制成功',
                type:'success'
            })
        })
    })
})

</script>

<style lang="less" scoped>
.blogdetail-container{
    text-align: left;
    padding: 20px 70px;
    border: 2px solid rgba(0,0,0,0.2);
    border-top: 0;
    h1{
        font-size: 2em;
    }
    .aside{
        padding: 10px 0;
        font-size: 14px;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        span{
            margin-right: 10px;
        }
    }
    .markdown-body{
        margin: 2em 0;
        .toastui-editor-ww-code-block{
            position: relative;
            .iconfont{
                // font-size: 16px;
                display: block;
                position: absolute !important; 
                width: 30px;
                height: 30px;
                background: red;
                top:0;
                right: 0;
            }
        }
    }
}
</style>