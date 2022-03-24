var express = require("express");
var router =express.Router();

const {loginCheck} = require("../controller/user")
const {SuccessModel,ErrorModel} =require("../model/resModel")

router.post("/login",(req,res,next)=>{
    const {username,password} =req.body;
    const result =loginCheck(username,password)
    return result.then(data=>{
        if (data.username){
             //    设置session
             req.session.username =data.username;
             req.session.realname =data.realname;
             console.log(req.session.username);
            //  // 同步到redis
            //  set(req.sessionId,req.session)
             console.log(req.session);
            res.json(new SuccessModel())
            return 
        }
        res.json(new ErrorModel("登录失败"))
    })
})

module.exports = router
