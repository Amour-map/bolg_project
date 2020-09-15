import React, { useState, useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import axios from "axios";

interface ArticleContent {
  article_id: String;
  content: String
  img_url: String
  sub_title: String
  title: String
}

const ArticleDetails:React.FC<RouteComponentProps> = (props:any) => {
  /* ************************************** 
                state start 
  **************************************** */
  const [articleContent, setArticleContent] = useState({
    article_id: '',
    content: '',
    img_url: '',
    sub_title: '',
    title: '',
  });
  /* ************************************** 
                state end 
  **************************************** */
  async function getSingleArticle() {
    console.log(props.match.params)
    let res = await axios.get(`/api/article/${props.match.params.articleId}`);
    setArticleContent(res.data.data);
  }
  useEffect(() => {
    getSingleArticle();
    console.log(props)
  }, []);
  return (
    <>
    {/* dangerouslySetInnerHTML={{__html: articleContent.content}} */}
      <div dangerouslySetInnerHTML={{__html: articleContent.content}}></div>
    </>
  );
}

export default withRouter(ArticleDetails);
