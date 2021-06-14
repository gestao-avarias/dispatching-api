import React from 'react';

import { Form, Input, Select, InputNumber, Button, DatePicker } from 'antd';
import { GET_AVARIA_BY_ID, UPDATE_AVARIA } from '../../api';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { CREATE_AVARIA, GET_ALL_ANTENA, GET_ALL_UTILIZADOR } from '../../api';
const { Option } = Select;
// const validateMessages = {
//   required: '${label} is required!',
//   types: {
//     email: '${label} is not a valid email!',
//     number: '${label} is not a valid number!',
//   },
//   number: {
//     range: '${label} must be between ${min} and ${max}',
//   },
// };

const Editar = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [dataAntena, setDataAntena] = React.useState([]);
  const [dataUtilizador, setDataUtilizador] = React.useState([]);
  const onFinish = async (values) => {
    const { url, options } = UPDATE_AVARIA(values.avaria);
    await fetch(url, options);
    navigate('/avarias');
  };

  function compare(a, b) {
    if (a.nome < b.nome) {
      return -1;
    }
    if (a.nome > b.nome) {
      return 1;
    }
    return 0;
  }

  React.useEffect(() => {
    (async () => {
      const { url, options } = GET_ALL_ANTENA();
      const response = await fetch(url, options);
      const json = await response.json();
      // if (!response.ok && json?.antenas?.length === 0) return null;

      setDataAntena(json.sort(compare));
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
  return (
    <div>
      <Link to="/avarias">
        <Button
          style={{ marginBottom: '20px' }}
          type="primary"
          htmlType="submit"
        >
          Lista de Avarias
        </Button>
      </Link>

      <Form
        // {...layout}
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}
        // validateMessages={validateMessages}
      >
        <Form.Item
          name={['avaria', 'nome']}
          label="Identificador"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={['avaria', 'id_utilizador']}
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
          name={['avaria', 'id_antena']}
          label="Antena"
          rules={[{ required: true }]}
        >
          <Select placeholder="Selecionar Antena">
            {dataAntena.map((item) => (
              <Option key={item.id} value={item.id}>
                {item.nome}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name={['avaria', 'status']}
          label="Estado"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={['avaria', 'data_abertura']}
          label="Data Abertura"
          rules={[{ required: true }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          name={['avaria', 'detalhe']}
          label="Detalhes"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Atualizar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Editar;
