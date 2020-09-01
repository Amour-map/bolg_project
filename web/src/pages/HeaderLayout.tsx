import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Avatar, Button, Space, Modal, Form, Input, Divider } from 'antd';
import { 
  UserOutlined, HomeOutlined, BarsOutlined, 
  ProjectOutlined, DatabaseOutlined, HourglassOutlined, 
  MessageOutlined, PlusOutlined, LoginOutlined} from '@ant-design/icons';
import axios from "axios";
import Nav from "../components/nav/Nav";

const { Header } = Layout;

const loginLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};
const registerLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

const HeaderLayout: React.FC = (props) => {
  const [createUserForm] = Form.useForm();
  const [loginForm] = Form.useForm();
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);
  
  const loginOk = async () => {
    let loginFormData = new FormData();
    loginFormData.append("email", loginForm.getFieldValue("email"));
    loginFormData.append("password", loginForm.getFieldValue("password"));
    let msg = await axios.post("/api/user/login", loginFormData);
    console.log(msg)
  }
  const loginCancel = () => { 
    setLoginVisible(false)
  }
  const registerOk = async () => { 
    let createUserformData = new FormData();
    createUserformData.append("username", createUserForm.getFieldValue("username"));
    createUserformData.append("password", createUserForm.getFieldValue("password"));
    createUserformData.append("email", createUserForm.getFieldValue("email"));
    let msg = await axios.post("/api/user/adduser", createUserformData);
    console.log(msg);
  }
  const registerCancel = () => { 
    setRegisterVisible(false)
  }
  const onFinish = async () => {
   
  };

  const onFinishFailed = (errorInfo:any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Header>
        <div className="nav">
          <Modal
            title="用户登录"
            visible={loginVisible}
            onOk={loginOk}
            onCancel={loginCancel}
            cancelText="取消"
            okText="登录"
          >
            <Form
              form={loginForm}
              {...loginLayout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="邮箱名"
                name="email"
                rules={[{ required: true, message: '请输入邮箱名!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: '请输入密码!' }]}
              >
                <Input.Password />
              </Form.Item>
            </Form>
          </Modal>
          <Modal
            title="用户注册"
            visible={registerVisible}
            onOk={registerOk}
            onCancel={registerCancel}
            cancelText="取消"
            okText="注册"
          >
            <Form
              form={createUserForm}
              {...registerLayout}
            >
              <Form.Item
                label="用户名"
                name="username"
                rules={[{ required: true, message: '请输入用户名!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="邮箱"
                name="email"
                rules={[{ required: true, message: '请输入邮箱' }]}
              >
                <Input value="defaultEmail" />
              </Form.Item>
              <Form.Item
                name="password"
                label="密码"
                rules={[
                  {
                    required: true,
                    message: '请输入密码!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                name="confirm"
                label="确认密码"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: '请再次输入密码',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject('请检查两次输入密码是否一致');
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Form>
          </Modal>
          <Avatar 
            size={60} 
            alt="图片不见了" 
            src={require("../assets/logo.jpg")} 
            style={{position: "relative", bottom: "3px"}} 
          />
          <Nav
            fields={[
              {key: "index", value: "首页", icon: <HomeOutlined />},
              {key: "articles", value: "文章", icon: <BarsOutlined />},
              {key: "archive", value: "归档", icon: <DatabaseOutlined />},
              {key: "project", value: "项目", icon: <ProjectOutlined />},
              {key: "timeline", value: "历程", icon: <HourglassOutlined />},
              {key: "message", value: "留言", icon: <MessageOutlined />},
              {key: "profile", value: "我的", icon: <UserOutlined />}
            ]}
            mode="horizontal"
          />
          <Space style={{float: "right"}}>
            <Button 
              type="primary" 
              shape="round" 
              icon={<LoginOutlined />} 
              danger
            >
              <Link to="/writeBlog" style={{color: "#fff"}}> 写博客</Link>
            </Button>
            <Button 
              type="primary" 
              shape="round" 
              icon={<LoginOutlined />} 
              onClick={() => setLoginVisible(true)}
            >
              登录
            </Button>
            <Button 
              type="primary" 
              shape="round" 
              icon={<PlusOutlined />} 
              onClick={() => {
                setRegisterVisible(true)
              }}
            >
              注册
            </Button>
          </Space>
        </div>
        <Divider style={{margin: "0"}} />
      </Header>
    </>
  )
}

export default HeaderLayout;
