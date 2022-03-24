# blog-demo
> Node+Vue实现一个简单的博客系统
>

## 后端实现

> 技术栈：Node+mysql+redis

blog-express和koa文件夹不用在意（~~整个后端采用node原生api实现，本想再用express和koa进行重构，但是没时间~~）

<strong style="color:red">数据储存放在本地mysql数据库中，连接配置信息在`/node/src/configure/ds.js`，具体建表等信息后续补充</strong>

### 启动项目

```
cd ./node
npm install //安装依赖
redis-server //打开redis
npm run dev //运行在http://localhost:8000
```

### nginx反向代理配置

> 详情配置过程不再赘述

配置信息：

```
 server {
        listen       8001;
        server_name  localhost;

	location / {
proxy_pass http://localhost:8080;
	}

	location /api/ {
proxy_pass http://localhost:8000;
proxy_set_header Host $host;
	}
	.......
```

客户端运行端口：8080，后端接口运行端口：8000，nginx代理端口：8001

### 接口信息

（建议用postman测试一下）（稍后补充.....）

#### 博客

```
1.获取博客列表
GET  /api/blog/list (No query)
返回数据格式（样例）:
{
    "data": [
        {
            "id": 1,
            "title": "biaotiB",
            "content": "just for test",
            "createtime": 1646985566346,
            "author": "zhangsan"
        },
        {
            "id": 2,
            "title": "biaotiA",
            "content": "just for test",
            "createtime": 1646985566389,
            "author": "zhangsan"
        }
    ],
    "errnum": 0
}

2.获取博客详情
GET /api/blog/detail?id={id} (query)
返回数据格式（样例）:
{
    "data": {
        "id": 1,
        "title": "biaotiB",
        "content": "just for test",
        "createtime": 1646985566346,
        "author": "zhangsan"
    },
    "errnum": 0
}

3.新建博客
POST /api/blog/new

body数据：


4.删除博客
/api/blog/delete

5.更新博客
/api/blog/update
```



#### 用户

```
1.登录接口
POST /api/user/login
```

