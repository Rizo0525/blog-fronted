import {createRouter,createWebHashHistory,createWebHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        component:()=>import('@/views/Home/index.vue')
    },
    {
        path:'/allblogtype',
        component:()=>import('@/views/BlogType/BlogAllTypes.vue')
    },
    {
        path:'/blog',
        component:()=>import('@/views/Blog/Blog.vue')
    },
    {
        path:'/project',
        component:()=>import('@/views/Project/index.vue')
    },
    {
        path:'/blogdetail/:id',
        name:'BlogDetail',
        component:()=>import('@/views/BlogDetail/BlogDetail.vue')
    },
    {
        path:'/blogtype/:id',
        name:'OneBlogType',
        component:()=>import('@/views/BlogType/OneBlogType.vue')
    },
    // {
    //     path:'/blogtype/:id',
    //     name:'OneBlogType',
    //     component:()=>import('@/views/BlogType/OneBlogType.vue'),
    //     children:{
    //         path:'/:id',

    //     }
    // }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export {router}
