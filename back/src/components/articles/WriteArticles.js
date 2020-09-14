import React, { useState } from 'react';
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
    <div>
      <div className="editor-wrapper">
        <BraftEditor
          value={editorContent}
          onChange={handleEditorChange}
        />
      </div>
      <h5>输出内容</h5>
      <div className="output-content">{outputHTML}</div>
    </div>
  )
}

export default WriteArticles;
