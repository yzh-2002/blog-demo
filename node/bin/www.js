const http =require("http");

const PORT =8000;
// 将后台处理代码封装到app.js中
const serverHandle =require("../app");

const server =http.createServer(serverHandle);
server.listen(PORT)