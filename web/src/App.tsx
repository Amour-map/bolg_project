import React from 'react';
import { Route, withRouter } from "react-router-dom";
import { Layout } from 'antd';
import Index from "./pages/Index";
import HeaderLayout from "./pages/HeaderLayout";
import ContentLayout from "./pages/ContentLayout";
// import FooterLayout from "./pages/FooterLayout";
import './App.css';

function App(props:any) {
  return (
    <div id="App">
      <Route path="/index" component={Index} />
      {
        props.location.pathname !== "/index" ? (<Layout>
          <HeaderLayout />
          <ContentLayout />
        </Layout>) : ""
      }
    </div>
  );
}

export default withRouter(App);
