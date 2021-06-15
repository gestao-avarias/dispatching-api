import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CriarAntena from './Antenas/Criar';
import ListaAntena from './Antenas/Lista';
import VerDetalheAntena from './Antenas/VerDetalhe';
import EditarAntena from './Antenas/Editar';
import CustomGrid from '../Components/CustomGrid';

const AntenasPage = () => {
  return (
    <CustomGrid style={{ padding: '0 50px' }}>
      <Routes>
        <Route path="/" element={<ListaAntena />} />
        <Route path="/:id" element={<VerDetalheAntena />} />
        <Route path="/:id/editar" element={<EditarAntena />} />
        <Route path="/criar" element={<CriarAntena />} />
      </Routes>
    </CustomGrid>
  );
};

export default AntenasPage;
