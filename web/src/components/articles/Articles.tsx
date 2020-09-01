import React from "react";
import { Divider } from "antd";
import { EyeOutlined, HeartOutlined, MessageOutlined } from "@ant-design/icons";
import "./articles.css";

const Articles:React.FC = () => {
  const data = [
    {
      title: "共克时艰！150+ 本技术类常用电子书开源了",
      sub_title: "免费下载，包括 前端、后端、数据结构与算法、计算机基础、设计模式、数据库等书籍",
      watcher: 2000,
      message: 50,
      love: 3,
      time: "2020-02-09 11:54:36"
    },
    {
      title: "共克时艰！150+ 本技术类常用电子书开源了",
      sub_title: "免费下载，包括 前端、后端、数据结构与算法、计算机基础、设计模式、数据库等书籍",
      watcher: 2000,
      message: 50,
      love: 3,
      time: "2020-02-09 11:54:36"
    },
    {
      title: "共克时艰！150+ 本技术类常用电子书开源了",
      sub_title: "免费下载，包括 前端、后端、数据结构与算法、计算机基础、设计模式、数据库等书籍",
      watcher: 2000,
      message: 50,
      love: 3,
      time: "2020-02-09 11:54:36"
    },
    {
      title: "共克时艰！150+ 本技术类常用电子书开源了",
      sub_title: "免费下载，包括 前端、后端、数据结构与算法、计算机基础、设计模式、数据库等书籍",
      watcher: 2000,
      message: 50,
      love: 3,
      time: "2020-02-09 11:54:36"
    },
    {
      title: "共克时艰！150+ 本技术类常用电子书开源了",
      sub_title: "免费下载，包括 前端、后端、数据结构与算法、计算机基础、设计模式、数据库等书籍",
      watcher: 2000,
      message: 50,
      love: 3,
      time: "2020-02-09 11:54:36"
    },
    {
      title: "共克时艰！150+ 本技术类常用电子书开源了",
      sub_title: "免费下载，包括 前端、后端、数据结构与算法、计算机基础、设计模式、数据库等书籍",
      watcher: 2000,
      message: 50,
      love: 3,
      time: "2020-02-09 11:54:36"
    },
    {
      title: "共克时艰！150+ 本技术类常用电子书开源了",
      sub_title: "免费下载，包括 前端、后端、数据结构与算法、计算机基础、设计模式、数据库等书籍",
      watcher: 2000,
      message: 50,
      love: 3,
      time: "2020-02-09 11:54:36"
    },
    {
      title: "共克时艰！150+ 本技术类常用电子书开源了",
      sub_title: "免费下载，包括 前端、后端、数据结构与算法、计算机基础、设计模式、数据库等书籍",
      watcher: 2000,
      message: 50,
      love: 3,
      time: "2020-02-09 11:54:36"
    },
    {
      title: "共克时艰！150+ 本技术类常用电子书开源了",
      sub_title: "免费下载，包括 前端、后端、数据结构与算法、计算机基础、设计模式、数据库等书籍",
      watcher: 2000,
      message: 50,
      love: 3,
      time: "2020-02-09 11:54:36"
    },
  ]
  return (
    <>
      {
        data.map((item, index) => (
          <div key={index}>
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
        ))
      }
    </>
  );
}

export default Articles;
