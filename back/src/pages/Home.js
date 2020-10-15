import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
// 引入主页样式
import './home.css';
import HeaderBar from './headerBar/HeaderBar';
import SideBar from './sideBar/SideBar';
import ContentBar from './contentBar/ContentBar';
import DefalutContentBar from './defalutContentBar/DefalutContentBar';
// 引入内容组件
const Content = Layout;
// home组件
function Home(props) {
  const [collapsed, setCollapsed] = useState(false);
  // 获取是否显示默认组件状态
  const [defaultContentVisible, setDefaultContentVisible] = useState(true);
  // 获取header组件中展开状态并修改state
  function getHeaderCollapsed(collapsed) {
    setCollapsed(collapsed);
  }
  console.log(props)
  return (
    <div id="home">
      <Layout className="layout">
        <SideBar collapsed={collapsed} />
        <Layout className="site-layout">
          <HeaderBar setCollapsed={getHeaderCollapsed}  />
          <Content
              className="content-container"
              style={{
                margin: '24px 16px',
                padding: '24px'
              }}
            >
            {
              props.location.pathname === '/' ? <DefalutContentBar /> : <ContentBar />
            }
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default withRouter(Home);
