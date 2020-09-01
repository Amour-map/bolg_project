import React from 'react';
import { Route } from "react-router-dom";
import { Layout } from 'antd';
import Profiles from "../components/profiles/Profiles";
import Articles from "../components/articles/Articles";
import Archive from "../components/archive/Archive";
import Project from "../components/project/Project";
import TimelineCmp from "../components/timeline/TimelineCmp";
import Message from "../components/message/Message";
import Resume from "../components/resume/Resume";
import UserInfo from "../components/userInfo/UserInfo";
import WriteBlog from "../components/wirteBlog/WriteBlog";

import "../assets/css/content.css";

const { Content } = Layout;

const ContentLayout:React.FC = () => {
  return (
    <>
      <Content>
        <div id="main">
          <Route path="/articles" component={Articles} />
          <Route path="/archive" component={Archive} />
          <Route path="/timeline" component={TimelineCmp} />
          <Route path="/project" component={Project} />
          <Route path="/message" component={Message} />
          <Route path="/profile" component={UserInfo} />
          <Route path="/writeBlog" component={WriteBlog} />
          <Route path="/resume" component={Resume} />
        </div>
        <Profiles />
      </Content>
    </>
  )
}

export default ContentLayout;
