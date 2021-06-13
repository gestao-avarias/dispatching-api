import React from 'react';
import CustomHeader from './Components/CustomHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AntenasPage from './Pages/AntenasPage';
import AvariasPage from './Pages/AvariasPage';
import ComentariosPage from './Pages/ComentariosPage';

import { DataStorage } from './Context/DataContext';

import { Layout } from 'antd';
import CustomGrid from './Components/CustomGrid';

// const { Content } = Layout;

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <NavLink to="/antenas">Antenas</NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/avarias">Avarias</NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to="/comentarios">Comentários</NavLink>
              </Menu.Item>
            </Menu>
          </Header>
        </Layout>
        <Content style={{ padding: '0 50px' }}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="antenas/*" element={<AntenasPage />} />
            <Route path="avarias/*" element={<AvariasPage />} />
            <Route path="comentarios/*" element={<ComentariosPage />} />
          </Routes>
        </Content>
      </BrowserRouter>
    </div>
  );
}

export default App;
