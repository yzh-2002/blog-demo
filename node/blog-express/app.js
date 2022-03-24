var createError = require('http-errors'); //解析错误
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser'); //解析cookie
var logger = require('morgan'); //记录日志
const session =require("express-session") //session认证
const RedisStore =require("connect-redis")(session);
var app = express();

const blogRouter =require("./routes/blog");
const userRouter =require("./routes/user");


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 导入redis客户端
const redisClient =require("./db/redis")
const sessionStore =new RedisStore({
  client:redisClient
})

app.use(session({
  secret:"yzh2002",
  cookie :{
    path:'/',
    httpOnly:true,
    maxAge:24*60*60*1000 //ms
  },
  store:sessionStore
}))

// 导入路由
app.use("/api/blog",blogRouter);
app.use("/user",userRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
