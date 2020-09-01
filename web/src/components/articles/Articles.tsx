import React from "react";
import { useEffect, useState } from "react";
import { Divider } from "antd";
import { EyeOutlined, HeartOutlined, MessageOutlined } from "@ant-design/icons";
import axios from "axios";
import "./articles.css";
// 定义响应的接口
interface Article {
  title: String;
  sub_title: String;
  content: String;
  watcher: Number;
  message: Number;
  love: Number;
  time: String;
}

// interface ArticleRes {
//   code: Number
//   success: Boolean;
//   data: undefined | [Article];
// }

const Articles:React.FC = () => {
  // 初始化
  const [articleList, setArticleList] = useState([]);
  // let articleList:any = [];
  useEffect(() => {
    // setArticleList([]);
    getAllArticles();
  });
  async function getAllArticles() {
    try {
      let res:any = await axios.get("/api/article/allarticles");
      console.log(res)
      if(res.data !== undefined) {
        res.data.data.forEach((item:any) => {
          // articleList.push()
          setArticleList([...articleList])
          // articleList.push({
          //   title: item.title,
          //   sub_title: item.sub_title,
          //   content: item.content,
          //   watcher: 2000,
          //   message: 50,
          //   love: 3,
          //   time: "2020-02-09 11:54:36"
          // });
          console.log(articleList)
        })
      } else {

      }
    } catch (e) {
      console.log(e, '请求出错')
    }
  }
  return (
    <>
      {
        articleList.map((item:any, index:any) => {
          console.log(item)
          return (
            <div key={index}>
              {articleList.length}
              <div className="article">
                <div className="content">
                  <a href="http://www.baidu.com">{item.title}</a>
                  <p>{item.sub_title}</p>
                  <div className="watch-info">
                    <EyeOutlined />&nbsp;<span>{item.watcher}</span>&nbsp;&nbsp;&nbsp;
                    <HeartOutlined />&nbsp;<span>{item.love}</span>&nbsp;&nbsp;&nbsp;
                    <MessageOutlined />&nbsp;<span>{item.message}</span>
                  </div>
                </div>
                <div className="img">
                  <img src={require("../../assets/logo.jpg")} style={{width: "123px", height: "98px"}} alt=""/>
                </div>
              </div>
              <Divider style={{margin: "0"}}/>
            </div> 
          )
        })
      }
    </>
  );
}

export default Articles;
