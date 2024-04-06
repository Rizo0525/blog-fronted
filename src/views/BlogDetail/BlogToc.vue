<template>
    <div class="blogtoc-container" ref="blogtoc">
        <RightList :list="tocWithSelected" @select="handleSelect"></RightList>
    </div>
</template>

<script setup>
import RightList from '@/components/RightList/index.vue'
import { computed, onMounted, watch, watchEffect } from 'vue';
import {emitter} from '@/eventBus.js'
import { debounce } from '@/utils/debounce';
let props = defineProps({
    toc:Array,
})
const activeAnchor = ref("")
const tocWithSelected = computed(()=>{
    function getResult(toc = []){
        return toc.map(item=>({
            ...item,
            isSelected:item.anchor === activeAnchor.value,
            children:getResult(item.children)
        }))
    }
    let result = getResult(props.toc)
    return result
})
// console.log(tocWithSelected.value)
const handleSelect = (item)=>{
    location.hash = item.anchor
}
const doms = computed(()=>{
    let doms = []
    let addToDoms = (toc)=>{
        for(let item of toc){
            doms.push(document.getElementById(item.anchor))
            if(item.children && item.children.length){
                addToDoms(item.children)
            }
        }
    }
    addToDoms(props.toc)
    return doms
})
const setSelected = (scrollDom)=>{
    // console.log("scroll:",scrollDom)
    activeAnchor.value = "";
    const range = 200;
    for(let dom of doms.value){
        if(!dom){
            continue;
        }
        let top = dom.getBoundingClientRect().top
        if(top>=0 && top<=range){
            activeAnchor.value = dom.id
            return ;
        }else if(top>range){
            return ;
        }else{
            activeAnchor.value = dom.id
        }
    }
}

const blogtoc = ref(null)
onMounted(()=>{
    emitter.on('blogScroll',debounce(setSelected,50))
    location.hash = ''
    // if(location.hash){
    //     // console.log("1",tocWithSelected.value)

    //     activeAnchor.value = decodeURIComponent(location.hash)
    //     console.log('mounted',activeAnchor.value)
    //     // console.log("2",tocWithSelected.value)
    // }
    setSelected()
})
</script>

<style lang="scss" scoped>
.blogtoc-container{
    margin-top: 20px;
}
</style>