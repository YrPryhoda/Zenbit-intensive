import React, { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'
import { UnorderedListOutlined } from '@ant-design/icons';
import './sidebar.scss';

const Sidebar = ({
  match,
  onClickSidebar
}) => {
  const [category, setCategory] = useState('');
  useEffect(() => {
    setCategory(match.params.category)
  }, [match.params.category]);

  const { SubMenu } = Menu;
  const { Sider } = Layout;
  return (
    <Sider className="sidebar sidebar-sm" >
      <Menu mode="inline"
        className='side-menu'
        selectedKeys={[category]}
        defaultOpenKeys={['sub1']}
      >
        <SubMenu key="sub1"
          className='side-submenu'
          title={
            <span>
              <UnorderedListOutlined />
              Меню товаров
            </span>}>
          <Menu.Item key="1">
            <Link to='/category/1/computer_science'
              onClick={e => onClickSidebar('computer_science')}>
              Компьютерные технологии
          </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to='/category/2/web'
              onClick={e => onClickSidebar('web')}>
              Web разработки
          </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to='/category/3/css'
              onClick={e => onClickSidebar('css')}>
              HTML/CSS тематика
          </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to='/category/4/js'
              onClick={e => onClickSidebar('js')}>
              Мир JavaScript
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default Sidebar;
