import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Criar from './Antenas/Criar';
import Lista from './Antenas/Lista';
import VerDetalhe from './Antenas/VerDetalhe';
import Editar from './Antenas/Editar';

const AntenasPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Lista />} />
      <Route path="/:id" element={<VerDetalhe />} />
      <Route path="/:id/editar" element={<Editar />} />
      <Route path="/criar" element={<Criar />} />
    </Routes>
  );
};

export default AntenasPage;
