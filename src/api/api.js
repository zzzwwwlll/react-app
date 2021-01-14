import axios from '../server/axios'


export const loginApi = params => {
    return axios.post('api/login', params).then(res => res.data)
}