import React from 'react';
import { Button } from 'antd';

function Home(props) {
  console.log(props);
  return (
    <div className="Home">
      <Button>我是主页</Button>
    </div>
  )
}

export default Home;
