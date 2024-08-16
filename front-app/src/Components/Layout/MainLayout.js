import React from 'react';
import { Layout } from 'antd';
import MenuComponent from './Menu';
import Logout from '../Auth/Logout';

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }) => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <MenuComponent />
      <Logout />
    </Header>
    <Content style={{ padding: '0 50px', marginTop: '64px' }}>
      <div className="site-layout-content">{children}</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2024 Created by You</Footer>
  </Layout>
);

export default MainLayout;
