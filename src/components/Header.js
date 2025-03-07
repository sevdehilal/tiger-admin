import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import logo from "../img/logo.png"; // Logo görselini import ediyoruz
import { HomeOutlined, ContactsOutlined, InfoCircleOutlined } from '@ant-design/icons';

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '150px', padding: '0 100px', backgroundColor: '#2A2A2C' }}>
      {/* Logo ve başlık kısmı */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src={logo}
          alt="Logo" 
          style={{ width: '240px', height: '150px', marginRight: '20px' }} // Logonun boyutunu 150px olarak ayarladık
        />
        <div style={{ color: 'white', fontSize: '32px' }}> {/* Başlık yazısının font boyutunu büyüttük */}
          <strong>Tiger Araç Kiralama</strong>
        </div>
      </div>
      
      {/* Menüler */}
      <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px', fontSize: '18px'  , display: 'flex' , backgroundColor: '#2A2A2C'
}}> {/* Menü elemanlarının font boyutunu büyüttük */}
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Ana Sayfa</Link>
        </Menu.Item>
        <Menu.Item key="about" icon={<InfoCircleOutlined />}>
          <Link to="/about">Hakkımızda</Link>
        </Menu.Item>
        <Menu.Item key="contact" icon={<ContactsOutlined />}>
          <Link to="/contact">İletişim</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
