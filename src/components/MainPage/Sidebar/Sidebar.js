import React from 'react'
import { Layout, Menu } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import './sidebar.scss';

const Sidebar = props => {
  const { SubMenu } = Menu;
  const { Sider } = Layout;

  return (
    <Sider className="sidebar sidebar-sm" >
      <Menu mode="inline"
        className='side-menu'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
      >
        <SubMenu key="sub1"
        className='side-submenu'
          title={
            <span> 
              <UnorderedListOutlined /> 
              Меню товаров
            </span>}>
          <Menu.Item key="1">Категория 1</Menu.Item>
          <Menu.Item key="2">Категория 2</Menu.Item>
          <Menu.Item key="3">Категория 3</Menu.Item>
          <Menu.Item key="4">Категория 4</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default Sidebar;
