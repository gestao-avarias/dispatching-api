import React from 'react';
import CustomHeader from './Components/CustomHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AntenasPage from './Pages/AntenasPage';
import AvariasPage from './Pages/AvariasPage';
import ComentariosPage from './Pages/ComentariosPage';

import { Layout } from 'antd';
import CustomGrid from './Components/CustomGrid';

// const { Content } = Layout;

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <CustomHeader />
        </Layout>
        <CustomGrid style={{ padding: '0 50px' }}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="antenas/*" element={<AntenasPage />} />
            <Route path="avarias/*" element={<AvariasPage />} />
            <Route path="comentarios/*" element={<ComentariosPage />} />
          </Routes>
        </CustomGrid>
      </BrowserRouter>
    </div>
  );
}

export default App;
