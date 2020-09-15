const express = require('express');
const path = require("path");
const router = express.Router();
const multiparty = require("multiparty");
const fs = require("fs");
const multer = require("multer");
const db = require("../mongodb");
/* ***************************************************************** 
                              新增文章
***************************************************************** */
router.post("/writeblog", (req, res) => {
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
      let article = {};
      console.log(fields)
      for(let key in fields) {
        article[key] = fields[key][0];
      }
      // 将生成的图片名保存到数据库中
      article.img_url = fileUrl;
      // 插入一条数据
      db.Article.create(article, (err, jellybean, snickers) => {
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
                              新增文章图片
***************************************************************** */
let upload = multer({dest: './upload/imgs'});
let fileUrl = '';
router.post('/upload', upload.single('logo'), function(req, res, next){
  console.log(req.file);
  let imgFile = req.file;
  let oldPath = './upload/imgs/' + imgFile.filename;
  let newPath = './upload/imgs/' + imgFile.filename + '.jpg';
  fs.rename(oldPath,newPath,(err, data)=>{
    if(err){
      console.log("修改名称失败");
      res.send({code: 0, success: false});
    }else {
      console.log("修改成功");
      // 保存上传的图片url，后续存入数据库
      fileUrl = req.file.filename + '.jpg';
      res.send({code: 1, success: true});
    }
  });  
});

/* ***************************************************************** 
                              获取文章
***************************************************************** */
router.get("/allarticles", async (req, res) => {
  try {
    let data = await db.Article.find();
    res.send({
      code: 0,
      success: true,
      data
    });
  } catch (e) {
    console.log(e, "获取列表失败");
    res.send({
      code: 0,
      success: false
    });
  }
});
/* ***************************************************************** 
                              获取文章图片
***************************************************************** */
router.get("/articleimg/:url", async (req, res) => {
  try {
    let url = path.resolve(__dirname, `../upload/imgs/${req.params.url}`)
    res.sendFile(url, function (err) {
      if (err) {
        console.log(err, '读取文件出错');
      } else {
        console.log('Sent:', url);
      }
    })
  } catch (e) {
    console.log(e, "获取图片失败");
    res.send({
      code: 0,
      success: false
    });
  }
});
/* ***************************************************************** 
                              查询某个文章
***************************************************************** */
router.get(`/:id`, async (req, res) => {
  console.log(req.params);
  try {
    let data = await db.Article.findOne({
      _id: req.params.id
    });
    console.log(data)
    res.send({
      code: 0,
      success: true,
      data
    });
  } catch (e) {
    console.log(e, "获取当前文章失败");
    res.send({
      code: 0,
      success: false
    });
  }
});

module.exports = router;
