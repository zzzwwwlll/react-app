import axios from 'axios'
// import qs from 'qs'
import {
    Modal
} from "antd";




let isRefreshing = false;
// 是否正在刷新token
let requestQueue = [];
// token 过期时的请求队列

let instance = axios.create({
    // baseURL: 'http://10.250.67.92:5000'
})

//token获取失败处理
const LoginAgain = () => {
    Modal.warning({
        content: "登录错误，请重新登录！",
        centered: true,
        okText: "确认",
        onOk() {
            // 弹出登录弹框
        },
    });
};


// 获取token
const getToken = () => {
    axios({
        method: "get",
        url: "",
    }).then((res) => {
        isRefreshing = false;
        if (res.data.status === 0) {
            // 获取 token 成功
            window.localStorage.setItem("token", `Bearer ${res.data.data.token}`);
            // token 更新 执行过期请求队列
            requestQueue.forEach((cb) => cb(res.data.data.token));
            requestQueue = [];
        } else {
            LoginAgain();
            console.log(`getToken catch error ${res.data.message}`);
        }
    }).catch((err) => {
        isRefreshing = false;
        LoginAgain();
        console.log(`TM_GET_TOKEN_INFO error:${err.message}`);
    });
};


instance.interceptors.response.use(
    (response) => {
        if (response.data.status === 401) {
            // token失效
            isRefreshing = true;
            const {
                config
            } = response;
            getToken();
            if (isRefreshing) {
                return new Promise((resolve) => {
                    requestQueue.push((token) => {
                        config.headers.token = token;
                        resolve(instance(config));
                    });
                });
            }
        }
        return Promise.resolve(response);
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.request.use((config) => {
    // 可以记录请求开始的时间 响应里面上报 接口耗时
    config.REQUEST_ID = Date.now();
    // 请求REQUEST_ID url timestamp 上报
    // 设置请求头的token参数
    config.headers.token = window.localStorage.getItem("token") || "";
    return config;
});

export default instance;