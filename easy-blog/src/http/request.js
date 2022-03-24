//对于axios进行二次封装
import axios from "axios";

let requests = axios.create({
  baseURL: "http://localhost:8001",
  timeout: 5000,
});

// 请求拦截器
requests.interceptors.request.use((config) => {
  return config;
});

//响应拦截器
requests.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    alert("服务器响应数据失败");
  }
);

export default requests;
