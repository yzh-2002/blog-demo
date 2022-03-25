//对于axios进行二次封装
import axios from "axios";

// 导入路由
import router from "../router/index";

let requests = axios.create({
  baseURL: "http://localhost:8001",
  timeout: 5000,
});

// 请求拦截器
requests.interceptors.request.use((config) => {
  return config;
});

//响应拦截器
requests.interceptors.response
  .use
  // (res)=>{
  //   // 只拦截登录失败其他地方返回失败自行处理
  //   if (res.data.errnum!=0 && router.name=="login"){
  //     alert("服务器响应数据失败!!");
  //     router.push({path:"/login"})
  //   }
  //   return res.data;
  // },(err)=>{
  //   alert("服务器响应数据失败!!");
  //   //跳转到登录页面
  //   router.push({path:"/login"})
  // }
  ();

export default requests;
