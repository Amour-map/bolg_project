import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { Space, Row, Col, Button, Avatar } from "antd";
import "./Index.css";

interface props extends RouteComponentProps {}

const Index:React.FC = (props) => {
  return (
    <div className="index">
      <video 
        autoPlay={true} 
        muted={true} 
        loop={true} 
        id="bgvid"
      >
        <source src={require("../assets/polina.webm")} type="video/webm" />
        <source src={require("../assets/polina.mp4")} type="video/mp4" />
      </video>
      <Row id="index-content">
        <Col span={24}>
          <Avatar 
            size={80} 
            alt="图片不见了" 
            src={require("../assets/logo.jpg")} 
            style={{position: "relative", bottom: "3px"}} 
          />
        </Col>
        <Col span={24}>
          <Space>
            <Link to="/articles">
              <Button type="text" style={{color: "#ff4081", fontSize: "18px"}} size="large" ghost>文章</Button>
            </Link>
            <Link to="/project">
              <Button type="text" style={{color: "#ff4081", fontSize: "18px"}} size="large" ghost>项目</Button>
            </Link>
            <Link to="/resume">
              <Button type="text" style={{color: "#ff4081", fontSize: "18px"}} size="large" ghost>简历</Button>
            </Link>
          </Space>
        </Col>
      </Row>
    </div>
  );
}

export default Index;
