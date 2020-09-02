import React from "react";
import { withRouter } from "react-router-dom";

const ArticleDetails:React.FC = (props) => {
  console.log(props)
  return (
    <>
      <div>我是详情页</div>
    </>
  );
}

export default withRouter(ArticleDetails);
