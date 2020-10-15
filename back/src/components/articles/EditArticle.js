import React from 'react';
import WriteArticles from './WriteArticles';

function EditArticle() {
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
    <>
      <WriteArticles isEdit={true} defaultContent="<p>我是需要编辑的内容</p>"  />
    </>
  )
}

export default EditArticle;
