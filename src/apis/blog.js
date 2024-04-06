import request from '@/utils/http'

export async function getBlogsAPI(page=1,limit=5){
    return await request({
        url:'/api/blog',
        params:{
            page,
            limit
        }
    })
}


export async function getOneBlogAPI(id){
    return await request({
        url:'/api/blog/'+id,
    })
}

export async function getBlogByCategoryAPI(page,limit,categoryid){
    return await request({
        url:'/api/blog',
        params:{
            page,
            limit,
            categoryid
        }
    })
}