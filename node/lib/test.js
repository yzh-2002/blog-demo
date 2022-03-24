const express = require('./like-express');

const app = express();
// 1
app.use((req, res, next) => {
  console.log('请求开始...', req.method, req.url);
  next();
})
// 2
app.use((req, res, next) => {
  console.log('处理cookie...');
  req.cookie = {
    useId: "test"
  };
  next();
})
// 3
app.use('/api', (req, res, next) => {
  console.log('处理/api路由');
  next();
})
// 4
app.get('/api', (req, res, next) => {
  console.log('get /api路由');
  next();
})

app.listen(8000, () => {
  // console.log('server is running at 7000');
})
