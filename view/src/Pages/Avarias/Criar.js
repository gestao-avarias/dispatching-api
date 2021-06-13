import React from 'react';
import { Form, Input, InputNumber, Select, Button, DatePicker } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { CREATE_AVARIA } from '../../api';
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

const Criar = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log(values.avaria);
    //const { url, options } = CREATE_AVARIA(values.avaria);
    //await fetch(url, options);
    //navigate('/avarias');
    const { Option } = Select;
  };

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
            <Option value="Zhejiang">Tiago</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name={['avaria', 'id_antena']}
          label="Antena"
          rules={[{ required: true }]}
        >
          <Select placeholder="Selecionar Antena">
            <Option value="Zhejiang">maia</Option>
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
            Criar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Criar;
