import React, { useState } from 'react';
import { Button, Space } from 'antd'
// 引入富文本插件
import 'braft-editor/dist/index.css'
import BraftEditor from 'braft-editor'

function WriteArticles(props) {
  // 默认的编辑内容和输出内容
  const [editorContent, setEditorContent] = useState(
    BraftEditor.createEditorState('<p>Hello <b>World!</b></p>')
  );
  const [outputHTML, setOutputHTML] = useState("<p></p>");
  const handleEditorChange = (content) => {
    setEditorContent(content);
    setOutputHTML(content.toHTML());
  }
  return (
    <div style={{height: '100%', position: 'relative'}}>
      <div className="editor-wrapper">
        <BraftEditor
          style={{border: '1px #ccc solid'}}
          value={editorContent}
          onChange={handleEditorChange}
        />
      </div>
      <div 
        className="editor-save-cancel" 
        style={{
          textAlign: 'right', 
          position: 'absolute', 
          right: 0,
          bottom: 0,
          zIndex: '1'
        }}
      >
        <Space>
          <Button>取消</Button>
          <Button type="primary">发布</Button>
        </Space>
      </div>
    </div>
  )
}

export default WriteArticles;
