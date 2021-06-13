import React from 'react';
import { Table, Button, Space } from 'antd';
import { Link } from 'react-router-dom';
import { GET_ALL_AVARIA, DELETE_AVARIA } from '../../api';

const Lista = () => {
  const [data, setData] = React.useState(null);

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
      title: 'Técnico',
      dataIndex: 'id_utilizador',
      key: 'id_utilizador',
    },
    {
      title: 'Antena',
      dataIndex: 'id_antena',
      key: 'id_antena',
    },
    {
      title: 'Estado',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Data Abertura',
      dataIndex: 'data_abertura',
      key: 'data_abertura',
    },
    {
      title: 'Data Conclusão',
      dataIndex: 'data_conclusao',
      key: 'data_conclusao',
    },
    {
      title: 'Detalhes',
      dataIndex: 'detalhe',
      key: 'detalhe',
    },

    {
      title: 'Action',
      key: 'action',
      render: (item) => {
        return (
          <Space size="middle">
            <Link to={`/avarias/${item.id}`}>Detalhes</Link>
            <Link to={`/avarias/${item.id}/editar`}>Editar</Link>

            <Link to="" onClick={() => removerAvaria(item.id)}>
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

  async function removerAvaria(id) {
    setData(data?.filter((item) => item.id !== id).sort(compare));
    const { url, options } = DELETE_AVARIA(id);
    await fetch(url, options);
  }

  React.useEffect(() => {
    (async () => {
      const { url, options } = GET_ALL_AVARIA();
      const response = await fetch(url, options);
      const json = await response.json();
      // if (!response.ok && json?.antenas?.length === 0) return null;

      setData(json.sort(compare));
    })();
  }, []);
  return (
    <div>
      <Link to={`/avarias/criar`}>
        <Button
          style={{ marginBottom: '20px' }}
          type="primary"
          htmlType="submit"
        >
          Criar Avaria
        </Button>
      </Link>
      <Table columns={columns} dataSource={data} rowKey="id" />
    </div>
  );
};

export default Lista;
