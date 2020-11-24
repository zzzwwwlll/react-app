import axios from 'axios'
import qs from 'qs'
let http = {
    post: '',
    get: ''
}
http.post = function (url, data) {
    let params = qs.stringify(data)
    return new Promise((resolve, reject) => {
        axios.post(url, params).then((res) => {
            resolve(res)
        }, err => {
            reject(err)
        })
    })
}
http.get = function (url, data) {
    let params = qs.stringify(data)
    return new Promise((resolve, reject) => {
        axios.get(url, params).then((res) => {
            resolve(res)
        }, err => {
            reject(err)
        })
    })
}
export default http