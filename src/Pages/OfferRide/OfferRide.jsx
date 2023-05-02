import { React, useState } from 'react';
import { Select, Button, Form, DatePicker, InputNumber, TimePicker } from 'antd';
import { createRide } from '../../utils/db'
import { useAuth } from "../../utils/AuthProvider";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const { Option } = Select;

const OfferRide = () => {

  const { user } = useAuth();

  const [open, setOpen] = useState(false);

  const createNew = async (fieldsValue) => {
    // e.preventDefault();
    // Should format date value before submit.
    const values = {
      ...fieldsValue,
      'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
      'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
    };
    console.log('Received values of form: ', values);

    const ride = {
      owner: {
        name: user.name,
        phone: user.phone,
      },
      from: "Lourdes",
      to: "UFMG",
      time: new Date(),
      seats: 2,
    }

    try{
      const id = await createRide(ride);
      console.log(id);
    }
    catch(e) {
      console.error(e);
    };

}

  return (
    <div>
      <Form.Provider
        onFormFinish={(name, { values, forms }) => {
          if (name === 'userForm') {
          const { basicForm } = forms;
          const users = basicForm.getFieldValue('users') || [];
          basicForm.setFieldsValue({
            users: [...users, values],
          });
          setOpen(false);
        }
      }}
    >
      <Form
        {...layout}
        name="basicForm"
        onFinish={createNew}
        style={{
          maxWidth: 600,
        }}>
        <Form.Item
          name="from"
          label="Partida"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Selecione o Local de Partida!',
            },]}>
          <Select placeholder="Selecione o Local de Partida">
            <Option value="ufmg">UFMG</Option>
            <Option value="olegario">Olegário</Option>
            <Option value="raja">Raja</Option>
            <Option value="lourdes">Lourdes</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="to"
          label="Destino"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Selecione o Local de Destino!',
            },]}>
          <Select placeholder="Selecione o Local de Destino">
            <Option value="ufmg">UFMG</Option>
            <Option value="olegario">Olegário</Option>
            <Option value="raja">Raja</Option>
            <Option value="lourdes">Lourdes</Option>
          </Select>
        </Form.Item>
        <Form.Item 
          name="time_data"
          label="Data" 
          rules={[
            {
              required: true,
              message: 'Selecione a data!',
            },
          ]}>
            <DatePicker placeholder="Selecione a data"/>
        </Form.Item>
        <Form.Item 
          name="time_horario"
          label="Horário" 
          rules={[
            {
              required: true,
              message: 'Selecione o horário!',
            },
          ]}>
            <TimePicker placeholder="Selecione o horário"/>
        </Form.Item>
        <Form.Item 
          name = "seats"
          label="Vagas"
          rules={[
            {
              required: true,
              message: 'Selecione a quantidade de vagas disponíveis!',
            },]}>
          <InputNumber />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button htmlType="submit" type="primary">
            Cadastrar carona
          </Button>
        </Form.Item>
      </Form>
    </Form.Provider> 
    </div>
  );
};

export default OfferRide;