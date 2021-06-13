import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CriarComentario from './Comentarios/Criar';
import ListaComentario from './Comentarios/Lista';

const ComentariosPage = () => {
  return (
    <Routes>
      <Route path="/" element={<ListaComentario />} />
      <Route path="/criar" element={<CriarComentario />} />
    </Routes>
  );
};

export default ComentariosPage;
