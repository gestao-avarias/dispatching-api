import React from 'react';

import { Button, Descriptions } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { GET_ANTENA_BY_ID } from '../../api';

const VerDetalhe = () => {
  const [data, setData] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    (async () => {
      const { url, options } = GET_ANTENA_BY_ID(id);
      const response = await fetch(url, options);
      const json = await response.json();
      // if (!response.ok && json?.antenas?.length === 0) return null;

      setData(json);

      console.log(data);
    })();
  }, []);
  return (
    <div>
      <Link to={`/antenas`}>
        <Button
          style={{ marginBottom: '20px' }}
          type="primary"
          htmlType="submit"
        >
          Lista de Antenas
        </Button>
      </Link>
      <Descriptions title={data?.nome}>
        <Descriptions.Item label="Longitude">
          {data?.longitude}
        </Descriptions.Item>
        <Descriptions.Item label="Latitude">{data?.latitude}</Descriptions.Item>
      </Descriptions>
      ,
    </div>
  );
};

export default VerDetalhe;
