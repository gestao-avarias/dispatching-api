import React from 'react';
import { Button, Form, Input, Select, Descriptions, Table, Space } from 'antd';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  GET_ANTENA_BY_ID,
  DELETE_COMENTARIO,
  GET_ALL_COMENTARIO,
  GET_ALL_UTILIZADOR,
  CREATE_COMENTARIO,
} from '../../api';

const { Option } = Select;

const VerDetalhe = () => {
  const [data, setData] = React.useState(null);
  const [dataComentario, setDataComentario] = React.useState([]);
  const [dataUtilizador, setDataUtilizador] = React.useState([]);
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
      // console.log(json);
      setDataComentario(json);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const { url, options } = GET_ALL_UTILIZADOR();
      const response = await fetch(url, options);
      const json = await response.json();
      // if (!response.ok && json?.antenas?.length === 0) return null;

      setDataUtilizador(json.sort(compare));
    })();
  }, []);

  const navigate = useNavigate();
  const onFinish = async (values) => {
    const comentario = {
      ...values.comentario,
      id_antena: +id,
    };

    const { url, options } = CREATE_COMENTARIO(comentario);
    const res = await fetch(url, options);

    // if (!response.ok && json?.antenas?.length === 0) return null;
    // console.log(json);
    setDataComentario([...dataComentario, comentario]);
  };

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
      <h2>Detalhes Antena</h2>
      <Descriptions title={data?.nome}>
        <Descriptions.Item label="Longitude">
          {data?.longitude}
        </Descriptions.Item>
        <Descriptions.Item label="Latitude">{data?.latitude}</Descriptions.Item>
      </Descriptions>

      <h3 style={{ marginTop: '20px' }}>Comentários:</h3>
      <Form layout="vertical" name="nest-messages" onFinish={onFinish}>
        <Form.Item
          name={['comentario', 'id_utilizador']}
          label="Técnico"
          rules={[{ required: true }]}
        >
          <Select placeholder="Selecionar Técnico">
            {dataUtilizador.map((item) => (
              <Option key={item.id} value={item.id}>
                {item.nome}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name={['comentario', 'conteudo']}
          label="Detalhes"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Criar Comentário
          </Button>
        </Form.Item>

        <Table columns={columns} dataSource={dataComentario} rowKey="id" />
      </Form>
    </div>
  );
};

export default VerDetalhe;
