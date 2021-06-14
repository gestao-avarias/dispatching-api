import React from 'react';
import { Image } from 'antd';

import logo from '../images/dispatch.png';

import 'leaflet/dist/leaflet.css';
const HomePage = () => {
  return (
    <div>
      <Image preview={false} src={logo} />
    </div>
  );
};

export default HomePage;
