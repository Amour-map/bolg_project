const express = require('express');
const router = express.Router();
const multiparty = require("multiparty");
const db = require("../mongodb");
/* ***************************************************************** 
                              注册接口
***************************************************************** */
router.post("/adduser", (req, res) => {
  let form = new multiparty.Form();
  form.parse(req, function(err, fields, file) {
    if(err) {
      console.log(err, "添加数据失败，请重试");
      res.send({
        success: false,
        msg: err
      });
    } else {
      // 处理表单数据为正确格式
      let userRecord = {};
      for(let key in fields) {
        userRecord[key] = fields[key][0];
      }
      db.User.create(userRecord, (err, jellybean, snickers) => {
        console.log(jellybean, snickers);
        if(err) {
          console.log(err, "添加数据失败，请重试");
        } else {
          console.log('保存成功');
          res.send({
            success: true,
            msg: "添加成功"
          });
        }
      });
    }
  });
});
/* ***************************************************************** 
                              注册用户是否存在接口
***************************************************************** */
router.get("/getemail/:email", (req, res) => {
  console.log(req.params.email);
  // db.User.find()
});
/* ***************************************************************** 
                              登录接口
***************************************************************** */
router.post("/login", (req, res) => {
  let form = new multiparty.Form();
  form.parse(req, function(err, fields, file) {
    if(err) {
      console.log(err, "解析数据失败，请重试");
      res.send({
        success: false,
        msg: err
      });
    } else {
      // 处理表单数据为正确格式
      let userRecord = {};
      for(let key in fields) {
        userRecord[key] = fields[key][0];
      }
      console.log(userRecord)
      let result = db.User.find(userRecord, (err, result) => {
        console.log(result)
        if(err) {
          console.log(err, '内部错误');
          res.send({
            success: false,
            msg: '服务器内部错误'
          });
        } else {
          if(result.length === 0) {
            res.send({
              success: false,
              msg: '用户名或密码错误'
            });
          } else {
            console.log('查询成功')
            res.send({
              success: true,
              msg: result[0].userid
            });
          }
        }
      });
    }
  });
});

module.exports = router;
