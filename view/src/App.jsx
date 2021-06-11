import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AntenasPage from './Pages/AntenasPage';
import AvariasPage from './Pages/AvariasPage';
import ComentariosPage from './Pages/ComentariosPage';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Sider } = Layout;

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
        <Content>
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
