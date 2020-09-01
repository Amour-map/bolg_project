const express = require("express");
// 引入接口
const api = require("./route");
// 实例化app
const app = express();
// 使用接口
app.use('/api', api);

// 监听3001端口
app.listen("3001", () => {
  console.log("Node服务器已经运行......");
});
