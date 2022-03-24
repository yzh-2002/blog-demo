const express =require("express");
const router =express.Router();

const {getList,getDetail,newBlog,updataBlog,delBlog} =require("../controller/blog")
const {SuccessModel,ErrorModel} =require("../model/resModel")

router.get("/list",(req,res,next)=>{
    const author =req.query.author || '';
    const keyword =req.query.keyword || '';
   
    const result =getList(author,keyword);
    // 返回的仍然是一个promise对象
    return result.then(listData=>{
        res.json(new SuccessModel(listData))
    })
})

router.get("/detail",(req,res,next)=>{
    res.json({
        errno:0,
        data:"ok"
    })
})

module.exports =  router
