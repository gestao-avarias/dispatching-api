import React from 'react';

import style from './CustomGrid.module.scss';

const CustomGrid = ({ children, styleProps }) => {
  return (
    <div className={style.containerGrid} style={{ ...styleProps }}>
      {children}
    </div>
  );
};

export default CustomGrid;
