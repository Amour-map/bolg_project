import React from "react";
import { Avatar, Tag, Divider } from 'antd';
import "./profiles.css"

const Profiles:React.FC = () => {
  const userName ="gkxgkxgkx";
  const tags = [
    "数据结构",
    "算法",
    "ES6",
    "React.js",
    "Vue",
    "CSS",
    "HTML",
    "Webpack",
    "Typescript"
  ]
  return (
    <div className="profiles">
      <Avatar 
        size={100} 
        alt="图片不见了" 
        src={require("../../assets/logo.jpg")} 
        style={{margin: "20px 0"}}
      />
      <div>
        {userName}
      </div>
      <Divider />
      <div>
        <h4 style={{color: "#969696", fontWeight: 700}}>技能树</h4>
        {
          tags.map((tag, index) => (
            <Tag key={index} color="#009688" style={{margin: "10px 5px", fontSize: "14px"}}>
              <a href="http://www.baidu.com">{tag}</a>
            </Tag>
          ))
        }
      </div>
      <Divider />
      <div>
        <h4 style={{color: "#969696", fontWeight: 700}}>技术交流</h4>
      </div>
    </div>
  )
}

export default Profiles;
