import React from 'react';
import { Route } from 'react-router-dom';
// 布局组件
import { Layout } from 'antd';
// 路由配置
import router from '../../router';
// 路由页面相关
import WriteArticles from '../../components/articles/WriteArticles';
import EditArticle from '../../components/articles/EditArticle';
import ArticlesList from '../../components/articles/ArticlesList';
// 获取Content组件
const { Content } = Layout;

function ContentBar(props) {
  return (
    <Content
      className="content-container"
      style={{
        margin: '24px 16px',
        padding: '24px'
      }}
    >
      {/* <Breadcrumb style={{padding: '10px 0'}}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb> */}
      {/* <div style={{
          display: 'flex',  
          alignItems: 'center', 
          height: '100%',
          background: "url('./home_bg.jpeg') repeat-y"
        }}
      >
        <div 
          style={{
            flex: '1', 
            height: '50px', 
            lineHeight: '50px', 
            textAlign: 'center', 
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#fff'
          }}
        >
          前端不仅仅要会用轮子，还要会造轮子
        </div>
      </div> */}
      <Route path={router.writeArticle} component={WriteArticles} />
      <Route path={router.editArticle} component={EditArticle} />
      <Route path={router.articleList} component={ArticlesList} />
    </Content>
  )
}

export default ContentBar;
          