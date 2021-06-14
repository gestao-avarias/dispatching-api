import React from 'react';

import { Button, Descriptions, Table, Space } from 'antd';
import { Link, useParams } from 'react-router-dom';
import {
  GET_ANTENA_BY_ID,
  DELETE_COMENTARIO,
  GET_ALL_COMENTARIO,
} from '../../api';

const VerDetalhe = () => {
  const [data, setData] = React.useState(null);
  const [dataComentario, setDataComentario] = React.useState(null);

  const { id } = useParams();

  const columns = [
    {
      title: 'Técnico',
      dataIndex: 'nome_utilizador',
      key: 'nome_utilizador',
    },

    {
      title: 'Conteudo',
      dataIndex: 'conteudo',
      key: 'conteudo',
    },
    {
      title: 'Data Criação',
      dataIndex: 'data_criacao',
      key: 'data_criacao',
      render: (item) => {
        if (item) {
          return new Date(item * 1000)
            .toISOString()
            .slice(0, 16)
            .replace('T', ' ');
        }
      },
    },

    {
      title: 'Action',
      key: 'action',
      render: (item) => {
        return (
          <Space size="middle">
            <Link to="" onClick={() => removerComentario(item.id)}>
              Apagar
            </Link>
          </Space>
        );
      },
    },
  ];
  React.useEffect(() => {
    (async () => {
      const { url, options } = GET_ANTENA_BY_ID(id);
      const response = await fetch(url, options);
      const json = await response.json();
      // if (!response.ok && json?.antenas?.length === 0) return null;

      setData(json);
    })();
  }, []);

  function compare(a, b) {
    if (a.nome < b.nome) {
      return -1;
    }
    if (a.nome > b.nome) {
      return 1;
    }
    return 0;
  }

  async function removerComentario(id) {
    setDataComentario(
      dataComentario?.filter((item) => item.id !== id).sort(compare),
    );
    const { url, options } = DELETE_COMENTARIO(id);
    await fetch(url, options);
  }

  React.useEffect(() => {
    (async () => {
      const { url, options } = GET_ALL_COMENTARIO(id);
      const response = await fetch(url, options);
      const json = await response.json();
      // if (!response.ok && json?.antenas?.length === 0) return null;
      console.log(json);
      setDataComentario(json);
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

      <h3 style={{ marginTop: '20px' }}>Comentários</h3>

      <Table columns={columns} dataSource={dataComentario} rowKey="id" />
    </div>
  );
};

export default VerDetalhe;
