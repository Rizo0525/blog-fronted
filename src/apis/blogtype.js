import request from '@/utils/http'

//分页获取博客分类
export async function getBlogTypeAPI(page,limit){
    return await request({
        url:'/api/blogtype',
        params:{
            page,
            limit
        }
    })
}


export async function getAllBlogTypesAPI(){
    return await request({
        url:'/api/blogtype',
    })
}


