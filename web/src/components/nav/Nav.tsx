import React from "react";
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import "./nav.css";

export interface MenuInfo {
  key: React.Key;
  keyPath: React.Key[];
  item: React.ReactInstance;
  domEvent: React.MouseEvent<HTMLElement>;
}

export declare type MenuClickEventHandler = (info: MenuInfo) => void;

declare type MenuMode = 'horizontal' | 'vertical' | 'vertical-left' | 'vertical-right' | 'inline';

interface FieldType {
  key: string;
  icon?: any;
  value: string;
}

interface NavProps {
  fields: FieldType[];
  onClick?: MenuClickEventHandler;
  selectedKeys?: string[];
  mode?: MenuMode;
}

const Nav:React.FC<NavProps> = (props) => {
  return (
    <>
      <Menu 
      selectedKeys={props.selectedKeys} 
      mode={props.mode}
      >
        {
          props.fields.map((field) => (
            <Menu.Item key={field.key} icon={field.icon}>
              <Link to={`/${field.key}`}>{field.value}</Link>
            </Menu.Item>
          ))
        }
      </Menu>
    </>
  )
}

export default Nav;
