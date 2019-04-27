import vue from 'vue'
import axios from 'axios'
import store from '../../store/store'
import qs from 'qs'
import md5 from 'js-md5'
import { Base64 } from 'js-base64'

const host = 'https://app.dev.9kbs.com'  //kbs测试站


const instance  = axios.create({
    baseURL: host,
    timeout: 3000,
})

var addToken = (data = {}) => {
    // var token = store.state.user.token
    data.timesp = new Date().Format('yyyy-MM-dd hh:mm:ss')
    // if (token) {
    //     data.token = token
    // } else {
    //     data.token = ''
    // }
    var salt = store.state.user.salt
    if (!salt) {
        salt = 'tqNGAU30Ij5mqZycGtDYa4eKo5!CeTke'
    }
    var dataKey = Object.keys(data)
    var md5Str = ''
    dataKey.sort()
    dataKey.forEach(function(item, index, array) {
        md5Str = md5Str + item
        for (var name in data) {
            if (name === item) {
                md5Str = md5Str + data[name]
            }
        }
    })
    md5Str = salt + md5Str + salt
    data.secstr = md5(md5Str)
    return data
}

// http response 拦截器
// client.interceptors.response.use(
//     response => {
//         if (response.data.status === 'fail') {
//             // vue.$toast.show(response.data.msg)
//             switch (response.data.code) {
//                 case '502':
//                 case '503':
//                     // 401 清除token信息并跳转到登录页面
//                     store.dispatch(USER_SIGNOUT)
//                     var ref = Base64.encodeURI(window.getBaseUrl() + '/h5/#' + router.history.current.fullPath)
//                     router.push({
//                         path: '/login?referer=' + ref
//                     })
//                     break
//             }
//         }
//         return response
//     },
//     error => {
//         // console.log(error)
//         if (error.message === '路由跳转取消请求') { // 判断是否为路由跳转取消网络请求
//             console.log('路由跳转取消请求' + error)
//         } else {
//             vue.$toast.show('网络请求失败')
//             return Promise.reject(error)
//         }
//     })

const http = {
    //get请求
    get(url, data = {}, success = () => {}, error = () => {}) {
        instance.get(url, { params: data })
            .then(({ data }) => success(data)) // return response.data
            .catch(({ response }) => error(response)) // return error.response
    },
    // post请求
    post(url, data = {}, success = () => {}, error = () => {}) {
        var _data = qs.stringify(addToken(data))
        instance.post(url, _data, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
            .then(({ data }) => success(data)) // return response.data
            .catch(({ response }) => error(response)) // return error.response
    },
}

export default {
    install(vue) {
        if (!vue.$http) {
            vue.$http = http
        }

        vue.mixin({
            created: function() {
                this.$http = vue.$http
            }
        })
    }
}