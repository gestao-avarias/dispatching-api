import React from 'react';
import { Image } from 'antd';

import logo from '../images/dispatch.png';

import 'leaflet/dist/leaflet.css';
const HomePage = () => {
  return (
    <div>
      <Image src={logo} rounded />
    </div>
  );
};

export default HomePage;
