import axios, { AxiosError } from 'axios'
import { Toast } from 'antd-mobile'

const request = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0/',
    timeout: 5000,
})

request.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        return config
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    function (response) {
        return response
    },
    function (error: AxiosError<{ message: string }>) {
        // 对响应错误做点什么
        if (!error.response) {
            Toast.show({ content: '网络错误' })
            return Promise.reject(error)
        }
        Toast.show({ content: error.response.data.message })
        return Promise.reject(error)
    }
)

export default request
