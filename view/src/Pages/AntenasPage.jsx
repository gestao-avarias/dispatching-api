import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Criar from './Antenas/Criar';
import Lista from './Antenas/Lista';

const AntenasPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Lista />} />
      {/* <Route path="/:id/*" element={<AntenaInfo />} /> */}
      <Route path="/criar" element={<Criar />} />
    </Routes>
  );
};

export default AntenasPage;
