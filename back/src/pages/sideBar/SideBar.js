import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { 
  FileTextOutlined,
  LaptopOutlined,
  ProjectOutlined,
  MenuOutlined,
  SettingOutlined,
  ForkOutlined
} from '@ant-design/icons';
// 引入logo头像组件
import ImageShow from '../../components/imageComp/ImageShow';
// 路由相关
import router from '../../router';
const { Sider } = Layout;
const { SubMenu } = Menu;

function SideBar(props) {
  return (
    <Sider 
      trigger={null} 
      collapsible 
      collapsed={props.collapsed}
      className="side-container"
      >
      <div className="logo">
        {
          props.collapsed ? <ImageShow /> : <div className="title">博客后台管理系统</div>
        }
      </div>
      <Menu theme="dark" mode="inline">
        <SubMenu key="article" icon={<FileTextOutlined />} title="文章管理">
          <Menu.Item key="1">
            <Link to={router.writeArticle}>添加文章</Link>
          </Menu.Item>
          <Menu.Item key="2">
          <Link to={router.articleList}>文章列表</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="project" icon={<ProjectOutlined />} title="项目管理">
          <Menu.Item key="3">项目列表</Menu.Item>
        </SubMenu>
        <SubMenu key="skillAndResume" icon={<ForkOutlined />} title="技能管理">
          <Menu.Item key="4">技能列表</Menu.Item>
          <Menu.Item key="5">简历列表</Menu.Item>
        </SubMenu>
        <SubMenu key="home" icon={<LaptopOutlined />} title="主页管理">
          <Menu.Item key="6">主页背景上传</Menu.Item>
        </SubMenu>
        <SubMenu key="menu" icon={<MenuOutlined />} title="菜单管理">
          <Menu.Item key="7">菜单列表</Menu.Item>
        </SubMenu>
        <SubMenu key="config" icon={<SettingOutlined />} title="用户设置">
          <Menu.Item key="8">用户信息</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default SideBar;
