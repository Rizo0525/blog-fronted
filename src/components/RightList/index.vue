<template>
    <ul class="rightlist-container">
        <li v-for="(item,i) in list" :key="i">
            <span @click="handleClick(item)" :class="{active:item.isSelected}">{{ item.name }}</span>
            <span @click="handleClick(item)" class="aside" :class="{active:item.isSelected}" v-if="item.articleCount">{{ item.articleCount }}篇</span>
            <RightList :list="item.children" @select="handleClick"></RightList>
        </li>
    </ul>
</template>
<script>
export default {
    name:'RightList'
}
</script>
<script setup>

let props = defineProps({
    list:Array,
    default:()=>[]
})
let emits = defineEmits(['select'])

const handleClick = (item)=>{
    if(!item.isSelected){
        emits('select',item)
    }
}
</script>

<style lang="scss" scoped>
ul{
    list-style: none;
    margin-left: 1em;
    padding: 0;
    li{
        text-align: left;
        min-height: 40px;
        line-height: 40px;
        font-size: 14px;
        cursor: pointer;
        span.active{
            color:#dc6a12;
            font-weight: bold;
        }
        .aside{
            margin-left: 1em;
            font-size: 12px;
        }
    }
}
</style>