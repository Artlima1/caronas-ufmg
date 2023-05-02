import { React, useState } from 'react';
import { Button, Form, Input } from 'antd';
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

const OfferRide = () => {

  const { user } = useAuth();

  const [open, setOpen] = useState(false);

  const onFinish = (values) => {
    console.log('Finish:', values.group);
  };

  const createNew = async (e) => {
    e.preventDefault();

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
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item
          name="group"
          label="Group Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
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