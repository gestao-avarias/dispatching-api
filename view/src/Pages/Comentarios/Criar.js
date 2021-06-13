import React from 'react';
import { Form, Input, InputNumber, Button, DatePicker } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { CREATE_COMENTARIO } from '../../api';

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
    console.log(values.comentario)
    //const { url, options } = CREATE_AVARIA(values.avaria);
    //await fetch(url, options);
    //navigate('/avarias');
  };

  return (
    <div>
      <Link to="/comentarios">
        <Button
          style={{ marginBottom: '20px' }}
          type="primary"
          htmlType="submit"
        >
          Lista de Comentários
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
          name={['comentario', 'id_utilizador']}
          label="Técnico"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={['comentario', 'id_antena']}
          label="Antena"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={['comentario', 'conteudo']}
          label="Antena"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={['comentario', 'data_criacao']}
          label="Data Criação"
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
