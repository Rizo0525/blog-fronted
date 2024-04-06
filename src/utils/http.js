import axios from "axios";

const ins = axios.create({

})

ins.interceptors.request.use(function (config){
    return config
},function(error){
    return Promise.reject(error);
})

ins.interceptors.response.use(function (resp){
    if(resp.data.code !== 0){
        ElMessage({
            message:resp.data.msg,
            type:'error'
        })
        return null
    }
    
    return resp.data
},function(error){
    return Promise.reject(error);
})

export default ins