import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CriarAntena from './Antenas/Criar';
import ListaAntena from './Antenas/Lista';
import VerDetalheAntena from './Antenas/VerDetalhe';
import EditarAntena from './Antenas/Editar';

const AntenasPage = () => {
  return (
    <Routes>
      <Route path="/" element={<ListaAntena />} />
      <Route path="/:id" element={<VerDetalheAntena />} />
      <Route path="/:id/editar" element={<EditarAntena />} />
      <Route path="/criar" element={<CriarAntena />} />
    </Routes>
  );
};

export default AntenasPage;
