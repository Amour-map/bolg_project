import React from 'react';
import { Route } from 'react-router-dom';
// 引入app样式
import './app.css';
// 引入Home组件
import Home from './pages/Home';
// 引入登录组件
import Login from './pages/Login';

function App(props) {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </div>
  );
}

export default App;
