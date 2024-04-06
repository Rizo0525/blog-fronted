<template>
    <div class="blogitem-container">
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
            <el-pagination background :page-sizes="[5, 10, 15, 20]" layout="total,sizes,prev,pager, next"  :total="blogsByType.total" @change="handleChange"   v-model:page-size="queryRef.limit"
            />
        </div>
    </div>
</template>

<script setup>



</script>

<style lang="scss" scoped>
.blogitem-container{
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
</style>