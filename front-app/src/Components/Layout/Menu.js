import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const MenuComponent = () => (
  <Menu theme="dark" mode="horizontal">
    <Menu.Item key="1">
      <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/users">Users</Link>
    </Menu.Item>
  </Menu>
);

export default MenuComponent;
