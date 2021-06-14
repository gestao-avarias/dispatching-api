import React from 'react';
import Layout from 'antd/lib/layout/layout';
import { Image } from 'antd';
// import { MapContainer, TileLayer } from 'react-leaflet';

import logo from '../images/logo.jpeg';

import 'leaflet/dist/leaflet.css';
const HomePage = () => {
  return (
    <div>
      <Image src={logo} rounded />
    </div>

    // <Layout>
    //   <MapContainer
    //     style={{ height: 'calc(100vh - 64px)' }}
    //     center={[40.38, -7.8671]}
    //     zoom={6}
    //     minZoom={6}
    //   >
    //     <TileLayer
    //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //     />
    //   </MapContainer>
    // </Layout>
  );
};

export default HomePage;
