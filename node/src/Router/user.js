const {loginCheck} = require("../controller/user")
const {SuccessModel,ErrorModel} =require("../model/resModel")

const {set} =require("../db/redis")

const handleUserRouter =(req,res)=>{
    const method =req.method; //GET OR POST

    if (method==="POST" && req.path ==="/api/user/login"){
       const {username,password} =req.body;
       const result =loginCheck(username,password)
       return result.then(data=>{
           if (data.username){
                //    设置session
                req.session.username =data.username;
                req.session.realname =data.realname;
                console.log(req.session.username);
                // 同步到redis
                set(req.sessionId,req.session)
                console.log(req.session);
               return new SuccessModel()
           }
           return new ErrorModel("登录失败")
       })
    }

      
}

module.exports =handleUserRouter