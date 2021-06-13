import React from 'react';

export const DataContext = React.createContext();

export const DataStorage = ({ children }) => {
  const [optionMenu, setOptionMenu] = React.useState('');
  return (
    <DataContext.Provider value={{ optionMenu, setOptionMenu }}>
      {children}
    </DataContext.Provider>
  );
};
