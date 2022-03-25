# Easy-Blog

> 一个简单的博客样例实现（初入前端的练手小玩具，欢迎交流学习，指出不足，共同进步）

技术栈：vue2(+element-ui)+node+mysql(+redis)

<strong style="color:red">博客功能（下面有介绍）调试均成功（在开发环境下），生产环境上没有测试过</strong>

## 博客样例图片

登录页

![](https://github.com/yzh-2002/blog-demo/blob/main/README/login.jpg?raw=true)

首页

![](https://github.com/yzh-2002/blog-demo/blob/main/README/home.jpg?raw=true)

文章发布页

![](https://github.com/yzh-2002/blog-demo/blob/main/README/realease.jpg?raw=true)

## 博客功能介绍

- 登录功能（没有写注册功能，因为时间不够~~我是懒狗~~）
- 文章发布功能（文章删除功能后端接口有的，但是前端没用，因为时间不够~~我是懒狗~~）
- 文章关键字搜索功能
- （文章更新功能后端接口也有，但是前端没用，因为时间不够~~我是懒狗~~）

## 本地运行前提

> nodejs与数据库连接配置文件在[blog-demo](https://github.com/yzh-2002/blog-demo)/[node](https://github.com/yzh-2002/blog-demo/tree/main/node)/[src](https://github.com/yzh-2002/blog-demo/tree/main/node/src)/**configure**/db.js

### 连接数据库（mysql）

数据库：myblog

两张表：user和blog

```
--SCHEMAS myblog
---------Tables blogs
---------------Columns id(int AI PK)
---------------Columns title(varchar(50))
---------------Columns content(longtext)
---------------Columns createtime(bigint)
---------------Columns author(varchar(20))
---------Tables users
---------------Columns id(int AI PK)
---------------Columns username(varchar(20))
---------------Columns password(varchar(20))
---------------Columns realname (varchar(10))
```

### 连接redis

```
1.下载redis（下好之后配一下环境变量）
2.redis-server
```

### nginx反向代理

> 解决前端调用后端接口响应时的跨域问题

（前端借助http-server运行，端口号：8080，后端运行在本地的8000端口）

配置文件信息：

> 原本配置文件中很多注释为了展示我给删掉了（应该问题不大）

```
#user  nobody;
worker_processes  1;
events {
    worker_connections  1024;
}
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
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
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
```

## 注意事项

上面都准备好之后基本就ok

项目启动：

```
cd ./easy-blog
npm i
cd ../ //回退到根目录
cd ./node
npm i

## 前端启动（端口：8080）
cd ../ //回退到根目录
cd ./easy-blog
npm run serve

##启动reddis
redis-server

## 后端启动（端口：8000）
cd ../ //回退到根目录
cd ./node
npm run dev

## 启动nginx
nginx start

## 进入前端页面，把端口号改为代理端口号8001（这个很重要！！！！！）
```

## 未来展望

还有很多值得完善的地方，未来可以考虑在这基础上不断完善与丰富，最好是有朝一日能部署到线上去

- sql注入（当时忘了处理这个了，不过也就一个函数的事情~~我是懒狗~~）
- 代码优化（后端接口都是采用node原生api完成，后期考虑使用express或者koa重构）
- ......
