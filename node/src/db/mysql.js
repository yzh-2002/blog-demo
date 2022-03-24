const mysql =require("mysql");

const {MYSQL_CONF} =require("../configure/db");

// 创建链接对象
const connector =mysql.createConnection(MYSQL_CONF)

// 开始链接
connector.connect()

// 统一执行sql的函数
function exec(sql){
    return new Promise((resolve,reject)=>{
        connector.query(sql,(err,result)=>{
            if (err){
                reject(err)
                return
            }
            resolve(result)
        })
    })
}

module.exports ={
    exec
}