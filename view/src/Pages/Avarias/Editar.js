import React from 'react';
import { Form, Input, Select, Button, DatePicker, Switch } from 'antd';
import { GET_AVARIA_BY_ID, UPDATE_AVARIA } from '../../api';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { GET_ALL_ANTENA, GET_ALL_UTILIZADOR } from '../../api';
import moment from 'moment';
const { Option } = Select;

const Editar = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [dataAntena, setDataAntena] = React.useState([]);
  const [dataUtilizador, setDataUtilizador] = React.useState([]);
  // const [data, setData] = React.useState(null);

  const onFinish = async ({ avaria }) => {
    const avariaBody = {
      ...avaria,
      status: +avaria.status,
      data_abertura: +avaria.data_abertura.format('X'),
      data_conclusao: avaria.data_conclusao
        ? +avaria.data_conclusao.format('X')
        : undefined,
    };

    console.log(avariaBody);

    const { url, options } = UPDATE_AVARIA(avariaBody, id);

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
  React.useEffect(() => {
    (async () => {
      const { url, options } = GET_AVARIA_BY_ID(id);
      const response = await fetch(url, options);
      const json = await response.json();
      // if (!response.ok && json?.antenas?.length === 0) return null;
      // setData(json);

      form.setFieldsValue({
        avaria: {
          nome: json?.nome,
          id_utilizador: json?.id_utilizador,
          id_antena: json?.id_antena,
          status: json?.status,
          data_abertura: moment(
            new Date(json?.data_abertura * 1000).toISOString(),
          ),
          data_conclusao: json?.data_conclusao
            ? moment(new Date(json?.data_conclusao * 1000).toISOString())
            : null,
          detalhe: json?.detalhe,
        },
      });
    })();
  }, [id, form]);

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

      <h2>Editar Avaria</h2>

      <Form
        // {...layout}
        form={form}
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
          <Input disabled />
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
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item name={['avaria', 'data_abertura']} label="Data Abertura">
          <DatePicker
            disabled
            showTime={{ format: 'HH:mm' }}
            format="YYYY-MM-DD HH:mm"
          />
        </Form.Item>

        <Form.Item name={['avaria', 'data_conclusao']} label="Data Conclusão">
          <DatePicker
            showTime={{ format: 'HH:mm' }}
            format="YYYY-MM-DD HH:mm"
          />
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
