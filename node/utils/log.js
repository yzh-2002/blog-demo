const fs =require("fs");
const path =require("path");

// 写日志
function writeLog(writeStream,log){
    writeStream.write(log+"\n")
}

// 生成write Stream
function createWriteStream(fileName){
    const fullFileName =path.join(__dirname,"../","logs",fileName)
    const writeStream =fs.createWriteStream(fullFileName,{
        flags:"a" //追加内容
    })
    return writeStream
}

// 记录访问日志
const accessWriteStream =createWriteStream("access.log");

function access(log){
    writeLog(accessWriteStream,log)
}

module.exports ={
    access
}