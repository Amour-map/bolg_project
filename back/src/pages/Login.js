import React from 'react';
import { Form, Input, Button, Space } from 'antd';
// 引入login组件样式
import './login.css';

function Login(props) {
  // 登录表单布局
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };
  const tailLayout = {
    wrapperCol: { span: 24 },
  };
  // 校验成功回调
  const onFinish = values => {
    console.log('Success:', values);
  };
  // 校验失败回调
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div id="login">
      <h1 style={{textAlign: 'center'}}>个人博客后台系统</h1>
      <Form
        {...layout}
        labelAlign="left"
        name="login-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password visibilityToggle={false} />
        </Form.Item>

        <Form.Item style={{textAlign: 'center'}}>
          <Space size="large">
            <Button type="primary" htmlType="submit">
              登录
            </Button>
            <Button type="default" htmlType="reset">
              重置
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login;
