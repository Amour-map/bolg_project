import React from "react";
import { Input, Form, Button } from 'antd';

const { TextArea } = Input;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const Message:React.FC = () => {
  return (
    <>
      <Form 
        {...layout}
      >
        <Form.Item
          label="邮箱"
          name="email"
        >
          <Input placeholder="请输入邮箱" />
        </Form.Item>
        <Form.Item
          label="手机号码"
          name="phone"
        >
          <Input placeholder="请输入手机号码" />
        </Form.Item>
        <Form.Item
          label="姓名"
          name="name"
        >
          <Input placeholder="请输入姓名" />
        </Form.Item>
        <Form.Item
          label="内容"
          name="content"
        >
          <TextArea rows={20} placeholder="请输入内容" />
        </Form.Item>
        <Form.Item style={{float: "right"}}>
          <Button type="primary" htmlType="submit">
            留言
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default Message;
