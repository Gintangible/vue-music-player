import axios from 'axios';

const service = axios.create({
    baseURL: 'https://c.y.qq.com/'
});

// request拦截器
service.interceptors.request.use(
    config => {
        // Do something before request is sent
        return config;
    },
    error => { 
        // Do something with request error
        console.log('request: ' + error); // for debug
        Promise.reject(error);
    }
);

// respone拦截器
service.interceptors.response.use(
    response => response,
    error => {
        console.log('response: ' + error); // for debug
        return Promise.reject(error);
    }
);

export default service;
