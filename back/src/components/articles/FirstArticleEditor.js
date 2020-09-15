import React, { useState } from 'react';
// 引入富文本插件
import 'braft-editor/dist/index.css';
import BraftEditor from 'braft-editor';
function FirstArticleEditor(props) {
  /* ************************************** 
                state start 
  **************************************** */
  // 默认的编辑内容和输出内容
  const [editorContent, setEditorContent] = useState(
    BraftEditor.createEditorState(props.editorContent)
  );
  const [outputHTML, setOutputHTML] = useState('<p></p>');
  /* ************************************** 
                state end 
  **************************************** */
 
  /* ************************************** 
                func start 
  **************************************** */
  // 文本变化时触发  
  const handleEditorChange = (content) => {
    // 自身的内容和输出文本
    setEditorContent(content);
    setOutputHTML(content.toHTML());
    // 传入父组件
    props.getEditorHTML(content, content.toHTML());
  }
  /* ************************************** 
                func end 
  **************************************** */
 
  return (
    <div className="editor-wrapper">
      <BraftEditor
        value={editorContent}
        onChange={handleEditorChange}
      />
    </div>
  )
}

export default FirstArticleEditor;
