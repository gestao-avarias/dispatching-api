import React from 'react';

import { Form, Input, InputNumber, Button } from 'antd';

import { Link, useParams, useNavigate } from 'react-router-dom';
import { UPDATE_ANTENA, GET_ANTENA_BY_ID } from '../../api';

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
  const navigate = useNavigate();

  const [data, setData] = React.useState(null);

  const onFinish = async (values) => {
    const { url, options } = UPDATE_ANTENA(values.antena, id);
    await fetch(url, options);
    navigate('/antenas');
  };

  React.useEffect(() => {
    (async () => {
      const { url, options } = GET_ANTENA_BY_ID(id);
      const response = await fetch(url, options);
      const json = await response.json();
      // if (!response.ok && json?.antenas?.length === 0) return null;
      setData(json);
    })();
  }, [id]);
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
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}

        // validateMessages={validateMessages}
      >
        <Form.Item
          name={['antena', 'nome']}
          label="Nome"
          rules={[{ required: true }]}
        >
          <Input placeholder={data?.nome} />
        </Form.Item>
        {/* <div>Valor atual: {data?.nome}</div> */}

        <Form.Item
          name={['antena', 'latitude']}
          label="Latitude"
          rules={[{ required: true }, { type: 'number', min: -90, max: 90 }]}
        >
          <InputNumber placeholder={data?.latitude} />
        </Form.Item>

        <Form.Item
          name={['antena', 'longitude']}
          label="Longitude"
          rules={[{ required: true }, { type: 'number', min: -90, max: 90 }]}
        >
          <InputNumber placeholder={data?.longitude} />
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
