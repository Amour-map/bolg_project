import React, { useState } from 'react';
import { Button, Steps, message  } from 'antd';
import axios from "axios";
import BraftEditor from 'braft-editor';
// 引入第一步的富文本编辑器组件
import FirstArticleEditor from './FirstArticleEditor';
// 引入第二步的预览和添加标题副标题组件
import SecondPreview from './SecondPreview';
// 引入第三步发布文章组件
import FinalPublishArticle from './FinalPublishArticle';
// 获取步骤组件
const { Step } = Steps;

function WriteArticles(props) {
  /* ************************************** 
                state start 
  **************************************** */
  // 当前页面jsx
  const steps = [
    {
      title: '写文章',
    },
    {
      title: '添加标题',
    },
    {
      title: '发布文章',
    },
  ];
  // 默认的当前进度位置
  const [current, setCurrent] = useState(0);
  // 默认的富文本内容和输出内容
  const [editorContent, setEditorContent] = useState(
    BraftEditor.createEditorState('')
  );
  const [outputHTML, setOutputHTML] = useState("");
  // 标题表单实例
  const [titleForm, setTitleForm] = useState(null);
  // 标题表单数据
  const [formTitleAndImg, setFormTitleAndImg] = useState({});
  /* ************************************** 
                state end 
  **************************************** */
  
  /* ************************************** 
                func start 
  **************************************** */
  // 获取富文本编辑器的输出
  const getEditorHTML = (content, outputHTML) => {
    setEditorContent(content);
    setOutputHTML(outputHTML);
  } 
  // 获取文章标题等内容表单
  const getTitleForm = (form) => {
    setTitleForm(form);
    console.log(titleForm);
  }
  // 下一步触发
  const next = async () => {
    // 第一步未输入内容触发
    if(current === 0 && outputHTML === '') {
      message.warning('文章内容不能为空！')
      return
    }
    // 第二步时未输入标题等触发
    if(current === 1) {
      let formTitleAndImg = await titleForm.validateFields();
      // 验证通过后执行下一步
      // 获取填入的标题和上传的图片
      setFormTitleAndImg(formTitleAndImg);
    }
    setCurrent(current+1);
  }
  // 上一步触发
  const prev = () => {
    setCurrent(current-1);
  } 
  // 发布文章
  const publishArticle = async () => {
    console.log('发布文章')
    let articleData = new FormData();
    articleData.append("title", titleForm.getFieldValue("title"));
    articleData.append("sub_title", titleForm.getFieldValue("sub_title"));
    articleData.append("content", outputHTML);
    articleData.append("img_url", titleForm.getFieldValue("img_url"));
    let msg = await axios.post("/api/article/writeblog", articleData);
    if(msg.data.success) {
      message.success('发布文章成功!');
      props.history.push('/')
    } else {
      message.error('发布文章失败，请刷新后重试!')
    }
  }
  /* ************************************** 
                func end 
  **************************************** */

  /* ************************************** 
                jsx start 
  **************************************** */
  return (
    <div style={{ position: 'relative', height: '100%'}}>
      <div>
        <Steps current={current} style={{marginBottom: '20px'}}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
      </div>
      <div className="steps-content">
        {
          current === 0 && (
            <FirstArticleEditor 
              getEditorHTML={getEditorHTML} 
              currentHTML={outputHTML} 
              editorContent={editorContent} 
            />
          )
        }
        {
          current === 1 && (
            <SecondPreview 
              articleHTML={outputHTML} 
              getTitleForm={getTitleForm}
            />
          )
        }
        {
          current === 2 && (
            <FinalPublishArticle articleHTML={outputHTML} />
          )
        }
      </div>
      <div 
        className="steps-action" 
        style={{
          textAlign: 'right', 
          position: 'absolute', 
          right: 10,
          bottom: 10,
          zIndex: '1'
        }}
        >
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            上一步
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            下一步
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={publishArticle()}>
            发布文章
          </Button>
        )}
      </div>
    </div>
  )
  /* ************************************** 
                jsx end 
  **************************************** */
}

export default WriteArticles;
