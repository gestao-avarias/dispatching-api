import React from 'react';
import { Image } from 'antd';

import { GET_ALL_ANTENA } from '../api';

import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import logo from '../images/dispatch.png';

import { Link } from 'react-router-dom';
import coracao from '../Assets/IconHeart.png';

import 'leaflet/dist/leaflet.css';
const HomePage = () => {
  const [data, setData] = React.useState(null);
  function getDirectionsGoogle(coordinates) {
    const [long, lat] = coordinates;
    return `https://www.google.com/maps/dir/?api=1&origin=Current+Location&destination=${long},${lat}`;
  }

  function getIcon() {
    const icone = {
      iconAnchor: [13, 41],
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      iconSize: [25, 41],
    };

    return L.icon(icone);
  }

  React.useEffect(() => {
    (async () => {
      const { url, options } = GET_ALL_ANTENA();

      const response = await fetch(url, options);

      const json = await response.json();

      if (!response.ok && json?.antenas?.length === 0) return null;

      setData(json);
    })();
  }, []);
  return (
    <MapContainer
      style={{ height: 'calc(100vh - 64px)' }}
      center={[40.38, -7.8671]}
      zoom={6}
      minZoom={6}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {console.log(data)}

      {data &&
        data?.map(({ id, nome, latitude, longitude }) => {
          return (
            <Marker icon={getIcon()} key={id} position={[latitude, longitude]}>
              <Popup>
                <h2>{nome}</h2>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={getDirectionsGoogle([latitude, longitude])}
                >
                  Navegar
                </a>
                <p>{[latitude + ', ' + longitude]}</p>
                <nav>
                  <Link to={`/antenas/${id}/editar`}>Editar</Link> |{' '}
                  <Link to={`/antenas/${id}`}>Detalhes</Link>
                </nav>
              </Popup>
            </Marker>
          );
        })}
    </MapContainer>
  );
};

export default HomePage;
