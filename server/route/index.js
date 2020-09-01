// 引入依赖模块
const express = require("express");
const router = express.Router();
// 引入接口文件
const article = require("./article");
const user = require("./user");
// 路由映射
router.use("/article", article);
router.use("/user", user);

module.exports = router;
