import React from 'react';
import { Route } from 'react-router-dom';
// 布局组件
import { Layout } from 'antd';
// 路由配置
import router from '../../router';
// 路由页面相关
import WriteArticles from '../../components/articles/WriteArticles';
import ArticlesList from '../../components/articles/ArticlesList';
// 获取Content组件
const { Content } = Layout;

function ContentBar(props) {
  return (
    <Content
      className="content-container"
      style={{
        margin: '24px 16px',
        padding: '24px',
        minHeight: 280,
      }}
    >
      {/* <Breadcrumb style={{padding: '10px 0'}}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb> */}
      <Route path={router.writeArticle} component={WriteArticles} />
      <Route path={router.articleList} component={ArticlesList} />
    </Content>
  )
}

export default ContentBar;
          