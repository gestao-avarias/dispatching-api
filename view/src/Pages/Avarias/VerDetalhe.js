import React from 'react';

import { Button, Descriptions } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { GET_AVARIA_BY_ID } from '../../api';
import { MinusCircleFilled, CheckCircleFilled } from '@ant-design/icons';

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
    })();
  }, [id]);

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
      <h2>Detalhes Avaria</h2>
      <Descriptions title={data?.nome}>
        <Descriptions.Item label="Técnico">
          {data?.nome_utilizador}
        </Descriptions.Item>

        <Descriptions.Item label="Antena">
          {data?.nome_antena}
        </Descriptions.Item>

        <Descriptions.Item label="Estado">
          {data?.status ? (
            <CheckCircleFilled style={{ color: '#55C937' }} />
          ) : (
            <MinusCircleFilled style={{ color: '#F70C37' }} />
          )}
        </Descriptions.Item>

        <Descriptions.Item label="Data Abertura">
          {data?.data_abertura
            ? new Date(data?.data_abertura * 1000)
                .toISOString()
                .slice(0, 16)
                .replace('T', ' ')
            : 'Não Definida'}
        </Descriptions.Item>

        <Descriptions.Item label="Data Conclusao">
          {data?.data_conclusao
            ? new Date(data?.data_conclusao * 1000)
                .toISOString()
                .slice(0, 16)
                .replace('T', ' ')
            : 'Não Definida'}
        </Descriptions.Item>

        <Descriptions.Item label="Detalhes">{data?.detalhe}</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default VerDetalhe;
