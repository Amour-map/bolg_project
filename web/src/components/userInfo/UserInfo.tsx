import React from "react";
import { Card, Row, Col, Avatar, Tag } from "antd"

const UserInfo:React.FC = () => {
  const user = {
    username: "gkxgkxgkx",
    imgSrc: require("../../assets/logo.jpg"),
    level: "222级",
    clickTime: 20120,
    blogsCount: 25,
    activeLevel: 359,
    coins: 1524,
    skill: ["Javascript", "HTML5", "CSS3", "React.js", "Vue.js", "Webpack", "Git", "Linux", "web前端开发", "ES6"]
  }
  return (
    <>
      <Card title="用户信息">
        用户头像： 
        <Avatar 
          size={60} 
          alt="图片不见了" 
          src={user.imgSrc} 
          style={{position: "relative", bottom: "3px"}} 
        />
        <span>修改</span>
        <Row >
          <Col span="12">
            用户名： {user.username}
          </Col>
          <Col span="12">
            用户等级： {user.level}
          </Col>
        </Row>
        <Row >
          <Col span="12">
            金币： {user.coins}
          </Col>
          <Col span="12">
            活跃度： {user.activeLevel}
          </Col>
        </Row>
        <Row >
          <Col span="12">
            博客数量： {user.blogsCount}
          </Col>
          <Col span="12">
            点击次数： {user.clickTime  }
          </Col>
        </Row>
        <Row >
          <Col span="24">
            技能树： {user.skill.map((tag, index) => (
            <Tag key={index} color="#009688" style={{margin: "10px 5px", fontSize: "14px"}}>
              <a href="http://www.baidu.com">{tag}</a>
            </Tag>
          ))}
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default UserInfo;
