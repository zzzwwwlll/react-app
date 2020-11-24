import axios from '../server/axios'

export const loginApi = params => {
    return axios.post('', params).then(res => res.data)
}