import React from "react";
import { Card, Col, Row } from "antd";

const Project:React.FC = () => {
  const data = [
    {
      title: "共克时艰！150+ 本技术类常用电子书开源了",
      sub_title: "免费下载，包括 前端、后端、数据结构与算法、计算机基础、设计模式、数据库等书籍",
      watcher: 2000,
      message: 50,
      love: 3,
      time: "2020-02-09 11:54:36"
    },
    {
      title: "共克时艰！150+ 本技术类常用电子书开源了",
      sub_title: "免费下载，包括 前端、后端、数据结构与算法、计算机基础、设计模式、数据库等书籍",
      watcher: 2000,
      message: 50,
      love: 3,
      time: "2020-02-09 11:54:36"
    },
    {
      title: "共克时艰！150+ 本技术类常用电子书开源了",
      sub_title: "免费下载，包括 前端、后端、数据结构与算法、计算机基础、设计模式、数据库等书籍",
      watcher: 2000,
      message: 50,
      love: 3,
      time: "2020-02-09 11:54:36"
    },
    {
      title: "共克时艰！150+ 本技术类常用电子书开源了",
      sub_title: "免费下载，包括 前端、后端、数据结构与算法、计算机基础、设计模式、数据库等书籍",
      watcher: 2000,
      message: 50,
      love: 3,
      time: "2020-02-09 11:54:36"
    },
    {
      title: "共克时艰！150+ 本技术类常用电子书开源了",
      sub_title: "免费下载，包括 前端、后端、数据结构与算法、计算机基础、设计模式、数据库等书籍",
      watcher: 2000,
      message: 50,
      love: 3,
      time: "2020-02-09 11:54:36"
    },
    {
      title: "共克时艰！150+ 本技术类常用电子书开源了",
      sub_title: "免费下载，包括 前端、后端、数据结构与算法、计算机基础、设计模式、数据库等书籍",
      watcher: 2000,
      message: 50,
      love: 3,
      time: "2020-02-09 11:54:36"
    },
    {
      title: "共克时艰！150+ 本技术类常用电子书开源了",
      sub_title: "免费下载，包括 前端、后端、数据结构与算法、计算机基础、设计模式、数据库等书籍",
      watcher: 2000,
      message: 50,
      love: 3,
      time: "2020-02-09 11:54:36"
    },
    {
      title: "共克时艰！150+ 本技术类常用电子书开源了",
      sub_title: "免费下载，包括 前端、后端、数据结构与算法、计算机基础、设计模式、数据库等书籍",
      watcher: 2000,
      message: 50,
      love: 3,
      time: "2020-02-09 11:54:36"
    },
    {
      title: "共克时艰！150+ 本技术类常用电子书开源了",
      sub_title: "免费下载，包括 前端、后端、数据结构与算法、计算机基础、设计模式、数据库等书籍",
      watcher: 2000,
      message: 50,
      love: 3,
      time: "2020-02-09 11:54:36"
    },
  ]
  return (
    <div>
      {
        data.map(item => (
            <Row gutter={24} style={{margin: "10px 0"}}>
              <Col span={12}>
                <Card bordered>
                  Card content
                </Card>
              </Col>
              <Col span={12}>
                <Card bordered>
                  Card content
                </Card>
              </Col>
            </Row>
          )
        )
      }
    </div>
  );
}

export default Project;
