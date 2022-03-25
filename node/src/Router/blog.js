const {getList,getDetail,newBlog,updataBlog,delBlog} =require("../controller/blog")
const {SuccessModel,ErrorModel} =require("../model/resModel")
 
// 身份验证
const identifyCheck =(req)=>{
    if (!req.session.username){
        // username为唯一用户标识
        console.log(req.session.username);
        return Promise.resolve(
            new ErrorModel("尚未登录")
        )
    }
}


const handleBlogRouter =(req,res)=>{
    const method =req.method; //GET OR POST
    const id =req.query.id;

    // 获取博客列表
    if (method ==='GET' && req.path ==="/api/blog/list"){
        const author =req.query.author || '';
        const keyword =req.query.keyword || '';
        // const listData =getList(author,keyword)

        // return new SuccessModel(listData)
        const result =getList(author,keyword);
        // 返回的仍然是一个promise对象
        return result.then(listData=>{
            return new SuccessModel(listData)
        })
    }

    // 获取博客详情
    if (method==="GET" && req.path ==="/api/blog/detail"){
        // const data =getDetail(id);
        // return new SuccessModel(data)
        const result =getDetail(id);
        return result.then(data=>{
            return new SuccessModel(data)
        })
    }

    // 新建博客
    if (method==="POST" && req.path ==="/api/blog/new"){
        // 新建博客需要进行身份验证（后端检测，前端对路由跳转进行限制，后端对路由进行限制）
        const identifyCheckResult =identifyCheck(req);
        if (identifyCheckResult){
            return identifyCheckResult;
        }


        req.body.author =req.session.username;
        const result =newBlog(req.body);
        return result.then(data=>{
            return new SuccessModel(data)
        })
    }

    // 更新一篇博客
    if (method ==="POST" && req.path==="/api/blog/update"){
        const identifyCheckResult =identifyCheck(req);
        if (identifyCheckResult){
            return identifyCheckResult;
        }

        const result =updataBlog(id,req.body)
        return result.then(val=>{
            if (val){
                return new SuccessModel()
            }else{
                return new ErrorModel("更新博客失败")
            }
       })
    }

    // 删除一篇博客
    if (method ==="POST" && req.path==="/api/blog/del"){
        const identifyCheckResult =identifyCheck(req);
        if (identifyCheckResult){
            return identifyCheckResult;
        }

        const author =req.session.username
        const result =delBlog(id,author)
        return result.then(val=>{
            if (val){
                return new SuccessModel()
            }else{
                return new ErrorModel("删除博客失败")
            }
        })
    }
}

module.exports =handleBlogRouter