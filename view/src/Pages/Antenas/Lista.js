import React from 'react';
import { Table, Button, Space } from 'antd';
import { Link } from 'react-router-dom';
import { GET_ALL_ANTENA, DELETE_ANTENA } from '../../api';

const Lista = () => {
  const [data, setData] = React.useState(null);

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
      render: (text) => {
        return text;
      },
    },
    {
      title: 'Latitude',
      dataIndex: 'latitude',
      key: 'latitude',
    },
    {
      title: 'Longitude',
      dataIndex: 'longitude',
      key: 'longitude',
    },

    {
      title: 'Action',
      key: 'action',
      render: (item) => {
        return (
          <Space size="middle">
            <Link to={`/antenas/${item.id}`}>Detalhes</Link>
            <Link to={`/antenas/${item.id}/editar`}>Editar</Link>

            <Link to="" onClick={() => removerAntena(item.id)}>
              Apagar
            </Link>
          </Space>
        );
      },
    },
  ];

  function compare(a, b) {
    if (a.nome < b.nome) {
      return -1;
    }
    if (a.nome > b.nome) {
      return 1;
    }
    return 0;
  }

  async function removerAntena(id) {
    setData(data?.filter((item) => item.id !== id).sort(compare));
    const { url, options } = DELETE_ANTENA(id);
    await fetch(url, options);
  }

  React.useEffect(() => {
    (async () => {
      const { url, options } = GET_ALL_ANTENA();
      const response = await fetch(url, options);
      const json = await response.json();
      // if (!response.ok && json?.antenas?.length === 0) return null;

      setData(json.sort(compare));
    })();
  }, []);
  return (
    <div>
      <Link to={`/antenas/criar`}>
        <Button
          style={{ marginBottom: '20px' }}
          type="primary"
          htmlType="submit"
        >
          Criar Antena
        </Button>
      </Link>
      <Table columns={columns} dataSource={data} rowKey="id" />
    </div>
  );
};

export default Lista;
