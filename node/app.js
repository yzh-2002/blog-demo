const querystring =require("querystring") //解析url中查询字符串

const {access} =require("./utils/log")
const handleBlogRouter =require("./src/Router/blog")
const handleUserRouter =require("./src/Router/user")

const {get,set} =require("./src/db/redis")


// 用于处理post Data（使用promise进行封装）
const getPostData =(req) =>{
    return new Promise((resolve,reject)=>{
        if (req.method !=="POST") {
            resolve({})
            return 
        }
        if (req.headers['content-type']!=="application/json"){
            resolve({})
            return
        }

        let postData ="";
        req.on("data",chunk=>{
            postData+=chunk.toString()
        })
        req.on("end",()=>{
            if (!postData){
                resolve({})
                return
            }
            resolve(JSON.parse(postData))
        })
    })
}

const serverHandle =(req,res) =>{
    // 记录access.log
    access(`${req.method} -- ${req.url} -- ${req.headers['user-agent']} -- ${Date.now()}`)




    // 设置返回格式
    res.setHeader("Content-type","application/json");

    const url =req.url;
    req.path =url.split("?")[0] 
    // 解析query
    req.query =querystring.parse(url.split("?")[1])

    // 解析cookie
    req.cookie ={}
    const cookieStr =req.headers.cookie || '' //cookie形如k1=v1;k2=v2
    cookieStr.split(";").forEach(item=>{
        if (!item){
            return 
        }
        const arr =item.split("=")
        const key =arr[0].trim()
        const val =arr[1].trim() //去掉空格
        req.cookie[key] =val
    })
    console.log("cookie is",req.cookie)


    // 解析session(使用redis)
    let needSetCookie =false;
    let userId =req.cookie.userId
    if (!userId){
        needSetCookie =true;
        userId =`${Date.now()}_${Math.random()}`
        // 初始化redis中的值
        set(userId,{})
    }

    // 获取session
    req.sessionId =userId;
    get(req.sessionId).then(sessionData=>{
        if (sessionData==null){
            // 初始化redis中sessionId的值
            set(req.sessionId,{})
            req.session ={}
        }else{
            // 设置session
            req.session =sessionData
        }
        // 处理post Data
        return getPostData(req)
    })
    .then(postData=>{
        // 将postData挂载到req上
        req.body =postData;

        // 处理blog路由
        const blogResult =handleBlogRouter(req,res);
        if (blogResult){
            blogResult.then(blogData=>{
                res.end(
                    JSON.stringify(blogData)
                )
            })
            return 
        }
        // 处理user路由
        const userResult =handleUserRouter(req,res);
        if (userResult){
           userResult.then(userData=>{
            //    设置cookie
            if (needSetCookie){
                res.setHeader('Set-Cookie',`userId=${userId};path=/;httpOnly`)
            }
            res.end(JSON.stringify(userData))
           })
            return 
        }

        // 未命中，返回404
        res.writeHead(404,{"Content-type":"text/plain"})
        res.write("404 NOT FOUND");
        res.end()
    })

}

module.exports =serverHandle