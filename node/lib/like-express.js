// 实现中间件机制

const http =require("http");
const slice =Array.prototype.slice;

class LikeExpress {
    constructor(){
        this.routes ={
            all:[], //存放app.use....
            get:[], //存放app.get注册的中间价
            post:[] //存放app.post....
        }
    }

    register(path){
        const info ={}
        if (typeof path ==='string'){
            info.path =path
            // 从第二个参数开始，转换为数组存入stack（存放中间件函数）
            info.stack =slice.call(arguments,1)
        }else{
            info.path ='/'
            info.stack =slice.call(arguments,0)
        }
        return info
    }

    use(){
        const info =this.register.apply(this,arguments);
        this.routes.all.push(info)
    }

    get(){
        const info =this.register.apply(this,arguments);
        this.routes.get.push(info)
    }

    post(){
        const info =this.register.apply(this,arguments);
        this.routes.post.push(info)
    }

    // 用于中间件判断接收到请求的url是否需要处理
    match(method,url){
        let stack =[];
        // 忽略浏览器默认请求网页图标行为
        if (url ==="/favicon.ico"){
            return stack;
        }   
        
        // 获取routes（然后再对比url）
        let curRoutes =[];
        curRoutes =curRoutes.concat(this.routes.all);
        curRoutes =curRoutes.concat(this.routes[method]);
        // 遍历对比url
        curRoutes.forEach(routeInfo =>{
            if (url.indexOf(routeInfo.path)===0){
                stack =stack.concat(routeInfo.stack)
            }
        })
        return stack;
    }

    // 核心的next机制
    handle(req,res,stack){
        const next =()=>{
            // 拿到第一个匹配的中间件（同时删掉第一个元素）
            const middleware =stack.shift();
            if (middleware){
                middleware(req,res,next)
            }
        }
        next()
    }

    // callback函数的作用：http创建服务器后的请求处理函数
    callback(){
        return (req,res)=>{
            res.json =(data)=>{
                res.setHeader("Content-type","application/json");
                res.end(
                    JSON.stringify(data)
                )
            }
            const url =req.url
            const method =req.method.toLowerCase();

            const resultList =this.match(method,url);
            // 
            this.handle(req,res,resultList)
        }
    }

    listen(...args){
        const server =http.createServer(this.callback())
        server.listen(...args)
    }
}

// 工厂函数
module.exports =()=>{
    return new LikeExpress()
}