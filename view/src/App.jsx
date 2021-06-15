import React from 'react';
import CustomHeader from './Components/CustomHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AntenasPage from './Pages/AntenasPage';
import AvariasPage from './Pages/AvariasPage';

import { Layout } from 'antd';
import CustomGrid from './Components/CustomGrid';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <CustomHeader />
        </Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="antenas/*" element={<AntenasPage />} />
          <Route path="avarias/*" element={<AvariasPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
