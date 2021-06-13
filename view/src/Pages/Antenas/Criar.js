import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import { Link } from 'react-router-dom';

// const layout = {
//   labelCol: { span: 2 },
//   wrapperCol: { span: 16 },
// };

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const Criar = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  /* eslint-enable no-template-curly-in-string */

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

      <Form
        // {...layout}
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={['antena', 'nome']}
          label="Nome"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={['antena', 'latitude']}
          label="Latitude"
          rules={[{ required: true }, { type: 'number', min: -90, max: 90 }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name={['antena', 'longitude']}
          label="Longitude"
          rules={[{ required: true }, { type: 'number', min: -90, max: 90 }]}
        >
          <InputNumber />
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
