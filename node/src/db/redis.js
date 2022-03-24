const redis =require("redis")

const {REDIS_CONF} =require("../configure/db")

// 创建redis客户端
const redisClient =redis.createClient(REDIS_CONF.port,REDIS_CONF.host);
redisClient.on("error",err=>{
    console.log("err:",err);
})

// 封装get和set函数
function get(key) {
    // 封装成一个promise返回
    return new Promise((resolve,reject)=>{
        redisClient.get(key,(err,val)=>{
            if (err){
                reject(err);
                return
            }

            if (val==null){
                resolve(null)
            }
            // 此处为兼容val为object的情况
            try{
                resolve(
                    JSON.parse(val)
                )
            }catch(ex){
                resolve(val)
            }
        })
    })
}

function set(key,val){
    // 检测val是否为object类型，是将其转换成JSON字符串（不然默认为key.toString()格式，不易观察）
    if (typeof val ==="object"){
        key =JSON.stringify(val)
    }
    redisClient.set(key,val,redis.print)
}

module.exports ={
    set,
    get
}
