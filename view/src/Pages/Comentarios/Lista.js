import React from 'react';
import { Table, Button, Space } from 'antd';
import { Link } from 'react-router-dom';
import { GET_ALL_COMENTARIO, DELETE_COMENTARIO } from '../../api';

const Lista = () => {
  const [data, setData] = React.useState(null);

  const columns = [
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
      title: 'Conteudo',
      dataIndex: 'conteudo',
      key: 'conteudo',
    },
    {
      title: 'Data Criação',
      dataIndex: 'data_criacao',
      key: 'data_criacao',
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
    setData(data?.filter((item) => item.id !== id).sort(compare));
    const { url, options } = DELETE_COMENTARIO(id);
    await fetch(url, options);
  }

  React.useEffect(() => {
    (async () => {
      const { url, options } = GET_ALL_COMENTARIO();
      const response = await fetch(url, options);
      const json = await response.json();
      // if (!response.ok && json?.antenas?.length === 0) return null;
      console.log(json)
      //setData(json);
    })();
  }, []);
  return (
    <div>
      <Link to={`/comentarios/criar`}>
        <Button
          style={{ marginBottom: '20px' }}
          type="primary"
          htmlType="submit"
        >
          Criar Comentario
        </Button>
      </Link>
      <Table columns={columns} dataSource={data} rowKey="id" />
    </div>
  );
};

export default Lista;
