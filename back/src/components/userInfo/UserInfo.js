import React, { useState } from 'react';
import { Modal, Avatar, Popover, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function UserInfo() {
  // 右侧注销账号的弹出框状态
  const [distroyAccountVisable, setDistroyAccountVisable] = useState(false);
  // 右侧登出账号的弹出框状态
  // const [logoutAccountVisable, setLogoutAccountVisable] = useState(false);
  return (
    <Popover 
      placement="bottomRight" 
      content={
        <div>
          <div>用户信息:</div>
          <div style={{display: 'flex'}}>
            <span style={{flex: '1', textAlign: 'left'}}>用户名:</span>
            <span style={{flex: '1', textAlign: 'right'}}>Amour</span>
          </div>
          <div style={{display: 'flex'}}>
            <span style={{flex: '1', textAlign: 'left'}}>邮箱:</span>
            <span style={{flex: '1', textAlign: 'right'}}>1601227355@qq.com</span>
          </div>
          <div style={{display: 'flex'}}>
            <span style={{flex: '1'}}>
              <Button onClick={() => setDistroyAccountVisable(true)}>注销</Button>
            </span>
            <span style={{flex: '1'}}>
              <Button>重置密码</Button>
            </span>
          </div>
          <Modal
            title="用户注销"
            visible={distroyAccountVisable}
            onOk={() => setDistroyAccountVisable(false)}
            onCancel={() => setDistroyAccountVisable(false)}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
          {/* <Modal
            title="用户密码重置"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal> */}
        </div>
      } 
      trigger="click"
    >
      <Avatar 
        className="avatar-container"
        icon={<UserOutlined />} 
      />
    </Popover>
  )
}

export default UserInfo;
