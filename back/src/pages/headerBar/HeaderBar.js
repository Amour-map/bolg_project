import React, { useState } from 'react';
// 布局组件
import { Layout } from 'antd';
// 图标组件
import { 
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
// 引入用户组件
import UserInfo from '../../components/userInfo/UserInfo';

// 获取header组件
const { Header } = Layout;

function HeaderBar(props) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Header className="header" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => {
          setCollapsed(!collapsed)
          props.setCollapsed(!collapsed)
        },
      })}
      <UserInfo />
    </Header>
  )
}

export default HeaderBar;
