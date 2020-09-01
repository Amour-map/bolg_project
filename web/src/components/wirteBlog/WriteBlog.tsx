import React from "react";
import { Input, Form, Button, Space, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { TextArea } = Input;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const WriteBlog:React.FC = () => {
  return (
    <>
      <Form 
        {...layout}
      >
        <Form.Item
          label="主标题"
          name="title"
        >
          <Input placeholder="请输入标题" />
        </Form.Item>
        <Form.Item
          label="副标题"
          name="sub_title"
        >
          <Input placeholder="请输入副标题" />
        </Form.Item>
        <Form.Item
          label="内容"
          name="content"
        >
          <TextArea placeholder="请输入内容" rows={30} />
        </Form.Item>
        <Form.Item style={{float: "right"}}>
          <Space>
            <Upload>
              <Button>
                <UploadOutlined /> 上传博客图片
              </Button>
            </Upload>
            <Button type="default">
              取消
            </Button>
            <Button type="primary" htmlType="submit">
              发布
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  )
}

export default WriteBlog;
