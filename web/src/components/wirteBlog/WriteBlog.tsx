import React from "react";
import { Input, Form, Button, Space, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from "axios";
const { TextArea } = Input;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const WriteBlog:React.FC = () => {
  // 创建form实例
  const [article] = Form.useForm();
  // 提交文章方法
  async function submit() {
    let articleData = new FormData();
    articleData.append("title", article.getFieldValue("title"));
    articleData.append("sub_title", article.getFieldValue("sub_title"));
    articleData.append("content", article.getFieldValue("content"));
    articleData.append("img_url", article.getFieldValue("img_url"));
    let msg = await axios.post("/api/article/writeblog", articleData);
    console.log(msg);
  }
  return (
    <>
      <Form 
        {...layout}
        form={article}
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
        <Form.Item 
          name="img_url"
          style={{float: "right"}}
        >
          <Space>
            <Upload
              accept="application/x-img"
              action="/api/article/upload"
              name="logo"
            >
              <Button>
                <UploadOutlined /> 上传博客图片
              </Button>
            </Upload>
            <Button type="default">
              取消
            </Button>
            <Button type="primary" htmlType="submit" onClick={submit}>
              发布
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  )
}

export default WriteBlog;
