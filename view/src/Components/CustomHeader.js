import React from 'react';
import { NavLink } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import CustomGrid from './CustomGrid';
// import { DataContext } from '../Context/DataContext';

const { Header } = Layout;

const CustomHeader = () => {
  // const { optionMenu } = React.useContext(DataContext);

  // const [opcaoMenuDefault, setOpcaoMenuDefault] = React.useState(optionMenu);

  // React.useEffect(() => console.log(optionMenu), [optionMenu]);
  return (
    <Header className="header">
      <CustomGrid styleProps={{ padding: 0 }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['']}>
          <Menu.Item key="antenas">
            <NavLink to="/antenas">Antenas</NavLink>
          </Menu.Item>
          <Menu.Item key="avarias">
            <NavLink to="/avarias">Avarias</NavLink>
          </Menu.Item>
          <Menu.Item key="comentarios">
            <NavLink to="/comentarios">Comentários</NavLink>
          </Menu.Item>
        </Menu>
      </CustomGrid>
    </Header>
  );
};

export default CustomHeader;
