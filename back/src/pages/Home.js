import React, { useState } from 'react';
import { Layout } from 'antd';

// 引入主页样式
import './home.css';
import HeaderBar from './headerBar/HeaderBar';
import SideBar from './sideBar/SideBar';
import ContentBar from './contentBar/ContentBar';
// home组件
function Home() {
  const [collapsed, setCollapsed] = useState(false);
  // 获取header组件中展开状态并修改state
  function getHeaderCollapsed(collapsed) {
    setCollapsed(collapsed);
  }
  return (
    <div id="home">
      <Layout className="layout">
        <SideBar collapsed={collapsed} />
        <Layout className="site-layout">
          <HeaderBar setCollapsed={getHeaderCollapsed}  />
          <ContentBar />
        </Layout>
      </Layout>
    </div>
  )
}

export default Home;
