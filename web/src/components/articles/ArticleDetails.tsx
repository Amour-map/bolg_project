import React, { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import axios from "axios";



const ArticleDetails:React.FC<RouteComponentProps> = (props:RouteComponentProps) => {
  console.log(props.match)
  async function getSingleArticle() {
    // let res:GetSingleArticleRes = await axios.get(`/api/article/${props.match.params.articleId}`);
    // console.log(res);
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
