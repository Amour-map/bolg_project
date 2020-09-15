import React from 'react';
import { Card } from 'antd';

function FinalPublishArticle(props) {
  /* ************************************** 
                state start 
  **************************************** */

  /* ************************************** 
                state end 
  **************************************** */
 
  /* ************************************** 
                func start 
  **************************************** */

  /* ************************************** 
                func end 
  **************************************** */
 
  return (
    <Card title="文章预览">
      <div style={{display: 'flex'}}>
        <div 
          style={{
            flex: 1,
            overflowY: 'scroll', 
            height: '500px'
          }} 
          dangerouslySetInnerHTML={{__html: props.articleHTML}}
        >
        </div>
      </div>
    </Card>
  )
}

export default FinalPublishArticle;
