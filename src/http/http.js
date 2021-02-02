import axios from 'axios'
import Host from './env'


let baseURL;

switch (Host.env) {
    case "pub":
        baseURL = Host.PublicHost;
        break;
    case "test":
        baseURL = Host.testHost;
        break;
    case 'lan':
        baseURL = Host.lanHost;
        break;
    default:
        baseURL = Host.localHost;
}


/* 创建axios实例 */
var instance = axios.create({
    baseURL: baseURL,
    timeout: 30000
})


/* 响应拦截器 */
instance.interceptors.response.use((response) => {
    /* 对响应数据做点什么 */
    if (response.status !== 200) {
        alert('请求失败')
        return Promise.reject()
    }else {
        return response.data;
    }

}, (error) => {
    /* 对响应错误做点什么 */
    return Promise.reject(error)
})


/**
 * 使用es6的export default导出了一个函数，导出的函数代替axios去帮我们请求数据，
 * 函数的参数及返回值如下：
 * @param {String} method  请求的方法：get、post、delete、put
 * @param {String} url     请求的url:
 * @param {Object} data    请求的参数
 * @returns {Promise}     返回一个promise对象，其实就相当于axios请求数据的返回值
 */
export default (method, url, data = {}, responseType = {}) => {
    method = method.toLowerCase();
    if (method == 'post') {
        return instance.post(url, data);
    } else if (method == 'postfile') {
        return instance.post(url, data, {responseType: responseType.responseType});
    } else if (method == 'get') {
        return instance.get(url, {params: data})
    } else {
        console.error('未知的请求方法：' + method);
        return Promise.reject();
    }
}