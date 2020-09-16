import React, { useState, useEffect } from 'react';
import { Table, Space, Button, Modal, message } from 'antd';
import { DeleteOutlined, EditOutlined  } from "@ant-design/icons";
import axios from 'axios';

function ArticlesList(props) {
  /* ************************************** 
                state start 
  **************************************** */
  // 当前点击行文章id
  const [currentArticleId, setCurrentArticleId] = useState("");
  // 当前文章列表数据 
  const [articlesListData, setArticlesListData] = useState([]);
  // 当前是否loading
  const [loading, setLoading] = useState(false);
  // 删除确认框是否显示
  const [deleteModalVisable, setDeleteModalVisable] = useState(false);
  /* ************************************** 
                state end 
  **************************************** */
 /* ************************************** 
                func start 
  **************************************** */
  // 获取当前文章列表数据 
  useEffect(() => {
    getArticlesList();
  }, []);
  // 获取文章数据方法
  const getArticlesList = async () => {
    setLoading(true);
    let res = await axios.get('/api/article/allarticles');
    if(res.data.success) {
      setLoading(false);
      res.data.data.forEach(item => {
        item.key = item._id;
      })
      setArticlesListData(res.data.data);
    }
  } 
  // 删除文章数据的方法
  const deleteSingalArticle = async () => {
    let res = await axios.get(`/api/article/delete/${currentArticleId}`);
    if(res.data.success) {
      message.success('删除文章成功');
      // 刷新列表
      getArticlesList();
      setDeleteModalVisable(false);
    } else {
      message.error('删除文章失败，请刷新后重试!');
    }
  }
  /* ************************************** 
                func end 
  **************************************** */
  // 定义列
  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: '副标题',
      dataIndex: 'sub_title',
      key: 'sub_title',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space>
          <Button 
            type="primary" 
            icon={<EditOutlined />}>
            编辑
          </Button>
          <Button 
            type="primary" 
            icon={<DeleteOutlined />} danger
            onClick={() => {setDeleteModalVisable(true)}}>
            删除
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table 
        loading={loading} 
        columns={columns} 
        dataSource={articlesListData}
        onRow={record => {
          return {
            onClick: event => {setCurrentArticleId(record.key)}, // 点击行
          };
        }}
      />
      <Modal 
        okText="确认"
        cancelText="取消"
        title="是否删除" 
        visible={deleteModalVisable}
        onOk={deleteSingalArticle}
        onCancel={() => {setDeleteModalVisable(false)}}
      >
        确认删除？
      </Modal>
    </div>
  )
}

export default ArticlesList;
