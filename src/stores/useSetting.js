import { defineStore } from "pinia";
import {ref} from 'vue'
export const useSettingStore = defineStore('setting',()=>{
    const sideOpen = ref(true)
    const toggleSideStatus = ()=>{
        sideOpen.value = !sideOpen.value
    }
    return {
        sideOpen,
        toggleSideStatus
    }
})