import React from "react";
import {Link, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import { Divider } from "antd";
import { EyeOutlined, HeartOutlined, MessageOutlined } from "@ant-design/icons";
import axios from "axios";
import "./articles.css";
import RouteProps from "../../pages/CommonInterface";
import ArticleDetails from "./ArticleDetails";
// 定义文章的接口
interface Article {
  title: String;
  sub_title: String;
  img_url: String;
  content: String;
  watcher: Number;
  message: Number;
  love: Number;
  time: String;
}
const Articles:React.FC = (props:any) => {
  // 初始化
  const [articleList, setArticleList] = useState<Article[]>([]);
  useEffect(() => {
    // 获取文章列表数据
    let newArticleList:Article[] = [];
    async function getAllArticles() {
      try {
        let res:any = await axios.get("/api/article/allarticles");
        if(res.data !== undefined) {
          res.data.data.forEach( async (item:Article) => {
            newArticleList.push({
              title: item.title,
              sub_title: item.sub_title,
              content: item.content,
              img_url: item.img_url,
              watcher: 2000,
              message: 50,
              love: 3,
              time: "2020-02-09 11:54:36"
            });
            setArticleList([...newArticleList]);
          })
        } else {
          console.log('数据错误')
        }
      } catch (e) {
        console.log(e, '请求出错');
      }
    }
    getAllArticles();
  }, []);
  
  return (
    <div className="artiles-container">
      <Route path={`${props.match.path}/articledetails`} component={ArticleDetails} />
       {
        props.location.pathname === props.match.path ? articleList.map((item:Article, index:any) => {
            return (
              <div key={index}>
                <Link to={`${props.match.path}/articledetails`}>
                  <div className="article">
                    <div className="content">
                      <span>{item.title}</span>
                      <p>{item.sub_title}</p>
                      <div className="watch-info">
                        <EyeOutlined />&nbsp;<span>{item.watcher}</span>&nbsp;&nbsp;&nbsp;
                        <HeartOutlined />&nbsp;<span>{item.love}</span>&nbsp;&nbsp;&nbsp;
                        <MessageOutlined />&nbsp;<span>{item.message}</span>
                      </div>
                    </div>
                    <div className="img" onClick={() => {
                      console.log(props.location.pathname)
                      props.history.push(props.location.pathname + '/articledetails');
                    }}>
                      
                      <img 
                        src={`/api/article/articleimg/${item.img_url}`} 
                        style={{width: "123px", height: "98px", borderRadius: '4px'}} 
                        alt="图片不见了"
                      />
                    </div>
                  </div>
                </Link>
                <Divider style={{margin: "0"}}/>
              </div> 
            );
          }) : ""
      }
      
    </div>
  );
}

export default Articles;
