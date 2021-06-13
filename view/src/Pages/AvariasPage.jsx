import React from 'react';
import Layout from 'antd/lib/layout/layout';

import { Form, Input, InputNumber, Button } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
};

import CustomGrid from '../Components/CustomGrid';

const AvariasPage = () => {
  return <CustomGrid>AvariasPage</CustomGrid>;
};

export default AvariasPage;
