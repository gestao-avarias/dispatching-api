import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CriarAvaria from './Avarias/Criar';
import ListaAvaria from './Avarias/Lista';
import VerDetalheAvaria from './Avarias/VerDetalhe';
import EditarAvaria from './Avarias/Editar';

import CustomGrid from '../Components/CustomGrid';

const AvariasPage = () => {
  return (
    <CustomGrid style={{ padding: '0 50px' }}>
      <Routes>
        <Route path="/" element={<ListaAvaria />} />
        <Route path="/:id" element={<VerDetalheAvaria />} />
        <Route path="/:id/editar" element={<EditarAvaria />} />
        <Route path="/criar" element={<CriarAvaria />} />
      </Routes>
    </CustomGrid>
  );
};

export default AvariasPage;
