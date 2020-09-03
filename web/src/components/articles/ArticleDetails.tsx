import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import {RouteProps, AxiosResult} from "../../pages/CommonInterface";

const ArticleDetails:React.FC<RouteProps> = (props:RouteProps) => {
  console.log(props.match)
  async function getSingleArticle() {
    let res = await axios.get('/api/article/aaa');
    console.log(res);
  }
  useEffect(() => {
    getSingleArticle();
  }, []);
  return (
    <>
      <div>我是详情页</div>
    </>
  );
}

export default withRouter(ArticleDetails);
