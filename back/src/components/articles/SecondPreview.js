import React, { useEffect } from 'react';
import { Card, Form, Input, Button, Upload  } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
function SecondPreview(props) {
  // form
  const [article] = Form.useForm();
  // form布局
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };
  useEffect(() => {
    props.getTitleForm(article);
    console.log('执行了')
  });
  /* ************************************** 
                func start 
  **************************************** */
  // const onFinish = values => {
  //   console.log('Success:', values);
  // };
  // const onFinishFailed = errorInfo => {
  //   console.log('Failed:', errorInfo);
  // };
  /* ************************************** 
                func end 
  **************************************** */
  return (
    <div>
      <div 
        className="title-preview" style={{
          display: 'flex',
          height: '100%'
        }}
      >
        <div style={{flex: '1'}}>
          <Card title="文章预览:">
            <div style={{
                overflowY: 'scroll', 
                height: '500px'
              }} 
              dangerouslySetInnerHTML={{__html: props.articleHTML}}
            >
            </div>
          </Card>
        </div>
        <div style={{flex: '1'}} >
          <Card title="文章信息:">
            <Form
              style={{height: '500px'}}
              {...layout}
              name="basic"
              form={article}
            >
              <Form.Item
                label="主标题:"
                name="title"
                rules={[{ required: true, message: '请输入主标题' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="副标题:"
                name="sub_title"
                rules={[{ required: true, message: '请输入副标题' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="文章图片:"
                name="img_url"
                rules={[{ required: true, message: '请上传图片' }]}
              >
                <Upload
                  accept="application/x-img"
                  action="/api/article/upload"
                  name="logo"
                >
                  <Button>
                    <UploadOutlined /> 上传博客图片
                  </Button>
                </Upload>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default SecondPreview;
