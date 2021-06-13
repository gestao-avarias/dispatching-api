import React from 'react';

import { Button, Descriptions } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { GET_AVARIA_BY_ID } from '../../api';

const VerDetalhe = () => {
  const [data, setData] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    (async () => {
      const { url, options } = GET_AVARIA_BY_ID(id);
      const response = await fetch(url, options);
      const json = await response.json();
      // if (!response.ok && json?.antenas?.length === 0) return null;

      setData(json);

      console.log(data);
    })();
  }, []);
  return (
    <div>
      <Link to={`/avarias`}>
        <Button
          style={{ marginBottom: '20px' }}
          type="primary"
          htmlType="submit"
        >
          Lista de Avarias
        </Button>
      </Link>
      <Descriptions title={data?.nome}>
        <Descriptions.Item label="Técnico"> {data?.id_utilizador}</Descriptions.Item>
         
        <Descriptions.Item label="Antena">{data?.id_antena}</Descriptions.Item>

        <Descriptions.Item label="Estado">{data?.status}</Descriptions.Item>

        <Descriptions.Item label="Data Abertura">{data?.data_abertura}</Descriptions.Item>

        <Descriptions.Item label="Data Conclusao">{data?.data_conclusao}</Descriptions.Item>

        <Descriptions.Item label="Detalhes">{data?.detalhe}</Descriptions.Item>
      </Descriptions>
      ,
    </div>
  );
};

export default VerDetalhe;