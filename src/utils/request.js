import axios from "axios";
const service = axios.create({
    timeout: 20000
})

service.interceptors.request.use(config => {
    // 在发送请求前做些什么
    return config
},error => {
    // 对请求错误做些什么
    return Promise.reject(error)
})

service.interceptors.response.use( response => {
    // 对响应数据做点什么
    return response
},error => {
    // 对响应错误做点什么
    return Promise.reject(error)
})

export default service
